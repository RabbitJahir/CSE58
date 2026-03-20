import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="mid-container">
        <Link
          href="/S2/Oop/java_basics.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton"
        >
          Java Basics<sub> Download</sub>
        </Link>

        <Link
          href="/S2/Oop/Java_Variables_and_Types_Summary.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton"
        >
          Java Variables & Types Summary<sub> Download</sub>
        </Link>

        <Link
          href="/S2/Oop/Java_Control_Statements.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton"
        >
          Java Control Statements<sub> Download</sub>
        </Link>

        <Link
          href="/S2/Oop/Java_Classes_and_Objects.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton"
        >
          Java Classes and Objects<sub> Download</sub>
        </Link>

        <Link
          href="/S2/Oop/Java_Constructor.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton"
        >
          Java Constructor<sub> Download</sub>
        </Link>
      </main>
    </div>
  );
}
