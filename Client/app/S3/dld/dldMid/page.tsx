import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="mid-container">
        <Link
          href="/S3/dld/dld-week1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton"
        >
          Week 1, number conversion, complements<sub> Download</sub>
        </Link>
      </main>
    </div>
  );
}
