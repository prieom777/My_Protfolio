"use client"

import { useState, type FormEvent } from "react"
import { Mail,phoneCall, Linkedin, Github, Send, CheckCircle2 } from "lucide-react"
import { SectionHeader } from "./section-header"

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "tanzid.ahmed@example.com",
    href: "mailto:tanzid.ahmed@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/tanzid-ahmed",
    href: "https://linkedin.com/",

  },
  {
    icon: Github,
    label: "GitHub",
    value: "@tanzid-ahmed",
    href: "https://github.com/",
  },
  {
    icon: phoneCall,
    label: "phone",
    value: "01886016060",
    href: "",
  },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [pending, setPending] = useState(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPending(true)
    // Simulated submit — wire up to a real endpoint when backend is ready.
    await new Promise((r) => setTimeout(r, 900))
    setPending(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Contact"
          title="Let's ship quality software together."
          description="Have a QA challenge, automation project, or full-time role in mind? I'd love to hear about it."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Contact channels */}
          <div className="space-y-4 lg:col-span-2">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={c.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="group flex items-center gap-4 rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-neon-cyan/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan transition-all duration-300 group-hover:glow-cyan">
                  <c.icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-0.5 truncate text-sm font-medium text-foreground">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}

            <div className="rounded-2xl border border-dashed border-border/70 bg-secondary/20 p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Response Time
              </p>
              <p className="mt-1 text-sm text-foreground/85">
                I typically reply within{" "}
                <span className="font-mono text-neon-cyan">24 hours</span>.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl glass-strong p-6 sm:p-8 lg:col-span-3"
          >
            {submitted ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan glow-cyan">
                  <CheckCircle2 className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  Message sent successfully
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thanks for reaching out. I&apos;ll get back to you within a day.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Name" placeholder="Jane Doe" required />
                  <Field
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="jane@company.com"
                    required
                  />
                </div>
                <Field id="subject" label="Subject" placeholder="QA consultation" required />

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, team, or QA challenge..."
                    className="w-full resize-none rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-neon-cyan/60 focus:bg-background/60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={pending}
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-neon-cyan px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-cyan disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  <span className="relative z-10">
                    {pending ? "Sending..." : "Send Message"}
                  </span>
                  <Send className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
}: {
  id: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-neon-cyan/60 focus:bg-background/60"
      />
    </div>
  )
}
