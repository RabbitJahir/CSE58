import Header from "@/app/components/Header/Index";
import BackToTop from "@/app/components/BackToTop";
import CodeExplorer from "@/app/components/CodeExplorer";
import { wadsolve } from "./wadsolve";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S2", label: "S2 Page", className: "HeaderButton" },
  { href: "/S2/wad", label: "WAD Page", className: "HeaderButton" },
];

export default function Page() {
  return (
    <div>
      <Header links={links} />

      <main className="main-box">
        <h1 className="page-header">HTML Codes</h1>

        <BackToTop />

        {/* ALL LOGIC HANDLED HERE */}
        <CodeExplorer data={wadsolve} />
      </main>
    </div>
  );
}