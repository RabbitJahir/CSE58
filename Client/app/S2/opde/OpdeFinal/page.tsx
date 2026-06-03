import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="mid-container">
        <Link
          href="/S2/Opde/opde-final-questions.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton"
        >
          Final Questions <sub>-Download</sub>
        </Link>
        <Link
          href="/S2/Opde/LDE-opde.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton"
        >
          Non-Homogeneous LDE <sub>-Download, Thanks Forhad</sub>
        </Link>
        <Link
          href="/S2/Opde/uc-method.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton"
        >
          using UC Method <sub>-Download</sub>
        </Link>
        <Link
          href="/S2/Opde/lpde-arbitrary.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton"
        >
          LPDE arbitrary constant & functions <sub>-Download, by thomas</sub>
        </Link>
        <Link
          href="/S2/Opde/lpde-cc.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton"
        >
          LPDE constant coefficients <sub>-Download, by thomas</sub>
        </Link>
        <Link
          href="/S2/Opde/lpde-lagrange.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton"
        >
          LPDE lagrange&apos;s method <sub>-Download, by thomas</sub>
        </Link>
      </main>
    </div>
  );
}
