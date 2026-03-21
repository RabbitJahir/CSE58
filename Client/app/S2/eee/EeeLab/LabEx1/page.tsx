export default function Page() {
  const rowClass = (idx: number) =>
    `transition-colors ${
      idx % 2 === 0 ? "bg-gray-800 text-white" : "bg-gray-700 text-white"
    } hover:bg-blue-500 hover:text-white`;

  return (
    <div>
      <main className="mid-container">
        <div className="w-full max-w-4xl overflow-x-auto">
          <h2 className="text-center text-2xl font-bold mb-4">Table 1</h2>
          <table className="marks-table border-collapse w-full text-center shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2">Meter 1</th>
                <th className="px-4 py-2">Meter 2</th>
                <th className="px-4 py-2">Meter 3</th>
                <th className="px-4 py-2">
                  DMV Reading (Reading of disco button, reading of first meter)
                </th>
                <th className="px-4 py-2">Average (all four)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["5 → 4.9", "5 → 4.9", "5 → 4.8", "1.25", "3.96"],
                ["10 → 10.6", "10 → 10.53", "10 → 7.78", "2.5", "7.872"],
                ["15 → 15.6", "15 → 17.3", "15 → 16.8", "4", "13.425"],
              ].map((row, idx) => (
                <tr key={idx} className={rowClass(idx)}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-4 py-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table 2 */}
        <div className="w-full max-w-4xl">
          <h2 className="text-center text-2xl font-bold mb-4">Table 2</h2>
          <table className="marks-table border-collapse w-full text-center shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2">Resistor</th>
                <th className="px-4 py-2">Color code</th>
                <th className="px-4 py-2">Multimeter values</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["R1, 1K", "Brown(1), Black(0), Red(x100)", "0.982"],
                ["R2, 2K", "Red(2), Black(0), Red(x100)", "2.002"],
                ["R3, 4.7K", "Yellow(4), Violet(7), Red(x100)", "4.63"],
              ].map((row, idx) => (
                <tr key={idx} className={rowClass(idx)}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-4 py-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table 3 */}
        <div className="w-full max-w-5xl">
          <h2 className="text-center text-2xl font-bold mb-4">Table 3</h2>
          <table className="marks-table border-collapse w-full text-center shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2">Applied Voltage</th>
                <th className="px-4 py-2" colSpan={4}>
                  Measured Values
                </th>
                <th className="px-4 py-2" colSpan={4}>
                  Multimeter Readings
                </th>
              </tr>
              <tr>
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2">
                  R<sub>T</sub> total resistance
                </th>
                <th className="px-4 py-2">I</th>
                <th className="px-4 py-2">
                  V<sub>ab</sub>
                </th>
                <th className="px-4 py-2">
                  V<sub>cd</sub>
                </th>
                <th className="px-4 py-2">
                  R<sub>T</sub>
                </th>
                <th className="px-4 py-2">I</th>
                <th className="px-4 py-2">
                  V<sub>ab</sub>
                </th>
                <th className="px-4 py-2">
                  V<sub>cd</sub>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["5", "", "", "", "", "0.982", "", "4.88", "1.450"],
                ["10", "", "", "", "", "2.002", "", "11.56", "2.3"],
                ["15", "", "", "", "", "4.63", "", "17.62", "5.13"],
              ].map((row, idx) => (
                <tr key={idx} className={rowClass(idx)}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-4 py-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
