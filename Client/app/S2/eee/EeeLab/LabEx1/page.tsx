export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 flex justify-center px-4 py-10">
      <main className="w-full max-w-5xl bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-8 space-y-10">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center border-b pb-4">
          Familiarize with Electrical Components, Instruments & Resistor Color
          Code
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
            <p>Resistor</p>
            <p>Color Code</p>
            <p>Multimeter value</p>
          </div>
        </section>

        {/* Table 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-center text-blue-600">
            Table 2
          </h2>

          <div className="overflow-x-auto rounded-xl shadow">
            <p className="px-4 py-3">Meter 1</p>
            <p className="px-4 py-3">Meter 2</p>
            <p className="px-4 py-3">
              Meter 3 (3 ta voltage, trainer board er disco button er sathe
              multimeter er reading match kora )
            </p>
            <p className="px-4 py-3">
              DMV Reading (Disco button of trainer board)
            </p>
            <p className="px-4 py-3">Average (of all four)</p>
          </div>
        </section>

        {/* Table 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-center text-blue-600">
            Table 3
          </h2>
          <p>Applied Voltage</p>
          <p>
            Measured Values (if no resistors between parallel, voltage is same,
            otherwise use voltage divider rule = V source x same/(ulta + same))
          </p>

          <p>Multimeter Values</p>

          <div className="overflow-x-auto rounded-xl shadow"></div>
        </section>

        {/* AnalOGY */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Analogy</h2>
          <p className="leading-relaxed">Ja mon chay</p>
        </section>

        {/* Safety */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Safety</h2>
          <p className="leading-relaxed">Ja mon chay</p>
        </section>
      </main>
    </div>
  );
}
