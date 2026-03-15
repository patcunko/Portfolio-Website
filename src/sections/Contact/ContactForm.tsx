import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(4, 'Subject must be at least 4 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type FormData = z.infer<typeof schema>

const inputClass = cn(
  'w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900',
  'placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20',
  'dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500'
)

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    // Replace with your Formspree endpoint or EmailJS call
    const response = await fetch('https://formspree.io/f/xojknoyr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (response.ok) reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {isSubmitSuccessful && (
        <p className="rounded-lg bg-green-50 p-3 text-sm text-green-700 dark:bg-green-900/30 dark:text-green-400">
          Message sent! I'll get back to you soon.
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input {...register('name')} placeholder="Your name" className={inputClass} />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input {...register('email')} placeholder="your@email.com" className={inputClass} />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <input {...register('subject')} placeholder="Subject" className={inputClass} />
        {errors.subject && (
          <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register('message')}
          placeholder="Your message..."
          rows={5}
          className={cn(inputClass, 'resize-none')}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
