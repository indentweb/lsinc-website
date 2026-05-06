"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Printer {
  title: string
  description: string
  href: string
  image: string
  logo: string
}

const printers: Printer[] = [
  {
    title: "Perivallo360",
    description: "Flagship direct-to-object rotary printer.",
    href: "/products/perivallo360",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=560&auto=format&fit=crop&q=80",
    logo: "/logos/perivallo360-logo.png",
  },
  {
    title: "Perivallo360m",
    description: "Multi-format rotary printer for production.",
    href: "/products/perivallo360m",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=560&auto=format&fit=crop&q=80",
    logo: "/logos/product-logos.png",
  },
  {
    title: "PeriQ360",
    description: "High-quality 360° cylindrical printing.",
    href: "/products/periq360",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=560&auto=format&fit=crop&q=80",
    logo: "/logos/product-logos.png",
  },
  {
    title: "PeriJet360s",
    description: "High-speed inkjet for inline production.",
    href: "/products/perijet360s",
    image: "https://images.unsplash.com/photo-1568209865332-a15790aed756?w=560&auto=format&fit=crop&q=80",
    logo: "/logos/product-logos.png",
  },
]

export function PrinterDropdownContent() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <div
      ref={containerRef}
      className="relative grid grid-cols-[1fr_260px] gap-4 p-4"
    >
      {/* Printer list */}
      <div className="space-y-0">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Direct-to-Object Printers
        </p>
        {printers.map((printer, index) => (
          <Link
            key={printer.title}
            href={printer.href}
            className="group block"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative rounded-md px-3 py-2.5 transition-all duration-200 ease-out">
              <div
                className={`
                  absolute inset-0 rounded-md bg-muted
                  transition-all duration-200 ease-out
                  ${hoveredIndex === index ? "opacity-100" : "opacity-0"}
                `}
              />
              <div className="relative flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="inline-flex items-center gap-1.5">
                    <span className="text-sm font-medium text-foreground">
                      {printer.title}
                    </span>
                    <ArrowUpRight
                      className={`
                        size-3 text-muted-foreground transition-all duration-200
                        ${hoveredIndex === index ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-1 translate-y-1"}
                      `}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {printer.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
        <Link
          href="/products"
          className="mt-2 flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium text-accent transition-colors hover:bg-muted"
        >
          View All Printers <ArrowRight className="size-3" />
        </Link>
      </div>

      {/* Image preview panel */}
      <div className="relative overflow-hidden rounded-xl bg-muted">
        <div className="relative h-full w-full min-h-[240px]">
          {printers.map((printer, index) => (
            <img
              key={printer.title}
              src={printer.image}
              alt={printer.title}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 1.05,
                filter: hoveredIndex === index ? "none" : "blur(8px)",
              }}
            />
          ))}
          {/* Default: show product wordmark lineup when nothing hovered */}
          <div
            className={`absolute inset-0 flex items-center justify-center bg-white p-6 transition-opacity duration-300 ${hoveredIndex !== null ? "opacity-0" : "opacity-100"}`}
          >
            <img
              src="/logos/product-logos.png"
              alt="LSINC Printer Lineup"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent pointer-events-none" style={{ opacity: hoveredIndex !== null ? 1 : 0, transition: "opacity 0.3s" }} />
          {hoveredIndex !== null && (
            <div className="absolute bottom-3 left-3 right-3">
              <span className="rounded bg-background/90 px-2 py-1 text-[11px] font-semibold backdrop-blur-sm">
                {printers[hoveredIndex].title}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
