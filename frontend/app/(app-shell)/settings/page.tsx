export default function SettingsPage() {
  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_20px_60px_rgba(35,79,61,0.08)]">
        <p className="text-sm font-medium text-[var(--forest)]">Settings</p>
        <h1 className="mt-2 text-3xl font-semibold text-[var(--charcoal)]">Tailor your experience.</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {[
          ["Theme", "Light mode"],
          ["Notifications", "Enabled"],
          ["Privacy", "Friends only"],
          ["Account", "Verified"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-[24px] border border-black/5 bg-white/90 p-5 shadow-[0_16px_35px_rgba(44,44,44,0.05)]">
            <p className="text-sm text-[var(--charcoal)]/70">{label}</p>
            <p className="mt-2 text-lg font-semibold text-[var(--charcoal)]">{value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-[32px] border border-black/5 bg-[var(--cream)]/70 p-6 shadow-[0_20px_60px_rgba(35,79,61,0.08)]">
        <h2 className="text-xl font-semibold text-[var(--charcoal)]">Need help?</h2>
        <p className="mt-2 text-sm text-[var(--charcoal)]/70">Reach the ReLoop support team or browse the help center.</p>
      </div>
    </div>
  );
}
