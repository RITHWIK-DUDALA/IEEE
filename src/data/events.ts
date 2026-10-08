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
    slug: "tech-talk-ai-future",
    title: "Tech Talk: The Future of AI",
    date: "2026-09-15T18:00:00Z",
    summary: "Join us for an insightful evening discussing the future of Artificial Intelligence with industry experts.",
    description: "A deep dive into how AI is shaping tomorrow's technology landscape. We will cover recent advancements in LLMs, ethical AI, and practical applications in software engineering.",
    coverImage: "/placeholder.svg",
    registrationUrl: "#",
    status: "upcoming",
  },
  {
    slug: "hackathon-2026",
    title: "Fall Hackathon",
    date: "2026-10-10T09:00:00Z",
    summary: "A 24-hour hackathon focused on building solutions for campus sustainability.",
    description: "Get together with peers, form teams, and build innovative software solutions that address sustainability issues on our campus. Prizes for the top 3 teams!",
    coverImage: "/placeholder.svg",
    registrationUrl: "#",
    status: "upcoming",
  },
  {
    slug: "web-dev-workshop",
    title: "Intro to Modern Web Development",
    date: "2026-08-20T14:00:00Z",
    summary: "Learn the basics of React, Next.js, and Tailwind CSS in this hands-on workshop.",
    description: "This beginner-friendly workshop will guide you through building your first web application using the modern React ecosystem.",
    coverImage: "/placeholder.svg",
    registrationUrl: "#",
    status: "upcoming",
  }
];
