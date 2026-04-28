import { useEffect, useState } from 'react'

export function usePageLoading() {
  const [loaded, setLoaded] = useState(false)
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem('webter_loaded')

    const isRefresh = (
      window.performance?.getEntriesByType('navigation')?.[0] as PerformanceNavigationTiming
    )?.type === 'reload'

    if (alreadyLoaded && !isRefresh) {
      setLoaded(true)
      setShowLoading(false)
    } else {
      sessionStorage.removeItem('webter_loaded')
      setShowLoading(true)
    }
  }, [])

  const handleComplete = () => {
    sessionStorage.setItem('webter_loaded', 'true')
    setLoaded(true)
  }

  return { loaded, showLoading, handleComplete }
}