"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type SectionNavArrowsProps = {
  onPrev: () => void;
  onNext: () => void;
};

export default function SectionNavArrows({ onPrev, onNext }: SectionNavArrowsProps) {
  return (
    <div className="absolute inset-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
      <button
        onClick={onPrev}
        className="pointer-events-auto bg-opacity-20 hover:bg-opacity-50 text-white  p-2 "
        aria-label="Previous Section"
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        className="pointer-events-auto bg-opacity-20 hover:bg-opacity-50 text-white "
        aria-label="Next Section"
      >
        <FiChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
