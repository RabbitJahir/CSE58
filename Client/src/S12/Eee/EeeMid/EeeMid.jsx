import React, { useState } from "react";
import { Link } from "react-router-dom";

const EeeMid = () => {
  const [open, setOpen] = useState(null);
  const toggle = (section) => setOpen(open === section ? null : section);

  return (
    <div className="mid-container">
      {/* Chapter 1 */}
      <Link onClick={() => toggle("EeeCh1")} className="SubButton">
        Ch 1
      </Link>
      {open === "EeeCh1" && (
        <div className="flex flex-col gap-2 w-full">
          <a href="/S12/Eee/EeeCh1Book.pdf" className="w-full">
            <button className="SubButton w-full">
              Book <sub>-Download</sub>
            </button>
          </a>
          <a href="/S12/Eee/EeeCh1Notes.pdf" className="w-full">
            <button className="SubButton w-full">
              Notes <sub>-Download</sub>
            </button>
          </a>
          <a href="/S12/Eee/EeeCh1Answers.pdf" className="w-full">
            <button className="SubButton w-full">
              Answers <sub>-Download</sub>
            </button>
          </a>
        </div>
      )}

      {/* Chapter 2 */}
      <Link onClick={() => toggle("EeeCh2")} className="SubButton">
        Ch 2
      </Link>
      {open === "EeeCh2" && (
        <div className="flex flex-col gap-2 w-full">
          <a href="/S12/Eee/EeeCh2Book.pdf" className="w-full">
            <button className="SubButton w-full">
              Book <sub>-Download</sub>
            </button>
          </a>
          <a href="/S12/Eee/EeeCh2Notes.pdf" className="w-full">
            <button className="SubButton w-full">
              Notes <sub>-Download</sub>
            </button>
          </a>
          <a href="/S12/Eee/EeeCh2Ques.pdf" className="w-full">
            <button className="SubButton w-full">
              Questions <sub>-Download</sub>
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default EeeMid;