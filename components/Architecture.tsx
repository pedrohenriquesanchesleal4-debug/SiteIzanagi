"use client"

import { useI18n } from "@/lib/i18n"

const layers = [
  "Decision Engine",
  "Context Engine",
  "Skill Executor",
  "Quality Gates",
  "Reflection Engine",
  "Memory Manager",
]

export default function Architecture() {
  const { t } = useI18n()
  const principles = ["principle1", "principle2", "principle3", "principle4"]

  return (
    <section id="architecture" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.02)_0%,transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-gradient">{t("architecture.title")}</span>
          </h2>
          <p className="text-white/30 text-base md:text-lg max-w-xl mx-auto">
            {t("architecture.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-2">
            {layers.map((layer, i) => (
              <div
                key={layer}
                className="glass rounded-xl px-5 py-3 flex items-center gap-4 hover:bg-white/[0.06] transition-all"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <span className="text-xs text-white/20 font-mono w-5">{i + 1}</span>
                <span className="text-sm text-white/60">{layer}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {principles.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400/40 mt-2 shrink-0" />
                <span className="text-sm text-white/40">{t(`architecture.${p}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
