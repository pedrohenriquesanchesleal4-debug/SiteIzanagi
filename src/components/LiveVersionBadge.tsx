"use client";

import { useEffect, useState } from "react";

const NPM_LATEST_API = "https://registry.npmjs.org/izanagi-ai/latest";
const FALLBACK = "v2.4.1";

/** Badge de versão dinâmico · busca a última versão publicada no npm em tempo real. */
export default function LiveVersionBadge() {
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(NPM_LATEST_API)
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { version?: string } | null) => {
        if (!cancelled && data?.version) setVersion(data.version);
      })
      .catch(() => {
        if (!cancelled) setVersion(FALLBACK);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono mb-8 backdrop-blur-md">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      {version ? `v${version}` : FALLBACK}
      <span className="text-zinc-500 hidden sm:inline">· Feed npm ao vivo</span>
    </span>
  );
}
