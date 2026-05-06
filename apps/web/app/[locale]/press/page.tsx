"use client";

import { useState } from "react";
import { Button } from "@repo/design-system/components/ui/button";
import { Badge } from "@repo/design-system/components/ui/badge";
import { pressReleases, categoryLabels, type PressCategory } from "@/lib/press-releases";
import { upcomingEvents } from "@/lib/events";
import { SocialFeed } from "../(home)/components/social-feed";
import { ArrowRight, Calendar, Filter, MapPin } from "lucide-react";
import Link from "next/link";

const categories: (PressCategory | "all")[] = ["all", "announcement", "product-launch", "media"];

export default function PressPage() {
  const [activeCategory, setActiveCategory] = useState<PressCategory | "all">("all");

  const filtered = activeCategory === "all"
    ? pressReleases
    : pressReleases.filter((pr) => pr.category === activeCategory);

  return (
    <>
      <section className="w-full py-12 lg:py-16">
        <div className="container mx-auto">
          <div className="mb-10 flex flex-wrap items-center gap-2">
            <Filter className="size-4 text-muted-foreground" />
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className="h-8 text-xs"
              >
                {cat === "all" ? "All" : categoryLabels[cat]}
              </Button>
            ))}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((pr) => (
              <article
                key={pr.id}
                className="group overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={pr.image}
                    alt={pr.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <Badge variant="secondary" className="text-[10px]">
                      {categoryLabels[pr.category]}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="size-3" />
                      {new Date(pr.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold tracking-tight leading-snug">
                    {pr.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {pr.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">No press releases in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events (moved from /services/events) */}
      <section className="w-full border-t bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                Catch Us In Person
              </p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Upcoming Events
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Meet LSINC at industry trade shows and see live demonstrations of
                our direct-to-object printers.
              </p>
            </div>
            <Button asChild variant="outline" size="sm" className="w-fit">
              <Link href="/services/events">
                All Events <ArrowRight className="ml-2 size-3.5" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {upcomingEvents.map((event) => (
              <article
                key={event.title}
                className="group overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-3">Upcoming</Badge>
                  <h3 className="text-base font-bold tracking-tight leading-snug">
                    {event.title}
                  </h3>
                  <div className="mt-2 flex flex-col gap-1.5">
                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="size-3.5 shrink-0" /> {event.date}
                    </span>
                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="size-3.5 shrink-0" /> {event.location}
                    </span>
                  </div>
                  <p className="mt-3 text-xs font-medium text-accent">
                    {event.booth}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Social Updates (moved from home) */}
      <SocialFeed />
    </>
  );
}
