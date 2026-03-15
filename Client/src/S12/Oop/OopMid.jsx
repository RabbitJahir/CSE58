import React from "react";

const downloadPDF = async (pdfPath, fileName) => {
  try {
    const response = await fetch(pdfPath);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (error) {
    // Fallback — open in new tab (works on iOS)
    window.open(pdfPath, "_blank");
  }
};

const OopMid = () => {
  return (
    <div className="mid-container">
      <button
        onClick={() => downloadPDF("/pdfs/S12/Oop/Variables_and_Types_Summary.pdf", "Variables_and_Types_Summary.pdf")}
        className="SubButton"
      >
        Variables_&_Types_Summary<sub> Download</sub>
      </button>

      <button
        onClick={() => downloadPDF("/pdfs/S12/Oop/Java_Control_Statements.pdf", "Java_Control_Statements.pdf")}
        className="SubButton"
      >
        Java_Control_Statements<sub> Download</sub>
      </button>

      <button
        onClick={() => downloadPDF("/pdfs/S12/Oop/Java_Constructor.pdf", "Java_Constructor.pdf")}
        className="SubButton"
      >
        Java_Constructor<sub> Download</sub>
      </button>
    </div>
  );
};

export default OopMid;  