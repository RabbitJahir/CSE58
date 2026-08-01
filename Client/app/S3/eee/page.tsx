import Link from "next/link";
import Header from "../../components/Header/Index";
import MarkDistributionTable from "@/app/components/MarkDistributionTable";

import ToggleButton from "../../components/ToggleButton";
import EeeMid from "./eeeMid/page";
import EeeFinal from "./eeeFinal/page";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S3", label: "S3 Page", className: "HeaderButton" },
];

const markDistribution = [{ label: "Dey nai", value: 100 }];

export default function eee() {
  const sections = [
    {
      id: "mid",
      title: "Mid Syllabus",
      content: <EeeMid />,
    },
    {
      id: "final",
      title: "Final Syllabus",
      content: <EeeFinal />,
    },
  ];
  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">EEE0714211</h1>

        <MarkDistributionTable
          title="Mark Distribution"
          rows={markDistribution}
        />

        <Link href="/S3/eee/eeeLab" className="SubButton">
          EEE Lab Page
        </Link>

        <ToggleButton sections={sections} />
      </main>
    </div>
  );
}
