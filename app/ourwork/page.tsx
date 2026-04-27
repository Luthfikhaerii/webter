"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import Image from "next/image";

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

  const variants: Variants = {
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

/* ── PROJECT ITEMS ── */
const projects = [
  {
    title: "Company Profile",
    description:
      "Here's A Detailed Design Breakdown + Structured Reference Of The Website Style You Shared, Translated Into A Clear System You (Or AI) Can Use To Generate A Digital Agency",
    image: "/image/gbi.jpg",
    alt: "Project 1",
    imageLeft: true,
    delay: 0.1,
  },
  {
    title: "Company Profile",
    description:
      "Here's A Detailed Design Breakdown + Structured Reference Of The Website Style You Shared, Translated Into A Clear System You (Or AI) Can Use To Generate A Digital Agency",
    image: "/image/lki.jpg",
    alt: "Project 2",
    imageLeft: false,
    delay: 0.22,
  },
  {
    title: "Company Profile",
    description:
      "Here's A Detailed Design Breakdown + Structured Reference Of The Website Style You Shared, Translated Into A Clear System You (Or AI) Can Use To Generate A Digital Agency",
    image: "/image/lupic.jpg",
    alt: "Project 3",
    imageLeft: true,
    delay: 0.34,
  },
  {
    title: "Company Profile",
    description:
      "Here's A Detailed Design Breakdown + Structured Reference Of The Website Style You Shared, Translated Into A Clear System You (Or AI) Can Use To Generate A Digital Agency",
    image: "/image/langkahsana.jpg",
    alt: "Project 4",
    imageLeft: false,
    delay: 0.46,
  },
  {
    title: "Company Profile",
    description:
      "Here's A Detailed Design Breakdown + Structured Reference Of The Website Style You Shared, Translated Into A Clear System You (Or AI) Can Use To Generate A Digital Agency",
    image: "/image/gbi.jpg",
    alt: "Project 5",
    imageLeft: true,
    delay: 0.58,
  },
];

export default function OurWorkPage() {
  return (
    <main className="pt-[65px]">

      {/* ── Wrapper tunggal dengan overflowX clip ── */}
      <div className="bg-[#F4F4F4] relative" style={{ overflowX: "clip" }}>

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
              (OUR WORKS)
            </motion.p>

            {/* Heading */}
            <h1
              className="font-semibold text-black leading-none"
              style={{
                fontSize: "clamp(48px, 10vw, 110px)",
                letterSpacing: "-0.03em",
              }}
            >
              <HeroWord word="Our" delay={0.05} />
              {" "}
              <HeroWord word="Work" delay={0.2} />
            </h1>

          </div>
        </section>

        {/* ── PROJECT LIST ── */}
        <section className="px-4 md:px-10 py-10 relative">

          {/* Floating circle 2 — sisi kiri tengah */}
          <motion.div
            className="absolute left-[-120px] top-1/2 -translate-y-1/2
                       w-[280px] h-[280px] border-[40px]
                       md:left-[-250px] md:w-[600px] md:h-[600px] md:border-[60px]
                       rounded-full border-gray-300 opacity-20 pointer-events-none"
            animate={{ y: [0, -14, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="max-w-7xl mx-auto w-full flex flex-col gap-10 md:gap-16 relative z-10">

            {projects.map((project, index) => (
              <Reveal key={index} delay={project.delay}>

                {/* Desktop: grid 2 col, alternating image side */}
                {/* Mobile: image atas, text bawah selalu */}
                <div className="flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-10 items-start">

                  {/* Image — selalu di atas pada mobile, posisi kiri/kanan pada desktop */}
                  <div
                    className={`overflow-hidden w-full ${
                      !project.imageLeft ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-[220px] md:h-[360px] object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>

                  {/* Text */}
                  <div
                    className={`pt-0 md:pt-2 ${
                      !project.imageLeft ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <h2 className="text-lg md:text-2xl font-semibold text-black mb-2 md:mb-3">
                      {project.title}
                    </h2>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                </div>
              </Reveal>
            ))}

          </div>
        </section>

      </div>
    </main>
  );
}