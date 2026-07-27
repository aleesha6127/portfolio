"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="glass-panel p-8 rounded-3xl border border-white/10 max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-rose-400">Something went wrong!</h2>
        <p className="text-xs text-gray-400 font-mono leading-relaxed">
          {error.message || "An unexpected application error occurred."}
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-xs font-mono shadow-lg transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
