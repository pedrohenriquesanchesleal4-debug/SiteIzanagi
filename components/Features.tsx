"use client"

import { useRef, type ReactNode } from "react"
import { useI18n } from "@/lib/i18n"

const icons = ["🧠", "🎯", "⚡", "🔍", "🔄", "📈"]

function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null!)

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)"
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`glass rounded-2xl p-8 glow transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  )
}

export default function Features() {
  const { t } = useI18n()
  const keys = ["decision", "context", "token", "quality", "reflection", "evolution"]

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-gradient">{t("features.title")}</span>
          </h2>
          <p className="text-white/30 text-base md:text-lg max-w-xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {keys.map((k, i) => (
            <TiltCard key={k} className="group">
              <span className="text-2xl mb-4 block">{icons[i]}</span>
              <h3 className="text-base font-semibold text-white/80 mb-2">{t(`features.${k}.title`)}</h3>
              <p className="text-sm text-white/30 leading-relaxed">{t(`features.${k}.desc`)}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
