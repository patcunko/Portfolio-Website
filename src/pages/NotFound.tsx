import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
      <p className="text-8xl font-bold text-indigo-600">404</p>
      <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">Page not found</h1>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-indigo-700"
      >
        Go home
      </Link>
    </div>
  )
}
