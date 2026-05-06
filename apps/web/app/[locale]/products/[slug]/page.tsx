import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { printers, getPrinterBySlug } from "@/lib/printers";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@repo/design-system/components/ui/button";
import Link from "next/link";

export function generateStaticParams() {
  return printers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const printer = getPrinterBySlug(slug);
  if (!printer) return {};
  return createMetadata({
    title: `${printer.title} | LSINC Direct-To-Object Printers`,
    description: printer.description,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const printer = getPrinterBySlug(slug);
  if (!printer) notFound();

  return (
    <>
      {/* Hero */}
      <section className="w-full border-b">
        <div className="container mx-auto grid gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col justify-center">
            <img
              src={printer.logo}
              alt={`${printer.title} logo`}
              className="mb-6 h-12 w-auto object-contain object-left"
            />
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Direct-To-Object Printer
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {printer.title}
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">{printer.tagline}</p>
            <p className="mt-6 text-muted-foreground leading-relaxed">{printer.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Request a Demo <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Request Specs</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-muted">
            <img src={printer.image} alt={printer.title} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Video placeholder */}
      <section className="w-full bg-[#111] py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-2xl font-bold text-white">See the {printer.title} in Action</h2>
          <div className="mx-auto flex aspect-video max-w-4xl items-center justify-center overflow-hidden rounded-2xl bg-zinc-800">
            <div className="text-center text-zinc-500">
              <div className="mb-2 text-4xl">▶</div>
              <p className="text-sm">Video placeholder — swap with product video URL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specs & Features */}
      <section className="w-full py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-2xl font-bold tracking-tight">Key Specifications</h2>
              <div className="divide-y rounded-xl border">
                {printer.specs.map((spec) => (
                  <div key={spec.label} className="flex items-center justify-between px-5 py-3.5">
                    <span className="text-sm text-muted-foreground">{spec.label}</span>
                    <span className="text-sm font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-8 text-2xl font-bold tracking-tight">Features</h2>
              <div className="flex flex-col gap-4">
                {printer.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="w-full border-t bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">Print Gallery</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {printer.gallery.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl">
                <img
                  src={img}
                  alt={`${printer.title} print sample ${i + 1}`}
                  className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full border-t py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Ready to see the {printer.title} in your facility?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Schedule a demo or request detailed specifications from our team.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Request Info <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/products">View All Printers</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
