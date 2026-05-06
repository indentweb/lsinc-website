"use client";

import { NumberTicker } from "@repo/design-system/components/ui/number-ticker";
import { BlurFade } from "@repo/design-system/components/ui/blur-fade";

const stats = [
  { value: 500, suffix: "+", label: "Products engineered & shipped", highlight: true },
  { value: 17, suffix: "yr", label: "Digital printing expertise" },
  { value: 15, suffix: "M", label: "Units manufactured to date" },
  { value: 99.7, suffix: "%", label: "First-pass quality rate", decimals: 1 },
];

export const Stats = () => {
  return (
    <section className="relative w-full overflow-hidden border-t py-24 lg:py-32">
      <div className="pointer-events-none absolute -top-16 right-0 select-none text-[20vw] font-black leading-none tracking-tighter text-muted/50">
        500+
      </div>

      <div className="container relative mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="mb-16 max-w-lg">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Track Record
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Numbers that speak<br />for themselves.
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <BlurFade key={stat.label} delay={0.2 + idx * 0.1} inView>
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-0.5">
                  <NumberTicker
                    value={stat.value}
                    decimalPlaces={stat.decimals ?? 0}
                    className={`text-5xl font-black tracking-tight md:text-6xl ${stat.highlight ? "text-accent" : "text-foreground"}`}
                  />
                  <span className={`text-3xl font-bold md:text-4xl ${stat.highlight ? "text-accent" : "text-muted-foreground"}`}>
                    {stat.suffix}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};
