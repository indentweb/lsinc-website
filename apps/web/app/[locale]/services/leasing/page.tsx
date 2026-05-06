import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, HandCoins } from "lucide-react";
import { Button } from "@repo/design-system/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: "Leasing Options | LSINC",
  description: "Flexible leasing programs for LSINC direct-to-object printers. Get production-ready without upfront capital investment.",
});

const benefits = [
  "No large upfront capital investment required",
  "Maintenance and support included in lease agreement",
  "Flexible lease terms from 12 to 60 months",
  "Upgrade path to newer models at lease renewal",
  "Tax advantages — lease payments may be fully deductible",
  "Bundled training and installation services",
  "End-of-lease purchase option at fair market value",
];

export default function LeasingPage() {
  return (
    <>
      <section className="w-full border-b bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-accent/10 p-3">
              <HandCoins className="size-6 text-accent" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Leasing Options</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Get production-ready with an LSINC printer without the upfront capital.
              Our flexible leasing programs include maintenance, training, and upgrade paths.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight">Why Lease?</h2>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Leasing an LSINC printer gives you immediate access to cutting-edge
                direct-to-object printing technology while preserving your working capital
                for other business needs. Our programs are designed to make the transition
                to digital object printing as smooth as possible.
              </p>
              <div className="flex flex-col gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                    <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full overflow-hidden rounded-2xl bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80"
                  alt="Leasing agreement"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-t py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Ready to explore leasing?</h2>
          <p className="mt-3 text-muted-foreground">Our team will build a custom leasing plan for your needs.</p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/contact">
              Request Leasing Info <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
