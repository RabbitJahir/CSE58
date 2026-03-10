import React from "react";
import { Link } from "react-router-dom";

const DiscreteMid = () => {
  return (
    <div className="mid-container">
      <h3 className="text-xl font-semibold mb-4">Mid Term Syllabus</h3>
      <Link to="/S12/Discrete/DiscreteCh1" className="SubButton">
        Chapter 1
      </Link>
      <Link to="/S12/Discrete/DiscreteCh2" className="SubButton">
        Chapter 2
      </Link>

      <a href="/Discrete/chapter_3_224-272.pdf" className="SubButton">
        Chapter 3 <sub>-Download</sub>
      </a>
    </div>
  );
};

export default DiscreteMid;
