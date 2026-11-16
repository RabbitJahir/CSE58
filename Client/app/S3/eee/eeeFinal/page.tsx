import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="mid-container">
        <Link
          href="/S3/edc/edc_zenerdiode.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zener Diode, math and theory <sub>By Prapty!!</sub>
        </Link>

        <Link
          href="/S3/edc/edc_bjt.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          BJT math <sub>By Prapty and Ananda!</sub>
        </Link>
      </main>
    </div>
  );
}
