"use client";

import { Button } from "@repo/design-system/components/ui/button";
import { MagicCard } from "@repo/design-system/components/ui/magic-card";
import { BlurFade } from "@repo/design-system/components/ui/blur-fade";
import { BorderBeam } from "@repo/design-system/components/ui/border-beam";
import { ShimmerButton } from "@repo/design-system/components/ui/shimmer-button";
import { Separator } from "@repo/design-system/components/ui/separator";
import {
  ArrowRight,
  Cable,
  CheckCircle2,
  CircuitBoard,
  Cog,
  Cpu,
  Factory,
  Layers,
  Microchip,
  Monitor,
  Printer,
  Settings2,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const engineeringCapabilities = [
  { icon: Cpu, title: "Mechanical Engineering", desc: "Precision 3D modeling, FEA analysis, and tolerance stack-ups for complex assemblies." },
  { icon: CircuitBoard, title: "Electrical Engineering", desc: "PCB design, power systems, and signal integrity for high-reliability applications." },
  { icon: Microchip, title: "Embedded Systems", desc: "Firmware development, RTOS integration, and hardware-software co-design." },
  { icon: Monitor, title: "Software Development", desc: "Application software, drivers, and GUI development for product interfaces." },
  { icon: Layers, title: "Industrial Design", desc: "Human-centered design, ergonomics, and aesthetics that elevate your brand." },
  { icon: Settings2, title: "DFM/DFA Optimization", desc: "Design for manufacturability and assembly to reduce cost and improve quality." },
];

const printerCapabilities = [
  { icon: Printer, title: "Custom Print Engines", desc: "Purpose-built inkjet, thermal, and UV printing systems designed to your specs." },
  { icon: Cog, title: "Ink & Fluid Systems", desc: "Precision fluid delivery, recirculation, and management for optimal print quality." },
  { icon: Monitor, title: "Control Software", desc: "RIP software, print drivers, and workflow management applications." },
  { icon: Wrench, title: "Integration Services", desc: "Seamless integration into existing production lines and OEM products." },
];

const manufacturingCapabilities = [
  { icon: CircuitBoard, title: "PCB Assembly", desc: "SMT and through-hole assembly with automated optical and X-ray inspection." },
  { icon: Cable, title: "Cable & Harness", desc: "Custom cable assemblies and wire harnesses built to IPC/WHMA-A-620 standards." },
  { icon: Factory, title: "Box Build & Integration", desc: "Full electromechanical assembly, functional testing, and packaging." },
  { icon: CheckCircle2, title: "Quality Programs", desc: "ISO 9001:2015 processes with full traceability, inspection, and documentation." },
];

export default function CapabilitiesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="w-full border-b bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto text-center">
          <BlurFade delay={0.1} inView>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Our Capabilities
            </p>
            <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
              End-to-End Product Realization
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              From initial concept through volume production, LSINC provides
              integrated engineering, printing, and manufacturing capabilities
              under one roof.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Engineering & Product Development */}
      <section id="engineering" className="w-full scroll-mt-20 py-20 lg:py-28">
        <div className="container mx-auto">
          <BlurFade delay={0.1} inView>
            <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Cpu className="size-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                    Engineering
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Engineering & Product Development
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Our multidisciplinary team delivers complete product development
                  solutions — from early-stage R&D through production release.
                  We&apos;ve engineered 500+ products across defense, medical,
                  industrial, and consumer markets.
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/contact">
                  Discuss Your Project <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </BlurFade>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <BlurFade key={cap.title} delay={0.15 + idx * 0.08} inView>
                  <MagicCard
                    className="h-full cursor-default rounded-xl"
                    gradientSize={180}
                    gradientOpacity={0.1}
                    gradientFrom="#3b82f6"
                    gradientTo="#1d4ed8"
                  >
                    <div className="flex gap-4 p-6">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted">
                        <Icon className="size-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">{cap.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {cap.desc}
                        </p>
                      </div>
                    </div>
                  </MagicCard>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* OEM Specialty Printers */}
      <section id="printers" className="w-full scroll-mt-20 py-20 lg:py-28">
        <div className="container mx-auto">
          <BlurFade delay={0.1} inView>
            <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Printer className="size-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                    Printers
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  OEM Specialty Printers
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Custom digital printing systems engineered for your unique
                  application. We design, manufacture, and support specialty
                  printers that integrate directly into your product or production
                  line.
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/contact">
                  Request Specs <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </BlurFade>
          <div className="grid gap-5 sm:grid-cols-2">
            {printerCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <BlurFade key={cap.title} delay={0.15 + idx * 0.1} inView>
                  <div className="relative h-full rounded-xl">
                    <MagicCard
                      className="h-full cursor-default rounded-xl"
                      gradientSize={200}
                      gradientOpacity={0.12}
                      gradientFrom="#6366f1"
                      gradientTo="#4338ca"
                    >
                      <div className="flex gap-4 p-6">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted">
                          <Icon className="size-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold">{cap.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                            {cap.desc}
                          </p>
                        </div>
                      </div>
                    </MagicCard>
                    {idx === 0 && (
                      <BorderBeam
                        size={150}
                        duration={10}
                        colorFrom="#6366f1"
                        colorTo="#0ea5e9"
                        borderWidth={1}
                      />
                    )}
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Contract Manufacturing */}
      <section id="manufacturing" className="w-full scroll-mt-20 py-20 lg:py-28">
        <div className="container mx-auto">
          <BlurFade delay={0.1} inView>
            <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Factory className="size-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                    Manufacturing
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Contract Manufacturing
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  ISO 9001:2015 certified production capabilities for
                  electromechanical assemblies. From prototype builds through full
                  production runs, we deliver quality at scale.
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/contact">
                  Get a Quote <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </BlurFade>
          <div className="grid gap-5 sm:grid-cols-2">
            {manufacturingCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <BlurFade key={cap.title} delay={0.15 + idx * 0.1} inView>
                  <MagicCard
                    className="h-full cursor-default rounded-xl"
                    gradientSize={200}
                    gradientOpacity={0.12}
                    gradientFrom="#0ea5e9"
                    gradientTo="#0369a1"
                  >
                    <div className="flex gap-4 p-6">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted">
                        <Icon className="size-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">{cap.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {cap.desc}
                        </p>
                      </div>
                    </div>
                  </MagicCard>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full border-t bg-muted/30 py-16">
        <div className="container mx-auto text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Our team is ready to discuss your requirements and provide a custom
              solution.
            </p>
            <Link href="/contact" className="mt-6 inline-block">
              <ShimmerButton
                shimmerColor="#ffffff"
                background="oklch(0.25 0.06 250)"
                className="px-8 py-3 text-base font-semibold"
              >
                Start a Conversation <ArrowRight className="ml-2 size-4" />
              </ShimmerButton>
            </Link>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
