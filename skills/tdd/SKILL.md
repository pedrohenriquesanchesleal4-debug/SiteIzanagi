---
name: tdd
description: "Test-Driven Development com Iron Law: escreva o teste antes, veja falhar, código mínimo para passar, refatore. Use em qualquer feature, bugfix ou refatoração antes de escrever código de implementação. Inspirado na skill test-driven-development do obra/superpowers (264k stars)."
---

# TDD — Test-Driven Development (Iron Law)

> **Nenhum código de produção sem um teste falhando primeiro.**

Escreva o teste → veja falhar (pelo motivo certo) → código mínimo → veja passar → refatore. Se você não viu o teste falhar, não sabe se ele testa a coisa certa.

## Iron Law

```
NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST
```

Escreveu código antes do teste? **Apague.** Não guarde "como referência", não adapte enquanto escreve o teste, não olhe para ele. Apagar é apagar. Implemente do zero a partir dos testes.

Exceções (pergunte ao humano): protótipos descartáveis, código gerado, arquivos de configuração.

## Ciclo RED → GREEN → REFACTOR

### RED — escreva um teste mínimo
- Uma única comportamento, nome claro, código real (mock só se inevitável).
- **Verifique o RED**: o teste FALHA (não erra), pelo motivo esperado (feature ausente, não typo).
- Teste passou? Você está testando comportamento existente — conserte o teste.
- Teste errou? Corrija o erro e rode de novo até falhar corretamente.

### GREEN — código mínimo
- O código mais simples que faz o teste passar. Nada de features extras, "melhorias", YAGNI.
- **Verifique o GREEN**: passa + demais testes seguem passando + saída limpa.
- Teste falhou? Conserte o código, não o teste.

### REFACTOR — limpe após o verde
- Remova duplicação, melhore nomes, extraia helpers. Testes seguem verdes. Sem comportamento novo.

## Testes bons

| Qualidade | Bom | Ruim |
|-----------|-----|------|
| Mínimo | Uma coisa só; sem "and" no nome | `test('valida email e domínio e whitespace')` |
| Claro | Nome descreve o comportamento | `test('test1')` |
| Mostra intenção | Demonstra a API desejada | Esconde o que o código deve fazer |

## Racionalizações comuns (todas = recomeçar)

- "Simples demais para testar" / "já testei manualmente" / "testes depois dão o mesmo resultado" / "vou guardar como referência" / "já gastei X horas, apagar é desperdício" / "TDD é dogmático, sou pragmático" — **todas são sinais de começar de novo com TDD.**

## Quando travar

| Problema | Solução |
|----------|---------|
| Não sei testar | Escreva a API que deseja; escreva a asserção primeiro; pergunte |
| Teste complicado demais | Design complicado demais — simplifique a interface |
| Preciso mockar tudo | Código acoplado demais — use dependency injection |
| Setup gigante | Extraia helpers; ainda complexo? simplifique o design |

## Bug fix com TDD

Bug encontrado? Escreva teste falhando que reproduz o bug → siga o ciclo → o teste prova o fix e previne regressão. **Nunca conserte bug sem teste.**

## Verification Checklist (antes de declarar pronto)

- [ ] Toda função/método novo tem teste
- [ ] Vi cada teste falhar antes de implementar
- [ ] Cada teste falhou pelo motivo esperado (feature ausente, não typo)
- [ ] Código mínimo para passar cada teste
- [ ] Todos os testes passam, saída limpa
- [ ] Testes usam código real (mocks só se inevitável)
- [ ] Casos de borda e erros cobertos

Não marcou todos? Você pulou TDD. Recomece.

## References

- Repo original: [obra/superpowers](https://github.com/obra/superpowers) — skill `skills/test-driven-development/SKILL.md` (+ `writing-good-tests.md`).
- Curadoria completa em `references.md`.