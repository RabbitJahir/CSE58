import Header from "@/app/components/Header/Index";
import BackToTop from "@/app/components/BackToTop";
import CodeExplorer from "@/app/components/CodeExplorer";
import { Codes } from "./Codes";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S3", label: "S3 Page", className: "HeaderButton" },
  { href: "/S3/dsaI", label: "DSA I Page", className: "HeaderButton" },
];

export default function Page() {
  return (
    <div>
      <Header links={links} />

      <main className="main-box">
        <h1 className="page-header">C++ Codes & Algorithms</h1>

        <BackToTop />

        {/* ALL LOGIC HANDLED HERE */}
        <CodeExplorer data={Codes} />
      </main>
    </div>
  );
}