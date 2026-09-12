import { useLanguage } from "../i18n/LanguageContext";

function StepIcon({ kind }) {
  if (kind === "ask") {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="7.5" y="2.5" width="7" height="11" rx="3.5" stroke="#0b5a53ff" strokeWidth="1.4" />
        <path d="M4 10.5C4 14.1 7.1 17 11 17C14.9 17 18 14.1 18 10.5" stroke="#0c615aff" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M11 17V19.5" stroke="#0c5e57ff" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "understand") {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8.5" stroke="#0F5C56" strokeWidth="1.4" />
        <path d="M8.2 9C8.2 7.6 9.4 6.6 11 6.6C12.6 6.6 13.8 7.6 13.8 9C13.8 10.2 13 10.8 12.1 11.4C11.4 11.8 11 12.3 11 13.2" stroke="#0F5C56" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="11" cy="15.6" r="0.9" fill="#0F5C56" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M4 12.5L8.5 17L18 6" stroke="#0F5C56" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HowItWorks() {
  const { t, isUrdu } = useLanguage();

  const steps = [
    { kind: "ask", title: t.howStep1Title, desc: t.howStep1Desc },
    { kind: "understand", title: t.howStep2Title, desc: t.howStep2Desc },
    { kind: "guided", title: t.howStep3Title, desc: t.howStep3Desc },
  ];

  return (
    <section id="how-it-works" className="bg-white border-y border-teal-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-xl mb-12">
          <p className="text-xs font-sans font-medium text-teal-dark mb-2" dir={isUrdu ? "rtl" : "ltr"}>
            {t.howEyebrow}
          </p>
          <h2 className={`font-semibold text-ink ${isUrdu ? "urdu-text text-2xl sm:text-3xl" : "text-2xl sm:text-3xl"}`}>
            {t.howTitle}
          </h2>
          <p className={`mt-3 text-ink/65 ${isUrdu ? "urdu-text" : ""}`}>{t.howSubtitle}</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-6">
          {steps.map((step, i) => (
            <div key={step.kind} className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-teal-light flex items-center justify-center shrink-0">
                  <StepIcon kind={step.kind} />
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden sm:block flex-1 h-px bg-teal-light" />
                )}
              </div>
              <h3 className={`font-semibold text-ink mb-1.5 ${isUrdu ? "urdu-text text-lg" : "text-base"}`}>
                {step.title}
              </h3>
              <p className={`text-ink/60 text-sm ${isUrdu ? "urdu-text" : ""}`}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
