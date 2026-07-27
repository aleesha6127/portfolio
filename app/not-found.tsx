import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="lux-glass p-8 rounded-3xl border border-[#F4B75E]/20 max-w-md space-y-4 shadow-2xl">
        <span className="text-5xl font-black text-[#F4B75E] font-mono">404</span>
        <h2 className="text-2xl font-bold text-white font-sans">Page Not Found</h2>
        <p className="text-xs text-gray-300">The requested route could not be found.</p>
        <Link
          href="/"
          className="inline-block px-7 py-3 rounded-full bg-gradient-to-r from-[#FFE4BC] via-[#F4B75E] to-[#D9822B] text-[#09090B] font-extrabold text-xs uppercase tracking-wider shadow-lg"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
