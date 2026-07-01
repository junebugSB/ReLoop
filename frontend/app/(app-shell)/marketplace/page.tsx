import { listings } from "@/app/lib/mock-data";
import { Button } from "@/app/components/ui/button";

export default function MarketplacePage() {
  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_20px_60px_rgba(35,79,61,0.08)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium text-[var(--forest)]">Marketplace</p>
            <h1 className="mt-2 text-3xl font-semibold text-[var(--charcoal)]">Trade, swap, and discover new favorites.</h1>
          </div>
          <div className="flex gap-3">
            <Button size="sm">Sell item</Button>
            <Button size="sm" variant="secondary">Swap</Button>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-full bg-[var(--forest)] px-4 py-2 text-sm font-medium text-white">Price</button>
          <button className="rounded-full bg-[var(--cream)] px-4 py-2 text-sm font-medium text-[var(--charcoal)]">Category</button>
          <button className="rounded-full bg-[var(--cream)] px-4 py-2 text-sm font-medium text-[var(--charcoal)]">Size</button>
          <button className="rounded-full bg-[var(--cream)] px-4 py-2 text-sm font-medium text-[var(--charcoal)]">Condition</button>
        </div>
      </div>

      <section className="rounded-[32px] border border-black/5 bg-[var(--cream)]/70 p-6">
        <p className="text-sm font-medium text-[var(--forest)]">Featured listings</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {listings.map((listing) => (
            <div key={listing.id} className="overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_18px_35px_rgba(44,44,44,0.06)]">
              <img src={listing.image} alt={listing.title} className="h-36 w-full object-cover" />
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-[var(--charcoal)]">{listing.title}</h3>
                    <p className="mt-1 text-sm text-[var(--charcoal)]/70">{listing.condition} • {listing.seller}</p>
                  </div>
                  <span className="text-sm font-medium text-[var(--forest)]">${listing.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
