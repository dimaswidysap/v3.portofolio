"use client";
import Image from "next/image";
import style from "../../../app/my-css.module.css";
import hero from "./IllustratorHeader.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

const HerosectionComponent = () => {
  const { scrollYProgress } = useScroll();

  const xHellcat = useTransform(scrollYProgress, [0, 0.5], [0, -300]);
  const xMoon = useTransform(scrollYProgress, [0, 0.5], [0, 300]);

  const scaleHellcat = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const scaleMoon = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
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
            style={{ x: xHellcat, scale: scaleHellcat }}
            className="h-full aspect-square  relative"
          >
            <Image
              priority
              className="object-fill"
              src="/asset/pageIllustrator/hellcatmobil.webp"
              alt="background"
              fill
              unoptimized
            />
          </motion.figure>
          <motion.figure
            style={{ x: xMoon, scale: scaleMoon }}
            className="h-full aspect-square relative"
          >
            <Image
              priority
              className="object-fill"
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
            priority
            className="inset-0 shrink object-cover"
            src="/asset/pageIllustrator/background.webp"
            alt="background"
            fill
            unoptimized
          />
        </figure>
        {/* background api */}
        <figure className="absolute h-[200svh] z-30 w-full">
          <Image
            priority
            className="inline-flex object-cover xl:object-fill  aspect-video "
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
