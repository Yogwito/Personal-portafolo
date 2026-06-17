export interface ExperienceItem {
  ref: string;
  role: string;
  org: string;
  period: string;
  summary: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    ref: 'EXP-01',
    role: 'Co-Founder',
    org: 'Nextmail',
    period: '2026 — Present',
    summary: 'Email-marketing agency for Shopify DTC brands.',
    points: [
      'Co-founded an email-marketing agency serving Shopify direct-to-consumer brands.',
      'Built a three-tier service model: Audit, Foundation Sprint, and Retainer.',
      'Owns the technical side — automation, deliverability, and tooling.',
    ],
  },
];
