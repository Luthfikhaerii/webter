"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowRight, Layout, Code2, Database, Wrench, Quote, MessageSquare, Menu, X, CheckCircle2 } from 'lucide-react';

// Komponen untuk efek animasi Scroll Reveal
const RevealOnScroll = ({ children, className = "", delay = 0 }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll effect for navbar and parallax
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: '01',
      title: 'Website Development',
      description: 'Professional company profile, e-commerce, and landing pages tailored for your brand.',
      specs: ['Include Hosting', 'Free Domain 1 Year', 'Premium UI/UX Design', 'Responsive Mobile']
    },
    {
      id: '02',
      title: 'Custom System Information',
      description: 'Complex logic systems built to streamline your business operations and data management.',
      specs: ['Inventory System', 'Point of Sales (POS)', 'CRM Dashboard', 'API Integration']
    },
    {
      id: '03',
      title: 'Maintenance & Support',
      description: 'Ongoing technical support to ensure your digital assets run smoothly and securely.',
      specs: ['Server Monitoring', 'Bug Fixing', 'Content Update', 'Security Patch']
    }
  ];

  const portfolios = [
    { name: 'Lab Kimia Instrumen UPI', type: 'Order System & Inventory Management', color: 'bg-gray-100' },
    { name: 'PT Gudang Belanja Indonesia', type: 'Inventory System', color: 'bg-gray-200' },
    { name: 'Sistem Informasi Pendidikan Cabang Wilayah III Jawa Tengah', type: 'Company Profile & CRM', color: 'bg-gray-100' },
    { name: 'EduTech Academy', type: 'LMS Platform', color: 'bg-gray-200' },
  ];

  return (
    <div className="font-sans antialiased bg-[#050505] text-white selection:bg-[#004aad] selection:text-white">
      
      {/* HEADER / NAVBAR */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050505]/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <img src={"logo.png"} className='w-10 object-center'/>
            <span>WEBTER</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <div className="flex bg-white/5 border border-white/10 rounded-full px-6 py-2 backdrop-blur-sm gap-6">
              <a href="#services" className="hover:text-[#004aad] transition-colors">SERVICES</a>
              <a href="#portfolio" className="hover:text-[#004aad] transition-colors">PORTFOLIO</a>
              <a href="#about" className="hover:text-[#004aad] transition-colors">ABOUT</a>
            </div>
            <a href="#contact" className="hover:text-white text-gray-300 transition-colors">CONTACT</a>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 py-4 px-6 flex flex-col gap-4">
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">

        <RevealOnScroll className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium mb-8 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#004aad] rounded-full animate-pulse"></span> 
            Modern & Scalable Solutions
          </div>

          <h1 className="text-[3.5rem] md:text-[7rem] font-light tracking-tighter leading-[1.05] mb-6">
            Your Digital<br />
            <span className="font-bold bg-clip-text bg-gradient-to-r from-white to-gray-500">Growth </span>
            <i className='font-bold italic'>Partner</i>
          </h1>
        </RevealOnScroll>

        {/* Decorative Rotating Element */}
        <div className="hidden md:flex absolute bottom-20 right-20 items-center justify-center w-32 h-32 animate-[spin_10s_linear_infinite]">
           <svg viewBox="0 0 100 100" className="w-full h-full fill-white/80 uppercase tracking-[0.2em] text-[12px]">
             <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
             <text><textPath href="#circlePath">WEBTER • DIGITAL AGENCY •</textPath></text>
           </svg>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
             <Code2 className="w-6 h-6" />
           </div>
        </div>
      </section>

      {/* ABOUT SECTION (White block rounded) */}
      <section id="about" className="bg-white text-[#050505] rounded-t-[2.5rem] md:rounded-t-[4rem] relative z-20 pt-24 pb-32 px-6 md:px-12 -mt-10">
        <div className="container mx-auto">
          {/* Decorative subtle dot grid */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none"></div>

          <RevealOnScroll className="grid md:grid-cols-12 gap-12 md:gap-20 relative z-10">
            <div className="md:col-span-5">
              <div className="w-16 h-16 flex items-center justify-center mb-8">
                 <img src={"icon2.png"} className='w-16 object-center'/>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">
                Navigating Success:<br />
                Your Strategic<br />
                Partner
              </h2>
              
              {/* <div className="mt-16 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#050505] text-white rounded-full flex items-center justify-center hover:bg-[#004aad] transition-colors cursor-pointer">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-500">Discover our approach</span>
              </div> */}
            </div>

            <div className="md:col-span-7 space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p className="font-medium text-[#050505] text-xl">
                Webter adalah partner digital untuk UMKM yang ingin naik level melalui website profesional dan sistem informasi yang tepat guna.
              </p>
              <p>
                Kami menggabungkan desain modern, teknologi yang tepat, dan fleksibilitas tinggi untuk menciptakan solusi yang benar-benar sesuai kebutuhan bisnis Anda — dengan harga yang tetap terjangkau.
              </p>
              <p className="font-medium text-[#004aad]">
                Bersama Webter, Anda tidak hanya mendapatkan sebuah produk digital — tetapi juga partner yang siap membantu bisnis Anda tumbuh lebih cepat dan lebih terarah.
              </p>

              {/* Stats Mini Grid */}
              <div className="grid grid-cols-2 gap-8 pt-10 mt-10 border-t border-gray-200">
                <div>
                  <h4 className="text-4xl font-medium text-[#050505] mb-2">100%</h4>
                  <p className="text-sm text-gray-500">Customized Solutions<br/>Tailored for you</p>
                </div>
                <div>
                  <h4 className="text-4xl font-medium text-[#050505] mb-2">24/7</h4>
                  <p className="text-sm text-gray-500">System Support &<br/>Maintenance</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-[#050505] relative rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-10 pt-32 pb-40 px-6 md:px-12 overflow-hidden z-30">

        <div className="container mx-auto relative z-10">
          <RevealOnScroll className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              What Can We Do<br />
              For your Business?
            </h2>
            <p className="text-gray-400">Menyediakan solusi digital terintegrasi dari hulu ke hilir.</p>
          </RevealOnScroll>

          <div className="max-w-4xl mx-auto space-y-4">
            {services.map((service, index) => (
              <RevealOnScroll key={index} delay={index * 100} className="group border-b border-white/10 pb-8 cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-4 py-6 rounded-2xl transition-all duration-300 hover:bg-white/5">
                  <div className="flex items-start gap-8">
                    <span className="text-gray-600 text-lg font-mono pt-1">({service.id})</span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-medium text-gray-400 group-hover:text-white transition-colors mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 max-w-md group-hover:text-gray-300 transition-colors">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 rounded-full border border-white/20 items-center justify-center group-hover:bg-[#004aad] group-hover:border-[#004aad] transition-all">
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white" />
                  </div>
                </div>
                
                {/* Reveal Specs on Hover (Desktop) / Always show on mobile slightly muted */}
                <div className="px-4 ml-0 md:ml-16 mt-4 flex flex-wrap gap-3 opacity-70 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.specs.map((spec, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 text-xs bg-white/10 px-3 py-1.5 rounded-full text-gray-300">
                      <CheckCircle2 className="w-3 h-3 text-[#004aad]" /> {spec}
                    </span>
                  ))}
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={300} className="text-center mt-16">
             <button className="inline-flex items-center gap-2 border border-white/30 rounded-full px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition-colors">
               Have other idea? <span className="font-bold">Explore Our Custom Solutions</span> <ArrowRight className="w-4 h-4" />
             </button>
          </RevealOnScroll>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="bg-white text-black py-32 px-6 md:px-12 rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-10 relative z-40">
        <div className="container mx-auto">
          <RevealOnScroll className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Selected Work</h2>
              <p className="text-gray-600 max-w-md">Beberapa project sistem informasi dan website yang telah kami kerjakan untuk membantu klien mencapai target mereka.</p>
            </div>
            <a href="#" className="hidden md:inline-flex items-center gap-2 font-medium hover:text-[#004aad] transition-colors border-b border-black pb-1">
              View All Projects
            </a>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolios.map((item, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150} className="group cursor-pointer">
                <div className={`w-full aspect-[4/3] rounded-3xl ${item.color} mb-6 overflow-hidden relative`}>
                   {/* Placeholder for project image */}
                   <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <Layout className="w-32 h-32 text-gray-400 group-hover:scale-110 transition-transform duration-500" />
                   </div>
                   {/* Hover Overlay */}
                   <div className="absolute inset-0 bg-[#004aad]/0 group-hover:bg-[#004aad]/10 transition-colors duration-300"></div>
                </div>
                <div className="flex justify-between items-center px-2">
                  <div>
                    <h3 className="text-xl font-medium mb-1">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.type}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={300} className="md:hidden">
            <a href="#" className="inline-flex items-center gap-2 font-medium mt-10 hover:text-[#004aad] transition-colors">
                View All Projects <ArrowRight className="w-4 h-4" />
            </a>
          </RevealOnScroll>
        </div>
      </section>

      {/* QUOTES / TESTIMONIAL SECTION */}
      <section className="bg-white pb-32 px-6 md:px-12 relative z-40">
        <div className="container mx-auto">
          <RevealOnScroll className="bg-[#050505] text-white rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
            {/* Soft gradient background for quote card */}
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#004aad] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            
            <Quote className="w-16 h-16 text-white/20 mb-10" />
            
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5">
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight">
                  See How A Good System<br/>Brings Your Idea<br/>Into Reality
                </h3>
              </div>
              <div className="md:col-span-7 border-l border-white/20 pl-8 md:pl-12">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-8">
                  "Website dan sistem informasi yang baik bukanlah sekadar pengeluaran, melainkan aset digital yang bekerja 24 jam untuk meningkatkan kredibilitas, menyederhanakan operasional, dan melipatgandakan profit bisnis Anda."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#004aad] rounded-full flex items-center justify-center font-bold text-white">
                    W
                  </div>
                  <div>
                    <h5 className="font-medium">Webter Team</h5>
                    <p className="text-sm text-gray-400">Digital Strategist</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="bg-[#004aad] text-white py-32 px-6 md:px-12 text-center rounded-t-[2.5rem] md:rounded-t-[4rem] relative z-50 -mt-10">
        <RevealOnScroll className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8 leading-[1.1]">
            Ready to upgrade<br/>your business?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Konsultasikan kebutuhan website dan sistem informasi Anda bersama kami. Kami siap membantu merancang solusi digital terbaik untuk UMKM Anda.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href='https://wa.me/6281563862944' className="w-full sm:w-auto bg-white text-[#004aad] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5"  /> Let's Talk Now
            </a>
            {/* <button className="w-full sm:w-auto bg-transparent border border-white/30 px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-colors">
              Lihat Paket Harga
            </button> */}
          </div>
        </RevealOnScroll>
      </section>

      {/* FOOTER */}
      <footer className="font-sans antialiased bg-black text-black text-white pt-20 pb-10 px-6 md:px-12 lg:px-16 relative z-50">
        {/* Top: CTA + Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-16">

          {/* Brand / CTA */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div>
              <p className="text-2xl font-semibold font-black tracking-[-0.05em]">
                Webter
              </p>
              <p className="text-xs text-gray-400 font-light leading-relaxed mt-2 max-w-[200px]">
                Membangun solusi digital yang inovatif dan berkualitas untuk mengembangkan bisnis Anda.
              </p>
            </div>
          </div>

          {/* Service */}
          <div>
            <h3 className="text-sm font-black tracking-tight mb-6">Service</h3>
            <ul className="space-y-3">
              {['Web Development', 'UI/UX Design', 'Consultation', 'Maintenance'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 font-light hover:text-black transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-black tracking-tight mb-6">Navigation</h3>
            <ul className="space-y-3">
              {['Portfolio', 'About', 'Kontak'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 font-light hover:text-black transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-black tracking-tight mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:webterid@gmail.com" className="text-sm text-gray-500 font-light hover:text-black transition-colors duration-200 underline underline-offset-2">
                  webterid@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+6281563862944" className="text-sm text-gray-500 font-light hover:text-black transition-colors duration-200 underline underline-offset-2">
                  +62815-6386-2944
                </a>
              </li>
              <li className="pt-4">
                <p className="text-xs text-gray-400 font-light uppercase tracking-widest mb-2">Social</p>
                <div className="flex flex-col gap-2">
                  <a href="#" className="text-sm text-gray-500 font-light hover:text-black transition-colors duration-200">Instagram</a>
                  <a href="#" className="text-sm text-gray-500 font-light hover:text-black transition-colors duration-200">TikTok</a>
                  <a href="https://wa.me/6281563862944" className="text-sm text-gray-500 font-light hover:text-black transition-colors duration-200">WhatsApp</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400 font-light tracking-[0.1em]">
          <p className="uppercase">© 2026 Webter. All Rights Reserved.</p>
          <div className="flex items-center gap-4 uppercase">
            <span>Bandung, Indonesia</span>
          </div>
        </div>
      </footer>
    </div>
  );
}