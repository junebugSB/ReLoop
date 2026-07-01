interface StatisticCardProps {
  label: string;
  value: string;
  change: string;
}

export function StatisticCard({ label, value, change }: StatisticCardProps) {
  return (
    <div className="rounded-[24px] border border-black/5 bg-white/90 p-5 shadow-[0_20px_45px_rgba(44,44,44,0.06)]">
      <p className="text-sm text-[var(--charcoal)]/70">{label}</p>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl font-semibold text-[var(--charcoal)]">{value}</p>
        <span className="rounded-full bg-[var(--sage)]/70 px-2.5 py-1 text-xs font-medium text-[var(--forest)]">{change}</span>
      </div>
    </div>
  );
}
