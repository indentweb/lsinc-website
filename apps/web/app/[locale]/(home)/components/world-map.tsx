"use client";

import { BlurFade } from "@repo/design-system/components/ui/blur-fade";
import { GlobeCdn } from "@repo/design-system/components/ui/cobe-globe-cdn";

export const WorldMap = () => {
  return (
    <section className="w-full border-t bg-white py-24 lg:py-32">
      <div className="container mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Global Reach
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Shipping Worldwide
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              LSINC printers and solutions are deployed across six continents,
              serving customers in over 30 countries.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <div className="mx-auto max-w-lg">
            <GlobeCdn />
          </div>
        </BlurFade>
      </div>
    </section>
  );
};
