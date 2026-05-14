export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 flex justify-center px-4 py-10">
      <main className="w-full max-w-3xl bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-8 space-y-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center border-b pb-4">
          Introduction to oscilloscope, familiarization with AC waves
        </h1>

        {/* Section */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Objective</h2>
          <p className="leading-relaxed">
            measuring maximum value, average value, r.m.s value and frequency by
            oscilloscope and proof of KVL theorem.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Theory</h2>
          <p>
            AC is continuously changing, as the electricity is generated through another source, the voltage keeps rising and falling, that also affects the current. With an oscilloscope, the wave is seen and can be changed using the machine.<br/>
            -&gt; Capacitor: Stores energy in electric field. Charges up when voltage rises and down when voltage drops. Smoothens sharp voltage changes.<br/>
            -&gt; Inductor: Stores energy in magnetic field. Delays current flow. Removes noise.
            -&gt; Resistor: Liits current flow.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">
            Equipment List
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Oscilloscope</li>
            <li>Function generator</li>
            <li>Resistor</li>
            <li>Inductor</li>
            <li>Capacitor</li>
            <li>SPST switch</li>
            <li>Connecting wire</li>
            <li>Bread board</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Circuits</h2>
          <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg space-y-2 text-sm">
            <p>
           
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
