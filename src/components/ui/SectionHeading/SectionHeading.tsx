import { cn } from '@/utils/cn'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center', className)}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      <div
        className={cn(
          'mt-2 h-1 w-16 rounded-full bg-indigo-600',
          align === 'center' && 'mx-auto'
        )}
      />
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  )
}
