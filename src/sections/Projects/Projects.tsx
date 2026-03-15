import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects } from '@/data/projects'
import { useInView } from '@/hooks/useInView'
import { ProjectCard } from './ProjectCard'
import { cn } from '@/utils/cn'

const ALL_LABEL = 'All'

function getFilters() {
  const techs = new Set(projects.flatMap((p) => p.techStack))
  return [ALL_LABEL, ...Array.from(techs)]
}

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05 })
  const [active, setActive] = useState(ALL_LABEL)

  const filters = getFilters()
  const filtered =
    active === ALL_LABEL ? projects : projects.filter((p) => p.techStack.includes(active))

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Projects" subtitle="Things I've built" />

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                active === filter
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
