import { Plus, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

import { PageHeader } from "../components/common/PageHeader";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { projects } from "../data/projects";

export default function Projects() {
  const [q, setQ] = useState("");

  const filtered = projects.filter((p) =>
    `${p.name} ${p.description}`
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
          eyebrow="Workspace"
          title="Projects"
          description="Data-driven project spaces for your development work."
          action={
            <Button>
              <Plus size={16} />
              New Project
            </Button>
          }
        />
      </motion.div>

      {/* Search */}
      <motion.div
        className="mb-5 flex max-w-md items-center gap-2 rounded-xl border border-white/10 bg-white/[.03] px-3"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <Search size={16} className="text-zinc-600" />

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search projects…"
          className="h-11 flex-1 bg-transparent text-sm outline-none"
        />
      </motion.div>

      {/* Projects */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.2 + index * 0.08,
            }}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <Link to={`/app/projects/${p.id}`}>
              <Card className="h-full p-5 transition hover:border-white/20">
                {/* Project header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">{p.name}</h3>

                    <p className="mt-1 text-sm text-zinc-500">
                      {p.description}
                    </p>
                  </div>

                  <Badge tone="green">{p.status}</Badge>
                </div>

                {/* Progress */}
                <div className="mt-7 flex justify-between text-xs text-zinc-500">
                  <span>Progress</span>
                  <span>{p.progress}%</span>
                </div>

                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className="h-1.5 rounded-full bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: `${p.progress}%` }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4 + index * 0.08,
                      ease: "easeOut",
                    }}
                  />
                </div>

                {/* Stats */}
                <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
                  <motion.div
                    className="rounded-lg bg-white/[.03] p-2"
                    whileHover={{ scale: 1.03 }}
                  >
                    <b className="text-white">{p.tasks}</b>
                    <span className="block text-zinc-600">
                      Tasks
                    </span>
                  </motion.div>

                  <motion.div
                    className="rounded-lg bg-white/[.03] p-2"
                    whileHover={{ scale: 1.03 }}
                  >
                    <b className="text-white">{p.workflows}</b>
                    <span className="block text-zinc-600">
                      Flows
                    </span>
                  </motion.div>

                  <motion.div
                    className="rounded-lg bg-white/[.03] p-2"
                    whileHover={{ scale: 1.03 }}
                  >
                    <b className="text-white">{p.contributors}</b>
                    <span className="block text-zinc-600">
                      People
                    </span>
                  </motion.div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Empty search state */}
      {filtered.length === 0 && (
        <motion.div
          className="py-16 text-center text-sm text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No projects found.
        </motion.div>
      )}
    </motion.div>
  );
}