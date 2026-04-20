import { ArrowRight, Sparkles, Terminal, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Animated background orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-neon-blue/25 blur-3xl animate-float-slow" />
        <div
          className="absolute right-[8%] top-[30%] h-80 w-80 rounded-full bg-neon-purple/25 blur-3xl animate-float-slow"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute left-1/2 bottom-[5%] h-64 w-64 -translate-x-1/2 rounded-full bg-neon-cyan/20 blur-3xl animate-pulse-glow"
          style={{ animationDelay: "0.8s" }}
        />
        <div className="absolute inset-0 grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-1.5 text-xs font-medium text-neon-cyan backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-cyan" />
          </span>
          Available for new opportunities
        </div>

        <h1
          className="animate-fade-up mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-gradient">MD. Tanzid Ahmed</span>
        </h1>

        <p
          className="animate-fade-up mt-6 flex flex-wrap items-center justify-center gap-2 font-mono text-sm text-muted-foreground sm:text-base"
          style={{ animationDelay: "0.2s" }}
        >
          <Terminal className="h-4 w-4 text-neon-cyan" aria-hidden />
          <span>Software Quality Assurance Engineer</span>
        </p>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/80 sm:text-xl md:text-2xl"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-neon-purple" aria-hidden />
            Ensuring Quality. Delivering Excellence.
          </span>
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-neon-cyan px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-cyan hover:scale-[1.02]"
          >
            <span className="relative z-10">View Projects</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-neon-purple/60 hover:bg-neon-purple/10 hover:text-neon-purple"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Contact Me
          </a>
        </div>

        {/* Quick stats */}
        <div
          className="animate-fade-up mt-16 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { k: "500+", v: "Bugs Found" },
            { k: "50+", v: "Test Suites" },
            { k: "15+", v: "Projects Shipped" },
            { k: "99%", v: "Quality Rate" },
          ].map((s) => (
            <div
              key={s.v}
              className="glass rounded-xl px-4 py-4 transition-all hover:border-neon-cyan/40 hover:bg-card/70"
            >
              <div className="font-mono text-2xl font-semibold text-gradient">{s.k}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
