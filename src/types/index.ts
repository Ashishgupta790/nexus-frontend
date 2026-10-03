export type Theme = "light" | "dark" | "oled";

export type Project = {
  id: string;
  name: string;
  description: string;
  progress: number;
  tasks: number;
  workflows: number;
  contributors: number;
  status: "Active" | "Planning" | "Complete";
  accent: string;
};

export type DocumentItem = {
  id: string;
  title: string;
  category: string;
  updated: string;
  excerpt: string;
};

export type Activity = {
  id: string;
  type: string;
  title: string;
  description: string;
  time: string;
};

export type WorkflowNodeData = {
  label: string;
  description: string;
  type: "trigger" | "api" | "transform" | "condition" | "database";
  status?: "idle" | "running" | "success" | "error";
};

export type Workflow = {
  id: string;
  name: string;
  description: string;
  nodes: number;
  runs: number;
  status: "Active" | "Draft";
};
