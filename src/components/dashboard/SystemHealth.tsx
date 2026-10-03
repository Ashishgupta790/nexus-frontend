import { Activity, Database, Globe2, Zap } from "lucide-react";
import { Card } from "../ui/Card";

export function SystemHealth() {
  const rows = [
    ["API", "Operational", Globe2],
    ["Database", "Operational", Database],
    ["Workflows", "Operational", Zap],
    ["Search", "Operational", Activity],
  ] as const;
  return <Card className="p-5"><div className="flex items-center justify-between"><h3 className="font-medium text-white">System health</h3><span className="text-xs text-emerald-300">99.4%</span></div><div className="mt-4 space-y-3">{rows.map(([name, status, Icon]) => <div key={name} className="flex items-center justify-between"><div className="flex items-center gap-3 text-sm text-zinc-400"><Icon size={15} />{name}</div><span className="flex items-center gap-2 text-xs text-zinc-500"><i className="h-1.5 w-1.5 rounded-full bg-emerald-400" />{status}</span></div>)}</div></Card>;
}
