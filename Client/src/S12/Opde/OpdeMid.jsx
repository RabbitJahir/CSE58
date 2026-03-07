import React from "react";

const OpdeMid = () => {
  return (
    <div className="mid-container">
      <a href="/Opde/OpdeSeparation.pdf">
        <button className="SubButton ">Separation Method <sub>-Download</sub></button>
      </a>

      <a href="/Opde/OpdeOrthogonal.pdf">
        <button className="SubButton">Orthogonal <sub>-Download</sub></button>
      </a>

      <a href="/Opde/OpdeHomogeneous.pdf">
        <button className="SubButton">Homogeneous Method <sub>-Download</sub></button>
      </a>

      <a href="/Opde/OpdeExact.pdf">
        <button className="SubButton">Exact Differential Equation <sub>-Download</sub></button>
      </a>
    </div>
  );
};

export default OpdeMid;