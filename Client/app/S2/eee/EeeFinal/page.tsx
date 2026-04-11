"use client";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (section: string) => {
    setOpen((prev) => (prev === section ? null : section));
  };

  return (
    <div>
      <main className="mid-container">
        {/* CHapter 3 */}
        <button onClick={() => toggle("EeeCh3")} className="SubButton">
          Ch 3
        </button>
        {open === "EeeCh3" && (
          <div className="flex flex-col gap-2 w-full">
            <a
              href="/S2/Eee/EeeCh3Book.pdf"
              className="SubButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="SubButton w-full">
                Ch 3 Book <sub>-Download</sub>
              </button>
            </a>
            <a
              href="/S2/Eee/EeeCh3Ques.pdf"
              className="SubButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="SubButton w-full">
                Ch 3 Ques <sub>-Download</sub>
              </button>
            </a>
          
          </div>
        )}

        {/* CHapter 4 */}
        <button onClick={() => toggle("EeeCh4")} className="SubButton">
          Ch 4
        </button>
        {open === "EeeCh4" && (
          <div className="flex flex-col gap-2 w-full">
            <a
              href="/S2/Eee/EeeCh4Book.pdf"
              className="SubButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="SubButton w-full">
                Ch 4 Book <sub>-Download</sub>
              </button>
            </a>
          <a
              href="/S2/Eee/EeeCh4Ques.pdf"
              className="SubButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="SubButton w-full">
                Ch 4 Ques <sub>-Download</sub>
              </button>
            </a>
          </div>
        )}

        {/* CHapter 9 */}
        <button onClick={() => toggle("EeeCh9")} className="SubButton">
          Ch 9
        </button>
        {open === "EeeCh9" && (
          <div className="flex flex-col gap-2 w-full">
            <a
              href="/S2/Eee/EeeCh9Book.pdf"
              className="SubButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="SubButton w-full">
               Ch 9 Book <sub>-Download</sub>
              </button>
            </a>
            <a
              href="/S2/Eee/EeeCh9Ques.pdf"
              className="SubButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="SubButton w-full">
                Ch 9 Ques <sub>-Download</sub>
              </button>
            </a>
          
          </div>
        )}
      </main>
    </div>
  );
}
