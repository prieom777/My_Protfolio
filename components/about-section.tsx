import { Bug, GaugeCircle, Workflow, Target } from "lucide-react"
import { SectionHeader } from "./section-header"

const highlights = [
  {
    icon: Bug,
    title: "Defect Detection",
    body: "Deep eye for edge cases, regressions, and hard-to-reproduce bugs before they reach production.",
  },
  {
    icon: Workflow,
    title: "End-to-End Automation",
    body: "Scalable test frameworks across UI, API, and CI pipelines with Selenium, Cypress, and Postman.",
  },
  {
    icon: GaugeCircle,
    title: "Performance Mindset",
    body: "Load, stress, and performance testing with JMeter to harden systems at scale.",
  },
  {
    icon: Target,
    title: "Quality by Design",
    body: "Partnering with engineering early — shifting quality left across every sprint.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="About"
          title="Quality isn't a phase — it's the whole product."
          description="I'm a Software Quality Assurance Engineer who treats testing as an engineering discipline. I blend manual exploratory testing with robust automation to ship software that's reliable, fast, and user-obsessed."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/40"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-neon-cyan/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan">
                <h.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
