import { cn } from '@/utils/cn'
import type { HTMLAttributes } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline'
}

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        {
          'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300':
            variant === 'default',
          'border border-gray-300 text-gray-600 dark:border-gray-700 dark:text-gray-400':
            variant === 'outline',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
