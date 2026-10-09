export type TeamMember = {
  name: string;
  role: string;
  isFacultyAdvisor?: boolean;
};

export const teamData: TeamMember[] = [
  {
    name: "Dr. Sountharrajan S.",
    role: "Mentor",
    isFacultyAdvisor: true,
  },
  {
    name: "Bhaanu Teja Reddy",
    role: "Chair",
  },
  {
    name: "D. Rithwik Satya Sai Ganesh",
    role: "Vice Chair",
  },
  {
    name: "Mounish",
    role: "Secretary",
  },
  {
    name: "Shagini Selvakumar",
    role: "Web Master",
  },
  {
    name: "Nivideta",
    role: "Treasurer",
  },
];
