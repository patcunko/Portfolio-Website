import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React, TypeScript, and Tailwind CSS.',
    longDescription:
      'A fully responsive portfolio website showcasing my projects and experience. Built with modern tooling including Vite, React Router, and Framer Motion for animations.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://patrikcunko.com',
    githubUrl: 'https://github.com/yourusername/portfolio',
    featured: true,
  },
  // Add more projects here
]
