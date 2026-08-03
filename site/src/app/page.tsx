"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Terminal, Shield, Cpu, Zap, Code2, Layers, ArrowRight, CheckCircle2, Copy, Sparkles, Compass, Film, Database, Bug, FileText, Users, GraduationCap, Globe, Download, Play, Check, Box, RefreshCw, Github, ExternalLink, Mail, CpuIcon } from "lucide-react";

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
  { id: "discovery", name: "Discovery", icon: Compass, role: "Entrevista profunda, pesquisa web, geração de prompts ricos.", skills: ["brainstorming", "deep-research"], color: "border-blue-500/30 hover:border-blue-500/60 bg-blue-500/5" },
  { id: "architect", name: "Software Architect", icon: Layers, role: "System Design, Clean Architecture, DDD, CQRS, ADRs.", skills: ["architecture-patterns", "memory-projeto"], color: "border-purple-500/30 hover:border-purple-500/60 bg-purple-500/5" },
  { id: "senior-engineer", name: "Senior Engineer", icon: Code2, role: "Desenvolvimento Full-Stack, refatoração e código limpo testável.", skills: ["frontend", "ai-agent", "tdd"], color: "border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-500/5" },
  { id: "animation", name: "Animation Engineer", icon: Film, role: "Scrollytelling, WebGL 3D, motion design de alta performance.", skills: ["animation-web", "motion-design", "webgl-3d"], color: "border-pink-500/30 hover:border-pink-500/60 bg-pink-500/5" },
  { id: "security", name: "Security Engineer", icon: Shield, role: "OWASP Top 10, auth, cryptografia e secure coding estrito.", skills: ["security-privacy"], color: "border-amber-500/30 hover:border-amber-500/60 bg-amber-500/5" },
  { id: "devops", name: "DevOps Engineer", icon: Cpu, role: "Docker, Kubernetes, CI/CD, IaC com Terraform e observabilidade.", skills: ["cloud-infra", "iac-terraform"], color: "border-indigo-500/30 hover:border-indigo-500/60 bg-indigo-500/5" },
  { id: "database", name: "Database Engineer", icon: Database, role: "SQL avançado, PostgreSQL, Redis, modelagem de dados e índices.", skills: ["data-engineering"], color: "border-violet-500/30 hover:border-violet-500/60 bg-violet-500/5" },
  { id: "bug-hunter", name: "Bug Hunter", icon: Bug, role: "Debugging cirúrgico e análise de causa raiz de regressões.", skills: ["tdd", "qa"], color: "border-red-500/30 hover:border-red-500/60 bg-red-500/5" },
  { id: "techlead", name: "Tech Lead", icon: Sparkles, role: "Code review rigoroso, governança técnica e mentoria de equipe.", skills: ["architecture-patterns"], color: "border-yellow-500/30 hover:border-yellow-500/60 bg-yellow-500/5" },
  { id: "docs", name: "Documentation", icon: FileText, role: "Geração de documentação técnica, READMEs impecáveis e diagramas.", skills: ["architecture-patterns"], color: "border-sky-500/30 hover:border-sky-500/60 bg-sky-500/5" },
  { id: "pm", name: "Project Manager", icon: Users, role: "Planejamento de sprints, marcos, análise de riscos e entregas.", skills: ["brainstorming"], color: "border-emerald-600/30 hover:border-emerald-600/60 bg-emerald-600/5" },
  { id: "professor", name: "Professor / Mentor", icon: GraduationCap, role: "Ensino adaptativo, explicações didáticas e mentoria prática.", skills: ["professor-modo"], color: "border-fuchsia-500/30 hover:border-fuchsia-500/60 bg-fuchsia-500/5" },
];

const presetSimulations = [
  {
    label: "Criar SaaS Fintech com PostgreSQL & Auth",
    task: "Build fintech multi-tenant dashboard with PostgreSQL and JWT auth",
    steps: [
      { agent: "Discovery", action: "Analisando requisitos e gerando spec inicial...", time: "0.2s" },
      { agent: "Software Architect", action: "Projetando Clean Architecture e schema relacional...", time: "0.5s" },
      { agent: "Database Engineer", action: "Criando migrações SQL otimizadas com índices...", time: "0.8s" },
      { agent: "Security Engineer", action: "Aplicando validação OWASP Top 10 e criptografia...", time: "1.1s" },
      { agent: "Senior Engineer", action: "Implementando componentes Next.js + Tailwind...", time: "1.6s" }
    ]
  },
  {
    label: "Site 3D Imersivo com Scrollytelling",
    task: "Build Apple-style 3D WebGL product showcase with scrollytelling",
    steps: [
      { agent: "Discovery", action: "Mapeando referências visuais de alto padrão...", time: "0.3s" },
      { agent: "Animation Engineer", action: "Configurando GSAP ScrollTrigger e shaders WebGL...", time: "0.6s" },
      { agent: "Senior Engineer", action: "Montando estrutura de componentes fluidos a 60fps...", time: "1.0s" },
      { agent: "Tech Lead", action: "Validando performance e bundle size...", time: "1.4s" }
    ]
  }
];

const scrollySteps = [
  { num: "01", title: "Scaffold Instantâneo", desc: "Inicializa o workspace com `npx izanagi init`. Sem instalações globais complexas, apenas execução direta via npx." },
  { num: "02", title: "Resolução Dinâmica de Skills", desc: "O motor decide qual skill ativar (como `/discovery` ou `/architect`) com base no contexto exato da tarefa." },
  { num: "03", title: "Execução Swarm Multi-Agente", desc: "Múltiplos agentes especializados colaboram em paralelo, dividindo responsabilidades sem duplicação de esforço." },
  { num: "04", title: "Portões de Qualidade & Deploy", desc: "Verificação algorítmica estrita de segurança, performance e arquitetura antes de entregar o código final." }
];

export default function Home() {
  const [copiedInit, setCopiedInit] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [simStep, setSimStep] = useState(0);
  const [activeAgentModal, setActiveAgentModal] = useState<typeof agents[0] | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const runSimulation = (index: number) => {
    setSelectedPreset(index);
    setIsRunningSim(true);
    setSimStep(0);

    const sim = presetSimulations[index];
    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < sim.steps.length) {
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

  return (
    <div ref={containerRef} className="min-h-screen bg-[#070709] text-zinc-100 flex flex-col justify-between selection:bg-zinc-200 selection:text-zinc-900 font-sans relative overflow-x-hidden">
      <MouseSpotlight />

      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#070709]/80 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center font-bold text-white shadow-md">
              ⛩️
            </div>
            <span className="font-bold tracking-tight text-base text-zinc-100">
              Izanagi <span className="text-zinc-400 font-normal">AI</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
            <Link href="/guide" className="hover:text-white transition">Guia</Link>
            <a href="#about" className="hover:text-white transition">O que é</a>
            <a href="#scrolly" className="hover:text-white transition">Pipeline</a>
            <a href="#playground" className="hover:text-white transition">Simulador</a>
            <a href="#agents" className="hover:text-white transition">Agentes (12)</a>
            <a href="https://github.com/pedrohenriquesanchesleal4-debug/izanagi-ai" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
            <a href="https://www.npmjs.com/package/izanagi-ai" target="_blank" rel="noreferrer" className="hover:text-white transition">NPM</a>
            <a href="https://pedrohsl-portfolio.vercel.app" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1 text-blue-400">
              Contato <ExternalLink className="w-3 h-3" />
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://pedrohsl-portfolio.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 rounded-lg bg-white text-zinc-900 font-medium text-xs hover:bg-zinc-200 transition shadow-sm"
            >
              Portfólio & Contato
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 pt-32 pb-24 relative z-10">
        <section className="max-w-5xl mx-auto px-6 text-center pt-16 pb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            v2.3.4 — Motor Multi-Agente Determinístico via NPX
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-6 leading-[1.05]"
          >
            Pense. Construa. Evolua.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed"
          >
            Framework modular orientado a skills para agentes de IA especializados em engenharia de software autônoma. Baixo consumo de tokens e execução determinística.
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
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition"
              >
                {copiedInit ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedInit ? "Copiado" : "Copiar"}</span>
              </button>
            </div>
            <a
              href="#playground"
              className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs flex items-center gap-2 transition border border-white/10"
            >
              <Play className="w-3.5 h-3.5 text-blue-400 fill-blue-400" /> Testar Simulador
            </a>
          </motion.div>
        </section>

        {/* O que é o Izanagi AI? (About Section) */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-20">
          <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-8 md:p-14 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Fundação & Visão</span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-6">O que é o Izanagi AI?</h2>
              
              <div className="space-y-4 text-sm text-zinc-300 leading-relaxed font-normal">
                <p>
                  O <strong className="text-white font-semibold">Izanagi AI</strong> é um framework meta projetado para engenharia de software autônoma orientada a agentes. Ele não é apenas um template — é um ecossistema completo baseado em camadas (<span className="text-blue-400 font-mono">Decision → Context → Skill → Quality → Reflection → Memory</span>).
                </p>
                <p>
                  Enquanto ferramentas tradicionais geram código solto e genérico ("cara de IA"), o Izanagi divide o desenvolvimento em marcos estritos através de <strong className="text-white">12 agentes especializados</strong> e mais de <strong className="text-white">70 skills modulares</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5">
                  <div className="text-white font-bold text-base mb-1">12 Agentes</div>
                  <div className="text-zinc-400">Especializados por domínios (Arquitetura, DB, Security...)</div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5">
                  <div className="text-white font-bold text-base mb-1">Baixo Token</div>
                  <div className="text-zinc-400">Contexto enxuto e compactação contínua de memória</div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5">
                  <div className="text-white font-bold text-base mb-1">Zero Boilerplate</div>
                  <div className="text-zinc-400">Arquitetura estrita e código de alta fidelidade técnica</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scrollytelling Section */}
        <section id="scrolly" className="max-w-5xl mx-auto px-6 py-20 relative">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Experiência Imersiva</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Como o Izanagi Funciona</h2>
            <p className="text-zinc-400 text-sm mt-2">Role para acompanhar o fluxo determinístico do swarm.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {scrollySteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl relative overflow-hidden group hover:border-zinc-700 transition"
              >
                <div className="absolute top-6 right-6 font-mono text-4xl font-bold text-zinc-800 group-hover:text-zinc-700 transition-colors">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 pr-10">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Swarm Playground Section */}
        <section id="playground" className="max-w-5xl mx-auto px-6 mb-28">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Simulador Interativo ao Vivo</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">Veja o Swarm em Ação</h2>
            <p className="text-zinc-400 text-sm mt-1">Selecione um cenário e execute a pipeline de agentes em tempo real.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-950/90 shadow-2xl overflow-hidden backdrop-blur-2xl">
            {/* Preset Selector */}
            <div className="p-4 bg-zinc-900/60 border-b border-white/10 flex flex-wrap gap-3 items-center justify-between">
              <div className="flex items-center gap-2">
                {presetSimulations.map((preset, idx) => (
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
                {isRunningSim ? "Executando Swarm..." : "Executar Swarm"}
              </button>
            </div>

            {/* Simulation Terminal */}
            <div className="p-6 font-mono text-xs space-y-4 min-h-[280px] bg-[#050507]">
              <div className="text-zinc-500 flex items-center justify-between">
                <span>$ npx izanagi run --task "{presetSimulations[selectedPreset].task}"</span>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${isRunningSim ? "bg-amber-400 animate-ping" : "bg-emerald-400"}`} />
                  {isRunningSim ? "Processando..." : "Concluído"}
                </span>
              </div>

              <div className="space-y-3 pt-2">
                {presetSimulations[selectedPreset].steps.slice(0, isRunningSim ? simStep + 1 : presetSimulations[selectedPreset].steps.length).map((step, sIdx) => (
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
                    <span className="text-zinc-600 text-[10px]">{step.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 12 Specialized Agents Grid */}
        <section id="agents" className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Arquitetura Modular</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">12 Agentes Especializados</h2>
            <p className="text-zinc-400 text-sm mt-2">
              Cada agente possui escopo estrito, correntes de skills dedicadas e validação automatizada.
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
                    <p className="text-xs text-zinc-400 leading-relaxed mb-4">{agent.role}</p>
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
            <p className="text-zinc-400 font-medium">© 2026 Izanagi AI Framework. Desenvolvido com precisão.</p>
          </div>
          <div className="flex items-center gap-6 text-zinc-400">
            <a href="https://github.com/pedrohenriquesanchesleal4-debug/izanagi-ai" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
              <Github className="w-3.5 h-3.5" /> Repositório GitHub
            </a>
            <a href="https://www.npmjs.com/package/izanagi-ai" target="_blank" rel="noreferrer" className="hover:text-white transition">
              NPM Package
            </a>
            <a href="https://pedrohsl-portfolio.vercel.app" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1 text-blue-400">
              <Mail className="w-3.5 h-3.5" /> Contato / Portfólio
            </a>
          </div>
        </div>
      </footer>

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

              <p className="text-sm text-zinc-300 mb-6 leading-relaxed">{activeAgentModal.role}</p>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">Skills Vinculadas:</h4>
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
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
