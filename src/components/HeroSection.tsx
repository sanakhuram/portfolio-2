"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { headingFont, bodyFont } from "../app/lib/fonts";


const slides = [
  {
    title: "Hi, I’m Sana",
subtitle: "Frontend Developer & UX/UI Designer blending creativity and code to craft interactive experiences",
    bg: "#FFC300", // gold
  },
  {
    title: "User-Centric Design",
    subtitle: "I create experiences from start to finish that guide users through a journey full of surprises",
    bg: "#333333", // dark gray
  },
  {
    title: "Art + Technology",
    subtitle: "I combine my painting and design skills with frontend technology to build unique experiences",
    bg: "#E59FB6", // teal
  },
  {
    title: "Constant Learner",
    subtitle: "Eager to explore new tools, trends, and ways to bring art into technology",
    bg: "#DCDCDC", // yellow
  },
  {
    title: "Let’s Create",
    subtitle: "I merge design, illustration, and code to craft experiences that delight users",
    bg: "#14B8A6", // teal
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const getSubtitleColor = (bg: string) => {
    const c = bg.substring(1);
    const rgb = parseInt(c, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = rgb & 0xff;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 150 ? "#333333" : "#ffffff";
  };

  return (
    <section
      style={{ backgroundColor: slides[current].bg }}
      className="h-screen w-screen flex flex-col items-center justify-center text-center relative transition-colors duration-700 px-4 md:px-0 overflow-hidden"
    >



      {/* Title */}
      <AnimatePresence mode="wait">
        <motion.h1
          key={current}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className={`${headingFont.variable} text-5xl sm:text-6xl md:text-7xl font-extrabold text-white uppercase max-w-[30rem] md:max-w-[35rem] relative z-10`}
        >
          {slides[current].title}
        </motion.h1>
      </AnimatePresence>

      {/* Subtitle */}
      <AnimatePresence mode="wait">
        <motion.p
          key={`sub-${current}`}
          initial={{ opacity: 0, x: current % 2 === 0 ? -30 : 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: current % 2 === 0 ? 30 : -30 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          style={{ color: getSubtitleColor(slides[current].bg) }}
          className={`${bodyFont.variable} mt-4 text-lg sm:text-xl max-w-[22rem] md:max-w-[28rem] relative z-10`}
        >
          {slides[current].subtitle}
        </motion.p>
      </AnimatePresence>

      {/* Dot navigation */}
      <div className="flex gap-3 mt-6 relative z-10">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setCurrent(i)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className={`w-4 h-4 rounded-full border-2 border-dashed border-white ${
              i === current ? "bg-white" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
