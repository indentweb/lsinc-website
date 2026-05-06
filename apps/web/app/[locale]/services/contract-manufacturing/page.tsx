import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { ArrowRight, Cable, CheckCircle2, CircuitBoard, Factory, Wrench } from "lucide-react";
import { Button } from "@repo/design-system/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: "Contract Manufacturing | LSINC",
  description: "ISO 9001:2015 certified contract manufacturing — PCB assembly, cable harness, box build, and electromechanical integration.",
});

const capabilities = [
  { icon: CircuitBoard, title: "PCB Assembly", desc: "SMT and through-hole assembly with automated optical and X-ray inspection." },
  { icon: Cable, title: "Cable & Harness", desc: "Custom cable assemblies and wire harnesses built to IPC/WHMA-A-620 standards." },
  { icon: Factory, title: "Box Build & Integration", desc: "Full electromechanical assembly, functional testing, and packaging." },
  { icon: Wrench, title: "Quality Programs", desc: "ISO 9001:2015 processes with full traceability, inspection, and documentation." },
];

const benefits = [
  "ISO 9001:2015 certified quality management system",
  "Full traceability from component to finished assembly",
  "Prototype through volume production capability",
  "In-house test development and fixturing",
  "Kitting, warehousing, and fulfillment services",
  "Engineering support for DFM/DFA optimization",
];

export default function ContractManufacturingPage() {
  return (
    <>
      <section className="w-full border-b bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-accent/10 p-3">
              <Factory className="size-6 text-accent" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Contract Manufacturing</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              ISO-certified production for electromechanical assemblies. From prototype
              builds through full production runs, we deliver quality at scale.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="mb-16 grid gap-6 sm:grid-cols-2">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="rounded-2xl border bg-card p-8">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="size-5 text-accent" />
                  </div>
                  <h3 className="font-bold">{cap.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">Why LSINC Manufacturing?</h2>
              <div className="flex flex-col gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                    <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-muted">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80"
                alt="Manufacturing facility"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-t py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Start a manufacturing project</h2>
          <p className="mt-3 text-muted-foreground">Get a quote for your next production run.</p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/contact">
              Get a Quote <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
