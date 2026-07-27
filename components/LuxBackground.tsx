"use client";

import { motion } from "framer-motion";

export default function LuxBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#09090B]">
      {/* Warm Gold Ambient Glow Top Right */}
      <div className="absolute -top-40 right-0 w-[800px] h-[600px] bg-gradient-to-br from-[#F4B75E]/12 via-[#D9822B]/6 to-transparent blur-[160px] rounded-full" />

      {/* Subtle Blue Ambient Glow Middle Left */}
      <div className="absolute top-1/3 -left-40 w-[700px] h-[600px] bg-gradient-to-tr from-[#3B82F6]/10 via-[#1D4ED8]/5 to-transparent blur-[170px] rounded-full" />

      {/* Warm Gold Glow Bottom Center */}
      <div className="absolute -bottom-40 left-1/3 w-[850px] h-[550px] bg-[#F4B75E]/8 blur-[180px] rounded-full" />

      {/* Subtle Floating Sparkle Particles */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#F4B75E]/40 blur-[1px]"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.6, 0.2], y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-[#3B82F6]/30 blur-[1px]"
      />
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], x: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-[#F4B75E]/50 blur-[1px]"
      />
    </div>
  );
}
