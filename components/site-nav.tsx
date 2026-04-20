"use client"

import { useEffect, useState } from "react"
import { Menu, X, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#tools", label: "Tools" },
  { href: "#contact", label: "Contact" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300",
            scrolled ? "glass-strong shadow-lg shadow-black/30" : "glass",
          )}
          aria-label="Primary"
        >
          <a
            href="#home"
            className="flex items-center gap-2 font-mono text-sm font-medium tracking-tight text-foreground"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-neon-cyan/40 bg-neon-cyan/10 glow-cyan">
              <ShieldCheck className="h-4 w-4 text-neon-cyan" aria-hidden />
            </span>
            <span className="hidden sm:inline">tanzid.qa</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-4 py-1.5 text-sm font-medium text-neon-cyan transition-all hover:bg-neon-cyan/20 hover:glow-cyan md:inline-block"
          >
            Let&apos;s Talk
          </a>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>

        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl glass-strong md:hidden">
            <ul className="flex flex-col gap-1 p-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
