import { Check, Circle, Loader2 } from "lucide-react";
import { Card } from "../ui/Card";
import { useAppSelector } from "../../hooks/useAppSelector";

const steps = ["Trigger", "API Request", "Transform", "Database"];

export function ExecutionPanel() {
  const { running, executionStep } = useAppSelector(s => s.workflows);
  return <Card className="p-4"><div className="flex items-center justify-between"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Execution</p>{running && <span className="text-[10px] text-cyan-300">Running…</span>}</div><div className="mt-3 space-y-2">{steps.map((step, i) => { const done = executionStep > i; const active = running && executionStep === i; return <div key={step} className="flex items-center gap-2 text-xs"><div className={done ? "text-emerald-300" : active ? "text-cyan-300" : "text-zinc-700"}>{done ? <Check size={14} /> : active ? <Loader2 size={14} className="animate-spin" /> : <Circle size={12} />}</div><span className={done || active ? "text-zinc-300" : "text-zinc-600"}>{step}</span></div> })}</div></Card>;
}
