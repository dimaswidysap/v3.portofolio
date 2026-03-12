"use client";
import style from "./mobileVersion.module.css";
import Image from "next/image";
import { projectsIll } from "./main";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MobileVersion = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yMovement = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      className="w-full pb-10 pt-20 flex flex-col gap-15 md:hidden overflow-hidden"
    >
      {projectsIll.map((items, index) => {
        const reverse = index % 2 !== 0;

        return (
          <figure
            key={items.alt}
            className={`w-full flex ${reverse ? "flex-row-reverse" : ""} items-center h-80`}
          >
            <motion.div
              style={{
                y: yMovement,
                willChange: "transform",
              }}
              className="w-[80%] aspect-square relative"
            >
              <Image
                src={items.src}
                alt={items.alt}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                sizes="80vw"
                className={`object-cover ${style.dropShadow}`}
              />
            </motion.div>

            <div
              className={`${
                reverse ? style.roundedkanan : style.roundedkiri
              } relative h-full flex-1 bg-secondary p-1`}
            >
              <div className="w-full main-font aspect-square bg-primary rounded-full flex justify-center items-center font-black">
                {index + 1}
              </div>

              <div className="w-full absolute overflow-hidden inset-0 top-1/2 h-max">
                <span className="inline-flex w-full h-px bg-accen-first rotate-12 scale-125"></span>
                <span className="inline-flex w-full h-px bg-accen-first rotate-12 scale-125"></span>
              </div>
            </div>
          </figure>
        );
      })}
    </section>
  );
};

export default MobileVersion;
