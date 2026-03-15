import { useEffect, useState } from 'react'

export function useTypewriter(text: string, speed = 85, pause = 2500) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    let timeoutId: ReturnType<typeof setTimeout>

    function type() {
      i++
      setDisplayed(text.slice(0, i))
      if (i < text.length) {
        timeoutId = setTimeout(type, speed)
      } else {
        // fully typed — wait, then reset and repeat
        timeoutId = setTimeout(() => {
          i = 0
          setDisplayed('')
          timeoutId = setTimeout(type, speed)
        }, pause)
      }
    }

    timeoutId = setTimeout(type, speed)
    return () => clearTimeout(timeoutId)
  }, [text, speed, pause])

  return displayed
}
