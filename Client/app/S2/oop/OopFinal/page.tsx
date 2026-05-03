import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main className="mid-container">
        <Link
          href="/S2/Oop/Java_Access_Modifiers.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton "
        >
          Java_Access_Modifiers<sub> Download</sub>
        </Link>
        <Link
          href="/S2/Oop/inheritance&interface.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton "
        >
          Inheritance & Interface<sub> Download</sub>
          <Link
            href="/S2/Oop/polymorphism.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="SubButton "
          >
            Polymorphism<sub> Download</sub>
          </Link>
        </Link>
        <Link
          href="/S2/Oop/abstract&adapter.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="SubButton "
        >
          Abstract & Adapter<sub> Download</sub>
        </Link>
      </main>
    </div>
  );
}
