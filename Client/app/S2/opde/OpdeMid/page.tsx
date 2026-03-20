import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="mid-container">
        <Link
          href="/S2/Opde/OpdeSeparation.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="SubButton">
            Separation Method <sub>-Download</sub>
          </button>
        </Link>

        <Link
          href="/S2/Opde/OpdeOrthogonal.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="SubButton">
            Orthogonal <sub>-Download</sub>
          </button>
        </Link>

        <Link
          href="/S2/Opde/OpdeHomogeneous.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="SubButton">
            Homogeneous Method <sub>-Download</sub>
          </button>
        </Link>

        <Link
          href="/S2/Opde/OpdeExact.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="SubButton">
            Exact Differential Equation <sub>-Download</sub>
          </button>
        </Link>
      </main>
    </div>
  );
}
