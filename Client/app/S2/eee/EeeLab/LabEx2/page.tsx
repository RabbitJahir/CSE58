export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 flex justify-center px-4 py-10">
      <main className="w-full max-w-5xl bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-8 space-y-10">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center border-b pb-4">
          Verification of Kirchhoff’s Voltage Law (KVL) & Kirchhoff’s Current Law (KCL)
        </h1>

        {/* Objective */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Objective</h2>
          <p>
            To verify Kirchhoff’s Voltage Law (KVL) and Kirchhoff’s Current Law (KCL) using series and parallel circuits.
          </p>
        </section>

        {/* Theory */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Theory</h2>

          <p className="leading-relaxed">
            <span className="font-semibold">KVL:</span> The algebraic sum of all voltages around a closed loop is zero.
          </p>

          <p className="leading-relaxed">
            <span className="font-semibold">KCL:</span> The sum of currents entering a junction equals the sum of currents leaving it.
          </p>
        </section>

        {/* Components */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Components</h2>
          <p>Power supply, resistors, breadboard, multimeter, connecting wires.</p>
        </section>

        {/* Circuits */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-blue-600">Circuits & Method</h2>

          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-zinc-800">
              <h3 className="font-semibold">1. Series Circuit (KVL)</h3>
              <p>
                Current is same throughout. Use V = IR to calculate theoretical and practical voltage across each resistor. Verify that sum of all voltages equals supply voltage.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 dark:bg-zinc-800">
              <h3 className="font-semibold">2. Parallel Circuit (KCL)</h3>
              <p>
                Voltage is same across all branches. Use I = V/R to calculate current in each branch and verify that total current equals sum of branch currents.
              </p>
            </div>
          </div>
        </section>

        {/* Analogy */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Analogy</h2>
          <p>
            Compare theoretical and practical values. Calculate percentage error using error formula and observe deviations due to instrument tolerance and wiring.
          </p>
        </section>

        {/* Safety */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Safety</h2>
          <p>
            Ensure correct connections before powering the circuit. Avoid short circuits. Turn off power before changing wiring.
          </p>
        </section>

      </main>
    </div>
  );
}