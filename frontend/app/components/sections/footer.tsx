export function Footer() {
  return (
    <footer className="mt-8 rounded-[28px] border border-black/5 bg-white/90 p-6 text-sm text-[var(--charcoal)]/70 shadow-[0_18px_40px_rgba(44,44,44,0.05)]">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© 2026 ReLoop. Love what you own.</p>
        <div className="flex gap-4">
          <a href="/" className="transition hover:text-[var(--forest)]">Home</a>
          <a href="/marketplace" className="transition hover:text-[var(--forest)]">Marketplace</a>
          <a href="/settings" className="transition hover:text-[var(--forest)]">Settings</a>
        </div>
      </div>
    </footer>
  );
}
