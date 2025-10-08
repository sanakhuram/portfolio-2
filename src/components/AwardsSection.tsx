'use client';

import { useState } from 'react';
import { headingFont, bodyFont } from '../app/lib/fonts';

export default function AwardsSection() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20  text-white">
      <div className="flex flex-col items-center text-center max-w-3xl">
        <h2
          className={`${headingFont.variable} text-4xl sm:text-5xl md:text-6xl font-semibold mb-4`}
        >
          Award & Recognition
        </h2>
        <p className={`${bodyFont.variable} text-lg sm:text-xl md:text-2xl leading-relaxed mb-2`}>
          Honored to receive the <span className="font-bold text-yellow-500">Golden Egg Award</span>{' '}
          for Best Student Work in Front-end Development (2025).
        </p>
        <p className={`${bodyFont.variable} text-lg sm:text-xl md:text-2xl leading-relaxed`}>
          This award is a testament to my dedication and passion for creating exceptional digital
          experiences.
        </p>
      </div>

      {/* View/Hide PDF Button */}
      <button
        onClick={() => setShowPdf((prev) => !prev)}
        className="mt-8 px-8 py-3 text-white border-2 border-dotted font-medium rounded-lg hover:shadow-lg transition-all duration-200 text-lg sm:text-xl"
      >
        {showPdf ? 'Hide Diploma' : 'View Diploma'}
      </button>

      {/* PDF Display */}
      {showPdf && (
        <div className="w-full max-w-4xl h-[600px] bg-white rounded-lg shadow-lg overflow-hidden mt-8">
          <iframe
            src="/assets/golden-egg-diplom.pdf"
            title="Golden Egg Diploma"
            className="w-full h-full"
          />
        </div>
      )}
    </section>
  );
}
