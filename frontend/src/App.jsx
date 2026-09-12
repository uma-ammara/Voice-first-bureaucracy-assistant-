import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServiceCategories from "./components/ServiceCategories";
import HowItWorks from "./components/HowItWorks";
import AssistantSection from "./components/AssistantSection";
import TrustSection from "./components/TrustSection";
import Footer from "./components/Footer";

export default function App() {
  // Lifted so the hero CTA and the service category cards can hand a
  // question to the assistant without changing ChatWindow's own logic.
  const [pendingQuery, setPendingQuery] = useState(null);

  const askAbout = (prompt) => {
    setPendingQuery(prompt);
    document.getElementById("assistant")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServiceCategories onSelect={askAbout} />
        <HowItWorks />
        <AssistantSection
          pendingQuery={pendingQuery}
          onPendingQueryHandled={() => setPendingQuery(null)}
        />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}
