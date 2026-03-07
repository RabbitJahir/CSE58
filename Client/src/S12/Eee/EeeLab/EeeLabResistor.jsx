import React from "react";

const EeeLabResistor = () => {
  return (
    <div className="flex justify-center mt-8">
      <table className="marks-table border-collapse w-full max-w-md text-center shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-2">Color</th>
            <th className="px-4 py-2">Multiplier</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Black / 0", "x1"],
            ["Brown / 1", "x10"],
            ["Red / 2", "x100"],
            ["Orange / 3", "x1,000"],
            ["Yellow / 4", "x10,000"],
            ["Green / 5", "x100,000"],
            ["Blue / 6", "x1,000,000"],
            ["Violet / 7", "10,000,000"],
            ["Grey / 8", "100,000,000"],
            ["White / 9", "1,000,000,000"],
          ].map(([color, multiplier], idx) => (
            <tr
              key={color}
              className={`${
                idx % 2 === 0 ? "bg-gray-800 text-white" : "bg-gray-700 text-white"
              } hover:bg-blue-500 hover:text-white transition-colors`}
            >
              <td className="px-4 py-2">{color}</td>
              <td className="px-4 py-2">{multiplier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EeeLabResistor;