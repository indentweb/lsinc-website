import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { Clients } from "./components/clients";
import { CTA } from "./components/cta";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Stats } from "./components/stats";
import { Trust } from "./components/trust";

export const metadata: Metadata = createMetadata({
  title: "LSINC | Engineering Solutions & Digital Printing",
  description:
    "Precision engineering, OEM specialty printers, and contract manufacturing. ISO 9001:2015 certified. From concept to production — LSINC delivers.",
});

const Home = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <Stats />
      <Trust />
      <CTA />
    </>
  );
};

export default Home;
