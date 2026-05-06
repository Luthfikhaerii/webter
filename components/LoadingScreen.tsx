'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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
          }, 600)
        }, 200)
      }
    }
    requestAnimationFrame(step)
  }, [onComplete])

  if (shouldRemove) return null

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
      animate={done ? { opacity: 0, y: -16 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Wrapper bar + label, lebar terbatas di tengah */}
      <div className="w-full max-w-sm flex flex-col items-center gap-3 px-6">
<p className='font-semibold'>WELCOME TO WEBTER</p>
  {/* Bar */}
  <div className="w-full h-[1.5px] bg-gray-200 overflow-hidden rounded-full">
    <motion.div
      className="h-full bg-gray-900 origin-left"
      style={{ scaleX: count / 100 }}
    />
  </div>
  {/* Label + counter */}
  <div className="w-full flex items-center justify-between">
    <p className="text-xs tracking-[0.2em] uppercase text-gray-400">
      Loading experience
    </p>
    <p className="text-xs tabular-nums text-gray-400 tracking-widest">
      {String(count).padStart(3, '0')}
    </p>
  </div>

</div>
    </motion.div>
  )
}