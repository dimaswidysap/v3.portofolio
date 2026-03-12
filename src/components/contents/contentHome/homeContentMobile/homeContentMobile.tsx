"use client";
import Image from "next/image";
import Style from "./homeContent.module.css";
import { iconFontend, iconIll, displayProgres } from "./main";
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
      className="relative flex flex-col lg:hidden w-full bg-primary"
    >
      <div className="absolute w-full h-20  inset-0">
        <span
          className={`${Style.sdske} relative z-20  inline-flex w-full h-full bg-primary -translate-y-full`}
        ></span>
      </div>

      <section className="w-full">
        <h1 className="main-font text-2xl font-black p-2">
          Apa yang Saya Kerjakan?
        </h1>
        <div className="w-full flex flex-col gap-3">
          <span className="w-1/2 h-px bg-accen-first"></span>
          <span className="w-[25%] h-px bg-accen-first"></span>
        </div>
      </section>

      {/* font end */}

      <section className="relative w-full mt-20 bg-primary">
        <header className="p-2">
          <h1 className="text-2xl mb-8 md:mb-9 md:text-[3em] font-black main-font">
            Front-End Devoloper
          </h1>
          <div className="w-[15%] md:w-[10%] aspect-square relative">
            {iconFontend.map((items) => {
              return (
                <figure
                  style={items.style}
                  key={items.alt}
                  className="w-full h-full absolute inset-0  drop-shadow-2xl"
                >
                  <Image
                    className="object-cover"
                    src={items.icon}
                    alt="person"
                    fill
                    unoptimized
                  />
                </figure>
              );
            })}
          </div>
          <p className="main-font mt-5 md:text-xl text-balance font-bold">
            Saya adalah seorang Front-End Developer berpengalaman yang memiliki
            keahlian teknis dalam HTML, CSS, Tailwind CSS, JavaScript, dan
            Next.js, serta didukung dengan pemahaman pada sisi backend
            menggunakan PHP dan MySQL.
          </p>
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

      {/* illustrator */}

      <section className="relative w-full pb-10 bg-primary">
        <header className="p-2">
          <h1 className="text-2xl mb-8 md:mb-9 md:text-[3em] font-black main-font">
            illustrator
          </h1>
          <div className="w-[15%] md:w-[10%] aspect-square relative">
            {iconIll.map((items) => {
              return (
                <figure
                  style={items.style}
                  key={items.alt}
                  className="w-full h-full absolute inset-0"
                >
                  <Image
                    className="object-cover"
                    src={items.icon}
                    alt="person"
                    fill
                    unoptimized
                  />
                </figure>
              );
            })}
          </div>
          <p className="main-font mt-5 md:text-xl font-bold">
            Saya juga bisa menggambar, saya memiliki kemahiran dalam membuat
            ilustrasi digital menggunakan Adobe Illustrator.
          </p>
        </header>
        <div className="w-full h-80 overflow-hidden flex justify-center gap-3 relative">
          {displayProgres.map((items) => {
            return (
              <figure
                style={items.style}
                key={items.pic}
                className="h-full aspect-square  absolute"
              >
                <Image
                  className="object-cover"
                  src={items.pic}
                  alt="person"
                  fill
                  unoptimized
                />
              </figure>
            );
          })}
        </div>
      </section>
    </section>
  );
};
export default HomeContentMobile;
