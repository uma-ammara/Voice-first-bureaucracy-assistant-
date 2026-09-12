import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// POST /api/chat  ->  body: { query: string }
// returns: { service: {...knowledge base entry}, response: {...AI generated JSON} }
export const askQuestion = (query) =>
  axios.post(`${BASE_URL}/api/chat`, { query }).then((res) => res.data);

// POST /api/transcribe  ->  multipart form, field name MUST be "file"
// returns: { text: string }
export const transcribeAudio = (audioBlob, filename = "speech.webm") => {
  const formData = new FormData();
  formData.append("file", audioBlob, filename);
  return axios
    .post(`${BASE_URL}/api/transcribe`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res) => res.data);
};

// POST /api/speak  ->  body: { text: string }
// returns: audio/mpeg blob
export const speakText = (text) =>
  axios
    .post(
      `${BASE_URL}/api/speak`,
      { text },
      { responseType: "blob" }
    )
    .then((res) => res.data);

export const pingHealth = () =>
  axios.get(`${BASE_URL}/health`).then((res) => res.data);
