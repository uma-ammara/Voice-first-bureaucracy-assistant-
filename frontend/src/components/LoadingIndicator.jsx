import { useLanguage } from "../i18n/LanguageContext";

export default function LoadingIndicator() {
  const { t } = useLanguage();
  return (
    <div className="flex items-center gap-2 text-ink/50 text-sm py-2 px-1">
      <span className="flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-teal animate-bounce [animation-delay:-0.3s]" />
        <span className="h-1.5 w-1.5 rounded-full bg-teal animate-bounce [animation-delay:-0.15s]" />
        <span className="h-1.5 w-1.5 rounded-full bg-teal animate-bounce" />
      </span>
      <span className="urdu-text text-sm">{t.assistantLoading}</span>
    </div>
  );
}
