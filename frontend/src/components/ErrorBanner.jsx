import { useLanguage } from "../i18n/LanguageContext";

export default function ErrorBanner({ message, onRetry }) {
  const { t } = useLanguage();
  return (
    <div className="bg-alert-light border-r-4 border-alert rounded px-3 py-2.5 flex items-center justify-between gap-3">
      <p className="urdu-text text-sm text-alert flex-1">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="shrink-0 text-xs font-sans font-medium text-alert underline underline-offset-2"
        >
          {t.assistantRetry}
        </button>
      )}
    </div>
  );
}
