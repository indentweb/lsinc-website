"use client";

import { BlurFade } from "@repo/design-system/components/ui/blur-fade";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    platform: "LinkedIn",
    handle: "@lsinc",
    date: "2 days ago",
    content: "Excited to announce the PeriJet360s — our fastest inline direct-to-object printer yet! Come see it live at PRINTING United Expo. #DirectToObject #Innovation",
    image: "https://images.unsplash.com/photo-1568209865332-a15790aed756?w=400&auto=format&fit=crop&q=80",
    url: "https://linkedin.com",
  },
  {
    platform: "Facebook",
    handle: "LSINC Corporation",
    date: "5 days ago",
    content: "Our team had a blast at the Huntsville Chamber of Commerce awards last week. Proud to support the local community! 🎉",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&auto=format&fit=crop&q=80",
    url: "https://facebook.com",
  },
  {
    platform: "LinkedIn",
    handle: "@lsinc",
    date: "1 week ago",
    content: "We're hiring! Looking for talented mechanical and electrical engineers to join our growing team in Huntsville. Apply today →",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&auto=format&fit=crop&q=80",
    url: "https://linkedin.com",
  },
];

export const SocialFeed = () => {
  return (
    <section className="w-full border-t py-24 lg:py-32">
      <div className="container mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Follow Us
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Social Updates
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Stay connected with LSINC on social media for the latest news,
              events, and behind-the-scenes content.
            </p>
          </div>
        </BlurFade>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <BlurFade key={idx} delay={0.2 + idx * 0.1} inView>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={`${post.platform} post`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold">{post.platform}</span>
                      <span className="text-xs text-muted-foreground">{post.handle}</span>
                    </div>
                    <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
                    {post.content}
                  </p>
                  <span className="mt-3 text-[11px] text-muted-foreground/60">{post.date}</span>
                </div>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};
