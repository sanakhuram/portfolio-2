/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { sections, fadeSlide } from '@/utils/SectionData';
import Nav from '@/components/SectionNav';
import Footer from '@/components/SectionFooter';
import { useSectionNavigator } from '@/hooks/useSectionNavigator';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import AwardsSection from '@/components/AwardsSection';
import TechStackSection from '@/components/TechStackSection';
import ContactSection from '@/components/ContactSection';
import DotsBackground from '@/components/DotsBackground';
import SectionNavArrows from '@/components/SectionNavArrows';
import { useEffect } from 'react';

export default function Portfolio() {
  const { index, setIndex } = useSectionNavigator(sections.length);

  const goToNext = () => setIndex((index + 1) % sections.length);
  const goToPrev = () => setIndex((index - 1 + sections.length) % sections.length);

  // Swipe gestures
  useEffect(() => {
    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      endX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const diff = startX - endX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goToNext();
        else goToPrev();
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [index]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [index]);

  const renderSection = () => {
    switch (sections[index].id) {
      case 'home':
        return <HeroSection key="hero" />;
      case 'about':
        return <AboutSection key="about" />;
      case 'projects':
        return <ProjectsSection key="projects" />;
      case 'awards':
        return <AwardsSection key="awards" />;
      case 'skills':
        return <TechStackSection key="skills" />;
      case 'contact':
        return <ContactSection key="contact" />;
      default:
        return null;
    }
  };

  return (
    <div
      className="relative w-screen transition-colors duration-500 overflow-visible"
      style={{ backgroundColor: sections[index].bg, minHeight: '100vh' }}
    >
      {/* Background dots */}
      <DotsBackground count={150} />

      {/* Section navigation labels */}
      <Nav currentIndex={index} onSelect={setIndex} />

      {/* Animated section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={sections[index].id}
          initial={fadeSlide.initial}
          animate={fadeSlide.animate}
          exit={fadeSlide.exit}
          transition={{ duration: 0.5 }}
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>

      {/* Floating fixed arrows */}
      <SectionNavArrows onPrev={goToPrev} onNext={goToNext} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
