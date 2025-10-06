'use client';

import React, { useState, useEffect } from 'react';

interface DotsBackgroundProps {
  count?: number; // Number of dots
}

const DotsBackground: React.FC<DotsBackgroundProps> = ({ count = 1500 }) => {
  const [dots, setDots] = useState<
    { id: number; top: number; left: number; width: number; height: number; opacity: number }[]
  >([]);

  useEffect(() => {
    const generatedDots = Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      width: Math.random() * 2 + 1, 
      height: Math.random() * 2 + 1, 
      opacity: Math.random() * 0.1 + 0.05, 
    }));
    setDots(generatedDots);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="bg-gray-400 rounded-full absolute" // softer gray
          style={{
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            width: `${dot.width}px`,
            height: `${dot.height}px`,
            opacity: dot.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default DotsBackground;
