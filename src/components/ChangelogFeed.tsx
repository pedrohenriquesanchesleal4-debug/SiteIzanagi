"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Wrench,
  RefreshCw,
  FileText,
  GitBranch,
  Cpu,
  TestTube,
  Rocket,
  Layers,
  Activity,
  AlertCircle,
  ExternalLink,
  Hash,
} from "lucide-react";
import { useLanguage } from "../lib/i18n/LanguageProvider";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type CommitType = "feat" | "fix" | "chore" | "docs" | "refactor" | "perf" | "test" | "build" | "ci" | "other";

interface CommitInfo {
  sha: string;
  shortSha: string;
  message: string;
  type: CommitType;
  scope?: string;
  date: string;
  url: string;
}

interface LiveVersion {
  version: string;
  publishedAt?: string;
}

// ─── Fallback offline (últimos lançamentos conhecidos do framework) ──────────
// Só é exibido se a GitHub API falhar (rate-limit/rede). Mantém o site íntegro.

const FALLBACK_COMMITS: Array<Pick<CommitInfo, "sha" | "message" | "date">> = [
  { sha: "f1098fb", message: "feat: regra anti-cara-de-IA como padrao do framework + automacao em qualquer linguagem", date: "2026-08-07" },
  { sha: "6925e7d", message: "feat: automation-engineer agent + 13 skills + orchestrator multi-agent otimizado", date: "2026-08-07" },
  { sha: "454b008", message: "chore: bump to v2.4.1", date: "2026-08-07" },
  { sha: "82b7426", message: "feat: curadoria de referencias de componentes/prompts IA (21st.dev, cult-ui, skiper-ui, reactbits, originkit, uiverse, animista, phosphor, grill-me, humanizer, websitesprompts, 10x.app)", date: "2026-08-07" },
  { sha: "110cb0b", message: "feat: v2.4.0 elite framework - skill composition engine, anti-repeat memory, deep discovery v3 e multi-CLI adapters", date: "2026-08-07" },
  { sha: "cb0cdcc", message: "feat: add visual archetype curation to Discovery agent (Bento, Glassmorphism, Motion, etc.)", date: "2026-08-06" },
  { sha: "6888d2e", message: "chore: bump to v2.3.6 with updated AGENTS.md", date: "2026-08-06" },
];

const GITHUB_REPO = "pedrohenriquesanchesleal4-debug/izanagi-ai";
const COMMITS_API = `https://api.github.com/repos/${GITHUB_REPO}/commits?per_page=25`;
const NPM_LATEST_API = "https://registry.npmjs.org/izanagi-ai/latest";

const TYPE_META: Record<CommitType, { icon: typeof Sparkles; color: string; labelKey: string }> = {
  feat: { icon: Sparkles, color: "text-blue-400 border-blue-500/30 bg-blue-500/10", labelKey: "feat" },
  fix: { icon: Wrench, color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10", labelKey: "fix" },
  chore: { icon: RefreshCw, color: "text-zinc-400 border-zinc-500/30 bg-zinc-500/10", labelKey: "chore" },
  docs: { icon: FileText, color: "text-sky-400 border-sky-500/30 bg-sky-500/10", labelKey: "docs" },
  refactor: { icon: Layers, color: "text-orange-400 border-orange-500/30 bg-orange-500/10", labelKey: "refactor" },
  perf: { icon: Activity, color: "text-amber-400 border-amber-500/30 bg-amber-500/10", labelKey: "perf" },
  test: { icon: TestTube, color: "text-rose-400 border-rose-500/30 bg-rose-500/10", labelKey: "test" },
  build: { icon: Cpu, color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10", labelKey: "build" },
  ci: { icon: Rocket, color: "text-orange-400 border-orange-500/30 bg-orange-500/10", labelKey: "ci" },
  other: { icon: GitBranch, color: "text-zinc-400 border-zinc-500/30 bg-zinc-500/10", labelKey: "other" },
};

function parseType(message: string): { type: CommitType; scope?: string } {
  const match = message.match(/^(feat|fix|chore|docs|refactor|perf|test|build|ci|revert)(\(([^)]+)\))?:/);
  if (!match) return { type: "other" };
  const type = match[1] === "revert" ? "other" : (match[1] as CommitType);
  return { type, scope: match[3] };
}

function formatDate(iso: string, locale: string) {
  try {
    return new Date(iso).toLocaleDateString(locale === "pt" ? "pt-BR" : locale === "es" ? "es-ES" : "en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function timeAgo(iso: string, locale: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor(diff / 3_600_000);
  const minutes = Math.floor(diff / 60_000);
  const units = locale === "pt" ? ["dias", "horas", "minutos"] : locale === "es" ? ["días", "horas", "minutos"] : ["days", "hours", "minutes"];
  if (days >= 1) return `${days} ${units[0]}`;
  if (hours >= 1) return `${hours} ${units[1]}`;
  return `${Math.max(minutes, 1)} ${units[2]}`;
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function ChangelogFeed() {
  const { t, locale } = useLanguage();
  const [commits, setCommits] = useState<CommitInfo[] | null>(null);
  const [version, setVersion] = useState<LiveVersion | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [commitsRes, versionRes] = await Promise.all([
          fetch(COMMITS_API, { headers: { Accept: "application/vnd.github+json" } }),
          fetch(NPM_LATEST_API),
        ]);

        let parsedCommits: CommitInfo[] = [];
        if (commitsRes.ok) {
          const data = (await commitsRes.json()) as Array<{
            sha: string;
            commit: { message: string; author: { date: string } };
            html_url: string;
          }>;
          parsedCommits = data.map((c) => {
            const firstLine = c.commit.message.split("\n")[0].trim();
            const { type, scope } = parseType(firstLine);
            return {
              sha: c.sha,
              shortSha: c.sha.slice(0, 7),
              message: firstLine,
              type,
              scope,
              date: c.commit.author.date,
              url: c.html_url,
            };
          });
        }

        let parsedVersion: LiveVersion | null = null;
        if (versionRes.ok) {
          const v = (await versionRes.json()) as { version: string; time?: Record<string, string> };
          parsedVersion = { version: v.version, publishedAt: v.time?.[v.version] };
        }

        if (cancelled) return;

        if (parsedCommits.length === 0) {
          setCommits(
            FALLBACK_COMMITS.map((c) => {
              const { type, scope } = parseType(c.message);
              return { ...c, shortSha: c.sha, type, scope, url: `https://github.com/${GITHUB_REPO}/commit/${c.sha}` };
            })
          );
          setError(true);
        } else {
          setCommits(parsedCommits);
        }
        setVersion(parsedVersion);
      } catch {
        if (cancelled) return;
        setCommits(
          FALLBACK_COMMITS.map((c) => {
            const { type, scope } = parseType(c.message);
            return { ...c, shortSha: c.sha, type, scope, url: `https://github.com/${GITHUB_REPO}/commit/${c.sha}` };
          })
        );
        setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const tFeed = t.changelog;

  return (
    <div className="space-y-8">
      {/* Status bar: versão live + modo do feed */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/70 border border-white/10 font-mono text-xs">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="text-zinc-400">{tFeed.liveLabel}:</span>
          <span className="text-white font-semibold">
            {version ? `v${version.version}` : loading ? tFeed.loading : "···"}
          </span>
          {version?.publishedAt && (
            <span className="text-zinc-500 hidden sm:inline">· {formatDate(version.publishedAt, locale)}</span>
          )}
        </div>

        <a
          href={`https://github.com/${GITHUB_REPO}/commits/main`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 border border-white/10 text-zinc-200 text-xs font-medium transition"
        >
          <GitBranch className="w-3.5 h-3.5" /> {tFeed.viewOnGithub} <ExternalLink className="w-3 h-3 opacity-60" />
        </a>
      </div>

      {/* Aviso de fallback */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3 p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 text-amber-300 text-xs leading-relaxed"
          >
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{tFeed.offlineNote}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-white/15 via-white/5 to-transparent" aria-hidden="true" />

        <div className="space-y-4">
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex gap-4 animate-pulse">
                <div className="w-5 h-5 rounded-full bg-zinc-800 border border-white/10 shrink-0" />
                <div className="flex-1 p-4 rounded-2xl bg-zinc-900/40 border border-white/5">
                  <div className="h-3 bg-zinc-800 rounded w-2/3 mb-2" />
                  <div className="h-2.5 bg-zinc-800/60 rounded w-1/3" />
                </div>
              </div>
            ))
          ) : (
            commits?.map((commit, idx) => {
              const meta = TYPE_META[commit.type];
              const Icon = meta.icon;
              return (
                <motion.div
                  key={commit.sha}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(idx * 0.04, 0.4) }}
                  className="flex gap-4"
                >
                  <div className={`w-5 h-5 rounded-full border ${meta.color} flex items-center justify-center shrink-0 mt-3 relative z-10`}>
                    <Icon className="w-2.5 h-2.5" />
                  </div>

                  <div className="flex-1 p-4 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition group">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border font-mono ${meta.color}`}>
                        {tFeed.types[meta.labelKey]}
                      </span>
                      {commit.scope && (
                        <span className="px-2 py-0.5 rounded-md bg-zinc-800 border border-white/10 text-[10px] font-mono text-zinc-400">
                          {commit.scope}
                        </span>
                      )}
                      <span className="text-[10px] font-mono text-zinc-600 flex items-center gap-1">
                        <Hash className="w-2.5 h-2.5" /> {commit.shortSha}
                      </span>
                      <span className="ml-auto text-[10px] font-mono text-zinc-500">
                        {formatDate(commit.date, locale)} · {tFeed.ago}: {timeAgo(commit.date, locale)}
                      </span>
                    </div>
                    <a
                      href={commit.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-zinc-200 group-hover:text-white transition leading-relaxed block"
                    >
                      {commit.message.replace(/^(feat|fix|chore|docs|refactor|perf|test|build|ci|revert)(\([^)]*\))?:\s*/, "")}
                    </a>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
