import { Github, Linkedin, Mail, ShieldCheck } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row">
        <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-neon-cyan/40 bg-neon-cyan/10">
            <ShieldCheck className="h-3.5 w-3.5 text-neon-cyan" aria-hidden />
          </span>
          <span>© {new Date().getFullYear()} MD. Tanzid Ahmed — All rights reserved.</span>
        </div>

        <div className="flex items-center gap-2">
          {[
            { icon: Mail, href: "mailto:tanzid.ahmed@example.com", label: "Email" },
            { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/", label: "GitHub" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={s.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/40 text-muted-foreground transition-all hover:border-neon-cyan/50 hover:text-neon-cyan"
            >
              <s.icon className="h-4 w-4" aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
