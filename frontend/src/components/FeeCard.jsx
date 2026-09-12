import { useLanguage } from "../i18n/LanguageContext";

export default function FeeCard({ fee, processingTime, disclaimer }) {
  const { t } = useLanguage();
  if (!fee && !processingTime) return null;

  return (
    <div className="bg-white rounded-lg border border-teal-light px-4 py-3">
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {fee && (
          <div>
            <p className="text-[11px] font-sans font-semibold text-ink/50 tracking-wide" dir="ltr">{t.labelFee}</p>
            <p className="urdu-text text-sm text-ink mt-0.5">{fee}</p>
          </div>
        )}
        {processingTime && (
          <div>
            <p className="text-[11px] font-sans font-semibold text-ink/50 tracking-wide" dir="ltr">{t.labelProcessingTime}</p>
            <p className="urdu-text text-sm text-ink mt-0.5">{processingTime}</p>
          </div>
        )}
      </div>
      {disclaimer && (
        <p className="urdu-text text-xs text-ink/50 mt-3 pt-2 border-t border-ink/10">{disclaimer}</p>
      )}
    </div>
  );
}
