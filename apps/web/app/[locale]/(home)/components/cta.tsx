"use client";

import { ShimmerButton } from "@repo/design-system/components/ui/shimmer-button";
import { BlurFade } from "@repo/design-system/components/ui/blur-fade";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const CTA = () => {
  return (
    <section className="w-full border-t py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl border bg-muted/30 px-8 py-20 md:px-16 md:py-28">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <BlurFade delay={0.1} inView>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                Let&apos;s talk
              </p>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Your next product<br />starts here.
              </h2>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <p className="mx-auto mt-5 max-w-md text-muted-foreground">
                Whether it&apos;s a custom printer, a new product line, or scaling
                production — we&apos;ll find the right path together.
              </p>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact">
                  <ShimmerButton
                    shimmerColor="#ffffff"
                    shimmerSize="0.05em"
                    background="oklch(0.25 0.06 250)"
                    borderRadius="8px"
                    className="px-8 py-3.5 text-sm font-bold"
                  >
                    Request a Quote
                    <ArrowRight className="ml-2 size-4" />
                  </ShimmerButton>
                </Link>
                <a
                  href="tel:+12567214011"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  or call (256) 721-4011
                </a>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
};
