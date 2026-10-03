import { GitBranch, Plus } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

import { PageHeader } from "../components/common/PageHeader";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { workflows } from "../data/workflows";

export default function Workflows() {
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
          eyebrow="Automation"
          title="Workflows"
          description="Build and run visual automations across your workspace."
          action={
            <Button>
              <Plus size={16} />
              New Workflow
            </Button>
          }
        />
      </motion.div>

      {/* Workflow cards */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {workflows.map((w, index) => (
          <motion.div
            key={w.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.15 + index * 0.08,
            }}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <Link to={`/app/workflows/${w.id}`}>
              <Card className="p-5 transition hover:border-white/20">
                {/* Icon + status */}
                <div className="flex items-start justify-between">
                  <motion.div
                    className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-zinc-300"
                    whileHover={{
                      rotate: 6,
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <GitBranch size={18} />
                  </motion.div>

                  <Badge
                    tone={w.status === "Active" ? "green" : "yellow"}
                  >
                    {w.status}
                  </Badge>
                </div>

                {/* Content */}
                <h3 className="mt-6 font-medium">{w.name}</h3>

                <p className="mt-1 text-sm text-zinc-500">
                  {w.description}
                </p>

                {/* Stats */}
                <div className="mt-6 flex gap-4 text-xs text-zinc-600">
                  <motion.span whileHover={{ color: "#a1a1aa" }}>
                    {w.nodes} nodes
                  </motion.span>

                  <motion.span whileHover={{ color: "#a1a1aa" }}>
                    {w.runs} runs
                  </motion.span>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}