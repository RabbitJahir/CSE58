import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="mid-container">
        <Link
          href="/S3/cglava/sys_of_linear_eqn_echelon.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
          >
          System of linear equation echelon
        </Link>

        <Link
          href="/S3/cglava/cglava_matrix.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
            >
          matrix
        </Link>

      </main>
    </div>
  );
}
