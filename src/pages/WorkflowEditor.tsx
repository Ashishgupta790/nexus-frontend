import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { WorkflowCanvas } from "../components/workflow/WorkflowCanvas";
import { workflows } from "../data/workflows";

export default function WorkflowEditor() {
  const { id } = useParams(); const w = workflows.find(x=>x.id===id) ?? workflows[0];
  return <div className="mx-auto max-w-[1500px]"><div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><Link to="/app/workflows" className="inline-flex items-center gap-2 text-xs text-zinc-600 hover:text-white"><ArrowLeft size={14}/> Workflows</Link><h1 className="mt-2 text-2xl font-semibold">{w.name}</h1><p className="mt-1 text-xs text-zinc-600">{w.description}</p></div><div className="text-xs text-zinc-600">{w.runs} executions</div></div><WorkflowCanvas/></div>;
}
