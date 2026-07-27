"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFE4BC] via-[#F4B75E] to-[#3B82F6] z-[10000] origin-left shadow-[0_0_12px_rgba(244,183,94,0.9)]"
      style={{ scaleX }}
    />
  );
}
