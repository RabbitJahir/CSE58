import Link from "next/link";
import Header from "../../components/Header/Index";
import Table from "@/app/components/Table";

import ToggleButton from "../../components/ToggleButton";
import DldMid from "./dldMid/page";
import DldFinal from "./dldFinal/page";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S3", label: "S3 Page", className: "HeaderButton" },
];

const markDistribution = [
  { label: "Attendance/ performance", value: 10 },
  { label: "Test (best 2 out of three/four)", value: 20 },
  { label: "Mid", value: 20 },
  { label: "Final", value: 50 }
];

export default function dld() {
  const sections = [
    {
      id: "mid",
      title: "Mid Syllabus",
      content: <DldMid />,
    },
    {
      id: "final",
      title: "Final Syllabus",
      content: <DldFinal />,
    },
  ];
  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">CSE0611215</h1>

        <Link
          href="/S3/dld/co-dld.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton"
        >
          Course Outline DLD<sub> Download</sub>
        </Link>
        <Table title="Mark Distribution" rows={markDistribution} />

        <Link href="/S3/dld/dldLab" className="SubButton">
          DLD Lab Page
        </Link>

        <ToggleButton sections={sections} />
      </main>
    </div>
  );
}
