import Header from "@/app/components/Header/Index";
import BackToTop from "../../../../components/BackToTop";
import CodeExplorer from "@/app/components/CodeExplorer";
import { discretech1solve } from "./discretech1solve";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
  { href: "/S2/discrete", label: "Discrete Page", className: "HeaderButton" },
];

export default function DiscreteCh1() {
  return (
    <div>
      <Header links={links} />

      <main className="main-box">
        <h1 className="page-header">Discrete Chapter 1 Page</h1>

        <div className="SubButton">
          Exercise: 1.1, Id: 1-54 <br />
          Exercise: 1.2, Id: 55-101 <br />
          Exercise: 1.3, Id: 101-173 <br />
          Exercise: 1.4, Id: 174-237 <br />
          Exercise: 1.5, Id: 238-289 <br />
          Exercise: 1.6, Id: 290-324 <br />
          Exercise: 1.7, Id: 325-368 <br />
          Exercise: 1.8, Id: 369-420 <br />
          !UNDER CONSTRUCTION!
        </div>

        <BackToTop />

        {/* ALL LOGIC MOVED HERE */}
        <CodeExplorer data={discretech1solve} />
      </main>
    </div>
  );
}