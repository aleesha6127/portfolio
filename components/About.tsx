"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, CheckCircle, Code2, Sparkles } from "lucide-react";

const stats = [
  { label: "Software Internships", value: "3 Roles" },
  { label: "MCA Graduation CGPA", value: "8.16 / 10" },
  { label: "Conference & Research", value: "2 Publications" },
  { label: "Production Applications", value: "5 Deployed" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 space-y-3"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#F4B75E] uppercase">
            ABOUT ALEESHA ANAS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
            Crafting software with <br />
            <span className="font-serif italic text-gradient-gold lowercase tracking-normal text-3xl sm:text-5xl font-normal">
              precision, speed & integrity.
            </span>
          </h2>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="lux-glass p-6 rounded-2xl border border-[#F4B75E]/15 text-center space-y-1"
            >
              <h3 className="text-2xl sm:text-3xl font-black text-[#F4B75E] font-sans">{stat.value}</h3>
              <p className="text-xs font-mono text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Bio Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 lux-glass p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6"
          >
            <h3 className="text-xl font-bold text-white font-sans">Professional Overview</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              I am a Master of Computer Applications (MCA) graduate from Kristu Jyothi College of Management & Technology with hands-on software development experience gained across 3 internships at Dodo Interactive, Fawstech Innovations, and ByteMinders Edutech.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              My technical expertise spans Python microservice engineering, Flask REST APIs, React.js, Next.js 15, PostgreSQL database query optimization, and MongoDB schema design.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                <CheckCircle className="w-4 h-4 text-[#F4B75E]" />
                <span>Python & Flask Backend</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                <CheckCircle className="w-4 h-4 text-[#F4B75E]" />
                <span>React.js & Next.js 15 UI</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                <CheckCircle className="w-4 h-4 text-[#F4B75E]" />
                <span>PostgreSQL & MongoDB</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                <CheckCircle className="w-4 h-4 text-[#F4B75E]" />
                <span>Git & Agile Engineering</span>
              </div>
            </div>
          </motion.div>

          {/* Education & Academic Honors */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* MCA Degree Card */}
            <div className="lux-glass p-7 rounded-3xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#F4B75E]">
                <GraduationCap className="w-6 h-6" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">EDUCATION</span>
              </div>
              <h4 className="text-base font-bold text-white">Master of Computer Applications (MCA)</h4>
              <p className="text-xs text-gray-300">Kristu Jyothi College of Management & Technology (2023 – 2025)</p>
              <span className="inline-block px-3 py-1 rounded-full bg-[#F4B75E]/15 text-[#F4B75E] font-mono text-xs font-bold">
                CGPA: 8.16 / 10
              </span>
            </div>

            {/* BSc Computer Science Card */}
            <div className="lux-glass p-7 rounded-3xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#F4B75E]">
                <GraduationCap className="w-6 h-6" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">UNDERGRADUATE</span>
              </div>
              <h4 className="text-base font-bold text-white">B.Sc. Computer Science</h4>
              <p className="text-xs text-gray-300">Assumption College Autonomous, Changanacherry (2020 – 2023)</p>
              <span className="inline-block px-3 py-1 rounded-full bg-[#F4B75E]/15 text-[#F4B75E] font-mono text-xs font-bold">
                Score: 79.5%
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
