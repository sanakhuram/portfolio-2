"use client";

import { useState } from "react";
import { headingFont } from "../app/lib/fonts";

export default function AwardsSection() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 bg-yellow-500 text-white">
      <h2 className={`${headingFont.variable} text-4xl font-bold mb-12`}>Awards</h2>

      <h3 className="text-2xl font-semibold mb-2">Golden Egg Award</h3>
      <p className="mb-6 text-lg font-medium">Online Best Student Work 2025</p>

      {/* Toggle Button */}
      <button
        onClick={() => setShowPdf(prev => !prev)}
        className="mt-4 px-8 py-2  text-white border-2 font-bold rounded-lg hove:shadow-lg transition"
      >
        {showPdf ? "Hide " : "View "}
      </button>

      {/* PDF iframe (conditionally rendered) */}
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
