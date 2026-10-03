import type { Workflow } from "../types";

export const workflows: Workflow[] = [
  { id: "search-pipeline", name: "Search Pipeline", description: "Fetch, transform and index technical content.", nodes: 4, runs: 128, status: "Active" },
  { id: "content-sync", name: "Content Sync", description: "Synchronize project documents into the knowledge base.", nodes: 5, runs: 76, status: "Active" },
  { id: "api-monitor", name: "API Monitor", description: "Check service health and notify the workspace.", nodes: 4, runs: 43, status: "Draft" },
];
