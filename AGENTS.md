# AGENTS.md — Izanagi AI Framework Reference

> Version 2.2.6
> Modular Skill-Oriented AI Prompt & Agent Framework for Autonomous Software Engineering

---

## 1. Visão Geral do Framework

Izanagi AI é um **framework meta** para engenharia de software autônoma orientada a agentes. Ele combina uma arquitetura em camadas (Decision → Context → Skill → Quality → Reflection → Memory), uma vasta biblioteca de skills especializadas, agentes pré-definidos e uma **CLI executável (`izanagi`)**.

---

## 2. Lista Completa de Agentes & Comandos Opencode (`/`)

O framework possui **11 agentes especializados** e um **Orquestrador Multi-Agente (`/agents`)**, todos integrados nativamente para ativação instantânea via comandos de barra (`/`) no Opencode ou via CLI (`izanagi`).

| Agente / Comando | ID / Arquivo | Papel & Especialidade |
|------------------|--------------|------------------------|
| `/agents` | `.opencode/agent/agents.md` | **Orquestrador Central**: Permite selecionar um agente, combinar múltiplos agentes, ativar auto-detecção ou modo Swarm. |
| `/animation` | `agents/animation-agent.json` | **Animation Engineer**: Cria sites cinematográficos (scrollytelling, GSAP, 3D WebGL, motion design). |
| `/architect` | `agents/architect-agent.json` | **Software Architect**: System design, Clean Architecture, Hexagonal, DDD, CQRS, ADRs e planos de implementação. |
| `/senior-engineer` | `agents/senior-engineer-agent.json` | **Senior Engineer**: Desenvolvimento full-stack robusto, código limpo, testável e refatoração de sistemas. |
| `/techlead` | `agents/techlead-agent.json` | **Tech Lead**: Liderança técnica, code reviews rigorosos, governança de arquitetura e mentoria de engenharia. |
| `/security` | `agents/security-agent.json` | **Security Engineer**: Mitigação OWASP Top 10, pentest reviews, autenticação, criptografia e secure coding. |
| `/devops` | `agents/devops-agent.json` | **DevOps Engineer**: Pipelines de CI/CD, Docker, Kubernetes, IaC e monitoramento/observabilidade. |
| `/database` | `agents/database-agent.json` | **Database Engineer**: Modelagem de dados, otimização de queries SQL, PostgreSQL, MySQL e cache Redis. |
| `/bug-hunter` | `agents/bug-hunter-agent.json` | **Bug Hunter**: Depuração sistemática, análise de causa raiz (root cause analysis) e correção de falhas complexas. |
| `/docs` | `agents/docs-agent.json` | **Documentation Writer**: Documentação técnica de alto nível, READMEs, especificações de API e diagramas UML. |
| `/pm` | `agents/pm-agent.json` | **Project Manager**: Planejamento de sprints, milestones, análise de riscos técnicos e gestão de entregas. |
| `/professor` | `agents/professor-agent.json` | **Professor / Mentor**: Ensino adaptativo, explicação didática de conceitos e mentoria técnica passo a passo. |

---

## 3. CLI Executável (`izanagi`)

Instalação global: `npm install -g izanagi-ai` (ou uso direto via `npx izanagi <cmd>`).

| Comando | Descrição Completa |
|---|---|
| `izanagi init [dir]` | Inicializa o framework no projeto. Copia automaticamente `AGENTS.md`, `SYSTEM.md` e `RULES.md` para a **raiz do projeto** (para detecção nativa pelo Opencode) e estrutura `.agents/`. |
| `izanagi run [agent] --task "<task>"` | Analisa a tarefa, classifica a categoria, seleciona o(s) agente(s) e a skill chain, resolve dependências e **gera automaticamente o arquivo `izanagi-prompt.md`** pronto para ser copiado e colado na sua IA. |
| `izanagi compile <agent> [file]` | Compila o System Prompt completo (Agente + SYSTEM.md + RULES.md + Skills) para exportação. |
| `izanagi list [skills\|agents]` | Lista todos os agentes disponíveis e todas as skills registradas no `core/skill-resolver.json`. |
| `izanagi doctor` | Executa auditoria de integridade do framework (verifica SYSTEM, RULES, integridade de JSONs de agentes e aliases do resolver). |

---

## 4. Arquitetura em Camadas & Engines (`core/`)

1. **Decision Engine**: Classifica o tipo de tarefa (`new_project`, `bug`, `refactor`, `review`, `security_audit`, etc.) e define a chain de skills ideal.
2. **Context Engine**: Constrói janela de contexto enxuta e carrega memória de projeto.
3. **Skill Executor**: Executa o grafo direcionado acíclico (DAG) de skills com resolução de dependências.
4. **Token Manager**: Monitora orçamento de tokens e aciona compressão quando >70% do orçamento é atingido.
5. **Quality Gates**: Valida obrigatoriamente todas as entregas na ordem: **Security → Style → Clarity → Conciseness → Completeness**.
6. **Reflection Engine**: Avaliação pós-tarefa e aprendizado contínuo.

---

## 5. Padrão Anti-Generic / High-Craft (Regra de Ouro)

O framework proíbe estritamente a entrega de códigos ou designs genéricos com "cara de IA" (como templates óbvios, gradientes repetitivos sem propósito, estruturas vazias ou boilerplate gerado automaticamente), **a menos que o usuário solicite explicitamente**.
- **Padrão Obrigatório**: Inovação, sofisticação técnica, código limpo e arquitetura refinada ("High-Craft").
- **Design Padrão (quando aplicável)**: Estilo Apple-like futurista, glassmorphism sutil, tipografia precisa, foco total em performance (60fps) e micro-interações intencionais.

---

## 6. Estrutura de Diretórios do Framework

- `core/` — 8 engines centrais + `skill-resolver.json`
- `agents/` — 11 definições de agentes em JSON
- `skills/` — Skills especializadas organizadas em pastas `skills/<name>/SKILL.md`
- `.opencode/agent/` — Comandos slash (`/`) nativos do Opencode
- `src/` — Código-fonte da CLI em TypeScript (`dist/` gerado no build)
- `SYSTEM.md` & `RULES.md` — Fundação e regras operacionais obrigatórias
