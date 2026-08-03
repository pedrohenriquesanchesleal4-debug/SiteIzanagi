"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Cpu, Zap, Code2, Layers, ArrowRight, CheckCircle2, Copy, Sparkles, Compass, Film, Database, Bug, FileText, Users, GraduationCap, Globe, Download, Play, Check, Box, CpuIcon } from "lucide-react";

const translations = {
  en: {
    nav: { agents: "Agents", install: "Installation", architecture: "Architecture", cli: "CLI", github: "GitHub" },
    badge: "Version 2.3.4 — Modular Skill-Oriented Engine",
    title1: "Architecting Code",
    title2: "Through Autonomous Intelligence",
    subtitle: "A precision multi-agent framework engineered for low token overhead, strict architectural boundaries, self-healing execution, and elite craft.",
    exploreAgents: "Explore 12 Agents",
    viewGithub: "Repository",
    cliTitle: "Interactive CLI Runtime",
    installTitle: "Zero-Friction Setup",
    installSubtitle: "Deploy the Izanagi CLI globally and initialize your workspace in two commands.",
    stepInstall: "1. Global Installation",
    stepInit: "2. Workspace Scaffolding",
    stepsTitle: "The Execution Pipeline",
    stepsSubtitle: "Four distinct automated layers designed to bridge raw intent and production code.",
    step1Title: "Scaffold & Structure",
    step1Desc: "Instantly provisions core system manifests, decision engines, and skill resolvers.",
    step2Title: "Integrity Verification",
    step2Desc: "Validates all 12 specialized agents and 79+ skills against system rule gates.",
    step3Title: "Multi-Agent Execution",
    step3Desc: "Deploys targeted skills like `/discovery` and `/architect` for deep reasoning and synthesis.",
    step4Title: "Self-Reflection & Quality",
    step4Desc: "Enforces automated security, performance, and architectural guidelines before delivery.",
    agentsTitle: "Specialized Agent Swarm",
    agentsSubtitle: "Precision instruments tuned for specific engineering milestones, from initial discovery to high-scale deployment.",
    archTitle: "Rigorous Architectural Gates",
    archSubtitle: "Every artifact produced undergoes strict algorithmic verification to ensure absolute code integrity, zero secret leakage, and immaculate style standards.",
    archItems: [
      "Decision & Context Engines",
      "Token Budget Optimization",
      "Dynamic Skill Resolution",
      "Continuous Self-Evaluation"
    ],
    footer: "© 2026 Izanagi AI Framework. Crafted with high fidelity."
  },
  pt: {
    nav: { agents: "Agentes", install: "Instalação", architecture: "Arquitetura", cli: "CLI", github: "GitHub" },
    badge: "Versão 2.3.4 — Motor Modular Orientado a Skills",
    title1: "Arquitetando Código",
    title2: "Através de Inteligência Autônoma",
    subtitle: "Um framework multi-agente de alta precisão projetado para baixo consumo de tokens, fronteiras arquiteturais estritas e execução impecável.",
    exploreAgents: "Explorar 12 Agentes",
    viewGithub: "Repositório",
    cliTitle: "Runtime CLI Interativo",
    installTitle: "Setup Sem Fricção",
    installSubtitle: "Instale o CLI globalmente e inicialize seu workspace em dois comandos limpos.",
    stepInstall: "1. Instalação Global",
    stepInit: "2. Inicialização do Workspace",
    stepsTitle: "O Pipeline de Execução",
    stepsSubtitle: "Quatro camadas automatizadas projetadas para conectar intenção bruta e código em produção.",
    step1Title: "Scaffold & Estrutura",
    step1Desc: "Provisiona instantaneamente manifestos do sistema, motores de decisão e resolvedores.",
    step2Title: "Verificação de Integridade",
    step2Desc: "Valida todos os 12 agentes especializados e mais de 79 skills contra portões de regras.",
    step3Title: "Execução Multi-Agente",
    step3Desc: "Aciona skills direcionadas como `/discovery` e `/architect` para raciocínio profundo e síntese.",
    step4Title: "Auto-Reflexão & Qualidade",
    step4Desc: "Aplica diretrizes automatizadas de segurança, performance e arquitetura antes da entrega.",
    agentsTitle: "Swarm de Agentes Especializados",
    agentsSubtitle: "Instrumentos de precisão calibrados para marcos específicos de engenharia, da descoberta ao deploy.",
    archTitle: "Portões Arquiteturais Rigorosos",
    archSubtitle: "Cada artefato produzido passa por verificação algorítmica estrita garantindo integridade absoluta, zero vazamento de segredos e estilo impecável.",
    archItems: [
      "Motores de Decisão & Contexto",
      "Otimização de Orçamento de Tokens",
      "Resolução Dinâmica de Skills",
      "Auto-Avaliação Contínua"
    ],
    footer: "© 2026 Izanagi AI Framework. Desenvolvido com alta fidelidade."
  },
  es: {
    nav: { agents: "Agentes", install: "Instalación", architecture: "Arquitectura", cli: "CLI", github: "GitHub" },
    badge: "Versión 2.3.4 — Motor Modular Orientado a Skills",
    title1: "Arquitecturando Código",
    title2: "A Través de Inteligencia Autónoma",
    subtitle: "Un framework multi-agente de alta precisión diseñado para bajo consumo de tokens, fronteras arquitectónicas estrictas y ejecución impecable.",
    exploreAgents: "Explorar 12 Agentes",
    viewGithub: "Repositorio",
    cliTitle: "Runtime CLI Interactivo",
    installTitle: "Setup Sin Fricción",
    installSubtitle: "Instala la CLI globalmente e inicializa tu workspace en dos comandos limpios.",
    stepInstall: "1. Instalación Global",
    stepInit: "2. Inicialización del Workspace",
    stepsTitle: "El Pipeline de Ejecución",
    stepsSubtitle: "Cuatro capas automatizadas diseñadas para conectar intención bruta y código en producción.",
    step1Title: "Scaffold y Estructura",
    step1Desc: "Provisiona instantáneamente manifiestos del sistema, motores de decisión y resolutores.",
    step2Title: "Verificación de Integridad",
    step2Desc: "Valida los 12 agentes especializados y más de 79 skills contra portales de reglas.",
    step3Title: "Ejecución Multi-Agente",
    step3Desc: "Activa skills dirigidas como `/discovery` y `/architect` para razonamiento profundo y síntesis.",
    step4Title: "Autoreflexión y Calidad",
    step4Desc: "Aplica directrices automatizadas de seguridad, rendimiento y arquitectura antes de entregar.",
    agentsTitle: "Swarm de Agentes Especializados",
    agentsSubtitle: "Instrumentos de precisión calibrados para hitos específicos de ingeniería, del descubrimiento al despliegue.",
    archTitle: "Portales Arquitectónicos Rigurosos",
    archSubtitle: "Cada artefacto producido pasa por verificación algorítmica estrita garantizando integridad absoluta, cero fugas de secretos y estilo impecable.",
    archItems: [
      "Motores de Decisión y Contexto",
      "Optimización de Presupuesto de Tokens",
      "Resolución Dinámica de Skills",
      "Autoevaluación Continua"
    ],
    footer: "© 2026 Izanagi AI Framework. Desarrollado con alta fidelidad."
  }
};

const agents = [
  { id: "discovery", name: "Discovery", icon: Compass, role: { en: "Interview, web research, rich prompts", pt: "Entrevista, pesquisa web, prompts ricos", es: "Entrevista, investigación web, prompts ricos" }, color: "from-blue-500 to-cyan-500" },
  { id: "architect", name: "Software Architect", icon: Layers, role: { en: "System design, Clean Arch, DDD, ADRs", pt: "System design, Clean Arch, DDD, ADRs", es: "Diseño de sistemas, Clean Arch, DDD, ADRs" }, color: "from-purple-500 to-indigo-500" },
  { id: "senior-engineer", name: "Senior Engineer", icon: Code2, role: { en: "Full-stack dev, refactoring, clean code", pt: "Dev full-stack, refatoração, código limpo", es: "Dev full-stack, refactorización, código limpio" }, color: "from-emerald-500 to-teal-500" },
  { id: "animation", name: "Animation Engineer", icon: Film, role: { en: "Scrollytelling, WebGL 3D, motion signature", pt: "Scrollytelling, WebGL 3D, motion signature", es: "Scrollytelling, WebGL 3D, firma de movimiento" }, color: "from-pink-500 to-rose-500" },
  { id: "security", name: "Security Engineer", icon: Shield, role: { en: "OWASP Top 10, auth, secure coding", pt: "OWASP Top 10, autenticação, secure coding", es: "OWASP Top 10, autenticación, secure coding" }, color: "from-amber-500 to-orange-500" },
  { id: "devops", name: "DevOps Engineer", icon: Cpu, role: { en: "Docker, K8s, CI/CD, IaC, observability", pt: "Docker, K8s, CI/CD, IaC, observabilidade", es: "Docker, K8s, CI/CD, IaC, observabilidad" }, color: "from-blue-600 to-indigo-600" },
  { id: "database", name: "Database Engineer", icon: Database, role: { en: "SQL, PostgreSQL, Redis, modeling", pt: "SQL, PostgreSQL, Redis, modelagem", es: "SQL, PostgreSQL, Redis, modelado" }, color: "from-violet-500 to-purple-600" },
  { id: "bug-hunter", name: "Bug Hunter", icon: Bug, role: { en: "Debugging & Root Cause Analysis", pt: "Debugging e Análise de Causa Raiz", es: "Depuración y Análisis de Causa Raíz" }, color: "from-red-500 to-pink-600" },
  { id: "techlead", name: "Tech Lead", icon: Sparkles, role: { en: "Code review, governance, mentoring", pt: "Code review, governança, mentoria", es: "Code review, gobernanza, mentoría" }, color: "from-yellow-500 to-amber-600" },
  { id: "docs", name: "Documentation", icon: FileText, role: { en: "Technical Docs, READMEs, diagrams", pt: "Docs técnicas, READMEs, diagramas", es: "Documentación técnica, READMEs, diagramas" }, color: "from-sky-500 to-blue-600" },
  { id: "pm", name: "Project Manager", icon: Users, role: { en: "Sprints, milestones, risk analysis", pt: "Sprints, marcos, análise de riscos", es: "Sprints, hitos, análisis de riesgos" }, color: "from-emerald-600 to-green-700" },
  { id: "professor", name: "Professor / Mentor", icon: GraduationCap, role: { en: "Adaptive teaching, explanations", pt: "Ensino adaptativo, explicações práticas", es: "Enseñanza adaptativa, explicaciones prácticas" }, color: "from-fuchsia-500 to-purple-500" },
];

const terminalSteps = [
  { cmd: "npm install -g izanagi-ai", output: "✨ Installing Izanagi CLI globally..." },
  { cmd: "izanagi init", output: "⛩️ Initializing workspace architecture & agent manifests..." },
  { cmd: "izanagi doctor", output: "🔍 System integrity verified. All 12 agents & 79+ skills online ✅" }
];

export default function Home() {
  const [lang, setLang] = useState<"en" | "pt" | "es">("pt");
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [copiedInit, setCopiedInit] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % terminalSteps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = (text: string, type: "general" | "install" | "init") => {
    navigator.clipboard.writeText(text);
    if (type === "install") {
      setCopiedInstall(true);
      setTimeout(() => setCopiedInstall(false), 2000);
    } else if (type === "init") {
      setCopiedInit(true);
      setTimeout(() => setCopiedInit(false), 2000);
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const cycleLanguage = () => {
    if (lang === "pt") setLang("en");
    else if (lang === "en") setLang("es");
    else setLang("pt");
  };

  const installCommand = "npm install -g izanagi-ai";
  const initCommand = "izanagi init";

  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100 flex flex-col justify-between selection:bg-blue-500 selection:text-white overflow-x-hidden relative">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-purple-600/5 blur-[140px] pointer-events-none" />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-[#050507]/80 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20 border border-white/10"
            >
              ⛩️
            </motion.div>
            <span className="font-bold tracking-tight text-lg bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Izanagi AI
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
            <a href="#agents" className="hover:text-white transition">{t.nav.agents}</a>
            <a href="#install" className="hover:text-white transition">{t.nav.install}</a>
            <a href="#architecture" className="hover:text-white transition">{t.nav.architecture}</a>
            <a href="#cli" className="hover:text-white transition">{t.nav.cli}</a>
            <a href="https://github.com/pedrohenriquesanchesleal4-debug/izanagi-ai" target="_blank" rel="noreferrer" className="hover:text-white transition">{t.nav.github}</a>
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={cycleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 hover:border-zinc-700 text-xs font-mono text-zinc-300 transition shadow-sm"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>{lang.toUpperCase()}</span>
            </button>

            <button
              onClick={() => copyToClipboard("npm install -g izanagi-ai", "general")}
              className="hidden sm:flex items-center gap-2 bg-zinc-900/80 border border-white/10 hover:border-zinc-700 px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-300 transition shadow-inner"
            >
              <span>$ npm i -g izanagi-ai</span>
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-500" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 pt-32 pb-20 relative z-10">
        <section className="max-w-5xl mx-auto px-6 text-center pt-16 pb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8 shadow-lg shadow-blue-500/5 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-8xl font-extrabold tracking-tight text-white mb-8 leading-[1.05]"
          >
            {t.title1} <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t.title2}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-normal leading-relaxed"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a
              href="#install"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm flex items-center justify-center gap-3 transition shadow-xl shadow-blue-600/25 hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" /> {t.nav.install}
            </a>
            <a
              href="#agents"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-zinc-700 text-zinc-300 font-medium text-sm flex items-center justify-center gap-3 transition hover:scale-[1.02]"
            >
              {t.exploreAgents} <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </section>

        {/* Installation & Setup Guide */}
        <section id="install" className="max-w-4xl mx-auto px-6 mb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              {t.installTitle}
            </h2>
            <p className="text-zinc-400 text-base">
              {t.installSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-2xl shadow-2xl p-8 space-y-8"
          >
            {/* Step 1: Install with npm */}
            <div>
              <div className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-mono border border-blue-500/30">1</span>
                {t.stepInstall}
              </div>
              <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/90 border border-white/10 font-mono text-sm text-zinc-200 shadow-inner">
                <span className="text-blue-400">$ <span className="text-white">{installCommand}</span></span>
                <button
                  onClick={() => copyToClipboard(installCommand, "install")}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-300 transition"
                >
                  {copiedInstall ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedInstall ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Step 2: Initialize */}
            <div>
              <div className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-mono border border-purple-500/30">2</span>
                {t.stepInit}
              </div>
              <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/90 border border-white/10 font-mono text-sm text-zinc-200 shadow-inner">
                <span className="text-purple-400">$ <span className="text-white">{initCommand}</span></span>
                <button
                  onClick={() => copyToClipboard(initCommand, "init")}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-300 transition"
                >
                  {copiedInit ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedInit ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>

            <div className="text-xs text-zinc-500 font-mono flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Requires Node.js &gt;= 18.0.0.
            </div>
          </motion.div>
        </section>

        {/* Pipeline & Experience Grid */}
        <section className="max-w-6xl mx-auto px-6 mb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {t.stepsTitle}
            </h2>
            <p className="text-zinc-400 text-base md:text-lg">
              {t.stepsSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: t.step1Title, desc: t.step1Desc, num: "01", gradient: "from-blue-500/10 via-indigo-500/5 to-transparent" },
              { title: t.step2Title, desc: t.step2Desc, num: "02", gradient: "from-purple-500/10 via-pink-500/5 to-transparent" },
              { title: t.step3Title, desc: t.step3Desc, num: "03", gradient: "from-emerald-500/10 via-teal-500/5 to-transparent" },
              { title: t.step4Title, desc: t.step4Desc, num: "04", gradient: "from-amber-500/10 via-orange-500/5 to-transparent" },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`p-10 rounded-3xl border border-white/10 bg-gradient-to-br ${step.gradient} backdrop-blur-xl shadow-2xl relative overflow-hidden group`}
              >
                <div className="absolute top-6 right-6 font-mono text-4xl font-black text-zinc-800/60 group-hover:text-zinc-700/80 transition-colors">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 pr-12">{step.title}</h3>
                <p className="text-zinc-400 text-base leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive CLI Terminal Showcase */}
        <motion.section
          id="cli"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6 mb-36"
        >
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">{t.cliTitle}</span>
          </div>
          <div className="rounded-3xl border border-white/10 bg-zinc-950/90 backdrop-blur-xl shadow-2xl shadow-blue-500/5 overflow-hidden">
            <div className="px-5 py-4 bg-zinc-950 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs font-mono text-zinc-500">bash — izanagi runtime</div>
              <div className="w-12" />
            </div>
            <div className="p-8 font-mono text-sm space-y-5">
              <div className="text-zinc-500"># Terminal Session</div>
              {terminalSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-500 ${idx === activeStep ? "opacity-100" : "opacity-30"}`}
                >
                  <div className="flex items-center gap-3 text-blue-400">
                    <span className="text-zinc-600">$</span>
                    <span className="text-white font-semibold">{step.cmd}</span>
                  </div>
                  {idx === activeStep && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 text-zinc-300 pl-4 border-l-2 border-blue-500/50 text-xs sm:text-sm bg-blue-500/5 py-2 rounded-r-lg"
                    >
                      {step.output}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 12 Specialized Agents Grid */}
        <section id="agents" className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              {t.agentsTitle}
            </h2>
            <p className="text-zinc-400 text-base md:text-lg">
              {t.agentsSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, i) => {
              const Icon = agent.icon;
              return (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="p-8 rounded-3xl border border-white/10 bg-zinc-900/30 backdrop-blur-xl hover:border-zinc-700 transition flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${agent.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{agent.name}</h3>
                    <p className="text-sm text-zinc-400 mb-8 leading-relaxed">{agent.role[lang]}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span className="text-zinc-400">/{agent.id}</span>
                    <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-semibold">
                      activate <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Architecture & Quality Gates */}
        <section id="architecture" className="max-w-6xl mx-auto px-6 py-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 p-10 md:p-16 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-3xl relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.archTitle}</h2>
              <p className="text-zinc-400 text-base md:text-lg mb-10 leading-relaxed">
                {t.archSubtitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.archItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-zinc-900/90 border border-white/10 shadow-inner"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-zinc-200">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-xs text-zinc-500 font-mono relative z-10">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}
