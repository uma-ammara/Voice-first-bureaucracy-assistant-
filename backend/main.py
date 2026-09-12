import os
from dotenv import load_dotenv

# Explicit path — removes all ambiguity about where load_dotenv() searches,
# especially important on Windows where `uvicorn --reload` runs your app
# inside a subprocess.
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), ".env"))

# TEMPORARY DEBUG LINE - remove once this is confirmed working
print("DEBUG - GEMINI_API_KEY loaded:", repr(os.getenv("GEMINI_API_KEY")))

from fastapi import FastAPI, UploadFile, File, HTTPException
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import Response
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

@app.get("/")
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