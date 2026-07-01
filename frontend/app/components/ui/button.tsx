import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-[var(--forest)] text-white shadow-[0_12px_30px_rgba(35,79,61,0.18)] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(35,79,61,0.24)]",
    secondary: "border border-black/10 bg-white text-[var(--charcoal)] hover:bg-[var(--cream)]",
    ghost: "text-[var(--forest)] hover:bg-[var(--cream)]",
  };
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4 text-sm",
    lg: "h-12 px-5 text-base",
  };

  const sharedClassName = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={sharedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={sharedClassName}>
      {children}
    </button>
  );
}
