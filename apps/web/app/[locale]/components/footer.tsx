import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-muted/30">
      {/* Top section */}
      <div className="container mx-auto py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-tight">LSINC</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground leading-relaxed">
              Precision engineering, digital printing innovation, and reliable
              manufacturing — from Huntsville, Alabama to the world.
            </p>
            <div className="mt-6 flex flex-col gap-1 text-sm">
              <a href="tel:+12567214011" className="text-muted-foreground transition-colors hover:text-foreground">
                (256) 721-4011
              </a>
              <a href="mailto:info@lsinc.com" className="text-muted-foreground transition-colors hover:text-foreground">
                info@lsinc.com
              </a>
              <span className="text-muted-foreground">
                490 Discovery Dr NW, Huntsville, AL
              </span>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                Services
              </h4>
              <div className="flex flex-col gap-2.5">
                <FooterLink href="/capabilities#engineering">Engineering</FooterLink>
                <FooterLink href="/capabilities#printers">OEM Printers</FooterLink>
                <FooterLink href="/capabilities#manufacturing">Manufacturing</FooterLink>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                Company
              </h4>
              <div className="flex flex-col gap-2.5">
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/about#certifications">Certifications</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                Connect
              </h4>
              <div className="flex flex-col gap-2.5">
                <FooterLink href="https://linkedin.com" external>LinkedIn</FooterLink>
                <FooterLink href="https://facebook.com" external>Facebook</FooterLink>
                <FooterLink href="/contact">Request Info</FooterLink>
              </div>
            </div>
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
