export type Event = {
  slug: string;
  title: string;
  date: string; // ISO
  summary: string;
  description: string;
  coverImage: string;
  gallery?: string[];
  agenda?: { time: string; item: string }[];
  registrationUrl: string;
  status: "upcoming" | "past";
};

export const eventsData: Event[] = [
  {
    slug: "nexora-hackathon",
    title: "Nexora Hackathon",
    date: "2026-10-14T08:30:00Z",
    summary: "Conducted by IEEE CS × IEEE CIS: An intense one-day offline hackathon focused on building full-stack prototypes with meaningful AI components.",
    description: "The Nexora Hackathon is a premier one-day, fast-paced technical competition hosted offline at Amrita Vishwa Vidyapeetham, Chennai. Jointly organized by the IEEE Computer Society and IEEE Computational Intelligence Society, this event challenges teams to design, build, and deploy functional full-stack prototypes infused with modern AI capabilities.\n\nKey Highlights:\n• Build a working full-stack prototype integrating a meaningful AI component.\n• Leverage pretrained models, public APIs, and AI-assisted dev tools (like ChatGPT or Copilot).\n• Compete in three main phases: Technical Quiz, Midpoint Review, and Final Demo.\n• Win prizes for the top 3 teams based on architecture, implementation, and impact.",
    coverImage: "/placeholder.svg",
    registrationUrl: "https://forms.office.com/",
    status: "upcoming",
  },
  {
    slug: "signals-workshop",
    title: "Signals Workshop",
    date: "2026-10-15T09:00:00Z",
    summary: "An intensive 3-hour morning session covering the fundamentals of signal processing.",
    description: "Join us from 9:00 AM to 12:00 PM for an in-depth workshop on Signals. Perfect for those looking to strengthen their foundational knowledge in signal processing and analysis.",
    coverImage: "/placeholder.svg",
    registrationUrl: "#",
    status: "upcoming",
    agenda: [
      { time: "09:00 AM", item: "Introduction to Signals" },
      { time: "10:30 AM", item: "Practical Processing Techniques" },
      { time: "11:30 AM", item: "Q&A and Closing" }
    ]
  },
  {
    slug: "circuits-masterclass",
    title: "Circuits Masterclass",
    date: "2026-10-15T09:00:00Z",
    summary: "A parallel morning session deep-diving into circuit design and applications.",
    description: "Running concurrently from 9:00 AM to 12:00 PM, this Masterclass explores modern circuit design methodologies. Bring your questions and get ready for hands-on learning.",
    coverImage: "/placeholder.svg",
    registrationUrl: "#",
    status: "upcoming",
    agenda: [
      { time: "09:00 AM", item: "Circuit Design Fundamentals" },
      { time: "10:30 AM", item: "Advanced Applications" },
      { time: "11:30 AM", item: "Interactive Troubleshooting" }
    ]
  }
];
