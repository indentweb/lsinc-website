"use client";

import { Badge } from "@repo/design-system/components/ui/badge";
import { Button } from "@repo/design-system/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/design-system/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/design-system/components/ui/tabs";
import { Marquee } from "@repo/design-system/components/ui/marquee";
import { BlurFade } from "@repo/design-system/components/ui/blur-fade";
import { AnimatedTestimonials } from "@repo/design-system/components/ui/animated-testimonials";
import { MagicCard } from "@repo/design-system/components/ui/magic-card";
import { BorderBeam } from "@repo/design-system/components/ui/border-beam";
import { Services } from "../(home)/components/services";
import { Stats } from "../(home)/components/stats";
import { WorldMap } from "../(home)/components/world-map";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Clock,
  Heart,
  MapPin,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";

const timeline = [
  { year: "1990", event: "LSINC Corporation founded in North Carolina" },
  { year: "1998", event: "First OEM specialty printer system delivered" },
  { year: "2005", event: "ISO 9001 certification achieved" },
  { year: "2012", event: "Expanded contract manufacturing capabilities" },
  { year: "2018", event: "Certified as Woman-Owned Small Business (WOSB)" },
  { year: "2024", event: "30+ years of continuous innovation" },
];

const certifications = [
  {
    icon: ShieldCheck,
    title: "ISO 9001:2015",
    description:
      "Certified quality management system ensuring consistent, high-quality products and continuous improvement.",
  },
  {
    icon: Users,
    title: "WOSB Certified",
    description:
      "Federally certified Woman-Owned Small Business, meeting eligibility requirements for set-aside contracts.",
  },
  {
    icon: Award,
    title: "IPC Standards",
    description:
      "Manufacturing to IPC-A-610 (electronics), IPC J-STD-001 (soldering), and WHMA-A-620 (cable/harness) standards.",
  },
  {
    icon: Target,
    title: "RoHS Compliant",
    description:
      "Full compliance with Restriction of Hazardous Substances directive for environmentally responsible manufacturing.",
  },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every detail matters. We engineer to exacting tolerances and test to verify.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description:
      "We treat every project as a collaboration, becoming an extension of your team.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "On-time delivery and consistent quality — project after project, year after year.",
  },
  {
    icon: Building2,
    title: "Integrity",
    description:
      "Transparent communication, honest timelines, and a commitment to doing it right.",
  },
];

const testimonials = [
  {
    quote:
      "LSINC transformed our production line with their custom printer solution. The team's attention to detail and engineering expertise is unmatched in the industry.",
    name: "Sarah Mitchell",
    designation: "VP of Operations, BevPrint Corp",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Working with LSINC felt like having an extension of our own engineering team. They delivered on time, on spec, and on budget — three things that rarely happen together.",
    name: "James Rodriguez",
    designation: "CTO, PackTech Industries",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "The Perivallo360m has been running 24/7 in our facility for over a year with zero downtime. The quality and reliability of LSINC products speaks for itself.",
    name: "Linda Chen",
    designation: "Plant Manager, GlobalPack",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
  },
];

const clientLogos = [
  "Dennison/Marabu UK",
  "Marabu North America",
  "Modico",
  "PRO TECHnology",
  "Roland DGA",
  "Sisco Print",
  "BevPrint Corp",
  "GlobalPack",
];

const leadership = [
  {
    name: "Patricia Lane",
    role: "President & CEO",
    bio: "30+ years leading LSINC's growth from a small engineering firm to a vertically-integrated product company.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Michael Torres",
    role: "VP of Engineering",
    bio: "Mechanical engineer with deep expertise in precision printing systems and product development.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Dr. Angela Kim",
    role: "Director of R&D",
    bio: "PhD in Materials Science. Leads LSINC's ink systems and UV curing technology research.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Robert Hayes",
    role: "Director of Manufacturing",
    bio: "ISO lead auditor overseeing all production, quality, and supply chain operations.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
  },
];

const openRoles = [
  { title: "Senior Mechanical Engineer", location: "Huntsville, AL", type: "Full-time" },
  { title: "Electrical Engineer – PCB Design", location: "Huntsville, AL", type: "Full-time" },
  { title: "Embedded Firmware Developer", location: "Huntsville, AL", type: "Full-time" },
  { title: "Production Technician", location: "Huntsville, AL", type: "Full-time" },
  { title: "Quality Assurance Specialist", location: "Huntsville, AL", type: "Full-time" },
];

const communityPrograms = [
  {
    title: "STEM Education Partnership",
    description:
      "Hands-on engineering workshops and internship opportunities for high school and college students.",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&auto=format&fit=crop&q=80",
  },
  {
    title: "Huntsville Maker Space Sponsor",
    description:
      "Founding sponsor providing equipment and mentorship to aspiring inventors.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&auto=format&fit=crop&q=80",
  },
  {
    title: "Veterans Employment Program",
    description:
      "Hiring and training military veterans transitioning to civilian engineering careers.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&auto=format&fit=crop&q=80",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero — magazine split with oversized year + BorderBeam */}
      <section className="relative w-full overflow-hidden border-b bg-background">
        <div className="container mx-auto grid gap-10 py-20 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16 lg:py-32">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
              <span className="size-1.5 rounded-full bg-accent" />
              About LSINC
            </p>
            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]">
              Ideas to{" "}
              <span className="font-light italic text-muted-foreground">reality.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base text-muted-foreground leading-relaxed lg:text-lg">
              For over three decades, LSINC has been a trusted partner for
              companies that demand precision engineering, innovative printing
              technology, and reliable manufacturing.
            </p>
            <div className="mt-10 flex items-center gap-6 border-t pt-6">
              <img src="/logos/lsinc-logo.png" alt="LSINC" className="h-9 w-auto" />
              <div className="h-9 w-px bg-border" />
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Founded
                </div>
                <div className="text-sm font-semibold">1990 · Mebane, NC</div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative isolate flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-3xl border bg-muted/30">
              <BorderBeam
                size={180}
                duration={10}
                colorFrom="oklch(var(--accent))"
                colorTo="transparent"
              />
              <BorderBeam
                size={180}
                duration={10}
                delay={5}
                reverse
                colorFrom="oklch(var(--accent))"
                colorTo="transparent"
              />
              <div className="text-center">
                <div className="font-black leading-none tracking-tighter text-accent text-[10rem] md:text-[12rem]">
                  30+
                </div>
                <div className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Years of Engineering Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Story + Timeline — side-by-side (replaces 2 stacked sections) */}
      <section className="w-full py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div className="flex flex-col justify-center gap-6">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                  Our Story
                </p>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Three decades of precision and partnership.
                </h2>
              </div>
              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1990 in Mebane, North Carolina, LSINC Corporation
                  started with a clear mission: deliver world-class engineering
                  solutions with the agility and dedication of a focused team.
                </p>
                <p>
                  Over 30+ years, we&apos;ve grown from a small engineering firm
                  into a vertically-integrated product development and
                  manufacturing company. Today, we serve clients in defense,
                  medical, industrial automation, and commercial printing.
                </p>
                <p>
                  Our unique combination of engineering depth, custom printer
                  expertise, and manufacturing capability means we can take your
                  product from concept sketch to shipping carton — faster, with
                  fewer handoffs, and higher quality.
                </p>
              </div>
              <Button asChild variant="outline" className="w-fit">
                <Link href="/contact">
                  Work With Us <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>

            <div className="rounded-2xl border bg-muted/30 p-8 lg:p-10">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
                Our Journey
              </p>
              <h3 className="mb-8 text-xl font-bold tracking-tight">Milestones</h3>
              <div className="relative flex flex-col gap-6 pl-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-border">
                {timeline.map((item) => (
                  <div key={item.year} className="relative flex flex-col gap-1">
                    <div className="absolute -left-8 top-1 flex size-6 items-center justify-center rounded-full bg-primary">
                      <div className="size-2 rounded-full bg-primary-foreground" />
                    </div>
                    <span className="text-sm font-bold text-accent">{item.year}</span>
                    <span className="text-sm text-muted-foreground">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Capabilities (from home) */}
      <Services />

      {/* 4. Track Record / Stats (from home) */}
      <Stats />

      {/* 5. Testimonials + client logo marquee */}
      <section id="reviews" className="w-full scroll-mt-20 border-t py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="mb-6 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Customer Reviews
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What Our Clients Say
            </h2>
          </div>

          <AnimatedTestimonials testimonials={testimonials} autoplay />

          <div className="mt-8">
            <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
              Trusted by industry leaders
            </p>
            <Marquee pauseOnHover className="[--duration:40s] [--gap:3rem]">
              {clientLogos.map((name) => (
                <span
                  key={name}
                  className="whitespace-nowrap rounded-full border bg-card px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {name}
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* 6. What We Stand For — tabbed (replaces Values + Certifications + WOSB) */}
      <section id="certifications" className="w-full scroll-mt-20 border-t bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              What We Stand For
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Values, certifications, and a diverse team.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Three lenses on the same commitment to quality.
            </p>
          </div>

          <Tabs defaultValue="values" className="mx-auto max-w-5xl">
            <TabsList className="mx-auto grid h-auto w-full max-w-md grid-cols-3">
              <TabsTrigger value="values" className="py-2">
                Values
              </TabsTrigger>
              <TabsTrigger value="certs" className="py-2">
                Certifications
              </TabsTrigger>
              <TabsTrigger value="wosb" className="py-2">
                Diversity
              </TabsTrigger>
            </TabsList>

            <TabsContent value="values" className="mt-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((value) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={value.title}
                      className="flex flex-col items-start gap-3 rounded-2xl border bg-background p-6"
                    >
                      <div className="flex size-12 items-center justify-center rounded-xl bg-accent/10">
                        <Icon className="size-5 text-accent" />
                      </div>
                      <h3 className="font-semibold">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="certs" className="mt-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {certifications.map((cert) => {
                  const Icon = cert.icon;
                  return (
                    <Card key={cert.title} className="bg-background">
                      <CardHeader className="pb-3">
                        <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="size-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">{cert.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {cert.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="wosb" className="mt-8">
              <div className="relative overflow-hidden rounded-3xl border bg-background p-10 lg:p-14">
                <BorderBeam
                  size={250}
                  duration={12}
                  colorFrom="oklch(var(--accent))"
                  colorTo="transparent"
                />
                <div className="mx-auto max-w-2xl text-center">
                  <Badge variant="secondary" className="mb-4 gap-2 px-4 py-1.5">
                    <Users className="size-3.5" />
                    Woman-Owned Small Business
                  </Badge>
                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                    Diversity Drives Innovation
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    LSINC is a proudly certified Woman-Owned Small Business
                    (WOSB). Our diverse leadership brings fresh perspectives to
                    complex engineering challenges, and our certification opens
                    doors for government and enterprise partnerships that value
                    supplier diversity.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 7. Leadership — MagicCard hover */}
      <section id="leadership" className="w-full scroll-mt-20 border-t py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Our Team
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Leadership</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person, idx) => (
              <BlurFade key={person.name} delay={0.1 + idx * 0.08} inView>
                <MagicCard
                  className="rounded-2xl"
                  gradientColor="oklch(var(--accent) / 0.1)"
                  gradientFrom="oklch(var(--accent))"
                  gradientTo="oklch(var(--primary))"
                >
                  <div className="overflow-hidden rounded-2xl">
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold">{person.name}</h3>
                      <p className="text-sm text-accent">{person.role}</p>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        {person.bio}
                      </p>
                    </div>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Global Reach (from home) */}
      <WorldMap />

      {/* 9. Community + Careers — side-by-side (replaces 2 stacked sections) */}
      <section
        id="careers"
        className="w-full scroll-mt-20 border-t bg-muted/30 py-20 lg:py-28"
      >
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Community */}
            <div id="community" className="scroll-mt-20">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                Giving Back
              </p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Community Investment
              </h2>
              <p className="mt-3 text-muted-foreground">
                Strengthening the communities where we live and work.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {communityPrograms.map((program) => (
                  <div
                    key={program.title}
                    className="group flex gap-4 overflow-hidden rounded-2xl border bg-background p-3 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="aspect-square h-20 shrink-0 overflow-hidden rounded-xl bg-muted">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-sm font-bold">{program.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Careers */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                Careers
              </p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Join Our Team
              </h2>
              <p className="mt-3 text-muted-foreground">
                Engineers, technicians, and problem-solvers welcome.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4 text-accent" /> Huntsville, AL
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Heart className="size-4 text-accent" /> Benefits & 401(k)
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Briefcase className="size-4 text-accent" /> Growth culture
                </span>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                {openRoles.map((role) => (
                  <Link
                    key={role.title}
                    href="/contact"
                    className="group flex items-center justify-between rounded-xl border bg-background p-4 transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div>
                      <h4 className="text-sm font-semibold">{role.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {role.location} · {role.type}
                      </p>
                    </div>
                    <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="w-full border-t py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Ready to partner with LSINC?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Let&apos;s discuss how our capabilities can support your next project.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/contact">
              Contact Our Team <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
