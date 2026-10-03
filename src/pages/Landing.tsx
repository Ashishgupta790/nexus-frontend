import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  CirclePlay,
  Clock3,
  GitBranch,
  Layers3,
  LayoutDashboard,
  MoreHorizontal,
  Network,
  Plus,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const chartData = [
  { day: "Mon", workflows: 18, tasks: 32 },
  { day: "Tue", workflows: 25, tasks: 41 },
  { day: "Wed", workflows: 21, tasks: 37 },
  { day: "Thu", workflows: 34, tasks: 52 },
  { day: "Fri", workflows: 29, tasks: 48 },
  { day: "Sat", workflows: 42, tasks: 61 },
  { day: "Sun", workflows: 38, tasks: 57 },
];

const activityData = [
  { name: "Mon", value: 38 },
  { name: "Tue", value: 52 },
  { name: "Wed", value: 45 },
  { name: "Thu", value: 68 },
  { name: "Fri", value: 59 },
  { name: "Sat", value: 76 },
  { name: "Sun", value: 64 },
];

const features = [
  {
    icon: LayoutDashboard,
    title: "Unified Dashboard",
    description:
      "Track projects, workflows, tasks and team activity from one intelligent workspace.",
  },
  {
    icon: GitBranch,
    title: "Visual Workflows",
    description:
      "Build and understand complex workflows through an interactive visual editor.",
  },
  {
    icon: Network,
    title: "Connected Projects",
    description:
      "Keep teams, documents and workflows connected without switching between tools.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description:
      "Automate repetitive work and monitor progress in real time.",
  },
];

const activities = [
  {
    icon: GitBranch,
    title: "Workflow completed",
    text: "Deployment Pipeline",
    time: "2 min ago",
  },
  {
    icon: Users,
    title: "New member joined",
    text: "Aarav joined Product Team",
    time: "18 min ago",
  },
  {
    icon: Layers3,
    title: "Document updated",
    text: "API Architecture",
    time: "42 min ago",
  },
];

function MetricCard({
  icon: Icon,
  label,
  value,
  change,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  change: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100">
          <Icon size={17} className="text-slate-700" />
        </div>

        <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
          <TrendingUp size={12} />
          {change}
        </span>
      </div>

      <div className="mt-4">
        <p className="text-xs text-slate-500">{label}</p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.15 }}
          className="mt-1 text-2xl font-semibold tracking-tight text-slate-950"
        >
          {value}
        </motion.p>
      </div>
    </motion.div>
  );
}

function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      {/* Glow */}
      <div className="absolute -inset-8 -z-10 rounded-[40px] bg-slate-200/50 blur-3xl" />

      <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-2xl shadow-slate-300/40">
        {/* Browser bar */}
        <div className="flex h-11 items-center border-b border-slate-200 bg-slate-50 px-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>

          <div className="mx-auto rounded-md border border-slate-200 bg-white px-24 py-1.5 text-[9px] text-slate-400">
            app.nexus.io/dashboard
          </div>
        </div>

        {/* App */}
        <div className="flex min-h-[620px] bg-slate-50">
          {/* Sidebar */}
          <aside className="hidden w-[170px] shrink-0 border-r border-slate-200 bg-white p-4 md:block">
            <div className="mb-7 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-950 text-white">
                <Network size={14} />
              </div>

              <span className="text-sm font-bold tracking-tight">
                NEXUS
              </span>
            </div>

            <p className="mb-2 px-2 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
              Workspace
            </p>

            {[
              ["Dashboard", LayoutDashboard],
              ["Projects", Layers3],
              ["Workflows", GitBranch],
              ["Documents", Network],
              ["Activity", Activity],
            ].map(([name, Icon], index) => {
              const ItemIcon = Icon as React.ElementType;

              return (
                <div
                  key={String(name)}
                  className={`mb-1 flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] ${
                    index === 0
                      ? "bg-slate-950 text-white"
                      : "text-slate-500"
                  }`}
                >
                  <ItemIcon size={13} />
                  {String(name)}
                </div>
              );
            })}

            <div className="mt-8">
              <p className="mb-2 px-2 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                Teams
              </p>

              {["Product", "Engineering", "Design"].map((team) => (
                <div
                  key={team}
                  className="flex items-center gap-2 px-2.5 py-2 text-[10px] text-slate-500"
                >
                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                  {team}
                </div>
              ))}
            </div>
          </aside>

          {/* Main */}
          <main className="min-w-0 flex-1 p-5 md:p-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-slate-400">
                  Monday, October 1
                </p>

                <h3 className="mt-1 text-lg font-semibold tracking-tight text-slate-950">
                  Good morning, Ragini
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button className="hidden rounded-lg border border-slate-200 bg-white px-3 py-2 text-[10px] font-medium text-slate-600 sm:block">
                  Export
                </button>

                <button className="flex items-center gap-1.5 rounded-lg bg-slate-950 px-3 py-2 text-[10px] font-medium text-white">
                  <Plus size={12} />
                  New
                </button>
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
              <MetricCard
                icon={Layers3}
                label="Active Projects"
                value="24"
                change="+12%"
                delay={0.3}
              />

              <MetricCard
                icon={GitBranch}
                label="Workflows"
                value="86"
                change="+18%"
                delay={0.4}
              />

              <MetricCard
                icon={Check}
                label="Completed Tasks"
                value="1,284"
                change="+24%"
                delay={0.5}
              />

              <MetricCard
                icon={Users}
                label="Team Members"
                value="42"
                change="+8%"
                delay={0.6}
              />
            </div>

            {/* Charts */}
            <div className="mt-4 grid gap-4 lg:grid-cols-[1.7fr_1fr]">
              {/* Main chart */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-900">
                      Workflow activity
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Weekly workflow and task execution
                    </p>
                  </div>

                  <button className="rounded-lg border border-slate-200 p-1.5">
                    <MoreHorizontal size={14} className="text-slate-500" />
                  </button>
                </div>

                <div className="mt-4 h-[185px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient
                          id="workflowGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#0f172a"
                            stopOpacity={0.18}
                          />

                          <stop
                            offset="100%"
                            stopColor="#0f172a"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>

                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#e2e8f0"
                      />

                      <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                        tick={{
                          fontSize: 9,
                          fill: "#94a3b8",
                        }}
                      />

                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        tick={{
                          fontSize: 9,
                          fill: "#94a3b8",
                        }}
                      />

                      <Tooltip
                        contentStyle={{
                          borderRadius: 10,
                          border: "1px solid #e2e8f0",
                          fontSize: 10,
                          boxShadow: "0 8px 25px rgba(15,23,42,0.08)",
                        }}
                      />

                      <Area
                        type="monotone"
                        dataKey="tasks"
                        stroke="#0f172a"
                        strokeWidth={2}
                        fill="url(#workflowGradient)"
                        animationDuration={1800}
                      />

                      <Area
                        type="monotone"
                        dataKey="workflows"
                        stroke="#94a3b8"
                        strokeWidth={1.5}
                        fill="transparent"
                        animationDuration={2000}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-2 flex gap-4 text-[9px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    Tasks
                  </span>

                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                    Workflows
                  </span>
                </div>
              </div>

              {/* Activity chart */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-900">
                      Productivity
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Daily execution score
                    </p>
                  </div>

                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100">
                    <BarChart3 size={13} />
                  </div>
                </div>

                <div className="mt-5 h-[145px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={activityData}>
                      <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                        tick={{
                          fontSize: 8,
                          fill: "#94a3b8",
                        }}
                      />

                      <YAxis hide />

                      <Tooltip
                        cursor={{ fill: "#f8fafc" }}
                        contentStyle={{
                          borderRadius: 10,
                          border: "1px solid #e2e8f0",
                          fontSize: 10,
                        }}
                      />

                      <Bar
                        dataKey="value"
                        fill="#0f172a"
                        radius={[5, 5, 2, 2]}
                        animationDuration={1600}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-1 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-slate-950">
                      87.4%
                    </p>
                    <p className="text-[9px] text-slate-400">
                      Overall productivity
                    </p>
                  </div>

                  <span className="flex items-center gap-1 text-[9px] font-medium text-emerald-600">
                    <TrendingUp size={10} />
                    14.2%
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
              {/* Workflows */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-900">
                      Active workflows
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Current automation pipelines
                    </p>
                  </div>

                  <button className="text-[9px] font-medium text-slate-500">
                    View all
                  </button>
                </div>

                <div className="mt-4 space-y-3">
                  {[
                    ["Product Launch", 82],
                    ["API Integration", 64],
                    ["Design Review", 47],
                  ].map(([name, progress], index) => (
                    <motion.div
                      key={String(name)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.12 }}
                    >
                      <div className="flex justify-between text-[10px]">
                        <span className="font-medium text-slate-700">
                          {String(name)}
                        </span>

                        <span className="text-slate-400">
                          {String(progress)}%
                        </span>
                      </div>

                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{
                            duration: 1.2,
                            delay: 0.8 + index * 0.12,
                          }}
                          className="h-full rounded-full bg-slate-900"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Recent activity */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-900">
                      Recent activity
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Latest workspace events
                    </p>
                  </div>

                  <Activity size={14} className="text-slate-400" />
                </div>

                <div className="mt-3 space-y-3">
                  {activities.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + index * 0.12 }}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                          <Icon size={12} className="text-slate-600" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[10px] font-medium text-slate-700">
                            {item.title}
                          </p>

                          <p className="truncate text-[9px] text-slate-400">
                            {item.text}
                          </p>
                        </div>

                        <span className="text-[8px] text-slate-400">
                          {item.time}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </motion.div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f8f9fb] text-slate-950">
      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-[#f8f9fb]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-white">
              <Network size={16} />
            </div>

            <span className="text-lg font-bold tracking-tight">
              NEXUS
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-slate-500 md:flex">
            <a href="#features" className="transition hover:text-slate-950">
              Features
            </a>

            <a href="#workflow" className="transition hover:text-slate-950">
              Workflow
            </a>

            <a href="#dashboard" className="transition hover:text-slate-950">
              Dashboard
            </a>

            <a href="#about" className="transition hover:text-slate-950">
              About
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="hidden px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-950 sm:block"
            >
              Log in
            </Link>

            <Link
              to="/register"
              className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        <div className="absolute left-1/2 top-20 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-slate-200/50 blur-3xl" />

        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            The modern workspace for connected teams
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl"
          >
            One workspace.
            <br />
            <span className="text-slate-400">
              Everything connected.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg"
          >
            NEXUS brings projects, workflows, documents and teams into one
            intelligent workspace designed to keep work moving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <Link
              to="/register"
              className="group flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Start building
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <a
              href="#dashboard"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <CirclePlay size={16} />
              Explore dashboard
            </a>
          </motion.div>
        </div>

        {/* DASHBOARD */}
        <div id="dashboard" className="mx-auto mt-16 max-w-6xl scroll-mt-24">
          <DashboardPreview />
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-slate-200 bg-white py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 md:grid-cols-4 lg:px-8">
          {[
            ["10K+", "Tasks managed"],
            ["2.4M+", "Workflow actions"],
            ["99.9%", "Platform uptime"],
            ["4.9/5", "Team satisfaction"],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-semibold tracking-tight text-slate-950">
                {value}
              </p>

              <p className="mt-1 text-xs text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="scroll-mt-20 px-5 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Everything in one place
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Built around how modern teams work.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500">
              NEXUS gives your team a connected layer for planning,
              executing and understanding work.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon size={17} />
                  </div>

                  <h3 className="mt-6 text-base font-semibold text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {feature.description}
                  </p>

                  <div className="mt-5 flex items-center gap-1 text-xs font-medium text-slate-700">
                    Learn more
                    <ChevronRight size={13} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section
        id="workflow"
        className="scroll-mt-20 border-y border-slate-200 bg-white px-5 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Visual workflows
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Turn complex processes into simple flows.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
              Build workflows visually, connect dependencies and understand
              exactly what happens at every stage.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Map processes visually",
                "Connect tasks and dependencies",
                "Monitor execution in real time",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-white">
                    <Check size={12} />
                  </div>

                  <span className="text-sm text-slate-600">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Workflow mock */}
          <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-100/80 to-transparent" />

            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-900">
                    Product Launch
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    8 nodes · 3 active
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-[9px] text-slate-500">
                  Live
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  ["Research", "Complete"],
                  ["Design", "Active"],
                  ["Development", "Pending"],
                  ["Testing", "Pending"],
                  ["Review", "Pending"],
                  ["Launch", "Pending"],
                ].map(([title, status], index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="relative rounded-xl border border-slate-200 bg-white p-3"
                  >
                    <div
                      className={`mb-4 h-2 w-2 rounded-full ${
                        status === "Complete"
                          ? "bg-emerald-500"
                          : status === "Active"
                            ? "animate-pulse bg-slate-950"
                            : "bg-slate-200"
                      }`}
                    />

                    <p className="text-[10px] font-medium text-slate-800">
                      {title}
                    </p>

                    <p className="mt-1 text-[8px] text-slate-400">
                      {status}
                    </p>

                    {index < 5 && (
                      <div className="absolute -right-3 top-1/2 hidden h-px w-3 bg-slate-300 sm:block" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="about" className="px-5 py-24 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-16 text-center text-white sm:px-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Your workspace, connected
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Build better systems for better work.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-400">
            Bring your projects, workflows and team together with NEXUS.
          </p>

          <Link
            to="/register"
            className="group mx-auto mt-8 flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
          >
            Get started
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-950 text-white">
              <Network size={13} />
            </div>

            <span className="text-sm font-bold">NEXUS</span>
          </div>

          <p className="text-xs text-slate-400">
            © 2026 NEXUS. Built for connected teams.
          </p>

          <div className="flex gap-5 text-xs text-slate-400">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}