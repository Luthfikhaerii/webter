"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import type { LenisOptions } from "lenis";
import "lenis/dist/lenis.css"; // wajib!

const LenisContext = createContext<Lenis | null>(null);

export function LenisProvider({
  children,
  options = {},
}: {
  children: React.ReactNode;
  options?: LenisOptions;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const optionsRef = useRef(options);

  useEffect(() => {
    const lenisInstance = new Lenis({
      autoRaf: true,       // otomatis handle requestAnimationFrame
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      syncTouch: false,    // performa lebih baik di mobile
      anchors: true,       // support anchor links otomatis
      ...optionsRef.current,
    });

    setLenis(lenisInstance);

    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}