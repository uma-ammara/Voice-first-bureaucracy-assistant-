from dotenv import load_dotenv
load_dotenv()  # MUST run before importing ai_service/speech_service

import gradio as gr
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
from pydantic import BaseModel

from knowledge.knowledge_service import find_service
from services.ai_service import generate_answer
from services.speech_service import transcribe, synthesize

app = FastAPI(title="Voice-First Bureaucracy Assistant Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    query: str

class SpeakRequest(BaseModel):
    text: str

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/api-status")
def read_root():
    return {"status": "ok", "message": "Voice-First Bureaucracy Assistant Backend API"}

@app.post("/api/transcribe")
async def transcribe_audio(file: UploadFile = File(...)):
    try:
        audio_bytes = await file.read()
        text = transcribe(audio_bytes, file.filename, file.content_type)
        return {"text": text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"STT Error: {str(e)}")

@app.post("/api/chat")
async def process_chat(request: ChatRequest):
    try:
        context_service = find_service(request.query)
        structured_json = generate_answer(request.query, context_service)
        return {"service": context_service, "response": structured_json}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"LLM Error: {str(e)}")

@app.post("/api/speak")
async def text_to_speech(payload: SpeakRequest):
    try:
        audio_bytes = synthesize(payload.text)
        return Response(content=audio_bytes, media_type="audio/mpeg")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"TTS Error: {str(e)}")


# --- Hugging Face Spaces requires a Gradio (or Streamlit) app to run without
# --- Docker. This tiny status page is mounted alongside our real API so the
# --- Space has something to display, while all /api/* routes above keep
# --- working exactly as they do locally.
with gr.Blocks(title="Bureaucracy Assistant API") as demo:
    gr.Markdown(
        "## Voice-First Bureaucracy Assistant — Backend is running ✅\n\n"
        "This Space hosts the API only (no visual UI here).\n\n"
        "- Health check: `/health`\n"
        "- Chat: `POST /api/chat`\n"
        "- Transcribe: `POST /api/transcribe`\n"
        "- Speak: `POST /api/speak`\n\n"
        "The actual frontend is deployed separately on Vercel."
    )

app = gr.mount_gradio_app(app, demo, path="/")

if __name__ == "__main__":
    demo.launch(server_name="0.0.0.0", server_port=7860, show_error=True)