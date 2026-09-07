import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="mid-container">

        <Link
            href="/S3/edc/EDC_diode-rectifier-3types.pdf"
            className="SubButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            Diode Rectifier 3 types
        </Link>

      </main>
    </div>
  );
}
