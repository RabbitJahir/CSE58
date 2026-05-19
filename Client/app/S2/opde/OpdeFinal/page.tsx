import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="mid-container">
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
          href="/S2/Opde/pde-arbitary.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton"
        >
            arbitary constant & functions <sub>-Download</sub>
        </Link>

      </main>
    </div>
  );
}
