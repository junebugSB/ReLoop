export default function ProfilePage() {
  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_20px_60px_rgba(35,79,61,0.08)]">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--forest)] text-2xl font-semibold text-white">AR</div>
            <div>
              <p className="text-sm font-medium text-[var(--forest)]">Profile</p>
              <h1 className="text-3xl font-semibold text-[var(--charcoal)]">Ari Rivera</h1>
              <p className="text-sm text-[var(--charcoal)]/70">Curating a capsule built for everyday ease.</p>
            </div>
          </div>
          <button className="rounded-full bg-[var(--forest)] px-4 py-2 text-sm font-medium text-white">Edit profile</button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-black/5 bg-[var(--cream)]/70 p-6 shadow-[0_20px_60px_rgba(35,79,61,0.08)]">
          <h2 className="text-xl font-semibold text-[var(--charcoal)]">Stats</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              ["Saved outfits", "12"],
              ["Saved listings", "7"],
              ["Achievements", "3"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[24px] bg-white p-4">
                <p className="text-sm text-[var(--charcoal)]/70">{label}</p>
                <p className="mt-2 text-2xl font-semibold text-[var(--charcoal)]">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_20px_60px_rgba(35,79,61,0.08)]">
          <h2 className="text-xl font-semibold text-[var(--charcoal)]">Achievements</h2>
          <div className="mt-4 space-y-3">
            {['Capsule starter', 'Circular shopper', 'Storm-ready stylist'].map((achievement) => (
              <div key={achievement} className="rounded-[20px] bg-[var(--cream)] p-3 text-sm text-[var(--charcoal)]/80">
                {achievement}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
