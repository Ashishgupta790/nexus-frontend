import { Database, Plus, Repeat2, Split, WandSparkles } from "lucide-react";
import { Card } from "../ui/Card";

const nodes = [
  ["trigger", "Trigger", "Start workflow", Plus],
  ["api", "API Request", "Call endpoint", Repeat2],
  ["transform", "Transform", "Process data", WandSparkles],
  ["condition", "Condition", "Branch logic", Split],
  ["database", "Database", "Store data", Database],
] as const;

export function NodeLibrary({ onAdd }: { onAdd: (type: string, label: string) => void }) {
  return <Card className="p-3"><p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">Node library</p><div className="space-y-1">{nodes.map(([type, label, desc, Icon]) => <button key={type} onClick={() => onAdd(type, label)} className="flex w-full items-center gap-3 rounded-xl p-2 text-left hover:bg-white/5"><div className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-zinc-400"><Icon size={15} /></div><div><p className="text-xs text-zinc-300">{label}</p><p className="text-[10px] text-zinc-600">{desc}</p></div></button>)}</div></Card>;
}
