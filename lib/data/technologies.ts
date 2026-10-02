export type Technology = {
  name: string;
  tier: 1 | 2 | 3;
};

export const technologies: Technology[] = [
  { name: "Next.js", tier: 1 },
  { name: "React", tier: 1 },
  { name: "TypeScript", tier: 2 },
  { name: "Node.js", tier: 2 },
  { name: "Tailwind CSS", tier: 2 },
  { name: "Laravel", tier: 3 },
  { name: "PostgreSQL", tier: 2 },
  { name: "MySQL", tier: 3 },
  { name: "Git", tier: 3 },
  { name: "Vercel", tier: 3 },
];
