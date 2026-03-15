import handlePDF from "../../utils/handlePDF";

const OopMid = () => {
  return (
    <div className="mid-container">
      <button
        onClick={() =>
          handlePDF(
            "/S12/Oop/Variables_and_Types_Summary.pdf",
            "Variables_and_Types_Summary.pdf",
          )
        }
        className="SubButton"
      >
        Variables_&_Types_Summary <sub>Download</sub>
      </button>

      <button
        onClick={() =>
          handlePDF(
            "/S12/Oop/Java_Control_Statements.pdf",
            "Java_Control_Statements.pdf",
          )
        }
        className="SubButton"
      >
        Java_Control_Statements <sub>Download</sub>
      </button>

      <button
        onClick={() =>
          handlePDF("/S12/Oop/Java_Constructor.pdf", "Java_Constructor.pdf")
        }
        className="SubButton"
      >
        Java_Constructor <sub>Download</sub>
      </button>
    </div>
  );
};

export default OopMid;
