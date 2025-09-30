/* eslint-disable react/no-unescaped-entities */
"use client";

import { headingFont, bodyFont } from "../app/lib/fonts";

export default function ContactSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-20 py-20 bg-teal-400 text-white">
      <div className="relative flex flex-col md:flex-row w-full max-w-5xl bg-teal-500 rounded-lg shadow-lg border-4 border-dotted border-white overflow-hidden p-4 sm:p-6 md:p-8">

        {/* SVG Stamp on Top-Right */}
        <div className="absolute top-2 right-2 w-12 h-12 md:w-20 md:h-20 text-white">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path d="M23.5,3.257V3.2a2.7,2.7,0,0,0-4.923-1.528A2.682,2.682,0,0,0,14.2,1.7a2.683,2.683,0,0,0-4.4,0,2.682,2.682,0,0,0-4.377-.032A2.684,2.684,0,0,0,3.2.5,2.716,2.716,0,0,0,.5,3.257,2.664,2.664,0,0,0,1.617,5.428,2.682,2.682,0,0,0,1.639,9.8a2.694,2.694,0,0,0,0,4.4,2.683,2.683,0,0,0-.021,4.373,2.712,2.712,0,1,0,3.766,3.8h.032a2.678,2.678,0,0,0,4.368,0h.032a2.677,2.677,0,0,0,4.367,0h.033a2.677,2.677,0,0,0,4.367,0h.034A2.692,2.692,0,0,0,23.5,20.744a2.666,2.666,0,0,0-1.117-2.172,2.682,2.682,0,0,0-.022-4.372,2.694,2.694,0,0,0,0-4.4,2.682,2.682,0,0,0,.022-4.372A2.664,2.664,0,0,0,23.5,3.257ZM18,4.5A1.5,1.5,0,0,1,19.5,6V18A1.5,1.5,0,0,1,18,19.5H6A1.5,1.5,0,0,1,4.5,18V6A1.5,1.5,0,0,1,6,4.5Z"/>
            <path d="M12,5.5l-.234.513a1.5,1.5,0,0,0,.156,1.108v.01l.008.006,6.267,1.475a.25.25,0,0,0,.307-.243V6a.5.5,0,0,0-.5-.5Z"/>
            <path d="M11.762,8.126a.25.25,0,0,0-.29.154L9.533,13.321A.5.5,0,0,0,10,14h1v1.5A1.5,1.5,0,0,0,12.5,17h2.25a.25.25,0,0,1,.25.25v1a.25.25,0,0,0,.25.25H18a.5.5,0,0,0,.5-.5V9.91a.251.251,0,0,0-.193-.244ZM14,9.75a.75.75,0,1,1-.75.75A.75.75,0,0,1,14,9.75Z"/>
          </svg>
        </div>

        {/* Left side: Info */}
        <div className="md:w-1/2 flex flex-col items-start justify-center border-b md:border-b-0 md:border-r border-white relative z-10 p-4 sm:p-6">
          <h2 className={`${headingFont.variable} text-2xl sm:text-3xl font-bold mb-2`}>
            Contact Me
          </h2>
          <p className={`${bodyFont.variable} mb-2 text-sm sm:text-base`}>
            If you'd like to make an enquiry, please feel free to get in touch.
          </p>
          <p className={`${bodyFont.variable} mb-2 text-sm sm:text-base`}>
            Email: <strong>your.email@example.com</strong>
          </p>
          <p className={`${bodyFont.variable} text-sm sm:text-base`}>
            Phone: <strong>+123 456 7890</strong>
          </p>
        </div>

        {/* Right side: Form */}
        <div className="md:w-1/2 flex flex-col gap-3 sm:gap-4 relative z-10 p-4 sm:p-6">
          <label className="flex flex-col text-sm sm:text-base font-semibold">
            Name: *
            <input
              type="text"
              placeholder="Your Name"
              className="mt-1 p-2 sm:p-3 rounded-md text-black w-full"
              required
            />
          </label>

          <label className="flex flex-col text-sm sm:text-base font-semibold">
            Email: *
            <input
              type="email"
              placeholder="Your Email"
              className="mt-1 p-2 sm:p-3 rounded-md text-black w-full"
              required
            />
          </label>

          <label className="flex flex-col text-sm sm:text-base font-semibold">
            Message: * (max 1000 characters)
            <textarea
              placeholder="Your Message"
              className="mt-1 p-2 sm:p-3 rounded-md text-black h-24 sm:h-32 resize-none w-full"
              maxLength={1000}
              required
            />
          </label>

          <button className="self-end px-4 sm:px-6 py-2 sm:py-3 text-white font-bold rounded-md hover:bg-gray-700 transition">
            Send →
          </button>
        </div>
      </div>
    </section>
  );
}
