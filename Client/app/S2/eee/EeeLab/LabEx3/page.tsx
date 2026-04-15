export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 flex justify-center px-4 py-10">
      <main className="w-full max-w-3xl bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-8 space-y-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center border-b pb-4">
          Study of Combination of series and parallel circuits
        </h1>

        {/* Section */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Objective</h2>
          <p className="leading-relaxed">
            Study basic laws of series and parallel circuits and find total
            current, voltage, and resistance of given circuits.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Theory</h2>
          <p>
            Circuit given, find resistance, voltage and current of each
            resistor.
          </p>
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
            <p>
              -&gt; R, resistance, writing down all reistance values using a
              multimeter
            </p>
            <p>-&gt; Voltage, measuring each resistor's voltage</p>
            <p>
              -&gt; Current, for each resistor after removing the resistors, and
              holding pins on those points. if in parallel, find the current and
              divide by the number of resistors taken out.
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
