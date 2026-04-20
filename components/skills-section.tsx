import {
  ClipboardCheck,
  Bot,
  Webhook,
  Gauge,
  Bug,
  Code2,
  type LucideIcon,
} from "lucide-react"
import { SectionHeader } from "./section-header"

type Skill = {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  level: number // 0 - 100
}

const skills: Skill[] = [
  {
    icon: ClipboardCheck,
    title: "Manual Testing",
    description:
      "Exploratory, functional, regression, UAT, and usability testing with detailed test case design.",
    tags: ["Test Plans", "Test Cases", "Regression", "UAT"],
    level: 95,
  },
  {
    icon: Bot,
    title: "Automation Testing",
    description:
      "End-to-end UI automation using Selenium WebDriver and Cypress with Page Object Model architecture.",
    tags: ["Selenium", "Cypress", "POM", "TestNG"],
    level: 90,
  },
  {
    icon: Webhook,
    title: "API Testing",
    description:
      "REST API validation, contract testing, and automated collections with Postman and Newman.",
    tags: ["Postman", "REST", "Newman", "JSON Schema"],
    level: 92,
  },
  {
    icon: Gauge,
    title: "Performance Testing",
    description:
      "Load, stress, and soak testing with Apache JMeter. Bottleneck analysis and reporting.",
    tags: ["JMeter", "Load", "Stress", "Reports"],
    level: 85,
  },
  {
    icon: Bug,
    title: "Bug Tracking",
    description:
      "Structured defect lifecycle management with clear reproduction steps, severity and priority.",
    tags: ["Jira", "Bugzilla", "TestRail", "Confluence"],
    level: 94,
  },
  {
    icon: Code2,
    title: "Programming",
    description:
      "Writing clean, maintainable test code and utilities in Java and Python for scalable frameworks.",
    tags: ["Java", "Python", "OOP", "Git"],
    level: 80,
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Skills"
          title="A modern QA toolkit, engineered for speed."
          description="From exploratory testing to CI-integrated automation suites — a full-stack quality approach that scales with your product."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <article
              key={skill.title}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/50"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* Hover glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(400px circle at 30% 0%, oklch(0.82 0.17 200 / 0.18), transparent 50%)",
                }}
              />

              <div className="relative flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan transition-all duration-300 group-hover:glow-cyan">
                  <skill.icon className="h-5 w-5" aria-hidden />
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="relative mt-5 text-lg font-semibold text-foreground">
                {skill.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {skill.description}
              </p>

              <div className="relative mt-5 flex flex-wrap gap-1.5">
                {skill.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border/70 bg-secondary/50 px-2.5 py-0.5 font-mono text-[11px] text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="relative mt-6">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-mono">Proficiency</span>
                  <span className="font-mono text-neon-cyan">{skill.level}%</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary/70">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple transition-[width] duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
