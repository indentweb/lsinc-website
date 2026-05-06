import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, CircuitBoard, Cpu, Layers, Microchip, Monitor, Settings2 } from "lucide-react";
import { Button } from "@repo/design-system/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: "Engineering Services | LSINC",
  description: "Full-lifecycle product development — mechanical, electrical, embedded systems, software, and industrial design.",
});

const disciplines = [
  { icon: Cpu, title: "Mechanical Engineering", desc: "Precision 3D modeling, FEA analysis, and tolerance stack-ups for complex assemblies." },
  { icon: CircuitBoard, title: "Electrical Engineering", desc: "PCB design, power systems, and signal integrity for high-reliability applications." },
  { icon: Microchip, title: "Embedded Systems", desc: "Firmware development, RTOS integration, and hardware-software co-design." },
  { icon: Monitor, title: "Software Development", desc: "Application software, drivers, and GUI development for product interfaces." },
  { icon: Layers, title: "Industrial Design", desc: "Human-centered design, ergonomics, and aesthetics that elevate your brand." },
  { icon: Settings2, title: "DFM/DFA Optimization", desc: "Design for manufacturability and assembly to reduce cost and improve quality." },
];

const benefits = [
  "Multidisciplinary in-house team — no outsourcing delays",
  "500+ products engineered and shipped to market",
  "From early-stage R&D through production release",
  "Defense, medical, industrial, and consumer experience",
  "Integrated with our manufacturing for seamless handoff",
  "IP protection and NDA coverage standard",
];

export default function EngineeringPage() {
  return (
    <>
      <section className="w-full border-b bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-accent/10 p-3">
              <Cpu className="size-6 text-accent" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Engineering Services</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Complete product development from concept through production release.
              Mechanical, electrical, embedded, software, and industrial design — all in-house.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-20 lg:py-28">
        <div className="container mx-auto">
          <h2 className="mb-10 text-2xl font-bold tracking-tight">Our Disciplines</h2>
          <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="rounded-2xl border bg-card p-6">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="size-5 text-accent" />
                  </div>
                  <h3 className="text-sm font-bold">{d.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-muted">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80"
                alt="Engineering team"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-2xl font-bold tracking-tight">Why LSINC Engineering?</h2>
              <div className="flex flex-col gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                    <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-t py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Have an engineering challenge?</h2>
          <p className="mt-3 text-muted-foreground">Let&apos;s discuss your project requirements.</p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/contact">
              Discuss Your Project <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
