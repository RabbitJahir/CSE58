import Header from "@/app/components/Header/Index";
import BackToTop from "@/app/components/BackToTop";
import CodeExplorer from "@/app/components/CodeExplorer";
import { Codes } from "./Codes";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
  { href: "/S2/oop", label: "Oop Page", className: "HeaderButton" },
];

export default function Page() {
  return (
    <div>
      <Header links={links} />

      <main className="main-box">
        <h1 className="page-header">Java Codes</h1>

        <BackToTop />

        {/* ALL LOGIC HANDLED HERE */}
        <CodeExplorer data={Codes} />
      </main>
    </div>
  );
}