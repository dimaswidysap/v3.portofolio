"use client";
import Image from "next/image";
import Style from "./homeContent.module.css";
import { galeriAtas, galeriTengah, galeriBawah } from "./front-end-gallery";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const HomeContentMobile = () => {
  const containerRef = useRef(null);

  // 1. Ambil progres scroll terhadap elemen container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start end" = Animasi mulai saat bagian ATAS elemen menyentuh BAWAH layar
    // "end start" = Animasi selesai saat bagian BAWAH elemen menyentuh ATAS layar
    offset: ["start end", "end start"],
  });

  // 2. Transformasi: saat scroll 0% -> x = -200px, saat scroll 100% -> x = 200px
  const xMovementAtas = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const xMovementTengah = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col lg:hidden w-full"
    >
      <div className="absolute w-full h-20  inset-0">
        <span
          className={`${Style.sdske} relative z-20  inline-flex w-full h-full bg-primary -translate-y-full`}
        ></span>
      </div>

      <section className="relative w-full max-width-cutom  h-screen bg-primary">
        <header className="p-10">
          <h1 className="text-2xl md:text-[3em] font-black main-font">
            Front-End Devoloper
          </h1>
          <p className="main-font md:text-xl">Hallo </p>
        </header>
        <div className="w-full h-100 md:h-150 flex gap-4 flex-col justify-center items-center overflow-hidden">
          <div className={`${Style.ajsneu} `}>
            <motion.div
              style={{ x: xMovementAtas }}
              className={`${Style.niyeai}`}
            >
              {galeriAtas.map((items) => {
                return (
                  <figure key={items.id} className="relative">
                    <Image
                      className="object-cover"
                      src="/asset/pageFrontend/imageProjects/display2.png" // Pastikan path benar (biasanya diawali /)
                      alt="person"
                      fill
                      unoptimized
                    />
                  </figure>
                );
              })}
            </motion.div>
          </div>
          <div className={`${Style.ajsneu} `}>
            <motion.div
              style={{ x: xMovementTengah }}
              className={`${Style.niyeai} justify-center`}
            >
              {galeriTengah.map((items) => {
                return (
                  <figure key={items.id}>
                    <Image
                      loading="lazy"
                      className="object-cover"
                      src={items.pic}
                      alt="person"
                      fill
                      unoptimized
                    />
                  </figure>
                );
              })}
            </motion.div>
          </div>
          <div className={`${Style.ajsneu} `}>
            <motion.div
              style={{ x: xMovementAtas }}
              className={`${Style.niyeai} justify-end`}
            >
              {galeriBawah.map((items) => {
                return (
                  <figure key={items.id}>
                    <Image
                      className="object-cover"
                      src="./asset/pageFrontend/imageProjects/display2.png"
                      alt="person"
                      fill
                      unoptimized
                    />
                  </figure>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default HomeContentMobile;
