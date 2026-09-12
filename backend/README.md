# Voice-First Bureaucracy Assistant — Backend

## Setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env          # paste your real GEMINI_API_KEY and GROQ_API_KEY

uvicorn main:app --reload --port 8000
# Visit http://localhost:8000/docs
```

## What was fixed from the original version

1. **Split into proper files by module ownership** — `main.py` (Backend) now only wires
   routes together; the actual AI/Voice logic lives in `services/ai_service.py` and
   `services/speech_service.py` (Voice & AI member's files); RAG logic stays in
   `knowledge/knowledge_service.py` (RAG member's file).
2. **Real embeddings instead of random vectors** — `knowledge_service.py` previously used
   `np.random.rand()` to fake FAISS vectors. It now uses `sentence-transformers`
   (`paraphrase-multilingual-MiniLM-L12-v2`) so semantic search is real.
3. **Fixed the `/api/speak` field mismatch** — it now uses its own `SpeakRequest(text: str)`
   model instead of reusing `ChatRequest(query: str)`, matching what the frontend sends.
4. **Safe JSON parsing** — `generate_answer()` in `ai_service.py` now wraps
   `json.loads()` in a try/except so a malformed Gemini response returns a clean error
   instead of crashing the whole request with a 500.
5. **Added a proper `GET /health` endpoint** — separate from `/`, needed to ping the
   Render server awake before a demo.
6. **`services.json` now has all 5 services** — CNIC correction, FIR registration,
   domicile certificate, birth certificate, and land record (Fard). Any fee or timing
   that isn't officially confirmed is marked "verify at official office" instead of
   guessing.
7. **`requirements.txt` completed** — added `sentence-transformers`, which is needed for
   the real-embeddings fix.

## Note for the AI/Voice member

The Gemini prompt in `ai_service.py` now explicitly lists the exact JSON keys expected
(`service, summary, documents, steps, fee, department, time_processing,
official_source, action_next, disclaimer`) so the frontend can reliably render the
answer cards. If you change these key names, let the Frontend member know so they can
update `normalizeAnswer()` in the frontend's `ChatWindow.jsx`.

## Endpoints

| Endpoint | Input | Output |
|---|---|---|
| `GET /health` | none | `{"status": "ok"}` |
| `POST /api/chat` | `{"query": "..."}` | `{"service": {...}, "response": {...}}` |
| `POST /api/transcribe` | multipart form, field name `file` | `{"text": "..."}` |
| `POST /api/speak` | `{"text": "..."}` | `audio/mpeg` stream |

## Test commands

```bash
curl http://localhost:8000/health

curl -X POST http://localhost:8000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"query": "CNIC mein naam ghalat hai"}'

curl -X POST http://localhost:8000/api/transcribe \
  -F "file=@sample.webm"

curl -X POST http://localhost:8000/api/speak \
  -H "Content-Type: application/json" \
  -d '{"text": "Salam"}' --output out.mp3
```
