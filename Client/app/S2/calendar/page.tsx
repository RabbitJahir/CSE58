import Image from "next/image";
import Link from "next/link";
import academic_calendar_2026 from "@/public/S2/Calendar/academic_calendar_2026.jpg"

import Header from "../../components/Header/Index";

const links = [
  { href: "/", label: "Home", className:"HeaderButton" },
  { href: "/S2", label: "S2 Page", className:"HeaderButton" },
];

export default function calendar() {
  return (
    <div >
      <Header links={links} />
      <main className="main-box">
        <h1 className="page-header">Calendar</h1>
        <Image
          src={academic_calendar_2026}
          alt="academic_calendar_2026"
          width={800}
          height={600}
          priority={false}
          className="rounded-lg"  
          placeholder="blur"
          blurDataURL=""
        />

        <Link
          href="/S2/Calendar/academic_calendar_2026.jpg"
          className="SubButton"
          download
        >
          Academic Calendar 2026<sub> -Download</sub>
        </Link>
      </main>
    </div>
  );
}
