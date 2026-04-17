import Header from "@/app/components/Header/Index";
import BackToTop from "../../../../components/BackToTop";
import CodeExplorer from "@/app/components/CodeExplorer";
import { proposition } from "./proposition";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
  { href: "/S2/discrete", label: "Discrete Page", className: "HeaderButton" },
];

export default function Proposition() {
  return (
    <div>
      <Header links={links} />

      <main className="main-box">
        <h1 className="page-header">Proposition Page</h1>

        <BackToTop />

        {/* ALL LOGIC MOVED HERE */}
        <CodeExplorer data={proposition} />
      </main>
    </div>
  );
}