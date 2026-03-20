import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="mid-container">
        <Link
          href="/S2/Oop/Java_Access_Modifiers.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton "
        >
          Java_Access_Modifiers<sub> Download</sub>
        </Link>
      </main>
    </div>
  );
}
