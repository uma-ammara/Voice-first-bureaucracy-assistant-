// src/components/Header.jsx
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";

function Seal() {
  return (
    <svg width="38" height="38" viewBox="0 0 36 36" fill="none" className="shrink-0">
      <circle cx="18" cy="18" r="17" stroke="#0F5C56" strokeWidth="1.4" />
      <circle cx="18" cy="18" r="13.5" stroke="#C98A2C" strokeWidth="1" strokeDasharray="1.6 3.2" />
      <path
        d="M11.5 16.2C11.5 12.9 14.2 10.2 17.5 10.2H18.4C21.7 10.2 24.4 12.9 24.4 16.2C24.4 19.5 21.7 22.2 18.4 22.2H15.6L12.3 25.5V22.9C11.8 22.4 11.5 21.7 11.5 21V16.2Z"
        fill="#0F5C56"
      />
    </svg>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: t.navServices },
    { href: "#how-it-works", label: t.navHow },
    { href: "#trust", label: t.navAbout },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-teal/15 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 min-w-0 group">
          <Seal />
          <span className="min-w-0">
            <span className="urdu-text block text-base sm:text-lg font-bold text-ink leading-tight tracking-tight group-hover:text-teal transition-colors">
              {t.brandName}
            </span>
            <span className="block text-[11px] sm:text-xs text-teal-dark/70 font-sans font-medium tracking-wide truncate" dir="ltr">
              {t.brandTagline}
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 font-sans text-sm font-medium text-ink/75">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-teal transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <a
            href="#assistant"
            className="rounded-full bg-teal text-white text-sm font-sans font-semibold px-5 py-2.5 shadow-sm hover:bg-teal-dark hover:shadow transition-all"
          >
            {t.navAsk}
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          className="md:hidden shrink-0 h-10 w-10 rounded-full border border-teal/20 flex items-center justify-center text-teal bg-teal-light/30"
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M2 4H14M2 8H14M2 12H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-teal-light bg-white px-6 py-5 space-y-5 shadow-lg">
          <nav className="flex flex-col gap-3.5 font-sans text-base font-medium text-ink/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-teal transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-teal/10 flex items-center justify-between gap-3">
            <LanguageToggle />
            <a
              href="#assistant"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-teal text-white text-sm font-sans font-medium px-5 py-2.5 hover:bg-teal-dark transition-colors"
            >
              {t.navAsk}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}