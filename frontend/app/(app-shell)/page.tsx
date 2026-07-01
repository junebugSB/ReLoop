import { HeroSection } from "@/app/components/sections/hero";
import { FeatureGrid } from "@/app/components/sections/feature-grid";
import { MarketplacePreview } from "@/app/components/sections/marketplace-preview";
import { AIPreview } from "@/app/components/sections/ai-preview";
import { Footer } from "@/app/components/sections/footer";
import { StatisticCard } from "@/app/components/cards/stat-card";
import { clothingItems, analyticsCards } from "@/app/lib/mock-data";
import { ClothingCard } from "@/app/components/cards/clothing-card";
import { PageSection } from "@/app/components/sections/page-section";

export default function HomePage() {
  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <HeroSection />
      <div className="grid gap-4 md:grid-cols-3">
        {analyticsCards.map((stat) => (
          <StatisticCard key={stat.label} label={stat.label} value={stat.value} change={stat.change} />
        ))}
      </div>
      <FeatureGrid />
      <PageSection eyebrow="Your closet" title="A polished capsule, built for real life">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {clothingItems.map((item) => (
            <ClothingCard key={item.id} item={item} />
          ))}
        </div>
      </PageSection>
      <MarketplacePreview />
      <AIPreview />
      <Footer />
    </div>
  );
}
