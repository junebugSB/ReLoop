"use client";

import { usePathname } from "next/navigation";
import { AppIcon } from "../icons";
import { NavLinks } from "./nav-links";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--charcoal)]">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row lg:gap-6 lg:px-6 lg:py-6">
        <aside className="hidden w-72 shrink-0 rounded-[32px] border border-black/5 bg-white/80 p-6 shadow-[0_20px_60px_rgba(35,79,61,0.08)] backdrop-blur lg:flex lg:flex-col">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--forest)] text-white">
              <AppIcon name="spark" className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold">ReLoop</p>
              <p className="text-sm text-[var(--charcoal)]/60">Love What You Own</p>
            </div>
          </div>

          <nav className="mt-8 space-y-1">
            <NavLinks pathname={pathname} />
          </nav>

          <div className="mt-auto rounded-[24px] bg-[var(--cream)] p-4">
            <p className="text-sm font-semibold text-[var(--forest)]">Closet health</p>
            <p className="mt-1 text-3xl font-semibold text-[var(--charcoal)]">92%</p>
            <p className="mt-2 text-sm text-[var(--charcoal)]/70">Your wardrobe is in excellent shape.</p>
          </div>
        </aside>

        <div className="flex-1 lg:rounded-[36px] lg:border lg:border-black/5 lg:bg-white/70 lg:p-4 lg:shadow-[0_20px_60px_rgba(35,79,61,0.08)] lg:backdrop-blur">
          <main className="pb-24 lg:pb-0">{children}</main>
        </div>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-black/5 bg-white/90 px-3 py-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-md justify-between gap-2">
          <NavLinks pathname={pathname} mobile />
        </div>
      </nav>
    </div>
  );
}
