import { useState } from "react";
import { speakText } from "../api/api";
import { useLanguage } from "../i18n/LanguageContext";

export default function SourceLink({ officialSource, speakContent }) {
  const { t } = useLanguage();
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  const handleListen = async () => {
    if (!speakContent) return;
    setError(false);
    setPlaying(true);
    try {
      const audioBlob = await speakText(speakContent);
      const url = URL.createObjectURL(audioBlob);
      const audio = new Audio(url);
      audio.onended = () => setPlaying(false);
      audio.play();
    } catch (err) {
      setError(true);
      setPlaying(false);
    }
  };

  return (
    <div className="flex items-center justify-between px-1 pt-1">
      {officialSource ? (
        <a
          href={officialSource}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-sans text-teal underline underline-offset-2"
          dir="ltr"
        >
          {t.labelOfficialSource} ↗
        </a>
      ) : <span />}

      <button
        onClick={handleListen}
        disabled={playing || !speakContent}
        className="flex items-center gap-1.5 text-xs font-sans font-medium text-teal disabled:opacity-40"
      >
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M2 5H4L7 2V11L4 8H2V5Z" fill="#0F5C56" />
          <path d="M9 4.5C9.8 5.3 9.8 7.7 9 8.5" stroke="#0F5C56" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        {playing ? t.labelPlaying : t.labelListen}
      </button>
      {error && (
        <span className="text-[11px] text-alert font-sans">{t.labelAudioUnavailable}</span>
      )}
    </div>
  );
}
