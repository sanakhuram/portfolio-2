'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiInfo, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { projects, Project } from '@/utils/projectData';
import { headingFont, bodyFont } from '../app/lib/fonts';

type ProjectsSectionProps = { bg?: string };

export default function ProjectsSection({ bg = '' }: ProjectsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  const router = useRouter();

  return (
    <section
      id="projects"
      className={`w-full min-h-screen flex flex-col items-center justify-center ${bg} py-12 px-4`}
    >
      <h2
        className={`${headingFont.variable} text-2xl md:text-3xl font-extrabold mb-8 text-center text-white`}
      >
        Projects
      </h2>

      <motion.div
        layout
        className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 w-full max-w-6xl mb-6 justify-items-center"
      >
        <AnimatePresence>
          {displayedProjects.map((project: Project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="group relative flex flex-col items-start bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden p-3 cursor-pointer w-full max-w-[250px]"
              onClick={() => router.push(`/projects/${project.slug}`)}
            >
              {/* Image */}
              <div className="relative w-full h-48 mb-3 border-2 border-gray-200 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transform transition-transform duration-300 group-hover:scale-95"
                  sizes="(max-width: 768px) 100vw, 250px"
                />
              </div>

              {/* Title + Info Icon */}
              <div className="flex items-center justify-between w-full mb-1">
                <h3 className={`${headingFont.variable} text-gray-600 md:text-lg font-bold`}>
                  {project.title}
                </h3>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-500 rounded-full transition-colors duration-200 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/projects/${project.slug}`);
                  }}
                  title="More info"
                >
                  <FiInfo />
                </motion.div>
              </div>

              {/* Description */}
              <p className={`${bodyFont.variable} text-gray-700 text-xs md:text-sm`}>
                {project.description}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Toggle Button */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-6 flex items-center mb-10 gap-2 text-sm md:text-base font-semibold text-white underline hover:text-gray-600 transition-colors"
      >
        {showAll ? 'Show Less' : 'See All Projects'}
        {showAll ? <FiChevronUp /> : <FiChevronDown />}
      </button>
    </section>
  );
}
