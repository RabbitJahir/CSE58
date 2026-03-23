import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header/Index";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S1", label: "S1 Page", className: "HeaderButton" },
];

export default function Page() {
  return (
    <div>
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">Chemistry</h1>
        <Link href="/S1/chem">
          Course Outline <sub>never got one.</sub>
        </Link>
        <Image
          src="/S1/chem/periodic_table.jpg"
          alt="periodic_table"
          width="800"
          height="600"
        />
      </main>
    </div>
  );
}
