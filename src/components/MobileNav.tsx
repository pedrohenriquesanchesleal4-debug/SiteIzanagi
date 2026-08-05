"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Menu, X } from "lucide-react";
import { useLanguage } from "../lib/i18n/LanguageProvider";

export interface MobileNavItem {
  label: string;
  href: string;
  external?: boolean;
  highlight?: boolean;
}

export default function MobileNav({
  items,
  cta,
}: {
  items: MobileNavItem[];
  cta?: { label: string; href: string; external?: boolean };
}) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? t.ui.closeMenu : t.ui.menu}
        aria-expanded={open}
        className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:bg-zinc-800 hover:text-white transition"
      >
        {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden fixed top-16 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0d]/95 backdrop-blur-2xl shadow-2xl px-6 pt-3 pb-5"
          >
            <div className="flex flex-col">
              {items.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  onClick={close}
                  className={`flex items-center justify-between py-3 text-sm border-b border-white/5 transition ${
                    item.highlight
                      ? "text-blue-400 font-medium"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {item.external && <ExternalLink className="w-3.5 h-3.5 opacity-60" />}
                </a>
              ))}
            </div>

            {cta && (
              <a
                href={cta.href}
                target={cta.external ? "_blank" : undefined}
                rel={cta.external ? "noreferrer" : undefined}
                onClick={close}
                className="mt-4 block text-center py-3 rounded-xl bg-white text-zinc-900 font-medium text-xs hover:bg-zinc-200 transition shadow-sm"
              >
                {cta.label}
              </a>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
