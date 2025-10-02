'use client';

import { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFileAlt,
  FaEnvelope,
  FaInfoCircle,
  FaTimes,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const socials = [
    { id: 'github', icon: FaGithub, link: 'https://github.com/sanakhuram' },
    { id: 'linkedin', icon: FaLinkedin, link: 'https://www.linkedin.com/in/sana-khuram-157ba02b7/' },
    { id: 'instagram', icon: FaInstagram, link: 'https://www.instagram.com/sana_khuram/?igsh=MTBneHhvd2d2eXB2dg%3D%3D#' },
    { id: 'cv', icon: FaFileAlt, link: '/path-to-your-cv.pdf' },
    { id: 'email', icon: FaEnvelope, link: 'mailto:sana.khuram.baig@gmail.com' },
  ];

  return (
    <div
      className="fixed bottom-6 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background behind footer items */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-4 right-4 bottom-0 top-0 bg-black/50  z-[-1]"
          />
        )}
      </AnimatePresence>

      {/* Left: copyright */}
      <div className="text-white text-xs sm:text-sm z-10">© 2025</div>

      {/* Right: info + social icons */}
      <div className="flex items-center gap-2 sm:gap-3 z-10">
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full transition-colors duration-300  hover:bg-gray-500/10 rounded-bl-full"
        >
          {open ? <FaTimes className="text-white text-lg sm:text-xl" /> : <FaInfoCircle className="text-white text-lg sm:text-xl hover:text-gray-600 hover:bg-white rounded-full" />}
        </button>

        {open && (
          <div className="flex gap-2 sm:gap-3">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors duration-300 hover:bg-gray-500/10 "
              >
                <s.icon className="text-white hover:animate-bounce text-base sm:text-xl" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
