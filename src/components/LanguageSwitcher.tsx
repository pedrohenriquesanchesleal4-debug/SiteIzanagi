"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Globe } from "lucide-react";
import { localeMeta, locales, type Locale } from "../lib/i18n/dictionaries";
import { useLanguage } from "../lib/i18n/LanguageProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectLocale = (l: Locale) => {
    setLocale(l);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language / Mudar idioma"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition border ${
          open
            ? "bg-zinc-800 text-white border-white/20"
            : "bg-zinc-900 text-zinc-300 border-white/10 hover:bg-zinc-800 hover:text-white"
        }`}
      >
        <Globe className="w-3.5 h-3.5" />
        <span className="font-mono tracking-wide">{localeMeta[locale].short}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            role="listbox"
            style={{ transformOrigin: "top right" }}
            className="absolute right-0 top-full mt-2 w-44 p-1.5 rounded-xl border border-white/10 bg-zinc-950/95 backdrop-blur-xl shadow-2xl"
          >
            {locales.map((l) => (
              <li key={l}>
                <button
                  onClick={() => selectLocale(l)}
                  role="option"
                  aria-selected={locale === l}
                  className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-xs font-medium transition cursor-pointer ${
                    locale === l
                      ? "bg-blue-500/10 text-blue-300 border border-blue-500/20"
                      : "text-zinc-300 hover:bg-zinc-800/80 hover:text-white border border-transparent"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-sm leading-none">{localeMeta[l].flag}</span>
                    {localeMeta[l].label}
                  </span>
                  {locale === l && <Check className="w-3.5 h-3.5" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
