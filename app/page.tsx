"use client";
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';

export default function TypographicProfile() {
  const { scrollYProgress } = useScroll();
  const fadeOut = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const slideUp = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const [activeSection, setActiveSection] = useState('home');
  const [projects, setProjects] = useState([
    {
      id: 1,
      category: "BRANDING",
      categoryNum: "04.",
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
      category: "VISUAL PHOTO",
      categoryNum: "05.",
      description: "Perencanaan mendalam proyek fotografi akan menetapkan biaya dan anggaran, serta semua elemen teknis dan artistik terkait sesi pemotretan.",
      items: [
        { id: 21, title: "Lexus Indonesia", subtitle: "Project: Commercial Catalog", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" },
        { id: 22, title: "Netflix", subtitle: "Project: Film Promo", img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2069&auto=format&fit=crop" },
        { id: 23, title: "SXSW", subtitle: "Project: Event Coverage", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" },
        { id: 24, title: "Bank BNI", subtitle: "Project: Key Visual Microsite", img: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2070&auto=format&fit=crop" }
      ]
    }
  ]);

  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };


  const services = [
    { id: 'sustainable-design', name: 'Sustainable Design' },
    { id: 'website-dev', name: 'Website Development' },
    { id: 'custom-is', name: 'Custom Information System' },
    { id: 'ui-ux', name: 'UI/UX Design' },
    { id: 'consultation', name: 'Consultation' },
  ];

  const sectorData = [
    { id: 'offices', title: 'FUTURE-PROOF WORKSPACES' },
    { id: 'hospitality', title: 'LUXURY EXPERIENCE' },
    { id: 'retail', title: 'MODERN COMMERCE' },
    { id: 'residential', title: 'SMART LIVING' },
    { id: 'master-planning', title: 'URBAN RESILIENCE' }
  ];

  const insights = [
    {
      id: 1,
      title: 'RIMSKI VRELEC SPA HOTEL CONSTRUCTION PROGRESSES RAPIDLY!',
      date: '26 Jul 2025',
    },
    {
      id: 2,
      title: 'ENVISIONING A CITY: FUTURE PERSPECTIVES FROM NORTH AND SOUTH',
      date: '23 May 2025',
    },
    {
      id: 3,
      title: 'CONCRETE CONSTRUCTION TIPS FROM THE AVCI PROJECT',
      date: '14 Mar 2025',
    }
  ];

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const fontTransition = {
    duration: 0.5,
    ease: "easeInOut"
  };

  return (
    <div className="font-sans antialiased bg-[#fcfcfc] text-black selection:bg-[#004aad] selection:text-white">
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        .font-sans { font-family: 'Inter', sans-serif; }
      `}} />

      {/* HERO SECTION - CENTER ALIGNED WITH BRAND COLOR */}
      <section id="home" className="relative w-full min-h-screen flex flex-col pt-8 px-6 md:px-12 lg:px-16 pb-12 overflow-hidden border-b border-gray-200">

        {/* Top Navigation Bar */}
        <div className="w-full flex justify-between items-center z-50">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-12 h-12 flex items-center justify-center text-white font-black text-xl"><img src={"icon.png"} className='w-full h-full object-center' /></div>
            <span className="text-xl font-bold tracking-tighter group-hover:text-[#004aad] transition-colors">Webter</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-12 h-12 bg-black flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:bg-[#004aad] transition-all duration-300"
          >
            <div className="w-5 h-[1.5px] bg-white" />
            <div className="w-5 h-[1.5px] bg-white" />
            <div className="w-5 h-[1.5px] bg-white" />
          </motion.div>
        </div>

        {/* Center Aligned Giant Typography */}
        <motion.div
          style={{ opacity: fadeOut, y: slideUp }}
          className="flex-grow flex flex-col justify-center pb-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16vw] md:text-[13vw] lg:text-[11vw] font-bold leading-[0.85] tracking-[-0.05em] text-black"
          >
            <span className="block">Software</span>
            <span className="block text-[#004aad]">Development</span>
          </motion.h1>
        </motion.div>

        {/* Functioning Navigation Links Row (Center Aligned) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full flex flex-wrap items-center gap-x-8 gap-y-4 md:gap-x-12 text-sm md:text-base font-medium tracking-tight uppercase px-4"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus eveniet vel nostrum, hic voluptates inventore odio libero ullam nam alias eos excepturi optio dolore. Amet, velit. Voluptatibus, omnis sunt.
        </motion.div>
      </section>

      {/* GRID IMAGE PREVIEW */}
      <section id="work" className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200">
        <div className="relative aspect-[4/3] md:aspect-auto md:h-[60vh] border-b md:border-b-0 md:border-r border-gray-200 p-4 md:p-6 group overflow-hidden cursor-pointer">
          <div className="absolute top-6 right-6 w-8 h-8 bg-black text-white flex items-center justify-center z-10 font-light">+</div>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            alt="Pratinjau Proyek"
            className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        </div>
        <div className="flex flex-col p-6 md:p-12 justify-center">
          <h2 className="text-[10vw] md:text-[6vw] font-medium leading-[0.9] tracking-tighter mb-8">
            Digital<br />Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-md font-light leading-relaxed">
            Membangun sistem perangkat lunak skala enterprise dengan pendekatan desain yang minimalis, cepat, dan berfokus pada hasil.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="relative w-full py-24 md:py-40 px-6 md:px-12 lg:px-16 bg-[#fcfcfc] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 relative"
          >
            <div className="lg:sticky lg:top-40">
              <motion.span variants={fadeUp} className="text-[#004aad] font-semibold tracking-widest text-sm mb-4 block uppercase">Layanan Kami</motion.span>
              <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl text-black font-light leading-[1.1] mb-12 tracking-tight">
                Expertise <span className="font-bold text-[#004aad]">&</span> Solutions.
              </motion.h2>
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-12 pt-12 lg:pt-0">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
                className="group border-b border-black pb-12 cursor-pointer relative overflow-hidden"
              >
                <div className="flex items-baseline justify-between gap-6 mb-3">
                  <h3 className="text-3xl md:text-5xl font-light tracking-tight group-hover:text-[#004aad] group-hover:font-medium transition-all duration-300">
                    {service.name}
                  </h3>
                  <span className="text-sm font-bold text-gray-300 group-hover:text-[#004aad] transition-colors duration-300">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-gray-500 font-light max-w-2xl text-lg leading-relaxed group-hover:text-black transition-colors duration-300">
                  Kami mengintegrasikan strategi desain yang berkelanjutan dengan pengembangan web berkinerja tinggi, memastikan solusi digital Anda tidak hanya kuat tetapi juga efisien secara operasional.
                </p>

                <div className="overflow-hidden h-6 mt-6">
                  <motion.div className="flex items-center gap-2 text-[#004aad] font-semibold text-sm transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <span>LIHAT LAYANAN</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS SECTION */}
      <section id="about" className="py-24 md:py-32 bg-white border-t border-black">
        <div className="px-6 md:px-12 lg:px-16 mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.span variants={fadeUp} className="text-[#004aad] font-semibold tracking-widest text-sm mb-4 block uppercase">Sektor</motion.span>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-light text-black tracking-tight">
              Production <span className="font-bold text-[#004aad]">Focus.</span>
            </motion.h2>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-md text-gray-600 font-light text-right md:text-left">
            Spesialisasi kami mencakup pengembangan platform digital inovatif untuk pendidikan, manajemen laboratorium, dan solusi komunitas modern.
          </motion.p>
        </div>

        <div className="px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border-y border-black">
          {sectorData.map((sector, idx) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
              className="group bg-[#fcfcfc] p-12 md:p-16 cursor-pointer flex flex-col justify-between aspect-square md:aspect-auto md:h-96"
            >
              <div className="flex justify-between items-center text-gray-400 group-hover:text-[#004aad] transition-colors mb-8">
                <span className="font-mono text-sm">0{idx + 1}</span>
                <span className="text-sm tracking-widest uppercase font-light">{sector.id}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-black group-hover:text-[#004aad] group-hover:font-black transition-all duration-300 leading-tight tracking-tighter">
                {sector.title}
              </h3>
              <div className="overflow-hidden h-10 mt-12 flex items-center justify-end">
                <motion.span
                  className="text-2xl text-gray-300 group-hover:text-[#004aad] group-hover:-translate-x-2 transition-transform duration-300"
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA / ABOUT (DARK IMPACT) */}
      {/* <section id="contact" className="bg-black text-white py-32 px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-[40vw] font-black leading-none text-white whitespace-nowrap">WEBTER</h2>
        </div>

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 max-w-6xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 tracking-tight">
            READY TO <span className="font-bold text-[#004aad]">DISRUPT</span><br /> YOUR INDUSTRY?
          </motion.h2>

          <motion.p variants={fadeUp} className="text-xl md:text-2xl font-light text-white/70 max-w-3xl mx-auto mb-16 leading-relaxed">
            Kami adalah mitra teknologi terpercaya Anda dalam transformasi digital, siap membangun solusi perangkat lunak kustom yang mendorong kesuksesan bisnis.
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.05, background: '#004aad', color: 'white' }}
            className="px-12 py-6 bg-white text-black rounded-none font-bold tracking-wider text-sm flex items-center gap-3 mx-auto transition-colors group uppercase"
          >
            Mulai Kolaborasi
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </motion.button>
        </motion.div>
      </section> */}

      {/* FEATURED WORK SECTION - LAYOUT SESUAI GAMBAR 9E8E23 */}
      <section id="ourwork" className="py-24 bg-white overflow-hidden">
        <div className="px-6 md:px-12 lg:px-16 flex justify-between items-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#004aad]">Featured Projects</h2>
        </div>

        <div className="space-y-32">
          {projects.map((group) => (
            <div key={group.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Sisi Kiri: Deskripsi Kategori */}
              <div className="lg:col-span-2 px-6 md:px-12 lg:pr-0">
                <div className="sticky top-32">
                  <span className="text-sm font-mono text-gray-400 mb-2 block">{group.categoryNum}</span>
                  <h3 className="text-2xl font-black mb-6 tracking-tighter uppercase">{group.category}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-8">
                    {group.description}
                  </p>
                  <button className="text-[10px] font-bold tracking-widest border border-black rounded-full px-6 py-2.5 hover:bg-black hover:text-white transition-all uppercase">
                    All Portfolio
                  </button>
                </div>
              </div>

              {/* Sisi Kanan: Horizontal Scroll Galeri */}
              <div className="lg:col-span-10 flex overflow-x-auto gap-1 pb-10 scrollbar-hide no-scrollbar px-6 lg:px-0">
                {group.items.map((item) => (
                  <motion.div
                    key={item.id}
                    className="min-w-[280px] md:min-w-[400px] group cursor-pointer"
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
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white text-black px-4 py-2 text-[10px] font-bold tracking-widest uppercase">View Details</span>
                      </div>
                    </div>
                    <div className="px-1">
                      <h4 className="text-sm font-bold group-hover:text-[#004aad] transition-colors">{item.title}</h4>
                      <p className="text-[11px] text-gray-400 uppercase tracking-tighter mt-1">{item.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
                {/* Spacer di akhir scroll */}
                <div className="min-w-[100px] flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Minimalis */}
      <footer className="py-12 px-6 md:px-12 lg:px-16 border-t border-gray-200 text-center">
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">© 2025 Webter Studio — All Rights Reserved</p>
      </footer>
    </div>
  );
}