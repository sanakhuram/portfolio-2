"use client";

import React, { useState, useEffect } from "react";

interface DotsBackgroundProps {
  count?: number;
}

const DotsBackground: React.FC<DotsBackgroundProps> = ({ count = 500 }) => {
  const [dots, setDots] = useState<
    { id: number; top: number; left: number; size: number; opacity: number }[]
  >([]);

  useEffect(() => {
    const generatedDots = Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setDots(generatedDots);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map(dot => (
        <div
          key={dot.id}
          className="bg-white rounded-full absolute"
          style={{
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            opacity: dot.opacity,
            mixBlendMode: "soft-light",
          }}
        />
      ))}
    </div>
  );
};

export default DotsBackground;
