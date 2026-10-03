import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export function Button({ className, variant = "primary", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" | "danger" }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50",
        variant === "primary" && "bg-white text-black hover:bg-zinc-200",
        variant === "secondary" && "border border-white/10 bg-white/5 text-white hover:bg-white/10",
        variant === "ghost" && "text-zinc-400 hover:bg-white/5 hover:text-white",
        variant === "danger" && "bg-red-500/10 text-red-300 hover:bg-red-500/20",
        className
      )}
      {...props}
    />
  );
}
