import { useLanguage } from "../i18n/LanguageContext";

export default function StepsCard({ steps }) {
  const { t } = useLanguage();
  if (!steps || steps.length === 0) return null;

  return (
    <div className="bg-white rounded-lg border-r-4 border-ochre px-4 py-3">
      <p className="text-[11px] font-sans font-semibold text-ochre tracking-wide mb-2" dir="ltr">
        {t.labelProcedure}
      </p>
      <ol className="space-y-2">
        {steps.map((step, i) => (
          <li key={i} className="urdu-text text-sm text-ink flex items-start gap-2.5">
            <span className="shrink-0 mt-0.5 h-5 w-5 rounded-full bg-ochre-light text-ochre text-xs font-sans font-semibold flex items-center justify-center">
              {i + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
