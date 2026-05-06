import { cn } from '@repo/design-system/lib/utils';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

export const fonts = cn(
  GeistSans.variable,
  GeistMono.variable,
  'touch-manipulation font-sans antialiased'
);

export const fontHeading = 'font-sans font-bold tracking-tight';
export const fontBody = 'font-sans font-normal leading-relaxed';
