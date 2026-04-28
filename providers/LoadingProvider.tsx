'use client'
import { AnimatePresence } from 'framer-motion'
import { createContext, useContext } from 'react'
import { usePageLoading } from '@/hooks/usePageLoading'
import LoadingScreen from '@/components/LoadingScreen'

const LoadingContext = createContext({ loaded: false })
export const useLoaded = () => useContext(LoadingContext)

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const { loaded, showLoading, handleComplete } = usePageLoading()

  return (
    <LoadingContext.Provider value={{ loaded }}>
      <AnimatePresence>
        {showLoading && <LoadingScreen onComplete={handleComplete} />}
      </AnimatePresence>
      {children}
    </LoadingContext.Provider>
  )
}