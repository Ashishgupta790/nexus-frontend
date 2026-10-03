import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, FileText, FolderKanban, GitBranch, Search, X } from "lucide-react";
import { useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { closeSearch, setQuery } from "../../features/search/searchSlice";
import { projects } from "../../data/projects";
import { workflows } from "../../data/workflows";
import { documents } from "../../data/documents";

export function CommandSearch() {
  const { open, query } = useAppSelector((s) => s.search);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) dispatch(closeSearch()); else dispatch({ type: "search/openSearch" });
      }
      if (e.key === "Escape" && open) dispatch(closeSearch());
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [dispatch, open]);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [
      ...projects.map((x) => ({ ...x, kind: "PROJECT", icon: FolderKanban, path: `/app/projects/${x.id}` })),
      ...workflows.map((x) => ({ ...x, kind: "WORKFLOW", icon: GitBranch, path: `/app/workflows/${x.id}` })),
      ...documents.map((x) => ({ ...x, kind: "DOCUMENT", icon: FileText, path: "/app/documents" })),
    ].slice(0, 7);
    return [
      ...projects.filter(x => `${x.name} ${x.description}`.toLowerCase().includes(q)).map(x => ({ ...x, kind: "PROJECT", icon: FolderKanban, path: `/app/projects/${x.id}` })),
      ...workflows.filter(x => `${x.name} ${x.description}`.toLowerCase().includes(q)).map(x => ({ ...x, kind: "WORKFLOW", icon: GitBranch, path: `/app/workflows/${x.id}` })),
      ...documents.filter(x => `${x.title} ${x.excerpt}`.toLowerCase().includes(q)).map(x => ({ ...x, kind: "DOCUMENT", icon: FileText, path: "/app/documents" })),
    ].slice(0, 8);
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[100] bg-black/70 p-4 backdrop-blur-sm sm:p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#101318] shadow-2xl" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}>
            <div className="flex items-center gap-3 border-b border-white/10 px-4">
              <Search size={18} className="text-zinc-500" />
              <input autoFocus value={query} onChange={(e) => dispatch(setQuery(e.target.value))} placeholder="Search projects, workflows, documents…" className="h-14 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-600" />
              <button onClick={() => dispatch(closeSearch())} className="text-zinc-500 hover:text-white"><X size={18} /></button>
            </div>
            <div className="max-h-[55vh] overflow-auto p-2">
              {results.length ? results.map((item) => {
                const Icon = item.icon;
                return <button key={`${item.kind}-${item.id}`} onClick={() => { navigate(item.path); dispatch(closeSearch()); }} className="flex w-full items-center gap-3 rounded-xl p-3 text-left hover:bg-white/5">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-zinc-400"><Icon size={17} /></div>
                  <div className="min-w-0 flex-1"><p className="truncate text-sm text-zinc-200">{item.name ?? item.title}</p><p className="truncate text-xs text-zinc-600">{item.description ?? item.excerpt}</p></div>
                  <span className="text-[9px] tracking-widest text-zinc-600">{item.kind}</span><ArrowRight size={14} className="text-zinc-700" />
                </button>;
              }) : <div className="p-8 text-center text-sm text-zinc-600">No results found.</div>}
            </div>
            <div className="border-t border-white/10 px-4 py-2 text-[10px] text-zinc-600">ESC to close · ⌘K to toggle</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
