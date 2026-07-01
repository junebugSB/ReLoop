import { AppIcon } from "../icons";

interface ClothingCardProps {
  item: {
    name: string;
    brand: string;
    category: string;
    color: string;
    season: string;
    image: string;
    favorite: boolean;
  };
}

export function ClothingCard({ item }: ClothingCardProps) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-black/5 bg-white/90 shadow-[0_22px_50px_rgba(44,44,44,0.08)] transition-transform duration-200 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
        <button className="absolute right-3 top-3 rounded-full border border-white/70 bg-white/80 p-2 text-[var(--forest)] backdrop-blur">
          <AppIcon name="heart" className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-[var(--charcoal)]">{item.name}</h3>
            <p className="text-sm text-[var(--charcoal)]/70">{item.brand}</p>
          </div>
          <span className="rounded-full bg-[var(--cream)] px-2.5 py-1 text-xs font-medium text-[var(--forest)]">{item.category}</span>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-[var(--charcoal)]/70">
          <span className="rounded-full bg-[var(--sage)]/60 px-2.5 py-1">{item.color}</span>
          <span className="rounded-full bg-[var(--sage)]/60 px-2.5 py-1">{item.season}</span>
        </div>
        <div className="flex items-center justify-between pt-2">
          <button className="text-sm font-medium text-[var(--forest)]">Edit</button>
          <button className="text-sm font-medium text-[var(--charcoal)]/60">Delete</button>
        </div>
      </div>
    </article>
  );
}
