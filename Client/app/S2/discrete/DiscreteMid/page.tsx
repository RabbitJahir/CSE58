import Link from "next/link";

export default function DiscreteMid() {
  return (
    <div >
      <main className="mid-container">
        <Link href="/S2/discrete/DiscreteMid/DiscreteCh1" className="SubButton">
        Chapter 1
      </Link>
      <Link href="/S2/discrete/DiscreteMid/DiscreteCh2" className="SubButton">
        Chapter 2
      </Link>

      <Link
        href="/S2/Discrete/chapter_3_224-272.pdf"
        className="SubButton"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chapter 3 <sub>-Download</sub>
      </Link>
      </main>
    </div>
  );
}