"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, ArrowUpRight, Download, Send } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-500 ${
        scrolled ? "py-3 bg-[#09090B]/92 backdrop-blur-2xl border-b border-[#F4B75E]/15 shadow-2xl" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FFE4BC] via-[#F4B75E] to-[#D9822B] flex items-center justify-center text-[#09090B] shadow-lg shadow-[#F4B75E]/20 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-black tracking-widest text-white uppercase font-sans leading-none">
              ALEESHA ANAS
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#F4B75E] uppercase font-semibold">
              SOFTWARE DEVELOPER
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 bg-[#111827]/70 backdrop-blur-xl border border-[#F4B75E]/20 px-6 py-2.5 rounded-full shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-semibold text-gray-300 hover:text-[#F4B75E] transition-colors tracking-wide"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="resume.pdf"
            download
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-gray-300 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:text-white transition-all"
          >
            <Download className="w-3.5 h-3.5 text-[#F4B75E]" />
            <span>Resume</span>
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full text-xs font-extrabold text-[#09090B] bg-gradient-to-r from-[#FFE4BC] via-[#F4B75E] to-[#D9822B] hover:opacity-95 transition-all shadow-lg shadow-[#F4B75E]/25 hover:scale-105 active:scale-95 flex items-center gap-1.5"
          >
            <span>Hire Me</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2.5 text-gray-300 hover:text-white rounded-xl bg-white/[0.05] border border-white/10"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#09090B]/98 backdrop-blur-2xl border-b border-[#F4B75E]/20 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/[0.05] transition-all flex items-center justify-between"
                >
                  {item.name}
                  <span className="text-[#F4B75E] font-mono text-xs">→</span>
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="resume.pdf"
                  download
                  className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold text-gray-300 bg-white/[0.05] rounded-xl"
                >
                  <Download className="w-4 h-4 text-[#F4B75E]" />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-extrabold text-[#09090B] bg-[#F4B75E] rounded-xl shadow-lg"
                >
                  <span>Hire Me</span>
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
