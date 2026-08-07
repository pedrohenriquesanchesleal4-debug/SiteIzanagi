"use client";

import { useState } from "react";
import { Check, Copy, ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../../lib/i18n/LanguageProvider";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import MobileNav from "../../components/MobileNav";

export default function GuidePage() {
  const { t } = useLanguage();
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const codeSnippets = {
    init: "npx izanagi init my-project",
    packs: "npx izanagi init my-project --packs core,agents,coding,database,security",
    run: "npx izanagi run \"Criar página de autenticação JWT segura\"",
    runAgent: "npx izanagi run architect --task \"Desenhar microsserviços em event-driven\"",
    doctor: "npx izanagi doctor",
    install: "npm install -g izanagi-ai",
    update: "npm update -g izanagi-ai",
    version: "izanagi --version",
    latest: "npm view izanagi-ai version"
  };

  const copyButton = (id: keyof typeof codeSnippets | string) => (
    <button
      onClick={() => copyToClipboard(codeSnippets[id as keyof typeof codeSnippets], id)}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition text-xs"
    >
      {copiedCmd === id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
      <span>{copiedCmd === id ? t.guide.s2.copied : t.hero.copy}</span>
    </button>
  );

  const codeBlock = (cmd: string, id: keyof typeof codeSnippets | string, className = "") => (
    <div className={`flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-white/10 font-mono text-xs text-zinc-200 shadow-inner ${className}`}>
      <span className="text-zinc-400">$ <span className="text-white">{cmd}</span></span>
      {copyButton(id)}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 flex flex-col justify-between selection:bg-zinc-200 selection:text-zinc-900 font-sans relative">
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#070709]/80 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition text-xs font-mono">
              <ArrowLeft className="w-4 h-4" /> {t.guide.back}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center font-bold text-white shadow-md">
              ⛩️
            </div>
            <span className="font-bold tracking-tight text-base text-zinc-100">
              Izanagi <span className="text-zinc-400 font-normal">Guide</span>
            </span>
          </div>
          <LanguageSwitcher />
          <MobileNav
            items={[
              { label: t.nav.home, href: "/" },
              { label: t.nav.logs, href: "/changelog", highlight: true },
              { label: t.nav.about, href: "/#about" },
              { label: t.nav.pipeline, href: "/#scrolly" },
              { label: t.nav.simulator, href: "/#playground" },
              { label: t.nav.agents, href: "/#agents" },
              { label: t.nav.github, href: "https://github.com/pedrohenriquesanchesleal4-debug/izanagi-ai", external: true },
              { label: t.nav.npm, href: "https://www.npmjs.com/package/izanagi-ai", external: true },
              { label: t.nav.contact, href: "https://pedrohsl-portfolio.vercel.app", external: true, highlight: true },
            ]}
            cta={{ label: t.nav.portfolio, href: "https://pedrohsl-portfolio.vercel.app", external: true }}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-6 pt-36 pb-24 relative z-10 w-full">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono mb-6">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" /> {t.guide.badge}
          </div>          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t.guide.title}
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed">
            {t.guide.subtitle}
          </p>
        </div>

        {/* Section 1: Prerequisites */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-xs font-mono">1</span>
            {t.guide.s1.title}
          </h2>
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-3 text-sm text-zinc-300">
            <p>{t.guide.s1.p}</p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-400 font-mono text-xs">
              <li>
                <strong className="text-zinc-200">Node.js</strong> {t.guide.s1.li1Post}
              </li>
              <li>
                <strong className="text-zinc-200">npm</strong>
                {t.guide.s1.li2Mid}
                <strong className="text-zinc-200">npx</strong>
                {t.guide.s1.li2Post}
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Quick Start with NPX */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-xs font-mono">2</span>
            {t.guide.s2.title}
          </h2>
          <p className="text-zinc-sm text-zinc-400 mb-4">
            {t.guide.s2.p}
            <code className="text-white bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">npx</code>
            {t.guide.s2.pPost}
          </p>
          {codeBlock(codeSnippets.init, "init")}
        </section>

        {/* Section 3: Packs Selection */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-xs font-mono">3</span>
            {t.guide.s3.title}
          </h2>
          <p className="text-sm text-zinc-400 mb-4">
            {t.guide.s3.p}
          </p>
          {codeBlock(codeSnippets.packs, "packs", "mb-4")}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-zinc-400">
            {["core", "agents", "skills", "architecture", "coding", "database", "devops", "security"].map((pack, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-zinc-900/60 border border-white/5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>{pack}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Running Tasks & Agents */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-xs font-mono">4</span>
            {t.guide.s4.title}
          </h2>
          <p className="text-sm text-zinc-400 mb-4">
            {t.guide.s4.p}
          </p>
          <div className="space-y-3">
            {codeBlock(codeSnippets.run, "run")}
            {codeBlock(codeSnippets.runAgent, "runAgent")}
          </div>
        </section>

        {/* Section 5: Doctor & Integrity */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-xs font-mono">5</span>
            {t.guide.s5.title}
          </h2>
          <p className="text-sm text-zinc-400 mb-4">
            {t.guide.s5.p}
          </p>
          {codeBlock(codeSnippets.doctor, "doctor")}
        </section>

        {/* Section 6: Global Installation */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-xs font-mono">6</span>
            {t.guide.s6.title}
          </h2>
          <p className="text-sm text-zinc-400 mb-4">{t.guide.s6.p}</p>
          {codeBlock(codeSnippets.install, "install")}
          <p className="text-xs text-zinc-500 mt-3 font-mono leading-relaxed">
            {t.guide.s6.note}
          </p>
          <p className="text-sm text-zinc-400 mt-5 mb-4">{t.guide.s6.check}</p>
          {codeBlock(codeSnippets.version, "version")}
        </section>

        {/* Section 7: Updating Izanagi */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-xs font-mono">7</span>
            {t.guide.s7.title}
          </h2>
          <p className="text-sm text-zinc-400 mb-4">{t.guide.s7.p}</p>
          {codeBlock(codeSnippets.update, "update")}
          <p className="text-xs text-zinc-500 mt-3 font-mono leading-relaxed">
            {t.guide.s7.npxNote}
          </p>
          <p className="text-sm text-zinc-400 mt-5 mb-4">{t.guide.s7.checkCurrent}</p>
          {codeBlock(codeSnippets.version, "version2")}
          <p className="text-sm text-zinc-400 mt-5 mb-4">{t.guide.s7.checkLatest}</p>
          {codeBlock(codeSnippets.latest, "latest")}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-zinc-500 font-mono bg-zinc-950">
        <p>{t.guide.footer}</p>
      </footer>
    </div>
  );
}
