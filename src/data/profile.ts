export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export interface HeroNode {
  id: string;
  label: string;
}

export const profile = {
  name: 'Juan Sebastian Arias Rueda',
  shortName: 'Juan Sebastian Arias',
  role: 'Systems Engineer',
  location: 'Manizales, Colombia',
  tagline: 'Connecting domains into working products.',
  intro:
    'Systems Engineering student wiring web, infrastructure, algorithms, networking, and business into things that actually ship. Co-founder of an email-marketing agency; builder of production apps, SaaS platforms, and constraint solvers.',
  status: '6th semester · Universidad Autónoma de Manizales · grad 2028',
  email: 'juansearias21@gmail.com',
  cv: '/resume.pdf',
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/Yogwito',
      handle: 'github.com/Yogwito',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/juan-sebastian-arias-rueda-b18802153',
      handle: 'in/juan-sebastian-arias-rueda',
    },
    {
      label: 'Email',
      href: 'mailto:juansearias21@gmail.com',
      handle: 'juansearias21@gmail.com',
    },
  ] satisfies SocialLink[],
  // Domains Juan connects — rendered as the hero node-network
  heroNodes: [
    { id: 'web', label: 'Web' },
    { id: 'infra', label: 'Infra' },
    { id: 'algorithms', label: 'Algorithms' },
    { id: 'networking', label: 'Networking' },
    { id: 'business', label: 'Business' },
  ] satisfies HeroNode[],
};
