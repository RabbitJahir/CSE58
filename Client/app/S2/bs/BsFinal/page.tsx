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
        <Link
          href="https://en.banglapedia.org/index.php/Twenty_One_Point_Programme"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          21 Dofa <sub>- Link</sub>
        </Link>
      </main>
    </div>
  );
}
