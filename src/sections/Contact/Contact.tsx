import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { personal } from '@/data/personal'
import { useInView } from '@/hooks/useInView'
import { ContactForm } from './ContactForm'

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get In Touch" />
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid gap-12 lg:grid-cols-2"
        >
          {/* Info */}
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400">
              Whether you have a project in mind, a question, or just want to say hi — my inbox is
              always open.
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
              >
                <Mail size={18} />
                {personal.email}
              </a>
              <span className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <MapPin size={18} />
                {personal.location}
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
