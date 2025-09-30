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
<div className="min-h-screen px-6 md:px-12 py-12 flex items-center justify-center" style={{ backgroundColor: "#D9D9D9" }}>
  <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8">

    {/* Left: Project Image */}
    <div className="flex-1 flex justify-center items-center">
      <div className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-md overflow-hidden">
        <Image
          src={displayImage}
          alt={project.title}
          fill
          className="object-contain rounded-md"
          sizes="100vw"
        />
      </div>
    </div>

    {/* Right: Project Info */}
    <div className="flex-1 flex flex-col justify-start gap-4">
      <h3 className="text-xs md:text-sm text-gray-500 font-medium">PROJECT</h3>
      <h2 className={`${headingFont.variable} text-xl sm:text-2xl md:text-3xl text-gray-700 font-bold`}>
        {project.title}
      </h2>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-2">
        {project.techStack.map((tech) => (
          <div key={tech} className="flex items-center justify-center w-8 h-8 rounded-full">
            {techIcons[tech]}
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="text-gray-700 text-sm flex flex-col gap-3 mt-3 overflow-y-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[500px]">
        {project.detailedDescription.split("\n").map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
{/* Links */}
<div className="flex flex-wrap gap-2 mt-4">
  <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 sm:flex-auto inline-flex items-center justify-center gap-2 bg-gray-800 text-white px-3 py-1.5 rounded-lg hover:bg-gray-900 transition text-sm min-w-[120px]"
  >
    <FiExternalLink /> Live Site
  </a>
  <a
    href={project.repoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 sm:flex-auto inline-flex items-center justify-center gap-2 bg-gray-800 text-white px-3 py-1.5 rounded-lg hover:bg-gray-900 transition text-sm min-w-[120px]"
  >
    <SiGithub /> GitHub
  </a>
</div>

{/* Back button stays intact */}
<button
  onClick={() => router.back()}
  className="mt-6 text-sm text-gray-600 hover:underline"
>
  &larr; Back to Projects
</button>
    </div>
  </div>
</div>

  );
}
