import { useState, useEffect } from 'react'

// You can use this hook to conditionally render components based on media queries
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }

    if (media.addEventListener) {
      media.addEventListener('change', listener)
    }
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', listener)
      }
    }
  }, [matches, query])

  return matches
}
