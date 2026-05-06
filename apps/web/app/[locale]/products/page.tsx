import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { printers } from "@/lib/printers";
import { ArrowRight } from "lucide-react";
import { Button } from "@repo/design-system/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: "Direct-To-Object Printers | LSINC",
  description: "Explore LSINC's complete lineup of direct-to-object digital printers — from entry-level to high-speed production systems.",
});

export default function ProductsPage() {
  return (
    <>
      {/* Products hero — dark, product-focused */}
      <section className="relative w-full overflow-hidden border-b bg-[#0E1418] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(60,180,228,0.18),transparent_50%)]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 size-[500px] rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative mx-auto grid gap-12 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur">
              <span className="size-1.5 rounded-full bg-accent" />
              Direct-to-Object Lineup
            </div>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Print on <span className="text-accent">anything.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/70 leading-relaxed lg:text-lg">
              Purpose-built digital printing systems for cylindrical, tapered, and flat objects.
              Four production-ready platforms, engineered and assembled in Huntsville, AL.
            </p>
            <div className="mt-10 grid grid-cols-4 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5">
              {["Perivallo360", "Perivallo360m", "PeriQ360", "PeriJet360s"].map((name) => (
                <div key={name} className="bg-[#0E1418] px-3 py-3 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-accent">{name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl bg-white p-8 shadow-2xl shadow-black/40 lg:p-10">
              <img
                src="/logos/product-logos.png"
                alt="LSINC Printer Lineup"
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[28px] bg-linear-to-br from-accent/40 via-transparent to-transparent blur-2xl" />
          </div>
        </div>
      </section>

      <section className="w-full py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="grid gap-8 sm:grid-cols-2">
            {printers.map((printer) => (
              <Link
                key={printer.slug}
                href={`/products/${printer.slug}`}
                className="group relative overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={printer.image}
                    alt={printer.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <img
                    src={printer.logo}
                    alt={`${printer.title} logo`}
                    className="mb-3 h-8 w-auto object-contain object-left"
                  />
                  <h2 className="text-xl font-bold tracking-tight">{printer.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{printer.tagline}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {printer.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent">
                    View Details
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border bg-muted/30 p-8 text-center md:p-12">
            <h3 className="text-xl font-bold">Don&apos;t see what you need?</h3>
            <p className="mt-2 text-muted-foreground">
              LSINC builds custom printing solutions tailored to your specific application.
            </p>
            <Button asChild className="mt-6">
              <Link href="/contact">
                Request Custom Solution <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
