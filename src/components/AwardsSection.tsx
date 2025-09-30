"use client";

import { useState } from "react";
import { headingFont ,bodyFont} from "../app/lib/fonts";

export default function AwardsSection() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 bg-yellow-500 text-white">
      <div className="flex flex-col items-center">
        <div className="mb-8 text-center">
 <h2 className={`${headingFont.variable} text-4xl sm:text-5xl font-extrabold mb-2`}>
  Awards & Recognition
</h2>
<p className={`${bodyFont.variable} text-lg sm:text-xl max-w-2xl`}>
  Honored to receive the Golden Egg Award for Best Student Work in Front-end Development (2025). A testament to my dedication and passion for creating exceptional digital experiences.
</p>
        </div>
        </div>
      <button
        onClick={() => setShowPdf(prev => !prev)}
        className="mt-4 px-8 py-2  text-white border-2 border-dotted font-bold rounded-lg hove:shadow-lg transition"
      >
        {showPdf ? "Hide " : "View "}
      </button>
      {showPdf && (
        <div className="w-full max-w-4xl h-[600px] bg-white rounded-lg shadow-lg overflow-hidden mt-6">
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
