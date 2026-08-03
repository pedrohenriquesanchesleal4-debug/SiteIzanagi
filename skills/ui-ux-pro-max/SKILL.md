---
name: ui-ux-pro-max
description: "Design intelligence profissional para UI/UX: gera design system completo (padrão, estilo, paleta, tipografia, efeitos, anti-padrões) a partir do tipo de produto e indústria. Use ao projetar páginas, componentes, paletas, tipografia, layouts, acessibilidade ou ao revisar UI. Inspirado no pacote ui-ux-pro-max-skill (113k stars)."
---

# UI/UX Pro Max — Design Intelligence

Gere um **design system completo** antes de qualquer código visual: padrão de página, estilo, cores, tipografia, efeitos, anti-padrões do nicho e checklist pré-entrega.

## Quando usar

Design de novas páginas/projetos, escolha de estilo/paleta/tipografia, revisão de UI (UX, acessibilidade, consistência), implementação de animações de interface. **Pule** para backend puro, infra, lógica sem visual.

## Categorias de regras por prioridade

| Prio | Categoria | Crítico | Anti-padrões (evite) |
|------|-----------|---------|----------------------|
| 1 | Acessibilidade | CRÍTICO | Contrastes <4.5:1, remover focus rings, ícone sem label |
| 2 | Touch & Interação | CRÍTICO | Alvos <44×44px, depender só de hover, mudanças instantâneas (0ms) |
| 3 | Performance | ALTO | Layout thrashing, CLS, imagens sem lazy/WebP/AVIF |
| 4 | Seleção de estilo | ALTO | Misturar flat+skeuomorphic, emoji como ícone (use SVG) |
| 5 | Layout responsivo | ALTO | Scroll horizontal, containers px fixos, zoom desabilitado |
| 6 | Tipografia & Cor | MÉDIO | Texto <12px, cinza-sobre-cinza, hex cru em componentes |
| 7 | Animação | MÉDIO | Decorativa sem propósito, animar width/height, sem reduced-motion |
| 8 | Forms & Feedback | MÉDIO | Placeholder como label, erros só no topo, sobrecarregar |
| 9 | Navegação | ALTO | Nav sobrecarregada, back quebrado, sem deep links |
| 10 | Charts & Dados | BAIXO | Depender só de cor para transmitir valor |

## Fluxo de geração de design system

1. **Analise o pedido**: tipo de produto (SaaS, e-commerce, portfólio, dashboard, serviços...), público, keywords de estilo, stack (detecte do projeto; nunca assuma — pergunte se não detectar).
2. **Gere o design system** com o formato abaixo.
3. **Complemente** com buscas específicas (estilo, paleta, tipografia, UX) se preciso.
4. **Persista** como `design-system/MASTER.md` (+ `pages/<page>.md` para overrides por página) e consulte-o nas próximas sessões.

## Formato de saída (design system)

```
PADRÃO: Hero-Centric / Social Proof / Feature-Rich / Conversion-Optimized...
   Estrutura de seções recomendada para o nicho + CTA position
ESTILO: <estilo 1-3 candidatos> (Glassmorphism, Bento, Brutalism, Minimalism, Neumorphism, Dark Mode, AI-Native...)
   Keywords, melhor para, performance, acessibilidade
CORES: Primary/Secondary/CTA/Background/Text (hex) + notes
TIPOGRAFIA: par de fontes + mood + Google Fonts link
EFEITOS: sombras suaves, transições 150-300ms, hovers, easing
EVITE (anti-padrões do nicho): ex: neon + AI purple/pink gradient em banking
CHECKLIST PRÉ-ENTREGA:
   [ ] Sem emoji como ícone (SVG: Heroicons/Lucide)
   [ ] cursor-pointer em todo elemento clicável
   [ ] Hover states com transição suave (150-300ms)
   [ ] Contraste 4.5:1 mínimo em texto
   [ ] Focus states visíveis p/ navegação por teclado
   [ ] prefers-reduced-motion respeitado
   [ ] Responsivo: 375 / 768 / 1024 / 1440px
   [ ] CTA primário repetido após prova social
```

## Estilos relevantes (amostra dos 84)

Minimalism & Swiss, Neumorphism, Glassmorphism, Brutalism, 3D & Hyperrealism, Vibrant & Block-based, Dark Mode (OLED), Accessible & Ethical, Claymorphism, Aurora UI, Retro-Futurism, Flat Design, Skeuomorphism, Liquid Glass, Motion-Driven, Micro-interactions, Inclusive Design, Zero Interface, Soft UI Evolution, Neubrutalism, Bento Box Grid, Y2K, Cyberpunk UI, Organic Biophilic, AI-Native UI, Memphis, Vaporwave, Kinetic Typography, Parallax Storytelling, HUD/Sci-Fi FUI, Pixel Art, Spatial UI (VisionOS), Gen Z Chaos, Interactive Cursor, 3D Product Preview, Gradient Mesh, Editorial Grid, Chromatic Aberration, Vintage Analog.

**Landing patterns**: Hero-Centric, Conversion-Optimized, Feature-Rich Showcase, Minimal & Direct, Social Proof-Focused, Interactive Product Demo, Trust & Authority, Storytelling-Driven.

## Se não houver match

Não fabrique. Retente com keywords mais amplas (produto + estilo separados). Se ainda vazio, use defaults do nicho e **diga explicitamente** que a recomendação veio dos defaults, não de um match.

## Arquivos locais (referências portadas)

Leia **sob demanda** — nunca carregue ambos de uma vez:

- `references/quick-reference.md` — regras UX completas em 10 categorias priorizadas (a11y, touch, performance, estilo, layout, tipografia/cor, animação, forms, navegação, charts). Use em **reviews/auditorias de UI** ou para o checklist completo de uma categoria.
- `references/pro-rules.md` — polish de **apps nativas** (iOS/Android/RN/Flutter): ícones, interação, light/dark, layout com safe-areas + checklist canônico pré-entrega. Use antes de entregar UI de app nativo.

## References

- Repo: [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) — 113k stars, MIT. Instalação opcional via `npx ui-ux-pro-max-cli init --ai opencode` traz a busca Python + dados CSV completos (~1.5MB) — não necessária aqui (versão texto portada em `references/`).
- Docs: https://uupm.cc — comparativo básico vs premium.
- Veja `references.md` para a curadoria completa de fontes.
