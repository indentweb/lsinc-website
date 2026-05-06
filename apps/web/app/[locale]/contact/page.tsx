import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./components/contact-form";

export const metadata: Metadata = createMetadata({
  title: "Contact LSINC | Request a Quote",
  description:
    "Get in touch with LSINC for engineering, product development, specialty printers, or contract manufacturing. Request a quote today.",
});

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    detail: "(336) 578-9000",
    href: "tel:+13365789000",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "info@lsinc.com",
    href: "mailto:info@lsinc.com",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "Mebane, North Carolina",
    href: null,
  },
  {
    icon: Clock,
    title: "Hours",
    detail: "Mon–Fri: 8:00 AM – 5:00 PM EST",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="w-full border-b bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Contact Us
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Let&apos;s Build Something Together
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us about your project and our team will respond within one
            business day.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="w-full py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-xl font-bold">Get in Touch</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Prefer to reach us directly? Use any of the methods below.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-4">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                          <Icon className="size-4 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{item.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    );
                    return item.href ? (
                      <a
                        key={item.title}
                        href={item.href}
                        className="rounded-lg transition-colors hover:bg-muted/50 p-2 -m-2"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.title} className="p-2 -m-2">
                        {content}
                      </div>
                    );
                  })}
                </div>

                {/* Map placeholder */}
                <div className="flex aspect-4/3 w-full items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/50">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <MapPin className="size-8" />
                    <span className="text-sm font-medium">Map Placeholder</span>
                    <span className="text-xs">Mebane, NC 27302</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
