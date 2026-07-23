"use client"

import { useState } from "react"
import Link from "next/link"
import { useI18n, type Locale } from "@/lib/i18n"

const flags: Record<Locale, string> = { pt: "🇧🇷", en: "🇺🇸", es: "🇪🇸" }

export default function Navbar() {
  const { locale, setLocale, t } = useI18n()
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="text-lg font-semibold tracking-tight hover:text-white/80 transition-colors">
          NexusAI
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
          <button onClick={() => scrollTo("features")} className="hover:text-white/90 transition-colors">
            {t("nav.features")}
          </button>
          <button onClick={() => scrollTo("install")} className="hover:text-white/90 transition-colors">
            {t("nav.install")}
          </button>
          <button onClick={() => scrollTo("architecture")} className="hover:text-white/90 transition-colors">
            {t("nav.architecture")}
          </button>
          <Link href="/guide" className="hover:text-white/90 transition-colors">
            {t("nav.guide")}
          </Link>
          <a href="https://github.com/pedrohenriquesanchesleal4-debug/izanagi-ai" target="_blank" rel="noopener noreferrer" className="hover:text-white/90 transition-colors">
            GitHub
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-white/5 rounded-full p-1">
            {(["pt", "en", "es"] as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`px-2 py-1 rounded-full text-xs transition-all ${
                  locale === l ? "bg-white/10 text-white" : "text-white/30 hover:text-white/60"
                }`}
              >
                {flags[l]}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden ml-2 text-white/50 hover:text-white"
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-white/5 px-6 py-4 flex flex-col gap-4 text-sm">
          <button onClick={() => scrollTo("features")} className="text-white/50 hover:text-white transition-colors text-left">
            {t("nav.features")}
          </button>
          <button onClick={() => scrollTo("install")} className="text-white/50 hover:text-white transition-colors text-left">
            {t("nav.install")}
          </button>
          <button onClick={() => scrollTo("architecture")} className="text-white/50 hover:text-white transition-colors text-left">
            {t("nav.architecture")}
          </button>
          <Link href="/guide" className="text-white/50 hover:text-white transition-colors">
            {t("nav.guide")}
          </Link>
          <a href="https://github.com/pedrohenriquesanchesleal4-debug/izanagi-ai" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
            GitHub
          </a>
        </div>
      )}
    </nav>
  )
}
