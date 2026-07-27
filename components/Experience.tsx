"use client";

import { motion } from "framer-motion";
import { Calendar, Building2, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Dodo Interactive",
    period: "Mar 2026 – Jun 2026",
    type: "Internship (WFH)",
    bullets: [
      "Built responsive web interfaces with React.js, Next.js 15, JavaScript, HTML5, and CSS3, working within a cross-functional team of 4 interns under 4 team leads to ship features on a sprint cycle.",
      "Integrated RESTful APIs into the frontend and improved page performance; managed all source control via Git/GitHub.",
    ],
    tech: ["React.js", "Next.js 15", "JavaScript", "Tailwind CSS", "Git/GitHub"],
  },
  {
    role: "Backend Developer",
    company: "Fawstech Innovations",
    period: "Dec 2025 – Mar 2026",
    type: "Internship (Kochi)",
    bullets: [
      "Built backend modules and around 4 RESTful API endpoints in Python/Flask with Firebase as the real-time datastore, as part of a 10-intern team under 4 team leads.",
      "Optimized database queries and led testing/debugging efforts that reduced reported bugs before release, working closely with the frontend team to align on API contracts.",
    ],
    tech: ["Python", "Flask", "Firebase Datastore", "REST APIs", "SQL"],
  },
  {
    role: "Full Stack Developer",
    company: "ByteMinders Edutech",
    period: "Jul 2025 – Sep 2025",
    type: "Internship (WFH)",
    bullets: [
      "Owned version control and collaboration workflows via Git/GitHub across a multi-developer codebase.",
      "Engineered full-stack features, integrated database schemas, and supported feature deployment releases.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "React.js", "Git/GitHub"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-3"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#F4B75E] uppercase">
            CAREER JOURNEY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
            Work <span className="font-serif italic text-gradient-gold lowercase tracking-normal text-3xl sm:text-5xl font-normal">Experience</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Hands-on internships spanning frontend, backend, and full-stack software development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#F4B75E] via-[#3B82F6] to-transparent opacity-40" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.company + exp.role}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#09090B] border-2 border-[#F4B75E] flex items-center justify-center z-20 top-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F4B75E] animate-ping" />
                  </div>

                  <div className="w-full md:w-[calc(50%-2.5rem)] pl-16 md:pl-0">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="lux-glass p-7 rounded-3xl border border-white/10 lux-glass-hover space-y-4 relative group"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4B75E]/15 border border-[#F4B75E]/30 text-xs font-semibold text-[#F4B75E] font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="text-xs text-gray-400 font-mono font-medium">{exp.type}</span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#F4B75E] transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                          <Building2 className="w-4 h-4 text-[#F4B75E]" />
                          <span className="font-semibold text-gray-200">{exp.company}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-[#F4B75E] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-gray-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
