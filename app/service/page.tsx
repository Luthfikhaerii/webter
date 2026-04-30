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

/* ── SERVICE ITEMS ── */
const services = [
  {
    number: "01",
    title: "Company Profile",
    description:
      "Here's A Detailed Design Breakdown + Structured Reference Of The Website Style You Shared, Translated Into A Clear System You (Or AI) Can Use To Generate A Digital Agency",
    delay: 0.1,
    borderBottom: false,
  },
  {
    number: "02",
    title: "Portfolio Personal",
    description:
      "Here's A Detailed Design Breakdown + Structured Reference Of The Website Style You Shared, Translated Into A Clear System You (Or AI) Can Use To Generate A Digital Agency",
    delay: 0.22,
    borderBottom: false,
  },
  {
    number: "03",
    title: "Information System",
    description:
      "Here's A Detailed Design Breakdown + Structured Reference Of The Website Style You Shared, Translated Into A Clear System You (Or AI) Can Use To Generate A Digital Agency",
    delay: 0.34,
    borderBottom: false,
  },
  {
    number: "04",
    title: "Custom Website",
    description:
      "Here's A Detailed Design Breakdown + Structured Reference Of The Website Style You Shared, Translated Into A Clear System You (Or AI) Can Use To Generate A Digital Agency",
    delay: 0.46,
    borderBottom: true,
  },
];

export default function ServicePage() {
  return (
    <main className="pt-[65px]">

      {/* ── HEADING + SERVICE LIST dalam satu wrapper dengan overflow-hidden hanya horizontal ── */}
      <div className="bg-white relative" style={{ overflowX: "clip" }}>

        {/* Floating circle 1 — pojok kanan atas, overflow ke kanan saja */}
        <motion.div
          className="absolute right-[-120px] top-[-80px] w-[280px] h-[280px]
                     md:right-[-200px] md:top-[-100px] md:w-[500px] md:h-[500px]
                     rounded-full border-[50px] md:border-[80px] border-gray-600 opacity-10 pointer-events-none"
          style={{ zIndex: 0 }}
          animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── HEADING SECTION ── */}
        <section className="px-4 md:px-10 pt-10 md:pt-14 pb-0 relative">
          <div className="max-w-7xl mx-auto w-full relative z-10">

            {/* Badge */}
            <motion.p
              className="text-xs md:text-sm tracking-widest text-gray-400 mb-4 md:mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              (SERVICE)
            </motion.p>

            {/* Heading */}
            <h1
              className="font-semibold text-black leading-none"
              style={{
                fontSize: "clamp(48px, 10vw, 110px)",
                letterSpacing: "-0.03em",
              }}
            >
              <HeroWord word="Services" delay={0.05} />
            </h1>

          </div>
        </section>

        {/* ── SERVICE LIST SECTION ── */}
        <section className="px-4 md:px-10 pt-12 md:pt-20 pb-16 md:pb-20 relative">

          {/* Floating circle 2 — sisi kiri, overflow ke kiri saja */}
          <motion.div
            className="absolute left-[-120px] top-1/2 -translate-y-1/2
                       w-[280px] h-[280px] border-[40px]
                       md:left-[-250px] md:w-[600px] md:h-[600px] md:border-[60px]
                       rounded-full border-gray-300 opacity-20 pointer-events-none"
            animate={{ y: [0, -14, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="max-w-7xl mx-auto w-full relative z-10">
            {services.map((item) => (
              <Reveal
                key={item.number}
                delay={item.delay}
                className={`
                  flex flex-col md:grid md:grid-cols-6
                  border-t ${item.borderBottom ? "border-b" : ""}
                  border-gray-200
                  py-8 md:py-14
                  gap-2 md:gap-0
                `}
              >
                <div className="md:col-span-2">
                  <p className="text-gray-400 text-xs md:text-sm">{item.number}</p>
                </div>
                <div className="md:col-span-4">
                  <h2 className="text-xl md:text-3xl tracking-tight font-semibold text-black mb-2 md:mb-4">
                    {item.title}
                  </h2>
                  <p className="text-xs md:text-sm text-gray-500 tracking-tight leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </section>

      </div>

    </main>
  );
}