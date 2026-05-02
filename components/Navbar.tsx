'use client'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useLoaded } from '@/providers/LoadingProvider'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/service', label: 'Service' },
  { href: '/ourwork', label: 'Our Works' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { loaded } = useLoaded()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      const prev = lastScrollY.current
      setScrolled(currentY > 50)
      if (currentY > prev && currentY > 80) {
        setHidden(true)
        setMenuOpen(false)
      } else {
        setHidden(false)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header>
      <motion.nav
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed w-full md:px-10 px-4 md:py-3 py-3 z-[99999] transition-colors duration-500 ${
          scrolled ? 'bg-[rgba(244,244,244,0.85)] backdrop-blur-lg' : ''
        } ${!loaded ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
      >
        <div className="flex max-w-7xl mx-auto w-full justify-between items-center">
          <Link href="/" className="flex items-center text-[20px] font-semibold text-[#111] transition-colors duration-300">
            <img src={"icon2.png"} className='object-cover w-12'/>Webter
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8 text-sm">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link key={link.href} href={link.href}
                  className="relative font-medium text-[#111] transition-colors duration-300 group">
                  {link.label}
                  <span className={`absolute -bottom-0.5 left-0 h-px bg-[#111] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              )
            })}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-5 h-[1.5px] bg-gray-900 transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : '' }} />
            <span className="block w-5 h-[1.5px] bg-gray-900 transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-[1.5px] bg-gray-900 transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : '' }} />
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden max-w-7xl mx-auto"
            >
              <div className="flex flex-col gap-6 py-6 text-2xl font-semibold border-t border-gray-200 mt-3 px-1">
                {links.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`cursor-pointer ${isActive ? 'underline underline-offset-4 decoration-1' : ''}`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}