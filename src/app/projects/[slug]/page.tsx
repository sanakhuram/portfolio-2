"use client";

import Image from "next/image";
import { use } from "react";
import { useRouter } from "next/navigation"; 
import { projects, Project } from "@/utils/projectData";
import { headingFont } from "../../lib/fonts";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub, SiJavascript, SiTailwindcss, SiVite, SiReact, SiNextdotjs, SiHtml5, SiJest } from "react-icons/si";
import { JSX } from "react";

type ProjectParams = { slug: string };

const techIcons: Record<string, JSX.Element> = {
  JavaScript: <SiJavascript className="w-5 h-5 text-yellow-400" />,
  React: <SiReact className="w-5 h-5 text-blue-400" />,
  NextJS: <SiNextdotjs className="w-5 h-5 text-black" />,
  Tailwind: <SiTailwindcss className="w-5 h-5 text-teal-400" />,
  Vite: <SiVite className="w-5 h-5 text-purple-400" />,
  HTML: <SiHtml5 className="w-5 h-5 text-orange-500" />,
  Jest: <SiJest className="w-5 h-5 text-red-500" />,
  API: <span className="w-5 h-5 text-gray-600 font-bold text-xs">API</span>,
};

export default function ProjectArticle({ params }: { params: Promise<ProjectParams> }) {
  const { slug } = use(params);
  const router = useRouter(); 

  const project: Project | undefined = projects.find((p) => p.slug === slug);
  if (!project)
    return <p className="text-center mt-20 text-red-600">Project not found.</p>;

  const displayImage = project.detailImageUrl ?? project.imageUrl;

  return (
    
    <div className="min-h-screen px-6 md:px-12 py-12 text-gray-900 flex flex-col items-center" style={{ backgroundColor: "#D9D9D9" }}>
      
      <div className="w-full max-w-6xl p-6 md:p-12 flex flex-col lg:flex-row gap-8" style={{ backgroundColor: "#D9D9D9" }}>
        {/* Left: Project Image inside monitor frame */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="relative w-full h-96 md:h-[500px] mb-4">
            <div className="absolute inset-0 bg-no-repeat bg-center bg-contain rounded-lg overflow-hidden" style={{ backgroundImage: "url('/images/monitor-frame.png')" }} />
            <div className="absolute top-[10%] left-[5%] w-[90%] h-[80%] rounded-md overflow-hidden">
              <Image src={displayImage} alt={project.title} fill className="object-cover rounded-md" priority />
            </div>
          </div>
        </div>

        {/* Right: Project Info */}
        <div className="flex-1 flex flex-col justify-start gap-3">
          <h3 className="text-xs md:text-sm text-gray-500 font-medium">PROJECT</h3>
          <h2 className={`${headingFont.variable} text-2xl md:text-3xl text-gray-700 font-bold`}>
            {project.title}
          </h2>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap gap-2 mt-1">
            {project.techStack.map((tech) => (
              <div key={tech} className="flex items-center justify-center w-8 h-8 rounded-full">
                {techIcons[tech]}
              </div>
            ))}
          </div>

          {/* Detailed Description */}
          <div className="text-gray-700 text-xs md:text-sm flex flex-col gap-3 overflow-y-auto max-h-[500px] mt-1">
            {project.detailedDescription.split("\n").map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          {/* Live & GitHub Links */}
          <div className="flex gap-3 mt-3">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-800 text-white px-3 py-1.5 rounded-lg hover:bg-gray-900 transition text-sm">
              <FiExternalLink /> Live Site
            </a>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-800 text-white px-3 py-1.5 rounded-lg hover:bg-gray-900 transition text-sm">
              <SiGithub /> GitHub
            </a>
          </div>
                <button onClick={() => router.back()} className="mt-6 text-sm text-gray-600 hover:underline">
        &larr; Back to Projects
      </button>
        </div>
      </div>
    </div>
  );
}
