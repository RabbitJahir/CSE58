import Header from "@/app/components/Header/Index";
import BackToTop from "../../../../components/BackToTop";
import CodeExplorer from "@/app/components/CodeExplorer";
import { discretech2solve } from "./discretech2solve";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
  { href: "/S2/discrete", label: "Discrete Page", className: "HeaderButton" },
];

export default function DiscreteCh2() {
  return (
    <div>
      <Header links={links} />

      <main className="main-box">
        <h1 className="page-header">Discrete Chapter 2 Page</h1>

        <BackToTop />

        <div className="SubButton">
          Exercise: 2.1, ID: 1-51 <br />
          Exercise: 2.2, ID: 52-126 <br />
          UNDER CONSTRUCTION
        </div>

        {/* ALL LOGIC MOVED HERE */}
        <CodeExplorer data={discretech2solve} />
      </main>
    </div>
  );
}