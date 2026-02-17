"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import style from "./HomeHeroSection.module.css";
import Image from "next/image";
import ScrollFloat from "@/components/ReacbitsComponents/ScrollFloat/ScrollFloat";
import RotatingText from "@/components/ReacbitsComponents/RotatingText/RotatingText";

const HomeHeroSection = () => {
  function createCard(linkIcon: string) {
    return (
      <section className="relative h-16 aspect-square shrink-0">
        <Image
          className="object-contain"
          src={linkIcon}
          alt="icon"
          fill
          unoptimized
        />
      </section>
    );
  }

  const techIcons = [
    "https://cdn.simpleicons.org/html5",
    "https://cdn.simpleicons.org/css",
    "https://cdn.simpleicons.org/javascript",
    "https://cdn.simpleicons.org/tailwindcss",
    "https://cdn.simpleicons.org/nextdotjs",
  ];

  // Best practice: Definisikan tipe elemen untuk useRef agar TS tidak complain
  const targetRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.6], ["0", "-40rem"]),
    { stiffness: 50, damping: 20 },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0.05, 0.7], ["0", "-40rem"]),
    { stiffness: 50, damping: 20 },
  );
  const y3 = useSpring(
    useTransform(scrollYProgress, [0.1, 0.8], ["0", "-40rem"]),
    { stiffness: 50, damping: 20 },
  );
  const y4 = useSpring(
    useTransform(scrollYProgress, [0.15, 0.9], ["0", "-40rem"]),
    { stiffness: 50, damping: 20 },
  );

  return (
    <section ref={targetRef} className={`relative z-20 h-200 w-full`}>
      {/* container blok keatas */}
      <section className="absolute h-full w-full bg-amber-50">
        {/* penutup */}
        <section className="absolute h-full w-full bg-secondary z-20"></section>
        {/* container blok */}
        <section className="w-full h-full flex">
          <motion.span
            style={{ y: y1 }}
            className="bg-secondary w-[25%] h-full inline-flex"
          ></motion.span>
          <motion.span
            style={{ y: y2 }}
            className="bg-secondary w-[25%] h-full inline-flex"
          ></motion.span>
          <motion.span
            style={{ y: y3 }}
            className="bg-secondary w-[25%] h-full inline-flex"
          ></motion.span>
          <motion.span
            style={{ y: y4 }}
            className="bg-secondary w-[25%] h-full inline-flex"
          ></motion.span>
        </section>
      </section>

      {/* container garuda */}
      <section className="relative h-full w-full overflow-hidden flex justify-center">
        <figure className="h-[90%] aspect-video translate-x-[15%] md:translate-x-[25%] lg:translate-x-[20%]  flex justify-center items-center relative z-20">
          <section className={`${style.objectRandom} relative h-full w-full`}>
            <div className={`${style.ekor} absolute inset-0`}>
              <Image
                loading="lazy"
                className="h-full aspect-video drop-shadow-2xl object-cover"
                src="/asset/pageIndex/garuda/ekor.webp"
                alt="person"
                fill
                unoptimized
              />
            </div>
            <div className={`${style.sayapKanan} absolute inset-0`}>
              <Image
                loading="lazy"
                className="h-full aspect-video drop-shadow-2xl object-cover"
                src="/asset/pageIndex/garuda/sayapkanan.webp"
                alt="person"
                fill
                unoptimized
              />
            </div>
            <div className={`${style.sayapKiri} absolute inset-0`}>
              <Image
                loading="lazy"
                className="h-full aspect-video drop-shadow-2xl object-cover"
                src="/asset/pageIndex/garuda/sayapkiri.webp"
                alt="person"
                fill
                unoptimized
              />
            </div>
            <div className="absolute inset-0">
              <Image
                loading="lazy"
                className="h-full aspect-video drop-shadow-2xl object-cover"
                src="/asset/pageIndex/garuda/badan.webp"
                alt="person"
                fill
                unoptimized
              />
            </div>
          </section>
        </figure>
      </section>

      {/* container konten */}
      <section className="absolute overflow-hidden h-full w-full inset-0">
        <section
          className={`${style.shadowKonten} max-width-custom h-full m-auto relative`}
        >
          {/* kontem */}
          <section className="w-full h-full relative z-20 pl-2">
            <div
              className={`flex items-end text-[3em] montserrat font-black main-font `}
            >
              <ScrollFloat
                animationDuration={2.5}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
              >
                Saya Hebat Dalam.
              </ScrollFloat>
            </div>
            <div>
              <RotatingText
                texts={["Front-End Developer", "Illustrator"]}
                mainClassName="px-4 py-2 bg-primary shadow-2xl text-[1.6em] md:text-[2em] lg:text-[3em] montserrat font-black main-font text-white font-extrabold rounded-2xl font-bold text-2xl inline-flex items-center justify-center"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-120%" }}
                staggerDuration={0.03}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 px-1"
                transition={{ type: "spring", damping: 30, stiffness: 500 }}
                rotationInterval={2000}
              />
            </div>

            <div
              className={`${style.sbhas} overflow-hidden w-[200%] absolute flex flex-col gap-4 py-2 rotate-12 -left-[20%] bottom-[5%] md:bottom-[20%]`}
            >
              <div className="flex">
                <div className={`${style.scrollLeft} flex gap-4 shrink-0`}>
                  {[...Array(12)].map((_, groupIndex) => (
                    <React.Fragment key={`orig-top-${groupIndex}`}>
                      {techIcons.map((url, i) => (
                        <React.Fragment key={`icon-top-${groupIndex}-${i}`}>
                          {createCard(url)}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="flex">
                <div className={`${style.scrollRight} flex gap-4 shrink-0`}>
                  {[...Array(12)].map((_, groupIndex) => (
                    <React.Fragment key={`orig-bot-${groupIndex}`}>
                      {techIcons.map((url, i) => (
                        <React.Fragment key={`icon-bot-${groupIndex}-${i}`}>
                          {createCard(url)}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default HomeHeroSection;
