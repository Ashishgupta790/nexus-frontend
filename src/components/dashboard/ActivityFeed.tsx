import { CheckCircle2, FileText, FolderPlus, Users } from "lucide-react";
import { activities } from "../../data/activities";
import { Card } from "../ui/Card";

const icons: Record<string, any> = { success: CheckCircle2, document: FileText, project: FolderPlus, workspace: Users };

export function ActivityFeed({ limit = 5 }: { limit?: number }) {
  return <Card className="divide-y divide-white/5">
    {activities.slice(0, limit).map(item => { const Icon = icons[item.type] ?? CheckCircle2; return <div key={item.id} className="flex gap-3 p-4">
      <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 text-zinc-500"><Icon size={15} /></div>
      <div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><p className="text-sm text-zinc-200">{item.title}</p><span className="text-[10px] text-zinc-600">{item.time}</span></div><p className="mt-1 text-xs text-zinc-500">{item.description}</p></div>
    </div> })}
  </Card>;
}
