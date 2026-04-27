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
          : { opacity: 0, y: 50 }
  const animate = inView ? { opacity: 1, x: 0, y: 0 } : initial

  return (
    <motion.div ref={ref} initial={initial} animate={animate}
      transition={{ duration: 1, ease: 'easeOut', delay }}
      className={className}>
      {children}
    </motion.div>
  )
}

const wordVariants: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: (delay: number) => ({
    y: 0, opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay }
  })
}

const badgeVariants: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut', delay: 1 } }
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
      <section ref={stripSectionRef} style={{ height: '400vh', position: 'relative' }}>
        <div className="sticky top-0 md:h-screen h-[70vh] flex flex-col justify-center overflow-hidden">
          <p className="text-sm tracking-widest text-gray-400 mb-6 md:px-8 px-4">(GALLERY)</p>
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
      <section className="relative z-20 overflow-visible">
        <div className="float-2 absolute left-[-250px] w-[600px] h-[600px] rounded-full border-[60px] border-gray-300 opacity-20 pointer-events-none" />
        <div className="md:px-8 px-4 flex justify-start max-w-7xl mx-auto w-full md:pt-24 pt-16 relative z-50">
          <RevealDiv className="max-w-5xl text-xl md:text-3xl leading-[1.4] text-black/80">
            <p>
              Kami adalah agency digital yang berfokus pada pengembangan website dengan pendekatan strategis dan
              terstruktur, yang dirancang untuk membantu membangun kehadiran digital yang{' '}
              <b>jelas dan efektif bagi bisnis Anda.</b>
            </p>
          </RevealDiv>
        </div>
      </section>

      {/* ── SERVICE ── */}
      <section className="md:pt-32 pt-12">
        <div className="md:px-8 px-4 justify-start max-w-7xl mx-auto w-full">
          <p className="text-sm tracking-widest text-gray-400 mb-6" data-reveal="fade">(SERVICE)</p>
          <div className="w-full border-t border-gray-300 mt-10">
            <div className="service-item grid grid-cols-6 py-6 items-center md:py-8 font-semibold text-gray-900 border-b border-gray-300"
              data-reveal data-delay="1">
              <p className="text-gray-400 text-base font-normal">a.</p>
              <p className="col-span-4 text-lg md:text-2xl">Company Profile</p>
              <div className="service-arrow flex justify-end text-gray-400">→</div>
            </div>
            <div className="service-item grid grid-cols-6 py-6 items-center md:py-8 font-semibold text-gray-900 border-b border-gray-300"
              data-reveal data-delay="2">
              <p className="text-gray-400 text-base font-normal">b.</p>
              <p className="col-span-4 text-lg md:text-2xl">Portfolio Personal</p>
              <div className="service-arrow flex justify-end text-gray-400">→</div>
            </div>
            <div className="service-item grid grid-cols-6 py-6 items-center md:py-8 font-semibold text-gray-900 border-b border-gray-300"
              data-reveal data-delay="3">
              <p className="text-gray-400 text-base font-normal">c.</p>
              <p className="col-span-4 text-lg md:text-2xl">Information System</p>
              <div className="service-arrow flex justify-end text-gray-400">→</div>
            </div>
            <div className="service-item grid grid-cols-6 py-6 items-center md:py-8 font-semibold text-gray-900 border-b border-gray-300"
              data-reveal data-delay="4">
              <p className="text-gray-400 text-base font-normal">d.</p>
              <p className="col-span-4 text-lg md:text-2xl">Custom Website</p>
              <div className="service-arrow flex justify-end text-gray-400">→</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE STRIP ── */}
      <section className="md:px-8 px-4 md:pt-24 pt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="hidden md:grid grid-cols-6 gap-5 items-end">
            <RevealDiv delay={0.1} className="col-span-4">
              <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80"
                alt="Programming" className="w-full h-[420px] object-cover" />
            </RevealDiv>
            <RevealDiv delay={0.22} className="col-span-2">
              <img src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=600&q=80"
                alt="UI UX" className="w-full h-[420px] object-cover" />
            </RevealDiv>
          </div>
          <div className="grid grid-cols-2 gap-3 md:hidden">
            <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80" className="w-full h-[180px] object-cover" alt="" />
            <img src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=400&q=80" className="w-full h-[180px] object-cover" alt="" />
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="md:px-8 px-4 md:pt-32 pt-12 relative overflow-hidden">
        <div className="max-w-7xl relative z-20 mx-auto w-full grid grid-cols-1 md:grid-cols-6">
          <p className="text-sm tracking-widest text-gray-400 mb-6">(VALUES)</p>
          <div className="md:col-span-4">
            <RevealDiv className="text-xl md:text-3xl font-normal text-gray-900 leading-[1.4] max-w-5xl">
              <h2>Kami Percaya Bahwa Hasil Terbaik Lahir Dari Kombinasi Strategi Yang Tepat, Eksekusi Yang Presisi, Dan Komitmen Terhadap Kualitas.</h2>
            </RevealDiv>
            <div className="border-t border-gray-300 mt-10" />
            <div className="mt-8 space-y-8">
              {values.map((v, i) => (
                <div key={v.title}>
                  <RevealDiv delay={i * 0.12}>
                    <h3 className="text-lg md:text-2xl font-medium text-gray-900">{v.title}</h3>
                    <p className="text-gray-500 mt-2 text-base md:text-lg">{v.desc}</p>
                  </RevealDiv>
                  {i < values.length - 1 && <div className="border-t border-gray-300 mt-8" />}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="float-1 absolute right-[-150px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] border-[60px] border-gray-200 rounded-full opacity-50 pointer-events-none" />
      </section>

      {/* ── QUOTE ── */}
      <section className="relative md:pt-48 pt-16">
        <div className="max-w-7xl mx-auto md:px-8 px-4">
          <div className="text-center relative z-10">
            <RevealDiv direction="left" className="text-4xl md:text-6xl text-black/80 font-serif flex w-full justify-start mx-auto max-w-3xl">
              "
            </RevealDiv>
            <RevealDiv delay={0.1} className="text-lg md:text-3xl max-w-3xl text-center mx-auto italic text-gray-900 leading-relaxed">
              <p>Inspirational designs, illustrations, and graphic elements from the world's best designers</p>
            </RevealDiv>
            <RevealDiv direction="right" className="text-4xl md:text-6xl text-black/80 font-serif flex w-full justify-end mx-auto max-w-3xl">
              "
            </RevealDiv>
            <RevealDiv delay={0.2} className="mt-8 md:mt-10">
              <p className="font-semibold text-base md:text-lg text-gray-900">Luthfi Khaeri Ihsan</p>
              <p className="text-gray-500 text-sm mt-1">Founder Webter</p>
            </RevealDiv>
          </div>
        </div>
        <div className="float-2 absolute left-[-200px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] border-[60px] border-gray-300 rounded-full opacity-40 pointer-events-none" />
      </section>

      {/* OUR WORKS */}
      <section className="relative md:pt-48 pt-16 pb-20">
        <div className="max-w-7xl mx-auto md:px-8 px-4">

          <p className="text-sm tracking-widest text-gray-400 mb-6" data-reveal="fade">(OUR WORKS)</p>

          <div className="w-full">

            <div className="grid grid-cols-6 border-t border-gray-300 py-8 items-start gap-4" data-reveal data-delay="1">
              <div className="col-span-1 pt-1">
                <p className="text-gray-400 text-sm">01</p>
              </div>
              <div className="col-span-3 pt-1">
                <h2 className="text-lg md:text-xl font-semibold text-black">Lab Kimia Instrumen UPI</h2>
              </div>
              <div className="col-span-2 work-img-wrap">
                <img src="image/gbi.jpg" className="w-full h-[100px] md:h-[200px] object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-6 border-t border-gray-300 py-8 items-start gap-4" data-reveal data-delay="2">
              <div className="col-span-1 pt-1">
                <p className="text-gray-400 text-sm">02</p>
              </div>
              <div className="col-span-3 pt-1">
                <h2 className="text-lg md:text-xl font-semibold text-black">PT Gudang Belanja Indonesia</h2>
              </div>
              <div className="col-span-2 work-img-wrap">
                <img src="image/lki.jpg" className="w-full h-[100px] md:h-[200px] object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-6 border-t border-gray-300 py-8 items-start gap-4" data-reveal data-delay="3">
              <div className="col-span-1 pt-1">
                <p className="text-gray-400 text-sm">03</p>
              </div>
              <div className="col-span-3 pt-1">
                <h2 className="text-lg md:text-xl font-semibold text-black">Leading University For International Cooperation (LUPIC)</h2>
              </div>
              <div className="col-span-2 work-img-wrap">
                <img src="image/lupic.jpg" className="w-full h-[100px] md:h-[200px] object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-6 border-t border-gray-300 py-8 items-start gap-4" data-reveal data-delay="4">
              <div className="col-span-1 pt-1">
                <p className="text-gray-400 text-sm">04</p>
              </div>
              <div className="col-span-3 pt-1">
                <h2 className="text-lg md:text-xl font-semibold text-black">Langkahsana</h2>
              </div>
              <div className="col-span-2 work-img-wrap">
                <img src="image/langkahsana.jpg" className="w-full h-[100px] md:h-[200px] object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}