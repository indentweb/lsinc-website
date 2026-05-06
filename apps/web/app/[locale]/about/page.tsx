import { Badge } from "@repo/design-system/components/ui/badge";
import { Button } from "@repo/design-system/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/design-system/components/ui/card";
import { Separator } from "@repo/design-system/components/ui/separator";
import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  Building2,
  Clock,
  Heart,
  MapPin,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: "About LSINC | Our Story & Certifications",
  description:
    "Learn about LSINC Corporation — a Woman-Owned, ISO 9001:2015 certified engineering and manufacturing company with 30+ years of precision innovation.",
});

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
    description: "Every detail matters. We engineer to exacting tolerances and test to verify.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description: "We treat every project as a collaboration, becoming an extension of your team.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "On-time delivery and consistent quality — project after project, year after year.",
  },
  {
    icon: Building2,
    title: "Integrity",
    description: "Transparent communication, honest timelines, and a commitment to doing it right.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="w-full border-b bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              About LSINC
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Engineering Excellence Since 1990
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              For over three decades, LSINC has been a trusted partner for
              companies that demand precision engineering, innovative printing
              technology, and reliable manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col justify-center gap-6">
              <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
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
                  medical, industrial automation, and commercial printing — all
                  from our facility in North Carolina.
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

            {/* Image placeholder */}
            <div className="flex items-center justify-center">
              <div className="flex aspect-4/3 w-full items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/50">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Building2 className="size-12" />
                  <span className="text-sm font-medium">LSINC Facility</span>
                  <span className="text-xs">Mebane, NC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Woman-Owned Section */}
      <section className="w-full py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 gap-2 px-4 py-1.5">
              <Users className="size-3.5" />
              Woman-Owned Small Business
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Diversity Drives Innovation
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              LSINC is a proudly certified Woman-Owned Small Business (WOSB).
              Our diverse leadership brings fresh perspectives to complex
              engineering challenges, and our certification opens doors for
              government and enterprise partnerships that value supplier
              diversity.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              As a WOSB, we meet the requirements of the Small Business
              Administration for set-aside contracting opportunities while
              delivering the same world-class engineering and manufacturing
              capabilities that our commercial clients rely on.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Certifications */}
      <section id="certifications" className="w-full scroll-mt-20 bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Certifications
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Quality You Can Verify
            </h2>
            <p className="mt-3 text-muted-foreground">
              Industry-recognized certifications that back our commitment to
              excellence.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <Card key={cert.title}>
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
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What Drives Us
            </h2>
            <p className="mt-3 text-muted-foreground">
              Core values that guide every decision and deliverable.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="flex flex-col items-center gap-3 text-center">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-muted">
                    <Icon className="size-5 text-accent" />
                  </div>
                  <h3 className="font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full border-t bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Our Journey
            </h2>
          </div>
          <div className="mx-auto max-w-2xl">
            <div className="relative flex flex-col gap-8 pl-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-border">
              {timeline.map((item) => (
                <div key={item.year} className="relative flex flex-col gap-1">
                  <div className="absolute -left-8 top-1 flex size-6 items-center justify-center rounded-full bg-primary">
                    <div className="size-2 rounded-full bg-primary-foreground" />
                  </div>
                  <span className="text-sm font-bold text-accent">{item.year}</span>
                  <span className="text-muted-foreground">{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
