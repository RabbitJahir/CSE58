import Link from "next/link";
import Header from "../../components/Header/Index";
import Table from "@/app/components/Table";

import ToggleButton from "../../components/ToggleButton";
import DsaIMid from "./dsaIMid/page";
import DsaIFinal from "./dsaIFinal/page";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S3", label: "S3 Page", className: "HeaderButton" },
];

const markDistribution = [{ label: "Dey nai", value: 100 }];

export default function dsaI() {
  const sections = [
    {
      id: "mid",
      title: "Mid Syllabus",
      content: <DsaIMid />,
    },
    {
      id: "final",
      title: "Final Syllabus",
      content: <DsaIFinal />,
    },
  ];
  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">CSE0613211</h1>
        <Table title="Mark Distribution" rows={markDistribution} />
        <Link href="/S3/dsaI/dsaILab" className="SubButton">
          DSA 1 Lab Page
        </Link>

        <ToggleButton sections={sections} />
      </main>
    </div>
  );
}
