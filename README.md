# Izanagi AI

Framework modular, skill-oriented para agentes de IA especializados em desenvolvimento de software e automação.

> **Filosofia:** Arquitetura primeiro. Código depois. Qualidade medida. Evolução contínua.

---

## Instalação

O Izanagi AI possui uma **CLI executável** que pode ser instalada globalmente ou usada via `npx`.

```bash
# Instalação global
npm install -g izanagi-ai

# Ou execução direta via npx (sem instalar)
npx izanagi <comando>

# Agora use diretamente os comandos izanagi / izanagi-ai
izanagi --version
```

> **Nota:** o pacote é publicado como `izanagi-ai` e os bins disponíveis são `izanagi` e `izanagi-ai`.

---

## Iniciando um projeto

```bash
# Cria o projeto com seleção interativa de packs de skills (.agents/)
izanagi init my-project

# Ou especifique os packs diretamente (core é sempre incluído)
izanagi init my-project --packs core,agents,coding,database

# Entre no projeto e comece a usar
cd my-project
izanagi run "Create a login page"
```

O `init` cria:
- `.agents/` — skills, agentes e engines selecionados
- `.izanagi/izanagi.config.json` — configuração local do projeto
- `opencode.json` — auto-carrega o framework quando o opencode abre o projeto

**Packs disponíveis:** `core` (obrigatório), `agents`, `skills`, `architecture`, `coding`, `database`, `devops`, `security`, `testing`, `memory`, `optimization`, `teaching`.

---

## Comandos Principais da CLI

| Comando | Descrição |
|---|---|
| `izanagi init [dir] [--packs a,b,c]` | Cria projeto com `.agents/` e seleção de packs de skills. |
| `izanagi run [agent] --task "<task>"` | Analisa a tarefa, seleciona o agente ideal e resolve a corrente de skills. |
| `izanagi create <agent\|skill> <name>` | Cria scaffold de agente (JSON) ou skill (SKILL.md) no projeto atual. |
| `izanagi compile <agente> [arquivo]` | Compila um System Prompt completo do agente + fundação do sistema. |
| `izanagi list [skills\|agents]` | Lista todas as skills e agentes registrados com seus aliases. |
| `izanagi doctor` | Valida integridade do framework, JSONs de agentes e mapeamentos de aliases. |
| `izanagi --version` | Exibe a versão da CLI. |

### Exemplos

```bash
# Task simples (auto-classificação)
izanagi run "Create a login page"

# Agente específico com task explícita
izanagi run architect --task "Design a microservices architecture"

# Agente customizado criado no projeto
izanagi create agent my-agent
izanagi run my-agent --task "Create a login page"

# Compilar system prompt completo para um agente
izanagi compile architect prompt_arquiteto.md

# Listar e validar
izanagi list skills
izanagi doctor
```

---

## Estrutura do Projeto

```
izanagi-ai/
├── bin/            Executável da CLI (bin/izanagi.js)
├── src/cli/        Código fonte dos comandos CLI
├── core/           Motor central (decisão, contexto, reflexão, skill-resolver)
├── agents/         Definições de Agentes de IA em JSON
├── skills/         Skill base (111 skills especializadas em Markdown)
├── memory/         Gerenciamento de memória e compressão
├── optimization/   Redução de tokens e custos
├── teaching/       Modo professor e aprendizado adaptativo
├── architecture/   Padrões arquiteturais e design
├── coding/         Skills de engenharia de software
├── security/       OWASP, autenticação, auditoria
├── testing/        Testes unitários, integração, E2E
├── devops/         Docker, CI/CD, infraestrutura
├── database/       SQL, NoSQL, otimização
├── frontend/       Skills de frontend
├── backend/        Skills de backend
├── package.json    Configuração NPM para publicação CLI
├── README.md       Documentação principal
├── SYSTEM.md       Fundação do sistema
└── RULES.md        Regras operacionais
```

---

## Agentes e Skills

O framework possui **111+ skills** e **10 agentes especializados** encadeados dinamicamente via `core/skill-resolver.json`.

---

## Desenvolvimento

```bash
npm install       # instala dependências
npm run build     # compila TypeScript → dist/
npm run doctor    # roda o doctor localmente
npm pack          # gera o tarball do pacote
```

### Publicando no NPM

```bash
npm run bump:patch   # ou bump:minor / bump:major
npm publish --access public   # prepublishOnly roda o build automaticamente
```

---

## Licença

MIT — Use, modifique, distribua. Apenas mantenha os créditos.
