'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { bodyFont } from '../app/lib/fonts';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaCode,
  FaFigma,
  FaPencilRuler,
  FaCogs,
  FaUniversalAccess,
  FaMobileAlt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiVitest,
  SiCanva,
  SiJest,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

// Primary / core tech (highlighted for recruiters)
const mainSkills = [
  {
    name: 'React',
    icon: <FaReact color="#61DAFB" className="w-16 h-16" />,
    description: 'Built interactive UI components and single-page applications.',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript color="#3178C6" className="w-16 h-16" />,
    description: 'Implemented type safety and scalable code.',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs color="#000000" className="w-16 h-16" />,
    description: 'Server-side rendering and routing for projects.',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss color="#06B6D4" className="w-16 h-16" />,
    description: 'Responsive and utility-first styling for websites.',
  },
  {
    name: 'JavaScript',
    icon: <FaJs color="#F7DF1E" className="w-16 h-16" />,
    description: 'Used for dynamic front-end behavior and logic.',
  },
  {
    name: 'Git',
    icon: <FaGitAlt color="#F05032" className="w-16 h-16" />,
    description: 'Version control and collaboration with Git.',
  },
  {
    name: 'Vscode',
    icon: <VscVscode color="#0080FE" className="w-16 h-16" />,
    description: 'IDE used for all coding projects.',
  },
];

// Secondary / additional skills (nice-to-have)
const secondarySkills = [
  {
    name: 'HTML5',
    icon: <FaHtml5 color="#E34F26" className="w-16 h-16" />,
    description: 'Semantic structure and markup for web pages.',
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt color="#1572B6" className="w-16 h-16" />,
    description: 'Styling pages with responsive layouts.',
  },
  {
    name: 'Vite',
    icon: <SiVite color="#646CFF" className="w-16 h-16" />,
    description: 'Fast bundler and development tooling.',
  },
  {
    name: 'Vitest',
    icon: <SiVitest color="#6E9F18" className="w-16 h-16" />,
    description: 'Unit testing framework used in projects.',
  },
  {
    name: 'Jest',
    icon: <SiJest color="#FF6090" className="w-16 h-16" />,
    description: 'JavaScript testing framework used for components.',
  },
  {
    name: 'Playwright',
    icon: <FaCode color="#2EAD33" className="w-16 h-16" />,
    description: 'End-to-end testing automation.',
  },
  {
    name: 'Figma',
    icon: <FaFigma color="#F24E1E" className="w-16 h-16" />,
    description: 'UI/UX design, wireframes, and prototypes.',
  },
  {
    name: 'Canva',
    icon: <SiCanva color="#00C4CC" className="w-16 h-16" />,
    description: 'Quick graphic designs for presentations and assets.',
  },
  {
    name: 'UX/UI Design',
    icon: <FaPencilRuler color="#F59E0B" className="w-16 h-16" />,
    description: 'User interface and experience design for projects.',
  },
  {
    name: 'Design Systems',
    icon: <FaCogs color="#00ADB5" className="w-16 h-16" />,
    description: 'Created reusable UI components and patterns.',
  },
  {
    name: 'Accessibility',
    icon: <FaUniversalAccess color="#10B981" className="w-16 h-16" />,
    description: 'Ensured WCAG compliance for web apps.',
  },
  {
    name: 'Responsive Design',
    icon: <FaMobileAlt color="#3B82F6" className="w-16 h-16" />,
    description: 'Designed layouts for desktop, tablet, and mobile.',
  },
];

export default function TechStackSection() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const skillData = [...mainSkills, ...secondarySkills].find((s) => s.name === selectedSkill);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center relative text-white bg-gray-900 overflow-hidden px-6 md:px-20 py-20">
      {/* Background SVG */}
      <svg
        viewBox="0 0 512 512"
        className="absolute inset-0 w-full h-full opacity-20 text-gray-400"
        fill="currentColor"
      >
        <path d="M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z" />
      </svg>

      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-4xl">
        {/* Display icon and description */}
        {skillData && (
          <motion.div
            key={skillData.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-6 mb-12"
          >
            <motion.div whileHover={{ y: -5, scale: 1.1 }} className="mb-4">
              {skillData.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold">{skillData.name}</h3>
            <p className={`${bodyFont.variable} text-gray-300 max-w-xl`}>{skillData.description}</p>
          </motion.div>
        )}
        {!skillData && (
          <h1 className="text-gray-200/10 mb-12 text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider select-none">
            Skills
          </h1>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {[...mainSkills, ...secondarySkills].map((skill) => (
            <motion.button
              key={skill.name}
              whileHover={{ y: -4, backgroundColor: '#ffffff', color: '#111827' }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className={`px-4 py-2 rounded-md border border-white text-sm font-medium transition-colors ${
                selectedSkill === skill.name ? 'bg-white text-gray-900' : ''
              }`}
              onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
            >
              {skill.name}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
