"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const FrontEndHeroSection = () => {
  const containerRef = useRef(null);

  // Pantau progress scroll pada section ini
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Gunakan spring untuk feel yang lebih smooth dan premium
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
  });

  // Fungsi untuk membuat progres tinggi yang berbeda tiap kolom
  // Kita buat rentang aktif yang bergeser untuk tiap index (0, 1, 2, 3)
  const useColumnHeight = (index: number) => {
    const start = index * 0.1; // Kolom 1 mulai di 0, kolom 2 di 0.1, dst.
    const end = start + 0.4; // Tiap kolom butuh durasi 0.4 dari total scroll
    return useTransform(smoothProgress, [start, end], ["0%", "100%"]);
  };

  const columns = [
    { color: "bg-slate-500", height: useColumnHeight(0) },
    { color: "bg-slate-600", height: useColumnHeight(1) },
    { color: "bg-slate-700", height: useColumnHeight(2) },
    { color: "bg-slate-800", height: useColumnHeight(3) },
  ];

  return (
    <section
      ref={containerRef}
      className="w-full h-220 relative z-10 bg-secondary"
    >
      {/* Container Span - Fixed agar menempel saat di-scroll */}
      <div className="sticky top-0 left-0 w-full flex h-screen overflow-hidden pointer-events-none">
        {columns.map((col, i) => (
          <motion.span
            key={i}
            className={`inline-flex w-[25%] ${col.color} origin-top`}
            style={{ height: col.height }}
          />
        ))}
      </div>

      {/* Konten dummy untuk memberikan ruang scroll */}
      <div className=" z-20 flex flex-col items-center justify-start pt-[1vh] h-full top-0 absolute w-full  text-white">
        <div className="w-full h-full  max-width-custom"></div>
      </div>
    </section>
  );
};

export default FrontEndHeroSection;
