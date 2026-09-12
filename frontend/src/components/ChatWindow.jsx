// src/components/ChatWindow.jsx
import { useEffect, useRef, useState } from "react";
import { UserMessageBubble, AssistantMessageBubble } from "./MessageBubble";
import TextInput from "./TextInput";
import MicButton from "./MicButton";
import { askQuestion } from "../api/api";
import { useLanguage } from "../i18n/LanguageContext";

function normalizeAnswer(raw) {
  const service = raw?.service || {};
  const response = raw?.response || {};

  return {
    serviceName: response.service || service.service_name,
    department: response.department || service.department,
    summary: response.summary,
    documents: response.documents || service.required_documents,
    steps: response.steps || service.steps,
    fee: response.fee || service.fee,
    processingTime: response.time_processing || response.processing_time || service.processing_time,
    officialSource: response.official_source || service.official_url,
    nextAction: response.action_next || response.next_action,
    disclaimer: response.disclaimer || service.important_note,
  };
}

export default function ChatWindow({ externalQuery, onExternalQueryHandled }) {
  const { t } = useLanguage();
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages]);

  const sendQuestion = async (query) => {
    const userMsg = { role: "user", text: query };
    const loadingMsg = { role: "assistant", status: "loading" };
    setMessages((prev) => [...prev, userMsg, loadingMsg]);

    try {
      const raw = await askQuestion(query);

      if (raw?.error) {
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: "assistant", status: "error", errorText: raw.message || t.assistantErrorGeneric, originalQuery: query },
        ]);
        return;
      }

      const answer = normalizeAnswer(raw);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: "assistant", status: "done", answer },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "assistant",
          status: "error",
          errorText: t.assistantErrorService,
          originalQuery: query,
        },
      ]);
    }
  };

  useEffect(() => {
    if (externalQuery) {
      sendQuestion(externalQuery);
      onExternalQueryHandled?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalQuery]);

  const isBusy = messages[messages.length - 1]?.status === "loading";

  const handleVoiceError = (text) => {
    setMessages((prev) => [
      ...prev,
      { role: "assistant", status: "error", errorText: text, originalQuery: null },
    ]);
  };

  const suggestedQuestions = [
    t.serviceCnicPrompt,
    t.servicePolicePrompt,
    t.serviceBirthPrompt,
  ];

  return (
    <div className="flex flex-col flex-1 w-full bg-paper/30">
      {/* Chat Messages / Empty State Area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-4 max-h-[60vh] min-h-[300px]">
        {messages.length === 0 && (
          <div className="text-center py-8 px-4 my-auto">
            {/* Chatbot Avatar Icon */}
            <div className="mx-auto w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center mb-3 shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 0 1 7.54 16.6l1.46 2.4-2.4-1.46A10 10 0 1 1 12 2z"></path>
              </svg>
            </div>
            <p className={`text-ink font-semibold text-base ${"urdu-text"}`} dir="auto">
              {t.assistantEmptyTitle}
            </p>
            <p className="urdu-text text-ink/60 text-sm mt-1 max-w-md mx-auto" dir="auto">
              {t.assistantEmptyBody}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => sendQuestion(q)}
                  className="urdu-text text-xs sm:text-sm rounded-full border border-teal/30 bg-white text-teal-dark px-4 py-2 hover:bg-teal hover:text-white transition-all shadow-2xs font-medium"
                  dir="auto"
                >
                  💬 {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) =>
          m.role === "user" ? (
            <UserMessageBubble key={i} text={m.text} />
          ) : (
            <AssistantMessageBubble key={i} message={m} onRetry={sendQuestion} />
          )
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input Footer Bar with Clear Dark Border */}
      <div className="border-t-2 border-teal/15 bg-white px-4 sm:px-6 py-3.5 shadow-sm">
        <div className="flex items-center gap-3">
          <TextInput onSend={sendQuestion} disabled={isBusy} />
          <MicButton
            onTranscript={(text) => sendQuestion(text)}
            onError={handleVoiceError}
            disabled={isBusy}
          />
        </div>
      </div>
    </div>
  );
}