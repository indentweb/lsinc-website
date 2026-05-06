export type PressCategory = "announcement" | "product-launch" | "media";

export interface PressRelease {
  id: string;
  title: string;
  date: string;
  category: PressCategory;
  excerpt: string;
  image: string;
  content: string;
}

export const pressReleases: PressRelease[] = [
  {
    id: "perijet360s-launch-2024",
    title: "LSINC Launches PeriJet360s: High-Speed Inline Direct-to-Object Printing",
    date: "2024-11-15",
    category: "product-launch",
    excerpt: "LSINC Corporation unveils the PeriJet360s, a high-speed single-pass inkjet system designed for seamless inline production integration.",
    image: "https://images.unsplash.com/photo-1568209865332-a15790aed756?w=600&auto=format&fit=crop&q=80",
    content: "LSINC Corporation today announced the launch of the PeriJet360s, the company's fastest direct-to-object printer designed for inline production environments. The PeriJet360s delivers single-pass printing at up to 80 objects per minute, with UV LED curing for instant dry at full line speed.",
  },
  {
    id: "iso-recertification-2024",
    title: "LSINC Achieves ISO 9001:2015 Recertification",
    date: "2024-09-20",
    category: "announcement",
    excerpt: "LSINC successfully completes its ISO 9001:2015 quality management system recertification audit.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
    content: "LSINC Corporation announced today that it has successfully completed its ISO 9001:2015 recertification audit. The certification underscores LSINC's commitment to maintaining the highest standards of quality management across its engineering, manufacturing, and printing operations.",
  },
  {
    id: "perivallo-upgrade-2024",
    title: "Perivallo360m Gets Major Speed Upgrade",
    date: "2024-07-10",
    category: "product-launch",
    excerpt: "New firmware and print head configuration doubles throughput on LSINC's flagship production printer.",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&auto=format&fit=crop&q=80",
    content: "LSINC today released a major upgrade for the Perivallo360m production printer that doubles throughput from 30 to 60 objects per minute. The upgrade includes new firmware optimizations and an enhanced multi-head print configuration.",
  },
  {
    id: "trade-show-2024",
    title: "LSINC to Exhibit at PRINTING United Expo 2024",
    date: "2024-06-01",
    category: "announcement",
    excerpt: "Visit LSINC at booth #4215 to see live demos of our full direct-to-object printer lineup.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80",
    content: "LSINC Corporation will be exhibiting at PRINTING United Expo 2024 in Las Vegas, showcasing live demonstrations of the Perivallo360, PeriQ360, Perivallo360m, and the all-new PeriJet360s inline system.",
  },
  {
    id: "industry-award-2024",
    title: "LSINC Named 'Innovator of the Year' by Printing Industry Association",
    date: "2024-03-15",
    category: "media",
    excerpt: "Recognition for breakthrough direct-to-object printing technology and manufacturing innovation.",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&auto=format&fit=crop&q=80",
    content: "The Printing Industry Association has named LSINC Corporation as its 'Innovator of the Year' for 2024, recognizing the company's breakthrough contributions to direct-to-object printing technology.",
  },
  {
    id: "expansion-2023",
    title: "LSINC Expands Huntsville Manufacturing Facility",
    date: "2023-11-20",
    category: "announcement",
    excerpt: "New 15,000 sq ft expansion adds capacity for increased printer production and contract manufacturing.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
    content: "LSINC Corporation today announced the completion of a 15,000 square foot expansion to its Huntsville, Alabama manufacturing facility. The expansion adds new production lines for printer assembly and increases capacity for contract manufacturing services.",
  },
];

export const categoryLabels: Record<PressCategory, string> = {
  announcement: "Announcements",
  "product-launch": "Product Launches",
  media: "Media Coverage",
};
