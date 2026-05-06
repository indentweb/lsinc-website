"use client"

import { ProjectShowcase } from "@repo/design-system/components/ui/project-showcase"
import { ContainerScroll } from "@repo/design-system/components/ui/container-scroll-animation"
import { GlobeCdn } from "@repo/design-system/components/ui/cobe-globe-cdn"

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Section 1: Project Showcase */}
      <section className="flex items-center justify-center py-20 border-b">
        <ProjectShowcase />
      </section>

      {/* Section 2: Container Scroll Animation */}
      <section className="overflow-hidden">
        <ContainerScroll
          titleComponent={
            <h1 className="text-4xl font-semibold text-foreground">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          }
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-8 rounded-2xl bg-white p-8 md:p-16">
            <img
              src="/logos/lsinc-logo.png"
              alt="LSINC"
              className="h-16 w-auto object-contain md:h-24"
              draggable={false}
            />
            <img
              src="/logos/product-logos.png"
              alt="LSINC Product Lineup"
              className="h-auto w-full max-w-2xl object-contain"
              draggable={false}
            />
          </div>
        </ContainerScroll>
      </section>

      {/* Section 3: Globe CDN */}
      <section className="flex flex-col items-center justify-center py-20 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-4">Global Edge Network</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-md">
          Deployed across 10 regions worldwide for ultra-low latency.
        </p>
        <div className="w-full max-w-lg">
          <GlobeCdn />
        </div>
      </section>
    </div>
  )
}
