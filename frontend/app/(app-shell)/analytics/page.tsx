import { analyticsCards } from "@/app/lib/mock-data";
import { StatisticCard } from "@/app/components/cards/stat-card";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_20px_60px_rgba(35,79,61,0.08)]">
        <p className="text-sm font-medium text-[var(--forest)]">Wardrobe analytics</p>
        <h1 className="mt-2 text-3xl font-semibold text-[var(--charcoal)]">See what your closet is telling you.</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {analyticsCards.map((card) => (
          <StatisticCard key={card.label} label={card.label} value={card.value} change={card.change} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[32px] border border-black/5 bg-[var(--cream)]/70 p-6 shadow-[0_20px_60px_rgba(35,79,61,0.08)]">
          <h2 className="text-xl font-semibold text-[var(--charcoal)]">Monthly clothing usage</h2>
          <div className="mt-6 flex h-40 items-end gap-3">
            {[45, 70, 52, 80, 62, 88].map((height, index) => (
              <div key={index} className="flex-1 rounded-t-[18px] bg-[var(--forest)]" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
        <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_20px_60px_rgba(35,79,61,0.08)]">
          <h2 className="text-xl font-semibold text-[var(--charcoal)]">Category breakdown</h2>
          <div className="mt-5 space-y-3">
            {[
              ["Outerwear", "28%"],
              ["Tops", "24%"],
              ["Bottoms", "21%"],
              ["Dresses", "17%"],
            ].map(([name, value]) => (
              <div key={name} className="rounded-[20px] bg-[var(--cream)] p-3">
                <div className="flex items-center justify-between text-sm text-[var(--charcoal)]/70">
                  <span>{name}</span>
                  <span className="font-medium text-[var(--charcoal)]">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
