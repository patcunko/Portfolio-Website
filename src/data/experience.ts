import type { Experience } from '@/types/experience'

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TrackRevenue',
    role: 'Software Engineer',
    startDate: 'Sept 2024',
    endDate: 'Present',
    location: 'Toronto, Ontario',
    bullets: [
      'Balanced 11 months of part-time engineering work while completing a full academic course load.',
      'Collaborate with engineers to design and implement features for the TrackRevenue platform.',
      'Build full-stack solutions using Python, JavaScript, Django, React, and Angular.',
      'Develop and maintain RESTful APIs and backend services using PostgreSQL, Redis, and Celery.',
      'Use Docker and Vagrant for consistent development environments and streamlined deployment.',
      'Deploy and support services on AWS and contribute to CI/CD pipelines with Jenkins.',
      'Contribute to scalable systems that support offer management, campaign tracking, and revenue optimization.',
      'Implement features end-to-end and participate in code reviews to ensure quality across the SDLC.',
    ],
  },
  {
    id: '2',
    company: 'TrackRevenue',
    role: 'Software Engineer Intern',
    startDate: 'Nov 2020',
    endDate: 'April 2024',
    location: 'Toronto, Ontario',
    bullets: [
      'Proactively sought mentorship from senior engineers to accelerate technical growth.',
      'Collaborated closely with cross-functional teammates during standups, code reviews, and pair-programming sessions to improve feature quality and accelerate development.',
      'Adapted to the team\'s workflow and coding standards, incorporating feedback to continuously improve code quality and technical understanding.',
      'Participated in design discussions and technical reviews to learn architectural decision-making and better understand system-wide impacts.',
    ],
  },
]
