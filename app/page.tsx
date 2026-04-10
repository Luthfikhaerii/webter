"use client";
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';

export default function TypographicProfile() {
  const [introVisible, setIntroVisible] = useState(true);
  const [introFading, setIntroFading] = useState(false);
  const [logoIn, setLogoIn] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLogoIn(true), 200);
    const t2 = setTimeout(() => setIntroFading(true), 1400);
    const t3 = setTimeout(() => setIntroVisible(false), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const [activeSection, setActiveSection] = useState('home');
  const [activeTag, setActiveTag] = useState('Web App');
  const [projects] = useState([
    {
      id: 1,
      category: "Lab Kimia Instrumen UPI",
      categoryNum: "01.",
      description: "Langkah pertama dalam setiap proyek branding di Webter adalah Sesi Discovery Brand Anda. Kami akan mempelajari bisnis, tujuan, dan audiens ideal Anda.",
      items: [
        { id: 11, title: "Sriboga Raturaya, PT", subtitle: "Project: Rebranding & Printed Media", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop" },
        { id: 12, title: "Eilo", subtitle: "Project: Social Media Re-Branding", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" },
        { id: 13, title: "Karvi Jewelry", subtitle: "Project: Full Package Branding", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop" },
        { id: 14, title: "No Bad Hair", subtitle: "Project: Creative & Social Media", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070&auto=format&fit=crop" }
      ]
    },
    {
      id: 2,
      category: "POS PT Gudang Belanja Indonesia",
      categoryNum: "02.",
      description: "Perencanaan mendalam proyek fotografi akan menetapkan biaya dan anggaran, serta semua elemen teknis dan artistik terkait sesi pemotretan.",
      items: [
        { id: 21, title: "Lexus Indonesia", subtitle: "Project: Commercial Catalog", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" },
        { id: 22, title: "Netflix", subtitle: "Project: Film Promo", img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2069&auto=format&fit=crop" },
        { id: 23, title: "SXSW", subtitle: "Project: Event Coverage", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" },
        { id: 24, title: "Bank BNI", subtitle: "Project: Key Visual Microsite", img: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2070&auto=format&fit=crop" }
      ]
    },
    {
      id: 3,
      category: "LUPIC",
      categoryNum: "03.",
      description: "Perencanaan mendalam proyek fotografi akan menetapkan biaya dan anggaran, serta semua elemen teknis dan artistik terkait sesi pemotretan.",
      items: [
        { id: 21, title: "Lexus Indonesia", subtitle: "Project: Commercial Catalog", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" },
        { id: 22, title: "Netflix", subtitle: "Project: Film Promo", img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2069&auto=format&fit=crop" },
        { id: 23, title: "SXSW", subtitle: "Project: Event Coverage", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" },
        { id: 24, title: "Bank BNI", subtitle: "Project: Key Visual Microsite", img: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2070&auto=format&fit=crop" }
      ]
    },
  ]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const services = [
    { id: 'sustainable-design', name: 'Sustainable Design', desc: 'Kami mengintegrasikan strategi desain yang berkelanjutan memastikan solusi digital Anda tidak hanya kuat tetapi juga efisien secara operasional.' },
    { id: 'website-dev', name: 'Website Development', desc: 'Pengembangan web berkinerja tinggi dengan arsitektur modern, SEO-ready, dan scalable untuk kebutuhan bisnis Anda.' },
    { id: 'custom-is', name: 'Custom Information System', desc: 'Sistem informasi custom yang disesuaikan dengan alur kerja bisnis Anda — dari ERP hingga platform manajemen internal.' },
    { id: 'ui-ux', name: 'UI/UX Design', desc: 'Desain antarmuka yang berpusat pada pengguna, berbasis riset, dan mengutamakan konversi serta keterbacaan tinggi.' },
    { id: 'consultation', name: 'Consultation', desc: 'Konsultasi teknologi strategis untuk membantu tim Anda memilih stack yang tepat dan merancang arsitektur sistem yang solid.' },
  ];

  const tags = ['Web App', 'Mobile', 'SaaS', 'Enterprise', 'Design System'];

  const sectorData = [
    { id: 'offices', title: 'FUTURE-PROOF WORKSPACES' },
    { id: 'hospitality', title: 'LUXURY EXPERIENCE' },
    { id: 'retail', title: 'MODERN COMMERCE' },
    { id: 'residential', title: 'SMART LIVING' },
    { id: 'master-planning', title: 'URBAN RESILIENCE' }
  ];

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="font-sans antialiased bg-[#fcfcfc] text-black selection:bg-[#004aad] selection:text-white">
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          .font-sans { font-family: 'Inter', sans-serif; }
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `
      }} />

      {/* ── INTRO OVERLAY ── */}
      {introVisible && (
        <div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center pointer-events-none"
          style={{ transition: 'opacity 0.7s ease 0.3s', opacity: introFading ? 0 : 1 }}
        >
          <h1
            className="text-3xl font-black tracking-[-0.05em] items-center flex text-white"
            style={{
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              opacity: logoIn ? 1 : 0,
              transform: logoIn ? 'scale(1)' : 'scale(0.85)',
            }}
          >
            <img src={"logo.png"} className='w-20 object-center pr-2' />WEBTER
          </h1>
        </div>
      )}

      {/* ── HERO ── */}
      <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 border-b border-gray-200 overflow-hidden">
        {/* Background text — contained, no overflow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.span
            className="md:text-[30vw] text-[80vw] font-black text-black opacity-[0.05] whitespace-nowrap select-none"
            animate={{ y: [0, -18, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            WEBTER
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
          className="relative z-10"
        >
          <h1 className="text-[clamp(4rem,13vw,11vw)] font-black leading-[0.87] tracking-[-0.05em] text-center font-bold">
            <span className="block">Software</span>
            <span className="block text-[#004aad]">Development</span>
          </h1>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.1 }}
          className="relative z-10 mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold uppercase"
        >
          {['Services', 'Our Work', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
              className="hover:text-[#004aad] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#004aad] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <span className="opacity-20">|</span>
          <a href="#" className="hover:text-[#004aad] transition-colors">Tiktok</a>
          <a href="#" className="hover:text-[#004aad] transition-colors">Instagram</a>
        </motion.nav>
      </section>

      {/* ── GRID PREVIEW ── */}
      <section id="about" className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200">
        <div className="relative aspect-[4/3] md:aspect-auto md:h-[60vh] border-b md:border-b-0 md:border-r border-gray-200 overflow-hidden cursor-pointer group">
          <div className="absolute top-6 right-6 w-8 h-8 bg-black text-white flex items-center justify-center z-10 font-light text-xl">+</div>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            alt="Pratinjau Proyek"
            className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        </div>
        <div className="flex flex-col p-6 md:p-12 justify-center">
          <h2 className="text-7xl font-normal tracking-tighter mb-6">
            Digital<br />Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-md font-light leading-relaxed">
            Membangun sistem perangkat lunak skala enterprise dengan pendekatan desain yang minimalis, cepat, dan berfokus pada hasil.
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="relative w-full py-24 md:py-40 px-6 md:px-12 lg:px-16 bg-[#fcfcfc]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left — sticky heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 lg:self-start">
            <motion.span
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-[#004aad] font-bold tracking-[0.2em] text-xs uppercase block mb-4"
            >
              Layanan Kami
            </motion.span>
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight mb-0"
            >
              Expertise <span className="font-black text-[#004aad]">&</span><br />Solutions.
            </motion.h2>
          </div>

          {/* Right — sticky info card + service list */}
          <div className="lg:col-span-7 flex flex-col gap-0">

            {/* Service list */}
            <div className="flex flex-col">
              {services.map((service, idx) => (
                <motion.div
                  key={service.id}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }}
                  className="group border-b border-black pb-10 pt-10 first:border-t first:border-black cursor-pointer"
                >
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <h3 className="text-3xl md:text-4xl font-light tracking-tight group-hover:text-[#004aad] group-hover:font-medium transition-all duration-300">
                      {service.name}
                    </h3>
                    <span className="text-xs font-bold text-gray-300 group-hover:text-[#004aad] transition-colors duration-300 shrink-0">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="text-gray-500 font-light text-base leading-relaxed group-hover:text-black transition-colors duration-300 max-w-2xl">
                    {service.desc}
                  </p>
                  <div className="overflow-hidden h-6 mt-5">
                    <div className="flex items-center gap-2 text-[#004aad] font-bold text-xs tracking-[0.1em] uppercase translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                      <span>LIHAT LAYANAN</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTORS (PRODUCTION FOCUS) ── */}
      <section id="product" className="py-24 md:py-32 bg-white border-t border-black">
        <div className="px-6 md:px-12 lg:px-16 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.span variants={fadeUp} className="text-[#004aad] font-bold tracking-[0.2em] text-xs uppercase block mb-4">
              Sektor
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-light tracking-tight">
              Production <span className="font-black text-[#004aad]">Focus.</span>
            </motion.h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="max-w-md text-gray-600 font-light leading-relaxed text-sm md:text-right"
          >
            Spesialisasi kami mencakup pengembangan platform digital inovatif untuk pendidikan, manajemen laboratorium, dan solusi komunitas modern.
          </motion.p>
        </div>

        <div className="px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border-y border-black">
          {sectorData.map((sector, idx) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
              className="group bg-[#fcfcfc] p-12 md:p-16 cursor-pointer flex flex-col justify-between min-h-[22rem] md:h-96"
            >
              <div className="flex justify-between items-center text-gray-400 group-hover:text-[#004aad] transition-colors">
                <span className="font-mono text-xs">0{idx + 1}</span>
                <span className="text-xs tracking-[0.15em] uppercase font-light">{sector.id}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-black group-hover:text-[#004aad] transition-colors duration-300 leading-tight tracking-tighter mt-8">
                {sector.title}
              </h3>
              <div className="flex items-center justify-end mt-8">
                <span className="text-2xl text-gray-300 group-hover:text-[#004aad] group-hover:-translate-x-1.5 transition-all duration-300">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section id="ourwork" className="py-24 bg-white overflow-hidden">
        {/* Section heading — consistent style */}
        <div className="px-6 md:px-12 lg:px-16 mb-16">
          <span className="text-[#004aad] font-bold tracking-[0.2em] text-xs uppercase block mb-4">
            Featured Projects
          </span>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight">
            Our <span className="font-black text-[#004aad]">Work.</span>
          </h2>
        </div>

        <div className="space-y-32 ">
          {projects.map((group) => (
            <div key={group.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left meta — sticky */}
              <div className="lg:col-span-2 px-6 md:px-12 lg:px-16 lg:pr-0 lg:sticky lg:top-32 lg:self-start">
                <span className="text-xs font-mono text-gray-400 block mb-1">{group.categoryNum}</span>
                <h3 className="text-xl font-black tracking-tight uppercase mb-4">{group.category}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">{group.description}</p>

              </div>

              {/* Right scroll gallery */}
              <div className="lg:col-span-10 flex overflow-x-auto gap-1 pb-10 no-scrollbar px-6 lg:px-0">
                {group.items.map((item) => (
                  <motion.div
                    key={item.id}
                    className="min-w-[280px] md:min-w-[360px] group cursor-pointer"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="aspect-square bg-gray-100 overflow-hidden mb-4 relative">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                    <h4 className="text-base font-semibold group-hover:text-[#004aad] transition-colors">{item.title}</h4>
                    <p className="text-[0.68rem] text-gray-400 uppercase tracking-tight mt-1">{item.subtitle}</p>
                  </motion.div>
                ))}
                <div className="min-w-[100px] flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
}