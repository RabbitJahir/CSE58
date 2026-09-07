import Link from "next/link";
import Header from "../../components/Header/Index";
import Image from "next/image";

import academic_calendar_2026 from "@/public/S2/Calendar/academic_calendar_2026.jpg";

const links = [
  { href: "/", label: "Home", className: "HeaderButton" },
  { href: "/S3", label: "S3 Page", className: "HeaderButton" },
];

export default function calendar() {
  return (
    <div>
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
          href="https://ouits-class-routine.site.je/index.php?page=sections&action=routine&id=9"
          className="SubButton"
        >
          3A Routine
        </Link>
      </main>
    </div>
  );
}
