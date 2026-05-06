"use client";

import { MagicCard } from "@repo/design-system/components/ui/magic-card";
import { OrbitingCircles } from "@repo/design-system/components/ui/orbiting-circles";
import { BlurFade } from "@repo/design-system/components/ui/blur-fade";
import { BorderBeam } from "@repo/design-system/components/ui/border-beam";
import { Button } from "@repo/design-system/components/ui/button";
import {
  Cable,
  CircuitBoard,
  Cog,
  Cpu,
  Factory,
  Layers,
  MoveRight,
  Printer,
  Settings2,
  Wrench,
} from "lucide-react";
import Link from "next/link";

export const Services = () => {
  return (
    <section className="w-full py-24 lg:py-32">
      <div className="container mx-auto">
        {/* Section header — left-aligned editorial */}
        <BlurFade delay={0.1} inView>
          <div className="mb-16 max-w-xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Capabilities
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              One partner.<br />
              <span className="text-muted-foreground">Three disciplines.</span>
            </h2>
          </div>
        </BlurFade>

        {/* Asymmetric bento grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Engineering — featured */}
          <BlurFade delay={0.2} inView>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm">
              <BorderBeam
                size={250}
                duration={10}
                colorFrom="#3b82f6"
                colorTo="#6366f1"
                borderWidth={1}
              />
              <div className="relative flex h-full flex-col p-8">
                <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-accent/10">
                  <Cpu className="size-7 text-accent" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">
                  Engineering &<br />Product Development
                </h3>
                <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                  Full-lifecycle development from ideation through production
                  release. Mechanical, electrical, embedded, and industrial
                  design — all in-house.
                </p>
                <div className="mb-8 grid grid-cols-2 gap-3">
                  {["Mech. Engineering", "PCB Design", "Firmware Dev", "Industrial Design", "Prototyping", "DFM/DFA"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="size-1 rounded-full bg-accent" />
                      {item}
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" size="sm" className="mt-auto w-fit">
                  <Link href="/capabilities#engineering">
                    Explore <MoveRight className="ml-1.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </BlurFade>

          {/* Card 2: Printers — with orbiting circles visual */}
          <BlurFade delay={0.3} inView>
            <MagicCard
              className="h-full cursor-default rounded-2xl"
              gradientSize={300}
              gradientOpacity={0.12}
              gradientFrom="#6366f1"
              gradientTo="#8b5cf6"
            >
              <div className="flex h-full flex-col p-8">
                <div className="relative mx-auto my-6 flex size-44 items-center justify-center">
                  <Printer className="size-8 text-accent" />
                  <OrbitingCircles radius={70} duration={25} speed={1} iconSize={28}>
                    <div className="flex size-7 items-center justify-center rounded-full border bg-card shadow-sm">
                      <Cog className="size-3.5 text-muted-foreground" />
                    </div>
                    <div className="flex size-7 items-center justify-center rounded-full border bg-card shadow-sm">
                      <Settings2 className="size-3.5 text-muted-foreground" />
                    </div>
                    <div className="flex size-7 items-center justify-center rounded-full border bg-card shadow-sm">
                      <Layers className="size-3.5 text-muted-foreground" />
                    </div>
                  </OrbitingCircles>
                </div>
                <h3 className="mb-2 text-lg font-bold">OEM Specialty Printers</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Custom inkjet and UV printing systems engineered for your
                  specific substrate and application.
                </p>
                <Button asChild variant="ghost" size="sm" className="mt-4 w-fit">
                  <Link href="/capabilities#printers">
                    Learn more <MoveRight className="ml-1.5" />
                  </Link>
                </Button>
              </div>
            </MagicCard>
          </BlurFade>

          {/* Card 3: Manufacturing */}
          <BlurFade delay={0.4} inView>
            <MagicCard
              className="h-full cursor-default rounded-2xl"
              gradientSize={300}
              gradientOpacity={0.12}
              gradientFrom="#0ea5e9"
              gradientTo="#0369a1"
            >
              <div className="flex h-full flex-col p-8">
                <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-accent/10">
                  <Factory className="size-7 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Contract Manufacturing</h3>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  ISO-certified production from first article to full runs.
                  PCB assembly, cable harness, box build, and test.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: CircuitBoard, label: "PCB" },
                    { icon: Cable, label: "Cable" },
                    { icon: Wrench, label: "Assembly" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-1.5 rounded-full border bg-muted/50 px-3 py-1 text-xs">
                      <Icon className="size-3 text-accent" />
                      {label}
                    </div>
                  ))}
                </div>
                <Button asChild variant="ghost" size="sm" className="mt-auto w-fit pt-4">
                  <Link href="/capabilities#manufacturing">
                    Learn more <MoveRight className="ml-1.5" />
                  </Link>
                </Button>
              </div>
            </MagicCard>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};
