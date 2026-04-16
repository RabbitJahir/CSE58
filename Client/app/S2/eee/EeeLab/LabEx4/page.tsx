import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 flex justify-center px-4 py-10">
      <main className="w-full max-w-3xl bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-8 space-y-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center border-b pb-4">
          To verify superposition theorem.
        </h1>

        {/* Section */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Objective</h2>
          <p className="leading-relaxed">
            To find that the current of a circuit with two sources, is equal, to the addition of the same circuit but with one source turned off and vice versa with reciprocal.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Theory</h2>
          <p>
           nijer moton.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">
            Equipment List
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Digital Trainer Board</li>
            <li>Voltmeter</li>
            <li>Ammeter</li>
            <li>Multimeter</li>
            <li>Source</li>
            <li>Resistors</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Circuits</h2>
          <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg space-y-2 text-sm">
            <Image
              src="/S2/Eee/EeeLab/EeeEx4.jpeg"
              alt="Ex4Image"
              width={800}
              height={800}
            ></Image>
            <sup className="text-xl">Jimmy  </sup>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-600">Analogy</h2>
          <p className="leading-relaxed">
            Result ki asche, ki ashar kotha, error kemon.
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
