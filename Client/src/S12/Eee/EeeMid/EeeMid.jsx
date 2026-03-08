import React, { useState } from "react";

const EeeMid = () => {
  const [open, setOpen] = useState(null);
  const toggle = (section) => {
    if (open === section) {
      setOpen(null);
    } else {
      setOpen(section);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button onClick={() => toggle("EeeCh1")} className="SubButton">
        Ch 1
      </button>
      {open === "EeeCh1" && (
        <div className="flex flex-col gap-2">
          <a href="/S12/Eee/EeeCh1Book.pdf">
            <button className="SubButton">
              Book <sub>-Download</sub>
            </button>
          </a>
          <a href="/S12/Eee/EeeCh1Notes.pdf">
            <button className="SubButton">
              Notes <sub>-Download</sub>
            </button>
          </a>
          <a href="/S12/Eee/EeeCh1Answers.pdf">
            <button className="SubButton">
              Answers <sub>-Download</sub>
            </button>
          </a>
        </div>
      )}

      <button onClick={() => toggle("EeeCh2")} className="SubButton">
        Ch 2
      </button>
      {open === "EeeCh2" && (
        <div className="flex flex-col gap-2">
          <a href="/S12/Eee/EeeCh2Book.pdf">
            <button className="SubButton">
              Book <sub>-Download</sub>
            </button>
          </a>
          <a href="/S12/Eee/EeeCh2Notes.pdf">
            <button className="SubButton">
              Notes <sub>-Download</sub>
            </button>
          </a>
          <a href="/S12/Eee/EeeCh2Ques.pdf">
            <button className="SubButton">
              Questions <sub>-Download</sub>
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default EeeMid;
