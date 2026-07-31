"use client";

import ReactFlow, { Background, Controls, Node, Edge } from "reactflow";

import "reactflow/dist/style.css";

const nodes: Node[] = [
  {
    id: "number",
    position: { x: 400, y: 200 },
    data: { label: "Number System" },
  },

  {
    id: "binary",
    position: { x: 400, y: 50 },
    data: { label: "Binary" },
  },

  {
    id: "octal",
    position: { x: 150, y: 200 },
    data: { label: "Octal" },
  },

  {
    id: "decimal",
    position: { x: 650, y: 200 },
    data: { label: "Decimal" },
  },

  {
    id: "hex",
    position: { x: 400, y: 350 },
    data: { label: "Hexadecimal" },
  },
];

const edges: Edge[] = [
  {
    id: "binary-number",
    source: "number",
    target: "binary",
  },

  {
    id: "octal-number",
    source: "number",
    target: "octal",
  },

  {
    id: "decimal-number",
    source: "number",
    target: "decimal",
  },

  {
    id: "hex-number",
    source: "number",
    target: "hex",
  },
];

export default function DldGraph() {
  return (
    <div
      style={{
        height: "500px",
        width: "100%",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        translateExtent={[
          [0, 0],
          [1000, 700],
        ]}
      >
        <Background />

        <Controls />
      </ReactFlow>
    </div>
  );
}
