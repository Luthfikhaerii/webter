"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [currentTime, setCurrentTime] = useState({
    london: '',
    istanbul: '',
    ljubljana: ''
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime({
        london: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit' }),
        istanbul: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/Istanbul', hour: '2-digit', minute: '2-digit' }),
        ljubljana: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/Ljubljana', hour: '2-digit', minute: '2-digit' })
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { id: 'sustainable-design', name: 'Sustainable Design' },
    { id: 'website-dev', name: 'Website Development' },
    { id: 'custom-is', name: 'Custom Information System' },
    { id: 'ui-ux', name: 'UI/UX Design' },
    { id: 'consultation', name: 'Consultation' },
  ];

  const sectors = [
    {
      id: 'offices',
      title: '',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
      size: 'large'
    },
    {
      id: 'hospitality',
      title: '',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
      size: 'small'
    },
    {
      id: 'retail',
      title: '',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600',
      size: 'small'
    },
    {
      id: 'residential',
      title: '',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600',
      size: 'small'
    },
    {
      id: 'master-planning',
      title: '',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600',
      size: 'small'
    }
  ];

  const insights = [
    {
      id: 1,
      title: 'RIMSKI VRELEC SPA HOTEL CONSTRUCTION PROGRESSES RAPIDLY!',
      date: '26 Jul 2025',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    },
    {
      id: 2,
      title: 'ENVISIONING A CITY: FUTURE PERSPECTIVES FROM NORTH AND SOUTH',
      date: '23 May 2025',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    },
    {
      id: 3,
      title: 'CONCRETE CONSTRUCTION TIPS FROM THE AVCI PROJECT',
      date: '14 Mar 2025',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full h-screen overflow-hidden bg-black">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600')`,
          }}
        />

        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 max-w-7xl">
          <h1 className="text-white font-light leading-none tracking-tight uppercase overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="block text-6xl md:text-8xl hover:tracking-wider transition-all duration-500 cursor-default">
                BUILD YOUR
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="block text-6xl md:text-8xl hover:tracking-wider transition-all duration-500 cursor-default">
                DIGITAL FUTURE
              </span>
            </motion.div>
          </h1>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 128, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="mt-8 h-1 bg-white"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute bottom-8 right-8 md:right-16 flex flex-col md:flex-row gap-4 md:gap-8 text-white text-xs md:text-sm"
        >
          <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
            <span className="text-base">◷</span>
            <span>LND {currentTime.london}</span>
          </div>
          <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
            <span className="text-base">◷</span>
            <span>IST {currentTime.istanbul}</span>
          </div>
          <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
            <span className="text-base">◷</span>
            <span>LJU {currentTime.ljubljana}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute bottom-8 left-8 md:left-16 flex flex-col items-center gap-2 text-white"
        >
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-16 bg-white animate-pulse" />
        </motion.div>
      </div>

      {/* SERVICES SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="min-h-screen bg-white text-black"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 md:px-16 py-16">
          <div className="flex flex-col justify-center">
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.7 }}
              className="text-sm text-gray-500 mb-12"
            >
              Expertise
            </motion.p>

            <motion.div
              variants={scaleIn}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-16"
            >
              <div className="w-64 h-64 mx-auto">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <motion.path
                    d="M 60 60 L 100 40 L 140 60 L 100 80 Z"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 60 60 L 60 120 L 100 140 L 100 80 Z"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 100 80 L 100 140 L 140 120 L 140 60 Z"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
                  />
                </svg>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col justify-center">
            <motion.h2
              variants={fadeInRight}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl text-gray-900 md:text-5xl font-bold mb-12"
            >
              Services
            </motion.h2>

            <div className="border-t border-gray-300" />

            <motion.div
              variants={fadeInRight}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group flex items-center justify-between py-6 cursor-pointer"
            >
              <span className="text-lg font-medium">Sustainable Design</span>
              <span className="flex items-center gap-2 text-sm hover:gap-4 transition-all duration-300">
                Explore
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-12"
            >
              <h1 className="text-3xl text-gray-800 md:text-4xl lg:text-4xl font-light leading-tight">
                WE TRANSFORM YOUR IDEAS<br />
                INTO POWERFUL DIGITAL SOLUTIONS
              </h1>
              <div className="h-px bg-gradient-to-r from-black to-transparent w-full mt-8" />
            </motion.div>

            <motion.div
              variants={container}
              className="space-y-0"
            >
              {services.slice(1).map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={fadeInRight}
                  transition={{ duration: 0.3 }}
                  className="group flex items-center justify-between py-6 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-all duration-300"
                >
                  <span className="text-base text-gray-400 group-hover:text-black group-hover:font-medium transition-all duration-300">
                    {service.name}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-4 transition-all duration-300">
                    →
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="px-8 md:px-16 pb-16"
        >
          <div className="relative group overflow-hidden rounded-sm cursor-pointer">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600"
              alt="Project showcase"
              className="w-full h-96 md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
              <p className="text-white text-sm tracking-wider">Software Development Service</p>
              <div className="flex items-end justify-between">
                <h3 className="text-white text-3xl md:text-5xl lg:text-6xl font-light leading-tight max-w-5xl">
                  ELEVATING EXPERIENCES<br />
                  THROUGH INNOVATIVE<br />
                  WEB DEVELOPMENT.
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* SECTORS SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="min-h-screen bg-white"
      >
        <div className="px-8 md:px-16 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <motion.p
              variants={fadeInLeft}
              transition={{ duration: 0.7 }}
              className="text-sm text-gray-500 uppercase tracking-wider"
            >
              Expertise
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl text-gray-800 md:text-5xl font-light"
            >
              Production
            </motion.h2>

            <div className="hidden md:block w-24" />
          </div>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-gray-800">
              DELIVERING INNOVATIVE WEB SOLUTIONS FOR EDUCATION, LABORATORY MANAGEMENT, AND COMMUNITY PLATFORMS.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div
              variants={scaleIn}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="md:col-span-5 group relative overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Ganti aspect ratio agar tingginya match dengan 2 kotak di kanan */}
              <div className="aspect-square md:aspect-[5/7] relative bg-black">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  src={sectors[0].image}
                  alt={sectors[0].title}
                  className="w-full h-full object-cover"
                />
                {/* Uncomment jika mau tambahkan title */}
                {/* <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
        <h3 className="text-white text-2xl font-light tracking-wide">
          {sectors[0].title}
        </h3>
      </div> */}
              </div>
            </motion.div>

            <motion.div
              variants={container}
              className="md:col-span-7 grid grid-cols-2 gap-6"
            >
              {sectors.slice(1).map((sector, index) => (
                <motion.div
                  key={sector.id}
                  variants={scaleIn}
                  transition={{ duration: 0.7 }}
                  className="group relative overflow-hidden rounded-lg cursor-pointer"
                >
                  <div className="aspect-square relative">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <h3 className="text-white text-lg font-light tracking-wide">
                        {sector.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="bg-black text-white px-8 md:px-16 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-start gap-4 mb-8">
              <div className="w-3 h-3 rounded-full bg-white mt-3 flex-shrink-0 animate-pulse" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                <span className="block mb-4">WE ARE WEBTER...</span>
                <span className="block text-gray-400 mb-4">YOUR PARTNER IN DIGITAL TRANSFORMATION</span>
                <span className="block text-gray-500">BUILDING SOLUTIONS THAT DRIVE SUCCESS.</span>
              </h2>
            </div>

            <div className="flex items-center gap-4 mt-16">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 128 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-px bg-white"
              />
              <button className="group flex items-center gap-3 text-sm tracking-wider hover:gap-5 transition-all duration-300">
                <span>Learn More About Us</span>
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* INSIGHTS SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="bg-white"
      >
        <div className="px-8 md:px-16 py-20">
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
            className="flex justify-between items-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-800">Our Work</h2>
            <a href="#" className="group flex items-center gap-2 text-sm hover:gap-4 transition-all duration-300">
              <span className="text-gray-600">View All</span>
              <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-gray-600">→</span>
            </a>
          </motion.div>

          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {insights.map((insight, index) => (
              <motion.div
                key={insight.id}
                variants={fadeInUp}
                transition={{ duration: 0.7 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </div>

                <div>
                  <p className="text-xs text-gray-800 mb-3">{insight.date}</p>
                  <h3 className="text-lg font-light text-gray-600 leading-tight group-hover:text-gray-600 transition-colors duration-300">
                    {insight.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}