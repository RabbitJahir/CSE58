import Link from "next/link";
import Header from "../../components/Header/Index";
import Table from "@/app/components/Table";

import ToggleButton from "../../components/ToggleButton";
import MathMid from "./mathMid/page";
import MathFinal from "./mathFinal/page";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S3", label: "S3 Page", className: "HeaderButton" },
];

const markDistribution = [{ label: "Dey nai", value: 100 }];

export default function math() {
  const sections = [
    {
      id: "mid",
      title: "Mid Syllabus",
      content: <MathMid />,
    },
    {
      id: "final",
      title: "Final Syllabus",
      content: <MathFinal />,
    },
  ];
  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">MATH0541211</h1>

        <Table title="Mark Distribution" rows={markDistribution} />

        <ToggleButton sections={sections} />
      </main>
    </div>
  );
}
