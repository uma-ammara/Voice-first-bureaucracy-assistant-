import { useLanguage } from "../i18n/LanguageContext";

export default function ServiceCard({ serviceName, department, summary, nextAction }) {
  const { t } = useLanguage();
  return (
    <div className="bg-white rounded-lg border border-teal-light overflow-hidden">
      <div className="bg-teal px-4 py-2.5 flex items-center justify-between">
        <span className="urdu-text text-white text-base font-semibold">{serviceName || t.fallbackServiceName}</span>
        {department && (
          <span className="text-[11px] font-sans font-medium text-white/80 tracking-wide" dir="ltr">
            {department}
          </span>
        )}
      </div>

      {summary && (
        <p className="urdu-text text-sm text-ink/80 px-4 pt-3 pb-1">{summary}</p>
      )}

      {nextAction && (
        <div className="mx-4 my-3 bg-ochre-light border-r-4 border-ochre rounded px-3 py-2.5">
          <p className="text-[11px] font-sans font-semibold text-ochre tracking-wide mb-1" dir="ltr">
            {t.labelNextStep}
          </p>
          <p className="urdu-text text-sm text-ink font-medium">{nextAction}</p>
        </div>
      )}
    </div>
  );
}
