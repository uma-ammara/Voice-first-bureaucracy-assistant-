import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function TextInput({ onSend, disabled }) {
  const { t } = useLanguage();
  const [value, setValue] = useState("");

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  };

  return (
    <div className="flex items-center gap-2 flex-1 bg-paper rounded-full px-4 py-1 border border-teal-light focus-within:border-teal/40 transition-colors">
      <input
        type="text"
        dir="auto"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder={t.assistantInputPlaceholder}
        disabled={disabled}
        className="urdu-text flex-1 bg-transparent outline-none text-ink placeholder:text-ink/40 disabled:opacity-50 py-2"
      />
      <button
        onClick={handleSend}
        disabled={disabled || !value.trim()}
        aria-label="Send"
        className="shrink-0 h-9 w-9 rounded-full bg-teal text-white flex items-center justify-center disabled:opacity-30 hover:bg-teal-dark transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 8L14 8M14 8L9 3M14 8L9 13" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
