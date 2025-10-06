'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { headingFont, bodyFont } from '../app/lib/fonts';
import DotsBackground from './DotsBackground';

type HeroSectionProps = {
  onViewMore?: (index: number) => void; 
};

const slides = [
  {
    title: 'Hey, Im Sana',
    subtitle: 'Frontend Developer & UX/UI Designer blending creativity and code to craft interactive experiences',
    bg: '#adc178',
    targetIndex: -1,
  },
  {
    title: 'User-Centric Design',
    subtitle: 'I create experiences from start to finish that guide users through a journey full of surprises',
    bg: '#DCDCDC',
    targetIndex: 2,
  },
  {
    title: 'Art + Technology',
    subtitle: 'I combine my painting and design skills with frontend technology to build unique experiences',
    bg: '#edafb8',
    targetIndex: 1,
  },
  {
    title: 'Constant Learner',
    subtitle: 'Eager to explore new tools, trends, and ways to bring art into technology',
    bg: '#333333',
    targetIndex: 4,
  },
  {
    title: 'Let US Create',
    subtitle: 'I merge design, illustration, and code to craft experiences that delight users',
    bg: '#77afc3',
    targetIndex: 5,
  },
];

const getSubtitleColor = (bg: string) => {
  const c = bg.substring(1);
  const rgb = parseInt(c, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = rgb & 0xff;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 150 ? '#4C4C4C' : '#ffffff';
};

export default function HeroSection({ onViewMore }: HeroSectionProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{ backgroundColor: slides[current].bg }}
      className="h-screen w-screen flex flex-col items-center justify-center text-center relative transition-colors duration-700 px-4 md:px-0 overflow-hidden"
    >
      <DotsBackground count={700} />

      {/* Heading */}
      <AnimatePresence mode="wait">
        <motion.h1
          key={current}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className={`${headingFont.variable} font-extrabold uppercase text-center text-white relative z-10`}
          style={{
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            maxWidth: 'clamp(20rem, 70vw, 60rem)',
            lineHeight: '1.1',
          }}
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
          style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
            color: getSubtitleColor(slides[current].bg),
          }}
          className={`${bodyFont.variable} font-bold uppercase mt-4 text-center relative z-10 max-w-[400px]`}
        >
          {slides[current].subtitle}
        </motion.p>
      </AnimatePresence>

      {/* View More Button */}
      {slides[current].targetIndex !== -1 && (
        <motion.button
          onClick={() => onViewMore?.(slides[current].targetIndex)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 mb-4 px-6 py-1 border-2 border-dashed border-white text-white font-semibold uppercase rounded-lg animate-pulse relative z-10"
        >
          View More
        </motion.button>
      )}

      {/* Dots Navigation */}
      <div className="flex gap-3 mt-4 relative z-10">
        {slides.map((slide, i) => (
          <motion.button
            key={i}
            onClick={() => setCurrent(i)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className={`w-4 h-4 rounded-full border-2 border-dashed border-white ${
              i === current ? 'bg-white animate-pulse' : 'bg-transparent'
            }`}
            aria-label={`Go to slide ${i + 1}: ${slide.title}`}
            title={`Go to slide: ${slide.title}`}
          />
        ))}
      </div>
    </section>
  );
}
