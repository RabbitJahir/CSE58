import Link from "next/link";

export default function bsfinal() {
  return (
    <div>
      <main className="mid-container">
        <Link
          href="/S2/Bs/Bara-bhuiya.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bara Bhuiya
        </Link>
        <Link
          href="/S2/Bs/Language_movement.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Language movement
        </Link>
      </main>
    </div>
  );
}
