import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/header/header';
import { Footer } from '@/components/footer';
import React from 'react';
import darkLogo from '/public/logo/png/300ppi/icon-dark.png'; // Adjusted for client's branding
import lightLogo from '/public/logo/png/300ppi/icon-light.png';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'react-hot-toast';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mel P Rentals | Comfortable & Stylish Short-Stay Accommodations',
  description:
    'Mel P Rentals provides exceptional short-stay accommodations, blending comfort, convenience, and style. Discover our premium properties, perfect for business professionals and leisure travelers alike.',
  icons: {
    icon: [
      {
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
        url: lightLogo.src,
        href: lightLogo.src,
      },
      {
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
        url: darkLogo.src,
        href: darkLogo.src,
      },
    ],
    apple: lightLogo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <header>
          <Navbar />
        </header>
        <main>
          <Toaster position="bottom-center" />
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
