"use client"

import { useRef } from "react"
import { useI18n } from "@/lib/i18n"

export default function CTA() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null!)

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`
  }
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)"
  }

  return (
    <section id="cta" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div
          ref={ref}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="glass rounded-3xl p-10 md:p-16 transition-transform duration-200 ease-out"
          style={{ transformStyle: "preserve-3d" }}
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="text-gradient">{t("cta.title")}</span>
          </h2>
          <p className="text-white/30 text-base md:text-lg mb-10 max-w-md mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.npmjs.com/package/izanagi-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold text-sm hover:bg-white/90 transition-all"
            >
              {t("cta.npm")}
            </a>
            <a
              href="https://github.com/pedrohenriquesanchesleal4-debug/izanagi-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-8 py-3 rounded-full text-sm text-white/50 hover:text-white hover:bg-white/10 transition-all"
            >
              {t("cta.github")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
