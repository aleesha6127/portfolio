"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    stars: 5,
    quote: "Awarded Best Paper Presentation in the PG Category at the 4th International Conference on Modern Computing Trends & Technology (ICMCTT-IV 2024).",
    name: "ICMCTT-IV Conference Board",
    role: "International Academic Conference",
  },
  {
    stars: 5,
    quote: "Research paper titled 'The Mindful Matrix: Exploring Social Media's Influence on Mental Wellbeing' published in IRJAEM Journal in Dec 2024.",
    name: "IRJAEM Editorial Board",
    role: "Peer-Reviewed Journal Publication",
  },
  {
    stars: 5,
    quote: "Built backend modules and Flask REST APIs with speed and accuracy, demonstrating strong code ownership during sprint cycles.",
    name: "Engineering Team Leads",
    role: "Dodo Interactive & Fawstech",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header matching "Loved by creators just like you" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
            Loved by teams & mentors <br />
            <span className="font-serif italic text-gradient-gold lowercase tracking-normal text-3xl sm:text-5xl font-normal">
              just like you
            </span>
          </h2>
        </motion.div>

        {/* 3 Review Cards matching reference image layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="luxury-glass p-8 rounded-2xl border border-[#F3C77C]/15 flex flex-col justify-between gap-6 text-center items-center relative group"
            >
              <div className="space-y-4 flex flex-col items-center">
                <div className="flex items-center gap-1 text-[#F3C77C]">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans italic">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 w-full text-center">
                <h4 className="text-xs font-mono font-bold text-white">{review.name}</h4>
                <p className="text-[10px] text-[#F3C77C] font-mono">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
