"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

/* ── REVEAL WRAPPER ── */
function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  direction?: "up" | "left" | "right" | "fade";
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const controls = useAnimation();

  const variants : Variants = {
    hidden: {
      opacity: 0,
      ...(direction === "up" && { y: 50 }),
      ...(direction === "left" && { x: -50 }),
      ...(direction === "right" && { x: 50 }),
      ...(direction === "fade" && {}),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── HERO WORD ── */
function HeroWord({ word, delay }: { word: string; delay: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {word}
      </motion.span>
    </span>
  );
}

/* ── CONTACT ITEMS ── */
const contactItems = [
  {
    label: "WhatsApp",
    href: "https://wa.me/6281234567890",
    display: "+62 812 3456 7890",
    delay: 0.1,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/webter.id",
    display: "@webter.id",
    delay: 0.22,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@webter.id",
    display: "@webter.id",
    delay: 0.34,
  },
  {
    label: "Email",
    href: "mailto:hello@webter.id",
    display: "hello@webter.id",
    delay: 0.46,
  },
];

export default function ContactPage() {
  return (
    <main className="pt-[65px]">

      {/* ── Wrapper tunggal dengan overflowX clip ── */}
      <div className="bg-white relative" style={{ overflowX: "clip" }}>

        {/* Floating circle 1 — pojok kanan atas */}
        <motion.div
          className="absolute right-[-120px] top-[-80px] w-[280px] h-[280px]
                     md:right-0 md:top-0 md:w-[400px] md:h-[400px]
                     rounded-full border-[50px] md:border-[70px] border-gray-600 opacity-10 pointer-events-none"
          style={{ zIndex: 0 }}
          animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── HEADING ── */}
        <section className="px-4 md:px-10 pt-10 md:pt-14 pb-10 relative">
          <div className="max-w-7xl mx-auto w-full relative z-10">

            {/* Badge */}
            <motion.p
              className="text-xs md:text-sm tracking-widest text-gray-400 mb-4 md:mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              (CONTACT)
            </motion.p>

            {/* Heading */}
            <h1
              className="font-semibold text-black leading-none"
              style={{
                fontSize: "clamp(48px, 10vw, 110px)",
                letterSpacing: "-0.03em",
              }}
            >
              <HeroWord word="Contact" delay={0.05} />
            </h1>

          </div>
        </section>

        {/* ── CONTACT CONTENT ── */}
        <section className="px-4 md:px-10 py-10 md:py-14 relative">

          {/* Floating circle 2 — sisi kiri tengah */}
          <motion.div
            className="absolute left-[-120px] top-1/2 -translate-y-1/2
                       w-[280px] h-[280px] border-[40px]
                       md:left-[-250px] md:w-[600px] md:h-[600px] md:border-[60px]
                       rounded-full border-gray-300 opacity-20 pointer-events-none"
            animate={{ y: [0, -14, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 relative z-10">

            {/* ── Left: Contact Info ── */}
            <div className="flex flex-col gap-6 md:gap-10">
              {contactItems.map((item) => (
                <Reveal key={item.label} delay={item.delay} className="border-b border-gray-100 pb-6 md:pb-8">
                  <p className="text-xs tracking-widest text-gray-400 uppercase mb-2 md:mb-3">
                    ({item.label})
                  </p>
                  
                   <a href={item.href}
                    target={item.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="text-lg md:text-2xl font-semibold text-black hover:text-gray-500 transition-colors duration-300"
                  >
                    {item.display}
                  </a>
                </Reveal>
              ))}
            </div>

            {/* ── Right: Maps ── */}
            <Reveal direction="right" className="w-full h-[300px] md:h-[480px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63436.23!2d108.2!3d-7.36!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f57b9c3a2e6a5%3A0x1234567890abcdef!2sBanjar%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(20%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>

          </div>
        </section>

      </div>
    </main>
  );
}