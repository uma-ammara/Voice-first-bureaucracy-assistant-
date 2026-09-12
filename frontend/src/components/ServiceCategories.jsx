import { useLanguage } from "../i18n/LanguageContext";

const ICONS = {
  cnic: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="1.5" y="3.5" width="17" height="13" rx="2" stroke="#0F5C56" strokeWidth="1.3" />
      <circle cx="6.5" cy="10" r="2" stroke="#0F5C56" strokeWidth="1.2" />
      <path d="M4 14C4 12.5 5.1 11.7 6.5 11.7C7.9 11.7 9 12.5 9 14" stroke="#0F5C56" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M11.5 8H16.5M11.5 10.5H16.5M11.5 13H14.5" stroke="#0F5C56" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  birth: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 8.5C4 6 6 4 8.5 4C9.5 4 10.4 4.3 11.1 4.9" stroke="#0F5C56" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="10" cy="10.5" r="6" stroke="#0F5C56" strokeWidth="1.3" />
      <path d="M7.3 10.8C7.3 9.6 8.5 8.9 10 8.9C11.5 8.9 12.7 9.6 12.7 10.8" stroke="#0F5C56" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="10" cy="7.3" r="1.1" fill="#0F5C56" />
    </svg>
  ),
  police: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5L16.5 5V9.5C16.5 13.5 13.7 16.6 10 17.5C6.3 16.6 3.5 13.5 3.5 9.5V5L10 2.5Z" stroke="#0F5C56" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M7.3 10L9.3 12L13 8" stroke="#0F5C56" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  land: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2.5 17.5L4.5 6.5L8 4L15.5 8L17.5 17.5" stroke="#0F5C56" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M2 17.5H18" stroke="#0F5C56" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M7 17.5V11.5H10.5V17.5" stroke="#0F5C56" strokeWidth="1.2" />
    </svg>
  ),
  passport: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="4" y="2" width="12" height="16" rx="1.5" stroke="#0F5C56" strokeWidth="1.3" />
      <circle cx="10" cy="8.5" r="2.6" stroke="#0F5C56" strokeWidth="1.1" />
      <path d="M6.8 14C6.8 12.5 8.2 11.7 10 11.7C11.8 11.7 13.2 12.5 13.2 14" stroke="#0F5C56" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  ),
  forms: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 2.5H12L16 6.5V17.5H5V2.5Z" stroke="#0F5C56" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M12 2.5V6.5H16" stroke="#0F5C56" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M7.5 10.5H13.5M7.5 13H13.5M7.5 15.3H11" stroke="#0F5C56" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  ),
};

export default function ServiceCategories({ onSelect }) {
  const { t, isUrdu } = useLanguage();

  const categories = [
    { key: "cnic", title: t.serviceCnicTitle, desc: t.serviceCnicDesc, prompt: t.serviceCnicPrompt },
    { key: "birth", title: t.serviceBirthTitle, desc: t.serviceBirthDesc, prompt: t.serviceBirthPrompt },
    { key: "police", title: t.servicePoliceTitle, desc: t.servicePoliceDesc, prompt: t.servicePolicePrompt },
    { key: "land", title: t.serviceLandTitle, desc: t.serviceLandDesc, prompt: t.serviceLandPrompt },
    { key: "passport", title: t.servicePassportTitle, desc: t.servicePassportDesc, prompt: t.servicePassportPrompt },
    { key: "forms", title: t.serviceFormsTitle, desc: t.serviceFormsDesc, prompt: t.serviceFormsPrompt },
  ];

  return (
    <section id="services" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="max-w-xl mb-10">
        <p className="text-xs font-sans font-medium text-teal-dark mb-2" dir={isUrdu ? "rtl" : "ltr"}>
          {t.servicesEyebrow}
        </p>
        <h2 className={`font-semibold text-ink ${isUrdu ? "urdu-text text-2xl sm:text-3xl" : "text-2xl sm:text-3xl"}`}>
          {t.servicesTitle}
        </h2>
        <p className={`mt-3 text-ink/65 ${isUrdu ? "urdu-text" : ""}`}>{t.servicesSubtitle}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => onSelect?.(cat.prompt)}
            className="text-start rounded-xl bg-white border border-teal-light p-5 hover:border-teal/40 hover:shadow-md transition-all"
          >
            <div className="h-10 w-10 rounded-lg bg-teal-light flex items-center justify-center mb-4">
              {ICONS[cat.key]}
            </div>
            <h3 className={`font-semibold text-ink mb-1 ${isUrdu ? "urdu-text text-base" : "text-sm"}`}>
              {cat.title}
            </h3>
            <p className={`text-ink/60 ${isUrdu ? "urdu-text text-sm" : "text-sm"}`}>{cat.desc}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
