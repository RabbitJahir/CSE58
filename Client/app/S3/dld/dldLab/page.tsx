import Link from "next/link";
import Header from "../../../components/Header/Index";
import MarkDistributionTable from "@/app/components/MarkDistributionTable";
import ToggleButton from "../../../components/ToggleButton";

import ICs from "../dldLab/ics/page";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S3", label: "S3 Page", className: "HeaderButton" },
  { href: "/S3/dld", label: "DLD theory", className: "HeaderButton" },
];

const markDistribution = [
  { label: "Attendance", value: 10 },
  { label: "Performance", value: 10 },
  { label: " Lab Test 1", value: 15 },
  { label: " Lab Test 2", value: 15 },
  { label: " Quiz", value: 20 },
  { label: " Lab Report", value: 10 },
  { label: "Project/Assignment", value: 10 },
  { label: "Viva", value: 10 },
];

export default function dldLab() {
  const sections = [
    {
      id: "IC",
      title: "All IC's",
      content: <ICs />,
    },
  ];
  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">CSE0611216</h1>

        <MarkDistributionTable title="Mark Distribution" rows={markDistribution} />
        <ToggleButton sections={sections} />
      </main>
    </div>
  );
}
