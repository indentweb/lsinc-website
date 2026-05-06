import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { ArrowRight, Calendar, Cpu, Factory, HandCoins } from "lucide-react";
import { Button } from "@repo/design-system/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: "Services | LSINC",
  description: "LSINC offers leasing, contract manufacturing, engineering services, and industry event participation.",
});

const services = [
  {
    icon: HandCoins,
    title: "Leasing Options",
    description: "Flexible leasing programs for our direct-to-object printers. Get production-ready without the upfront capital investment.",
    href: "/services/leasing",
  },
  {
    icon: Factory,
    title: "Contract Manufacturing",
    description: "ISO 9001:2015 certified production from first article through volume runs. PCB assembly, cable harness, box build, and test.",
    href: "/services/contract-manufacturing",
  },
  {
    icon: Cpu,
    title: "Engineering Services",
    description: "Full-lifecycle product development — mechanical, electrical, embedded systems, and industrial design.",
    href: "/services/engineering",
  },
  {
    icon: Calendar,
    title: "Upcoming Events",
    description: "Meet LSINC at industry trade shows and events. See live demos and connect with our engineering team.",
    href: "/services/events",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Services hero — accent gradient with floating icons */}
      <section className="relative w-full overflow-hidden border-b bg-linear-to-br from-accent via-[#27789A] to-[#1C292F] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        <div className="container relative mx-auto py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
                <span className="h-px w-8 bg-white/60" />
                Our Services
              </p>
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                End-to-end<br />
                <span className="italic font-light">solutions.</span>
              </h1>
            </div>
            <div className="lg:pb-4">
              <p className="max-w-md text-base text-white/85 leading-relaxed lg:text-lg">
                From equipment leasing to full product realization — LSINC provides
                integrated engineering and manufacturing services under one roof.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Leasing", "Manufacturing", "Engineering", "Events"].map((s) => (
                  <span key={s} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-20 -left-10 size-64 rounded-full bg-white/10 blur-3xl" />
      </section>

      <section className="w-full py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-2xl border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-accent/10">
                    <Icon className="size-6 text-accent" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">{service.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent">
                    Learn More
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full border-t py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Need a custom solution?</h2>
          <p className="mt-3 text-muted-foreground">Our team is ready to discuss your specific requirements.</p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
