import Link from "next/link";

export default function bsmid() {
  return (
    <div >
      <main className="mid-container">
      <Link
        href="/S2/Bs/bs_janapada.pdf"
        className="SubButton"
        target="_blank"
        rel="noopener noreferrer"
      >
        Janapada
      </Link>
      <Link
        href="/S2/Bs/bs_geo_features.pdf"
        className="SubButton"
        target="_blank"
        rel="noopener noreferrer"
      >
        Geographical features of Bangladesh <sub>-Download</sub>
      </Link>
      <a
        href="/S2/Bs/shashanka_full_notes.pdf"
        className="SubButton"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shashanka <sub>-Download</sub>
      </a>
      </main>
    </div>
  );
}
