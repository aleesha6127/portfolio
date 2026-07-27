"use client";

import { motion } from "framer-motion";

const techLogos = [
  "PYTHON",
  "REACT.JS",
  "NEXT.JS 15",
  "FLASK",
  "POSTGRESQL",
  "MONGODB",
  "FIREBASE",
  "NODE.JS",
  "TAILWIND CSS",
];

export default function TechBar() {
  return (
    <section className="py-10 bg-[#0A0E18] border-y border-[#F3C77C]/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-[10px] font-mono font-bold tracking-widest text-[#F3C77C] uppercase shrink-0">
          CORE STACK & TOOLS
        </span>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 text-xs font-mono font-bold tracking-widest text-gray-400">
          {techLogos.map((tech) => (
            <span key={tech} className="hover:text-white transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
