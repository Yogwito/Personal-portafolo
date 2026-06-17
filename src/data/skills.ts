export interface SkillGroup {
  ref: string;
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    ref: 'A',
    title: 'Languages',
    items: ['Java', 'Python', 'C#', 'TypeScript / JavaScript', 'SQL', 'Haskell'],
  },
  {
    ref: 'B',
    title: 'Frontend',
    items: ['React', 'Vite', 'Tailwind'],
  },
  {
    ref: 'C',
    title: 'Backend & Data',
    items: ['NestJS', 'Node.js', 'Prisma', '.NET', 'PostgreSQL', 'Supabase', 'Redis'],
  },
  {
    ref: 'D',
    title: 'Infra',
    items: ['Docker', 'Kubernetes', 'Git / GitFlow', 'Cloudflare Pages'],
  },
  {
    ref: 'E',
    title: 'Networking',
    items: ['Cisco', 'OSPF', 'VLANs'],
  },
  {
    ref: 'F',
    title: 'Languages Spoken',
    items: ['Spanish — Native', 'English — Fluent'],
  },
];
