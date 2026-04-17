import Header from "@/app/components/Header/Index";
import BackToTop from "../../../../components/BackToTop";
import CodeExplorer from "@/app/components/CodeExplorer";
import { condition } from "./condition";

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
        <h1 className="page-header">Conditional Logic Page</h1>

        <BackToTop />

        {/* ALL LOGIC HANDLED HERE */}
        <CodeExplorer data={condition} />
      </main>
    </div>
  );
}