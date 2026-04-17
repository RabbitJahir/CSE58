import Header from "@/app/components/Header/Index";
import BackToTop from "../../../../components/BackToTop";
import CodeExplorer from "@/app/components/CodeExplorer";
import { quantifier } from "./quantifier";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
  { href: "/S2/discrete", label: "Discrete Page", className: "HeaderButton" },
];

export default function Quantifier() {
  return (
    <div>
      <Header links={links} />

      <main className="main-box">
        <h1 className="page-header">Quantifiers Page</h1>

        <BackToTop />

        {/* ALL LOGIC HANDLED HERE */}
        <CodeExplorer data={quantifier} />
      </main>
    </div>
  );
}