import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { CommandSearch } from "./CommandSearch";

export function AppShell() {
  const { sidebarOpen } = useAppSelector(s => s.workspace);
  return (
    <div className="min-h-screen bg-[#090b0f] text-zinc-100">
      <div className="flex min-h-screen">
        <Sidebar />
        {sidebarOpen && <div className="lg:hidden"><Sidebar mobile /></div>}
        <div className="min-w-0 flex-1">
          <Topbar />
          <main className="p-4 sm:p-6 lg:p-8"><Outlet /></main>
        </div>
      </div>
      <CommandSearch />
    </div>
  );
}
