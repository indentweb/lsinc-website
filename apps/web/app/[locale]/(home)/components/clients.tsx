"use client";

import { BlurFade } from "@repo/design-system/components/ui/blur-fade";
import { Marquee } from "@repo/design-system/components/ui/marquee";

const industries = [
  "Defense & Aerospace",
  "Medical Devices",
  "Industrial Automation",
  "Digital Printing",
  "Semiconductor",
  "Beverage Packaging",
  "Consumer Electronics",
  "Specialty Manufacturing",
];

export const Clients = () => {
  return (
    <section className="w-full border-t bg-muted/20 py-10">
      <BlurFade delay={0.1} inView>
        <div className="container mx-auto mb-6 flex items-center gap-4">
          <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Trusted across
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>
      </BlurFade>
      <Marquee pauseOnHover className="[--duration:45s] [--gap:3rem]">
        {industries.map((name) => (
          <span
            key={name}
            className="whitespace-nowrap text-sm font-medium text-muted-foreground/70 transition-colors hover:text-foreground"
          >
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  );
};
