interface PageSectionProps {
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function PageSection({ eyebrow, title, description, children }: PageSectionProps) {
  return (
    <section className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_18px_40px_rgba(44,44,44,0.05)]">
      <div className="mb-5 flex items-end justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-[var(--forest)]">{eyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--charcoal)]">{title}</h2>
          {description ? <p className="mt-2 text-sm text-[var(--charcoal)]/70">{description}</p> : null}
        </div>
      </div>
      {children}
    </section>
  );
}
