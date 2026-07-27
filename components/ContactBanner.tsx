"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from "lucide-react";

export default function ContactBanner() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const confetti = (await import("canvas-confetti")).default;
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FAD99B", "#F3C77C", "#D97706"],
      });
    } catch (err) {
      console.error(err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Main Banner Card matching reference bottom CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] border border-[#F3C77C]/30 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          {/* Ambient Warm Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F3C77C]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Banner Text matching "Ready to create, grow, and monetize..." */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight font-sans">
                Ready to engineer, build, <br />
                and scale your software? <br />
                <span className="font-serif italic text-gradient-gold lowercase tracking-normal text-2xl sm:text-4xl font-normal">
                  Connect today and get started.
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Available for full-time Software Developer roles, backend engineering contracts, and web application projects.
              </p>

              <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-mono text-gray-300">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#F3C77C]" />
                  aleeshaanas2@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F3C77C]" />
                  Kottayam, Kerala, India (+91 9846691678)
                </p>
              </div>
            </div>

            {/* Right Form Card matching reference image button style */}
            <div className="lg:col-span-6 luxury-glass p-6 sm:p-8 rounded-2xl border border-[#F3C77C]/20 bg-[#080C14]">
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-[#F3C77C] mx-auto animate-bounce" />
                  <h3 className="text-xl font-bold text-white">Message Delivered!</h3>
                  <p className="text-xs text-gray-300 font-mono">Thank you! I will respond to your email shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#F3C77C] text-xs font-mono"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#F3C77C] text-xs font-mono"
                    />
                  </div>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell me about your software project or role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#F3C77C] text-xs font-mono resize-none"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FAD99B] via-[#F3C77C] to-[#D97706] text-[#080C14] font-extrabold text-xs tracking-wider uppercase shadow-lg shadow-[#F3C77C]/25 flex items-center justify-center gap-2 hover:opacity-95 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>SENDING MESSAGE...</span>
                    ) : (
                      <>
                        <span>Get In Touch Today</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
