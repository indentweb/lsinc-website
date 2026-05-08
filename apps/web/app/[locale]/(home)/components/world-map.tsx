"use client";

import { BlurFade } from "@repo/design-system/components/ui/blur-fade";
import DottedMap from "dotted-map";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  showLabels?: boolean;
  labelClassName?: string;
  animationDuration?: number;
  loop?: boolean;
}

const defaultDots: NonNullable<MapProps["dots"]> = [
  {
    start: { lat: 34.7304, lng: -86.5861, label: "LSINC" },
    end: { lat: 53.6911, lng: -1.633, label: "Dennison/Marabu UK" },
  },
  {
    start: { lat: 34.7304, lng: -86.5861, label: "LSINC" },
    end: { lat: 48.299, lng: 10.985, label: "Modico" },
  },
  {
    start: { lat: 34.7304, lng: -86.5861, label: "LSINC" },
    end: { lat: 33.6846, lng: -117.8265, label: "Roland DGA" },
  },
  {
    start: { lat: 34.7304, lng: -86.5861, label: "LSINC" },
    end: { lat: 32.8546, lng: -79.9748, label: "Marabu North America" },
  },
  {
    start: { lat: 34.7304, lng: -86.5861, label: "LSINC" },
    end: { lat: 25.2048, lng: 55.2708, label: "PRO TECHnology" },
  },
  {
    start: { lat: 34.7304, lng: -86.5861, label: "LSINC" },
    end: { lat: 25.6866, lng: -100.3161, label: "Sisco Print" },
  },
];

export function WorldMapGraphic({
  dots = defaultDots,
  lineColor = "#0ea5e9",
  showLabels = true,
  labelClassName = "text-xs",
  animationDuration = 2,
  loop = true,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const map = useMemo(
    () => new DottedMap({ height: 100, grid: "diagonal" }),
    []
  );

  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: 0.22,
        color: "#00000040",
        shape: "circle",
        backgroundColor: "white",
      }),
    [map]
  );

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const staggerDelay = 0.3;
  const totalAnimationTime = dots.length * staggerDelay + animationDuration;
  const pauseTime = 2;
  const fullCycleDuration = totalAnimationTime + pauseTime;
  const renderedStartLabels = new Set<string>();

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white font-sans shadow-sm">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08),transparent_60%)]" />
      <div className="relative aspect-2/1 w-full md:aspect-[2.2/1] lg:aspect-2/1">
        <Image
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="mask-[linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none object-cover"
          alt="world map"
          fill
          draggable={false}
          priority
          unoptimized
        />
        <svg
          ref={svgRef}
          viewBox="0 0 800 400"
          className="absolute inset-0 h-full w-full select-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <filter id="glow">
              <feMorphology operator="dilate" radius="0.5" />
              <feGaussianBlur stdDeviation="1" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {dots.map((dot, i) => {
            const startPoint = projectPoint(dot.start.lat, dot.start.lng);
            const endPoint = projectPoint(dot.end.lat, dot.end.lng);
            const path = createCurvedPath(startPoint, endPoint);
            const startTime = (i * staggerDelay) / fullCycleDuration;
            const endTime = (i * staggerDelay + animationDuration) / fullCycleDuration;
            const resetTime = totalAnimationTime / fullCycleDuration;

            return (
              <g key={`path-group-${dot.start.label}-${dot.end.label}-${i}`}>
                <motion.path
                  d={path}
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0 }}
                  animate={
                    loop
                      ? { pathLength: [0, 0, 1, 1, 0] }
                      : { pathLength: 1 }
                  }
                  transition={
                    loop
                      ? {
                          duration: fullCycleDuration,
                          times: [0, startTime, endTime, resetTime, 1],
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 0,
                        }
                      : {
                          duration: animationDuration,
                          delay: i * staggerDelay,
                          ease: "easeInOut",
                        }
                  }
                />

                {loop ? (
                  <motion.circle
                    r="4"
                    fill={lineColor}
                    initial={{ offsetDistance: "0%", opacity: 0 }}
                    animate={{
                      offsetDistance: ["0%", "0%", "100%", "100%", "100%"],
                      opacity: [0, 0, 1, 0, 0],
                    }}
                    transition={{
                      duration: fullCycleDuration,
                      times: [0, startTime, endTime, resetTime, 1],
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 0,
                    }}
                    style={{ offsetPath: `path('${path}')` } as React.CSSProperties}
                  />
                ) : null}
              </g>
            );
          })}

          {dots.map((dot, i) => {
            const startPoint = projectPoint(dot.start.lat, dot.start.lng);
            const endPoint = projectPoint(dot.end.lat, dot.end.lng);

            return (
              <g key={`points-group-${dot.start.label}-${dot.end.label}-${i}`}>
                <g key={`start-${i}`}>
                  <motion.g
                    onHoverStart={() =>
                      setHoveredLocation(dot.start.label || `Location ${i + 1}`)
                    }
                    onHoverEnd={() => setHoveredLocation(null)}
                    className="cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <circle
                      cx={startPoint.x}
                      cy={startPoint.y}
                      r="3"
                      fill={lineColor}
                      filter="url(#glow)"
                    />
                    <circle
                      cx={startPoint.x}
                      cy={startPoint.y}
                      r="3"
                      fill={lineColor}
                      opacity="0.5"
                    >
                      <animate
                        attributeName="r"
                        from="3"
                        to="12"
                        dur="2s"
                        begin="0s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.6"
                        to="0"
                        dur="2s"
                        begin="0s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </motion.g>

                  {showLabels && dot.start.label ? (
                    renderedStartLabels.has(
                      `${dot.start.label}-${dot.start.lat}-${dot.start.lng}`
                    ) ? null : (
                      (() => {
                        renderedStartLabels.add(
                          `${dot.start.label}-${dot.start.lat}-${dot.start.lng}`
                        );
                        return (
                          <motion.g
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 * i + 0.3, duration: 0.5 }}
                            className="pointer-events-none"
                          >
                            <foreignObject
                              x={startPoint.x - 80}
                              y={startPoint.y - 34}
                              width="160"
                              height="28"
                              className="block"
                            >
                              <div className="flex h-full items-center justify-center">
                                <span
                                  className={`rounded-md border border-gray-200 bg-white/95 px-2 py-0.5 font-medium text-black shadow-sm ${labelClassName}`}
                                >
                                  {dot.start.label}
                                </span>
                              </div>
                            </foreignObject>
                          </motion.g>
                        );
                      })()
                    )
                  ) : null}
                </g>

                <g key={`end-${i}`}>
                  <motion.g
                    onHoverStart={() =>
                      setHoveredLocation(dot.end.label || `Destination ${i + 1}`)
                    }
                    onHoverEnd={() => setHoveredLocation(null)}
                    className="cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <circle
                      cx={endPoint.x}
                      cy={endPoint.y}
                      r="3"
                      fill={lineColor}
                      filter="url(#glow)"
                    />
                    <circle
                      cx={endPoint.x}
                      cy={endPoint.y}
                      r="3"
                      fill={lineColor}
                      opacity="0.5"
                    >
                      <animate
                        attributeName="r"
                        from="3"
                        to="12"
                        dur="2s"
                        begin="0.5s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.6"
                        to="0"
                        dur="2s"
                        begin="0.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </motion.g>

                  {showLabels && dot.end.label ? (
                    <motion.g
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 * i + 0.5, duration: 0.5 }}
                      className="pointer-events-none"
                    >
                      <foreignObject
                        x={endPoint.x - 80}
                        y={endPoint.y - 34}
                        width="160"
                        height="28"
                        className="block"
                      >
                        <div className="flex h-full items-center justify-center">
                          <span
                            className={`rounded-md border border-gray-200 bg-white/95 px-2 py-0.5 font-medium text-black shadow-sm ${labelClassName}`}
                          >
                            {dot.end.label}
                          </span>
                        </div>
                      </foreignObject>
                    </motion.g>
                  ) : null}
                </g>
              </g>
            );
          })}
        </svg>

        <AnimatePresence>
          {hoveredLocation ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-4 left-4 rounded-lg border border-gray-200 bg-white/90 px-3 py-2 text-sm font-medium text-black backdrop-blur-sm sm:hidden"
            >
              {hoveredLocation}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

export const WorldMap = () => {
  return (
    <section className="w-full border-t bg-white py-24 lg:py-32">
      <div className="container mx-auto">
        <BlurFade delay={0.1} inView>
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Global Reach
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Shipping Worldwide
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              LSINC printers and solutions are deployed across six continents,
              serving customers in over 30 countries.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <div className="mx-auto max-w-5xl">
            <WorldMapGraphic />
          </div>
        </BlurFade>
      </div>
    </section>
  );
};
