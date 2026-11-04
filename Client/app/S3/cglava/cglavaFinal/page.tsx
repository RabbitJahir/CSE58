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
          matrix formulas<sub> -Kanji</sub>
        </Link>

        <Link
          href="/S3/cglava/cglava_vector_book_questions.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
            >
          Vector Questions
        </Link>

        <Link
          href="/S3/cglava/cglava_matrix_book_questions.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
            >
          Matrix Questions<sub> -Kanji</sub>
        </Link>
        
        <Link
          href="/S3/cglava/cglava_linear-algebra_book_questions.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
            >
          Linear Algebra Ques<sub> -Kanji</sub>
        </Link>

        <Link
          href="/S3/cglava/cglava_solid-geometry_book_questions.pdf"
          className="SubButton"
          target="_blank"
          rel="noopener noreferrer"
            >
          Solid Geometry Ques<sub> -Kanji</sub>
        </Link>

      </main>
    </div>
  );
}
