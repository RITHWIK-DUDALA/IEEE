export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  instagram?: string;
  isFacultyAdvisor?: boolean;
};

export const teamData: TeamMember[] = [
  {
    name: "Dr. Jane Smith",
    role: "Faculty Advisor",
    photo: "/placeholder.svg",
    isFacultyAdvisor: true,
  },
  {
    name: "Alex Johnson",
    role: "Chair",
    photo: "/placeholder.svg",
    instagram: "alexj_tech",
  },
  {
    name: "Maria Garcia",
    role: "Vice Chair",
    photo: "/placeholder.svg",
    instagram: "maria.codes",
  },
  {
    name: "David Lee",
    role: "Technical Lead",
    photo: "/placeholder.svg",
    instagram: "david_dev",
  },
  {
    name: "Sarah Chen",
    role: "Events Coordinator",
    photo: "/placeholder.svg",
    instagram: "sarah_events",
  },
  {
    name: "James Wilson",
    role: "Marketing Director",
    photo: "/placeholder.svg",
    instagram: "james_design",
  },
];
