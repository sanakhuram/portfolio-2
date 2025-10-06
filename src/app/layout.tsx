import type { Metadata } from 'next';
import './globals.css';
import { headingFont, bodyFont } from '@/app/lib/fonts';
import ToastProvider from '@/components/ToastProvider';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio site',
    icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${headingFont.variable} ${bodyFont.variable}`} lang="en">
      <body className="antialiased font-body">{children}
        <ToastProvider />
      </body>
    </html>
  );
}
