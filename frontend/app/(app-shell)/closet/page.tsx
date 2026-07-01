import { ClothingCard } from "@/app/components/cards/clothing-card";
import { EmptyState } from "@/app/components/ui/empty-state";
import { clothingItems } from "@/app/lib/mock-data";

export default function ClosetPage() {
  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div className="rounded-[32px] border border-black/5 bg-[linear-gradient(135deg,var(--cream),white)] p-6 shadow-[0_20px_60px_rgba(35,79,61,0.08)]">
        <p className="text-sm font-medium text-[var(--forest)]">Digital Closet</p>
        <h1 className="mt-2 text-3xl font-semibold text-[var(--charcoal)]">Keep your wardrobe beautifully organized.</h1>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-full bg-[var(--forest)] px-4 py-2 text-sm font-medium text-white">Category</button>
          <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--charcoal)]">Season</button>
          <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--charcoal)]">Color</button>
          <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--charcoal)]">Brand</button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {clothingItems.length > 0 ? clothingItems.map((item) => <ClothingCard key={item.id} item={item} />) : <EmptyState title="No clothing yet" description="Start by uploading your first piece." actionLabel="Upload item" actionHref="/upload" />}
      </div>
    </div>
  );
}
