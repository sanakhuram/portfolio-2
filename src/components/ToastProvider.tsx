'use client';

import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        style: {
          background: '#333',
          color: '#fff',
          maxWidth: '90vw',
          padding: '0.4rem 0.75rem',
          fontSize: '0.85rem',
          borderRadius: '0.5rem',
        },
        success: { icon: '🐱', duration: 1500 },
        error: { duration: 2000 },
      }}
    />
  );
}
