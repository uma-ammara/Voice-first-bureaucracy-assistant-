// src/components/AssistantSection.jsx
import ChatWindow from "./ChatWindow";
import { useLanguage } from "../i18n/LanguageContext";

export default function AssistantSection({ pendingQuery, onPendingQueryHandled }) {
  const { t, isUrdu } = useLanguage();

  return (
    <section id="assistant" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div className="max-w-xl">
          <p className="text-xs font-sans font-semibold text-teal-dark mb-2 uppercase tracking-wide" dir={isUrdu ? "rtl" : "ltr"}>
            {t.assistantEyebrow}
          </p>
          <h2 className={`font-bold text-ink ${isUrdu ? "urdu-text text-2xl sm:text-3xl" : "text-2xl sm:text-3xl"}`}>
            {t.assistantTitle}
          </h2>
          <p className={`mt-2.5 text-ink/70 ${isUrdu ? "urdu-text" : ""}`}>{t.assistantSubtitle}</p>
        </div>

        {/* Live Chat Status Badge */}
        <div className="inline-flex items-center gap-2.5 bg-white border border-teal/25 shadow-xs rounded-full px-4 py-1.5 w-fit">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
          </span>
          <span className="text-xs font-sans font-medium text-ink/80" dir="ltr">
            AI Assistant Live & Ready
          </span>
        </div>
      </div>

      {/* Main Chat Box Container with Deeper Contrast */}
      <div className="rounded-2xl bg-white border-2 border-teal/20 shadow-xl max-w-3xl overflow-hidden">
        <ChatWindow externalQuery={pendingQuery} onExternalQueryHandled={onPendingQueryHandled} />
      </div>
    </section>
  );
}