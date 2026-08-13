import Link from "next/link";
import Header from "../../components/Header/Index";
import MarkDistributionTable from "@/app/components/MarkDistributionTable";

import ToggleButton from "../../components/ToggleButton";
import CGLavaMid from "./cglavaMid/page";
import CGLavaFinal from "./cglavaFinal/page";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S3", label: "S3 Page", className: "HeaderButton" },
];

const markDistribution = [{ label: "Dey nai", value: 100 }];

export default function cglava() {
  const sections = [
    {
      id: "mid",
      title: "Mid Syllabus",
      content: <CGLavaMid />,
    },
    {
      id: "final",
      title: "Final Syllabus",
      content: <CGLavaFinal />,
    },
  ];
  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">MATH0541211</h1>

        <MarkDistributionTable
          title="Mark Distribution"
          rows={markDistribution}
        />

        <ToggleButton sections={sections} />
      </main>
    </div>
  );
}
