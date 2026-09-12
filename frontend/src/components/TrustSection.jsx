import { useLanguage } from "../i18n/LanguageContext";

export default function TrustSection() {
  const { t, isUrdu } = useLanguage();

  const cards = [t.trustCard1, t.trustCard2, t.trustCard3];

  return (
    <section id="trust" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="rounded-2xl bg-teal-dark text-white px-6 sm:px-12 py-12 sm:py-14">
        <div className="max-w-2xl">
          <p className="text-xs font-sans font-medium text-ochre mb-2" dir={isUrdu ? "rtl" : "ltr"}>
            {t.trustEyebrow}
          </p>
          <h2 className={`font-semibold ${isUrdu ? "urdu-text text-2xl sm:text-3xl" : "text-2xl sm:text-3xl"}`}>
            {t.trustTitle}
          </h2>
          <p className={`mt-4 text-white/75 ${isUrdu ? "urdu-text" : ""}`}>{t.trustBody}</p>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          {cards.map((label) => (
            <span
              key={label}
              className={`inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm ${
                isUrdu ? "urdu-text" : "font-sans"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7.3L5.3 10L11.5 3.5" stroke="#C98A2C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
