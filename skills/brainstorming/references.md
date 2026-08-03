# Brainstorming — Referências

Curadoria do método de brainstorming do framework Superpowers (obra/superpowers).

## Fonte principal

- **Repositório**: https://github.com/obra/superpowers — 264k+ stars, 23k+ forks, MIT
- **Skill original**: `skills/brainstorming/SKILL.md` no repo
- **Docs**: https://blog.fsck.com/2025/10/09/superpowers/ (release announcement do método)

## O que aproveitar no Izanagi

1. **HARD-GATE** — proibição absoluta de implementar antes de design aprovado; aplica-se a todo projeto, inclusive "simples".
2. **Entrevista 1-pergunta-por-vez** com foco em propósito/restrição/sucesso.
3. **2-3 abordagens com trade-offs**, recomendação primeiro.
4. **Design em seções** com aprovação incremental.
5. **Design doc versionado** + auto-revisão (placeholder/contradição/ambiguidade/escopo).
6. **User review gate** antes de planejar implementação.
7. **Decomposição de multi-subsistemas** antes de detalhar.

## Skills relacionadas do Superpowers (relevantes para o Izanagi)

| Skill | Uso |
|-------|-----|
| `test-driven-development` | RED→GREEN→REFACTOR com "Iron Law" (não-código-sem-teste-falhando) — portada como skill `tdd` no Izanagi |
| `systematic-debugging` | Debug por hipótese antes de corrigir — sobrepõe `debug-specialist`/`root-cause-analyzer` do Izanagi |
| `writing-plans` | Plano de implementação claro o suficiente para júnior seguir — sobrepõe `task-planner` |
| `using-git-worktrees` | Isolamento de branch com worktrees — padrão opcional para devops |
| `subagent-driven-development` | Delegar tarefas a subagentes com revisão — ecoa o modo Swarm do orquestrador |

## Onde instalar (caso queira o pacote completo)

- Claude Code: `/plugin install superpowers@claude-plugins-official`
- OpenCode: `Fetch and follow instructions from https://raw.githubusercontent.com/obra/superpowers/refs/heads/main/.opencode/INSTALL.md`
- Direto: `git clone https://github.com/obra/superpowers.git`