# Voice-First Bureaucracy Assistant — Frontend

## Setup

```bash
npm install
cp .env.example .env
# .env already points to http://localhost:8000 — change it later for the deployed backend
npm run dev
```

Visit http://localhost:5173

## Important: matches your actual backend

- `POST /api/chat` — sends `{ query: "..." }`, expects `{ service: {...}, response: {...} }`
- `POST /api/transcribe` — sends the audio as multipart field named `file` (matches your backend's `File(...)` parameter name)
- `POST /api/speak` — sends `{ text: "..." }`, expects an `audio/mpeg` blob back

## Note for the team

The AI member's Gemini prompt doesn't currently enforce a strict JSON schema, so field
names in the `response` object may vary between answers. `ChatWindow.jsx`'s
`normalizeAnswer()` function already handles this by falling back to the verified
`service` (knowledge base) fields whenever a field is missing from the AI's response —
but it would be safer if the AI member adds a `response_schema` to the Gemini call so the
field names are guaranteed every time.

Expected/handled response field names right now:
`service`, `department`, `summary`, `documents`, `steps`, `fee`,
`time_processing` / `processing_time`, `official_source`, `action_next` / `next_action`, `disclaimer`.

If the AI member changes these field names, update `normalizeAnswer()` in
`src/components/ChatWindow.jsx` to match.
