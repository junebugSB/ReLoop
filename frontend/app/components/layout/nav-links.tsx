import Link from "next/link";
import { AppIcon } from "../icons";
import { navItems } from "@/app/lib/mock-data";

interface NavLinksProps {
  pathname: string;
  mobile?: boolean;
}

export function NavLinks({ pathname, mobile = false }: NavLinksProps) {
  const items = mobile ? navItems.slice(0, 5) : navItems;

  if (mobile) {
    return (
      <>
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-1 flex-col items-center rounded-2xl px-2 py-2 text-[11px] font-medium ${active ? "bg-[var(--forest)] text-white" : "text-[var(--charcoal)]/70"}`}
            >
              <AppIcon name={item.icon} className="mb-1 h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </>
    );
  }

  return (
    <>
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-all ${active ? "bg-[var(--forest)] text-white shadow-[0_12px_30px_rgba(35,79,61,0.12)]" : "text-[var(--charcoal)]/80 hover:bg-[var(--sage)]/50"}`}
          >
            <AppIcon name={item.icon} className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
