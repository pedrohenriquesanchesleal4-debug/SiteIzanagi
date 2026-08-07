"use client";

import { motion } from "framer-motion";
import { ArrowLeft, History, Github, ExternalLink, Radar } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../../lib/i18n/LanguageProvider";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import MobileNav from "../../components/MobileNav";
import ChangelogFeed from "../../components/ChangelogFeed";
import LiveVersionBadge from "../../components/LiveVersionBadge";

export default function ChangelogPage() {
  const { t } = useLanguage();

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
              <History className="w-4 h-4 text-blue-400" />
            </div>
            <span className="font-bold tracking-tight text-base text-zinc-100">
              Izanagi <span className="text-zinc-400 font-normal">Logs</span>
            </span>
          </div>
          <LanguageSwitcher />
          <MobileNav
            items={[
              { label: t.nav.home, href: "/" },
              { label: t.nav.guide, href: "/guide" },
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
        <div className="mb-14">
          <LiveVersionBadge />

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 flex items-center gap-3"
          >
            <History className="w-9 h-9 text-blue-400" /> {t.changelog.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 text-base leading-relaxed max-w-2xl"
          >
            {t.changelog.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-500/20 bg-blue-500/5 text-blue-300 text-xs font-mono"
          >
            <Radar className="w-4 h-4 animate-pulse" />
            {t.changelog.realtime}
          </motion.div>
        </div>

        {/* Live Feed */}
        <ChangelogFeed />

        {/* Footer Links */}
        <div className="mt-16 flex flex-wrap items-center gap-4 text-xs text-zinc-500">
          <a
            href="https://github.com/pedrohenriquesanchesleal4-debug/izanagi-ai"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/60 border border-white/10 hover:border-white/20 hover:text-white transition"
          >
            <Github className="w-3.5 h-3.5" /> {t.changelog.repoLink} <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
          <a
            href="https://www.npmjs.com/package/izanagi-ai"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/60 border border-white/10 hover:border-white/20 hover:text-white transition"
          >
            {t.footer.npm} <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-xs text-zinc-500 font-mono bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-400 font-medium">{t.footer.copyright}</p>
          <div className="flex items-center gap-6 text-zinc-400">
            <a href="https://github.com/pedrohenriquesanchesleal4-debug/izanagi-ai" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
              <Github className="w-3.5 h-3.5" /> {t.footer.repo}
            </a>
            <a href="https://www.npmjs.com/package/izanagi-ai" target="_blank" rel="noreferrer" className="hover:text-white transition">
              {t.footer.npm}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
