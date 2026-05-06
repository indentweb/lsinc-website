import { cn } from '@repo/design-system/lib/utils';
import { Inter } from 'next/font/google';
import { GeistMono } from 'geist/font/mono';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const fonts = cn(
  inter.variable,
  GeistMono.variable,
  'touch-manipulation font-sans antialiased'
);

export const fontHeading = 'font-sans font-bold tracking-tight';
export const fontBody = 'font-sans font-normal leading-relaxed';
