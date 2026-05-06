"use client";

import { BlurFade } from "@repo/design-system/components/ui/blur-fade";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const printers = [
  {
    slug: "perivallo360",
    title: "Perivallo360",
    tagline: "Flagship direct-to-object rotary.",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&auto=format&fit=crop&q=80",
    logo: "/logos/perivallo360-logo.png",
  },
  {
    slug: "perivallo360m",
    title: "Perivallo360m",
    tagline: "Multi-format production.",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&auto=format&fit=crop&q=80",
    logo: "/logos/product-logos.png",
  },
  {
    slug: "periq360",
    title: "PeriQ360",
    tagline: "High-quality 360° cylindrical.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
    logo: "/logos/product-logos.png",
  },
  {
    slug: "perijet360s",
    title: "PeriJet360s",
    tagline: "High-speed inline inkjet.",
    image: "https://images.unsplash.com/photo-1568209865332-a15790aed756?w=600&auto=format&fit=crop&q=80",
    logo: "/logos/product-logos.png",
  },
];

export const PrinterHighlights = () => {
  return (
    <section className="w-full py-24 lg:py-32">
      <div className="container mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="mb-16 max-w-xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Our Printers
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Direct-To-Object<br />
              <span className="text-muted-foreground">Printing Lineup.</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Purpose-built digital printers for cylindrical, tapered, and flat objects.
              From entry-level to full production speed.
            </p>
          </div>
        </BlurFade>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {printers.map((printer, idx) => (
            <BlurFade key={printer.slug} delay={0.2 + idx * 0.1} inView>
              <Link
                href={`/products/${printer.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="aspect-4/3 overflow-hidden bg-muted">
                  <img
                    src={printer.image}
                    alt={printer.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <img
                    src={printer.logo}
                    alt={`${printer.title} logo`}
                    className="mb-3 h-6 w-auto object-contain object-left"
                  />
                  <h3 className="font-bold tracking-tight">{printer.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{printer.tagline}</p>
                  <div className="mt-auto flex items-center gap-1 pt-4 text-xs font-medium text-accent">
                    View Details
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};
