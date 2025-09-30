"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type SectionNavArrowsProps = {
  onPrev: () => void;
  onNext: () => void;
};

export default function SectionNavArrows({ onPrev, onNext }: SectionNavArrowsProps) {
  return (
    <div className="fixed top-1/2 left-0 right-0  justify-between items-center px-2 sm:px-4 z-50 pointer-events-none hidden sm:flex">
      <button
        onClick={onPrev}
        className="pointer-events-auto p-3"
        aria-label="Previous Section"
      >
        <FiChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </button>
      <button
        onClick={onNext}
        className="pointer-events-auto "
        aria-label="Next Section"
      >
        <FiChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </button>
    </div>
  );
}
