"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import style from "./HomeHeroSection.module.css";
import Image from "next/image";
// import Terminal from "./terminal/Terminal";
// import FinderComponent from "./finder/finder";
import Technology from "./technology/technology";

const HomeHeroSection = () => {
  const targetRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const garuda = useSpring(
    useTransform(scrollYProgress, [0, 0.6], ["0", "-50%"]),
    { stiffness: 50, damping: 20 },
  );

  const rotateLeft = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [0, -35]),
    { stiffness: 50, damping: 20 },
  );

  const rotateRight = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [0, 35]),
    { stiffness: 50, damping: 20 },
  );

  const teksToLeft = useSpring(
    useTransform(scrollYProgress, [0, 0.6], ["0%", "-30%"]),
    { stiffness: 50, damping: 20 },
  );

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.6], ["0%", "-100%"]),
    { stiffness: 50, damping: 20 },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0.05, 0.7], ["0%", "-100%"]),
    { stiffness: 50, damping: 20 },
  );
  const y3 = useSpring(
    useTransform(scrollYProgress, [0.1, 0.8], ["0%", "-100%"]),
    { stiffness: 50, damping: 20 },
  );
  const y4 = useSpring(
    useTransform(scrollYProgress, [0.15, 0.9], ["0%", "-100%"]),
    { stiffness: 50, damping: 20 },
  );

  const karakterGaruda = [
    { name: "ekor.webp", href: "/asset/pageIndex/garuda/badan.webp" },
    { name: "sayapkiri.webp", href: "/asset/pageIndex/garuda/sayapkiri.webp" },
    {
      name: "sayapkanan.webp",
      href: "/asset/pageIndex/garuda/sayapkanan.webp",
    },
    { name: "badan.webp", href: "/asset/pageIndex/garuda/badan.webp" },
  ];

  return (
    <section
      ref={targetRef}
      className={`relative z-20 h-200 w-full justify-center items-center hidden md:flex`}
    >
      <section className="absolute h-full w-full">
        <section className="absolute h-full w-full bg-secondary z-20"></section>
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

      <section className="absolute bottom-[50%] translate-y-[50%] w-full h-320 overflow-hidden z-20 flex justify-center items-center">
        {/* konten garuda */}
        <section className="absolute scale-200 md:scale-150 lg:scale-100 w-full aspect-video flex">
          <span className="w-full flex absolute justify-end inset-0 h-max">
            <motion.p
              style={{ x: teksToLeft }}
              className="font-black text-[2em] translate-y-16 scale-400 md:scale-600 lg:scale-800 main-font opacity-15"
            >
              ILLUSTRATOR
            </motion.p>
          </span>
          <motion.figure
            style={{ y: garuda }}
            className="h-full w-full relative flex justify-center"
          >
            {karakterGaruda.map((items, index) => {
              let style = {};

              if (index === 1) {
                style = { rotate: rotateLeft };
              }

              if (index === 2) {
                style = { rotate: rotateRight };
              }

              return (
                <motion.div
                  key={items.name}
                  style={style}
                  className="absolute inset-0"
                >
                  <Image
                    loading="lazy"
                    className="object-cover"
                    src={items.href}
                    alt="part-of-garuda"
                    fill
                    unoptimized
                  />
                </motion.div>
              );
            })}
            <span className="absolute top-[50%] w-full flex flex-col items-center">
              <span className="relative inline-flex w-full justify-center z-20">
                <p
                  className={`${style.textShadow} font-accen-first font-black  px-4 text-[1em] lg:text-[1.5em]`}
                >
                  SAYA HEBAT DALAM
                </p>
                <p
                  className={`${style.textShadow} absolute md:top-3 lg:top-5 font-accen-first font-black  px-4 text-[2em] lg:text-[2.5em]`}
                >
                  ILLUSTRATOR
                </p>
              </span>
              <span className="relative inline-flex w-full justify-center md:mt-7 lg:mt-6 z-20">
                <p
                  className={`${style.textShadow} font-accen-first font-black  px-4 text-[1em] lg:text-[1.5em]`}
                >
                  DAN
                </p>
                <p
                  className={`${style.textShadow} absolute md:top-3 lg:top-5 font-accen-first font-black  px-4 text-[2em] lg:text-[2.5em]`}
                >
                  FRONT-END DEVOLOPER
                </p>
              </span>
              <span className="absolute h-full aspect-square bg-primary rounded-2xl scale-1100 translate-y-[600%] rotate-45"></span>
            </span>
          </motion.figure>
          <section className="absolute  inset-0 w-full aspect-square rounded-full translate-y-[20%] bg-secondary scale-x-150"></section>
        </section>
        {/* konten front end */}
        <section className="absolute max-width-custom bottom-0 w-full h-[50%]">
          <Technology />
        </section>
      </section>
    </section>
  );
};

export default HomeHeroSection;
