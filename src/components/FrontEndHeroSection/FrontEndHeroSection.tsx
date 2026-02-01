"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import style from "./FrontEndHeroSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { Globe, Github } from "lucide-react";
import Magnet from "../Magnet/Magnet";

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
    const end = start + 0.5; // Tiap kolom butuh durasi 0.4 dari total scroll
    return useTransform(smoothProgress, [start, end], ["0%", "100%"]);
  };

  const columns = [
    { color: "bg-slate-500", height: useColumnHeight(0) },
    { color: "bg-slate-600", height: useColumnHeight(1) },
    { color: "bg-slate-700", height: useColumnHeight(2) },
    { color: "bg-slate-800", height: useColumnHeight(3) },
  ];

  const cardProjects = [
    {
      title: "Webiste Rekomendasi Smartphone",
      image: "rekomendasihp.png",
      desc: "Sebuah website yang menyediakan layanan rekomendasi hp berdasarkan kriteria yang dimasuka pengguna.",
      linkRep: "https://github.com/dimaswidysap/rekomendasihp",
      linkDemo: "https://dimaswidysap.github.io/rekomendasihp/",
    },
  ];

  return (
    <section ref={containerRef} className="w-full  relative z-10 bg-secondary">
      {/* Container Span - Fixed agar menempel saat di-scroll */}
      <div
        className="sticky top-0 left-0 w-full flex overflow-hidden pointer-events-none"
        style={{ height: `${cardProjects.length * 40}rem` }} // Tinggi otomatis bertambah 40rem tiap objek baru
      >
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
        <div className="w-full  max-width-custom flex flex-col  items-center justify-center gap-32 py-24">
          {cardProjects.map((items, index) => {
            return (
              <div
                key={items.title}
                className={`${style.glass} w-[90%] flex flex-col md:flex-row h-120 max-w-280 shrink-0 rounded-2xl relative`}
              >
                {/* nomor */}
                <section
                  className={`absolute z-20 h-10 aspect-square bg-slate-200 rounded-full m-[1%] flex justify-center items-center bg-primary shadow-2xl `}
                >
                  <p className="text-slate-800 font-bold main-font montserrat">
                    {index + 1}
                  </p>
                </section>
                {/* konten kiri */}
                <section className="w-full md:w-[60%] md:h-full  flex items-center px-[2%] py-[2%] h-max">
                  <figure className="w-full aspect-16/10 bg-slate-50 rounded-xl relative overflow-hidden">
                    <Image
                      className="object-cover drop-shadow-2xl"
                      src={`/asset/pageFrontend/imageProjects/${items.image}`}
                      alt="person"
                      fill
                      unoptimized
                    />
                  </figure>
                </section>
                {/* konten kanan */}
                <section className="w-full flex gap-4 relative  flex-col flex-1 p-[2%]">
                  <header className="w-full">
                    <h1 className="montserrat text-[1.5em] md:text-[2em] font-black">
                      {" "}
                      {items.title} <span className="text-blue-700">.</span>
                    </h1>
                  </header>
                  <p className="montserrat font-light">{items.desc}</p>
                  <section className="absolute flex gap-3 bottom-0 mb-[5%]">
                    <Magnet padding={50} disabled={false} magnetStrength={5}>
                      <Link
                        target="_blanks"
                        href={items.linkRep}
                        className="flex items-center gap-1"
                      >
                        <span className="h-7 aspect-square inline-flex  relative">
                          {/* <Image
                          className="object-cover"
                          src="https://cdn.simpleicons.org/github/ffff"
                          alt="person"
                          fill
                          unoptimized
                          /> */}

                          <Github className="main-font" />
                        </span>
                        <span className="montserrat main-font font-light">
                          Source Code
                        </span>
                      </Link>
                    </Magnet>
                    <Magnet padding={50} disabled={false} magnetStrength={5}>
                      <Link
                        target="_blanks"
                        href={items.linkDemo}
                        className="flex items-center gap-1"
                      >
                        <span className="h-7 aspect-square inline-flex relative">
                          <Globe className="text-blue-700" />
                        </span>
                        <span className="montserrat font-light text-blue-700">
                          live Demo
                        </span>
                      </Link>
                    </Magnet>
                  </section>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FrontEndHeroSection;
