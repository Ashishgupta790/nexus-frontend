export function EmptyState({ title, description }: { title: string; description: string }) {
  return <div className="rounded-2xl border border-dashed border-white/10 p-10 text-center"><h3 className="font-medium text-white">{title}</h3><p className="mt-2 text-sm text-zinc-500">{description}</p></div>;
}
