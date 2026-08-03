---
name: deep-research
description: "Pesquisa profunda em múltiplas fontes na web: gera plano de busca, executa múltiplas queries, coleta, sintetiza e entrega relatório estruturado com fontes citadas e nível de confiança. Use antes de decidir stacks, referências visuais, preços, concorrentes ou qualquer decisão baseada em informação externa. Inspirado nos agentes deep-research (OpenAI/Composio)."
---

# Deep Research — Pesquisa Multi-Fonte com Síntese

Método para transformar uma pergunta aberta em **relatório estruturado com fontes verificadas**, ideal antes de decisões de produto, stack, referências ou benchmarking.

## Quando usar

- Escolha de stack/biblioteca (comparação com dados atuais, não opinião).
- Referências visuais reais de um nicho (sites campeões, tendências).
- Análise de concorrentes / preço / posicionamento.
- Verificação de fatos, APIs, versions, breaking changes.
- Qualquer decisão onde informação desatualizada custa caro.

## Fluxo

### 1. Defina o objetivo e o escopo

```
PERGUNTA CENTRAL: <a pergunta que precisa responder>
USO: <qual decisão a resposta vai alimentar?>
NÍVEL: raso (3-5 fontes) | médio (6-12) | profundo (12-25)
RESTRIÇÕES: idioma, período, domínios permitidos
```

### 2. Plano de busca (5-8 queries)

Cubra ângulos: **termo principal** → **comparativo** → **alternativas** → **opinião/review** → **tendência recente (ano atual)** → **comunidade (GitHub/Reddit/forums)**. Grave o plano antes de executar.

### 3. Execução e coleta

- Execute as queries; para cada fonte relevante anote: URL, título, data, ponto-chave.
- **Verifique a fonte**: priorize oficial/primária (docs, repos, stats) sobre blogs; desconfie de datas antigas em tópicos que mudam rápido (versões de libs, preços, trends).
- Re-finete: se um ângulo ficou fraco, faça 1-2 queries de follow-up.
- **Nunca invente fontes.** Se uma afirmação não tem fonte, marque como "não verificado".

### 4. Síntese

Relatório final com:

```
# Relatório: <tema>
## Resumo executivo (3-5 linhas)
## Achados por pergunta (com fontes citadas: [1] https://...)
## Comparativo (tabela quando houver múltiplas opções)
## Recomendação + porquê
## Riscos / pontos não verificados
## Fontes (lista completa numerada)
## Confiança: ALTA | MÉDIA | BAIXA + por quê
```

### 5. Entrega

- Apresente o relatório no chat (resumo + pontos-chave) e ofereça salvar em arquivo (`docs/research/<tema>.md`).
- Sempre distinga **fato verificado** vs **opinião de fonte** vs **inferência minha**.

## Regras

- 1 query de cada vez em tópicos dependentes; paralelas em tópicos independentes.
- No máximo 2 follow-ups por ângulo (evita espiral).
- Cite a data de acesso para informação volátil.
- Se a web falhar: diga o que não foi possível verificar, não preencha com suposição.

## References

- Inspiração: OpenAI Deep Research (chatgpt.com/deep-research) e agentes open-source `deep-research` (ex.: [dzhng/deep-research](https://github.com/dzhng/deep-research), [langchain-ai/open_deep_research](https://github.com/langchain-ai/open_deep_research)).
- Ferramentas de busca do agente: `websearch` + `webfetch` nativos do Opencode.
- Curadoria completa em `references.md`.