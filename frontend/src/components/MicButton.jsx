import { useRef, useState } from "react";
import { transcribeAudio } from "../api/api";
import { useLanguage } from "../i18n/LanguageContext";

export default function MicButton({ onTranscript, disabled, onError }) {
  const { t } = useLanguage();
  const [recording, setRecording] = useState(false);
  const [processing, setProcessing] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream, { mimeType: "audio/webm;codecs=opus" });
      chunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = async () => {
        stream.getTracks().forEach((track) => track.stop());
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });

        if (blob.size < 1000) {
          onError?.(t.assistantErrorShort);
          return;
        }

        setProcessing(true);
        try {
          const { text } = await transcribeAudio(blob, "speech.webm");
          if (text && text.trim()) {
            onTranscript(text.trim());
          } else {
            onError?.(t.assistantErrorUnclear);
          }
        } catch (err) {
          onError?.(t.assistantErrorUnclear);
        } finally {
          setProcessing(false);
        }
      };

      mediaRecorderRef.current = recorder;
      recorder.start();
      setRecording(true);
    } catch (err) {
      onError?.(t.assistantErrorMic);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  return (
    <button
      onMouseDown={startRecording}
      onMouseUp={stopRecording}
      onTouchStart={startRecording}
      onTouchEnd={stopRecording}
      disabled={disabled || processing}
      aria-label={recording ? t.assistantMicRecording : t.assistantMicLabel}
      title={t.assistantMicLabel}
      className={`shrink-0 h-9 w-9 rounded-full flex items-center justify-center transition-all
        ${recording ? "bg-alert scale-110" : "bg-ochre hover:bg-ochre/90"}
        disabled:opacity-30`}
    >
      {processing ? (
        <span className="h-3 w-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <rect x="5" y="1" width="5" height="8" rx="2.5" fill="white" />
          <path d="M2.5 7.5C2.5 10.26 4.74 12.5 7.5 12.5C10.26 12.5 12.5 10.26 12.5 7.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
          <line x1="7.5" y1="12.5" x2="7.5" y2="14.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}
