import { Instrument_Serif, Roboto } from 'next/font/google';

export const headingFont = Instrument_Serif({
  subsets: ['latin'],
  weight: '400', // use a single string
  variable: '--font-heading',
});

export const bodyFont = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});
