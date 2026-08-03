# AGENTS.md — Izanagi AI Framework Reference

> Version 2.3.4
> Modular Skill-Oriented AI Prompt & Agent Framework for Autonomous Software Engineering

---

## 1. Visão Geral do Framework

Izanagi AI é um **framework meta** para engenharia de software autônoma orientada a agentes: arquitetura em camadas (Decision → Context → Skill → Quality → Reflection → Memory), biblioteca de skills especializadas, 12 agentes pré-definidos e uma **CLI executável (`izanagi`)** publicada no npm (`izanagi-ai`). Este repositório É o framework (não um app que o usa).

---

## 2. Agentes & Comandos Opencode (`/`)

12 agentes em `agents/*.json` + orquestrador `/agents` (`.opencode/agent/agents.md`). Cada agente tem `chains` (nome → array de **aliases** de skill) e `skills` (array de aliases). Existe também um `.md` por agente em `.opencode/agent/` para ativação via slash.

| Comando | Arquivo | Papel |
|---|---|---|
| `/agents` | `.opencode/agent/agents.md` | Orquestrador Multi-Agente (single/multi/auto/swarm) |
| `/discovery` | `agents/discovery-agent.json` | Pré-produção: entrevista, pesquisa web, preview, prompt rico ⭐ começo de projeto novo |
| `/animation` | `agents/animation-agent.json` | Scrollytelling, 3D WebGL, motion signature |
| `/architect` | `agents/architect-agent.json` | System design, Clean Arch, DDD, CQRS, ADRs |
| `/senior-engineer` | `agents/senior-engineer-agent.json` | Full-stack, refactoring, código limpo/testável |
| `/techlead` | `agents/techlead-agent.json` | Code review, governança, mentoria |
| `/security` | `agents/security-agent.json` | OWASP Top 10, auth, secure coding |
| `/devops` | `agents/devops-agent.json` | CI/CD, Docker, K8s, IaC, observabilidade |
| `/database` | `agents/database-agent.json` | SQL, PostgreSQL, Redis, modelagem |
| `/bug-hunter` | `agents/bug-hunter-agent.json` | Debug, root cause analysis |
| `/docs` | `agents/docs-agent.json` | Docs técnicos, READMEs, diagramas |
| `/pm` | `agents/pm-agent.json` | Sprints, milestones, riscos |
| `/professor` | `agents/professor-agent.json` | Ensino adaptativo, explicações |

---

## 3. Comandos de Desenvolvimento (ordem importa)

```
npm install          # instala deps (self-dependency: package.json depende de "izanagi-ai": "^2.2.7" — não remover)
npm run build        # tsc && node dist/scripts/generate-manifest.js
npm run verify       # build + teste de instalação em sandbox (passa todos os pack IDs)
npm run doctor       # node bin/izanagi.js doctor — auditoria de integridade
npm run bump:patch   # npm version patch --no-git-tag-version (também minor/major)
npm publish          # prepublishOnly roda build; depois: git push
```

**Gotchas críticos:**
- `dist/` é gitignored e `bin/izanagi.js` importa de `../dist/cli/index.js` — **rode `npm run build` antes de qualquer comando CLI local**, senão roda código obsoleto ou quebra.
- `doctor` só valida: SYSTEM.md/RULES.md, JSONs de agentes e aliases do resolver → targets. Não valida chains dos agentes nem o conteúdo de `.manifest`.
- Não há test runner (sem `npm test`). Verificação = `npm run build` + `npm run verify` + `npm run doctor`.
- CI (`.github/workflows/publish.yml`): roda `build` + `verify` em push/PR; publica no npm em tags `v*`/release (precisa do secret `NPM_TOKEN`).
- Padrão de commit do repo: `chore: bump to vX.Y.Z` para bumps e `feat:`/`fix:`/`docs:` descritivos em PT-BR para mudanças.

---

## 4. Estrutura do Framework

- `core/` — 8 engines (.md) + **`skill-resolver.json`** (mapa alias → target; NÃO editar à mão sem validar targets)
- `agents/` — 12 definições de agentes em JSON (fonte da verdade para o `/agents`)
- `skills/` — 79+ skills em `skills/<name>/SKILL.md` (+ `references.md` opcional)
- `architecture/ coding/ database/ devops/ memory/ optimization/ security/ teaching/ testing/` — skills legadas em arquivo único `.md`
- `.opencode/agent/` — comandos slash do Opencode
- `src/` — CLI TypeScript (entrypoint: `src/cli/index.ts` → `runCLI`); scripts de release em `src/scripts/`
- `SYSTEM.md` & `RULES.md` — fundação e regras operacionais (carregados via `opencode.json` → instructions)

---

## 5. Skill Resolver — como aliases resolvem

`core/skill-resolver.json` → `aliases: { alias: "categoria/nome" }` (204 aliases). A resolução de um target tenta, em ordem:
1. arquivo direto (`skills/foo`)
2. `skills/foo.md`
3. `skills/foo/SKILL.md`

**Ao adicionar/remover skill:** edite o resolver (ou rode `node dist/scripts/update-resolver.js` para regenerar aliases de `skills/*`), depois valide com `npm run doctor` — ele acusa alias → target inexistente como warning.

---

## 6. Gotcha `.agents/` (mascarador de bugs)

Este repo tem uma pasta `.agents/` (gitignored) que é a instalação local do framework — o CLI (doctor/list/run) **prioriza `.agents/` do cwd** sobre a raiz do repo (`resolveFrameworkRoot`). Consequência prática:
- Se `.agents/` ficar desatualizado em relação à raiz, o `doctor` valida contra o espelho velho e **mascara bugs reais** (ex.: aliases quebrados resolviam só porque o `.agents` tinha arquivos antigos).
- **Sincronize manualmente** mudanças de `skills/`, `core/`, `agents/`, `SYSTEM.md`/`RULES.md` para `.agents/` (não há script de sync — apenas copie os arquivos alterados). Manter raiz e `.agents` idênticos (compare com: `Get-ChildItem -Recurse` e `Compare-Object`).
- `my-project/` na raiz é lixo de teste do instalador (snapshot antigo) — ignorar, não editar.

---

## 7. `.manifest` (catálogo gerado)

`.manifest` é **gerado no build** por `src/scripts/generate-manifest.ts` (versão do package.json + 12 agents + 188 skills do resolver, com validação de paths — 0 quebrados ou o build falha). **Não editar à mão**; rodar `npm run build` para regenerar. Incluído no pacote npm como catálogo de consulta.

---

## 8. Padrão Anti-Generic / High-Craft (Regra de Ouro)

Proibido entregar código/design genérico "cara de IA" (templates óbvios, gradientes repetitivos sem propósito, boilerplate), **a menos que o usuário peça explicitamente**.
- Padrão obrigatório: inovação, sofisticação técnica, código limpo, arquitetura refinada.
- Design padrão (quando aplicável): estilo Apple-like futurista, glassmorphism sutil, tipografia precisa, 60fps, micro-interações intencionais.

---

## 9. Release Flow (resumo)

1. `npm run bump:patch` (ou minor/major) — bumpa `package.json`/`package-lock.json` sem tag
2. `npm run build` — recompila + regenera `.manifest` com a nova versão
3. Commit (`chore: bump to vX.Y.Z`) + `npm publish` (build roda de novo via prepublishOnly)
4. `git push` (CI roda build+verify; publish automático via tag/release se configurado)
