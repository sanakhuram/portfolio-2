"use client";

import { AnimatePresence, motion } from "framer-motion";
import { sections, fadeSlide } from "@/utils/SectionData";
import Nav from "@/components/SectionNav";
import Footer from "@/components/SectionFooter";
import { useSectionNavigator } from "@/hooks/useSectionNavigator";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import AwardsSection from "@/components/AwardsSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";

export default function Portfolio() {
  const { index, setIndex } = useSectionNavigator(sections.length);

  const renderSection = () => {
    switch (sections[index].id) {
      case "home":
        return <HeroSection key="hero" />;
      case "about":
        return <AboutSection key="about" />;
      case "projects":
        return <ProjectsSection key="projects" />;
      case "awards":
        return <AwardsSection key="awards" />;
      case "skills":
        return <TechStackSection key="skills" />;
      case "contact":
        return <ContactSection key="contact" />;
      default:
        return null;
    }
  };

  return (
    <div
      className="relative w-screen transition-colors duration-500"
      style={{
        backgroundColor: sections[index].bg,
        minHeight: "100vh",                 
      }}
    >
      <Nav currentIndex={index} onSelect={setIndex} />

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

      <Footer />
    </div>
  );
}
