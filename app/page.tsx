'use client'
import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView, Variants } from 'framer-motion'
import { useLoaded } from '@/providers/LoadingProvider'
import { ChevronRight } from 'lucide-react'

/* ─────────────────────────────────────────────────────────────
   DESIGN TOKENS
   Label     : text-[10px] tracking-[0.3em] uppercase text-gray-400
   Body sm   : text-sm text-gray-500 leading-relaxed
   Body base : text-base text-gray-600 leading-relaxed
   Heading S : text-2xl md:text-3xl font-medium
   Heading M : text-3xl md:text-4xl font-medium
   Heading L : text-4xl md:text-5xl font-medium
   Section gap mobile  : pt-24
   Section gap desktop : md:pt-32
───────────────────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────────────── */
const values = [
  { title: 'Strategic Thinking', desc: 'Setiap keputusan berbasis data dan tujuan bisnis yang jelas.' },
  { title: 'Quality First', desc: 'Kami mengutamakan detail dan standar tinggi dalam setiap hasil.' },
  { title: 'Clear Communication', desc: 'Proses transparan, komunikasi terarah, tanpa kebingungan.' },
  { title: 'Result Oriented', desc: 'Fokus pada dampak nyata, bukan sekadar output.' },
]

const works = [
  { num: '01', title: 'Lab Kimia Instrumen UPI', img: '/project/lki.png' },
  { num: '02', title: 'Langkahsana Community', img: '/project/langkahsana.png' },
  { num: '03', title: 'Leading University For International Cooperation (LUPIC)', img: '/project/lupic.png' },
  { num: '04', title: 'Gudang Belanja Indonesia', img: '/project/gbi.png' },
]

const galleryImages = [
  { src: '/strip/lki_strip.webp', alt: 'lki' },
  { src: '/strip/langkahsana_strip.webp', alt: 'langkahsana' },
  { src: '/strip/gbi_strip.webp', alt: 'gbi' },
  { src: '/strip/sicabdin_strip.webp', alt: 'sicabdin' },
]

const services = [
  { num: 'a.', label: 'Company Profile', img: '/service/compro_service.png', desc: 'Representasi digital terbaik untuk bisnis Anda.' },
  { num: 'b.', label: 'Portfolio Personal', img: '/service/portfolio_service.png', desc: 'Tampilkan karya dan identitas Anda secara profesional.' },
  { num: 'c.', label: 'Information System', img: '/service/system_service.png', desc: 'Sistem informasi terstruktur untuk efisiensi operasional.' },
  { num: 'd.', label: 'Custom Website', img: '/service/custom_service.png', desc: 'Website unik sesuai kebutuhan dan visi Anda.' },
]

/* ─────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────────────────────── */
const wordVariants: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
}

const badgeVariants: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut', delay: 0.6 } },
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
}

/* ─────────────────────────────────────────────────────────────
   FLOATING CIRCLE
───────────────────────────────────────────────────────────── */
function FloatingCircle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{ y: [0, -40, 0], x: [0, 25, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

/* ─────────────────────────────────────────────────────────────
   BRIGHTNESS WRAPPER
───────────────────────────────────────────────────────────── */
function BrightnessWrapper({ brightness, children }: { brightness: any; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const unsub = brightness.on('change', (v: number) => {
      if (ref.current) {
        ref.current.style.filter = `brightness(${v})`
        ref.current.style.pointerEvents = v < 0.3 ? 'none' : 'auto'
      }
    })
    return unsub
  }, [brightness])

  return <div ref={ref} className="w-full h-full">{children}</div>
}

/* ─────────────────────────────────────────────────────────────
   REVEAL DIV  (scroll-triggered fade-up / fade-left / etc.)
───────────────────────────────────────────────────────────── */
function RevealDiv({
  children, className, delay = 0, direction = 'up',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'fade'
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })

  const initial =
    direction === 'left' ? { opacity: 0, x: -50 } :
      direction === 'right' ? { opacity: 0, x: 50 } :
        direction === 'fade' ? { opacity: 0 } :
          { opacity: 0, y: 30 }

  const animate = inView ? { opacity: 1, x: 0, y: 0 } : initial

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      style={{ pointerEvents: 'auto' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────────
   SCROLL FADE SECTION  (wrapper — efek scroll sudah dihapus)
───────────────────────────────────────────────────────────── */
function ScrollFadeSection({ children, className, style }: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <section style={{ pointerEvents: 'auto', ...style }} className={className}>
      {children}
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   HERO WORD  (animated word reveal)
───────────────────────────────────────────────────────────── */
function HeroWord({ word, delay, pb, isLoaded }: {
  word: string; delay: number; pb: number; isLoaded: boolean
}) {
  return (
    <span
      className={`inline-block overflow-hidden align-bottom pb-${pb}`}
      style={{ pointerEvents: 'auto' }}
    >
      <motion.span
        custom={delay}
        variants={wordVariants}
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
        className="inline-block uppercase"
        style={{ pointerEvents: 'auto' }}
      >
        {word}
      </motion.span>
    </span>
  )
}

/* ─────────────────────────────────────────────────────────────
   HIGHLIGHT TEXT  (word-by-word opacity on scroll)
───────────────────────────────────────────────────────────── */
function WordHighlight({ word, bold, index, total, scrollYProgress }: {
  word: string; bold: boolean; index: number; total: number; scrollYProgress: any
}) {
  const start = index / total
  const end = Math.min(start + 2 / total, 1)
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1])

  return (
    <motion.span
      style={{ opacity, pointerEvents: 'auto' }}
      className={`inline ${bold ? 'font-semibold text-gray-900' : 'text-gray-600'}`}
    >
      {word}{' '}
    </motion.span>
  )
}

function HighlightText() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.4'],
  })

  const fullText = 'Webter adalah digital agency yang berfokus pada pengembangan website dan sistem informasi yang terstruktur, strategis, dan dirancang untuk membantu bisnis tumbuh secara efektif di era digital.'
  const boldEnd = 'Pengembangan Website '
  const words = fullText.split(' ')
  const boldWords = boldEnd.trim().split(' ')
  let boldCount = 0

  const wordList = words.map((word, i) => {
    const isBold = boldCount < boldWords.length
    if (isBold) boldCount++
    return { word, bold: isBold, index: i }
  })

  return (
    <div ref={containerRef} style={{ pointerEvents: 'auto' }}>
      <p className="leading-[1.55] font-normal text-2xl md:text-3xl text-start">
        {wordList.map(({ word, bold, index }) => (
          <WordHighlight
            key={index}
            word={word}
            bold={bold}
            index={index}
            total={wordList.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   SERVICE ITEM  (sticky stack with scale + parallax)
───────────────────────────────────────────────────────────── */
function ServiceItem({ s, i, total }: {
  s: { num: string; label: string; img: string; desc: string }
  i: number
  total: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const yLabel = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96])

  return (
    <div ref={ref} className="relative" style={{ position: 'sticky', top: '60px', zIndex: i + 1 }}>
      <motion.div style={{ scale }} className="bg-white border-t border-gray-300 overflow-hidden">
        <motion.div
          style={{ y: yLabel, pointerEvents: 'auto' }}
          className="grid grid-cols-12 items-center py-6 md:py-8 group cursor-pointer"
        >
          <p className="md:col-span-4 col-span-3 text-[10px] md:text-sm tracking-[0.3em] uppercase text-gray-400">
            {i + 1 < 10 ? `0${i + 1}` : i + 1}
          </p>
          <div className="md:col-span-7 col-span-8">
            <p className="text-2xl md:text-3xl font-medium text-gray-900">{s.label}</p>
            <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">{s.desc}</p>
          </div>
          <div className="col-span-1 flex justify-end text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <ChevronRight className="w-4 md:w-8" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   IMAGE → VALUES TRANSITION
───────────────────────────────────────────────────────────── */
function ImageToValuesTransition() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ['start start', 'end end'] })

  const imageScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.88])
  const imageBrightness = useTransform(scrollYProgress, [0, 0.4], [1, 0.4])
  const imageY = useTransform(scrollYProgress, [0, 0.4], ['0%', '-6%'])
  const valuesY = useTransform(scrollYProgress, [0.3, 0.55], [100, 0])
  const valuesOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])

  const { scrollYProgress: pxProgress } = useScroll({ target: wrapperRef, offset: ['start end', 'center start'] })
  const imgY = useTransform(pxProgress, [0, 1], ['-10%', '10%'])
  const textY = useTransform(pxProgress, [0.1, 0.5], ['40px', '-40px'])
  const textOpacity = useTransform(pxProgress, [0.15, 0.3, 0.6, 0.75], [0, 1, 1, 0])

  useEffect(() => {
    const unsubY = valuesY.on('change', (v) => {
      if (valuesRef.current) {
        valuesRef.current.style.transform = `translateY(${v}%)`
        valuesRef.current.style.pointerEvents = v < 50 ? 'auto' : 'none'
      }
    })
    const unsubO = valuesOpacity.on('change', (v) => {
      if (valuesRef.current) valuesRef.current.style.opacity = String(v)
    })
    return () => { unsubY(); unsubO() }
  }, [valuesY, valuesOpacity])

  return (
    <div ref={wrapperRef} className="relative md:h-[240vh] h-[200vh] md:mt-32 mt-[-80px]">

      {/* IMAGE */}
      <div className="sticky top-0 w-full overflow-hidden" style={{ height: '100vh', zIndex: 1 }}>
        <motion.div style={{ scale: imageScale, y: imageY }} className="w-full h-full">
          <BrightnessWrapper brightness={imageBrightness}>
            <div className="w-full h-full flex items-center">
              <div className="w-full relative h-[55vh] md:h-[80vh]">
                <div className="w-full h-full overflow-hidden relative">
                  <motion.img
                    src="/section/section.png"
                    alt="Monitor workspace"
                    loading="eager"
                    decoding="async"
                    fetchPriority="low"
                    style={{ y: imgY, height: '125%', top: '-20%' }}
                    className="absolute inset-x-0 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                  <motion.div
                    style={{ y: textY, opacity: textOpacity }}
                    className="absolute bottom-8 md:bottom-14 left-6 md:left-10 right-6 md:right-10"
                  >
                    <p className="text-[10px] tracking-[0.3em] text-white/50 uppercase mb-3">Our Approach</p>
                    <p className="font-medium text-white leading-[1.1] text-2xl md:text-3xl">
                      Membangun Pengalaman <br className="hidden md:block" />
                      Digital yang Bermakna.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </BrightnessWrapper>
        </motion.div>
      </div>

      {/* VALUES */}
      <div
        ref={valuesRef}
        className="sticky top-0 w-full bg-white md:px-8 px-4 md:pt-24 pt-20 pb-16"
        style={{
          zIndex: 10,
          transform: 'translateY(100%)',
          opacity: 0,
          willChange: 'transform, opacity',
          minHeight: '90vh',
          pointerEvents: 'none',
        }}
      >
        <div className="max-w-7xl relative mx-auto w-full">

          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-10">(VALUES)</p>

          <RevealDiv direction="up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-8 border-b border-gray-300">
              <div>
                <div className="w-8 h-[1.5px] bg-gray-900 mb-3" />
                <h2 className="text-3xl md:text-4xl font-medium text-gray-900 leading-[1.15]">
                  Hal yang kami<br />
                  pegang teguh<br />
                  dalam setiap kerja.
                </h2>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed md:max-w-[220px] md:text-right tracking-tight">
                Prinsip-prinsip ini bukan sekadar kata — melainkan fondasi dari setiap
                solusi digital yang kami hadirkan.
              </p>
            </div>
          </RevealDiv>

          <div className="flex flex-col">
            {values.map((v, i) => (
              <RevealDiv key={v.title} delay={i * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-2 items-start py-6 border-b border-gray-300 group">
                  <h3 className={`text-2xl leading-tight transition-colors duration-300 group-hover:text-gray-900 relative z-10 ${i === 0 ? 'text-gray-900 font-medium' : 'text-gray-400 font-normal'
                    }`}>
                    {v.title}
                  </h3>
                  <p className="hidden md:block text-sm text-gray-500 leading-relaxed pl-6 border-l border-gray-300 max-w-[260px] tracking-tight">
                    {v.desc}
                  </p>
                </div>
              </RevealDiv>
            ))}
          </div>

        </div>
        <FloatingCircle className="float-1 absolute right-[-150px] bottom-0 w-[400px] h-[400px] border-[60px] border-gray-200 rounded-full opacity-20 pointer-events-none" />
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   QUOTE SECTION  (static — scroll animasi dinonaktifkan)
───────────────────────────────────────────────────────────── */
function QuoteSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })

  // Variabel scroll disimpan agar tidak break hook order, tapi tidak dipakai di render
  const _x = useTransform(scrollYProgress, [0, 0.5], ['-100%', '0%'])
  const _authorOpacity = useTransform(scrollYProgress, [0.6, 0.85], [0, 1])
  const _authorY = useTransform(scrollYProgress, [0.6, 0.85], [24, 0])

  return (
    <div
      ref={sectionRef}
      style={{ height: 'auto', isolation: 'isolate', position: 'relative', zIndex: 20 }}
    >
      <div
        className="h-auto flex items-center overflow-hidden bg-white py-24 md:py-36"
        style={{ pointerEvents: 'auto' }}
      >
        <div className="max-w-7xl mx-auto md:px-8 px-4 w-full">
          <div className="grid grid-cols-12 gap-4 md:gap-8 relative z-10">

            {/* Label desktop */}
            <div className="hidden md:flex col-span-2 items-start self-start pt-1">
              <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400">(QUOTES)</p>
            </div>

            <div className="col-span-12 md:col-span-10 overflow-hidden">
              {/* Label mobile */}
              <RevealDiv direction="fade">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-8 md:hidden">(QUOTES)</p>
              </RevealDiv>

              {/* Quote */}
              <RevealDiv direction="up" delay={0.1}>
                <blockquote className="text-gray-900 font-medium leading-[1.45] text-2xl md:text-3xl">
                  "Solusi digital yang baik bukan hanya terlihat menarik, tapi mampu menyelesaikan masalah dan menciptakan peluang baru"
                </blockquote>
              </RevealDiv>

              {/* Author */}
              <RevealDiv direction="up" delay={0.22} className="mt-10 md:mt-14">
                <p className="font-medium text-sm text-gray-900 tracking-wide">Luthfi Khaeri Ihsan</p>
                <p className="text-gray-400 text-xs tracking-[0.2em] uppercase mt-1">Founder Webter</p>
              </RevealDiv>
            </div>

          </div>
        </div>
        <FloatingCircle className="float-2 absolute left-[-200px] bottom-0 w-[500px] h-[500px] border-[60px] border-gray-300 rounded-full opacity-15 pointer-events-none" />
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────────────────────── */
export default function Home() {
  const { loaded } = useLoaded()

  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0])
  const heroY = useTransform(scrollY, [0, 600], [0, 132])

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
    <motion.main
      style={{ overflowX: 'clip' }}
      initial={{ opacity: 0 }}
      animate={loaded ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      className="tracking-tighter"
    >

      {/* ── HERO ─────────────────────────────────────────────── */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, overflowX: 'clip', pointerEvents: 'auto' }}
        className="md:px-8 px-4 md:min-h-[70vh] min-h-[50vh] mb-8 flex items-end relative"
      >
        {/* Decorative circle */}
        <div className="absolute right-[-120px] top-[-80px] w-[280px] h-[280px] border-[50px]
                        md:right-[-200px] md:top-[-200px] md:w-[600px] md:h-[600px] md:border-[80px]
                        rounded-full border-gray-600 opacity-10 pointer-events-none" />

        <motion.div style={{ y: heroY, pointerEvents: 'auto' }} className="relative z-50 max-w-7xl mx-auto w-full">

          {/* Sub-text mobile */}
          <motion.p
            variants={badgeVariants}
            initial="hidden"
            animate={loaded ? 'visible' : 'hidden'}
            className="md:hidden text-[9px] text-gray-500 leading-relaxed mb-6 max-w-[180px] tracking-tighter"
            style={{ pointerEvents: 'auto' }}
          >
            Menggabungkan teknologi modern untuk menghadirkan solusi digital yang relevan
          </motion.p>

          <h1
            className="md:leading-[1] leading-[1.3]"
            style={{ fontSize: 'clamp(40px, 10vw, 110px)', fontWeight: '900', pointerEvents: 'auto' }}
          >
            <div className="flex items-end flex-wrap" style={{ gap: '0 0.2em' }}>
              <HeroWord word="Build" delay={0.05} pb={0} isLoaded={loaded} />
              <HeroWord word="Your" delay={0.18} pb={0} isLoaded={loaded} />
              {/* Sub-text desktop */}
              <motion.span
                variants={badgeVariants}
                initial="hidden"
                animate={loaded ? 'visible' : 'hidden'}
                className="hidden md:inline-block font-normal leading-relaxed text-gray-500 pb-[0.15em]"
                style={{ fontSize: '12px', letterSpacing: '0', width: '13rem', marginLeft: '0.3em', pointerEvents: 'auto' }}
              >
                Menggabungkan teknologi modern untuk menghadirkan solusi digital yang relevan
              </motion.span>
            </div>
            <div className="flex items-baseline flex-wrap" style={{ gap: '0 0.2em' }}>
              <HeroWord word="Digital" delay={0.32} pb={0} isLoaded={loaded} />
              <HeroWord word="Future" delay={0.46} pb={0} isLoaded={loaded} />
            </div>
          </h1>
        </motion.div>
      </motion.section>

      {/* ── GALLERY STRIP ────────────────────────────────────── */}
      <section
        ref={stripSectionRef}
        className="md:h-[400vh] h-[190vh] relative md:my-[-6vh] my-[-20vh]"
      >
        <div className="sticky top-0 h-[90vh] flex flex-col justify-center overflow-hidden">
          <div ref={stripTrackRef} id="stripTrack" className="md:px-8 px-4">
            {galleryImages.map((img, idx) => (
              <div key={img.src} className="strip-img-item">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full md:h-[80vh] h-[50vh] object-cover pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <ScrollFadeSection className="relative z-20 overflow-visible">
        <FloatingCircle className="float-2 absolute left-[-250px] w-[600px] h-[600px] rounded-full border-[60px] border-gray-300 opacity-20 pointer-events-none" />
        <div className="md:px-8 px-4 max-w-7xl mx-auto w-full md:pt-32 pt-24 relative z-50">
          <RevealDiv>
            <div className="md:gap-8">
              <div className="hidden mb-12 md:block">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400">(ABOUT)</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-8 md:hidden">(ABOUT)</p>
                <HighlightText />
              </div>
            </div>
          </RevealDiv>
        </div>
      </ScrollFadeSection>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="md:pt-32 pt-24">
        <div className="md:px-8 px-4 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-12 gap-4 md:gap-8">

            {/* Label desktop sticky */}
            <div className="hidden md:flex col-span-2 items-start pt-8 sticky top-8 self-start h-fit">
              <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400">(SERVICES)</p>
            </div>

            <div className="col-span-12 md:col-span-10">
              {/* Label mobile sticky */}
              <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-2 md:hidden sticky top-4 py-2 z-[100]">
                (SERVICES)
              </p>
              {services.map((s, i, arr) => (
                <ServiceItem key={s.num} s={s} i={i} total={arr.length} />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── IMAGE → VALUES ───────────────────────────────────── */}
      <ImageToValuesTransition />

      {/* ── QUOTE ────────────────────────────────────────────── */}
      <QuoteSection />

      {/* ── OUR WORKS ────────────────────────────────────────── */}
      <ScrollFadeSection className="relative md:pt-20 pt-24 pb-20">
        <div className="max-w-7xl mx-auto md:px-8 px-4">

          <RevealDiv direction="fade">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-8">(OUR WORKS)</p>
          </RevealDiv>

          <div className="border-t border-gray-300 pt-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {works.map((w, i) => (
                <RevealDiv key={i} delay={i * 0.08}>
                  <div className="flex flex-col gap-3 cursor-pointer group">
                    <div className="w-full overflow-hidden bg-gray-200 aspect-video">
                      <img
                        src={w.img}
                        alt={w.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                      />
                    </div>
                    <p className="md:text-xl text-lg font-semibold text-gray-900 leading-snug">{w.title}</p>
                  </div>
                </RevealDiv>
              ))}
            </div>
          </div>

          <div className="border-b border-gray-200" />
        </div>
      </ScrollFadeSection>

    </motion.main>
  )
}