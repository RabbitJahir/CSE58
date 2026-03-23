import Link from "next/link";
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
        <h1 className="page-header">Communicative English</h1>
        <Link
          href="/S1/eng/co.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton"
        >
          Course Outline <sub> download</sub>
        </Link>
        <Link href="/S1/eng/ielts" className="SubButton">
          IELTS Page
        </Link>
        <Link href="/S1/eng/Essay" className="SubButton">
          Essay Page
        </Link>
        <Link href="/S1/eng/PicStory" className="SubButton">
          Picture Story Page
        </Link>
        <Link href="/S1/eng/Memorandum" className="SubButton">
          Memorandom Page
        </Link>
        <Link href="/S1/eng/MeetMins" className="SubButton">
          Meeting Minutes Page
        </Link>
      </main>
    </div>
  );
}
