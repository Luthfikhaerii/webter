"use client";
import React, { useState, useEffect } from 'react';
import { easeOut, motion, useInView } from 'framer-motion';
import { Code, Database, MessageSquare, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

export default function WebterLanding() {
  const [currentTime, setCurrentTime] = useState({
    jakarta: '',
    singapore: '',
    tokyo: ''
  });
  const [activeService, setActiveService] = useState('website-development');
  const [activeFilter, setActiveFilter] = useState('all-projects');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    description: ''
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime({
        jakarta: now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit' }),
        singapore: now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Singapore', hour: '2-digit', minute: '2-digit' }),
        tokyo: now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit' })
      });
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { id: 'website-development', name: 'Website Development', icon: Code },
    { id: 'information-system', name: 'Information System', icon: Database },
    { id: 'consultation', name: 'IT Consultation', icon: MessageSquare }
  ];

  const navItems = [
    { name: 'SERVICES', href: '#services' },
    { name: 'PORTFOLIO', href: '#portfolio' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' }
  ];

  const portfolios = [
    {
      id: 1,
      title: 'LUPIC - UPI CMS Platform',
      subtitle: 'Leading University Project for International Cooperation',
      description: 'Content Management System for Chemistry/Science Education Program in Java and Northern Bali Islands',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      category: 'all-projects',
      tech: ['Next.js', 'PostgreSQL', 'CMS']
    },
    {
      id: 2,
      title: 'Lab Kimia Instrumen UPI',
      subtitle: 'Order Management System',
      description: 'Comprehensive web platform for chemical testing service orders and laboratory management',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      category: 'all-projects',
      tech: ['React', 'Node.js', 'MySQL']
    },
    {
      id: 3,
      title: 'Langkahsana',
      subtitle: 'Event Booking Platform',
      description: 'Website booking system for hiking community events and outdoor activities',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
      category: 'all-projects',
      tech: ['Vue.js', 'Express', 'MongoDB']
    }
  ];

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', company: '', email: '', description: '' });
  };

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeOut } }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600')] bg-cover bg-center opacity-20" />
        
        {/* Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 flex justify-between items-center px-8 md:px-16 pt-8"
        >
          <div className="text-white text-xl md:text-2xl font-bold tracking-wider">
            WEBTER
          </div>
          
          <div className="flex gap-6 md:gap-12 items-center">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="hidden md:flex items-center gap-2 text-white text-xs tracking-wider hover:text-gray-400 transition-colors duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-gray-400" />
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 max-w-7xl">
          <motion.h1 
            className="text-white font-bold leading-none tracking-tight uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block text-6xl md:text-8xl lg:text-9xl">
                BUILD YOUR
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="block text-6xl md:text-8xl lg:text-9xl text-gray-400">
                DIGITAL FUTURE
              </span>
            </motion.div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white text-xl md:text-2xl mt-8 max-w-2xl"
          >
            Professional Website Development, Information Systems, and IT Consultation Services
          </motion.p>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 128 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-8 h-1 bg-gray-400"
          />
        </div>

        {/* Bottom Time Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="absolute bottom-8 right-8 md:right-16 flex flex-col md:flex-row gap-4 md:gap-8 text-white text-xs md:text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-base">◷</span>
            <span>JKT {currentTime.jakarta}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">◷</span>
            <span>SGP {currentTime.singapore}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">◷</span>
            <span>TYO {currentTime.tokyo}</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-8 md:left-16 flex flex-col items-center gap-2 text-white"
        >
          <span className="text-xs tracking-widest">SCROLL</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-16 bg-white"
          />
        </motion.div>
      </div>

      {/* Services Section */}
      <section id="services" className="min-h-screen bg-white text-black py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 md:px-16">
          {/* Left Side - Icon and Text */}
          <div className="flex flex-col justify-center">
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="text-sm text-gray-500 mb-12"
            >
              Our Expertise
            </motion.p>

            {/* 3D Icon */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleIn}
              className="mb-16"
            >
              <div className="w-64 h-64 mx-auto">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <motion.path
                    d="M 60 60 L 100 40 L 140 60 L 100 80 Z"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                  <motion.path
                    d="M 60 60 L 60 120 L 100 140 L 100 80 Z"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.path
                    d="M 100 80 L 100 140 L 140 120 L 140 60 Z"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Services List */}
          <div className="flex flex-col justify-center">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
              className="text-4xl md:text-5xl font-bold mb-12"
            >
              Services
            </motion.h2>

            <div className="border-t border-gray-300" />

            {/* Active Service */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
              className="group flex items-center justify-between py-6 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <Code className="w-6 h-6 text-gray-600" />
                <span className="text-lg font-medium">Website Development</span>
              </div>
              <span className="flex items-center gap-2 text-sm group-hover:gap-4 transition-all duration-300">
                Explore 
                <ChevronRight className="w-4 h-4" />
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="my-12"
            >
              <h1 className="text-3xl md:text-4xl font-light leading-tight">
                WE TRANSFORM YOUR IDEAS<br />
                INTO POWERFUL DIGITAL SOLUTIONS
              </h1>
              <div className="h-px bg-gradient-to-r from-gray-600 to-transparent w-full mt-8" />
            </motion.div>

            {/* Other Services */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="space-y-0"
            >
              {services.slice(1).map((service) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    variants={fadeInRight}
                    className="group flex items-center justify-between py-6 border-t border-gray-200 cursor-pointer hover:bg-gray-50 transition-all duration-300"
                    onMouseEnter={() => setActiveService(service.id)}
                  >
                    <div className="flex items-center gap-4">
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                      <span className="text-base text-gray-400 group-hover:text-black group-hover:font-medium transition-all duration-300">
                        {service.name}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Featured Project */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="px-8 md:px-16 mt-20"
        >
          <div className="relative group overflow-hidden rounded-lg cursor-pointer">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600"
              alt="LUPIC Platform"
              className="w-full h-96 md:h-[600px] object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
              <p className="text-white text-sm tracking-wider">Featured Project</p>
              
              <div className="flex items-end justify-between">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-white text-3xl md:text-5xl lg:text-6xl font-light leading-tight max-w-3xl"
                >
                  LUPIC - EMPOWERING EDUCATION<br />
                  THROUGH TECHNOLOGY
                </motion.h3>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen bg-gray-50 py-20">
        <div className="px-8 md:px-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16"
          >
            <motion.p variants={fadeInLeft} className="text-sm text-gray-500 uppercase tracking-wider">
              Our Work
            </motion.p>

            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-light">
              Portfolio
            </motion.h2>

            <div className="hidden md:block w-24" />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto mb-20"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-gray-800">
              DELIVERING INNOVATIVE WEB SOLUTIONS FOR EDUCATION, LABORATORY MANAGEMENT, AND COMMUNITY PLATFORMS.
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {portfolios.map((project, index) => (
              <motion.div
                key={project.id}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden h-64">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-br from-gray-900 to-gray-900 text-white px-8 md:px-16 py-24 md:py-32">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-start gap-4 mb-8">
            <motion.div 
              variants={scaleIn}
              className="w-3 h-3 rounded-full bg-gray-400 mt-3 flex-shrink-0"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
              <span className="block mb-4">WE ARE WEBTER...</span>
              <span className="block text-gray-400 mb-4">YOUR PARTNER IN DIGITAL TRANSFORMATION</span>
              <span className="block text-gray-400">BUILDING SOLUTIONS THAT DRIVE SUCCESS</span>
            </motion.h2>
          </div>

          <motion.div 
            variants={fadeInUp}
            className="flex items-center gap-4 mt-16"
          >
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-px bg-gray-400"
            />
            <button className="group flex items-center gap-3 text-sm tracking-wider hover:gap-5 transition-all duration-300">
              <span>Learn More About Us</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.p 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[20rem] md:text-[30rem] lg:text-[40rem] font-bold text-white select-none"
          >
            W
          </motion.p>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 px-8 md:px-16 py-24 md:py-32">
          {/* Left Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">CONTACT US</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                Let's build something<br />amazing together.
              </h2>
            </div>

            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Ready to start your digital journey? Get in touch with us today.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-gray-300">Cimahi, West Java</p>
                  <p className="text-gray-500">Indonesia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-400 mt-1" />
                <p className="text-gray-300">info@webter.id</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-400 mt-1" />
                <p className="text-gray-300">+62 812 3456 7890</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:border-gray-400 focus:outline-none transition-colors duration-300"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:border-gray-400 focus:outline-none transition-colors duration-300"
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:border-gray-400 focus:outline-none transition-colors duration-300"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <textarea
                  name="description"
                  placeholder="Tell us about your project"
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:border-gray-400 focus:outline-none transition-colors duration-300 resize-none"
                />
              </motion.div>

              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  className="px-12 py-4 bg-gray-600 text-white text-sm tracking-wider rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  SEND MESSAGE
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}