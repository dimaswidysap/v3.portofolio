"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import style from "./ProjectIllustratorGrid.module.css";

const PROJECTS = [
  {
    title: "Project Alpha",

    src: "/asset/pageIllustrator/projects/1.jpg",
  },
  {
    title: "Project Beta",

    src: "/asset/pageIllustrator/projects/2.jpg",
  },
  {
    title: "Project Gamma",

    src: "/asset/pageIllustrator/projects/3.jpg",
  },
];

const ProjectGrid = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="relative w-full z-40">
      {PROJECTS.map((project, i) => {
        const targetScale = 1 - (PROJECTS.length - i) * 0.05;

        return (
          <Card
            key={i}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};

const Card = ({ i, title, src, progress, range, targetScale }: any) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`${style.ishdo} relative bg-secondary outline-2  h-125 w-[90%] max-w-280 rounded-3xl p-4 flex origin-top shadow-2xl `}
      >
        <section className="h-full w-full md:w-[50%] relative overflow-hidden rounded-2xl">
          <Image
            className="drop-shadow-2xl  object-cover"
            src={src}
            alt="background"
            fill
            unoptimized
          />
        </section>
        <section className="h-full w-[50%] hidden md:flex">
          <h1>{title}</h1>
        </section>
      </motion.div>
    </div>
  );
};

export default ProjectGrid;
