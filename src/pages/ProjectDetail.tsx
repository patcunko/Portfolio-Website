import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/Badge'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/404" replace />

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        to="/#projects"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
      >
        <ArrowLeft size={15} />
        Back to Projects
      </Link>

      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        {project.title}
      </h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="mt-8 w-full rounded-xl object-cover shadow-lg"
        />
      )}

      <div className="mt-8 flex gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-indigo-700"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <Github size={15} />
            Source Code
          </a>
        )}
      </div>

      <div className="mt-10 prose prose-gray max-w-none dark:prose-invert">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {project.longDescription ?? project.description}
        </p>
      </div>
    </div>
  )
}
