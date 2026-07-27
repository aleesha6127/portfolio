"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, ExternalLink, ShieldCheck } from "lucide-react";

const certs = [
  {
    title: "Python Programming Certification",
    issuer: "NPTEL — IIT Bombay & IIT Madras",
    date: "Certified 2024",
    desc: "Comprehensive coursework covering data structures, algorithmic design, OOP principles, and Python software engineering.",
    icon: ShieldCheck,
  },
  {
    title: "Full Stack Web Development Certification",
    issuer: "Capital Infotech",
    date: "Certified 2024",
    desc: "Hands-on mastery of HTML5, CSS3, JavaScript ES6+, React.js, Node.js, Express microservices, and database integration.",
    icon: Award,
  },
  {
    title: "Software Engineering & Database Foundations",
    issuer: "Great Learning Academy",
    date: "Certified 2023",
    desc: "Foundational mastery of Relational DBMS, SQL schema design, normalized queries, and SDLC methodologies.",
    icon: CheckCircle,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#F4B75E] uppercase">
            VERIFIED CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
            Accreditations & <span className="font-serif italic text-gradient-gold lowercase tracking-normal text-3xl sm:text-5xl font-normal">Certifications</span>
          </h2>
        </motion.div>

        {/* 3 Cert Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certs.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="lux-glass p-8 rounded-3xl border border-[#F4B75E]/15 lux-glass-hover flex flex-col justify-between gap-6 relative group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F4B75E]/10 border border-[#F4B75E]/30 flex items-center justify-center text-[#F4B75E]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#F4B75E] font-bold uppercase tracking-wider">{cert.date}</span>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#F4B75E] transition-colors mt-1">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-gray-400 mt-1">{cert.issuer}</p>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans pt-2">{cert.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
