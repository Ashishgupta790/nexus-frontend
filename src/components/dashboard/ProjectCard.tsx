import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "../ui/Card";
import type { Project } from "../../types";

export function ProjectCard({ project }: { project: Project }) {
  return <Link to={`/app/projects/${project.id}`}><Card className="group p-5 transition hover:-translate-y-0.5 hover:border-white/20">
    <div className="flex items-start justify-between"><div><p className="font-medium text-white">{project.name}</p><p className="mt-1 text-xs text-zinc-500">{project.description}</p></div><ArrowUpRight size={16} className="text-zinc-700 transition group-hover:text-white" /></div>
    <div className="mt-6 flex items-center justify-between text-xs"><span className="text-zinc-500">Progress</span><span className="text-zinc-300">{project.progress}%</span></div>
    <div className="mt-2 h-1.5 rounded-full bg-white/5"><div className="h-1.5 rounded-full bg-white" style={{ width: `${project.progress}%` }} /></div>
    <div className="mt-4 flex gap-4 text-xs text-zinc-600"><span>{project.tasks} tasks</span><span>{project.workflows} workflows</span></div>
  </Card></Link>;
}
