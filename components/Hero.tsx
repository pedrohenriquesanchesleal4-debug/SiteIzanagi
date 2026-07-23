"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"

export default function Hero() {
  const { t } = useI18n()

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-violet-500/5 to-indigo-500/5 blur-3xl animate-pulse-glow pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-white/40 mb-8 animate-fade-in-up">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          {t("hero.badge")}
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
          <span className="block animate-fade-in-up text-gradient">{t("hero.title1")}</span>
          <span className="block animate-fade-in-up text-gradient" style={{ animationDelay: "0.1s" }}>
            {t("hero.title2")}
          </span>
          <span className="block animate-fade-in-up text-gradient" style={{ animationDelay: "0.2s" }}>
            {t("hero.title3")}
          </span>
        </h1>

        <p className="text-base md:text-lg text-white/30 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#install"
            onClick={(e) => { e.preventDefault(); document.getElementById("install")?.scrollIntoView({ behavior: "smooth" }) }}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold text-sm hover:bg-white/90 transition-all"
          >
            {t("hero.cta")}
          </a>
          <Link
            href="/guide"
            className="glass px-8 py-3 rounded-full text-sm text-white/50 hover:text-white hover:bg-white/10 transition-all"
          >
            {t("hero.guide_cta")}
          </Link>
          <a
            href="https://github.com/pedrohenriquesanchesleal4-debug/izanagi-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-8 py-3 rounded-full text-sm text-white/50 hover:text-white hover:bg-white/10 transition-all"
          >
            {t("hero.docs")}
          </a>
        </div>

        <div className="mt-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <code className="glass px-4 py-2 rounded-lg text-xs md:text-sm text-white/30 font-mono inline-flex items-center gap-2">
            <span className="text-green-400/60">$</span>
            {t("hero.install")}
          </code>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1.5">
          <div className="w-0.5 h-2 rounded-full bg-white/20" />
        </div>
      </div>
    </section>
  )
}
