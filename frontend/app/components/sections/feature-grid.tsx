const features = [
  {
    title: "Organize effortlessly",
    description: "Keep every piece searchable, styled, and ready to wear.",
  },
  {
    title: "Unlock value",
    description: "Spot unworn items, rotate your capsule, and resell with confidence.",
  },
  {
    title: "Style with intent",
    description: "Let AI suggest looks based on weather, occasion, and your mood.",
  },
];

export function FeatureGrid() {
  return (
    <section className="mt-8 grid gap-4 md:grid-cols-3">
      {features.map((feature) => (
        <div key={feature.title} className="rounded-[24px] border border-black/5 bg-white/90 p-6 shadow-[0_18px_40px_rgba(44,44,44,0.05)]">
          <div className="mb-4 h-10 w-10 rounded-2xl bg-[var(--sage)]/70" />
          <h3 className="text-lg font-semibold text-[var(--charcoal)]">{feature.title}</h3>
          <p className="mt-2 text-sm text-[var(--charcoal)]/70">{feature.description}</p>
        </div>
      ))}
    </section>
  );
}
