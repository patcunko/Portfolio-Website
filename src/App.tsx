import { RouterProvider } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/context/ThemeContext'
import { router } from '@/router'

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <Analytics />
    </ThemeProvider>
  )
}

export default App
