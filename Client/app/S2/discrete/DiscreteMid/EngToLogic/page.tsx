import Header from "@/app/components/Header/Index";
import BackToTop from "../../../../components/BackToTop";
import CodeExplorer from "@/app/components/CodeExplorer";
import { englogic } from "./englogic";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
  { href: "/S2/discrete", label: "Discrete Page", className: "HeaderButton" },
];

export default function EngToLogic() {
  return (
    <div>
      <Header links={links} />

      <main className="main-box">
        <h1 className="page-header">
          English Sentence to Logic Expression & Vice versa
        </h1>

        <BackToTop />

        {/* ALL LOGIC HANDLED HERE */}
        <CodeExplorer data={englogic} />
      </main>
    </div>
  );
}