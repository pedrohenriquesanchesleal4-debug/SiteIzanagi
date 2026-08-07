"use client";

import { motion } from "framer-motion";
import { Sparkles, Workflow, Layers, ShieldCheck, Languages, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../lib/i18n/LanguageProvider";

/**
 * UpdateSpotlight · Destaque manual da última grande atualização do framework.
 * Renderizado no topo do /changelog. Conteúdo curado (não automático) para
 * anunciar marcos reais: novo agente, contagens e padrões do framework.
 */
export default function UpdateSpotlight() {
  const { t } = useLanguage();
  const s = t.spotlight;

  const items = [
    { icon: Workflow, title: s.item1Title, desc: s.item1Desc },
    { icon: Layers, title: s.item2Title, desc: s.item2Desc },
    { icon: Sparkles, title: s.item3Title, desc: s.item3Desc },
    { icon: ShieldCheck, title: s.item4Title, desc: s.item4Desc },
    { icon: Languages, title: s.item5Title, desc: s.item5Desc },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="relative mb-14 overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-zinc-950 to-zinc-950 p-8 md:p-10"
    >
      {/* Glow decorativo */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-[11px] font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> {s.badge}
          </span>
          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">{s.versionTag}</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">{s.title}</h2>
        <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl mb-8">{s.subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 + idx * 0.08 }}
                className="p-5 rounded-2xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl hover:border-blue-500/30 transition"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3">
                  <Icon className="w-4.5 h-4.5 text-blue-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}

          {/* Card CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.65 }}
            className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30 backdrop-blur-xl flex flex-col justify-between"
          >
            <h3 className="text-sm font-semibold text-white mb-1.5">{s.ctaTitle}</h3>
            <p className="text-xs text-zinc-300 leading-relaxed mb-4">{s.ctaDesc}</p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/pedrohenriquesanchesleal4-debug/izanagi-ai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition"
              >
                <Github className="w-3.5 h-3.5" /> {s.ctaGithub} <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
              <Link
                href="/#agents"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium transition border border-white/10"
              >
                <Layers className="w-3.5 h-3.5" /> {s.ctaAgents}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
