type Props = {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeader({ eyebrow, title, description, align = "center" }: Props) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left"
  return (
    <div className={`mx-auto flex max-w-3xl flex-col ${alignment}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-neon-cyan">
        <span className="h-1 w-1 rounded-full bg-neon-cyan shadow-[0_0_8px_var(--neon-cyan)]" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
