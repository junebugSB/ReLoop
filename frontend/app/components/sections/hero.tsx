import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="overflow-hidden rounded-[36px] border border-black/5 bg-[linear-gradient(135deg,var(--forest),#335f49)] p-8 text-white shadow-[0_24px_70px_rgba(35,79,61,0.2)] sm:p-10 lg:p-12">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur">
            AI-powered wardrobe management
          </div>
          <h1 className="max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
            Love what you own, every single day.
          </h1>
          <p className="mt-4 max-w-lg text-base text-white/80 sm:text-lg">
            ReLoop helps you rediscover your closet, style smarter, and extend the life of every piece you already love.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/upload" variant="secondary" className="bg-white text-[var(--forest)] hover:bg-[var(--cream)]">
              Start your closet
            </Button>
            <Button href="/stylist" variant="ghost" className="border border-white/20 bg-white/10 text-white hover:bg-white/20">
              Try AI stylist
            </Button>
          </div>
        </div>
        <div className="rounded-[28px] border border-white/20 bg-white/10 p-5 backdrop-blur">
          <div className="rounded-[24px] bg-[var(--cream)] p-5 text-[var(--charcoal)]">
            <p className="text-sm font-medium text-[var(--forest)]">Today’s outfit</p>
            <h2 className="mt-3 text-2xl font-semibold">Soft tailoring, grounded energy</h2>
            <p className="mt-2 text-sm text-[var(--charcoal)]/70">Trench, knit, and a sculpted silhouette made effortless.</p>
            <div className="mt-6 flex gap-3">
              <div className="flex-1 rounded-2xl bg-[var(--sage)]/70 p-3">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--forest)]">Closet health</p>
                <p className="mt-1 text-xl font-semibold">92%</p>
              </div>
              <div className="flex-1 rounded-2xl bg-[var(--cream)] p-3">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--forest)]">Items worn</p>
                <p className="mt-1 text-xl font-semibold">16</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
