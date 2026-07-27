"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Code2, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05080E] border-t border-white/10 pt-12 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-gray-400">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#F3C77C] text-[#080C14] flex items-center justify-center font-bold">
            <Code2 className="w-4 h-4 stroke-[2.5]" />
          </div>
          <span className="font-extrabold text-white tracking-widest uppercase">ALEESHA ANAS</span>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-[#F3C77C] transition-colors">About</a>
          <a href="#projects" className="hover:text-[#F3C77C] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#F3C77C] transition-colors">Contact</a>
          <span>© {new Date().getFullYear()} Aleesha Anas. All rights reserved.</span>
        </div>

        {/* Social Icons matching reference */}
        <div className="flex items-center gap-3">
          <a href="https://github.com/aleesha6127" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#F3C77C] hover:border-[#F3C77C]">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/aleesha-anas-a7553533b" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#F3C77C] hover:border-[#F3C77C]">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:aleeshaanas2@gmail.com" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#F3C77C] hover:border-[#F3C77C]">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Floating Utilities */}
      <a
        href="https://wa.me/919846691678?text=Hello%20Aleesha,%20I%20visited%20your%20portfolio!"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[8000] w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform"
        aria-label="Contact on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-[7999] w-12 h-12 rounded-full luxury-glass border border-[#F3C77C]/30 text-white flex items-center justify-center shadow-xl hover:bg-[#F3C77C] hover:text-[#080C14] hover:scale-110 transition-all"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
