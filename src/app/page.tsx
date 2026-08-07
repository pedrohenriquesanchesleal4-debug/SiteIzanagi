"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Link from "next/link";
import { Shield, Cpu, Code2, Layers, Copy, Sparkles, Compass, Film, Database, Bug, FileText, Users, GraduationCap, Play, Check, RefreshCw, Github, ExternalLink, Mail, ArrowUp, History } from "lucide-react";
import { useLanguage } from "../lib/i18n/LanguageProvider";
import LanguageSwitcher from "../components/LanguageSwitcher";
import MobileNav from "../components/MobileNav";
import LiveVersionBadge from "../components/LiveVersionBadge";
import type { Dict } from "../lib/i18n/dictionaries";

type RoleKey = keyof Dict["agentsSection"]["roles"];

// Interactive Mouse Spotlight Component
function MouseSpotlight() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return;
      const rect = divRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      divRef.current.style.setProperty("--mouse-x", `${x}px`);
      divRef.current.style.setProperty("--mouse-y", `${y}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div ref={divRef} className="absolute inset-0 pointer-events-none glow-spotlight z-0" />;
}

const agents = [
  { id: "discovery", name: "Discovery", roleKey: "discovery", icon: Compass, skills: ["brainstorming", "deep-research"], color: "border-blue-500/30 hover:border-blue-500/60 bg-blue-500/5" },
  { id: "architect", name: "Software Architect", roleKey: "architect", icon: Layers, skills: ["architecture-patterns", "memory-projeto"], color: "border-purple-500/30 hover:border-purple-500/60 bg-purple-500/5" },
  { id: "senior-engineer", name: "Senior Engineer", roleKey: "senior-engineer", icon: Code2, skills: ["frontend", "ai-agent", "tdd"], color: "border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-500/5" },
  { id: "animation", name: "Animation Engineer", roleKey: "animation", icon: Film, skills: ["animation-web", "motion-design", "webgl-3d"], color: "border-pink-500/30 hover:border-pink-500/60 bg-pink-500/5" },
  { id: "security", name: "Security Engineer", roleKey: "security", icon: Shield, skills: ["security-privacy"], color: "border-amber-500/30 hover:border-amber-500/60 bg-amber-500/5" },
  { id: "devops", name: "DevOps Engineer", roleKey: "devops", icon: Cpu, skills: ["cloud-infra", "iac-terraform"], color: "border-indigo-500/30 hover:border-indigo-500/60 bg-indigo-500/5" },
  { id: "database", name: "Database Engineer", roleKey: "database", icon: Database, skills: ["data-engineering"], color: "border-violet-500/30 hover:border-violet-500/60 bg-violet-500/5" },
  { id: "bug-hunter", name: "Bug Hunter", roleKey: "bug-hunter", icon: Bug, skills: ["tdd", "qa"], color: "border-red-500/30 hover:border-red-500/60 bg-red-500/5" },
  { id: "techlead", name: "Tech Lead", roleKey: "techlead", icon: Sparkles, skills: ["architecture-patterns"], color: "border-yellow-500/30 hover:border-yellow-500/60 bg-yellow-500/5" },
  { id: "docs", name: "Documentation", roleKey: "docs", icon: FileText, skills: ["architecture-patterns"], color: "border-sky-500/30 hover:border-sky-500/60 bg-sky-500/5" },
  { id: "pm", name: "Project Manager", roleKey: "pm", icon: Users, skills: ["brainstorming"], color: "border-emerald-600/30 hover:border-emerald-600/60 bg-emerald-600/5" },
  { id: "professor", name: "Professor / Mentor", roleKey: "professor", icon: GraduationCap, skills: ["professor-modo"], color: "border-fuchsia-500/30 hover:border-fuchsia-500/60 bg-fuchsia-500/5" },
] as const;

// Dados estáticos (comandos de terminal realistas permanecem em EN); textos de UI vêm do dicionário i18n.
const presetSimulations = [
  {
    task: "Build fintech multi-tenant dashboard with PostgreSQL and JWT auth",
    times: ["0.2s", "0.5s", "0.8s", "1.1s", "1.6s"],
  },
  {
    task: "Build Apple-style 3D WebGL product showcase with scrollytelling",
    times: ["0.3s", "0.6s", "1.0s", "1.4s"],
  },
];

const scrollyNums = ["01", "02", "03", "04"];

export default function Home() {
  const { t } = useLanguage();
  const [copiedInit, setCopiedInit] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [simStep, setSimStep] = useState(0);
  const [activeAgentModal, setActiveAgentModal] = useState<(typeof agents)[number] | null>(null);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const sectionIds = ["about", "scrolly", "playground", "agents"];

  // Back-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy: destaca a seção ativa na navegação
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navClass = (id: string) =>
    `hover:text-white transition ${activeSection === id ? "text-white" : ""}`;

  const runSimulation = (index: number) => {
    setSelectedPreset(index);
    setIsRunningSim(true);
    setSimStep(0);

    const sim = presetSimulations[index];
    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < sim.times.length) {
        setSimStep(current);
      } else {
        clearInterval(interval);
        setIsRunningSim(false);
      }
    }, 700);
  };

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedInit(true);
    setTimeout(() => setCopiedInit(false), 2000);
  };

  const presetSteps = t.playground.presets[selectedPreset].steps;
  const visibleStepCount = isRunningSim ? simStep + 1 : presetSteps.length;

  return (
    <div ref={containerRef} className="min-h-screen bg-[#070709] text-zinc-100 flex flex-col justify-between selection:bg-zinc-200 selection:text-zinc-900 font-sans relative overflow-x-hidden">
      <MouseSpotlight />

      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-0.5 origin-left z-[60] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        aria-hidden="true"
      />

      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#070709]/80 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold tracking-tight text-base text-zinc-100">
              Izanagi <span className="text-zinc-400 font-normal">AI</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
            <Link href="/guide" className="hover:text-white transition">{t.nav.guide}</Link>
            <Link href="/changelog" className="hover:text-white transition flex items-center gap-1 text-blue-400">
              <History className="w-3.5 h-3.5" /> {t.nav.logs}
            </Link>
            <a href="#about" className={navClass("about")}>{t.nav.about}</a>
            <a href="#scrolly" className={navClass("scrolly")}>{t.nav.pipeline}</a>
            <a href="#playground" className={navClass("playground")}>{t.nav.simulator}</a>
            <a href="#agents" className={navClass("agents")}>{t.nav.agents}</a>
            <a href="https://github.com/pedrohenriquesanchesleal4-debug/izanagi-ai" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
              <Github className="w-3.5 h-3.5" /> {t.nav.github}
            </a>
            <a href="https://www.npmjs.com/package/izanagi-ai" target="_blank" rel="noreferrer" className="hover:text-white transition">{t.nav.npm}</a>
            <a href="https://pedrohsl-portfolio.vercel.app" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1 text-blue-400">
              {t.nav.contact} <ExternalLink className="w-3 h-3" />
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <LanguageSwitcher />
            <a
              href="https://pedrohsl-portfolio.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="hidden md:block px-4 py-1.5 rounded-lg bg-white text-zinc-900 font-medium text-xs hover:bg-zinc-200 transition shadow-sm"
            >
              {t.nav.portfolio}
            </a>
            <MobileNav
              items={[
                { label: t.nav.home, href: "/" },
                { label: t.nav.guide, href: "/guide" },
                { label: t.nav.logs, href: "/changelog", highlight: true },
                { label: t.nav.about, href: "#about" },
                { label: t.nav.pipeline, href: "#scrolly" },
                { label: t.nav.simulator, href: "#playground" },
                { label: t.nav.agents, href: "#agents" },
                { label: t.nav.github, href: "https://github.com/pedrohenriquesanchesleal4-debug/izanagi-ai", external: true },
                { label: t.nav.npm, href: "https://www.npmjs.com/package/izanagi-ai", external: true },
                { label: t.nav.contact, href: "https://pedrohsl-portfolio.vercel.app", external: true, highlight: true },
              ]}
              cta={{ label: t.nav.portfolio, href: "https://pedrohsl-portfolio.vercel.app", external: true }}
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 pt-32 pb-24 relative z-10">
        <section className="max-w-5xl mx-auto px-6 text-center pt-16 pb-20">
          <LiveVersionBadge />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-6 leading-[1.05]"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 font-mono text-xs text-zinc-200 shadow-lg min-w-[320px]">
              <span className="text-zinc-400">$ <span className="text-white">npx izanagi init my-project</span></span>
              <button
                onClick={() => copyText("npx izanagi init my-project")}
                aria-label="Copy npx izanagi init my-project"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition"
              >
                {copiedInit ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedInit ? t.hero.copied : t.hero.copy}</span>
              </button>
            </div>
            <a
              href="#playground"
              className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs flex items-center gap-2 transition border border-white/10"
            >
              <Play className="w-3.5 h-3.5 text-blue-400 fill-blue-400" /> {t.hero.testSimulator}
            </a>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-20">
          <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-8 md:p-14 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">{t.about.eyebrow}</span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-6">{t.about.title}</h2>

              <div className="space-y-4 text-sm text-zinc-300 leading-relaxed font-normal">
                <p>
                  {t.about.p1pre}
                  <strong className="text-white font-semibold">Izanagi AI</strong>
                  {t.about.p1post}
                </p>
                <p>
                  {t.about.p2pre}
                  <strong className="text-white">{t.about.p2agents}</strong>
                  {t.about.p2mid}
                  <strong className="text-white">{t.about.p2skills}</strong>
                  {t.about.p2post}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5">
                  <div className="text-white font-bold text-base mb-1">{t.about.stat1Title}</div>
                  <div className="text-zinc-400">{t.about.stat1Desc}</div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5">
                  <div className="text-white font-bold text-base mb-1">{t.about.stat2Title}</div>
                  <div className="text-zinc-400">{t.about.stat2Desc}</div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5">
                  <div className="text-white font-bold text-base mb-1">{t.about.stat3Title}</div>
                  <div className="text-zinc-400">{t.about.stat3Desc}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scrollytelling Section */}
        <section id="scrolly" className="max-w-5xl mx-auto px-6 py-20 relative">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">{t.scrolly.eyebrow}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{t.scrolly.title}</h2>
            <p className="text-zinc-400 text-sm mt-2">{t.scrolly.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {scrollyNums.map((num, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl relative overflow-hidden group hover:border-zinc-700 transition"
              >
                <div className="absolute top-6 right-6 font-mono text-4xl font-bold text-zinc-800 group-hover:text-zinc-700 transition-colors">
                  {num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 pr-10">{t.scrolly.steps[idx].title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{t.scrolly.steps[idx].desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Swarm Playground Section */}
        <section id="playground" className="max-w-5xl mx-auto px-6 mb-28">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">{t.playground.eyebrow}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">{t.playground.title}</h2>
            <p className="text-zinc-400 text-sm mt-1">{t.playground.subtitle}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-950/90 shadow-2xl overflow-hidden backdrop-blur-2xl">
            {/* Preset Selector */}
            <div className="p-4 bg-zinc-900/60 border-b border-white/10 flex flex-wrap gap-3 items-center justify-between">
              <div className="flex items-center gap-2">
                {t.playground.presets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => runSimulation(idx)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition ${
                      selectedPreset === idx && isRunningSim
                        ? "bg-blue-600 text-white shadow-md"
                        : selectedPreset === idx
                        ? "bg-zinc-800 text-white border border-white/10"
                        : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/5"
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => runSimulation(selectedPreset)}
                disabled={isRunningSim}
                className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-medium flex items-center gap-2 transition shadow-sm"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRunningSim ? "animate-spin" : ""}`} />
                {isRunningSim ? t.playground.running : t.playground.run}
              </button>
            </div>

            {/* Simulation Terminal */}
            <div className="p-6 font-mono text-xs space-y-4 min-h-[280px] bg-[#050507]">
              <div className="text-zinc-500 flex items-center justify-between">
                <span>$ npx izanagi run --task "{presetSimulations[selectedPreset].task}"</span>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${isRunningSim ? "bg-amber-400 animate-ping" : "bg-emerald-400"}`} />
                  {isRunningSim ? t.playground.processing : t.playground.done}
                </span>
              </div>

              <div className="space-y-3 pt-2">
                {presetSteps.slice(0, visibleStepCount).map((step, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-3 rounded-lg bg-zinc-900/80 border border-white/5 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] uppercase font-bold tracking-wider">
                        /{step.agent}
                      </span>
                      <span className="text-zinc-300">{step.action}</span>
                    </div>
                    <span className="text-zinc-600 text-[10px]">{presetSimulations[selectedPreset].times[sIdx]}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 12 Specialized Agents Grid */}
        <section id="agents" className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">{t.agentsSection.eyebrow}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{t.agentsSection.title}</h2>
            <p className="text-zinc-400 text-sm mt-2">
              {t.agentsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {agents.map((agent, i) => {
              const Icon = agent.icon;
              return (
                <div
                  key={agent.id}
                  onClick={() => setActiveAgentModal(agent)}
                  className={`p-6 rounded-2xl border ${agent.color} backdrop-blur-xl transition-all cursor-pointer flex flex-col justify-between group hover:-translate-y-1 shadow-lg`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-zinc-300" />
                      </div>
                      <span className="text-xs font-mono text-zinc-500">/{agent.id}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{agent.name}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-4">{t.agentsSection.roles[agent.roleKey]}</p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap pt-3 border-t border-white/5">
                    {agent.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-2 py-0.5 rounded bg-zinc-900 border border-white/5 text-[10px] font-mono text-zinc-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer with Links */}
      <footer className="border-t border-white/10 py-12 text-xs text-zinc-500 font-mono bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-zinc-400 font-medium">{t.footer.copyright}</p>
          </div>
          <div className="flex items-center gap-6 text-zinc-400">
            <a href="https://github.com/pedrohenriquesanchesleal4-debug/izanagi-ai" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
              <Github className="w-3.5 h-3.5" /> {t.footer.repo}
            </a>
            <a href="https://www.npmjs.com/package/izanagi-ai" target="_blank" rel="noreferrer" className="hover:text-white transition">
              {t.footer.npm}
            </a>
            <a href="https://pedrohsl-portfolio.vercel.app" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1 text-blue-400">
              <Mail className="w-3.5 h-3.5" /> {t.footer.contact}
            </a>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label={t.ui.backToTop}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-xl flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 transition shadow-xl"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Agent Modal Detail */}
      <AnimatePresence>
        {activeAgentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveAgentModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-950 border border-white/10 rounded-2xl p-6 max-w-md w-full shadow-2xl relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                  <activeAgentModal.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{activeAgentModal.name}</h3>
                  <span className="text-xs font-mono text-zinc-500">/{activeAgentModal.id}</span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                {t.agentsSection.roles[activeAgentModal.roleKey]}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">{t.agentsSection.skillsLabel}</h4>
                <div className="flex flex-wrap gap-2">
                  {activeAgentModal.skills.map((s, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActiveAgentModal(null)}
                className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs transition"
              >
                {t.agentsSection.close}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
