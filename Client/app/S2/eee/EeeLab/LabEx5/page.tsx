export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 flex justify-center px-4 py-10">
      <main className="w-full max-w-3xl bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-8 space-y-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center border-b pb-4">
          Study of Thevenin's Theorem
        </h1>

        {/* Section */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Objective</h2>
          <p className="leading-relaxed">
            Boro circuit choto kora, V<sub>Th</sub> and R<sub>Th</sub> diye, and
            Load resistance and Load current pore ber kora.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Theory</h2>
          <p>Circuit given, Circuit er end e akta Load Resistor boshabo,</p>
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
            <p>Step 1: A point, before the last resistor that connects to ground. Holding Multimeter on that new point and last resistor's end. Finding Main V, the voltage we should get at the end of the experiment. </p>
            <p>
              Step 2: Given circuit er end node er resistance ber kora, voltage
              off kore{" "}
            </p>
            <p>
              Step 3: Circuit with load resistance er end node er voltage ber
              kora
            </p>
            <p>
              Step 4: new values, voltage from step 1, one resistor with
              resistance from step 2, second resistor with resistance of load
              resistance, finding voltage.{" "}
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
