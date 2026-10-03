import { Play, Redo2, Undo2, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "../ui/Button";

export function WorkflowToolbar({ onRun, onUndo, onRedo }: { onRun: () => void; onUndo: () => void; onRedo: () => void }) {
  return <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-[#11151b] p-1"><Button variant="ghost" onClick={onUndo} className="px-2"><Undo2 size={15} /></Button><Button variant="ghost" onClick={onRedo} className="px-2"><Redo2 size={15} /></Button><div className="mx-1 h-5 w-px bg-white/10" /><Button onClick={onRun} className="px-3"><Play size={14} /> Run</Button><Button variant="ghost" className="px-2"><ZoomIn size={15} /></Button><Button variant="ghost" className="px-2"><ZoomOut size={15} /></Button></div>;
}
