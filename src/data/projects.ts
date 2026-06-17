export interface Project {
  ref: string; // schematic part number, e.g. "PRJ-01"
  title: string;
  summary: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  demoLabel?: string;
  private?: boolean;
}

export const projects: Project[] = [
  {
    ref: 'PRJ-01',
    title: 'Ohana Bowls',
    summary: 'Production food-ordering web app',
    description:
      'A live ordering platform for a food business — menu, cart, and checkout flows running in production with a Supabase backend.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Supabase'],
    github: 'https://github.com/Yogwito/Ohana_Chilli',
    demo: 'https://ohanabowls.com',
    demoLabel: 'ohanabowls.com',
  },
  {
    ref: 'PRJ-02',
    title: 'Email Automator',
    summary: 'Klaviyo-style email-marketing SaaS MVP',
    description:
      'An email-marketing SaaS MVP with campaign scheduling and background job processing — queue-driven sends, auth, and a relational data layer.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'Redis', 'BullMQ', 'Clerk'],
    github: 'https://github.com/Yogwito/Email-automator',
  },
  {
    ref: 'PRJ-03',
    title: 'B&H Veterinary Microservices Platform',
    summary: 'University team microservices project',
    description:
      'A microservices platform built with a university team — service decomposition, a relational data layer, and container orchestration on Kubernetes.',
    tags: ['NestJS', 'Prisma', 'PostgreSQL', 'Kubernetes'],
    private: true,
  },
  {
    ref: 'PRJ-04',
    title: 'HorariosUAM',
    summary: 'Constraint-based academic scheduler',
    description:
      'A desktop scheduler that models academic timetabling as a constraint-satisfaction problem and solves it with Google OR-Tools CP-SAT.',
    tags: ['WPF', '.NET 8', 'SQLite', 'OR-Tools CP-SAT'],
    github: 'https://github.com/Yogwito/previoHoarario',
  },
];
