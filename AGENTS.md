# AGENTS.md — Izanagi AI

Izanagi AI é um **framework meta** para agentes de IA: instruções (markdown + JSON) que transformam qualquer LLM em um engenheiro de software autônomo, com arquitetura em camadas, skills especializadas, agentes pré-definidos e uma **CLI executável** (`izanagi`).

O repositório combina **conteúdo do framework** (skills, agentes, engines) com o **código-fonte da CLI** (TypeScript → `dist/`).

---

## Arquitetura

- `SYSTEM.md` — Fundação: identidade, princípios, arquitetura em camadas (Decision → Context → Skill → Quality → Reflection → Memory)
- `RULES.md` — 9 regras operacionais + formato de declaração de skills + regras de comunicação
- `core/` — 8 engines (decision-engine, context-engine, token-manager, compression-engine, reflection-engine, evolution-engine, quality-gates, planning-engine)
- `agents/` — 11 agentes pré-definidos como JSONs que compõem skills (inclui o **Animation Engineer**)
- `skills/INDEX.md` — Registro central de todas as skills. **Qualquer skill nova deve ser registrada aqui**
- `core/skill-resolver.json` — Mapeia short IDs para paths de skills. **Qualquer skill nova deve ter alias aqui** para ser usada por agentes
- `.opencode/agent/` — Agentes opencode (ex: `animation.md` → ativado digitando `/animation`) copiados para projetos no `izanagi init`
- `src/` — Código-fonte da CLI (TypeScript). Build: `npm run build` → `dist/`

## Regras-chave

- **Toda skill precisa de entrada em dois lugares**: `skills/INDEX.md` + `core/skill-resolver.json`
- **Formato de skill**: YAML header (name, version, priority, dependencies, triggers, token_budget, compatibility) + seções (Identity → Goals → Workflow → Decision Tree → Rules → Checklists → Metrics → Evolution)
- **Agentes**: JSON com `skills` (array de short IDs), `chains` (mapa de tipo de task → chain de skills), `always`/`never`
- **Task routing**: `RULES.md:86-106` — 6 classificações (new_project, bug, refactor, review, question, security_audit) + fallback genérico
- **Output format** obrigatório (RULES.md seção 2.1): `## Context` → `## File` (com path) → `## Notes`
- **Token budgets** (SYSTEM.md:115-120): 2048 soft / 4096 hard por resposta, 8192 contexto, compressão automática >70%
- **Quality Gates** (SYSTEM.md:129-135): Security → Style → Clarity → Conciseness → Completeness (nesta ordem)
- **5 proibições** (RULES.md:49-53): não adivinhar APIs, não codificar sem entender o codebase, não repetir contexto, não ignorar convenções, não hardcodear secrets

## CLI (`izanagi`)

Instalação: `npm install -g izanagi-ai` (ou `npx izanagi <cmd>` sem instalar).

| Comando | Descrição |
|---|---|
| `izanagi init [dir] [--packs a,b,c]` | Cria projeto com `.agents/` (seleção interativa de packs de skills). `core` é sempre incluído. |
| `izanagi run [agent] --task "<task>"` | Classifica a task, seleciona agente + skill chain e resolve as skills no resolver. |
| `izanagi create <agent\|skill> <name>` | Cria scaffold de agente (JSON) ou skill (SKILL.md) no projeto atual. |
| `izanagi compile <agent> [file]` | Compila System Prompt completo (agente + SYSTEM.md + RULES.md). |
| `izanagi list [skills\|agents]` | Lista skills do resolver e agentes disponíveis. |
| `izanagi doctor` | Valida integridade: SYSTEM/RULES, JSONs de agentes, aliases do resolver. |
| `izanagi --version` / `--help` | Versão / ajuda. |

**Resolução de contexto**: comandos priorizam `.agents/` do projeto atual (criado por `izanagi init`); se não existir, usam a raiz do pacote instalado. Agentes custom criados com `izanagi create` (em `agents/` do projeto) são encontrados pelo `run`.

**Animation Engineer**: agente para sites cinematográficos (scrollytelling, 3D WebGL, motion design). Ative com `izanagi run animation --task "..."` ou, no opencode, digitando `/animation`. Skills: `animation-web`, `webgl-3d`, `motion-design` (referências de sites premiados em `skills/*/references.md`).

**Packs disponíveis** no `init`: `core` (obrigatório), `agents`, `skills`, `architecture`, `coding`, `database`, `devops`, `security`, `testing`, `memory`, `optimization`, `teaching`.

## Estrutura de diretórios

| Diretório | Conteúdo |
|-----------|----------|
| `core/` | Engines do sistema (8 skills) + skill-resolver.json |
| `architecture/` | Padrões arquiteturais (Clean Arch, Hexagonal, DDD, CQRS, etc.) |
| `coding/`, `backend/`, `frontend/` | Skills de engenharia |
| `skills/` | 111 skills especializadas (quality, debugging, cloud, devops, etc.) |
| `agents/` | Definições de agentes como JSON |
| `memory/` | Gerenciamento de memória (6 skills) |
| `teaching/` | Modo professor e ensino adaptativo |
| `testing/` | Testes unitários, integração, E2E, mocking |
| `security/` | OWASP, pentest, segurança |
| `database/` | SQL, PostgreSQL, MySQL, Redis |
| `devops/` | Docker, K8s, CI/CD, Linux |
| `optimization/` | Redução de tokens, otimização de prompt, custo |
| `src/` | Código-fonte da CLI (TypeScript) |
| `dist/` | Build da CLI (gerado, não editar) |

## Convenções

- **Versão atual**: v2.1.0 (SemVer). CHANGELOG.md e ROADMAP.md mostram o plano até v3.0.0
- **Publicação**: pacote npm `izanagi-ai` (bins `izanagi`/`izanagi-ai`). Bump: `npm run bump:<type>`; publicar: `npm publish` (prepublishOnly roda o build)
- **Idioma**: maior parte em português (descrições de agentes, READMEs); conteúdo técnico em inglês
- **Filosofia**: "Architecture first. Code second." — nunca pular planejamento
- O framework é **carregado automaticamente** via `opencode.json` (`instructions: ["AGENTS.md", "SYSTEM.md"]`) ao iniciar o opencode na raiz do projeto; projetos inicializados com `izanagi init` recebem `opencode.json` apontando para `.agents/`

## Skills (Economia de Tokens)

Skills nicho foram **desativadas** por padrão para reduzir o system prompt (~50% menos skills carregadas).

**Ativas:** `ai-agent`, `ai-agent-dev`, `animation-web`, `architecture-patterns`, `economia-tokens`, `frontend`, `frontend-dev`, `handoff-sessao`, `memoria-projeto`, `motion-design`, `professor-modo`, `qa`, `qa-engineer`, `security-privacy`, `web-perf-seo`, `webgl-3d`

**Desativadas (renomeadas para `SKILL.md.disabled`):** `chaos-engineering`, `cloud-architect`, `cloud-infra`, `data-engineer`, `data-engineering`, `feature-flags`, `graphql`, `i18n-l10n`, `iac-terraform`, `legacy-migration`, `mobile-dev`, `mobile-engineer`, `privacy-engineer`, `serverless-edge`, `sre-reliability`, `wasm`, `web-perf-engineer`, `websocket-realtime`

**Ativação automática:** Ao receber um pedido cujo contexto indica que uma skill desativada é necessária (ex: "criar app mobile" → `mobile-dev`, "deploy na AWS" → `cloud-infra`), o agente DEVE:
1. Renomear `SKILL.md.disabled` → `SKILL.md` na pasta correspondente
2. Informar o usuário que a skill foi ativada e é preciso reiniciar o opencode
3. Não prosseguir com a tarefa até o reinício — o usuário precisa reiniciar para a skill carregar

## Site de Portfólio (SiteIzanagi)

O repositório `site/` contém um site Next.js (portfólio do Izanagi AI) publicado em `github.com/pedrohenriquesanchesleal4-debug/SiteIzanagi`.
**Toda vez que o framework for atualizado**, o agente DEVE também atualizar o site (i18n, estrutura, comandos, versão) no repositório do site e enviar push.

## Design Preference (Default)

- **Estilo visual**: Futurista Apple-like — fundo escuro, glassmorphism, gradientes suaves, partículas animadas, 3D tilt em cards, tipografia bold, animações sutis, sem excesso de "cara de IA"
- **Stack**: a stack (React, Vue, HTML/CSS/JS, etc.) é definida pelo contexto do projeto ou pelo que o usuário pedir — o estilo visual se adapta à stack, não o contrário
- **Exceptions**: quando o usuário pedir um estilo específico, seguir a solicitação
