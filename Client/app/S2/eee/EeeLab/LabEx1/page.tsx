export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 flex justify-center px-4 py-10 overflow-x-hidden">
      <main className="w-full max-w-5xl bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-8 space-y-10">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center border-b pb-4">
          Familiarize with Electrical Components, Instruments & Resistor Color Code
        </h1>

        {/* Objective */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Objective</h2>
          <p className="leading-relaxed">
            Finding total resistance, current and voltage.
          </p>
        </section>

        {/* Circuits */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Circuits</h2>
          <div className="border-2 border-dashed border-gray-300 dark:border-zinc-700 rounded-lg p-6 text-center text-gray-500">
            Draw circuit here
          </div>
        </section>

        {/* Table 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-center text-blue-600">
            Table 1
          </h2>

          <div className="overflow-x-auto rounded-xl shadow">
            <table className="w-full text-center border-collapse">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-3">Resistor</th>
                  <th className="px-4 py-3">Color Code</th>
                  <th className="px-4 py-3">Multimeter Values</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["R1, 1K", "Brown(1), Black(0), Red(x100)", "0.982"],
                  ["R2, 2K", "Red(2), Black(0), Red(x100)", "2.002"],
                  ["R3, 4.7K", "Yellow(4), Violet(7), Red(x100)", "4.63"],
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={
                      idx % 2 === 0
                        ? "bg-gray-50 dark:bg-zinc-800"
                        : "bg-white dark:bg-zinc-900"
                    }
                  >
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Table 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-center text-blue-600">
            Table 2
          </h2>

          <div className="overflow-x-auto rounded-xl shadow">
            <table className="w-full text-center border-collapse">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-3">Meter 1</th>
                  <th className="px-4 py-3">Meter 2</th>
                  <th className="px-4 py-3">Meter 3</th>
                  <th className="px-4 py-3">DMV Reading</th>
                  <th className="px-4 py-3">Average</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["5 → 4.9", "5 → 4.9", "5 → 4.8", "1.25", "3.96"],
                  ["10 → 10.6", "10 → 10.53", "10 → 7.78", "2.5", "7.872"],
                  ["15 → 15.6", "15 → 17.3", "15 → 16.8", "4", "13.425"],
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={
                      idx % 2 === 0
                        ? "bg-gray-50 dark:bg-zinc-800"
                        : "bg-white dark:bg-zinc-900"
                    }
                  >
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        

        {/* Table 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-center text-blue-600">
            Table 3
          </h2>

          <div className="overflow-x-auto rounded-xl shadow">
            <table className="w-full text-center border-collapse text-sm">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-3">Applied Voltage</th>
                  <th className="px-4 py-3" colSpan={4}>
                    Measured Values
                  </th>
                  <th className="px-4 py-3" colSpan={4}>
                    Multimeter Readings
                  </th>
                </tr>

                <tr className="bg-blue-500">
                  <th></th>
                  <th>Rₜ</th>
                  <th>I</th>
                  <th>Vₐᵦ</th>
                  <th>V𝚌𝚍</th>
                  <th>Rₜ</th>
                  <th>I</th>
                  <th>Vₐᵦ</th>
                  <th>V𝚌𝚍</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["5", "", "", "", "", "0.982", "", "4.88", "1.450"],
                  ["10", "", "", "", "", "2.002", "", "11.56", "2.3"],
                  ["15", "", "", "", "", "4.63", "", "17.62", "5.13"],
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={
                      idx % 2 === 0
                        ? "bg-gray-50 dark:bg-zinc-800"
                        : "bg-white dark:bg-zinc-900"
                    }
                  >
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* AnalOGY */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Analogy</h2>
          <p className="leading-relaxed">
            Ja mon chay
          </p>
        </section>

        {/* Safety */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Safety</h2>
          <p className="leading-relaxed">
            Ja mon chay
          </p>
        </section>

      </main>
    </div>
  );
}