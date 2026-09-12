import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "gsg-lang";

function getInitialLang() {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage?.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "ur") return stored;
  return "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  const dict = translations[lang];
  const dir = dict.dir;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.title = dict.docTitle;
    try {
      window.localStorage?.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore storage errors (private browsing, etc.)
    }
  }, [lang, dir, dict.docTitle]);

  const value = useMemo(
    () => ({
      lang,
      dir,
      isUrdu: lang === "ur",
      t: dict,
      setLang,
      toggleLang: () => setLang((prev) => (prev === "en" ? "ur" : "en")),
    }),
    [lang, dir, dict]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
