// src/components/Footer.jsx
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t, isUrdu } = useLanguage();

  const links = [
    { href: "#top", label: t.footerHome },
    { href: "#how-it-works", label: t.footerHow },
    { href: "#services", label: t.footerServices },
    { href: "#trust", label: t.footerAbout },
  ];

  return (
    <footer className="bg-teal text-white border-t border-teal-light/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-white/15">
          <div className="max-w-md">
            <p className={`font-semibold text-white ${isUrdu ? "urdu-text text-base" : "text-sm"}`} dir="auto">
              {t.footerBrand}
            </p>
            <p className={`mt-1.5 text-white/70 text-sm leading-relaxed ${isUrdu ? "urdu-text" : ""}`} dir="auto">
              {t.footerTagline}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm text-white/80">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-ochre-light transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`text-white/60 text-xs max-w-2xl leading-relaxed ${isUrdu ? "urdu-text" : ""}`} dir="auto">
            {t.footerDisclaimer}
          </p>
          <p className="text-xs font-sans text-white/50 whitespace-nowrap" dir="ltr">
            © {new Date().getFullYear()} Government Service Guides. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}