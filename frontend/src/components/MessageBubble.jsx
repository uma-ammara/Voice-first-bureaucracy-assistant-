import ServiceCard from "./ServiceCard";
import DocumentsCard from "./DocumentsCard";
import StepsCard from "./StepsCard";
import FeeCard from "./FeeCard";
import SourceLink from "./SourceLink";
import ErrorBanner from "./ErrorBanner";
import LoadingIndicator from "./LoadingIndicator";

export function UserMessageBubble({ text }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[85%] bg-teal text-white rounded-2xl rounded-tr-sm px-4 py-2.5">
        <p className="urdu-text text-sm" dir="auto">{text}</p>
      </div>
    </div>
  );
}

export function AssistantMessageBubble({ message, onRetry }) {
  if (message.status === "loading") {
    return (
      <div className="flex justify-end">
        <LoadingIndicator />
      </div>
    );
  }

  if (message.status === "error") {
    return (
      <div className="flex justify-end w-full">
        <div className="w-full max-w-[90%]">
          <ErrorBanner message={message.errorText} onRetry={() => onRetry(message.originalQuery)} />
        </div>
      </div>
    );
  }

  const a = message.answer;

  return (
    <div className="flex justify-end">
      <div className="w-full max-w-[90%] space-y-2">
        <ServiceCard
          serviceName={a.serviceName}
          department={a.department}
          summary={a.summary}
          nextAction={a.nextAction}
        />
        <DocumentsCard documents={a.documents} />
        <StepsCard steps={a.steps} />
        <FeeCard fee={a.fee} processingTime={a.processingTime} disclaimer={a.disclaimer} />
        <SourceLink officialSource={a.officialSource} speakContent={a.summary || a.nextAction} />
      </div>
    </div>
  );
}
