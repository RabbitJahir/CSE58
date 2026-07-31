import Link from "next/link";
import Header from "../../../../components/Header/Index";
import DldGraph from "./graph";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S3", label: "S3 Page", className: "HeaderButton" },
  { href: "/S3/dld", label: "DLD Page", className: "HeaderButton" },
];

export default function Week1() {
  return (
    <div className="h-screen flex flex-col">
      <Header links={links} />
      <main className="main-box, flex-1 overflow-hidden">
        <h1 className="page-header">dld week 1 </h1>
        <div
          className="
            w-[90%]
            h-[85%]
            max-w-6xl
            max-h-[800px]
        "
        >
          <DldGraph />
        </div>
      </main>
    </div>
  );
}
