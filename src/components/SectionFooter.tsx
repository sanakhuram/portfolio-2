"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFileAlt, FaEnvelope, FaInfoCircle, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [open, setOpen] = useState(false);

  const socials = [
    { id: "github", icon: FaGithub, link: "https://github.com/yourusername" },
    { id: "linkedin", icon: FaLinkedin, link: "https://linkedin.com/in/yourusername" },
    { id: "instagram", icon: FaInstagram, link: "https://instagram.com/yourusername" },
    { id: "cv", icon: FaFileAlt, link: "/path-to-your-cv.pdf" },
    { id: "email", icon: FaEnvelope, link: "mailto:youremail@example.com" },
  ];

  return (
    <>

      <div className="fixed bottom-6 left-4 sm:left-6 z-50 text-white text-xs sm:text-sm">
        © 2025
      </div>

      <div className="fixed bottom-6 right-4 sm:right-6 flex items-center z-50">

        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center   transition-colors duration-300"
        >
          {open ? (
            <FaTimes className="text-white text-lg sm:text-xl" />
          ) : (
            <FaInfoCircle className="text-white text-lg sm:text-xl" />
          )}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex gap-2 sm:gap-3 ml-2 sm:ml-3"
            >
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10  flex items-center justify-center transition-colors duration-300"
                >
                  <s.icon className="text-white hover:text-gray-900 text-base sm:text-xl" />
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
