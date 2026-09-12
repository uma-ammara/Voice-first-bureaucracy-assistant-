import os
import io
from dotenv import load_dotenv
from groq import Groq
from gtts import gTTS

load_dotenv()  # safety net in case this module is imported before main.py's load_dotenv()

groq_client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def transcribe(audio_bytes: bytes, filename: str, content_type: str) -> str:
    file_tuple = (filename or "speech.wav", audio_bytes, content_type or "audio/wav")
    transcription = groq_client.audio.transcriptions.create(
        file=file_tuple,
        model="whisper-large-v3",
        response_format="json"
    )
    return transcription.text

def synthesize(text: str) -> bytes:
    tts = gTTS(text=text, lang='ur')
    fp = io.BytesIO()
    tts.write_to_fp(fp)
    fp.seek(0)
    return fp.read()