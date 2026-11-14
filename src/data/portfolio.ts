export type ProjectCategory =
  | "All"
  | "AI & Agents"
  | "Full-Stack SaaS"
  | "Design Systems"
  | "DevTools";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectCaseStudy {
  challenge: string;
  architecture: string;
  highlights: string[];
  codeSnippet: {
    filename: string;
    code: string;
  };
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  tagline: string;
  category: Exclude<ProjectCategory, "All">;
  bentoSpan: "wide" | "standard";
  featuredBadge?: string;
  summary: string;
  techTags: string[];
  metrics: ProjectMetric[];
  liveUrl: string;
  githubUrl: string;
  accentGradient: string;
  caseStudy: ProjectCaseStudy;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  impactMetrics: ProjectMetric[];
  highlights: string[];
  techTags: string[];
}

export interface SkillItem {
  name: string;
  detail: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  metricBadge: string;
  skills: SkillItem[];
}

export interface SocialLink {
  id: string;
  label: string;
  handle: string;
  url: string;
  platform: "github" | "linkedin" | "twitter" | "mail" | "globe";
}

export interface HeroMetric {
  value: string;
  label: string;
  detail: string;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface PortfolioData {
  meta: {
    siteTitle: string;
    siteDescription: string;
    domain: string;
    version: string;
    designSystemCredit: string;
  };
  navigation: {
    brandMonogram: string;
    brandName: string;
    items: NavItem[];
    ctaLabel: string;
    ctaHref: string;
    resumeUrl: string;
  };
  hero: {
    availabilityBadge: string;
    availableForWork: boolean;
    locationTag: string;
    eyebrow: string;
    name: string;
    roleTitle: string;
    headlinePrefix: string;
    headlineAccent: string;
    valueProposition: string;
    secondaryBio: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    metrics: HeroMetric[];
  };
  projectsSection: {
    index: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    categories: ProjectCategory[];
    items: ProjectItem[];
  };
  experienceSection: {
    index: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    timeline: ExperienceItem[];
  };
  skillsSection: {
    index: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    categories: SkillCategory[];
  };
  contactSection: {
    index: string;
    eyebrow: string;
    headline: string;
    subheadline: string;
    email: string;
    copyButtonLabel: string;
    copiedFeedbackLabel: string;
    directMailLabel: string;
    responseSla: string;
    location: string;
    timezone: string;
    socials: SocialLink[];
    copyright: string;
  };
}

export const portfolioData: PortfolioData = {
  meta: {
    siteTitle: "Mohammed Hayath — Full-Stack & Product Engineer",
    siteDescription:
      "Full-Stack / Product Engineer building high-performance web applications and AI-native products from zero to one.",
    domain: "amdhayath.dpdns.org",
    version: "",
    designSystemCredit: "Obsidian × Burnished Copper Token System",
  },
  navigation: {
    brandMonogram: "AM",
    brandName: "Mohammed Hayath",
    items: [
      { label: "Work", href: "#work" },
      { label: "Experience", href: "#experience" },
      { label: "Capabilities", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    ctaLabel: "Resume",
    ctaHref: "#contact",
    resumeUrl: "/resume.pdf",
  },
  hero: {
    availabilityBadge: "Available for select product engineering & AI roles",
    availableForWork: true,
    locationTag: "IST (UTC+5:30) · Remote Worldwide",
    eyebrow: "SYSTEMS × PRODUCT × AI ENGINEERING",
    name: "Mohammed Hayath",
    roleTitle: "Full-Stack / Product Engineer",
    headlinePrefix: "ENGINEERING",
    headlineAccent: "ZERO × TO × ONE",
    valueProposition:
      "I build high-performance web applications and AI-native products from zero to one.",
    secondaryBio:
      "Obsessed with sub-50ms interactions, resilient distributed backends, and interfaces that feel forged out of solid metal. Turning ambiguous product bets into production-grade software.",
    primaryCtaLabel: "Explore Featured Work",
    primaryCtaHref: "#work",
    secondaryCtaLabel: "Copy Direct Email",
    metrics: [
      {
        value: "<35ms",
        label: "P95 API & Edge Latency",
        detail: "Across globally distributed Next.js & Rust microservices",
      },
      {
        value: "99.98%",
        label: "Production Uptime",
        detail: "Zero-downtime deployments & automated observability",
      },
      {
        value: "12+ Shipped",
        label: "Zero-to-One Products",
        detail: "AI workflows, SaaS platforms, and multi-brand design systems",
      },
      {
        value: "100 / 100",
        label: "Core Web Vitals",
        detail: "Strict budgets for LCP, CLS, INP, and WCAG 2.2 AA accessibility",
      },
    ],
  },
  projectsSection: {
    index: "01",
    eyebrow: "SELECTED ARCHITECTURE & SHIPPED WORK",
    title: "Featured Projects",
    subtitle:
      "Every build pairs deterministic systems engineering with tactile interface craft. Filter by domain or inspect the full architectural breakdown.",
    categories: [
      "All",
      "AI & Agents",
      "Full-Stack SaaS",
      "Design Systems",
      "DevTools",
    ],
    items: [
      {
        id: "aether-runtime",
        index: "01",
        title: "Aether — Multi-Agent Workflow & Execution Engine",
        tagline: "Deterministic DAG orchestration with streaming tool-call telemetry",
        category: "AI & Agents",
        bentoSpan: "wide",
        featuredBadge: "FLAGSHIP BUILD",
        summary:
          "An AI-native workflow platform that lets engineering teams compose, replay, and benchmark multi-step LLM agent pipelines with sub-millisecond state checkpointing and human-in-the-loop approval gates.",
        techTags: [
          "Next.js 15",
          "TypeScript",
          "Framer Motion",
          "WebSockets",
          "Postgres / pgvector",
          "Redis Streams",
        ],
        metrics: [
          { label: "Token Throughput", value: "4.2k tok/s" },
          { label: "Checkpoint Overhead", value: "1.8ms" },
          { label: "Eval Reliability", value: "99.4% pass@1" },
        ],
        liveUrl: "https://amdhayath.dpdns.org/#work",
        githubUrl: "https://github.com",
        accentGradient:
          "from-[#a82c15]/25 via-[#cd8656]/10 to-transparent",
        caseStudy: {
          challenge:
            "Multi-agent LLM pipelines often fail silently mid-execution, burn runaway token budgets, and lack deterministic replay when debugging tool-call regressions in production.",
          architecture:
            "Built an event-sourced DAG runner backed by Redis Streams and Postgres JSONB snapshots, paired with a 60fps virtualized React canvas that streams token deltas and tool execution traces in real time.",
          highlights: [
            "Reduced end-to-end orchestration latency by 44% using multiplexed SSE channels and edge connection pooling.",
            "Implemented branch-and-replay debugging so engineers can fork any historical agent step with modified prompts or schemas.",
            "Built automated cost & latency circuit breakers with instant Slack/Webhook escalation.",
          ],
          codeSnippet: {
            filename: "engine/orchestrator.ts",
            code: `export async function executeNode(ctx: AgentContext, node: DagNode) {
  const checkpoint = await ctx.store.snapshot(node.id);
  return streamToolExecution({
    model: node.modelConfig,
    signal: ctx.abortController.signal,
    onDelta: (chunk) => ctx.telemetry.emit(node.id, chunk),
  });
}`,
          },
        },
      },
      {
        id: "obsidian-ui",
        index: "02",
        title: "Obsidian — Token-First Design System & Primitive Kit",
        tagline: "42 accessible primitives with zero-runtime CSS token compilation",
        category: "Design Systems",
        bentoSpan: "standard",
        featuredBadge: "OPEN SOURCE",
        summary:
          "A multi-theme component library and Figma-to-Code token pipeline engineered for keyboard-first SaaS applications, featuring spring-physics micro-interactions and strict WCAG 2.2 AA compliance.",
        techTags: [
          "React 18",
          "TypeScript",
          "Tailwind CSS",
          "Radix Primitives",
          "Framer Motion",
          "Storybook",
        ],
        metrics: [
          { label: "Bundle Footprint", value: "6.4 kB gzip" },
          { label: "Accessibility", value: "100% WCAG AA" },
          { label: "Adoption", value: "4 Product Teams" },
        ],
        liveUrl: "https://amdhayath.dpdns.org/#work",
        githubUrl: "https://github.com",
        accentGradient:
          "from-[#f59e0b]/20 via-[#cd8656]/10 to-transparent",
        caseStudy: {
          challenge:
            "Fragmented UI components across multiple web applications caused inconsistent keyboard navigation, bloated bundle sizes, and slow design-to-engineering handoffs.",
          architecture:
            "Designed a semantic CSS variable token compiler that transforms W3C Design Token JSON into typed Tailwind utilities and tree-shakeable headless React primitives.",
          highlights: [
            "Cut new feature UI scaffolding time by 60% across 4 internal and customer-facing web products.",
            "Engineered roving tabindex, focus traps, and screen-reader announcements across all 42 components.",
            "Automated visual regression and axe-core accessibility gates in GitHub Actions.",
          ],
          codeSnippet: {
            filename: "tokens/compile-theme.ts",
            code: `export const defineSemanticTokens = <T extends TokenSchema>(schema: T) =>
  Object.entries(schema).reduce((cssVars, [key, token]) => ({
    ...cssVars,
    [\`--\${key}\`]: token.value,
  }), {} as Record<string, string>);`,
          },
        },
      },
      {
        id: "pulsetrace-edge",
        index: "03",
        title: "PulseTrace — Edge Telemetry & Cold-Start Profiler",
        tagline: "Real-time distributed tracing and flamegraphs for serverless APIs",
        category: "DevTools",
        bentoSpan: "standard",
        featuredBadge: "DEVTOOLS",
        summary:
          "A lightweight OpenTelemetry collector and interactive flamegraph explorer that pinpoints cold starts, N+1 database queries, and third-party API bottlenecks with under 0.5% runtime overhead.",
        techTags: [
          "TypeScript",
          "Rust / WebAssembly",
          "ClickHouse",
          "OpenTelemetry",
          "Next.js App Router",
        ],
        metrics: [
          { label: "Ingest Rate", value: "120k spans/s" },
          { label: "Query Speed", value: "<18ms p95" },
          { label: "SDK Overhead", value: "<0.4% CPU" },
        ],
        liveUrl: "https://amdhayath.dpdns.org/#work",
        githubUrl: "https://github.com",
        accentGradient:
          "from-[#cd8656]/20 via-[#4e241e]/20 to-transparent",
        caseStudy: {
          challenge:
            "Traditional APM agents add heavy memory overhead to edge functions and take minutes to index high-cardinality trace spans during production incidents.",
          architecture:
            "Compiled span serialization to WebAssembly and paired a batched ClickHouse ingestion pipeline with a hardware-accelerated canvas flamegraph inspector.",
          highlights: [
            "Achieved sub-20ms analytical queries across 50M+ span rows using ClickHouse materialized rollups.",
            "Built one-click diffing between healthy baseline traces and anomalous p99 regression spikes.",
            "Zero-config Next.js middleware integration requiring a single line of instrumentation.",
          ],
          codeSnippet: {
            filename: "sdk/trace-middleware.ts",
            code: `export function withPulseTrace(handler: NextHandler) {
  return async (req: NextRequest) => {
    const span = PulseSpan.start(req.nextUrl.pathname);
    try { return await handler(req); }
    finally { span.flushNonBlocking(); }
  };
}`,
          },
        },
      },
      {
        id: "veloce-canvas",
        index: "04",
        title: "Veloce — Multiplayer Product Spec & Architecture Canvas",
        tagline: "Local-first CRDT collaboration with instant AI RFC generation",
        category: "Full-Stack SaaS",
        bentoSpan: "wide",
        featuredBadge: "ZERO-TO-ONE SAAS",
        summary:
          "A local-first collaborative workspace where engineering and product teams co-design system diagrams, database schemas, and executable PRDs with conflict-free offline sync and instant multiplayer cursors.",
        techTags: [
          "Next.js",
          "TypeScript",
          "Yjs / CRDTs",
          "IndexedDB",
          "Tailwind CSS",
          "WebSockets",
        ],
        metrics: [
          { label: "Sync Latency", value: "14ms peer-to-peer" },
          { label: "Canvas Frame Rate", value: "Locked 60 FPS" },
          { label: "Offline Recovery", value: "100% Conflict-Free" },
        ],
        liveUrl: "https://amdhayath.dpdns.org/#work",
        githubUrl: "https://github.com",
        accentGradient:
          "from-[#f59e0b]/20 via-[#a82c15]/15 to-transparent",
        caseStudy: {
          challenge:
            "Product specs and architecture diagrams live in disconnected tools, go stale the moment code ships, and feel sluggish when multiple engineers edit large canvases simultaneously.",
          architecture:
            "Combined a Yjs CRDT state layer persisted in IndexedDB with viewport-culled rendering and bidirectional Mermaid/SQL schema synchronization.",
          highlights: [
            "Maintained 60fps pan-and-zoom performance with 2,500+ live nodes via spatial quadtree culling.",
            "Engineered bidirectional sync between visual ER diagrams and Prisma/Drizzle TypeScript schemas.",
            "Reduced RFC review cycles by 50% with inline anchored threads and keyboard-driven command palette.",
          ],
          codeSnippet: {
            filename: "sync/crdt-provider.ts",
            code: `export function bindCanvasDoc(roomId: string, doc: Y.Doc) {
  const local = new IndexeddbPersistence(roomId, doc);
  const ws = new WebsocketProvider(SYNC_ENDPOINT, roomId, doc);
  return { local, ws, awareness: ws.awareness };
}`,
          },
        },
      },
    ],
  },
  experienceSection: {
    index: "02",
    eyebrow: "PRODUCTION TRACK RECORD & IMPACT",
    title: "Engineering Experience",
    subtitle:
      "A progression focused on shipping resilient full-stack systems, elevating frontend craft, and measurable business outcomes.",
    timeline: [
      {
        id: "exp-lead-product",
        role: "Senior Full-Stack & Product Engineer",
        company: "AI-Native & Cloud Product Studio",
        companyUrl: "https://amdhayath.dpdns.org",
        period: "2024 — PRESENT",
        location: "Remote",
        type: "Full-Time",
        summary:
          "Architecting and shipping end-to-end web applications, multi-agent AI workflows, and high-craft design systems from initial product discovery to production scale.",
        impactMetrics: [
          { label: "Latency Reduction", value: "-46% p99" },
          { label: "Release Velocity", value: "3.2× Faster" },
          { label: "Core Web Vitals", value: "99+ Score" },
        ],
        highlights: [
          "Spearheaded the architecture of a Next.js App Router & TypeScript platform serving real-time AI workflows with streaming telemetry.",
          "Established a token-driven design system and component library, unifying visual craft and cutting UI defects by 65%.",
          "Engineered automated CI/CD quality gates (typecheck, Playwright E2E, bundle budgets) ensuring zero-downtime releases.",
        ],
        techTags: [
          "Next.js",
          "TypeScript",
          "React",
          "Tailwind CSS",
          "Framer Motion",
          "PostgreSQL",
          "Node.js",
        ],
      },
      {
        id: "exp-fullstack",
        role: "Full-Stack Software Engineer",
        company: "Scale-Up SaaS & Developer Tools",
        companyUrl: "https://amdhayath.dpdns.org",
        period: "2022 — 2024",
        location: "Hybrid / Remote",
        type: "Full-Time",
        summary:
          "Built customer-facing analytics dashboards, high-throughput REST/GraphQL APIs, and billing/authentication workflows for B2B engineering teams.",
        impactMetrics: [
          { label: "Query Performance", value: "4.8× Faster" },
          { label: "API Availability", value: "99.98% SLA" },
          { label: "Bundle Size", value: "-38% Gzip" },
        ],
        highlights: [
          "Re-engineered the primary analytics dashboard with virtualized data grids and optimistic mutations, eliminating UI frame drops on 100k+ row datasets.",
          "Designed idempotent webhook processors and Redis caching layers handling peak traffic bursts with zero dropped events.",
          "Collaborated directly with founders and designers to turn customer interviews into shipped weekly product increments.",
        ],
        techTags: [
          "TypeScript",
          "React",
          "Next.js",
          "Redis",
          "PostgreSQL",
          "Docker",
          "REST / GraphQL",
        ],
      },
      {
        id: "exp-frontend-systems",
        role: "Frontend & UI Systems Engineer",
        company: "Digital Product & Engineering Lab",
        companyUrl: "https://amdhayath.dpdns.org",
        period: "2021 — 2022",
        location: "Remote",
        type: "Full-Time",
        summary:
          "Crafted interactive web applications, bespoke motion choreography, and accessible component libraries for high-growth technology brands.",
        impactMetrics: [
          { label: "Conversion Lift", value: "+28% Activation" },
          { label: "Lighthouse A11y", value: "100 / 100" },
          { label: "Client Launches", value: "8 Shipped" },
        ],
        highlights: [
          "Built fluid, 60fps interactive product showcases and Bento layouts using Framer Motion and modern CSS grid architecture.",
          "Standardized semantic HTML, keyboard navigation, and responsive typography tokens across all client deliverables.",
        ],
        techTags: [
          "TypeScript",
          "React",
          "Tailwind CSS",
          "Framer Motion",
          "Accessibility (WCAG)",
        ],
      },
    ],
  },
  skillsSection: {
    index: "03",
    eyebrow: "TECHNICAL STACK & CAPABILITY MATRIX",
    title: "Core Capabilities",
    subtitle:
      "Full-spectrum execution from pixel-level interaction physics down to database indexing and edge deployment.",
    categories: [
      {
        id: "frontend-craft",
        index: "03.1",
        title: "Frontend & Design Engineering",
        subtitle: "Obsessive UI architecture, fluid motion, and zero-clutter systems",
        metricBadge: "60 FPS · WCAG 2.2 AA",
        skills: [
          {
            name: "Next.js (App Router)",
            detail: "RSC, Streaming SSR, Server Actions, Edge Middleware",
            highlight: true,
          },
          {
            name: "TypeScript (Strict)",
            detail: "End-to-end type safety, generics, AST & schema validation",
            highlight: true,
          },
          {
            name: "Tailwind CSS & Design Tokens",
            detail: "Semantic CSS variables, multi-theme systems, fluid typography",
            highlight: true,
          },
          {
            name: "Framer Motion & Interaction Physics",
            detail: "Shared layoutId transitions, spring choreography, gesture UI",
          },
          {
            name: "Accessible Primitives",
            detail: "Radix UI, keyboard navigation, focus management, ARIA specs",
          },
        ],
      },
      {
        id: "backend-systems",
        index: "03.2",
        title: "Python Backend & Distributed Systems",
        subtitle: "Scalable Python APIs, resilient relational data models, and async task processing",
        metricBadge: "PYTHON · FASTAPI · DJANGO",
        skills: [
          {
            name: "Python (FastAPI, Django & Flask)",
            detail: "Async ASGI/WSGI services, clean architecture, high-concurrency APIs",
            highlight: true,
          },
          {
            name: "PostgreSQL, SQLAlchemy & Django ORM",
            detail: "Relational schema design, query optimization, indexing & migrations",
            highlight: true,
          },
          {
            name: "Celery, Redis & Async Task Queues",
            detail: "Distributed background workers, caching, pub/sub & WebSockets",
            highlight: true,
          },
          {
            name: "RESTful APIs, GraphQL & Pydantic",
            detail: "Strict data validation, OpenAPI specs, idempotent webhooks",
            highlight: true,
          },
          {
            name: "Authentication & Backend Security",
            detail: "OAuth 2.0, JWT, RBAC, rate limiting & encrypted secrets",
            highlight: true,
          },
        ],
      },
      {
        id: "ai-engineering",
        index: "03.3",
        title: "AI & Agentic Infrastructure",
        subtitle: "Production LLM workflows, tool use, and deterministic evals",
        metricBadge: "MULTI-AGENT · MCP",
        skills: [
          {
            name: "LLM Orchestration & Tool Calling",
            detail: "Structured outputs, streaming responses, multi-step agents",
            highlight: true,
          },
          {
            name: "Model Context Protocol (MCP)",
            detail: "Custom MCP servers, Streamable HTTP & Stdio tool pipelines",
            highlight: true,
          },
          {
            name: "RAG & Vector Search",
            detail: "pgvector, hybrid semantic + BM25 retrieval, chunking pipelines",
          },
          {
            name: "Eval Harnesses & Guardrails",
            detail: "pass@k benchmarking, latency/cost budgets, regression suites",
          },
        ],
      },
      {
        id: "cloud-devops",
        index: "03.4",
        title: "Infra, Observability & Quality",
        subtitle: "Automated verification, telemetry, and global edge delivery",
        metricBadge: "ZERO-DOWNTIME CI/CD",
        skills: [
          {
            name: "Cloud & Edge Deployment",
            detail: "Vercel, Cloudflare Workers, Docker, AWS, Linux servers",
            highlight: true,
          },
          {
            name: "Automated Testing",
            detail: "Playwright E2E, Vitest unit/integration, visual regression",
          },
          {
            name: "Observability & Profiling",
            detail: "OpenTelemetry, structured logging, Core Web Vitals telemetry",
          },
          {
            name: "Git & Release Engineering",
            detail: "GitHub Actions, monorepos (Turborepo/pnpm), semantic releases",
          },
        ],
      },
    ],
  },
  contactSection: {
    index: "04",
    eyebrow: "INITIATE TRANSMISSION",
    headline: "Ready to build something extraordinary?",
    subheadline:
      "Whether you are scaling a zero-to-one AI product, architecting a high-craft web platform, or hiring a product-minded full-stack engineer — let's talk.",
    email: "hello@amdhayath.dpdns.org",
    copyButtonLabel: "Copy Email Address",
    copiedFeedbackLabel: "Copied to Clipboard — hello@amdhayath.dpdns.org",
    directMailLabel: "Open Mail Client",
    responseSla: "Typical response time: Under 12 hours",
    location: "India · Working globally across US / EU / APAC timezones",
    timezone: "Asia/Kolkata",
    socials: [
      {
        id: "github",
        label: "GitHub",
        handle: "@mohammedhayath",
        url: "https://github.com/amohammedhayath",
        platform: "github",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        handle: "in/mohammedhayath",
        url: "https://linkedin.com/in/snmdhayath",
        platform: "linkedin",
      },
      {
        id: "twitter",
        label: "X / Twitter",
        handle: "@amohammedhayat",
        url: "https://x.com/amohammedhayat",
        platform: "twitter",
      },
      {
        id: "domain",
        label: "Live Domain",
        handle: "amdhayath.dpdns.org",
        url: "https://amdhayath.dpdns.org",
        platform: "globe",
      },
    ],
    copyright: "© 2026 Mohammed Hayath. Forged with Next.js, TypeScript, Tailwind CSS & Framer Motion.",
  },
};
