import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { skills } from '@/data/skills'
import { useInView } from '@/hooks/useInView'
import type { SkillCategory } from '@/types/skill'

const CATEGORIES: SkillCategory[] = ['Frontend', 'Backend', 'Tools', 'Other']

export function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  const grouped = CATEGORIES.reduce<Record<SkillCategory, typeof skills>>(
    (acc, cat) => {
      acc[cat] = skills.filter((s) => s.category === cat)
      return acc
    },
    { Frontend: [], Backend: [], Tools: [], Other: [] }
  )

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skills" />
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CATEGORIES.filter((cat) => grouped[cat].length > 0).map((category) => (
            <div key={category}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {grouped[category].map((skill) => (
                  <Badge key={skill.name}>{skill.name}</Badge>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
