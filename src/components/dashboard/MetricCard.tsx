import { ArrowUpRight } from "lucide-react";
import { Card } from "../ui/Card";

export function MetricCard({ label, value, change, icon: Icon }: { label: string; value: string; change: string; icon: any }) {
  return <Card className="p-5">
    <div className="flex items-start justify-between"><div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-zinc-400"><Icon size={17} /></div><span className="flex items-center gap-1 text-xs text-emerald-300">{change}<ArrowUpRight size={12} /></span></div>
    <p className="mt-5 text-xs text-zinc-500">{label}</p><p className="mt-1 text-2xl font-semibold text-white">{value}</p>
  </Card>;
}
