---
name: brainstorming
description: "Transforma uma ideia bruta em design/spec completo por entrevista dirigida antes de qualquer código. Use antes de criar features, componentes, funcionalidades ou modificar comportamento. HARD-GATE: nenhuma implementação até o design ser apresentado e aprovado. Inspirado no método brainstorming do obra/superpowers (264k stars)."
---

# Brainstorming — Da Ideia ao Design Aprovado

Método colaborativo para transformar intenção vaga em **spec validada** antes de escrever código. Uma pergunta por vez; nada de implementação antes da aprovação.

## Hard Gate (innegociável)

> **NÃO invoque skill de implementação, não escreva código, não scaffolde, não modifique nada até apresentar o design e o usuário aprovar.** Vale para todo projeto, mesmo os "simples".

Anti-padrão: *"isto é simples demais para precisar de design"* — é exatamente em projetos simples que premissas não-examinadas causam mais retrabalho. O design pode ser curto (2 frases), mas deve existir e ser aprovado.

## Checklist (na ordem)

1. **Explore o contexto do projeto** — arquivos, docs, commits recentes, stack
2. **Perguntas de esclarecimento** — UMA por vez: propósito, restrições, critérios de sucesso (pergunte em *multiple choice* quando possível)
3. **Proponha 2–3 abordagens** — com trade-offs e sua recomendação primeiro
4. **Apresente o design em seções** — escale ao tamanho do problema; consiga aprovação após cada seção
5. **Escreva o design doc** — `docs/superpowers/specs/YYYY-MM-DD-<tema>-design.md` e commite
6. **Auto-revisão do spec** — placeholders? contradições? ambiguidade? escopo? Corrija inline
7. **Devolva ao usuário** — "Spec escrito em `<path>`. Revisa antes de planejarmos a implementação?"
8. **Transição** — aponte para escrita do plano de implementação (no Izanagi: `task-planner` / agente relevant).

Genereça de execução: o estado terminal é gerar o plano de implementação — não pule para código direto.

## Regras de entrevista

- Uma pergunta por mensagem (duas ou mais = questionário-descarga).
- Múltipla escolha quando der; aberta quando necessário.
- Foque em: propósito, restrição, critério de sucesso.
- Se o pedido descrever múltiplos subsistemas independentes, **decomponha primeiro** (o que é independente, como se relacionam, ordem) e faça o brainstorm do primeiro sub-projeto.
- YAGNI: corte agressivamente o que não serve ao objetivo.
- Em codebase existente: siga os padrões atuais; inclua melhorias direcionadas apenas se fizer sentido para o objetivo; não refatore sem relação.

## Design para isolamento

Cada unidade deve: ter um propósito, expor interface clara, ser testável de forma independente. Você deve conseguir responder "o que faz / como se usa / do que depende" sem ler internals. Se um arquivo cresceu demais, é sinal de que está fazendo demais.

## References

- Repo original: [obra/superpowers](https://github.com/obra/superpowers) — 264k stars, MIT, repositório ativo. Skill `skills/brainstorming/SKILL.md`.
- Método completo: https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md
- Baseado em TDD-YAGNI-DRY workflow (ver também `tdd` no Izanagi).
- Veja `references.md` para curadoria completa.