"use client"

import { useState } from "react"
import Link from "next/link"
import { I18nProvider, useI18n } from "@/lib/i18n"
import ThreeBackground from "@/components/ThreeBackground"

function CodeBlock({ code, lang = "bash" }: { code: string; lang?: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative glass rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
        <span className="text-xs text-white/20 font-mono">{lang}</span>
        <button
          onClick={copy}
          className="text-xs text-white/30 hover:text-white/60 transition-colors"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-white/60 font-mono leading-relaxed">{code}</code>
      </pre>
    </div>
  )
}

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-xs text-white/40 font-mono">
          {num}
        </span>
        <h2 className="text-xl md:text-2xl font-semibold text-white/80">{title}</h2>
      </div>
      <div className="space-y-4 pl-11">
        {children}
      </div>
    </div>
  )
}

function GuideContent() {
  const { locale, setLocale, t } = useI18n()

  return (
    <main className="relative z-10 min-h-screen">
      <nav className="glass border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight hover:text-white/80 transition-colors">
            NexusAI
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-white/40 hover:text-white/80 transition-colors">
              {t("guide.back")}
            </Link>
            <div className="flex items-center gap-1 bg-white/5 rounded-full p-1">
              {(["pt", "en", "es"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`px-2 py-1 rounded-full text-xs transition-all ${
                    locale === l ? "bg-white/10 text-white" : "text-white/30 hover:text-white/60"
                  }`}
                >
                  {l === "pt" ? "🇧🇷" : l === "en" ? "🇺🇸" : "🇪🇸"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">
            {t("guide.title")}
          </h1>
          <p className="text-white/30 text-base md:text-lg max-w-lg mx-auto">
            {t("guide.subtitle")}
          </p>
        </div>

        <Section num="1" title={t("guide.prereqs_title")}>
          <p className="text-sm text-white/30">{t("guide.prereqs_desc")}</p>
          <ul className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-white/40">
                <span className="w-1 h-1 rounded-full bg-violet-400/40" />
                {t(`guide.prereq${i}`)}
              </li>
            ))}
          </ul>
        </Section>

        <Section num="2" title={t("guide.install_title")}>
          <p className="text-sm text-white/30">{t("guide.install_desc")}</p>
          <div>
            <p className="text-xs text-white/30 mb-2">{t("guide.install_global")}</p>
            <CodeBlock code="npm install -g izanagi-ai" />
          </div>
          <div>
            <p className="text-xs text-white/30 mb-2">{t("guide.install_local")}</p>
            <CodeBlock code="npm install --save-dev izanagi-ai" />
          </div>
          <div>
            <p className="text-xs text-white/30 mb-2">{t("guide.install_check")}</p>
            <CodeBlock code="nexusai --version" />
          </div>
        </Section>

        <Section num="3" title={t("guide.init_title")}>
          <p className="text-sm text-white/30">{t("guide.init_desc")}</p>
          <CodeBlock code="nexusai init my-project
cd my-project" />
          <p className="text-xs text-white/20">{t("guide.init_cmd")}</p>
          <div className="glass rounded-xl p-4 mt-4">
            <p className="text-xs text-white/40 mb-2">{t("guide.init_result_title")}</p>
            <ul className="space-y-1 text-xs text-white/30 font-mono">
              <li>my-project/</li>
              <li className="pl-4">├── nexus.json</li>
              <li className="pl-4">├── agents/</li>
              <li className="pl-4">├── skills/</li>
              <li className="pl-4">└── README.md</li>
            </ul>
          </div>
        </Section>

        <Section num="4" title={t("guide.agent_title")}>
          <p className="text-sm text-white/30">{t("guide.agent_desc")}</p>
          <CodeBlock code="nexusai create agent my-agent" />
          <p className="text-xs text-white/20">{t("guide.agent_cmd")}</p>

          <div className="glass rounded-xl p-4 mt-4">
            <p className="text-xs text-white/40 mb-3">{t("guide.agent_example_title")}</p>
            <pre className="text-xs text-white/30 font-mono leading-relaxed">
              <code>{`{
  "name": "my-agent",
  "skills": ["architect", "frontend", "qa"],
  "chains": {
    "new_project": ["architect", "frontend"],
    "review": ["qa"]
  },
  "always": ["economia-tokens"]
}`}</code>
            </pre>
            <p className="text-xs text-white/20 mt-2">{t("guide.agent_example_desc")}</p>
          </div>
        </Section>

        <Section num="5" title={t("guide.usage_title")}>
          <p className="text-sm text-white/30">{t("guide.usage_desc")}</p>
          <CodeBlock code={'nexusai run my-agent --task "Create a login page"'} />
          <p className="text-xs text-white/20">{t("guide.usage_example")}</p>
          <div className="mt-4">
            <p className="text-xs text-white/30 mb-2">{t("guide.usage_list")}</p>
            <CodeBlock code="nexusai list" />
          </div>
        </Section>

        <Section num="6" title={t("guide.skills_title")}>
          <p className="text-sm text-white/30">{t("guide.skills_desc")}</p>
          <div className="glass rounded-xl p-4 text-sm text-white/40 leading-relaxed">
            {t("guide.skills_categories")}
          </div>
          <p className="text-sm text-white/30">{t("guide.skills_custom")}</p>
        </Section>

        <Section num="7" title={t("guide.structure_title")}>
          <p className="text-sm text-white/30">{t("guide.structure_desc")}</p>
          <div className="glass rounded-xl p-4">
            <pre className="text-xs text-white/30 font-mono leading-relaxed">
              <code>{`NexusAI/
├── bin/            ${t("guide.structure_bin")}
├── src/cli/        Código fonte dos comandos CLI
├── core/           ${t("guide.structure_core")}
├── agents/         ${t("guide.structure_agents")}
├── skills/         ${t("guide.structure_skills")}
├── memory/         ${t("guide.structure_memory")}
├── optimization/   ${t("guide.structure_optimization")}
├── teaching/       ${t("guide.structure_teaching")}
├── architecture/   ${t("guide.structure_architecture")}
├── coding/         ${t("guide.structure_coding")}
├── security/       ${t("guide.structure_security")}
├── testing/        ${t("guide.structure_testing")}
├── devops/         ${t("guide.structure_devops")}
├── database/       ${t("guide.structure_database")}
├── frontend/       ${t("guide.structure_frontend")}
├── backend/        ${t("guide.structure_backend")}
├── package.json    Configuração NPM
├── README.md       Documentação principal
├── SYSTEM.md       Fundação do sistema
└── RULES.md        Regras operacionais`}</code>
            </pre>
          </div>
        </Section>

        <Section num="8" title={t("guide.tokens_title")}>
          <p className="text-sm text-white/30">{t("guide.tokens_desc")}</p>
          <ul className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-white/40">
                <span className="w-1 h-1 rounded-full bg-green-400/40" />
                {t(`guide.tokens_item${i}`)}
              </li>
            ))}
          </ul>
        </Section>

        <Section num="9" title={t("guide.next_title")}>
          <p className="text-sm text-white/30">{t("guide.next_desc")}</p>
          <ul className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <li key={i}>
                <a
                  href={
                    i === 1
                      ? "https://github.com/pedrohenriquesanchesleal4-debug/izanagi-ai"
                      : i === 2
                        ? "https://github.com/pedrohenriquesanchesleal4-debug/izanagi-ai"
                        : i === 3
                          ? "https://github.com/pedrohenriquesanchesleal4-debug/izanagi-ai"
                          : "https://github.com/pedrohenriquesanchesleal4-debug/izanagi-ai/blob/main/ROADMAP.md"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/40 hover:text-white/70 transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-violet-400/40" />
                  {t(`guide.next_item${i}`)}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40">
                    <path d="M7 17l9-9M9 8h6v6" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <div className="text-center mt-16 pt-8 border-t border-white/5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full text-sm text-white/50 hover:text-white hover:bg-white/10 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {t("guide.back")}
          </Link>
        </div>
      </div>
    </main>
  )
}

export default function GuidePage() {
  return (
    <I18nProvider>
      <ThreeBackground />
      <GuideContent />
    </I18nProvider>
  )
}
