"use client"

import { useI18n } from "@/lib/i18n"

const highlights = ["highlight1", "highlight2", "highlight3", "highlight4"]

export default function About() {
  const { t } = useI18n()

  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-gradient">
                {t("about.title")}
              </h2>
              <p className="text-sm md:text-base text-white/30 leading-relaxed">
                {t("about.desc")}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div key={h} className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-white/50">{t(`about.${h}`)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
