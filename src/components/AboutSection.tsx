'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiRefreshCcw } from 'react-icons/fi';
import { headingFont, bodyFont } from '../app/lib/fonts';

const aboutSections = [
  {
    title: 'About Me',
    description:
      'I’m Sana, a frontend developer with a strong artistic background. I hold a BFA in Miniature Painting and a Master’s in Interior Design. I started as a freelance miniature artist, crafting detailed visuals, and eventually found my way into frontend development, where creativity meets code. For me, building a UI feels like painting on a canvas—balancing color, structure, and flow to create something engaging.',
  },
  {
    title: 'My Focus',
    description:
      'I’m deeply focused on crafting responsive, accessible, and visually engaging web experiences. I thrive on projects where design systems, UI/UX, and colors intersect with clean, efficient code. My approach is thoughtful and detail-oriented—I aim to create interfaces that feel intuitive and alive.',
  },
  {
    title: 'Exploration & Side Projects',
    description:
      'I love exploring new ideas , experimenting with illustrations, or creating side projects that challenge my skills. This keeps my creativity fresh and often inspires innovative approaches in development.',
  },
  {
    title: 'Design Meets Development',
    description:
      'I bridge the gap between design and code. I’m a frontend developer who speaks the language of art and design. Bringing static designs to life and making them interactive is where I shine.',
  },
  {
    title: 'Passions Beyond Code',
    description:
      'Outside of development, you’ll often find me painting, reading, or listening to music—always fueled by tea and coffee. My work is colored by curiosity, aesthetics, and a love for detail, whether it’s a miniature painting or a meticulously crafted interface.',
  },
];

const educationSections = [
  {
    title: 'Education',
    description: [
      'Noroff School of Technology & Digital Media, Norway – Frontend Development <strong>Higher Professional Diploma</strong> (<strong> 2 years</strong>)',
      'National College of Arts, Pakistan – Master of Interior Design (<strong>MA, 2 years</strong>)',
      'Kinnaird College for Women, Pakistan – Bachelor of Fine Arts (<strong>BFA, 4 years</strong>)',
    ],
  },
];

export default function AboutMeSlider() {
  const [mode, setMode] = useState<'about' | 'education'>('about');
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = aboutSections.length;
  const prev = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const next = () => setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 z-20">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 max-w-[700px] w-full relative">
        <div className="flex-shrink-0 relative w-32 sm:w-40 md:w-48 aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/sana.jpg"
            alt="Sana"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 8rem, (max-width: 768px) 10rem, (max-width: 1024px) 12rem, 14rem"
          />
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start justify-center relative px-2 sm:px-4 md:px-0">
          <button
            onClick={() => setMode(mode === 'about' ? 'education' : 'about')}
            className="absolute top-0 right-0 md:top-0 md:right-0 z-20 border border-white rounded-full p-2 shadow hover:bg-gray-200 transition"
            title={`Switch to ${mode === 'about' ? 'Education' : 'About'}`}
          >
            <FiRefreshCcw className="w-5 h-5 text-white hover:text-red-300" />
          </button>

          {/* About / Education Content */}
          <AnimatePresence mode="wait">
            {mode === 'about' && (
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center md:items-start"
              >
                <h2
                  className={`${headingFont.variable} text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white text-center md:text-left`}
                >
                  {aboutSections[currentSlide].title}
                </h2>
                <p
                  className={`${bodyFont.variable} text-base sm:text-lg md:text-xl text-white leading-relaxed text-center md:text-left`}
                >
                  {aboutSections[currentSlide].description}
                </p>

                <div className="flex gap-4 mt-4 w-full justify-center md:justify-start">
                  <button
                    onClick={prev}
                    className="border border-white rounded-full p-2 shadow hover:bg-gray-100 transition"
                  >
                    <FiChevronLeft className="w-5 h-5 text-white hover:text-red-300" />
                  </button>
                  <button
                    onClick={next}
                    className="border border-white rounded-full p-2 shadow hover:bg-gray-100 transition"
                  >
                    <FiChevronRight className="w-5 h-5 text-white hover:text-red-300" />
                  </button>
                </div>
              </motion.div>
            )}

            {mode === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center md:items-start"
              >
                {educationSections.map((edu, idx) => (
                  <div key={idx} className="w-full">
                    <h2
                      className={`${headingFont.variable} text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white text-center md:text-left`}
                    >
                      {edu.title}
                    </h2>
                    <ul
                      className={`${bodyFont.variable} text-base sm:text-lg md:text-xl text-white list-disc list-inside space-y-1 leading-relaxed text-center md:text-left`}
                    >
                      {edu.description.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
