import { Button } from "../ui/button";

export function AIPreview() {
  return (
    <section className="mt-8 rounded-[32px] border border-black/5 bg-[var(--cream)] p-6 shadow-[0_18px_40px_rgba(44,44,44,0.05)]">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-medium text-[var(--forest)]">AI stylist</p>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--charcoal)]">Style suggestions that feel personal, not preset.</h2>
          <p className="mt-3 text-sm text-[var(--charcoal)]/70">Pair your wardrobe with weather-aware, occasion-specific looks in seconds.</p>
          <Button href="/stylist" className="mt-6">Open stylist</Button>
        </div>
        <div className="rounded-[28px] border border-black/5 bg-white p-5">
          <div className="flex items-center justify-between rounded-[22px] bg-[var(--sage)]/60 p-4">
            <div>
              <p className="text-sm font-medium text-[var(--forest)]">Today’s outfit</p>
              <p className="text-lg font-semibold text-[var(--charcoal)]">Weekend brunch edit</p>
            </div>
            <div className="rounded-full bg-white px-3 py-1 text-sm font-medium text-[var(--forest)]">Clear skies</div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[20px] bg-[var(--cream)] p-4">
              <p className="text-sm font-medium text-[var(--forest)]">Recommended</p>
              <p className="mt-2 text-sm text-[var(--charcoal)]/70">Linen shirt, tailored trousers, loafers</p>
            </div>
            <div className="rounded-[20px] bg-[var(--cream)] p-4">
              <p className="text-sm font-medium text-[var(--forest)]">Saved favorites</p>
              <p className="mt-2 text-sm text-[var(--charcoal)]/70">4 outfits curated this month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
