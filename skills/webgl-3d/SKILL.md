---
name: webgl-3d
description: |
  Skill de 3D na Web — Three.js, React Three Fiber, WebGL, shaders (GLSL),
  scroll-driven 3D, partículas, modelos GLTF e post-processing. Use quando o
  pedido envolver "site 3d", "three.js", "webgl", "react three fiber",
  "modelo 3d", "shader", "partículas", "cena 3d com scroll", "gltf" ou
  experiências imersivas tridimensionais no navegador.
---

# WebGL 3D — Three.js & React Three Fiber

## Identity

Especialista em 3D para o navegador. Constrói cenas WebGL com Three.js (vanilla) ou React Three Fiber (React), integradas ao DOM e ao scroll. Decide com honestidade quando 3D vale a pena: 3D é o produto ou storytelling — nunca enfeite que custa 60fps e bateria.

## Decisão de stack (Decision Tree)

| Contexto | Stack |
|---|---|
| React/Next.js | **React Three Fiber** (`@react-three/fiber` + `@react-three/drei`) |
| Vanilla JS / sem framework | **Three.js** direto |
| Efeito de imagem disforme / particulas | Shaders GLSL custom sobre Three/R3F |
| Modelo pronto (Blender etc.) | GLTF/GLB via `GLTFLoader`/`useGLTF` + compressão **Draco** |
| Apenas um cubo que gira no hero | Não use WebGL — CSS 3D (`transform-style: preserve-3d`) resolve |
| Dispositivos fracos / muito conteúdo | Fallback 2D estático/imagem + `WebGL` detection |

## Workflow

1. **Scene design primeiro**: o que é a cena (objeto, câmera, luz, fundo)? Quantas cenas (uma por seção)?
2. **Setup base**: `npm i three` + (`@react-three/fiber @react-three/drei` p/ React). No Vite: `optimizeDeps: { include: ['three'] }`.
3. **Modelos**: exportar GLB + Draco; texturas KTX2/Basis; carregar com suspense e fallback de loading.
4. **Integrar com scroll/DOM**: câmera e objetos reagem a `ScrollTrigger` (scrub) ou a overlays HTML por cima do canvas fixo.
5. **Performance budget** (obrigatório): DPR cap, render só quando visível, desligar sombras pesadas no mobile.
6. **Fallback + reduced motion**: imagem estática ou cena simplificada.

## Padrões Core

### Canvas fixo + conteúdo HTML por cima (scroll-driven 3D)
```tsx
<div className="fixed inset-0 z-0">      {/* canvas 3D atrás */}
  <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
    <Scene />
  </Canvas>
</div>
<main className="relative z-10 pointer-events-none">… conteúdo scrolleável …</main>
```
- Câmera move com scroll: `useFrame((state) => (state.camera.position.y = scrollProgress * 10))`.
- Ou `useGSAP` + `ScrollTrigger` mexendo em refs do grupo/câmera.

### Loop de animação (R3F)
```tsx
function RotatingGroup() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => { ref.current.rotation.y += delta * 0.5; });
  return <group ref={ref}>…</group>;
}
```

### Modelo GLTF + Draco (R3F)
```tsx
import { useGLTF } from '@react-three/drei';
function Model({ url }) {
  const { scene } = useGLTF(url, true);   // true = draco
  return <primitive object={scene} scale={2} />;
}
```

### Partículas
- Points com `PointsMaterial` (tamanho atenuado) ou shader custom para >10k partículas.
- Animar posições em `useFrame` com buffer attributes — nunca recriar a geometria.

### Post-processing (bloom/glow)
- `@react-three/postprocessing` (`<EffectComposer><Bloom/></EffectComposer>`) ou `three/examples/jsm/postprocessing`.
- Bloom barato + bem calibrado > luzes caras.

## Rules (Performance)

- **DPR cap**: `dpr={[1, 1.5]}` (R3F) ou `renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5))`.
- **Renderização condicional**: pausar `useFrame` quando a seção está fora da viewport (`IntersectionObserver`/`ScrollTrigger` `toggleActions`).
- **Geometria/textura**: Draco + KTX2/Basis; texturas ≤ 2048²; `texture.colorSpace = SRGBColorSpace`.
- **Sombras**: sombras suaves só em 1-2 luzes; mobile desliga.
- **`prefers-reduced-motion`**: pausa loop, mostra frame estático.
- **Sem WebGL**: `WebGL.isWebGLAvailable()` check → fallback.
- **Memory**: `dispose()` geometrias/texturas em unmount; `useGLTF.preload()` fora do componente.
- Nunca bloquear LCP: canvas lazy (`React.lazy`/dynamic import) e placeholder estático.

## Checklists

- [ ] Decisão de stack justificada (3D vale a pena aqui?)
- [ ] Canvas lazy + fallback estático
- [ ] DPR cap aplicado
- [ ] Modelos comprimidos (Draco/KTX2)
- [ ] Render pausado fora da viewport
- [ ] Reduced motion + sem-WebGL tratados
- [ ] Scroll-driven integrado (câmera/objetos ↔ scroll)
- [ ] 60fps confirmado em mid-range Android (DevTools/Perf)
- [ ] Dispose de recursos no unmount

## References

Veja `references.md` nesta pasta — portfólios e projetos 3D premiados (Bruno Simon, The Monolith, DeepSee Commerce, KINESIS) e o mapa de técnicas (image displacement, particle fields, scroll-driven 3D).

## Metrics & Evolution

- FPS alvo 60 (mid-range); INP < 200ms; LCP < 2.5s.
- Registrar no reflection log: técnica 3D usada, tamanho do bundle, dispositivos testados.
