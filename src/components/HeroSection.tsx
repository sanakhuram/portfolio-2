"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { headingFont, bodyFont } from "../app/lib/fonts";

const slides = [
  {
    title: "Hi, I’m Sana",
    subtitle: "Frontend Developer & Designer blending art, code, and creativity",
    bg: "bg-yellow-500",
  },
  {
    title: "User-Centric Design",
    subtitle: "I create experiences from start to finish that guide users through a journey full of surprises",
    bg: "bg-gray-500",
  },
  {
    title: "Love for Illustrations",
    subtitle: "I play with colors to craft engaging spaces and immersive UI",
    bg: "bg-pink-200",
  },
  {
    title: "Art + Technology",
    subtitle: "I combine my painting and design skills with frontend technology to build unique experiences",
    bg: "bg-teal-700",
  },
  {
    title: "Constant Learner",
    subtitle: "Eager to explore new tools, trends, and ways to bring art into technology",
    bg: "bg-yellow-400",
  },
  {
    title: "Collaborate With Me",
    subtitle: "If you’re interested, we can design, color, and build together using frontend tech",
    bg: "bg-emerald-500",
  },
  {
    title: "Let’s Create",
    subtitle: "I merge design, illustration, and code to craft experiences that delight users",
    bg: "bg-teal-500",
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

  return (
    <section
      className={`h-screen w-screen flex flex-col items-center justify-center text-center relative transition-colors duration-700 px-4 md:px-0 ${slides[current].bg}`}
    >

      <AnimatePresence mode="wait">
        <motion.h1
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className={`${headingFont.variable} text-5xl sm:text-6xl md:text-7xl font-extrabold text-white uppercase max-w-[30rem] md:max-w-[35rem]`}
        >
          {slides[current].title}
        </motion.h1>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.p
          key={`sub-${current}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`${bodyFont.variable} mt-4 text-gray-800 text-lg sm:text-xl max-w-[22rem] md:max-w-[28rem]`}
        >
          {slides[current].subtitle}
        </motion.p>
      </AnimatePresence>

      <div className="flex gap-3 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-4 h-4 rounded-full border-2 border-dashed border-white ${
              i === current ? "bg-white" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
