"use client";

import Image from "next/image";
import style from "../../../app/my-css.module.css";
import hero from "./IllustratorHeader.module.css";

import { motion, useScroll, useTransform } from "framer-motion";

const HerosectionComponent = () => {
  // membaca progress scroll halaman (0 → 1)
  const { scrollYProgress } = useScroll();

  // Hellcat bergerak ke kanan
  const xHellcat = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // Moonknight bergerak ke kiri
  const xMoon = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // Optional: efek cinematic fade
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <header className="w-full h-screen relative overflow-hidden">
      {/* TEXT */}
      <section className="relative z-20 m-auto max-width-custom h-screen flex justify-center">
        <motion.p
          style={{ opacity }}
          className={`${style.montserrat} ${hero.font} mt-[30%] lg:mt-[20%]
          flex flex-col items-center text-[2.5em] md:text-[3em] font-black  h-max relative`}
        >
          <span>PROJECT</span>
          <span className="absolute top-[60%]">ILLUSTRATOR</span>
        </motion.p>
      </section>

      {/* BACKGROUND */}
      <section className="absolute inset-0 h-full lg:w-full aspect-video flex justify-center items-center">
        {/* Background */}
        <Image
          className="absolute inset-0 h-full aspect-video drop-shadow-2xl shrink"
          src="/asset/pageIllustrator/background.webp"
          alt="background"
          fill
          unoptimized
        />

        <Image
          className="absolute inset-0 h-full aspect-video shrink"
          src="/asset/pageIllustrator/bgapi.webp"
          alt="fire"
          fill
          unoptimized
        />

        {/* FIGURE CHARACTERS */}
        <figure className="absolute bottom-0 h-[80%] w-full flex justify-between px-10">
          {/* Hellcat Mobil */}
          <motion.div
            style={{ x: xHellcat }}
            className="relative h-full aspect-square"
          >
            <Image
              className="object-cover drop-shadow-2xl"
              src="/asset/pageIllustrator/hellcatmobil.webp"
              alt="mobil"
              fill
              unoptimized
            />
          </motion.div>

          {/* Moonknight */}
          <motion.div
            style={{ x: xMoon }}
            className="relative h-full aspect-square"
          >
            <Image
              className="object-cover drop-shadow-2xl"
              src="/asset/pageIllustrator/moonknight.webp"
              alt="moonknight"
              fill
              unoptimized
            />
          </motion.div>
        </figure>
      </section>
    </header>
  );
};

export default HerosectionComponent;
