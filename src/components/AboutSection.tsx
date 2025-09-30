"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiRefreshCcw} from "react-icons/fi";
import { headingFont, bodyFont } from "../app/lib/fonts";

const aboutSections = [
  { title: "New Media", description: "My work crosses a broad range of categories in the digital space, both from a design and a technical perspective. I believe in using the right tools for the job so don’t subscribe to following bandwagons. By analysing the job at hand for what it is, you can make informed decisions to ensure the right tools are used to solve the creative problem." },
  { title: "Focus", description: "The focus of my work shifts as the need arises for certain skills in the working environment. This can be both a positive and negative experience; on one hand you can hone your skills in an in-demand area, but on the other hand you’re ready to explore different areas. This is why I explore ideas and concepts outside of my work so I always have something new to share." },
  { title: "Side Projects", description: "At work I’m known for my love of extracurricular activity! I enjoy creating side projects outside of my working life to share and engage with others. This can be through competitions, websites or games. Work makes up such a big part of our lives and I believe in expanding my ideas and skills without needing it to be on a client brief." },
  { title: "Design or Development?", description: "Design and development are both creative pursuits, and in digital, one couldn’t exist without the other. I find joy in development by bringing design to life, which is why I wouldn’t classify myself as a hardcore developer but as someone who can bridge two philosophies and ways of thinking." },
  { title: "Above and Beyond", description: "My work doesn’t end with the brief. Going above and beyond the parameters that have been set out is essential, not only for your own personal achievement and development but it reflects back into the work you produce for clients." },
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
