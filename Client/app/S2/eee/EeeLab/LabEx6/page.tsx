export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 flex justify-center px-4 py-10">
      <main className="w-full max-w-3xl bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-8 space-y-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center border-b pb-4">
          Study of maximum power transfer theorem
        </h1>

        {/* Section */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Objective</h2>
          <p className="leading-relaxed">
            Showing that maximum power occurs when the value of resistor R<sub>th</sub> is equal to R<sub>load</sub>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Theory</h2>
          <p>Circuit found with Thevenins theorem, have a V<sub>th</sub>, R<sub>th</sub> and R<sub>load</sub>. We need to find the Voltage and current for power. Current will be measured from the open circuit, one point on the R<sub>th</sub> and another on R<sub>load</sub>. Voltage will be measured across R<sub>load</sub>.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">
            Equipment List
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Trainer board</li>
            <li>Multimeter</li>
            <li>Resistors</li>
            <li>Breadboard</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Circuits</h2>
          <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg space-y-2 text-sm">
            <p>Step 1: Draw / make a thevenins circuit, using V<sub>th</sub>, R<sub>th</sub>, R<sub>load</sub> and source. </p>
            <p>
              Step 2: Measure current (load current) from the end of R<sub>th</sub> and start of R<sub>load</sub>.
            </p>
            <p>
              Step 3: Measure voltage (load voltage) from across R<sub>load</sub>.
            </p>
            <p>
              Step 4: Find power = load voltage * load current
            </p>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Analogy</h2>
          <p className="leading-relaxed">
            Result ki asche, ki ashar kotha, error kemon
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Safety</h2>
          <p className="leading-relaxed italic text-gray-500">nije lekha</p>
        </section>
      </main>
    </div>
  );
}
