"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Check, Copy, ArrowLeft, ArrowRight, BookOpen, Layers, Cpu, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

export default function GuidePage() {
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
    doctor: "npx izanagi doctor"
  };

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 flex flex-col justify-between selection:bg-zinc-200 selection:text-zinc-900 font-sans relative">
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#070709]/80 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition text-xs font-mono">
              <ArrowLeft className="w-4 h-4" /> Voltar ao Início
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
          <div className="w-24" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-6 pt-36 pb-24 relative z-10 w-full">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono mb-6">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" /> Documentação Oficial v2.3.4
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Guia de Instalação & Uso
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed">
            Aprenda a inicializar o Izanagi AI em seu workspace, configurar packs de skills especializados e acionar o swarm de agentes autônomos.
          </p>
        </div>

        {/* Section 1: Prerequisites */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-xs font-mono">1</span>
            Pré-requisitos
          </h2>
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-3 text-sm text-zinc-300">
            <p>Para utilizar o Izanagi AI, certifique-se de ter em seu ambiente:</p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-400 font-mono text-xs">
              <li><strong className="text-zinc-200">Node.js</strong> &gt;= 18.0.0 instalado</li>
              <li><strong className="text-zinc-200">npm</strong> ou <strong className="text-zinc-200">npx</strong> (para execução sem instalação global)</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Quick Start with NPX */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-xs font-mono">2</span>
            Inicialização Rápida via NPX
          </h2>
          <p className="text-zinc-sm text-zinc-400 mb-4">
            O método mais rápido é utilizar o <code className="text-white bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">npx</code> para criar seu workspace interativo:
          </p>
          <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-white/10 font-mono text-xs text-zinc-200 shadow-inner">
            <span className="text-zinc-400">$ <span className="text-white">{codeSnippets.init}</span></span>
            <button
              onClick={() => copyToClipboard(codeSnippets.init, "init")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition text-xs"
            >
              {copiedCmd === "init" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCmd === "init" ? "Copiado!" : "Copiar"}</span>
            </button>
          </div>
        </section>

        {/* Section 3: Packs Selection */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-xs font-mono">3</span>
            Seleção de Packs de Skills
          </h2>
          <p className="text-sm text-zinc-400 mb-4">
            Você pode especificar quais domínios deseja incluir no seu projeto ao rodar o comando init:
          </p>
          <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-white/10 font-mono text-xs text-zinc-200 shadow-inner mb-4">
            <span className="text-zinc-400">$ <span className="text-white">{codeSnippets.packs}</span></span>
            <button
              onClick={() => copyToClipboard(codeSnippets.packs, "packs")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition text-xs"
            >
              {copiedCmd === "packs" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCmd === "packs" ? "Copiado!" : "Copiar"}</span>
            </button>
          </div>
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
            Executando Tarefas com Agentes
          </h2>
          <p className="text-sm text-zinc-400 mb-4">
            O Izanagi classifica automaticamente a tarefa ou permite direcionar um agente específico:
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-white/10 font-mono text-xs text-zinc-200 shadow-inner">
              <span className="text-zinc-400">$ <span className="text-white">{codeSnippets.run}</span></span>
              <button
                onClick={() => copyToClipboard(codeSnippets.run, "run")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition text-xs"
              >
                {copiedCmd === "run" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCmd === "run" ? "Copiado!" : "Copiar"}</span>
              </button>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-white/10 font-mono text-xs text-zinc-200 shadow-inner">
              <span className="text-zinc-400">$ <span className="text-white">{codeSnippets.runAgent}</span></span>
              <button
                onClick={() => copyToClipboard(codeSnippets.runAgent, "runAgent")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition text-xs"
              >
                {copiedCmd === "runAgent" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCmd === "runAgent" ? "Copiado!" : "Copiar"}</span>
              </button>
            </div>
          </div>
        </section>

        {/* Section 5: Doctor & Integrity */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-xs font-mono">5</span>
            Auditoria e Diagnóstico
          </h2>
          <p className="text-sm text-zinc-400 mb-4">
            Valide a integridade do framework, JSONs de agentes e mapeamentos de aliases a qualquer momento:
          </p>
          <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-white/10 font-mono text-xs text-zinc-200 shadow-inner">
            <span className="text-zinc-400">$ <span className="text-white">{codeSnippets.doctor}</span></span>
            <button
              onClick={() => copyToClipboard(codeSnippets.doctor, "doctor")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition text-xs"
            >
              {copiedCmd === "doctor" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCmd === "doctor" ? "Copiado!" : "Copiar"}</span>
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-zinc-500 font-mono bg-zinc-950">
        <p>© 2026 Izanagi AI Framework. Guia oficial de instalação.</p>
      </footer>
    </div>
  );
}
