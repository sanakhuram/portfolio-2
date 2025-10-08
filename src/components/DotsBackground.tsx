'use client';

import React, { useState, useEffect } from 'react';

interface DotsBackgroundProps {
  count?: number;
}

const DotsBackground: React.FC<DotsBackgroundProps> = ({ count = 700 }) => {
  const [dots, setDots] = useState<
    { id: number; top: number; left: number; size: number; opacity: number; color: string }[]
  >([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const dotCount = isMobile ? Math.floor(count / 2) : count;

    const generatedDots = Array.from({ length: dotCount }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 2,
      opacity: Math.random() * 0.3 + 0.4,
      color: `rgb(${150 + Math.random() * 50}, ${150 + Math.random() * 50}, ${150 + Math.random() * 50})`,
    }));

    setDots(generatedDots);

    const handleResize = () => {
      const isMobileResize = window.innerWidth < 768;
      const newCount = isMobileResize ? Math.floor(count / 4) : count;
      const newDots = Array.from({ length: newCount }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 2,
        opacity: Math.random() * 0.3 + 0.4,
        color: `rgb(${150 + Math.random() * 50}, ${150 + Math.random() * 50}, ${150 + Math.random() * 50})`,
      }));
      setDots(newDots);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="rounded-full absolute"
          style={{
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            opacity: dot.opacity,
            backgroundColor: dot.color,
          }}
        />
      ))}
    </div>
  );
};

export default DotsBackground;
