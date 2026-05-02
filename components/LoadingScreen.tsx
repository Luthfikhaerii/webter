// LoadingScreen.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)
  const [shouldRemove, setShouldRemove] = useState(false)

  useEffect(() => {
    let start: number | null = null
    const duration = 2400

    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * 100))
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(100)
        setTimeout(() => {
          setDone(true)
          setTimeout(() => {
            setShouldRemove(true)
            setTimeout(onComplete, 100)
          }, 800)
        }, 300)
      }
    }
    requestAnimationFrame(step)
  }, [onComplete])

  if (shouldRemove) return null

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-white flex flex-col justify-between overflow-hidden"
      initial={{ opacity: 1, y: 0 }}
      animate={done ? { opacity: 0, y: -24 } : { opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* ── TOP BAR ── */}
      <div className="flex items-center justify-between px-6 md:px-10 pt-8 md:pt-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-xs tracking-[0.2em] text-gray-400 uppercase"
        >
          Webter Digital Solution
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xs tracking-widest text-gray-400"
        >
          {new Date().getFullYear()}
        </motion.p>
      </div>

      {/* ── CENTER: LOGO + BRAND NAME ── */}
      <div className="flex flex-col items-center justify-center">
        {/* Brand name */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
            className="font-semibold text-gray-900 tracking-tight flex items-center"
            style={{ fontSize: 'clamp(28px, 5vw, 30px)', letterSpacing: '-0.03em' }}
          >
            <img src={'icon2.png'} className='md:w-23 w-18 md:mt-[-3px]'/>WEBTER
          </motion.p>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="px-6 md:px-10 pb-8 md:pb-10 flex items-end justify-between">
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <div className="w-full h-[1px] bg-gray-200 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-gray-900 origin-left"
              style={{ scaleX: count / 100 }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs tracking-widest text-gray-400"
          >
            Loading experience
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-semibold text-gray-900 tabular-nums"
          style={{ fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: '-0.03em' }}
        >
          {String(count).padStart(3, '0')}
        </motion.p>
      </div>

      {done && (
        <motion.div
          className="absolute inset-0 bg-gray-100 origin-bottom"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
    </motion.div>
  )
}