// /app/components/NewServerPromt.tsx
"use client";

export default function NewVersionPrompt({ newWorker }: { newWorker: ServiceWorker }) {

  const handleUpdate = () => {
    // 🔥 tell SW to activate
    newWorker.postMessage("SKIP_WAITING");

    // 🔄 reload page
    window.location.reload();
  };

  return (
    <div className="bg-black text-white px-4 py-3 rounded-xl shadow-lg border border-white/20 backdrop-blur-md">
      <p className="text-sm mb-2">🚀 New version available</p>

      <button
        onClick={handleUpdate}
        className="bg-white text-black px-3 py-1 rounded-md text-sm hover:bg-gray-200"
      >
        Update Now
      </button>
    </div>
  );
}