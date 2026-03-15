import { motion } from 'framer-motion'
import { ArrowDown, Download, FolderOpen } from 'lucide-react'
import { personal } from '@/data/personal'
import { useTypewriter } from '@/hooks/useTypewriter'

export function Hero() {
  const displayedName = useTypewriter(personal.name)

  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        <p className="mb-4 text-base font-medium text-indigo-600 dark:text-indigo-400">
          Hi, I'm
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
          {displayedName}
          <span className="animate-pulse"> |</span>
        </h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-600 sm:text-3xl dark:text-gray-300">
          {personal.title}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          {personal.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-indigo-600 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-indigo-700"
          >
            <FolderOpen size={20} />
            View My Work
          </a>
          <a
            href={personal.resumeUrl}
            download
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-gray-300 bg-white px-7 py-3.5 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-200"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
