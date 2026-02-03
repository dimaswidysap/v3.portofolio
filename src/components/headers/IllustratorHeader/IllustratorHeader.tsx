"use client";

import Image from "next/image";
import style from "../../../app/my-css.module.css";
import hero from "./IllustratorHeader.module.css";

import { motion, useScroll, useTransform } from "framer-motion";

const HerosectionComponent = () => {
  // membaca progress scroll halaman (0 → 1)
  const { scrollYProgress } = useScroll();

  // Hellcat bergerak ke kanan
  const xHellcat = useTransform(scrollYProgress, [0, 0.5], [0, -300]);

  // Moonknight bergerak ke kiri
  const xMoon = useTransform(scrollYProgress, [0, 0.5], [0, 300]);

  // Optional: efek cinematic fade
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <header className="w-full h-screen relative">
      {/* TEXT */}
      <section className="relative z-20 m-auto max-width-custom h-screen flex justify-center">
        <motion.p
          style={{ opacity }}
          className={`${style.montserrat} ${hero.font} mt-[30%] lg:mt-[20%]
          flex flex-col items-center text-[2.5em] md:text-[3em] font-black  h-max relative`}
        >
          <span className="absolute bottom-[60%]">Featured</span>
          <span>Projects</span>
          <span className="absolute top-[60%]">
            Illustrator<span className="text-blue-700">.</span>
          </span>
        </motion.p>
      </section>

      {/* BACKGROUND */}
      <section className="h-screen w-full absolute inset-0">
        {/* container karakter */}
        <section className="w-full h-[80%]  absolute z-40 bottom-0 flex justify-between overflow-hidden">
          <motion.figure
            style={{ x: xHellcat }}
            className="h-full aspect-square  relative"
          >
            <Image
              className="drop-shadow-2xl  object-fill"
              src="/asset/pageIllustrator/hellcatmobil.webp"
              alt="background"
              fill
              unoptimized
            />
          </motion.figure>
          <motion.figure
            style={{ x: xMoon }}
            className="h-full aspect-square relative"
          >
            <Image
              className="drop-shadow-2xl  object-fill"
              src="/asset/pageIllustrator/moonknight.webp"
              alt="background"
              fill
              unoptimized
            />
          </motion.figure>
        </section>
        {/* background */}
        <figure className="w-full h-screen absolute">
          <Image
            className="inset-0 drop-shadow-2xl shrink object-cover"
            src="/asset/pageIllustrator/background.webp"
            alt="background"
            fill
            unoptimized
          />
        </figure>
        {/* background api */}
        <figure className="absolute h-[200svh] z-30 w-full">
          <Image
            className="drop-shadow-2xl inline-flex object-cover xl:object-fill  aspect-video "
            src="/asset/pageIllustrator/bgapiv2.webp"
            alt="background"
            fill
            unoptimized
          />
        </figure>
      </section>
    </header>
  );
};

export default HerosectionComponent;
