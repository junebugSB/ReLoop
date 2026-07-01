export function PageLoading() {
  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div className="h-32 animate-pulse rounded-[32px] bg-[var(--cream)]" />
      <div className="grid gap-4 md:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-28 animate-pulse rounded-[24px] bg-[var(--cream)]" />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="h-40 animate-pulse rounded-[28px] bg-[var(--cream)]" />
        ))}
      </div>
    </div>
  );
}
