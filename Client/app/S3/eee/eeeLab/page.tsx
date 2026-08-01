import Link from "next/link";
import Header from "../../../components/Header/Index";
import MarkDistributionTable from "@/app/components/MarkDistributionTable";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S3", label: "S3 Page", className: "HeaderButton" },
  { href: "/S3/eee", label: "EEE theory", className: "HeaderButton" },
];

const markDistribution = [{ label: "Dey nai", value: 100 }];

export default function eeeLab() {
  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">EEE0714212</h1>

        <MarkDistributionTable
          title="Mark Distribution"
          rows={markDistribution}
        />
      </main>
    </div>
  );
}
