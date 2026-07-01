import { outfitIdeas } from "@/app/lib/mock-data";
import { Button } from "@/app/components/ui/button";

export default function StylistPage() {
  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_20px_60px_rgba(35,79,61,0.08)]">
        <p className="text-sm font-medium text-[var(--forest)]">AI stylist</p>
        <h1 className="mt-2 text-3xl font-semibold text-[var(--charcoal)]">Style with intention, not guesswork.</h1>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-full bg-[var(--forest)] px-4 py-2 text-sm font-medium text-white">Today’s outfit</button>
          <button className="rounded-full bg-[var(--cream)] px-4 py-2 text-sm font-medium text-[var(--charcoal)]">Weather</button>
          <button className="rounded-full bg-[var(--cream)] px-4 py-2 text-sm font-medium text-[var(--charcoal)]">Occasion</button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[32px] border border-black/5 bg-[var(--cream)]/70 p-6 shadow-[0_20px_60px_rgba(35,79,61,0.08)]">
          <p className="text-sm font-medium text-[var(--forest)]">Today’s outfit</p>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--charcoal)]">Soft tailoring for a cool afternoon</h2>
          <p className="mt-3 text-sm text-[var(--charcoal)]/70">Based on your calendar, weather, and most-worn favorites.</p>
          <Button className="mt-6">Generate outfit</Button>
        </div>
        <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_20px_60px_rgba(35,79,61,0.08)]">
          <p className="text-sm font-medium text-[var(--forest)]">Favorite outfits</p>
          <div className="mt-4 space-y-3">
            {outfitIdeas.map((outfit) => (
              <div key={outfit.id} className="rounded-[24px] bg-[var(--cream)] p-4">
                <h3 className="font-semibold text-[var(--charcoal)]">{outfit.title}</h3>
                <p className="mt-1 text-sm text-[var(--charcoal)]/70">{outfit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
