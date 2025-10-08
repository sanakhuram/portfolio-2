import { Yanone_Kaffeesatz } from 'next/font/google';

export const headingFont = Yanone_Kaffeesatz({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-heading',
});

export const bodyFont = Yanone_Kaffeesatz({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-body',
});
