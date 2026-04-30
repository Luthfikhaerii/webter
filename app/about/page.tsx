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
  direction?: "up" | "left" | "right" | "fade" | "scale";
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
      ...(direction === "scale" && { scale: 0.94, y: 30 }),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
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

export default function AboutPage() {
  return (
    <main className="pt-[72px]">

      {/* ── Wrapper tunggal dengan overflowX clip agar dekorasi tidak bikin horizontal scroll ── */}
      <div className="bg-white relative" style={{ overflowX: "clip" }}>

        {/* Floating circle 1 — pojok kanan atas, sama seperti Service */}
        <motion.div
          className="absolute right-[-120px] top-[-80px] w-[280px] h-[280px]
                     md:right-[-200px] md:top-[-100px] md:w-[500px] md:h-[500px]
                     rounded-full border-[50px] md:border-[80px] border-gray-600 opacity-10 pointer-events-none"
          style={{ zIndex: 0 }}
          animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── HERO / ABOUT US HEADING ── */}
        <section className="px-4 md:px-8 pt-10 md:pt-16 pb-10 relative">
          <div className="max-w-7xl mx-auto w-full relative z-10">

            {/* Badge */}
            <motion.p
              className="text-xs md:text-sm tracking-widest text-gray-400 mb-4 md:mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              (ABOUT)
            </motion.p>

            {/* Heading */}
            <h1
              className="font-semibold text-[#111111] leading-none"
              style={{
                fontSize: "clamp(48px, 10vw, 100px)",
                letterSpacing: "-0.03em",
              }}
            >
              <HeroWord word="About" delay={0.05} />
              {" "}
              <HeroWord word="Us" delay={0.2} />
            </h1>

            {/* Sub text */}
            <Reveal delay={0}>
              <p className="mt-6 md:mt-8 text-xs md:text-sm text-gray-500 max-w-4xl leading-relaxed tracking-tight">
                Webter merupakan digital agency yang berfokus pada pembuatan website dan sistem informasi dengan pendekatan yang strategis dan terukur. Kami tidak hanya membangun tampilan visual, tetapi menciptakan solusi digital yang mampu meningkatkan efisiensi operasional, memperkuat identitas brand, serta memberikan pengalaman pengguna yang optimal.
              </p>
            </Reveal>

          </div>
        </section>

        {/* ── IMAGE GRID ── */}
        <section className="px-4 md:px-8 pt-8 md:pt-4 pb-16 relative">

          {/* Floating circle 2 — sisi kiri tengah, sama seperti Service */}
          <motion.div
            className="absolute left-[-120px] top-1/2 -translate-y-1/2
                       w-[280px] h-[280px] border-[40px]
                       md:left-[-250px] md:w-[600px] md:h-[600px] md:border-[60px]
                       rounded-full border-gray-300 opacity-20 pointer-events-none"
            animate={{ y: [0, -14, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="max-w-7xl mx-auto w-full relative z-10">

            {/* Main Large Image */}
            <Reveal direction="scale" className="mb-3 md:mb-4">
              <div className="w-full h-[240px] md:h-[460px] overflow-hidden">
                <motion.img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80"
                  alt="Tim Webter bekerja bersama"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </Reveal>

            {/* Two smaller images */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">

              <Reveal delay={0.1}>
                <div className="overflow-hidden">
                  <motion.img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                    alt="Web development workspace"
                    className="w-full h-[160px] md:h-[280px] object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  />
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="overflow-hidden">
                  <motion.img
                    src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80"
                    alt="UI UX design process"
                    className="w-full h-[160px] md:h-[280px] object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  />
                </div>
              </Reveal>

            </div>
          </div>
        </section>

      </div>
    </main>
  );
}