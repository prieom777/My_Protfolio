import { ArrowUpRight, Github } from "lucide-react"
import { SectionHeader } from "./section-header"

type Project = {
  title: string
  category: string
  description: string
  stack: string[]
  metrics: { label: string; value: string }[]
  accent: "cyan" | "purple" | "blue"
}

const projects: Project[] = [
  {
    title: "Test Automation Framework",
    category: "Automation",
    description:
      "A scalable hybrid framework built on Selenium + TestNG with the Page Object Model, parallel execution, and CI integration via Jenkins.",
    stack: ["Selenium", "Java", "TestNG", "Jenkins", "Maven"],
    metrics: [
      { label: "Test Cases", value: "420+" },
      { label: "Coverage", value: "92%" },
      { label: "Run Time", value: "↓ 65%" },
    ],
    accent: "cyan",
  },
  {
    title: "Web Application Testing",
    category: "E2E Testing",
    description:
      "Full end-to-end test suite for a multi-tenant SaaS product covering authentication, billing, and real-time dashboards using Cypress.",
    stack: ["Cypress", "JavaScript", "Cucumber", "GitHub Actions"],
    metrics: [
      { label: "E2E Flows", value: "180+" },
      { label: "Browsers", value: "Chrome/FF/Edge" },
      { label: "Flakiness", value: "< 1%" },
    ],
    accent: "purple",
  },
  {
    title: "API Testing Project",
    category: "API & Contract",
    description:
      "Automated REST API contract tests with Postman collections and Newman, integrated into the CI pipeline with environment-driven configs.",
    stack: ["Postman", "Newman", "REST", "JSON Schema"],
    metrics: [
      { label: "Endpoints", value: "75" },
      { label: "Schemas", value: "Validated" },
      { label: "Runs / Day", value: "120" },
    ],
    accent: "blue",
  },
  {
    title: "Bug Tracking Dashboard",
    category: "Internal Tool",
    description:
      "A real-time dashboard aggregating Jira defects, severity trends and sprint quality metrics — giving leadership a single source of truth.",
    stack: ["Jira API", "Python", "Flask", "Chart.js"],
    metrics: [
      { label: "Teams", value: "6" },
      { label: "Defects Tracked", value: "2.1k" },
      { label: "SLA Adherence", value: "98%" },
    ],
    accent: "cyan",
  },
]

const accentMap = {
  cyan: {
    ring: "hover:border-neon-cyan/50",
    text: "text-neon-cyan",
    chip: "border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan",
    glow: "group-hover:glow-cyan",
    grad:
      "radial-gradient(500px circle at 0% 0%, oklch(0.82 0.17 200 / 0.2), transparent 50%)",
  },
  purple: {
    ring: "hover:border-neon-purple/50",
    text: "text-neon-purple",
    chip: "border-neon-purple/30 bg-neon-purple/10 text-neon-purple",
    glow: "group-hover:glow-purple",
    grad:
      "radial-gradient(500px circle at 100% 0%, oklch(0.65 0.22 300 / 0.2), transparent 50%)",
  },
  blue: {
    ring: "hover:border-[var(--neon-blue)]/50",
    text: "text-[var(--neon-blue)]",
    chip: "border-[var(--neon-blue)]/30 bg-[var(--neon-blue)]/10 text-[var(--neon-blue)]",
    glow: "",
    grad:
      "radial-gradient(500px circle at 50% 0%, oklch(0.7 0.2 250 / 0.2), transparent 50%)",
  },
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Projects"
          title="Real-world quality, shipped at scale."
          description="A selection of QA engineering work spanning automation frameworks, E2E suites, and internal tooling."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p) => {
            const a = accentMap[p.accent]
            return (
              <article
                key={p.title}
                className={`group relative overflow-hidden rounded-2xl glass p-7 transition-all duration-300 hover:-translate-y-1 ${a.ring}`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: a.grad }}
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <span
                      className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] ${a.chip}`}
                    >
                      {p.category}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                      {p.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    aria-label={`Open ${p.title}`}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card/50 text-foreground transition-all duration-300 group-hover:rotate-45 ${a.glow}`}
                  >
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </button>
                </div>

                <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="relative mt-6 grid grid-cols-3 gap-3 rounded-xl border border-border/60 bg-secondary/30 p-3">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className={`font-mono text-base font-semibold ${a.text}`}>
                        {m.value}
                      </div>
                      <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border/70 bg-background/40 px-2 py-0.5 font-mono text-[11px] text-foreground/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="relative mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Github className="h-3.5 w-3.5" aria-hidden /> Private repo
                  </span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span className="font-mono">QA Engineering</span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
