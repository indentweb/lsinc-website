"use client";

import { BlurFade } from "@repo/design-system/components/ui/blur-fade";
import { Badge } from "@repo/design-system/components/ui/badge";
import { Button } from "@repo/design-system/components/ui/button";
import { ArrowRight, Calendar, Newspaper } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    id: "perijet360s-launch",
    title: "LSINC Launches PeriJet360s: High-Speed Inline Printing",
    date: "2024-11-15",
    category: "Product Launch",
    image: "https://images.unsplash.com/photo-1568209865332-a15790aed756?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "iso-recert",
    title: "LSINC Achieves ISO 9001:2015 Recertification",
    date: "2024-09-20",
    category: "Announcement",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "innovator-award",
    title: "Named 'Innovator of the Year' by Printing Industry Association",
    date: "2024-03-15",
    category: "Media",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&auto=format&fit=crop&q=80",
  },
];

export const PressHighlights = () => {
  return (
    <section className="w-full border-t py-24 lg:py-32">
      <div className="container mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Newspaper className="size-4 text-accent" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Latest News
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Press & Announcements
              </h2>
            </div>
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
              <Link href="/press">
                View All <ArrowRight className="ml-1.5 size-3" />
              </Link>
            </Button>
          </div>
        </BlurFade>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, idx) => (
            <BlurFade key={item.id} delay={0.2 + idx * 0.1} inView>
              <Link href="/press" className="group block overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="secondary" className="text-[10px]">{item.category}</Badge>
                    <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                      <Calendar className="size-2.5" />
                      {new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold leading-snug">{item.title}</h3>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button asChild variant="outline">
            <Link href="/press">
              View All News <ArrowRight className="ml-1.5 size-3" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
