"use client";

import { BlurFade } from "@repo/design-system/components/ui/blur-fade";
import { HyperText } from "@repo/design-system/components/ui/hyper-text";

export const Trust = () => {
  return (
    <section className="w-full border-t py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Big statement */}
          <BlurFade delay={0.1} inView>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-accent" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Why Us
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                We don&apos;t just build products.
                <span className="text-muted-foreground"> We become your engineering team.</span>
              </h2>
              <p className="max-w-md text-muted-foreground leading-relaxed">
                Most contract manufacturers take your design and build it. We
                start earlier — collaborating from day one to ensure what we
                build is optimized for production, quality, and cost.
              </p>
            </div>
          </BlurFade>

          {/* Right: Credential blocks */}
          <div className="flex flex-col gap-6">
            <BlurFade delay={0.2} inView>
              <div className="rounded-xl border-l-4 border-accent bg-muted/50 p-6">
                <HyperText
                  as="h3"
                  startOnView
                  animateOnHover
                  className="mb-1 text-lg font-bold tracking-tight"
                  duration={600}
                >
                  ISO 9001:2015
                </HyperText>
                <p className="text-sm text-muted-foreground">
                  Certified quality management. Every process documented,
                  every output traceable.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <div className="rounded-xl border-l-4 border-accent/70 bg-muted/50 p-6">
                <HyperText
                  as="h3"
                  startOnView
                  animateOnHover
                  className="mb-1 text-lg font-bold tracking-tight"
                  duration={600}
                  delay={200}
                >
                  WOMAN-OWNED
                </HyperText>
                <p className="text-sm text-muted-foreground">
                  WOSB certified. Diverse leadership driving innovation since
                  2008.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <div className="rounded-xl border-l-4 border-accent/50 bg-muted/50 p-6">
                <HyperText
                  as="h3"
                  startOnView
                  animateOnHover
                  className="mb-1 text-lg font-bold tracking-tight"
                  duration={600}
                  delay={400}
                >
                  ITAR REGISTERED
                </HyperText>
                <p className="text-sm text-muted-foreground">
                  Cleared for defense work. Classified capabilities for
                  aerospace & military programs.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.5} inView>
              <div className="rounded-xl border-l-4 border-accent/30 bg-muted/50 p-6">
                <HyperText
                  as="h3"
                  startOnView
                  animateOnHover
                  className="mb-1 text-lg font-bold tracking-tight"
                  duration={600}
                  delay={600}
                >
                  100% U.S. BASED
                </HyperText>
                <p className="text-sm text-muted-foreground">
                  Engineering, manufacturing, and support — all from our
                  Huntsville, AL facility.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
};
