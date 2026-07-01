type IconName =
  | "home"
  | "closet"
  | "upload"
  | "market"
  | "stylist"
  | "analytics"
  | "profile"
  | "settings"
  | "spark"
  | "heart"
  | "plus"
  | "arrow";

export function AppIcon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const common = { className, stroke: "currentColor", strokeWidth: 1.8, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (name) {
    case "home":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M6 9.5V21h12V9.5" />
        </svg>
      );
    case "closet":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M5 7.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z" />
          <path d="M9 5.5v14" />
          <path d="M15 5.5v14" />
        </svg>
      );
    case "upload":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 3v12" />
          <path d="m7 8 5-5 5 5" />
          <path d="M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" />
        </svg>
      );
    case "market":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M3 5h2l2 10h9" />
          <circle cx="10" cy="18" r="1.5" />
          <circle cx="17" cy="18" r="1.5" />
        </svg>
      );
    case "stylist":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 3 9 8l-5 1 4 4-1 5 5-2 5 2-1-5 4-4-5-1Z" />
        </svg>
      );
    case "analytics":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M5 19V10" />
          <path d="M12 19V5" />
          <path d="M19 19v-7" />
        </svg>
      );
    case "profile":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M5 19a7 7 0 0 1 14 0" />
        </svg>
      );
    case "settings":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19 12a7.3 7.3 0 0 0-.1-1l2-1.5-2-3.5-2.4 1a7 7 0 0 0-1.7-1L14 3h-4l-.8 2.3a7 7 0 0 0-1.7 1l-2.4-1-2 3.5 2 1.5a7.3 7.3 0 0 0 0 2l-2 1.5 2 3.5 2.4-1a7 7 0 0 0 1.7 1L10 21h4l.8-2.3a7 7 0 0 0 1.7-1l2.4 1 2-3.5-2-1.5c.1-.3.1-.7.1-1Z" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5Z" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 20s-6.5-4.35-8.2-8.24A4.95 4.95 0 0 1 7.2 5.5a4.9 4.9 0 0 1 4.8 3.2A4.9 4.9 0 0 1 16.8 5.5a4.95 4.95 0 0 1 3.4 6.26C18.5 15.65 12 20 12 20Z" />
        </svg>
      );
    case "plus":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M5 12h14" />
        </svg>
      );
  }
}
