import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Capabilities | LSINC",
  description:
    "Engineering & product development, OEM specialty printers, and contract manufacturing. Explore LSINC's full-spectrum capabilities.",
});

export default function CapabilitiesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
