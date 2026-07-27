"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#030712] text-white font-sans">
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
          <div className="p-8 rounded-3xl bg-gray-900 border border-white/10 max-w-md space-y-4 shadow-2xl">
            <h2 className="text-2xl font-bold text-rose-400">Global System Error</h2>
            <p className="text-xs text-gray-400 font-mono">{error?.message || "Critical error occurred"}</p>
            <button
              onClick={() => reset()}
              className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs font-mono"
            >
              Reload Application
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
