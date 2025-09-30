"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiInfo } from "react-icons/fi";
import { Project, projects } from "@/utils/projectData";
import { headingFont, bodyFont } from "../app/lib/fonts";

type ProjectsSectionProps = {
  bg?: string;
};

export default function ProjectsSection({ bg = "" }: ProjectsSectionProps) {
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

      {/* Grid Container Centered */}
      <div className="flex justify-center w-full mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center w-full max-w-4xl">
          {projects.map((project: Project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative flex flex-col items-start bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden p-3 cursor-pointer w-72"
            >
              <div className="relative w-65 h-45 mb-3 border-3 border-gray-200 rounded-md overflow-hidden self-center">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3
                className={`${headingFont.variable} text-base md:text-lg font-bold mb-1`}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className={`${bodyFont.variable} text-gray-700 text-xs md:text-sm`}
              >
                {project.description}
              </p>

              {/* Info Icon at bottom-right */}
              <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 text-base pt-5 group-hover:text-gray-600 transition-colors duration-200">
                <FiInfo />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
