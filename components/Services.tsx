"use client";

import { motion } from "framer-motion";
import { Server, Code2, Database, Cpu, Layers, Wrench, Sparkles } from "lucide-react";

const servicesList = [
  {
    icon: Server,
    title: "Python & Flask Microservices",
    desc: "Designing scalable backend REST APIs, authentication pipelines, token verification, and SQLAlchemy ORM data layers.",
  },
  {
    icon: Code2,
    title: "React.js & Next.js 15 Applications",
    desc: "Building high-performance server-rendered web applications, state management architectures, and Tailwind CSS interfaces.",
  },
  {
    icon: Database,
    title: "Database System Design",
    desc: "Structuring relational databases (MySQL, PostgreSQL) and NoSQL real-time document stores (MongoDB, Firebase).",
  },
  {
    icon: Cpu,
    title: "IoT & Hardware Cloud Synchronization",
    desc: "Connecting physical sensors and IoT hardware devices to real-time Firebase monitoring dashboards.",
  },
  {
    icon: Layers,
    title: "Full-Stack System Architecture",
    desc: "Delivering end-to-end web products from system requirements gathering to modular deployment releases.",
  },
  {
    icon: Wrench,
    title: "API Testing & Software Quality",
    desc: "Postman API test suite creation, unit testing, Git/GitHub version control workflows, and Agile sprint execution.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#111827]">
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
            SOFTWARE SERVICES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
            End-to-End Engineering <br />
            <span className="font-serif italic text-gradient-gold lowercase tracking-normal text-3xl sm:text-5xl font-normal">
              tailored to your product goals.
            </span>
          </h2>
        </motion.div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="lux-glass p-8 rounded-3xl border border-[#F4B75E]/15 lux-glass-hover flex flex-col gap-4 relative group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F4B75E]/10 border border-[#F4B75E]/30 flex items-center justify-center text-[#F4B75E] group-hover:bg-[#F4B75E] group-hover:text-[#09090B] transition-colors">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-[#F4B75E] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
