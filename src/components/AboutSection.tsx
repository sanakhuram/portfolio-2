"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiRefreshCcw} from "react-icons/fi";
import { headingFont, bodyFont } from "../app/lib/fonts";

const aboutSections = [
  { 
    title: "About Me", 
    description: "I’m Sana, a frontend developer with a strong artistic background. I hold a BFA in Miniature Painting and a Master’s in Interior Design. I started as a freelance miniature artist, crafting detailed visuals, and eventually found my way into frontend development, where creativity meets code. For me, building a UI feels like painting on a canvas—balancing color, structure, and flow to create something engaging." 
  },
  { 
    title: "Focus", 
    description: "I’m deeply focused on crafting responsive, accessible, and visually engaging web experiences. I thrive on projects where design systems, UI/UX, and colors intersect with clean, efficient code. My approach is thoughtful and detail-oriented—I aim to create interfaces that feel intuitive and alive." 
  },
  { 
    title: "Exploration & Side Projects", 
    description: "I love exploring new ideas outside of client work—painting, experimenting with illustrations, or creating side projects that challenge my skills. This keeps my creativity fresh and often inspires innovative approaches in development." 
  },
  { 
    title: "Design Meets Development", 
    description: "I bridge the gap between design and code. I’m not a graphic designer or videographer; I’m a frontend developer who speaks the language of art and design. Bringing static designs to life and making them interactive is where I shine." 
  },
  { 
    title: "Passions Beyond Code", 
    description: "Outside of development, you’ll often find me painting, reading, or listening to music—always fueled by tea and coffee. My work is colored by curiosity, aesthetics, and a love for detail, whether it’s a miniature painting or a meticulously crafted interface." 
  },
];


const educationSections = [
  { title: "Education", description: `
- Frontend Development Diploma, Noroff School, Trondheim
- Master of Interior Design, National College of Arts, Lahore
- Bachelor of Fine Arts (Miniature Painting), Kinnaird College, Lahore
`},
];

export default function AboutMeSlider() {
  const [mode, setMode] = useState<"about" | "education">("about");
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = aboutSections.length;
  const prev = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const next = () => setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-[600px] w-full">

        {/* Left: Static Image */}
        <div className="flex-shrink-0 w-40 sm:w-48 md:w-56 h-56 sm:h-64 md:h-72 relative">
          <Image
            src="/images/SANA.jpg"
            alt="Sana"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Right: Animated Text */}
        <div className="flex-1 flex flex-col items-start justify-center relative">
          {/* Toggle About/Education Button */}
          <button
            onClick={() => setMode(mode === "about" ? "education" : "about")}
            className="absolute right-0 top-0 border border-white rounded-full p-2 shadow hover:bg-gray-100 transition"
            title={`Switch to ${mode === "about" ? "Education" : "About"}`}
          >
            <FiRefreshCcw className="w-5 h-5 text-white hover:bg-white hover:text-red-300" />
          </button>

          <AnimatePresence mode="wait">
            {mode === "about" && (
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className={`${headingFont.variable} text-2xl md:text-3xl font-bold mb-4 text-white`}>
                  {aboutSections[currentSlide].title}
                </h2>
                <p className={`${bodyFont.variable} text-xs md:text-sm text-white`}>
                  {aboutSections[currentSlide].description}
                </p>

                {/* Navigation Arrows */}
                <div className="flex gap-4 mt-4  w-full justify-center md:justify-start">
                  <button
                    onClick={prev}
                    className="border border-white rounded-full p-2 shadow hover:bg-gray-100 transition"
                  >
                    <FiChevronLeft className="w-5 h-5 text-white hover:text-red-300" />
                  </button>
                  <button
                    onClick={next}
                    className="border border-white rounded-full p-2 shadow hover:bg-gray-100  transition"
                  >
                    <FiChevronRight className="w-5 h-5 text-white hover:text-red-300" />
                  </button>
                </div>
              </motion.div>
            )}

            {mode === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {educationSections.map((edu, idx) => (
                  <div key={idx}>
                    <h2 className={`${headingFont.variable} text-2xl md:text-3xl font-bold mb-4 text-white`}>
                      {edu.title}
                    </h2>
                    <pre className={`${bodyFont.variable} text-sm md:text-base text-white whitespace-pre-wrap`}>
                      {edu.description}
                    </pre>
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
