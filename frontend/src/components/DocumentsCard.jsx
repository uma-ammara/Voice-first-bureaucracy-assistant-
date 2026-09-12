import { useLanguage } from "../i18n/LanguageContext";

export default function DocumentsCard({ documents }) {
  const { t } = useLanguage();
  if (!documents || documents.length === 0) return null;

  return (
    <div className="bg-white rounded-lg border-r-4 border-teal px-4 py-3">
      <p className="text-[11px] font-sans font-semibold text-teal tracking-wide mb-2" dir="ltr">
        {t.labelDocuments}
      </p>
      <ul className="space-y-1.5">
        {documents.map((doc, i) => (
          <li key={i} className="urdu-text text-sm text-ink flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
            <span>{doc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
