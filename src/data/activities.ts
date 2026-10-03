import type { Activity } from "../types";

export const activities: Activity[] = [
  { id: "1", type: "success", title: "Workflow completed", description: "Search Pipeline finished successfully.", time: "2 minutes ago" },
  { id: "2", type: "document", title: "Document updated", description: "Search Architecture was modified.", time: "18 minutes ago" },
  { id: "3", type: "project", title: "Project created", description: "Smart Mail was added to the workspace.", time: "1 hour ago" },
  { id: "4", type: "workspace", title: "Workspace updated", description: "A new member joined.", time: "3 hours ago" },
  { id: "5", type: "success", title: "Workflow completed", description: "Content Sync finished successfully.", time: "Yesterday" },
];
