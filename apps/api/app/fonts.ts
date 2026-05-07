import { fontBase } from "@repo/design-system/lib/fonts";
import { cn } from "@repo/design-system/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const fonts = cn(inter.variable, fontBase);
