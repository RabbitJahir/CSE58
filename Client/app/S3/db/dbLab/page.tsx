import Link from "next/link";
import Header from "../../../components/Header/Index";
import Table from "@/app/components/Table";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S3", label: "S3 Page", className: "HeaderButton" },
  { href: "/S3/db", label: "DB theory", className: "HeaderButton" },
];

const markDistribution = [{ label: "Dey nai", value: 100 }];

export default function dbLab() {
  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">CSE0612216</h1>

        <Table title="Mark Distribution" rows={markDistribution} />
      </main>
    </div>
  );
}
