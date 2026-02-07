"use client"; // Pastikan ada directive ini karena kita menggunakan hooks

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import style from "./AboutHeader.module.css";

const AboutHeaderComponent = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["15rem", "30rem"]);

  return (
    <header ref={targetRef} className="w-full h-[130vh] bg-primary">
      <section className="max-width-custom h-screen sticky top-0 m-auto  flex justify-center items-center overflow-hidden">
        {/* container teks */}
        <div className="mb-40">
          <h1 className="font-extrabold montserrat text-[2em] md:text-[3em] main-font">
            <span className="font-accen-first">Cerita</span> Singkat
            <span className="text-blue-500">.</span>
          </h1>
        </div>

        <motion.figure
          style={{ height }}
          className={`${style.containerImage} absolute bottom-0 max-w-280 w-[90%] aspect-2/1  origin-bottom`}
        >
          {/* container lines */}
          <section
            className={`${style.containerLines} relative z-20 h-full w-full `}
          >
            <span className="h-120 w-0.5 bottom-full right-full"></span>
            <span className="h-0.5 w-[30%] bottom-[160%]"></span>
            <span className="h-[120%] w-0.5 left-full bottom-full"></span>
            <span className="h-0.5 w-[30%] bottom-[220%] right-0 translate-x-[10%]"></span>
          </section>
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src="/asset/pageAbout/my-foto.jpg"
            alt="my foto guweh"
            fill
            unoptimized
          />
        </motion.figure>
      </section>
    </header>
  );
};

export default AboutHeaderComponent;
