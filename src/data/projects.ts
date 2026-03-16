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
  {
    id: '2',
    slug: 'ai-face-recognition',
    title: 'AI Face Recognition',
    description: 'A web app that uses AI to detect and recognize faces in real time directly in the browser.',
    longDescription:
      'A browser-based face recognition application powered by machine learning. Detects and identifies faces in real time using the webcam, built with modern AI libraries and a clean React interface.',
    techStack: ['React', 'JavaScript', 'AI/ML'],
    liveUrl: 'https://ai-face-recognition-mu.vercel.app/',
    githubUrl: 'https://github.com/patcunko/ai-face-recognition',
    featured: true,
  },
]
