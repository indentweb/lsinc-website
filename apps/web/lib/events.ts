export interface LsincEvent {
  title: string;
  date: string;
  location: string;
  booth: string;
  description: string;
  image: string;
  upcoming: boolean;
}

export const events: LsincEvent[] = [
  {
    title: "PRINTING United Expo 2025",
    date: "October 22-24, 2025",
    location: "Las Vegas Convention Center, Las Vegas, NV",
    booth: "Booth #4215",
    description:
      "See live demonstrations of our full direct-to-object printer lineup including the new PeriJet360s inline system. Our engineering team will be on-site for technical Q&A.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80",
    upcoming: true,
  },
  {
    title: "PACK EXPO International 2025",
    date: "November 2-5, 2025",
    location: "McCormick Place, Chicago, IL",
    booth: "Booth #N-8834",
    description:
      "Featuring our inline integration solutions for direct-to-object printing on packaging production lines. Live demonstrations of the Perivallo360m at production speed.",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&auto=format&fit=crop&q=80",
    upcoming: true,
  },
  {
    title: "Labelexpo Americas 2025",
    date: "September 9-11, 2025",
    location: "Donald E. Stephens Convention Center, Rosemont, IL",
    booth: "Booth #3041",
    description:
      "Discover how direct-to-object printing is replacing traditional labeling for cylindrical containers. Live side-by-side comparisons available.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&auto=format&fit=crop&q=80",
    upcoming: true,
  },
  {
    title: "Huntsville Manufacturing Summit 2025",
    date: "June 15, 2025",
    location: "Von Braun Center, Huntsville, AL",
    booth: "Presenting Sponsor",
    description:
      "LSINC CEO Patricia Lane delivers the keynote on the future of digital manufacturing and direct-to-object printing technology.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&auto=format&fit=crop&q=80",
    upcoming: false,
  },
];

export const upcomingEvents = events.filter((e) => e.upcoming);
export const pastEvents = events.filter((e) => !e.upcoming);
