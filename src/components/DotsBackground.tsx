'use client';

import React, { useState, useEffect } from 'react';

interface DotsBackgroundProps {
  count?: number; // Number of dots
}

const DotsBackground: React.FC<DotsBackgroundProps> = ({ count = 2000 }) => {
  const [dots, setDots] = useState<
    { id: number; top: number; left: number; size: number; opacity: number }[]
  >([]);

  useEffect(() => {
    const generatedDots = Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 100, // position in %
      left: Math.random() * 100, // position in %
      size: Math.random() * 2 + 1, // 1px to 3px
      opacity: Math.random() * 0.3 + 0.1, // 0.1 to 0.4
    }));
    setDots(generatedDots);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="bg-gray-200 rounded-full absolute"
          style={{
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            opacity: dot.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default DotsBackground;
