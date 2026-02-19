"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import style from "./HomeHeroSection.module.css";
import Image from "next/image";
import ScrollFloat from "@/components/ReacbitsComponents/ScrollFloat/ScrollFloat";
import RotatingText from "@/components/ReacbitsComponents/RotatingText/RotatingText";

const HomeHeroSection = () => {
  const targetRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const { scrollXProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const garuda = useSpring(
    useTransform(scrollYProgress, [0, 0.6], ["0", "-50%"]),
    { stiffness: 50, damping: 20 },
  );

  const teksToLeft = useSpring(
    useTransform(scrollXProgress, [0, 0.6], ["0", "-10rem"]),
    { stiffness: 50, damping: 20 },
  );

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

  const karakterGaruda = [
    {
      name: "ekor.webp",
      href: "/asset/pageIndex/garuda/badan.webp",
    },
    {
      name: "sayapkiri.webp",
      href: "/asset/pageIndex/garuda/sayapkiri.webp",
    },
    {
      name: "sayapkanan.webp",
      href: "/asset/pageIndex/garuda/sayapkanan.webp",
    },
    {
      name: "badan.webp",
      href: "/asset/pageIndex/garuda/badan.webp",
    },
  ];

  return (
    <section
      ref={targetRef}
      className={`relative z-20 h-200 w-full  justify-center items-center hidden md:flex`}
    >
      {/* container blok keatas */}
      <section className="absolute h-full w-full">
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

      {/* container konten */}
      <section className="absolute bottom-[50%] translate-y-[50%] w-full h-320 overflow-hidden  z-20 flex justify-center items-center">
        {/* garuda */}
        <section className="absolute scale-200 md:scale-150 lg:scale-100 w-full aspect-video flex">
          {/* container img */}
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
            className="h-full w-full relative"
          >
            {karakterGaruda.map((items) => {
              return (
                <div key={items.name} className="absolute inset-0">
                  <Image
                    loading="lazy"
                    className="object-cover"
                    src={items.href}
                    alt="part-of-garuda"
                    fill
                    unoptimized
                  />
                </div>
              );
            })}
          </motion.figure>
          <section className="absolute inset-0 w-full aspect-square rounded-full translate-y-[20%] bg-secondary scale-x-150"></section>
        </section>
      </section>
    </section>
  );
};

export default HomeHeroSection;
