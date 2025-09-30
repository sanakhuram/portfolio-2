"use client";

import { sections } from "@/utils/SectionData";
import { headingFont } from "../app/lib/fonts";

type SimpleNavProps = {
  currentIndex: number;
  onSelect: (index: number) => void;
};

export default function Nav({ currentIndex, onSelect }: SimpleNavProps) {
  return (
    <nav
      style={{ fontFamily: headingFont.variable }}
      className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex flex-nowrap items-center gap-1 text-white text-xs sm:text-sm"
    >
      {sections.map((section, i) => {
        const isActive = i === currentIndex;
        return (
          <span key={section.id} className="flex items-center">
            <button
              onClick={() => onSelect(i)}
              className={`uppercase transition-colors duration-200 ${
                isActive ? "underline" : ""
              }`}
            >
              {section.id.replace("-", " ")}
            </button>
            {i < sections.length - 1 && (
              <span className="mx-1">/</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
