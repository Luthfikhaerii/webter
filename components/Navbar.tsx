'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '/', label: 'Home', active: true },
  { href: '/about', label: 'About' },
  { href: '/service', label: 'Service' },
  { href: '/ourwork', label: 'Our Works' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header>
      <nav className={`fixed w-full md:px-10 px-4 md:py-4 py-3 z-50 transition-all duration-500 ${scrolled ? 'bg-[rgba(244,244,244,0.85)] backdrop-blur-lg' : ''}`}>
        <div className="flex max-w-7xl mx-auto w-full justify-between items-center">
          <Link href="/" className={`flex items-center text-xl font-semibold transition-colors duration-300 ${scrolled ? 'text-[#111]' : 'text-[#111]'}`}>
            <img src={"icon2.png"} className='object-cover w-12'/>WEBTER
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8 text-sm">
            {links.map((link) => (
              <Link key={link.href} href={link.href}
                className={`relative font-semibold transition-colors duration-300 group ${scrolled ? 'text-[#111]' : 'text-[#111]'}`}>
                {link.label}
                <span className={`absolute -bottom-0.5 left-0 h-px bg-[#111] transition-all duration-300 ${link.active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button className="md:hidden flex flex-col gap-[5px] p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
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
              <div className="flex flex-col gap-6 py-6 text-2xl font-semibold border-t border-gray-200 mt-3">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                    className={`cursor-pointer ${link.active ? 'underline underline-offset-4 decoration-1' : ''}`}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}