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
    title: 'Hey Im Sana',
    subtitle:
      'Frontend Developer & UX/UI Designer creating interactive, user-focused experiences and open to collaboration',
    bg: '#77afc3',
    targetIndex: -1,
  },
  {
    title: 'User-Centric Design',
    subtitle:
      'Designing experiences that guide users intuitively through digital journeys, combining creativity with usability',
    bg: '#DCDCDC',
    targetIndex: 2,
  },
  {
    title: 'Art + Technology',
    subtitle:
      'Blending my artistic side with frontend technology to create engaging, comforting, and user-inviting digital spaces',
    bg: '#edafb8',
    targetIndex: 1,
  },
  {
    title: 'Constant Learner',
    subtitle:
      'Always eager to explore new technologies, tools, and frameworks to enhance my development skills.',
    bg: '#333333',
    targetIndex: 4,
  },
  {
    title: 'Let Us Create',
    subtitle:
      'I’m looking forward to connecting and collaborating to bring creative ideas to life, lets just connect and create something exciting',
    bg: '#adc178',
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
      <DotsBackground count={150} />

      {/* Heading */}
      <AnimatePresence mode="wait">
        <motion.h1
          key={current}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className={`${headingFont.variable} font-extrabold uppercase text-center text-white relative z-10 mt-15`}
          style={{
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            maxWidth: 'clamp(20rem, 70vw, 60rem)',
            lineHeight: 0.7, 
            marginBottom: 0, 
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
            marginTop: 0, 
          }}
          className={`${bodyFont.variable} font-bold uppercase text-center relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg`}
        >
          {slides[current].subtitle}
        </motion.p>
      </AnimatePresence>

      {/* View More Button */}
      {slides[current].targetIndex !== -1 && (
        <motion.button
          onClick={() => onViewMore?.(slides[current].targetIndex)}
          whileTap={{ scale: 0.95 }}
          className="mt-4 mb-4 px-6 py-1 font-semibold uppercase rounded-lg relative z-10 overflow-hidden border-2 border-dashed border-white text-white
          before:absolute before:top-[-100%] before:left-0 before:w-full before:h-full before:bg-gray-600/25 before:z-0
          before:transition-transform before:duration-500 hover:before:translate-y-full
          after:absolute after:inset-0 after:flex after:items-center after:justify-center after:z-10"
        >
          <span className="relative z-10">View More</span>
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
