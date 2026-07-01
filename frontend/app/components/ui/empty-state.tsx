interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

export function EmptyState({ title, description, actionLabel, actionHref }: EmptyStateProps) {
  return (
    <div className="rounded-[28px] border border-dashed border-black/10 bg-[var(--cream)]/70 p-10 text-center">
      <h3 className="text-xl font-semibold text-[var(--charcoal)]">{title}</h3>
      <p className="mt-3 text-sm text-[var(--charcoal)]/70">{description}</p>
      {actionLabel && actionHref ? (
        <a href={actionHref} className="mt-6 inline-flex rounded-full bg-[var(--forest)] px-4 py-2 text-sm font-medium text-white">
          {actionLabel}
        </a>
      ) : null}
    </div>
  );
}
