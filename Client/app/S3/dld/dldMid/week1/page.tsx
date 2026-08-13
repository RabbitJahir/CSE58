"use client";

import Header from "../../../../components/Header/Index";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import type { Node, Edge } from "reactflow";
import { Handle, Position } from "reactflow";

const ReactFlow = dynamic(
  () => import("reactflow").then((mod) => mod.default),
  { ssr: false },
);

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S3", label: "S3 Page", className: "HeaderButton" },
  { href: "/S3/dld", label: "DLD Page", className: "HeaderButton" },
];

const nodes: Node[] = [
  {
    id: "NumberSystem",
    data: {
      label: "Number System",
    },
    position: { x: 100, y: 100 },
  },
  {
    id: "Binary",
    data: {
      label: "Binary",
    },
    position: { x: 200, y: 250 },
  },
];
const edges: Edge[] = [
  {
    id: "NumberSystems-Binary",
    source: "NumberSystem",
    target: "Binary",
    type: "smoothstep",
  },
];

export default function Week1() {
  return (
    <div className="page-container">
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">dld week 1 </h1>
        <Box w="100%" h="400px" border="1px solid black">
          <ReactFlow nodes={nodes} edges={edges} />
        </Box>
      </main>
    </div>
  );
}
