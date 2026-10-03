import { FileText, Plus, Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

import { PageHeader } from "../components/common/PageHeader";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { documents } from "../data/documents";

export default function Documents() {
  const [q, setQ] = useState("");

  const filtered = documents.filter((d) =>
    `${d.title} ${d.category} ${d.excerpt}`
      .toLowerCase()
      .includes(q.toLowerCase())
  );

  return (
    <motion.div
      className="mx-auto max-w-7xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageHeader
          eyebrow="Knowledge"
          title="Documents"
          description="Keep architecture, planning and technical knowledge close to the work."
          action={
            <Button>
              <Plus size={16} />
              New Document
            </Button>
          }
        />
      </motion.div>

      {/* Search */}
      <motion.div
        className="mb-5 flex max-w-lg items-center gap-2 rounded-xl border border-white/10 bg-white/[.03] px-3"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <Search size={16} className="text-zinc-600" />

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search documents…"
          className="h-11 flex-1 bg-transparent text-sm outline-none"
        />
      </motion.div>

      {/* Documents */}
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((d, index) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.2 + index * 0.08,
            }}
            whileHover={{
              y: -4,
              transition: { duration: 0.2 },
            }}
          >
            <Card className="p-5 transition hover:border-white/20">
              <div className="flex gap-4">
                {/* Icon */}
                <motion.div
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-zinc-400"
                  whileHover={{
                    scale: 1.08,
                    rotate: -4,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <FileText size={17} />
                </motion.div>

                {/* Content */}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-medium">{d.title}</h3>

                    <Badge>{d.category}</Badge>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {d.excerpt}
                  </p>

                  <motion.p
                    className="mt-4 text-[11px] text-zinc-700"
                    whileHover={{ color: "#a1a1aa" }}
                  >
                    Updated {d.updated}
                  </motion.p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <motion.div
          className="py-16 text-center text-sm text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No documents found.
        </motion.div>
      )}
    </motion.div>
  );
}