"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Smartphone, Wrench, Terminal, Sparkles, Layers } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "BACKEND & APIs",
    desc: "Designing secure REST APIs in Python (Flask) & Node.js, authentication & authorization pipelines, CRUD design, and SQLAlchemy ORM.",
  },
  {
    icon: Code2,
    title: "FRONTEND ENGINEERING",
    desc: "Building fluid React.js & Next.js 15 user interfaces, custom hooks, Redux / Context API state, Tailwind CSS, and HTML5/CSS3.",
  },
  {
    icon: Database,
    title: "DATABASE SYSTEMS",
    desc: "Structuring relational databases (MySQL, PostgreSQL) and NoSQL stores (MongoDB, Firebase real-time datastore).",
  },
  {
    icon: Wrench,
    title: "TESTING & SDLC",
    desc: "Unit & integration testing, Agile sprint cycles, Git/GitHub version control workflows, Postman API suites, and OOP architecture.",
  },
];

const toolsList = [
  { name: "Python", category: "Language" },
  { name: "JavaScript", category: "ES6+" },
  { name: "React.js", category: "Frontend" },
  { name: "Next.js 15", category: "Framework" },
  { name: "Flask", category: "Backend" },
  { name: "Node.js", category: "Runtime" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "NoSQL" },
  { name: "Firebase", category: "Datastore" },
  { name: "Git / GitHub", category: "DevOps" },
  { name: "Postman", category: "API Suite" },
  { name: "Tailwind", category: "CSS" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0B0719]">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#EC4899]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header matching LIVA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 space-y-3"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-[#EC4899] uppercase">
            SERVICES & CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white font-sans">
            End-to-end software solutions <br />
            tailored to <span className="font-serif italic text-gradient-pink font-normal">your goals.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Side: Services Grid matching LIVA reference */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="cosmic-glass p-7 rounded-3xl border border-white/10 cosmic-glass-hover flex flex-col gap-4 relative group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#EC4899]/20 to-[#8B5CF6]/20 border border-[#EC4899]/30 flex items-center justify-center text-[#EC4899]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-mono font-bold tracking-wider text-white uppercase group-hover:text-[#EC4899] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mt-2">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side: TOOLS I USE Grid matching LIVA reference */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 cosmic-glass p-7 rounded-3xl border border-white/10 space-y-5"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#EC4899] uppercase">
                TOOLS I USE
              </span>
              <Layers className="w-4 h-4 text-[#8B5CF6]" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {toolsList.map((tool) => (
                <div
                  key={tool.name}
                  className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#EC4899]/40 hover:bg-white/[0.06] transition-all space-y-1"
                >
                  <h4 className="text-xs font-bold text-white font-mono">{tool.name}</h4>
                  <p className="text-[10px] text-gray-400 font-mono">{tool.category}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
