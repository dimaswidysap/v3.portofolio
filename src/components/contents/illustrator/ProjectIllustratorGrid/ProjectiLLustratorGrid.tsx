"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import style from "./ProjectIllustratorGrid.module.css";
import font from "@/app/my-css.module.css";
import IconTech from "../../../iconTech/iconTech";

const PROJECTS = [
  {
    title: "Garuda Illustration",
    src: "/asset/pageIllustrator/projects/1.jpg",
  },
  {
    title: "Sam Wilson",
    src: "/asset/pageIllustrator/projects/falcon.webp",
  },
  {
    title: "Tiger Illustration",
    src: "/asset/pageIllustrator/projects/2.jpg",
  },
  {
    title: "Zombie Illustration",
    src: "/asset/pageIllustrator/projects/3.jpg",
  },
  {
    title: "GODZILLA AND DOCTOR DOOM",
    src: "/asset/pageIllustrator/projects/goddoom.webp",
  },
  {
    title: "Ibu Keraton",
    src: "/asset/pageIllustrator/projects/ibukeraton.webp",
  },
];

const ProjectGrid = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="relative w-full z-40 pb-40">
      {PROJECTS.map((project, i) => {
        const targetScale = 1 - (PROJECTS.length - i) * 0.04;
        const start = i * (1 / PROJECTS.length);

        return (
          <Card
            key={i}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[start, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};

const Card = ({
  i,
  title,
  src,
  tools,
  desc,
  progress,
  range,
  targetScale,
}: any) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 md:hidden"
    >
      <motion.div
        style={{
          scale,
          top: `calc(5vh + ${i * 20}px)`,
        }}
        className={`${style.ishdo} relative bg-secondary outline-2 h-125 w-[90%] max-w-280 rounded-3xl p-4 flex origin-top shadow-2xl`}
      >
        <section className="h-full w-full md:w-[50%] relative overflow-hidden rounded-2xl">
          <Image
            loading="lazy"
            className="object-cover"
            src={src}
            alt="background"
            fill
            unoptimized
          />
        </section>
      </motion.div>
    </div>
  );
};

export default ProjectGrid;
