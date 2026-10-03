import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Workflows from "./pages/Workflows";
import WorkflowEditor from "./pages/WorkflowEditor";
import Documents from "./pages/Documents";
import Activity from "./pages/Activity";
import Settings from "./pages/Settings";
import { AppShell } from "./components/layout/AppShell";
import { useAppSelector } from "./hooks/useAppSelector";

function Protected() {
  const auth = useAppSelector(s => s.auth.isAuthenticated);
  return auth ? <AppShell /> : <Navigate to="/login" replace />;
}

export default function App() {
  return <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/app" element={<Protected />}>
      <Route index element={<Dashboard />} />
      <Route path="projects" element={<Projects />} />
      <Route path="projects/:id" element={<ProjectDetails />} />
      <Route path="workflows" element={<Workflows />} />
      <Route path="workflows/:id" element={<WorkflowEditor />} />
      <Route path="documents" element={<Documents />} />
      <Route path="activity" element={<Activity />} />
      <Route path="settings" element={<Settings />} />
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>;
}
