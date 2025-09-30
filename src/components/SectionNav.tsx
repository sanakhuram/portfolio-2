"use client";

import { sections } from "@/utils/SectionData";
import { headingFont } from "../app/lib/fonts";
import { motion } from "framer-motion";

type SimpleNavProps = {
  currentIndex: number;
  onSelect: (index: number) => void;
};

export default function Nav({ currentIndex, onSelect }: SimpleNavProps) {
  const handleSelect = (i: number) => {
    onSelect(i);
    const el = document.getElementById(sections[i].id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ fontFamily: headingFont.variable }}
      className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex flex-nowrap items-center gap-1 text-white text-xs sm:text-sm"
    >
      {sections.map((section, i) => {
        const isActive = i === currentIndex;
        return (
          <span key={section.id} className="flex items-center">
            <button
              onClick={() => handleSelect(i)}
              className={`uppercase transition-transform duration-200 transform hover:-translate-y-1 ${
                isActive ? "underline" : ""
              }`}
            >
              {section.id.replace("-", " ")}
            </button>
            {i < sections.length - 1 && <span className="mx-1">/</span>}
          </span>
        );
      })}
    </motion.nav>
  );
}
