'use client';
import { motion } from 'framer-motion';
import { fadeSlide } from '@/utils/SectionData';

type SectionProps = {
  id: string;
  content: string;
  color: string;
};

export default function Section({ id, content, color }: SectionProps) {
  return (
    <motion.div
      key={id}
      className={`absolute inset-0 flex items-center justify-center text-6xl font-extrabold text-white ${color}`}
      variants={fadeSlide}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {content}
    </motion.div>
  );
}
