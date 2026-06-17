export interface EducationItem {
  ref: string;
  institution: string;
  credential: string;
  detail: string;
  period: string;
  location: string;
}

export const education: EducationItem[] = [
  {
    ref: 'EDU-01',
    institution: 'Universidad Autónoma de Manizales',
    credential: 'Systems Engineering',
    detail: 'In progress — 6th semester · expected graduation 2028.',
    period: 'In progress',
    location: 'Manizales, Colombia',
  },
  {
    ref: 'EDU-02',
    institution: 'International Institute of Business & Technology',
    credential: 'Diploma of Information Technology',
    detail: 'AQF-accredited qualification completed in Australia.',
    period: 'Dec 2023',
    location: 'Australia',
  },
];
