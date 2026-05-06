export interface Printer {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  logo: string;
  specs: { label: string; value: string }[];
  features: string[];
  gallery: string[];
}

export const printers: Printer[] = [
  {
    slug: "perivallo360",
    title: "Perivallo360",
    tagline: "Flagship direct-to-object rotary printer.",
    description:
      "The Perivallo360 is LSINC's flagship direct-to-object printer, delivering true 360-degree printing on cylindrical and tapered objects with exceptional color accuracy. Its robust design and intuitive controls make it the ideal workhorse for mid-volume production environments.",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&auto=format&fit=crop&q=80",
    logo: "/logos/perivallo360-logo.png",
    specs: [
      { label: "Print Coverage", value: "Full 360° wrap" },
      { label: "Resolution", value: "1200 x 1200 dpi" },
      { label: "Speed", value: "Up to 20 objects/min" },
      { label: "Object Diameter", value: '1" - 5"' },
      { label: "Ink Type", value: "UV-curable CMYK + White" },
      { label: "Connectivity", value: "USB / Ethernet" },
    ],
    features: [
      "True 360° seamless printing on cylindrical objects",
      "Integrated UV LED curing for instant dry",
      "Automatic object detection and alignment",
      "Intuitive touchscreen operator interface",
      "Compatible with a wide range of substrates",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&auto=format&fit=crop&q=80",
    ],
  },
  {
    slug: "perivallo360m",
    title: "Perivallo360m",
    tagline: "Multi-format rotary printer for production.",
    description:
      "The Perivallo360m is LSINC's multi-format rotary printer built for high-volume production environments. It supports a wide range of object sizes and shapes, delivering consistent quality at industrial speeds with advanced multi-head print technology.",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&auto=format&fit=crop&q=80",
    logo: "/logos/product-logos.png",
    specs: [
      { label: "Print Heads", value: "Multi-head array" },
      { label: "Resolution", value: "1200 x 2400 dpi" },
      { label: "Speed", value: "Up to 60 objects/min" },
      { label: "Object Range", value: '0.5" - 8" diameter' },
      { label: "Formats", value: "Cylindrical, tapered, oval" },
      { label: "Automation", value: "Inline integration ready" },
    ],
    features: [
      "Multi-format object handling without retooling",
      "Industrial-grade throughput for production lines",
      "Advanced multi-head technology for speed and quality",
      "Inline integration with existing production equipment",
      "Real-time print quality monitoring system",
      "Remote diagnostics and management interface",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
    ],
  },
  {
    slug: "periq360",
    title: "PeriQ360",
    tagline: "High-quality 360° cylindrical printing.",
    description:
      "The PeriQ360 delivers precision 360-degree printing on cylindrical objects with exceptional color accuracy and speed. Designed for operations demanding consistent, vibrant output on beverage containers, cosmetic tubes, and industrial parts.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
    logo: "/logos/product-logos.png",
    specs: [
      { label: "Print Coverage", value: "Full 360° wrap" },
      { label: "Resolution", value: "1200 x 1200 dpi" },
      { label: "Speed", value: "Up to 30 objects/min" },
      { label: "Object Diameter", value: '1" - 6"' },
      { label: "Object Height", value: "Up to 14 inches" },
      { label: "Ink Channels", value: "CMYK + White + Varnish" },
    ],
    features: [
      "Six-channel ink system for vibrant, durable output",
      "Servo-driven rotation for precise registration",
      "High-speed production mode for throughput",
      "Integrated pre-treatment station option",
      "Quick-change tooling for different diameters",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1568209865332-a15790aed756?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&auto=format&fit=crop&q=80",
    ],
  },
  {
    slug: "perijet360s",
    title: "PeriJet360s",
    tagline: "High-speed inkjet for inline production.",
    description:
      "The PeriJet360s is LSINC's high-speed inkjet system designed for seamless inline integration with existing production lines. Combining speed, precision, and reliability, it delivers vibrant direct-to-object graphics at full production pace without bottlenecks.",
    image: "https://images.unsplash.com/photo-1568209865332-a15790aed756?w=800&auto=format&fit=crop&q=80",
    logo: "/logos/product-logos.png",
    specs: [
      { label: "Print Mode", value: "Single-pass inline" },
      { label: "Resolution", value: "1200 x 2400 dpi" },
      { label: "Line Speed", value: "Up to 80 objects/min" },
      { label: "Object Diameter", value: '1" - 4.5"' },
      { label: "Ink Type", value: "UV LED curable" },
      { label: "Integration", value: "Conveyor inline ready" },
    ],
    features: [
      "Single-pass printing for maximum production speed",
      "Designed for seamless conveyor integration",
      "UV LED curing for instant dry at line speed",
      "Variable data printing for serialization and coding",
      "Low-maintenance industrial-grade print heads",
      "Compact footprint fits existing line layouts",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1568209865332-a15790aed756?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&auto=format&fit=crop&q=80",
    ],
  },
];

export function getPrinterBySlug(slug: string): Printer | undefined {
  return printers.find((p) => p.slug === slug);
}
