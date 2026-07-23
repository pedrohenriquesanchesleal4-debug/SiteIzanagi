"use client"

import { useState } from "react"
import { useI18n } from "@/lib/i18n"

const commands = [
  { key: "step1", cmd: "npm install izanagi-ai" },
  { key: "step2", cmd: "npx nexusai init" },
  { key: "step3", cmd: "npx nexusai create agent my-agent" },
]

export default function InstallGuide() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(-1)

  const copy = async (i: number, text: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(i)
    setTimeout(() => setCopied(-1), 2000)
  }

  return (
    <section id="install" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-gradient">{t("install.title")}</span>
          </h2>
          <p className="text-white/30 text-base md:text-lg">{t("install.subtitle")}</p>
        </div>

        <div className="space-y-4">
          {commands.map(({ key, cmd }, i) => (
            <div key={key} className="glass rounded-xl p-4 flex items-center justify-between gap-4 group">
              <div className="flex items-center gap-4 min-w-0">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-xs text-white/40 font-mono shrink-0">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <div className="text-xs text-white/30 mb-1">{t(`install.${key}`)}</div>
                  <code className="text-sm text-white/60 font-mono truncate block">{cmd}</code>
                </div>
              </div>
              <button
                onClick={() => copy(i, cmd)}
                className="shrink-0 glass px-3 py-1.5 rounded-lg text-xs text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                {copied === i ? t("install.copied") : "Copy"}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-white/20 mb-3">{t("install.or")}</p>
          <code className="glass px-4 py-2 rounded-lg text-xs md:text-sm text-white/30 font-mono inline-flex items-center gap-2">
            <span className="text-green-400/60">$</span>
            npx izanagi-ai
          </code>
        </div>
      </div>
    </section>
  )
}
