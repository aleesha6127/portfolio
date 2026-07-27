"use client";

import { motion } from "framer-motion";
import { ArrowRight, Send, FileText, Github, Linkedin, Mail, CheckCircle2, Sparkles, Layers, Zap } from "lucide-react";

const techPills = ["Python", "React.js", "Next.js 15", "Flask", "PostgreSQL", "MongoDB", "REST APIs"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-24 flex items-center justify-center overflow-hidden bg-[#09090B]"
    >
      {/* Soft Ambient Radial Lights behind Hero */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[700px] h-[500px] bg-[#F4B75E]/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[500px] bg-[#3B82F6]/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center relative z-10">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start gap-6"
        >
          {/* Main Headline matching exact user prompt */}
          <div className="space-y-1">
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[0.96] uppercase font-sans">
              ENGINEER.<br />
              BUILD.<br />
              SCALE.
            </h1>
            <h2 className="font-serif italic text-gradient-gold text-4xl sm:text-6xl xl:text-7xl font-normal pt-2">
              All in one place.
            </h2>
          </div>

          {/* Short Professional Description */}
          <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed font-normal pt-1">
            I am <strong className="text-white font-bold">Aleesha Anas</strong>, a Software Developer specializing in Python, React.js, Next.js 15, Flask, RESTful APIs, and modern database architectures. I build fast, scalable, production-ready web software.
          </p>

          {/* 3 Premium CTA Buttons matching user prompt */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FFE4BC] via-[#F4B75E] to-[#D9822B] text-[#09090B] font-extrabold text-xs tracking-wider uppercase shadow-xl shadow-[#F4B75E]/20 hover:shadow-[#F4B75E]/40 flex items-center gap-2 transition-all"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-white/[0.08] border border-[#F4B75E]/40 text-white font-extrabold text-xs tracking-wider uppercase hover:bg-[#F4B75E] hover:text-[#09090B] flex items-center gap-2 transition-all shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href="resume.pdf"
              download
              className="px-7 py-3.5 rounded-full lux-glass border border-white/15 text-gray-300 hover:text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-2 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#F4B75E]" />
              <span>Download Resume</span>
            </motion.a>
          </div>

          {/* Achievements & Technologies Section */}
          <div className="space-y-4 pt-4 border-t border-white/10 w-full max-w-xl">
            {/* Internship Achievements */}
            <div className="flex items-center gap-2.5 text-xs font-mono text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-[#F4B75E] shrink-0" />
              <span>
                <strong className="text-white">3 Software Internships:</strong> Dodo Interactive • Fawstech Innovations • ByteMinders
              </span>
            </div>

            {/* Trusted Tech Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mr-2">Tech:</span>
              {techPills.map((pill) => (
                <span
                  key={pill}
                  className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-gray-300"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/aleesha6127"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full lux-glass border border-white/15 flex items-center justify-center text-gray-300 hover:text-[#F4B75E] hover:border-[#F4B75E] transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/aleesha-anas-a7553533b"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full lux-glass border border-white/15 flex items-center justify-center text-gray-300 hover:text-[#F4B75E] hover:border-[#F4B75E] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:aleeshaanas2@gmail.com"
                  className="w-9 h-9 rounded-full lux-glass border border-white/15 flex items-center justify-center text-gray-300 hover:text-[#F4B75E] hover:border-[#F4B75E] transition-all"
                  aria-label="Email Me"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - DIRECT TRANSPARENT PORTRAIT (NO Card, NO Frame, NO Box Container!) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative py-8"
        >
          {/* Soft Radial Golden Lighting behind Subject */}
          <div className="absolute w-88 h-88 rounded-full bg-radial from-[#F4B75E]/25 via-[#D9822B]/10 to-transparent blur-3xl" />
          
          {/* Subtle Blue Glow on the opposite side */}
          <div className="absolute top-10 right-0 w-72 h-72 rounded-full bg-[#3B82F6]/15 blur-3xl" />

          {/* Floating Portrait Element with Realistic Floor Shadow */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-sm flex flex-col items-center justify-center"
          >
            {/* Direct Transparent Portrait Image - NO BOX / NO CARD */}
            <img
              src="/yourphoto_transparent (2).png"
              alt="Aleesha Anas - Software Developer"
              className="w-full max-h-[520px] object-contain drop-shadow-[0_25px_40px_rgba(244,183,94,0.25)] pointer-events-none filter contrast-105 brightness-105"
            />

            {/* Realistic Floor Reflection Shadow */}
            <div className="w-3/4 h-6 bg-black/80 rounded-[100%] blur-md -mt-4 opacity-70" />

            {/* Floating Badge 1 - Top Right */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 -right-4 z-20 lux-glass px-4 py-2 rounded-2xl border border-[#F4B75E]/40 shadow-xl flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-[#F4B75E] animate-ping" />
              <div className="text-left">
                <p className="text-[10px] font-mono text-gray-400 uppercase font-bold">FOCUS</p>
                <p className="text-xs font-bold text-white font-mono">Python & Flask APIs</p>
              </div>
            </motion.div>

            {/* Floating Badge 2 - Bottom Left */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-12 -left-4 z-20 lux-glass px-4 py-2.5 rounded-2xl border border-[#3B82F6]/40 shadow-xl flex items-center gap-2.5"
            >
              <Zap className="w-4 h-4 text-[#F4B75E]" />
              <div className="text-left">
                <p className="text-[10px] font-mono text-gray-400 uppercase font-bold">STACK</p>
                <p className="text-xs font-bold text-white font-mono">React & Next.js 15</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
