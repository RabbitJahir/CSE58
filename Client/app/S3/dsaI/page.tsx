import Link from "next/link";
import Header from "../../components/Header/Index";
import MarkDistributionTable from "@/app/components/MarkDistributionTable";

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
        <MarkDistributionTable
          title="Mark Distribution"
          rows={markDistribution}
        />
        <Link href="/S3/dsaI/dsaILab" className="SubButton">
          DSA 1 Lab Page
        </Link>

        <Link href="/S3/dsaI/CppCode" className="SubButton">
          C++ Codes and Algorithm
        </Link>

        <ToggleButton sections={sections} />
      </main>
    </div>
  );
}
