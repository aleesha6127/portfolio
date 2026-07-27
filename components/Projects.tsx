"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Eye, X } from "lucide-react";

const projects = [
  {
    id: "attendance",
    number: "01",
    title: "SMART ATTENDANCE SYSTEM",
    subtitle: "Biometric Facial Recognition Pipeline",
    category: "Python • Flask • OpenCV",
    desc: "Built the Flask backend, database schema, and image-processing pipeline; tested on a class of 10–15 students with ~90% (9/10) recognition accuracy.",
    image: "/attendance.svg",
    tags: ["Python", "OpenCV", "Flask", "AI Pipeline"],
    github: "https://github.com/aleesha6127",
    demo: "https://smart-attendance-system-3xze.onrender.com",
  },
  {
    id: "hospital",
    number: "02",
    title: "HOSPITAL MANAGEMENT SYSTEM",
    subtitle: "Healthcare Patient & Physician Portal",
    category: "Flask • PostgreSQL",
    desc: "Built and optimized REST APIs and database queries for fast, reliable data retrieval across patient records and physician schedules.",
    image: "/hospital.svg",
    tags: ["Flask", "PostgreSQL", "REST APIs", "SQLAlchemy"],
    github: "https://github.com/aleesha6127",
    demo: "https://hospital-management-izbu.onrender.com",
  },
  {
    id: "electricity",
    number: "03",
    title: "ELECTRICITY BILLING & ANALYSIS",
    subtitle: "IoT Energy Monitoring Platform",
    category: "IoT • Firebase",
    desc: "Built and tested with a physical IoT device to capture live energy readings, then synced to Firebase for real-time monitoring.",
    image: "/electricity.svg",
    tags: ["Firebase", "IoT Hardware", "Real-Time DB", "Python"],
    github: "https://github.com/aleesha6127",
    demo: "https://electricity-billing-system-psi.vercel.app",
  },
  {
    id: "tourism",
    number: "04",
    title: "TOURISM MANAGEMENT SYSTEM",
    subtitle: "Full-Stack Booking Portal",
    category: "MERN Stack",
    desc: "Built RESTful APIs and a responsive React.js interface backed by MongoDB for managing vacation packages, itineraries, and queries.",
    image: "/tourism.png",
    tags: ["MongoDB", "Express", "React.js", "Node.js"],
    github: "https://github.com/aleesha6127",
    demo: "https://tourism-management-nvmo.vercel.app",
  },
  {
    id: "trustshield",
    number: "05",
    title: "TRUSTSHIELD — WOMEN SAFETY APP",
    subtitle: "Emergency Mobile Web Solution",
    category: "REST APIs • MongoDB",
    desc: "Integrated RESTful APIs with MongoDB and designed a responsive, low-friction UI for emergency situation use.",
    image: "/trustshield.png",
    tags: ["React.js", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/aleesha6127",
    demo: "https://trustshield-jqpk.onrender.com",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0B0719]">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#EC4899]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header matching LIVA reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <span className="text-xs font-mono font-bold tracking-widest text-[#EC4899] uppercase">
              FEATURED CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white font-sans">
              Designing impact <br />
              through <span className="font-serif italic text-gradient-pink font-normal">meaningful</span> solutions.
            </h2>
          </motion.div>

          <a
            href="https://github.com/aleesha6127"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gray-400 hover:text-white transition-colors group"
          >
            <span>VIEW ALL PROJECTS ON GITHUB</span>
            <ArrowUpRight className="w-4 h-4 text-[#EC4899] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* 3-Column Glass Card Grid matching LIVA reference cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="cosmic-glass rounded-3xl overflow-hidden border border-white/10 cosmic-glass-hover flex flex-col group relative"
            >
              {/* Project Image Header */}
              <div className="relative w-full h-56 bg-[#160F2D] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#160F2D] via-transparent to-transparent opacity-90" />

                {/* Number Badge */}
                <div className="absolute top-4 left-4 font-mono text-xs font-bold text-[#EC4899] opacity-80">
                  {project.number}
                </div>

                {/* Hover Quick Action */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 z-20">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-11 h-11 rounded-full bg-white text-gray-950 flex items-center justify-center hover:bg-[#EC4899] hover:text-white transition-all transform hover:scale-110 shadow-lg"
                    title="View Case Study Details"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full bg-[#EC4899] text-white flex items-center justify-center hover:bg-[#D946EF] transition-all transform hover:scale-110 shadow-lg"
                    title="Live Deployment"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Card Footer matching LIVA reference */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-[#EC4899] transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:border-[#EC4899] hover:text-[#EC4899] transition-all"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-xs text-gray-400 font-medium">{project.subtitle}</p>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 pt-1">{project.desc}</p>
                </div>

                {/* Tech Pills matching LIVA */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono font-semibold text-[#EC4899]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="cosmic-glass w-full max-w-2xl rounded-3xl border border-[#EC4899]/30 p-6 sm:p-8 space-y-6 relative overflow-hidden bg-[#0E0921]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <div className="inline-flex px-3 py-1 rounded-full bg-[#EC4899]/20 text-[#EC4899] text-xs font-mono font-bold">
                  {selectedProject.category}
                </div>
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{selectedProject.desc}</p>
              </div>

              <div className="flex gap-4 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-full bg-white/10 text-xs font-mono font-bold text-white flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-full bg-gradient-to-r from-[#EC4899] to-[#D946EF] text-xs font-mono font-bold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-center"
                >
                  <span>Launch Live Demo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
