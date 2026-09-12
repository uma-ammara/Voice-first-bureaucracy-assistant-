// src/components/LanguageToggle.jsx
import { useLanguage } from "../i18n/LanguageContext";

export default function LanguageToggle({ className = "" }) {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      aria-label="Switch language"
      className={`inline-flex items-center rounded-full p-1 border border-teal/30 bg-teal-light/30 shadow-2xs overflow-hidden shrink-0 ${className}`}
    >
      <span
        className={`px-3 py-1 rounded-full text-xs font-sans font-semibold transition-all ${
          lang === "en" ? "bg-teal text-white shadow-xs" : "text-ink/60 hover:text-ink"
        }`}
      >
        English
      </span>
      <span
        dir="rtl"
        className={`urdu-text px-3 py-1 rounded-full text-sm font-medium transition-all ${
          lang === "ur" ? "bg-teal text-white shadow-xs" : "text-ink/60 hover:text-ink"
        }`}
      >
        اردو
      </span>
    </button>
  );
}