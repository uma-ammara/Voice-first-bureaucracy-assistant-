import { useLanguage } from "../i18n/LanguageContext";

function WaveformDemo() {
  const heights = [0.4, 0.7, 1, 0.55, 0.85, 0.35, 0.6, 0.95, 0.5, 0.3];
  return (
    <div className="flex items-end gap-[3px] h-7">
      {heights.map((h, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-teal/70 animate-wave"
          style={{ height: `${h * 100}%`, animationDelay: `${i * 0.07}s` }}
        />
      ))}
    </div>
  );
}

function DemoCard() {
  const { t, isUrdu } = useLanguage();
  return (
    <div className="relative w-full max-w-sm animate-rise-in">
      {/* perforated document edge, evoking an official form */}
      <div className="rounded-2xl bg-white shadow-[0_20px_45px_-20px_rgba(15,92,86,0.35)] border border-teal-light overflow-hidden">
        <div className="bg-teal px-5 py-3 flex items-center justify-between">
          <span className="text-white text-xs font-sans font-medium tracking-wide" dir="ltr">
            {t.heroDemoLabel}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-sans font-medium text-white" dir="ltr">
            <span className="h-1.5 w-1.5 rounded-full bg-ochre" />
            {t.heroDemoVerified}
          </span>
        </div>

        <div className="px-5 py-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-ochre-light flex items-center justify-center shrink-0">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <rect x="4.5" y="0.5" width="4" height="7" rx="2" fill="#C98A2C" />
                <path d="M2 6C2 8.2 3.8 10 6 10.3M11 6C11 8.2 9.2 10 7 10.3" stroke="#C98A2C" strokeWidth="1.1" strokeLinecap="round" />
              </svg>
            </div>
            <p className={`text-sm text-ink flex-1 ${isUrdu ? "urdu-text" : ""}`} dir="auto">
              {t.heroDemoQuery}
            </p>
          </div>

          <WaveformDemo />

          <div className="rounded-xl bg-teal-light px-4 py-3">
            <p className="text-[10px] font-sans font-semibold text-teal-dark tracking-wide mb-1" dir="ltr">
              {t.heroDemoAnswerLabel}
            </p>
            <p className={`text-sm text-ink ${isUrdu ? "urdu-text" : ""}`} dir="auto">
              {t.heroDemoAnswer}
            </p>
          </div>
        </div>
      </div>

      {/* floating service chip */}
      <div className="hidden sm:flex absolute -bottom-5 -right-4 items-center gap-2 rounded-full bg-white border border-ochre/30 shadow-lg px-3.5 py-2">
        <span className="h-2 w-2 rounded-full bg-success" />
        <span className="text-xs font-sans font-medium text-ink/70" dir="ltr">NADRA</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t, isUrdu } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-light/60 via-paper to-paper -z-10" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-sans font-medium text-teal-dark mb-4" dir={isUrdu ? "rtl" : "ltr"}>
            {t.heroEyebrow}
          </p>
          <h1
            className={`font-semibold text-ink leading-tight ${
              isUrdu ? "urdu-text text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"
            }`}
          >
            {t.heroTitle}
          </h1>
          <p className={`mt-5 text-ink/70 max-w-lg ${isUrdu ? "urdu-text text-base" : "text-lg"}`}>
            {t.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#assistant"
              className="rounded-full bg-teal text-white font-sans font-medium px-6 py-3 hover:bg-teal-dark transition-colors"
            >
              {t.heroCtaPrimary}
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-teal/25 text-teal-dark font-sans font-medium px-6 py-3 hover:bg-teal-light transition-colors"
            >
              {t.heroCtaSecondary}
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <DemoCard />
        </div>
      </div>
    </section>
  );
}
