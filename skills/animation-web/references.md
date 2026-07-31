# References — Web Animation & Scrollytelling

Referências pesquisadas (2026) para sites cinematográficos, scroll-driven e não-estáticos. Use como inspiração e estudo de técnica.

## Referências citadas pelo usuário

### uiprompts.app
- **O que é**: "Cinematic UI, one prompt away" — biblioteca de 111 sites cinematicos gerados por prompt para AI coders. Cada site vem com o vídeo-fonte integrado (pipeline Higgsfield) e o prompt pronto para colar no agente.
- **Stack**: metade HTML+CSS puro, metade React + Tailwind (hero sections, landing pages, interativas).
- **O que estudar**: como os sites são construídos a partir de um vídeo de referência — a cena inteira vira uma sequência de momentos que o scroll reproduz. Nomes: Velorah, Ripple, Aureum, Chrome Ribbon, Vermeil, Prisma, Ferrofluid, Flux, Koi Garden, Nox.
- **Padrão extraído**: "source video wired in" → o scroll reproduz o vídeo: cada cena do site corresponde a um momento do vídeo de referência.

### skiper-ui.com
- **O que é**: 73+ componentes React animados (shadcn/ui) — "un-common components". Estética Vercel/Apple, tipografia Geist, canvas escuro.
- **Stack**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion/GSAP, shadcn registry (`pnpm dlx shadcn add @skiper-ui/<nome>`).
- **Componentes relevantes**: preloaders (Nike, Stairs, Pixel, Box Loading), scroll effects & reveals, carousels, links animados CSS-only, animated numbers (Number Flow + Framer Motion), Interactive3d Hero, Apple Navbar.
- **Padrão extraído**: preloader + page transition coreografados (stairs/pixel), scroll reveals com "Scroll down to see other animations", entrada animada gatilhada por in-view (react-intersection-observer).

### KOKONUT UI (kokonutui.com)
- **O que é**: 100+ componentes open-source (MIT) React + Tailwind + Motion + shadcn. Dark-first: canvas quase-preto zinc, bordas hairline, tipografia Geist.
- **Componentes relevantes**: Beams Background (luz que respira), Background Paths (gradientes SVG animados), Flow Field (partículas que seguem o cursor), Shapes Hero (geometria flutuante), Liquid Glass Card (backdrop-blur + highlight interno), Card Flip, gradient buttons, AI inputs, bento grids.
- **Padrão extraído**: fundos vivos (beams/partículas/gradientes animados) por trás de conteúdo editorial; bordas hairline + glassmorphism para "premium feel".

### Anime.js
- **O que é**: engine de animação JS leve (~10KB gzip) — v4 (2025) reescrito como API modular ESM, tree-shakeable.
- **API v4**: `animate(target, { ... })`, `stagger`, `createTimeline`, `createSpring`, `splitText`, `svg` (createMotionPath, createDrawable, morphing), `createDraggable`, `createLayout`, `waapi` (~3KB), `engine` (config), `eases`, `utils`.
- **Detalhes v4**: `value` virou `to`, `easing` virou `ease`; composição `replace/blend/none`; keyframes em 4 sintaxes; `createSpring({mass, stiffness, damping, velocity, bounce})`; timelines com `defaults` e labels; 60fps em 3K elementos DOM / 50K valores three.js InstancedMesh.
- **Uso típico**: micro-interações, SVG, stagger, spring physics — ótimo substituto leve do GSAP para animações não-scroll.

## Referências encontradas na pesquisa (2026)

### Sites-scrollytelling de referência
| Site | Técnica principal |
|---|---|
| Apple product pages (iphone, macbook) | **Scroll image sequence**: produto rotaciona/desmonta via frames pré-renderizados em canvas conforme o scroll; look "video" com scrub reverso |
| [scrollytelling.ai/universe-to-you](https://scrollytelling.ai/universe-to-you/) | Zoom tipográfico do universo → humano; capítulos com famílias de fonte diferentes; Lenis smooth scroll; sem vídeo (leve) |
| [yesnowww.com](https://yesnowww.com/) (YesNo) | Brutalist binário: transições tipográficas bold com scroll |
| [inversa.com](https://inversa.com/) | Câmera 3D que se move pelo espaço conforme scroll (feito para a marca Inversa) |
| AVATR (car launch) | Scroll "peels back" camadas do veículo — reveal de detalhes |
| [bluxstudio.com](https://bluxstudio.com/) | Typography gigante reativa ao scroll, transições morphing |
| [bruno-simon.com](https://bruno-simon.com/) | Portfolio 3D: dirige um carro pela cena |
| The Monolith (themonolithproject.net) | 13 cenas WebGL conectadas por scroll (R3F + shaders custom + partículas GPU) |
| [deepseecommerce.com](https://deepseecommerce.com/) | E-commerce 3D: descida de câmera scroll-driven com fog (Awwwards Honorable Mention) |
| [gsapvault.com](https://gsapvault.com/blog/scroll-image-sequence-tutorial) | Tutorial completo do padrão Apple: canvas + ScrollTrigger + HiDPI + capítulos + Lenis |
| KINESIS (kinesis.codesempai.com) | Studio de 3D scroll-driven open-source (R3F + editor in-browser) |

### Componentes/bibliotecas animadas (2026)
- **Kinetik UI** (kinetikui.com) — 50+ componentes React animados com Framer Motion: magnetic buttons, toasts, toggles, counters.
- **Kinetic UI** (kineticui.vercel.app) — 100+ componentes open-source: Shiny Button, Aurora Background, Parallax Scroll, Dock Menu, Spotlight Card, Number Ticker.
- **Mellow UI** (mellowui.com) — motion-first editorial: "texture, timing, theatre" — componentes que se movem "quietamente".
- **Number Flow** (number-flow.barvian.me) — transições numéricas suaves (usado pelo Skiper).
- **Animations.dev** (Emil Kowalski) — padrões de animação de interface: rotações de 3D card, reveals, spring physics.

### Padrões técnicos a dominar
1. **Canvas frame scrub** — o "site-vídeo": frames + `ScrollTrigger` scrub + preload + HiDPI (Apple, uiprompts).
2. **Scroll-driven 3D** — câmera/objetos movidos por scroll (R3F + `useGSAP` + `ScrollTrigger`).
3. **Lenis + GSAP** — smooth scroll integrado com ticker e `ScrollTrigger.update`.
4. **Preloaders & page transitions** — stairs/pixel/box reveals (Skiper) antes do hero.
5. **CSS Scroll-Driven Animations API** — `animation-timeline: scroll()` para efeitos sem JS (dock macOS-style, reveals).
6. **Backgrounds vivos** — beams, particles, gradient paths, flow fields (KokonutUI).
7. **Micro-interações** — magnetic hover, tilt 3D, spotlight cards (Kinetik/Kinetic UI).
