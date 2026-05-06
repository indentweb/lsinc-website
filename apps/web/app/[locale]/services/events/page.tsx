import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@repo/design-system/components/ui/button";
import { Badge } from "@repo/design-system/components/ui/badge";
import Link from "next/link";
import { upcomingEvents, pastEvents } from "@/lib/events";

export const metadata: Metadata = createMetadata({
  title: "Upcoming Events | LSINC",
  description: "Meet LSINC at industry trade shows and events. See live demos of our direct-to-object printers.",
});

export default function EventsPage() {
  const upcoming = upcomingEvents;
  const past = pastEvents;

  return (
    <>
      <section className="w-full border-b bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-accent/10 p-3">
              <Calendar className="size-6 text-accent" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Upcoming Events</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Meet LSINC at industry trade shows and events. See live demonstrations
              and connect with our engineering team.
            </p>
          </div>
        </div>
      </section>

      {upcoming.length > 0 && (
        <section className="w-full py-20 lg:py-28">
          <div className="container mx-auto">
            <h2 className="mb-10 text-2xl font-bold tracking-tight">Upcoming</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {upcoming.map((event) => (
                <div key={event.title} className="group overflow-hidden rounded-2xl border bg-card">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3">Upcoming</Badge>
                    <h3 className="text-lg font-bold tracking-tight">{event.title}</h3>
                    <div className="mt-2 flex flex-col gap-1.5">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="size-3.5" /> {event.date}
                      </span>
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="size-3.5" /> {event.location}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-medium text-accent">{event.booth}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {past.length > 0 && (
        <section className="w-full border-t bg-muted/30 py-20 lg:py-28">
          <div className="container mx-auto">
            <h2 className="mb-10 text-2xl font-bold tracking-tight">Past Events</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {past.map((event) => (
                <div key={event.title} className="rounded-2xl border bg-card p-6 opacity-75">
                  <h3 className="font-bold">{event.title}</h3>
                  <span className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="size-3.5" /> {event.date}
                  </span>
                  <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="w-full border-t py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Want to meet us at an event?</h2>
          <p className="mt-3 text-muted-foreground">Schedule a meeting in advance so we can prepare a personalized demo.</p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/contact">
              Schedule a Meeting <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
