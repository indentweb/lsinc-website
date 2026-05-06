import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { VideoHero } from "./components/video-hero";
import { Clients } from "./components/clients";
import { PrinterHighlights } from "./components/printer-highlights";
import { Trust } from "./components/trust";
import { PressHighlights } from "./components/press-highlights";
import { CTA } from "./components/cta";

export const metadata: Metadata = createMetadata({
  title: "LSINC | Engineering Solutions & Digital Printing",
  description:
    "Precision engineering, OEM specialty printers, and contract manufacturing. ISO 9001:2015 certified. From concept to production — LSINC delivers.",
});

const Home = () => {
  return (
    <>
      <VideoHero />
      <Clients />
      <PrinterHighlights />
      <Trust />
      <PressHighlights />
      <CTA />
    </>
  );
};

export default Home;
