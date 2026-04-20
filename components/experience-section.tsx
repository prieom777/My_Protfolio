import { Briefcase, CheckCircle2, Building2 } from "lucide-react"
import { SectionHeader } from "./section-header"

type Experience = {
  role: string
  company: string
  period: string
  current?: boolean
  summary: string
  achievements: string[]
}

const experiences: Experience[] = [
  {
    role: "Software Quality Assurance Engineer",
    company: "Current Role",
    period: "2023 — Present",
    current: true,
    summary:
      "Owning the quality strategy for a multi-product platform. Leading automation initiatives, mentoring QA engineers, and partnering with engineering and product teams.",
    achievements: [
      "Designed and scaled a Selenium + TestNG automation framework, cutting regression time by 65%.",
      "Built 180+ Cypress E2E tests integrated into GitHub Actions for every pull request.",
      "Instituted API contract testing with Postman + Newman, catching 30+ breaking changes pre-release.",
      "Introduced JMeter performance baselines; identified bottlenecks that improved API p95 by 38%.",
    ],
  },
  {
    role: "QA Engineer",
    company: "Previous Experience",
    period: "2021 — 2023",
    summary:
      "Focused on functional, regression and exploratory testing across web and mobile platforms. Established QA processes from the ground up.",
    achievements: [
      "Authored 500+ test cases and structured regression suites for critical user journeys.",
      "Reduced production defects by 42% quarter-over-quarter via stricter entry/exit criteria.",
      "Set up Jira workflows, defect triage rituals, and QA sign-off gates.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Experience"
          title="Building a culture of quality, one release at a time."
          description="Hands-on QA leadership across automation, performance, and process."
        />

        <div className="relative mt-14">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/60 via-neon-purple/40 to-transparent md:left-1/2"
          />

          <ul className="space-y-10">
            {experiences.map((exp, i) => (
              <li
                key={exp.role + exp.period}
                className={`relative grid gap-6 md:grid-cols-2 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Dot */}
                <span
                  aria-hidden
                  className="absolute left-4 top-6 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center md:left-1/2"
                >
                  <span className="absolute h-6 w-6 rounded-full bg-neon-cyan/20 animate-pulse-glow" />
                  <span className="relative h-3 w-3 rounded-full bg-neon-cyan shadow-[0_0_12px_var(--neon-cyan)]" />
                </span>

                <div className="pl-10 md:pl-0 md:pr-10 md:text-right">
                  <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs text-neon-cyan">
                    <Briefcase className="h-3.5 w-3.5" aria-hidden />
                    {exp.period}
                    {exp.current && (
                      <span className="ml-1 rounded-full bg-neon-cyan/20 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-neon-cyan">
                        Now
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Building2 className="h-3.5 w-3.5" aria-hidden />
                    {exp.company}
                  </p>
                </div>

                <div className="pl-10 md:pl-10">
                  <div className="rounded-2xl glass p-6">
                    <p className="text-sm leading-relaxed text-foreground/85">{exp.summary}</p>
                    <ul className="mt-4 space-y-2.5">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-neon-cyan"
                            aria-hidden
                          />
                          <span className="leading-relaxed">{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
