import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="mid-container">
         <Link
          href="/S2/Opde/LDE-opde.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="SubButton">
            Non-Homogeneous LDE <sub>-Download, Thanks Forhad</sub>
          </button>
        </Link>
      </main>
    </div>
  );
}
