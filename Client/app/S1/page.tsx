import Link from "next/link";
import Header from "../components/Header/Index";

const links = [{ href: "/", label: "Home", className: "HeaderButton" }];

export default function S1_Home() {
  return (
    <div>
      <Header links={links} />

      <main className="main-box">
        <h1 className="page-header">1st Semester</h1>
        <Link href="/S1/spl" className="SubButton">
          SPL
        </Link>
        <Link href="/S1/chem" className="SubButton">
          chemistry
        </Link>
        <Link href="/S1/math" className="SubButton">
          Math
        </Link>
        <Link href="/S1/phy" className="SubButton">
          physics
        </Link>
        <Link href="/S1/eng" className="SubButton">
          English
        </Link>
      </main>
    </div>
  );
}
