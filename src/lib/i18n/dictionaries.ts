// Izanagi AI Website — i18n Dictionaries (pt / en / es)
// Fonte da verdade: `pt`. `en` e `es` são tipados contra `Dict` para garantir paridade de chaves.

export type Locale = "pt" | "en" | "es";

export const locales: Locale[] = ["pt", "en", "es"];

export const DEFAULT_LOCALE: Locale = "pt";

export const localeMeta: Record<Locale, { label: string; short: string; flag: string }> = {
  pt: { label: "Português", short: "PT", flag: "🇧🇷" },
  en: { label: "English", short: "EN", flag: "🇺🇸" },
  es: { label: "Español", short: "ES", flag: "🇪🇸" },
};

const pt = {
  nav: {
    home: "Início",
    guide: "Guia",
    about: "O que é",
    pipeline: "Pipeline",
    simulator: "Simulador",
    agents: "Agentes (12)",
    github: "GitHub",
    npm: "NPM",
    contact: "Contato",
    portfolio: "Portfólio & Contato",
  },
  ui: {
    backToTop: "Voltar ao topo",
    menu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  hero: {
    badge: "v2.3.7 — Motor Multi-Agente Determinístico via NPX",
    title: "Pense, Construa, Evolua.",
    subtitle:
      "Framework modular orientado a skills para agentes de IA especializados em engenharia de software autônoma. Baixo consumo de tokens e execução determinística.",
    copy: "Copiar",
    copied: "Copiado",
    testSimulator: "Testar Simulador",
  },
  about: {
    eyebrow: "Fundação & Visão",
    title: "O que é o Izanagi AI?",
    p1pre: "O ",
    p1post:
      " é um framework meta projetado para engenharia de software autônoma orientada a agentes. Ele não é apenas um template — é um ecossistema completo baseado em camadas (Decision → Context → Skill → Quality → Reflection → Memory).",
    p2pre:
      'Enquanto ferramentas tradicionais geram código solto e genérico ("cara de IA"), o Izanagi divide o desenvolvimento em marcos estritos através de ',
    p2agents: "12 agentes especializados",
    p2mid: " e mais de ",
    p2skills: "70 skills modulares",
    p2post: ".",
    stat1Title: "12 Agentes",
    stat1Desc: "Especializados por domínios (Arquitetura, DB, Security...)",
    stat2Title: "Baixo Token",
    stat2Desc: "Contexto enxuto e compactação contínua de memória",
    stat3Title: "Zero Boilerplate",
    stat3Desc: "Arquitetura estrita e código de alta fidelidade técnica",
  },
  scrolly: {
    eyebrow: "Experiência Imersiva",
    title: "Como o Izanagi Funciona",
    subtitle: "Role para acompanhar o fluxo determinístico do swarm.",
    steps: [
      {
        title: "Scaffold Instantâneo",
        desc: "Inicializa o workspace com `npx izanagi init`. Sem instalações globais complexas, apenas execução direta via npx.",
      },
      {
        title: "Resolução Dinâmica de Skills",
        desc: "O motor decide qual skill ativar (como `/discovery` ou `/architect`) com base no contexto exato da tarefa.",
      },
      {
        title: "Execução Swarm Multi-Agente",
        desc: "Múltiplos agentes especializados colaboram em paralelo, dividindo responsabilidades sem duplicação de esforço.",
      },
      {
        title: "Portões de Qualidade & Deploy",
        desc: "Verificação algorítmica estrita de segurança, performance e arquitetura antes de entregar o código final.",
      },
    ],
  },
  playground: {
    eyebrow: "Simulador Interativo ao Vivo",
    title: "Veja o Swarm em Ação",
    subtitle: "Selecione um cenário e execute a pipeline de agentes em tempo real.",
    presets: [
      {
        label: "Criar SaaS Fintech com PostgreSQL & Auth",
        steps: [
          { agent: "Discovery", action: "Analisando requisitos e gerando spec inicial..." },
          { agent: "Software Architect", action: "Projetando Clean Architecture e schema relacional..." },
          { agent: "Database Engineer", action: "Criando migrações SQL otimizadas com índices..." },
          { agent: "Security Engineer", action: "Aplicando validação OWASP Top 10 e criptografia..." },
          { agent: "Senior Engineer", action: "Implementando componentes Next.js + Tailwind..." },
        ],
      },
      {
        label: "Site 3D Imersivo com Scrollytelling",
        steps: [
          { agent: "Discovery", action: "Mapeando referências visuais de alto padrão..." },
          { agent: "Animation Engineer", action: "Configurando GSAP ScrollTrigger e shaders WebGL..." },
          { agent: "Senior Engineer", action: "Montando estrutura de componentes fluidos a 60fps..." },
          { agent: "Tech Lead", action: "Validando performance e bundle size..." },
        ],
      },
    ],
    run: "Executar Swarm",
    running: "Executando Swarm...",
    done: "Concluído",
    processing: "Processando...",
  },
  agentsSection: {
    eyebrow: "Arquitetura Modular",
    title: "12 Agentes Especializados",
    subtitle: "Cada agente possui escopo estrito, correntes de skills dedicadas e validação automatizada.",
    skillsLabel: "Skills Vinculadas:",
    close: "Fechar",
    roles: {
      discovery: "Entrevista profunda, pesquisa web, geração de prompts ricos.",
      architect: "System Design, Clean Architecture, DDD, CQRS, ADRs.",
      "senior-engineer": "Desenvolvimento Full-Stack, refatoração e código limpo testável.",
      animation: "Scrollytelling, WebGL 3D, motion design de alta performance.",
      security: "OWASP Top 10, auth, criptografia e secure coding estrito.",
      devops: "Docker, Kubernetes, CI/CD, IaC com Terraform e observabilidade.",
      database: "SQL avançado, PostgreSQL, Redis, modelagem de dados e índices.",
      "bug-hunter": "Debugging cirúrgico e análise de causa raiz de regressões.",
      techlead: "Code review rigoroso, governança técnica e mentoria de equipe.",
      docs: "Geração de documentação técnica, READMEs impecáveis e diagramas.",
      pm: "Planejamento de sprints, marcos, análise de riscos e entregas.",
      professor: "Ensino adaptativo, explicações didáticas e mentoria prática.",
    },
  },
  footer: {
    copyright: "© 2026 Izanagi AI Framework. Desenvolvido com precisão.",
    repo: "Repositório GitHub",
    npm: "NPM Package",
    contact: "Contato / Portfólio",
  },
  guide: {
    back: "Voltar ao Início",
    badge: "Documentação Oficial v2.3.7",
    title: "Guia de Instalação & Uso",
    subtitle:
      "Aprenda a inicializar o Izanagi AI em seu workspace, configurar packs de skills especializados e acionar o swarm de agentes autônomos.",
    s1: {
      title: "Pré-requisitos",
      p: "Para utilizar o Izanagi AI, certifique-se de ter em seu ambiente:",
      li1Post: ">= 18.0.0 instalado",
      li2Mid: " ou ",
      li2Post: " (para execução sem instalação global)",
    },
    s2: {
      title: "Inicialização Rápida via NPX",
      p: "O método mais rápido é utilizar o ",
      pPost: " para criar seu workspace interativo:",
      copied: "Copiado!",
    },
    s3: {
      title: "Seleção de Packs de Skills",
      p: "Você pode especificar quais domínios deseja incluir no seu projeto ao rodar o comando init:",
    },
    s4: {
      title: "Executando Tarefas com Agentes",
      p: "O Izanagi classifica automaticamente a tarefa ou permite direcionar um agente específico:",
    },
    s5: {
      title: "Auditoria e Diagnóstico",
      p: "Valide a integridade do framework, JSONs de agentes e mapeamentos de aliases a qualquer momento:",
    },
    s6: {
      title: "Instalação Global",
      p: "Prefere ter o Izanagi sempre disponível em qualquer terminal? Instale globalmente via npm:",
      note: "A instalação global expõe os comandos `izanagi` e `izanagi-ai` no seu PATH, sem necessidade de npx.",
      check: "Confirme a instalação e a versão em uso:",
    },
    s7: {
      title: "Atualizando o Izanagi",
      p: "Mantenha o framework na versão mais recente. Atualize a instalação global com:",
      npxNote: "Executando via npx? Sem passo extra — o npx baixa a última versão publicada automaticamente a cada execução.",
      checkCurrent: "Veja qual versão está instalada no momento:",
      checkLatest: "Consulte a versão mais recente publicada no npm:",
    },
    footer: "© 2026 Izanagi AI Framework. Guia oficial de instalação.",
  },
};

export type Dict = typeof pt;

const en: Dict = {
  nav: {
    home: "Home",
    guide: "Guide",
    about: "What is",
    pipeline: "Pipeline",
    simulator: "Simulator",
    agents: "Agents (12)",
    github: "GitHub",
    npm: "NPM",
    contact: "Contact",
    portfolio: "Portfolio & Contact",
  },
  ui: {
    backToTop: "Back to top",
    menu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    badge: "v2.3.7 — Deterministic Multi-Agent Engine via NPX",
    title: "Think. Build. Evolve.",
    subtitle:
      "A modular skill-oriented framework for AI agents specialized in autonomous software engineering. Low token consumption and deterministic execution.",
    copy: "Copy",
    copied: "Copied",
    testSimulator: "Try the Simulator",
  },
  about: {
    eyebrow: "Foundation & Vision",
    title: "What is Izanagi AI?",
    p1pre: "",
    p1post:
      " is a meta-framework designed for autonomous agent-driven software engineering. It is not just a template — it is a complete ecosystem built on layers (Decision → Context → Skill → Quality → Reflection → Memory).",
    p2pre:
      'While traditional tools generate loose, generic code ("AI-flavored boilerplate"), Izanagi breaks development into strict milestones through ',
    p2agents: "12 specialized agents",
    p2mid: " and more than ",
    p2skills: "70 modular skills",
    p2post: ".",
    stat1Title: "12 Agents",
    stat1Desc: "Specialized by domain (Architecture, DB, Security...)",
    stat2Title: "Low Token",
    stat2Desc: "Lean context and continuous memory compaction",
    stat3Title: "Zero Boilerplate",
    stat3Desc: "Strict architecture and high-fidelity technical code",
  },
  scrolly: {
    eyebrow: "Immersive Experience",
    title: "How Izanagi Works",
    subtitle: "Scroll to follow the deterministic swarm flow.",
    steps: [
      {
        title: "Instant Scaffold",
        desc: "Initializes the workspace with `npx izanagi init`. No complex global installs — just direct execution via npx.",
      },
      {
        title: "Dynamic Skill Resolution",
        desc: "The engine decides which skill to activate (like `/discovery` or `/architect`) based on the exact task context.",
      },
      {
        title: "Multi-Agent Swarm Execution",
        desc: "Multiple specialized agents collaborate in parallel, splitting responsibilities without duplicating effort.",
      },
      {
        title: "Quality Gates & Deploy",
        desc: "Strict algorithmic verification of security, performance and architecture before delivering the final code.",
      },
    ],
  },
  playground: {
    eyebrow: "Live Interactive Simulator",
    title: "See the Swarm in Action",
    subtitle: "Pick a scenario and run the agent pipeline in real time.",
    presets: [
      {
        label: "Build Fintech SaaS with PostgreSQL & Auth",
        steps: [
          { agent: "Discovery", action: "Analyzing requirements and generating initial spec..." },
          { agent: "Software Architect", action: "Designing Clean Architecture and relational schema..." },
          { agent: "Database Engineer", action: "Creating optimized SQL migrations with indexes..." },
          { agent: "Security Engineer", action: "Applying OWASP Top 10 validation and encryption..." },
          { agent: "Senior Engineer", action: "Implementing Next.js + Tailwind components..." },
        ],
      },
      {
        label: "Immersive 3D Site with Scrollytelling",
        steps: [
          { agent: "Discovery", action: "Mapping high-end visual references..." },
          { agent: "Animation Engineer", action: "Setting up GSAP ScrollTrigger and WebGL shaders..." },
          { agent: "Senior Engineer", action: "Building fluid 60fps component structure..." },
          { agent: "Tech Lead", action: "Validating performance and bundle size..." },
        ],
      },
    ],
    run: "Run Swarm",
    running: "Running Swarm...",
    done: "Completed",
    processing: "Processing...",
  },
  agentsSection: {
    eyebrow: "Modular Architecture",
    title: "12 Specialized Agents",
    subtitle: "Each agent has strict scope, dedicated skill chains and automated validation.",
    skillsLabel: "Linked Skills:",
    close: "Close",
    roles: {
      discovery: "Deep interviewing, web research, rich prompt generation.",
      architect: "System Design, Clean Architecture, DDD, CQRS, ADRs.",
      "senior-engineer": "Full-Stack development, refactoring and clean testable code.",
      animation: "Scrollytelling, WebGL 3D, high-performance motion design.",
      security: "OWASP Top 10, auth, cryptography and strict secure coding.",
      devops: "Docker, Kubernetes, CI/CD, Terraform IaC and observability.",
      database: "Advanced SQL, PostgreSQL, Redis, data modeling and indexes.",
      "bug-hunter": "Surgical debugging and root cause analysis of regressions.",
      techlead: "Rigorous code review, technical governance and team mentoring.",
      docs: "Technical documentation generation, impeccable READMEs and diagrams.",
      pm: "Sprint planning, milestones, risk analysis and deliveries.",
      professor: "Adaptive teaching, didactic explanations and hands-on mentoring.",
    },
  },
  footer: {
    copyright: "© 2026 Izanagi AI Framework. Built with precision.",
    repo: "GitHub Repository",
    npm: "NPM Package",
    contact: "Contact / Portfolio",
  },
  guide: {
    back: "Back to Home",
    badge: "Official Documentation v2.3.7",
    title: "Installation & Usage Guide",
    subtitle:
      "Learn how to initialize Izanagi AI in your workspace, configure specialized skill packs and trigger the autonomous agent swarm.",
    s1: {
      title: "Prerequisites",
      p: "To use Izanagi AI, make sure you have the following in your environment:",
      li1Post: ">= 18.0.0 installed",
      li2Mid: " or ",
      li2Post: " (for execution without global installation)",
    },
    s2: {
      title: "Quick Start with NPX",
      p: "The fastest method is to use ",
      pPost: " to create your interactive workspace:",
      copied: "Copied!",
    },
    s3: {
      title: "Selecting Skill Packs",
      p: "You can specify which domains you want to include in your project when running the init command:",
    },
    s4: {
      title: "Running Tasks with Agents",
      p: "Izanagi automatically classifies the task or lets you target a specific agent:",
    },
    s5: {
      title: "Audit & Diagnostics",
      p: "Validate the integrity of the framework, agent JSONs and alias mappings at any time:",
    },
    s6: {
      title: "Global Installation",
      p: "Prefer to have Izanagi always available in any terminal? Install it globally via npm:",
      note: "A global install exposes the `izanagi` and `izanagi-ai` commands on your PATH, no npx required.",
      check: "Confirm the installation and the version in use:",
    },
    s7: {
      title: "Updating Izanagi",
      p: "Keep the framework up to date. Update the global installation with:",
      npxNote: "Running via npx? No extra step — npx downloads the latest published version automatically on every run.",
      checkCurrent: "See which version is currently installed:",
      checkLatest: "Check the latest version published on npm:",
    },
    footer: "© 2026 Izanagi AI Framework. Official installation guide.",
  },
};

const es: Dict = {
  nav: {
    home: "Inicio",
    guide: "Guía",
    about: "Qué es",
    pipeline: "Pipeline",
    simulator: "Simulador",
    agents: "Agentes (12)",
    github: "GitHub",
    npm: "NPM",
    contact: "Contacto",
    portfolio: "Portafolio & Contacto",
  },
  ui: {
    backToTop: "Volver arriba",
    menu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  hero: {
    badge: "v2.3.7 — Motor Multi-Agente Determinístico vía NPX",
    title: "Piensa. Construye. Evoluciona.",
    subtitle:
      "Framework modular orientado a skills para agentes de IA especializados en ingeniería de software autónoma. Bajo consumo de tokens y ejecución determinística.",
    copy: "Copiar",
    copied: "Copiado",
    testSimulator: "Probar Simulador",
  },
  about: {
    eyebrow: "Fundación & Visión",
    title: "¿Qué es Izanagi AI?",
    p1pre: "",
    p1post:
      " es un meta-framework diseñado para ingeniería de software autónoma orientada a agentes. No es solo una plantilla — es un ecosistema completo basado en capas (Decision → Context → Skill → Quality → Reflection → Memory).",
    p2pre:
      'Mientras las herramientas tradicionales generan código suelto y genérico ("cara de IA"), Izanagi divide el desarrollo en hitos estrictos a través de ',
    p2agents: "12 agentes especializados",
    p2mid: " y más de ",
    p2skills: "70 skills modulares",
    p2post: ".",
    stat1Title: "12 Agentes",
    stat1Desc: "Especializados por dominio (Arquitectura, DB, Security...)",
    stat2Title: "Bajo Token",
    stat2Desc: "Contexto ligero y compactación continua de memoria",
    stat3Title: "Zero Boilerplate",
    stat3Desc: "Arquitectura estricta y código de alta fidelidad técnica",
  },
  scrolly: {
    eyebrow: "Experiencia Inmersiva",
    title: "Cómo Funciona Izanagi",
    subtitle: "Desplázate para seguir el flujo determinístico del swarm.",
    steps: [
      {
        title: "Scaffold Instantáneo",
        desc: "Inicializa el workspace con `npx izanagi init`. Sin instalaciones globales complejas, solo ejecución directa vía npx.",
      },
      {
        title: "Resolución Dinámica de Skills",
        desc: "El motor decide qué skill activar (como `/discovery` o `/architect`) según el contexto exacto de la tarea.",
      },
      {
        title: "Ejecución Swarm Multi-Agente",
        desc: "Múltiples agentes especializados colaboran en paralelo, dividiendo responsabilidades sin duplicar esfuerzo.",
      },
      {
        title: "Portones de Calidad & Deploy",
        desc: "Verificación algorítmica estricta de seguridad, rendimiento y arquitectura antes de entregar el código final.",
      },
    ],
  },
  playground: {
    eyebrow: "Simulador Interactivo en Vivo",
    title: "Ve el Swarm en Acción",
    subtitle: "Selecciona un escenario y ejecuta el pipeline de agentes en tiempo real.",
    presets: [
      {
        label: "Crear SaaS Fintech con PostgreSQL & Auth",
        steps: [
          { agent: "Discovery", action: "Analizando requisitos y generando spec inicial..." },
          { agent: "Software Architect", action: "Diseñando Clean Architecture y schema relacional..." },
          { agent: "Database Engineer", action: "Creando migraciones SQL optimizadas con índices..." },
          { agent: "Security Engineer", action: "Aplicando validación OWASP Top 10 y cifrado..." },
          { agent: "Senior Engineer", action: "Implementando componentes Next.js + Tailwind..." },
        ],
      },
      {
        label: "Sitio 3D Inmersivo con Scrollytelling",
        steps: [
          { agent: "Discovery", action: "Mapeando referencias visuales de alto nivel..." },
          { agent: "Animation Engineer", action: "Configurando GSAP ScrollTrigger y shaders WebGL..." },
          { agent: "Senior Engineer", action: "Construyendo estructura de componentes fluidos a 60fps..." },
          { agent: "Tech Lead", action: "Validando rendimiento y tamaño del bundle..." },
        ],
      },
    ],
    run: "Ejecutar Swarm",
    running: "Ejecutando Swarm...",
    done: "Completado",
    processing: "Procesando...",
  },
  agentsSection: {
    eyebrow: "Arquitectura Modular",
    title: "12 Agentes Especializados",
    subtitle: "Cada agente tiene alcance estricto, cadenas de skills dedicadas y validación automatizada.",
    skillsLabel: "Skills Vinculadas:",
    close: "Cerrar",
    roles: {
      discovery: "Entrevista profunda, investigación web, generación de prompts ricos.",
      architect: "System Design, Clean Architecture, DDD, CQRS, ADRs.",
      "senior-engineer": "Desarrollo Full-Stack, refactorización y código limpio testeable.",
      animation: "Scrollytelling, WebGL 3D, motion design de alto rendimiento.",
      security: "OWASP Top 10, auth, criptografía y secure coding estricto.",
      devops: "Docker, Kubernetes, CI/CD, IaC con Terraform y observabilidad.",
      database: "SQL avanzado, PostgreSQL, Redis, modelado de datos e índices.",
      "bug-hunter": "Debugging quirúrgico y análisis de causa raíz de regresiones.",
      techlead: "Code review riguroso, gobernanza técnica y mentoría de equipo.",
      docs: "Generación de documentación técnica, READMEs impecables y diagramas.",
      pm: "Planificación de sprints, hitos, análisis de riesgos y entregas.",
      professor: "Enseñanza adaptativa, explicaciones didácticas y mentoría práctica.",
    },
  },
  footer: {
    copyright: "© 2026 Izanagi AI Framework. Desarrollado con precisión.",
    repo: "Repositorio GitHub",
    npm: "Paquete NPM",
    contact: "Contacto / Portafolio",
  },
  guide: {
    back: "Volver al Inicio",
    badge: "Documentación Oficial v2.3.7",
    title: "Guía de Instalación & Uso",
    subtitle:
      "Aprende a inicializar Izanagi AI en tu workspace, configurar packs de skills especializados y activar el swarm de agentes autónomos.",
    s1: {
      title: "Prerrequisitos",
      p: "Para utilizar Izanagi AI, asegúrate de tener en tu entorno:",
      li1Post: ">= 18.0.0 instalado",
      li2Mid: " o ",
      li2Post: " (para ejecución sin instalación global)",
    },
    s2: {
      title: "Inicio Rápido con NPX",
      p: "El método más rápido es usar ",
      pPost: " para crear tu workspace interactivo:",
      copied: "¡Copiado!",
    },
    s3: {
      title: "Selección de Packs de Skills",
      p: "Puedes especificar qué dominios incluir en tu proyecto al ejecutar el comando init:",
    },
    s4: {
      title: "Ejecutando Tareas con Agentes",
      p: "Izanagi clasifica automáticamente la tarea o permite apuntar a un agente específico:",
    },
    s5: {
      title: "Auditoría y Diagnóstico",
      p: "Valida la integridad del framework, los JSONs de agentes y los mapeos de aliases en cualquier momento:",
    },
    s6: {
      title: "Instalación Global",
      p: "¿Prefieres tener Izanagi siempre disponible en cualquier terminal? Instálalo globalmente vía npm:",
      note: "La instalación global expone los comandos `izanagi` e `izanagi-ai` en tu PATH, sin necesidad de npx.",
      check: "Confirma la instalación y la versión en uso:",
    },
    s7: {
      title: "Actualizando Izanagi",
      p: "Mantén el framework en la versión más reciente. Actualiza la instalación global con:",
      npxNote: "¿Ejecutas vía npx? Sin pasos extra — npx descarga la última versión publicada automáticamente en cada ejecución.",
      checkCurrent: "Mira qué versión está instalada actualmente:",
      checkLatest: "Consulta la versión más reciente publicada en npm:",
    },
    footer: "© 2026 Izanagi AI Framework. Guía oficial de instalación.",
  },
};

export const dicts: Record<Locale, Dict> = { pt, en, es };
