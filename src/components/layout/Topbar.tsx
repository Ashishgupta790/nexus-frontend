import { Bell, Menu, Search, Sparkles } from "lucide-react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { openSearch } from "../../features/search/searchSlice";
import { toggleSidebar } from "../../features/workspace/workspaceSlice";
import { Button } from "../ui/Button";

export function Topbar() {
  const dispatch = useAppDispatch();
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/10 bg-[#090b0f]/90 px-4 backdrop-blur-xl sm:px-6">
      <div className="flex items-center gap-2">
        <button className="rounded-lg p-2 text-zinc-500 hover:bg-white/5 hover:text-white lg:hidden" onClick={() => dispatch(toggleSidebar())}><Menu size={19} /></button>
        <button onClick={() => dispatch(openSearch())} className="hidden items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-500 hover:border-white/20 sm:flex sm:w-72">
          <Search size={16} /><span>Search projects, workflows…</span><kbd className="ml-auto rounded border border-white/10 px-1.5 text-[10px]">⌘K</kbd>
        </button>
        <button onClick={() => dispatch(openSearch())} className="rounded-lg p-2 text-zinc-500 hover:bg-white/5 hover:text-white sm:hidden"><Search size={18} /></button>
      </div>
      <div className="flex items-center gap-1">
        <Button variant="ghost" className="hidden sm:inline-flex"><Sparkles size={16} /> AI</Button>
        <button className="relative rounded-lg p-2 text-zinc-500 hover:bg-white/5 hover:text-white"><Bell size={18} /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" /></button>
        <div className="ml-2 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-cyan-300 to-violet-400 text-xs font-bold text-black">R</div>
      </div>
    </header>
  );
}
