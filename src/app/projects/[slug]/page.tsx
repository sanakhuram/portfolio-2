'use client';

import Image from 'next/image';
import { JSX, use } from 'react';
import { useRouter } from 'next/navigation';
import { projects} from '@/utils/projectData';
import { headingFont, bodyFont } from '../../lib/fonts';
import { FiExternalLink, FiChevronLeft, FiChevronRight, FiCopy } from 'react-icons/fi';
import { SiGithub, SiJavascript, SiTailwindcss, SiVite, SiReact, SiNextdotjs, SiHtml5, SiJest } from 'react-icons/si';
import { useState } from 'react';
import toast from 'react-hot-toast';



const techIcons: Record<string, JSX.Element> = {
  JavaScript: <SiJavascript className="w-6 h-6 text-yellow-400" />,
  TypeScript: <span className="w-6 h-6 text-blue-600 font-bold text-sm">TS</span>,
  React: <SiReact className="w-6 h-6 text-blue-400" />,
  NextJS: <SiNextdotjs className="w-6 h-6 text-black" />,
  Tailwind: <SiTailwindcss className="w-6 h-6 text-teal-400" />,
  Vite: <SiVite className="w-6 h-6 text-purple-400" />,
  HTML: <SiHtml5 className="w-6 h-6 text-orange-500" />,
  CSS: <span className="w-6 h-6 text-blue-500 font-bold text-sm">CSS</span>,
  API: <span className="w-6 h-6 text-gray-600 font-bold text-sm">API</span>,
  Jest: <SiJest className="w-6 h-6 text-red-500" />,
};

export default function ProjectArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();

  const initialIndex = projects.findIndex(p => p.slug === slug);
  const [currentIndex, setCurrentIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
  const project = projects[currentIndex];

  if (!project) return <p className="text-center mt-20 text-red-600">Project not found.</p>;

  const displayImage = project.detailImageUrl ?? project.imageUrl;

  const prevProject = () => setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  const nextProject = () => setCurrentIndex((currentIndex + 1) % projects.length);

const handleCopyLink = () => {
  navigator.clipboard.writeText(window.location.href);
  toast.success('Project link copied!');
};

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200 p-4 relative">

      {/* Monitor Frame */}
      <div className="relative w-full max-w-7xl bg-gray-100 rounded-2xl shadow-xl overflow-hidden">

        {/* Close Button (X) */}
        <button
          onClick={() => router.back()}
          className="absolute right-2 w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-600 text-3xl font-bold transition-colors duration-300 hover:bg-gray-400 hover:text-white z-50"
          aria-label="Close Project"
        >
          ×
        </button>

        {/* Top Bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-300">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        {/* Screen Area */}
        <div className="flex flex-col lg:flex-row bg-white p-4 md:p-6 gap-6">
          {/* Left: Project Image */}
          <div className="lg:flex-1 flex justify-center items-center">
            <Image
              src={displayImage}
              alt={project.title}
              width={800}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right: Description & Info */}
          <div className="lg:flex-1 flex flex-col justify-between gap-4">
            <div>
              <h3 className={`${bodyFont.variable} text-lg text-gray-500 font-medium`}>PROJECT</h3>

              {/* Title + Copy Link */}
              <div className="flex items-center gap-2">
                <h2 className={`${headingFont.variable} text-3xl sm:text-4xl font-bold text-gray-800 my-2`}>
                  {project.title}
                </h2>
                <button
                  onClick={handleCopyLink}
                  className="p-2 rounded-md hover:bg-gray-200 transition"
                  title="Copy project link"
                >
                  <FiCopy className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Description */}
              <div className={`${bodyFont.variable} text-base sm:text-lg md:text-xl space-y-3 max-h-[400px] overflow-y-auto pr-2 text-gray-700`}>
                <h3 className="font-semibold text-gray-600 text-lg">ABOUT</h3>
                {project.detailedDescription.split('\n').map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full shadow-sm"
                  >
                    {techIcons[tech]}
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${bodyFont.variable} inline-flex items-center justify-center gap-1 px-4 py-2 rounded-md bg-gray-600 text-white text-sm font-semibold`}
              >
                <FiExternalLink className="w-5 h-5" /> LAUNCH
              </a>

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${bodyFont.variable} inline-flex items-center justify-center gap-1 px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-semibold`}
              >
                <SiGithub className="w-5 h-5" /> REPO
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center p-4 border-t border-gray-200">
          <button
            onClick={prevProject}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Previous Project"
          >
            <FiChevronLeft size={28} />
          </button>
          <span className={`${bodyFont.variable} text-base text-gray-500`}>
            {currentIndex + 1}/{projects.length}
          </span>
          <button
            onClick={nextProject}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Next Project"
          >
            <FiChevronRight size={28} />
          </button>
        </div>
      </div>

      {/* Monitor Stand */}
      <div className="flex justify-center">
        <div className="w-32 h-9 bg-gray-400 border-t-2 border-white"></div>
      </div>
      <div className="flex justify-center">
        <div className="w-45 h-2 bg-gray-400 border-b-2 border-white rounded-t-2xl"></div>
      </div>
    </div>
  );
}
