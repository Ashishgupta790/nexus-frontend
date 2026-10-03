import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "green" | "yellow" | "blue" | "red" }) {
  const styles = {
    neutral: "bg-white/5 text-zinc-300 border-white/10",
    green: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
    yellow: "bg-amber-400/10 text-amber-300 border-amber-400/20",
    blue: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
    red: "bg-red-400/10 text-red-300 border-red-400/20",
  };
  return <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 text-xs", styles[tone])}>{children}</span>;
}
