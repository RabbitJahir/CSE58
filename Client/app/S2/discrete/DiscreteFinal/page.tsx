import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="mid-container">
        <Link
          href="/S2/Discrete/discrete-ch4.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chapter 4, CRT <sub>-Download</sub>
        </Link>
      </main>
    </div>
  );
}
