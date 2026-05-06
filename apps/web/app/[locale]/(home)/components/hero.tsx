"use client";

import { ShimmerButton } from "@repo/design-system/components/ui/shimmer-button";
import { BlurFade } from "@repo/design-system/components/ui/blur-fade";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@repo/design-system/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden border-b">
      <div className="container relative z-10 mx-auto">
        <div className="flex min-h-[85vh] flex-col justify-center py-20 lg:py-28">
          <BlurFade delay={0.05} inView>
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-12 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Est. 2008 · Huntsville, AL
              </span>
            </div>
          </BlurFade>

          <BlurFade delay={0.15} inView>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl xl:text-8xl">
              Ideas to{" "}
              <span className="text-accent">Reality.</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <p className="mt-6 max-w-lg text-base text-muted-foreground leading-relaxed lg:text-lg">
              We engineer precision products, build custom digital printers,
              and manufacture at scale — so you can focus on what&apos;s next.
            </p>
          </BlurFade>

          <BlurFade delay={0.35} inView>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact">
                <ShimmerButton
                  shimmerColor="#ffffff"
                  shimmerSize="0.05em"
                  background="oklch(0.25 0.06 250)"
                  borderRadius="8px"
                  className="px-7 py-3.5 text-sm font-semibold"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 size-4" />
                </ShimmerButton>
              </Link>
              <Button asChild variant="ghost" size="lg" className="text-muted-foreground">
                <Link href="/capabilities">
                  See what we build →
                </Link>
              </Button>
            </div>
          </BlurFade>

          <BlurFade delay={0.45} inView>
            <div className="mt-16 flex gap-10 border-t pt-8">
              <div>
                <div className="text-2xl font-bold tracking-tight">500+</div>
                <div className="text-xs text-muted-foreground">Products shipped</div>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight">17yr</div>
                <div className="text-xs text-muted-foreground">Printing expertise</div>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight">ISO</div>
                <div className="text-xs text-muted-foreground">9001:2015 certified</div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 z-0 select-none overflow-hidden whitespace-nowrap text-[12vw] font-black leading-none tracking-tighter text-muted/30">
        ENGINEERING
      </div>
    </section>
  );
};
