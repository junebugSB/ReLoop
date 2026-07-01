import { AppShell } from "@/app/components/layout/shell";

export default function AppShellLayout({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
