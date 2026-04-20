import {
  Chrome,
  TestTube2,
  Send,
  Activity,
  Kanban,
  GitBranch,
  Workflow,
  type LucideIcon,
} from "lucide-react"
import { SectionHeader } from "./section-header"

type Tool = {
  name: string
  tag: string
  icon: LucideIcon
}

const tools: Tool[] = [
  { name: "Selenium", tag: "UI Automation", icon: Chrome },
  { name: "Cypress", tag: "E2E Testing", icon: TestTube2 },
  { name: "Postman", tag: "API Testing", icon: Send },
  { name: "JMeter", tag: "Performance", icon: Activity },
  { name: "Jira", tag: "Bug Tracking", icon: Kanban },
  { name: "Git", tag: "Version Control", icon: GitBranch },
  { name: "Jenkins", tag: "CI / CD", icon: Workflow },
]

export function ToolsSection() {
  return (
    <section id="tools" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Tools & Technologies"
          title="The stack I trust in production."
          description="Battle-tested tools for every layer of the QA pipeline."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl glass p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/50"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(200px circle at 50% 0%, oklch(0.82 0.17 200 / 0.2), transparent 70%)",
                }}
              />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-secondary/60 text-foreground transition-all duration-300 group-hover:border-neon-cyan/60 group-hover:text-neon-cyan group-hover:glow-cyan">
                <tool.icon className="h-6 w-6" aria-hidden />
              </div>
              <div className="relative mt-4 text-sm font-semibold text-foreground">
                {tool.name}
              </div>
              <div className="relative mt-1 font-mono text-[11px] text-muted-foreground">
                {tool.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
