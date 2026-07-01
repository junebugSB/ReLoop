import { Button } from "../ui/button";
import { listings } from "@/app/lib/mock-data";

export function MarketplacePreview() {
  return (
    <section className="mt-8 rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_18px_40px_rgba(44,44,44,0.05)]">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-[var(--forest)]">Marketplace preview</p>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--charcoal)]">Refresh your wardrobe with circular fashion</h2>
        </div>
        <Button href="/marketplace" size="sm">Explore marketplace</Button>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {listings.slice(0, 3).map((listing) => (
          <div key={listing.id} className="overflow-hidden rounded-[24px] border border-black/5 bg-[var(--cream)]">
            <img src={listing.image} alt={listing.title} className="h-36 w-full object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[var(--charcoal)]">{listing.title}</h3>
                <span className="text-sm font-medium text-[var(--forest)]">${listing.price}</span>
              </div>
              <p className="mt-2 text-sm text-[var(--charcoal)]/70">{listing.condition} • {listing.seller}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
