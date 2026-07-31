import fs from 'fs';
import path from 'path';
import { resolveFrameworkRoot } from '../installer.js';

/**
 * Resolve o framework root para comandos: prioriza `.agents/` do projeto atual
 * (instalação local inicializada via `izanagi init`), senão usa o pacote instalado.
 */
export function getProjectRoot(cwd: string, packageBaseDir: string): string {
  return resolveFrameworkRoot(cwd);
}

/**
 * Localiza o arquivo JSON de um agente.
 * Procura em: `.agents/agents` do projeto, `agents/` do cwd e pacote instalado.
 */
export function findAgentFile(cwd: string, packageBaseDir: string, agentIdentifier: string): string | null {
  const candidates = [
    path.join(cwd, '.agents', 'agents'),
    path.join(cwd, 'agents'),
    path.join(packageBaseDir, 'agents')
  ];

  const names = [`${agentIdentifier}-agent.json`, `${agentIdentifier}.json`];

  for (const dir of candidates) {
    for (const name of names) {
      const file = path.join(dir, name);
      if (fs.existsSync(file)) return file;
    }
  }

  // Tenta match flexível: ex. "architect-agent" → "architect-agent.json"
  for (const dir of candidates) {
    if (!fs.existsSync(dir)) continue;
    const match = fs.readdirSync(dir).find(
      (f: string) => f.toLowerCase().replace(/\.json$/i, '') === agentIdentifier.toLowerCase()
    );
    if (match) return path.join(dir, match);
  }

  return null;
}

export interface SkillAlias {
  [alias: string]: string;
}

/**
 * Lê os aliases do skill-resolver (core/skill-resolver.json).
 */
export function loadSkillResolver(cwd: string, packageBaseDir: string): SkillAlias {
  const candidates = [
    path.join(cwd, '.agents', 'core', 'skill-resolver.json'),
    path.join(cwd, 'core', 'skill-resolver.json'),
    path.join(packageBaseDir, 'core', 'skill-resolver.json')
  ];

  for (const file of candidates) {
    if (fs.existsSync(file)) {
      try {
        const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
        return data.aliases || {};
      } catch {
        // segue para o próximo candidato
      }
    }
  }
  return {};
}

/**
 * Resolve o caminho real de uma skill a partir do alias registrado no resolver.
 */
export function resolveSkillPath(cwd: string, packageBaseDir: string, alias: string): string | null {
  const aliases = loadSkillResolver(cwd, packageBaseDir);
  const rel = aliases[alias];
  if (!rel) return null;

  const roots = [
    path.join(cwd, '.agents'),
    path.join(cwd),
    packageBaseDir
  ];

  for (const root of roots) {
    const candidate = path.join(root, rel);
    if (fs.existsSync(candidate)) return candidate;
    if (fs.existsSync(candidate + '.md')) return candidate + '.md';
  }
  return null;
}

/**
 * Lê a configuração local do projeto (.izanagi/izanagi.config.json).
 */
export function loadProjectConfig(cwd: string): Record<string, unknown> | null {
  const file = path.join(cwd, '.izanagi', 'izanagi.config.json');
  if (!fs.existsSync(file)) return null;
  try {
    return JSON.parse(fs.readFileSync(file, 'utf-8'));
  } catch {
    return null;
  }
}
