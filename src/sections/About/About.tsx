import { motion } from 'framer-motion'
import { MapPin, Mail } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { personal } from '@/data/personal'
import { useInView } from '@/hooks/useInView'

export function About() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" />
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl space-y-6 text-center"
        >
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            {personal.bio}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1.5">
              <MapPin size={15} />
              {personal.location}
            </span>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Mail size={15} />
              {personal.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
