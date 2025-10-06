import { Yanone_Kaffeesatz } from 'next/font/google';

export const headingFont = Yanone_Kaffeesatz({
  subsets: ['latin'], // only Latin characters
  weight: ['400', '700'], // regular and bold for headings
  variable: '--font-heading',
});

export const bodyFont = Yanone_Kaffeesatz({
  subsets: ['latin'], // only Latin characters
  weight: ['400', '700'], // only regular for body
  variable: '--font-body',
});
