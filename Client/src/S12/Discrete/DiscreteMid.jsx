import React from "react";

const DiscreteMid = () => {
  return (
    <div className="mid-container">
      <h3 className="text-xl font-semibold mb-4">Mid Term Syllabus</h3>
      <a href="/Discrete/chapter_1_24-143.pdf">
        <button className="SubButton">
          Chapter 1 <sub>-Download</sub>
        </button>
      </a>
      <a href="/Discrete/chapter_2_144-222.pdf">
        <button className="SubButton">
          Chapter 2 <sub>-Download</sub>
        </button>
      </a>
      <a href="/Discrete/chapter_3_224-272.pdf">
        <button className="SubButton">
          Chapter 3 <sub>-Download</sub>
        </button>
      </a>
    </div>
  );
};

export default DiscreteMid;
