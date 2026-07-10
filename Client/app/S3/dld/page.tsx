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

const markDistribution = [{ label: "Dey nai", value: 100 }];

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

        <Table title="Mark Distribution" rows={markDistribution} />

        <Link href="/S3/dld/dldLab" className="SubButton">
          DLD Lab Page
        </Link>
        
        <ToggleButton sections={sections} />
      </main>
    </div>
  );
}
