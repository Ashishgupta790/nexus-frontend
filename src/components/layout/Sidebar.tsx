import { NavLink } from "react-router-dom";
import { Activity, BookOpen, FolderKanban, GitBranch, LayoutDashboard, Settings, X } from "lucide-react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { toggleSidebar } from "../../features/workspace/workspaceSlice";
import { cn } from "../../lib/utils";

const items = [
  { to: "/app", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/app/projects", label: "Projects", icon: FolderKanban },
  { to: "/app/workflows", label: "Workflows", icon: GitBranch },
  { to: "/app/documents", label: "Documents", icon: BookOpen },
  { to: "/app/activity", label: "Activity", icon: Activity },
  { to: "/app/settings", label: "Settings", icon: Settings },
];

export function Sidebar({ mobile = false }: { mobile?: boolean }) {
  const dispatch = useAppDispatch();
  return (
    <aside className={cn("flex h-full w-64 shrink-0 flex-col border-r border-white/10 bg-[#0b0d11]", mobile ? "fixed inset-y-0 left-0 z-50" : "hidden lg:flex")}>
      <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
        <NavLink to="/app" className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-white text-xs font-black text-black">N</div>
          <span className="font-semibold tracking-[0.18em] text-white">NEXUS</span>
        </NavLink>
        {mobile && <button onClick={() => dispatch(toggleSidebar())} className="text-zinc-500 hover:text-white"><X size={18} /></button>}
      </div>
      <nav className="flex-1 space-y-1 p-3">
        <p className="px-3 pb-2 pt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">Workspace</p>
        {items.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => cn(
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition",
              isActive ? "bg-white/10 text-white" : "text-zinc-500 hover:bg-white/5 hover:text-zinc-200"
            )}
          >
            <Icon size={17} />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-white/10 p-4">
        <div className="rounded-xl border border-cyan-400/10 bg-cyan-400/[0.04] p-3">
          <p className="text-xs font-medium text-zinc-300">Workspace health</p>
          <div className="mt-2 flex items-center justify-between text-xs text-zinc-500"><span>All systems</span><span className="text-emerald-300">99.4%</span></div>
          <div className="mt-2 h-1 rounded-full bg-white/10"><div className="h-1 w-[99.4%] rounded-full bg-emerald-400" /></div>
        </div>
      </div>
    </aside>
  );
}
