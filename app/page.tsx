'use client'
import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView, Variants } from 'framer-motion'

/* ── helpers ── */
function RevealDiv({ children, className, delay = 0, direction = 'up' }: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'fade'
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })
  const initial =
    direction === 'left' ? { opacity: 0, x: -50 }
      : direction === 'right' ? { opacity: 0, x: 50 }
        : direction === 'fade' ? { opacity: 0 }
          : { opacity: 0, y: 30 }
  const animate = inView ? { opacity: 1, x: 0, y: 0 } : initial

  return (
    <motion.div ref={ref} initial={initial} animate={animate}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={className}>
      {children}
    </motion.div>
  )
}

const wordVariants: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: (delay: number) => ({
    y: 0, opacity: 1,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94], delay }
  })
}

const badgeVariants: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut', delay: 0.6 } }
}

const services = [
  { num: 'a.', label: 'Company Profile' },
  { num: 'b.', label: 'Portfolio Personal' },
  { num: 'c.', label: 'Information System' },
  { num: 'd.', label: 'Custom Website' },
]

const values = [
  { title: 'Strategic Thinking', desc: 'setiap keputusan berbasis data dan tujuan bisnis yang jelas.' },
  { title: 'Quality First', desc: 'kami mengutamakan detail dan standar tinggi dalam setiap hasil.' },
  { title: 'Clear Communication', desc: 'proses transparan, komunikasi terarah, tanpa kebingungan.' },
  { title: 'Result Oriented', desc: 'fokus pada dampak nyata, bukan sekadar output.' },
]

const works = [
  { num: '01', title: 'Lab Kimia Instrumen UPI', img: '/image/gbi.jpg' },
  { num: '02', title: 'PT Gudang Belanja Indonesia', img: '/image/lki.jpg' },
  { num: '03', title: 'Leading University For International Cooperation (LUPIC)', img: '/image/lupic.jpg' },
  { num: '04', title: 'Langkahsana', img: '/image/langkahsana.jpg' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80', alt: 'Programming' },
  { src: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=800&q=80', alt: 'UI UX' },
  { src: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80', alt: 'Developer workspace' },
  { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80', alt: 'Software' },
  { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80', alt: 'Web development' },
]

/* ── SCROLL FADE SECTION ── */
function ScrollFadeSection({ children, className, style }: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  // Fade out saat scroll meninggalkan section (mulai fade di 55%, selesai di 100%)
const opacity = useTransform(scrollYProgress, [0.3, 0.85], [1, 0])
const y = useTransform(scrollYProgress, [0.3, 0.85], [0, -40])

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y, ...style }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

/* ── HERO WORD ── */
function HeroWord({ word, delay }: { word: string; delay: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        custom={delay}
        variants={wordVariants}
        initial="hidden"
        animate="visible"
        className="inline-block"
      >
        {word}
      </motion.span>
    </span>
  )
}

export default function Home() {
  /* ── Hero parallax ── */
  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0])
  const heroY = useTransform(scrollY, [0, 600], [0, 132])

  /* ── Gallery strip ── */
  const stripSectionRef = useRef<HTMLElement>(null)
  const stripTrackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const section = stripSectionRef.current
      const track = stripTrackRef.current
      if (!section || !track) return
      const scrollY = window.scrollY
      const vh = window.innerHeight
      const stripTop = section.offsetTop
      const stripH = section.offsetHeight
      const isMobile = window.innerWidth < 768
      if (scrollY >= stripTop && scrollY <= stripTop + stripH - vh) {
        const progress = (scrollY - stripTop) / (stripH - vh)
        const maxX = track.scrollWidth - window.innerWidth + (isMobile ? 32 : 64)
        track.style.transform = `translateX(-${Math.min(progress * maxX, maxX)}px)`
      } else if (scrollY < stripTop) {
        track.style.transform = 'translateX(0px)'
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main style={{ overflowX: 'clip' }}>

      {/* ── HERO ── */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, overflowX: 'clip' }}
        className="md:px-8 px-4 md:min-h-screen min-h-[50vh] flex items-end relative"
      >
        {/* Floating circle */}
        <div className="absolute right-[-120px] top-[-80px] w-[280px] h-[280px] border-[50px] md:right-[-200px] md:top-[-200px] md:w-[600px] md:h-[600px] md:border-[80px] rounded-full border-gray-600 opacity-10 pointer-events-none" />

        <motion.div style={{ y: heroY }} className="relative z-50 max-w-7xl mx-auto w-full pb-10 md:pb-16">

          {/* Mobile badge */}
          <motion.p
            variants={badgeVariants}
            initial="hidden"
            animate="visible"
            className="md:hidden text-[10px] text-gray-500 leading-relaxed mb-6 max-w-[180px]"
          >
            Menggabungkan teknologi modern untuk menghadirkan solusi digital yang relevan
          </motion.p>

          {/* Heading */}
          <h1
            className="font-semibold leading-[0.92]"
            style={{ fontSize: 'clamp(40px, 10vw, 120px)', letterSpacing: '-0.03em' }}
          >
            {/* Baris 1 */}
            <div className="flex items-end flex-wrap" style={{ gap: '0 0.2em' }}>
              <HeroWord word="BUILD" delay={0.05} />
              <HeroWord word="YOUR" delay={0.18} />
              {/* Desktop badge — sejajar bawah dengan teks */}
              <motion.span
                variants={badgeVariants}
                initial="hidden"
                animate="visible"
                className="hidden md:inline-block font-normal leading-relaxed text-gray-500 pb-[0.15em]"
                style={{ fontSize: '13px', letterSpacing: '0', width: '11rem', marginLeft: '0.3em' }}
              >
                Menggabungkan teknologi modern untuk menghadirkan solusi digital yang relevan
              </motion.span>
            </div>

            {/* Baris 2 */}
            <div className="flex items-baseline flex-wrap" style={{ gap: '0 0.2em' }}>
              <HeroWord word="DIGITAL" delay={0.32} />
              <HeroWord word="FUTURE" delay={0.46} />
            </div>
          </h1>

        </motion.div>
      </motion.section>

      {/* ── GALLERY STRIP ── */}
      {/* Gallery tidak pakai ScrollFadeSection karena sticky & height khusus */}
      <section ref={stripSectionRef} style={{ height: '400vh', position: 'relative' }}>
        <div className="sticky top-0 md:h-screen h-[70vh] flex flex-col justify-center overflow-hidden">
          <p className="text-base tracking-widest text-gray-400 mb-6 md:px-8 px-4">(GALLERY)</p>
          <div ref={stripTrackRef} id="stripTrack" className="md:px-8 px-4">
            {galleryImages.map((img) => (
              <div key={img.src} className="strip-img-item">
                <img src={img.src} alt={img.alt} className="w-full h-[55vh] object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEXT ── */}
      <ScrollFadeSection className="relative z-20 overflow-visible">
        <div className="float-2 absolute left-[-250px] w-[600px] h-[600px] rounded-full border-[60px] border-gray-300 opacity-20 pointer-events-none" />
        <div className="md:px-8 px-4 max-w-7xl mx-auto w-full md:pt-4 pt-8 relative z-50">
          <RevealDiv>
            <div className="md:gap-8">
              <div className="hidden mb-12 md:block col-span-2">
                <p className="text-base tracking-widest text-gray-400 pt-1">(ABOUT)</p>
              </div>
              <div className="col-span-12 md:col-span-10">
                <p className="text-xs tracking-widest text-gray-400 mb-4 md:hidden">(ABOUT)</p>
                <p className="indent-16 leading-[1.55] font-normal text-gray-600 md:text-4xl text-xl text-start">
                  <span className="font-bold text-gray-900">Kami Adalah Agency Digital Yang Berfokus Pada Pengembangan Website </span> Dengan Pendekatan Strategis Dan Terstruktur, Yang Dirancang Untuk Membantu
                  Membangun Kehadiran Digital Yang Jelas Dan Efektif Bagi Bisnis Anda.
                </p>
              </div>
            </div>
          </RevealDiv>
        </div>
      </ScrollFadeSection>

      {/* ── SERVICE ── */}
      <ScrollFadeSection className="md:pt-40 pt-12">
        <div className="md:px-8 px-4 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-12 gap-4 md:gap-8">

            <div className="hidden md:flex col-span-2 items-start pt-8">
              <p className="text-base tracking-widest text-gray-400">(SERVICES)</p>
            </div>

            <div className="col-span-12 md:col-span-10">
              <p className="text-xs tracking-widest text-gray-400 mb-2 md:hidden">(SERVICES)</p>

              {services.map((s, i) => (
                <RevealDiv key={s.num} delay={i * 0.07}>
                  <div className="grid grid-cols-12 items-center py-8 border-b border-gray-300 group cursor-pointer">
                    <p className="md:col-span-4 col-span-3 text-gray-400 md:text-3xl text-base font-normal">+</p>
                    <p className="md:col-span-7 col-span-8 text-xl md:text-3xl font-semibold text-gray-900">{s.label}</p>
                    <div className="col-span-1 text-light  flex justify-end text-gray-700 text-3xl group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      {'>'}
                    </div>
                  </div>
                </RevealDiv>
              ))}
            </div>

          </div>
        </div>
      </ScrollFadeSection>

      {/* ── IMAGE STRIP ── */}
      <ScrollFadeSection className="md:px-8 px-4 md:pt-40 pt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <RevealDiv delay={0.1} className="col-span-4">
            <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80"
              alt="Programming" className="w-full h-[600px] object-cover" />
          </RevealDiv>
        </div>
      </ScrollFadeSection>

      {/* ── VALUES ── */}
      <ScrollFadeSection className="md:px-8 px-4 md:pt-40 pt-12 relative overflow-hidden">
        <div className="max-w-7xl relative z-20 mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

            <div className="hidden md:block md:col-span-5">
              <RevealDiv direction="left">
                <img
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80"
                  alt="Values"
                  className="w-full h-[520px] object-cover"
                />
              </RevealDiv>
            </div>

            <div className="md:col-span-7">
              <div className='md:grid grid-cols-12'>
                <div className=''></div>
                <div className='col-span-11'>
                  <p className="text-base tracking-widest text-gray-400 mb-8">(VALUES)</p>

                  <div className="w-full">
                    {values.map((v, i) => (
                      <RevealDiv key={v.title} delay={i * 0.08}>
                        <div className="py-6 md:py-6 border-b border-gray-300">
                          <h3 className={`leading-tight font-normal text-xl md:text-4xl transition-colors ${i === 0 ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                            {v.title}
                          </h3>
                        </div>
                      </RevealDiv>
                    ))}
                  </div>

                  <RevealDiv delay={0.35} className="mt-8">
                    <p className="text-xs md:text-base text-gray-800 leading-relaxed max-w-lg">
                      Menggabungkan teknologi modern untuk menghadirkan solusi digital
                      yang relevan Menggabungkan teknologi modern untuk menghadirkan
                      solusi digital yang relevan
                    </p>
                  </RevealDiv>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="float-1 absolute right-[-150px] bottom-0 w-[400px] h-[400px] border-[60px] border-gray-200 rounded-full opacity-40 pointer-events-none" />
      </ScrollFadeSection>

      {/* ── QUOTE ── */}
      <ScrollFadeSection className="relative md:pt-40 pt-16">
        <div className="max-w-7xl mx-auto md:px-8 px-4">
          <div className="grid grid-cols-12 gap-4 md:gap-8 relative z-10">

            <div className="hidden md:flex col-span-2 items-start pt-2">
              <p className="text-base tracking-widest text-gray-400">(SERVICES)</p>
            </div>

            <div className="col-span-12 md:col-span-10">
              <p className="text-xs tracking-widest text-gray-400 mb-6 md:hidden">(SERVICES)</p>

              <RevealDiv delay={0.1}>
                <blockquote className="text-gray-900 font-normal leading-[1.5] text-justify text-3xl">
                  "Kami Adalah Agency Digital Yang Berfokus Pada
                  Pengembangan Website Dengan Pendekatan Strategis
                  Dan Terstruktur Yang"
                </blockquote>
              </RevealDiv>

              <RevealDiv delay={0.2} className="mt-10 md:mt-14">
                <p className="font-bold text-sm md:text-lg text-gray-900">Luthfi Khaeri Ihsan</p>
                <p className="text-gray-400 text-xs md:text-sm mt-1">Founder Webter</p>
              </RevealDiv>

            </div>
          </div>
        </div>
        <div className="float-2 absolute left-[-200px] bottom-0 w-[500px] h-[500px] border-[60px] border-gray-300 rounded-full opacity-30 pointer-events-none" />
      </ScrollFadeSection>

      {/* ── OUR WORKS ── */}
      <ScrollFadeSection className="relative md:pt-40 pt-16 pb-20">
        <div className="max-w-7xl mx-auto md:px-8 px-4">

          <p className="text-base tracking-widest text-gray-400 mb-6">(OUR WORKS)</p>

          {/* Row 1 */}
          <div className="border-t border-gray-300 pt-8 pb-8">
            <div className="md:grid grid-cols-2 gap-6 md:gap-8">
              {[
                { title: 'Lab Kimia Instrumeny UPI', img: '/image/gbi.jpg' },
                { title: 'Lab Kimia Instrumeny UPI', img: '/image/lki.jpg' },
              ].map((w, i) => (
                <RevealDiv key={i} delay={i * 0.08}>
                  <div className="flex flex-col gap-3 cursor-pointer group">
                    <div className="w-full overflow-hidden bg-gray-200" style={{ aspectRatio: '4/3' }}>
                      <img
                        src={w.img}
                        alt={w.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-sm md:text-base font-normal text-gray-900 leading-snug">{w.title}</p>
                  </div>
                </RevealDiv>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="border-t border-gray-200 pt-8 pb-8">
            <div className="md:grid grid-cols-2 gap-6 md:gap-8">
              {[
                { title: 'Lab Kimia Instrumeny UPI', img: '/image/lupic.jpg' },
                { title: 'Lab Kimia Instrumeny UPI', img: '/image/langkahsana.jpg' },
              ].map((w, i) => (
                <RevealDiv key={i} delay={i * 0.08}>
                  <div className="flex flex-col gap-3 cursor-pointer group">
                    <div className="w-full overflow-hidden bg-gray-200" style={{ aspectRatio: '4/3' }}>
                      <img
                        src={w.img}
                        alt={w.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-sm md:text-base font-normal text-gray-900 leading-snug">{w.title}</p>
                  </div>
                </RevealDiv>
              ))}
            </div>
          </div>

          <div className="border-b border-gray-200" />

        </div>
      </ScrollFadeSection>

    </main>
  )
}