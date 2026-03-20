"use client";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (section: string) => {
    setOpen((prev) => (prev === section ? null : section));
  };

  return (
    <div >
      <main className="mid-container">
        {/* Chapter 1 */}
        <button onClick={() => toggle("EeeCh1")} className="SubButton">
          Ch 1
        </button>
        {open === "EeeCh1" && (
          <div className="flex flex-col gap-2 w-full">
            <a
              href="/S2/Eee/EeeCh1Book.pdf"
              className="SubButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="SubButton w-full">
                Book <sub>-Download</sub>
              </button>
            </a>
            <a
              href="/S2/Eee/EeeCh1Notes.pdf"
              className="SubButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="SubButton w-full">
                Notes <sub>-Download</sub>
              </button>
            </a>
            <a
              href="/S2/Eee/EeeCh1Answers.pdf"
              className="SubButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="SubButton w-full">
                Answers <sub>-Download</sub>
              </button>
            </a>
          </div>
        )}

        {/* Chapter 2 */}
        <button onClick={() => toggle("EeeCh2")} className="SubButton">
          Ch 2
        </button>
        {open === "EeeCh2" && (
          <div className="flex flex-col gap-2 w-full">
            <a
              href="/S2/Eee/EeeCh2Book.pdf"
              className="SubButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="SubButton w-full">
                Book <sub>-Download</sub>
              </button>
            </a>
            <a
              href="/S2/Eee/EeeCh2Notes.pdf"
              className="SubButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="SubButton w-full">
                Notes <sub>-Download</sub>
              </button>
            </a>
            <a
              href="/S2/Eee/y-del.pdf"
              className="SubButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="SubButton w-full">
                Y-Del <sub>-Download</sub>
              </button>
            </a>
            <a
              href="/S2/Eee/EeeCh2Ques.pdf"
              className="SubButton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="SubButton w-full">
                Questions <sub>-Download</sub>
              </button>
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
