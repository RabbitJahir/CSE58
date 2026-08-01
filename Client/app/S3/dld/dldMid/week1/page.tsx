"use client";

import Header from "../../../../components/Header/Index";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import type { Node } from "reactflow";

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
    position: { x: 0, y: 0 },
  },
];
export default function Week1() {
  return (
    <div className="page-container">
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">dld week 1 </h1>
        <Box w="100%" h="100%" border="1px solid black">
          <ReactFlow nodes={nodes} />
        </Box>
      </main>
    </div>
  );
}
