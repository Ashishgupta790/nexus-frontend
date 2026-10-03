import { motion } from "motion/react";
import { Activity, FolderKanban, GitBranch, HeartPulse } from "lucide-react";

import { PageHeader } from "../components/common/PageHeader";
import { MetricCard } from "../components/dashboard/MetricCard";
import { ProjectCard } from "../components/dashboard/ProjectCard";
import { ActivityFeed } from "../components/dashboard/ActivityFeed";
import { SystemHealth } from "../components/dashboard/SystemHealth";

import { projects } from "../data/projects";
import { useAppSelector } from "../hooks/useAppSelector";

export default function Dashboard() {
  const user = useAppSelector((s) => s.auth.user);

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
          eyebrow="Workspace overview"
          title={`Good evening, ${user?.name ?? "Ragini"}`}
          description="Here's what's happening in your workspace."
        />
      </motion.div>

      {/* Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ y: -4 }}
        >
          <MetricCard
            label="Projects"
            value="08"
            change="+2"
            icon={FolderKanban}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.18 }}
          whileHover={{ y: -4 }}
        >
          <MetricCard
            label="Tasks"
            value="24"
            change="+8%"
            icon={Activity}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.26 }}
          whileHover={{ y: -4 }}
        >
          <MetricCard
            label="Workflows"
            value="14"
            change="+12%"
            icon={GitBranch}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.34 }}
          whileHover={{ y: -4 }}
        >
          <MetricCard
            label="Health"
            value="99.4%"
            change="+0.2%"
            icon={HeartPulse}
          />
        </motion.div>
      </div>

      {/* Main content */}
      <div className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        {/* Active Projects */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-medium">Active projects</h2>

            <motion.span
              className="cursor-pointer text-xs text-zinc-600"
              whileHover={{ x: 3 }}
            >
              View all
            </motion.span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {projects.slice(0, 4).map((p, index) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.45 + index * 0.08,
                }}
                whileHover={{ y: -4 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          {/* System Health */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.55 }}
          >
            <h2 className="mb-3 font-medium">System health</h2>

            <motion.div whileHover={{ y: -3 }}>
              <SystemHealth />
            </motion.div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.65 }}
          >
            <h2 className="mb-3 font-medium">Recent activity</h2>

            <ActivityFeed limit={3} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}