import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="mid-container">
        
        <div className="syllabus-box">
          <h2>Syllabus at a Glance</h2>

          <div className="chapter">
            <strong>Allai jane.</strong>
            <ul>
              <li></li>
            </ul>
          </div>

        </div>

        <Link
                href="/S3/cglava/CGLAVA-ch1.pdf"
                className="SubButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chapter 1
        </Link>
      
        <Link
                href="/S3/cglava/CGLAVA-ch2.pdf"
                className="SubButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chapter 2
        </Link>

        <Link
                href="/S3/cglava/CGLAVA-ch4.pdf"
                className="SubButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chapter 4
        </Link>
      </main>
    </div>
  );
}
