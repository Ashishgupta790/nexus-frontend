import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Database, GitBranch, Play, Repeat2, Split, WandSparkles } from "lucide-react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { cn } from "../../lib/utils";
import type { WorkflowNodeData } from "../../types";

const iconMap = { trigger: Play, api: Repeat2, transform: WandSparkles, condition: Split, database: Database };

export function WorkflowNode({ data, selected }: NodeProps & { data: WorkflowNodeData }) {
  const running = useAppSelector(s => s.workflows.running);
  const step = useAppSelector(s => s.workflows.executionStep);
  const icon = iconMap[data.type] ?? GitBranch;
  const Icon = icon;
  const status = data.status ?? "idle";
  const isActive = selected || (running && data.label === ["Trigger", "API Request", "Transform", "Database"][step]);
  return <div className={cn("w-48 rounded-xl border bg-[#11151b] p-3 shadow-xl transition-all", isActive ? "border-cyan-300/50 shadow-cyan-500/10" : "border-white/10", status === "success" && "border-emerald-400/40", status === "error" && "border-red-400/40")}>
    <Handle type="target" position={Position.Top} className="!h-2 !w-2 !border-0 !bg-zinc-500" />
    <div className="flex items-center gap-2"><div className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-zinc-300"><Icon size={15} /></div><div className="min-w-0"><p className="text-xs font-medium text-white">{data.label}</p><p className="text-[10px] capitalize text-zinc-600">{data.type}</p></div></div>
    <p className="mt-2 text-[10px] leading-4 text-zinc-500">{data.description}</p>
    <Handle type="source" position={Position.Bottom} className="!h-2 !w-2 !border-0 !bg-zinc-500" />
  </div>;
}
