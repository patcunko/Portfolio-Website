import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experiences } from '@/data/experience'
import { useInView } from '@/hooks/useInView'

export function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience" />
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="relative border-l-2 border-gray-200 pl-8 dark:border-gray-800">
            {experiences.map((exp, i) => (
              <div key={exp.id} className={i < experiences.length - 1 ? 'mb-12' : ''}>
                {/* Timeline dot */}
                <div className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-indigo-600 bg-white dark:bg-gray-950" />

                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="font-medium text-indigo-600 dark:text-indigo-400">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                    <p>
                      {exp.startDate} – {exp.endDate}
                    </p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <ul className="mt-3 space-y-1.5">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
