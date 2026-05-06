"use client";

import { Button } from "@repo/design-system/components/ui/button";
import { Input } from "@repo/design-system/components/ui/input";
import { Textarea } from "@repo/design-system/components/ui/textarea";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer className="w-full border-t bg-muted/30">
      {/* Main footer */}
      <div className="container mx-auto py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + contact info */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <img src="/logos/lsinc-logo.png" alt="LSINC - Ideas to Reality" className="h-10 w-auto" />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground leading-relaxed">
              Precision engineering, digital printing innovation, and reliable
              manufacturing — from Huntsville, Alabama to the world.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a href="tel:+12567214011" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Phone className="size-3.5" />
                (256) 721-4011
              </a>
              <a href="mailto:info@lsinc.com" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Mail className="size-3.5" />
                info@lsinc.com
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-3.5" />
                490 Discovery Dr NW, Huntsville, AL
              </span>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-4">
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                Products
              </h4>
              <div className="flex flex-col gap-2.5">
                <FooterLink href="/products">All Printers</FooterLink>
                <FooterLink href="/products/perivallo360">Perivallo360</FooterLink>
                <FooterLink href="/products/perivallo360m">Perivallo360m</FooterLink>
                <FooterLink href="/products/periq360">PeriQ360</FooterLink>
                <FooterLink href="/products/perijet360s">PeriJet360s</FooterLink>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                Services
              </h4>
              <div className="flex flex-col gap-2.5">
                <FooterLink href="/services">Overview</FooterLink>
                <FooterLink href="/services/leasing">Leasing</FooterLink>
                <FooterLink href="/services/contract-manufacturing">Manufacturing</FooterLink>
                <FooterLink href="/services/engineering">Engineering</FooterLink>
                <FooterLink href="/services/events">Events</FooterLink>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                Company
              </h4>
              <div className="flex flex-col gap-2.5">
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/about#reviews">Reviews</FooterLink>
                <FooterLink href="/about#leadership">Leadership</FooterLink>
                <FooterLink href="/about#careers">Careers</FooterLink>
                <FooterLink href="/press">Press</FooterLink>
                <FooterLink href="https://linkedin.com" external>LinkedIn</FooterLink>
                <FooterLink href="https://facebook.com" external>Facebook</FooterLink>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-4">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
              Quick Contact
            </h4>
            {submitted ? (
              <div className="rounded-lg border bg-accent/10 p-6 text-center">
                <p className="font-semibold text-accent">Thank you!</p>
                <p className="mt-1 text-sm text-muted-foreground">We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <Input placeholder="Your name" required className="h-9 text-sm" />
                <Input type="email" placeholder="Email address" required className="h-9 text-sm" />
                <Textarea placeholder="How can we help?" rows={3} className="text-sm resize-none" />
                <Button type="submit" size="sm" className="w-full">
                  Send Message <ArrowRight className="ml-1.5 size-3" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Quick facts strip */}
      <div className="border-t bg-muted/50">
        <div className="container mx-auto grid grid-cols-2 gap-4 py-6 sm:grid-cols-4">
          <div className="text-center">
            <div className="text-lg font-bold">500+</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Products Shipped</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">17yr</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Printing Expertise</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">15M+</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Units Manufactured</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">99.7%</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Quality Rate</div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} LSINC Corporation. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>ISO 9001:2015</span>
            <span className="size-1 rounded-full bg-muted-foreground/30" />
            <span>ITAR Registered</span>
            <span className="size-1 rounded-full bg-muted-foreground/30" />
            <span>WOSB Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {children}
        <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
      </a>
    );
  }
  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  );
}
