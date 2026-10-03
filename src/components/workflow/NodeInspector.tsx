import { Copy, Trash2, X } from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { selectNode } from "../../features/workflows/workflowSlice";

export function NodeInspector({ node, onDelete }: { node: any; onDelete: () => void }) {
  const dispatch = useAppDispatch();
  if (!node) return <Card className="p-5"><p className="text-sm text-zinc-500">Select a node to inspect it.</p></Card>;
  return <Card className="p-5">
    <div className="flex items-center justify-between"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Node inspector</p><button onClick={() => dispatch(selectNode(null))}><X size={15} className="text-zinc-600 hover:text-white" /></button></div>
    <h3 className="mt-5 font-medium text-white">{node.data.label}</h3>
    <div className="mt-5 space-y-4 text-xs"><div><span className="text-zinc-600">Node ID</span><p className="mt-1 text-zinc-300">{node.id}</p></div><div><span className="text-zinc-600">Type</span><p className="mt-1 capitalize text-zinc-300">{node.data.type}</p></div><div><span className="text-zinc-600">Description</span><p className="mt-1 text-zinc-300">{node.data.description}</p></div></div>
    <div className="mt-6 flex gap-2"><Button variant="secondary" className="flex-1"><Copy size={14} /> Duplicate</Button><Button variant="danger" onClick={onDelete}><Trash2 size={14} /></Button></div>
  </Card>;
}
