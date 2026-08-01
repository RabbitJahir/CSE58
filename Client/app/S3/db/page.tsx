import Link from "next/link";
import Header from "../../components/Header/Index";
import MarkDistributionTable from "@/app/components/MarkDistributionTable";

import ToggleButton from "../../components/ToggleButton";
import DbMid from "./dbMid/page";
import DbFinal from "./dbFinal/page";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S3", label: "S3 Page", className: "HeaderButton" },
];

const markDistribution = [{ label: "Dey nai", value: 100 }];

export default function db() {
  const sections = [
    {
      id: "mid",
      title: "Mid Syllabus",
      content: <DbMid />,
    },
    {
      id: "final",
      title: "Final Syllabus",
      content: <DbFinal />,
    },
  ];
  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">CSE0612215</h1>

        <MarkDistributionTable
          title="Mark Distribution"
          rows={markDistribution}
        />

        <Link href="/S3/db/dbLab" className="SubButton">
          Database Lab Page
        </Link>

        <ToggleButton sections={sections} />
      </main>
    </div>
  );
}
