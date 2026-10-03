import { useCallback, useEffect, useMemo, useState } from "react";
import { Background, Controls, MiniMap, ReactFlow, addEdge, useEdgesState, useNodesState, type Connection, type Edge, type Node } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { WorkflowNode } from "./WorkflowNode";
import { NodeLibrary } from "./NodeLibrary";
import { NodeInspector } from "./NodeInspector";
import { ExecutionPanel } from "./ExecutionPanel";
import { WorkflowToolbar } from "./WorkflowToolbar";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { advanceExecution, selectNode, startExecution, stopExecution } from "../../features/workflows/workflowSlice";
import type { WorkflowNodeData } from "../../types";

const initialNodes: Node<WorkflowNodeData>[] = [
  { id: "trigger", position: { x: 80, y: 60 }, data: { label: "Trigger", description: "Start workflow", type: "trigger" }, type: "nexus" },
  { id: "api", position: { x: 80, y: 200 }, data: { label: "API Request", description: "Fetch data from an API", type: "api" }, type: "nexus" },
  { id: "transform", position: { x: 80, y: 340 }, data: { label: "Transform", description: "Process incoming data", type: "transform" }, type: "nexus" },
  { id: "database", position: { x: 80, y: 480 }, data: { label: "Database", description: "Store the result", type: "database" }, type: "nexus" },
];
const initialEdges: Edge[] = [
  { id: "e1", source: "trigger", target: "api" },
  { id: "e2", source: "api", target: "transform" },
  { id: "e3", source: "transform", target: "database" },
];

export function WorkflowCanvas() {
  const dispatch = useAppDispatch();
  const selectedId = useAppSelector(s => s.workflows.selectedNodeId);
  const running = useAppSelector(s => s.workflows.running);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const nodeTypes = useMemo(() => ({ nexus: WorkflowNode }), []);

  const onConnect = useCallback((connection: Connection) => setEdges((eds) => addEdge({ ...connection, animated: true }, eds)), [setEdges]);
  const selectedNode = nodes.find(n => n.id === selectedId);
  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      const step = (window as any).__nexus_step ?? 0;
      if (step < 4) {
        dispatch(advanceExecution());
        (window as any).__nexus_step = step + 1;
      } else {
        dispatch(stopExecution());
        (window as any).__nexus_step = 0;
      }
    }, 900);
    return () => window.clearInterval(timer);
  }, [running, dispatch]);

  const run = () => { (window as any).__nexus_step = 0; dispatch(startExecution()); };

  const addNode = (type: string, label: string) => {
    const id = `${type}-${Date.now()}`;
    setNodes(nds => [...nds, { id, position: { x: 380, y: 100 + nds.length * 80 }, data: { label, description: `Configure ${label.toLowerCase()}`, type: type as WorkflowNodeData["type"] }, type: "nexus" }]);
  };

  const deleteSelected = () => {
    if (!selectedId) return;
    setNodes(nds => nds.filter(n => n.id !== selectedId));
    setEdges(eds => eds.filter(e => e.source !== selectedId && e.target !== selectedId));
    dispatch(selectNode(null));
  };

  return <div className="grid gap-3 xl:grid-cols-[220px_minmax(0,1fr)_250px]">
    <div className="space-y-3"><NodeLibrary onAdd={addNode} /><ExecutionPanel /></div>
    <div className="relative min-h-[600px] overflow-hidden rounded-2xl border border-white/10 bg-[#0d1015]">
      <div className="absolute left-3 top-3 z-10"><WorkflowToolbar onRun={run} onUndo={() => {}} onRedo={() => {}} /></div>
      <ReactFlow nodes={nodes.map(n => ({ ...n, selected: n.id === selectedId }))} edges={edges} nodeTypes={nodeTypes} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} onNodeClick={(_, node) => dispatch(selectNode(node.id))} fitView colorMode="dark">
        <Background gap={20} size={1} />
        <Controls position="bottom-left" />
        <MiniMap pannable zoomable position="bottom-right" />
      </ReactFlow>
    </div>
    <NodeInspector node={selectedNode} onDelete={deleteSelected} />
  </div>;
}
