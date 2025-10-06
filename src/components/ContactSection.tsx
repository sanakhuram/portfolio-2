'use client';

import { headingFont, bodyFont } from '../app/lib/fonts';
import toast from 'react-hot-toast';

export default function ContactSection() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to send message');

      form.reset();
      toast.success('Message sent successfully!');
    } catch (err) {
      console.error(err);
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-20 py-20">
      <div className="relative flex flex-col md:flex-row w-full max-w-6xl rounded-lg shadow-lg border-4 border-dashed border-white overflow-hidden p-6 sm:p-8">
        {/* SVG stamp */}
        <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 text-white">
          {/* SVG content */}
        </div>

        {/* Contact info */}
        <div className="md:w-1/2 flex flex-col items-start justify-center border-b md:border-b-0 md:border-r border-white p-4 sm:p-6">
          <h2 className={`${headingFont.variable} text-4xl sm:text-5xl md:text-6xl text-white font-extrabold mb-4`}>
            Contact Me
          </h2>
          <p className={`${bodyFont.variable} mb-3 text-white text-base sm:text-lg`}>
            I’m open for web development projects, collaborations, and UX/UI design work. Feel free to reach out!
          </p>
          <p className={`${bodyFont.variable} mb-2 text-white text-base sm:text-lg`}>
            Email: <strong>sana.khuram.baig@gmail.com</strong>
          </p>
          <p className={`${bodyFont.variable} text-white text-base sm:text-lg`}>
            Phone: <strong>Currently in Norway</strong>
          </p>
        </div>

        {/* Form */}
        <div className="md:w-1/2 flex flex-col gap-2 sm:gap-3 p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label className={`${bodyFont.variable} flex flex-col text-sm sm:text-base text-white font-semibold`}>
              Name: *
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="mt-1 px-2 py-1 rounded-md text-white placeholder-white border border-white/50 bg-transparent w-70 focus:outline-none focus:border-dashed focus:border-white"
                required
              />
            </label>

            <label className={`${bodyFont.variable} flex flex-col text-sm sm:text-base text-white font-semibold`}>
              Email: *
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="mt-1 px-2 py-1 rounded-md placeholder-white border border-white/50 bg-transparent w-70 focus:outline-none focus:border-dashed focus:border-white"
                required
              />
            </label>

            <label className={`${bodyFont.variable} flex flex-col text-sm sm:text-base text-white font-semibold`}>
              Message: * (max 1000 characters)
              <textarea
                name="message"
                placeholder="Your Message"
                className="mt-1 px-2 py-2 rounded-md text-white placeholder-white border border-white/50 bg-transparent h-24 sm:h-32 resize-none w-full focus:outline-none focus:border-dashed focus:border-white"
                maxLength={1000}
                required
              />
            </label>

            <button
              type="submit"
              className={`${bodyFont.variable} self-end px-4 sm:px-6 py-2 sm:py-3 text-white font-bold rounded-md hover:bg-white/20 transition text-sm sm:text-base`}
            >
              Send →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
