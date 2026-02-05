"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import style from "./ProjectIllustratorGrid.module.css";
import font from "@/app/my-css.module.css";
import IconTech from "../iconTech/iconTech";

const PROJECTS = [
  {
    title: "Garuda Illustration",
    src: "/asset/pageIllustrator/projects/1.jpg",
    tools: "https://api.iconify.design/logos:adobe-illustrator.svg",
    desc: "Illustrasi ini saya buat dalam rangka memperingati hari kemerdekaan Indonesia yang ke 80",
  },
  {
    title: "Tiger Illustration",
    src: "/asset/pageIllustrator/projects/2.jpg",
    tools: "https://api.iconify.design/logos:adobe-illustrator.svg",
    desc: "illustrasi ini saya buat untuk desain sebua baju",
  },
  {
    title: "Zombie Illustration",
    src: "/asset/pageIllustrator/projects/3.jpg",
    tools: "https://api.iconify.design/logos:adobe-illustrator.svg",
    desc: "illustrasi ini saya buat untuk desain sebua baju",
  },
  {
    title: "Ibu Keraton",
    src: "/asset/pageIllustrator/projects/ibukeraton.webp",
    tools: "https://api.iconify.design/logos:adobe-illustrator.svg",
    desc: "Illustrasi ini saya buat untuk desan sebuah banner warung nasi pecel, Illustrasi ini permintaan client yang meminta sebuat illustrasi ibu ibu keraton dengan menu nasi pecel, kopi panas dan esteh didepannya",
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
      className="h-screen flex items-center justify-center sticky top-0"
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
            className="drop-shadow-2xl  object-cover"
            src={src}
            alt="background"
            fill
            unoptimized
          />
        </section>
        <section className="h-full w-[50%] hidden md:flex p-4 flex-col">
          <header>
            <h1
              className={`${font.montserrat} text-[2em] font-extrabold text-slate-200`}
            >
              {title}
            </h1>
          </header>
          {/* container tecth */}
          <section>
            <h1 className="mb-1 font-extrabold text-[1em] montserrat main-font">
              This Illustration made by <span className="text-blue-500">:</span>
            </h1>
            <section className="flex gap-4">
              {IconTech(tools, "bg-main-font")}
            </section>
            <p className="main-font mt-4 montserrat font-light">{desc}</p>
          </section>
        </section>
      </motion.div>
    </div>
  );
};

export default ProjectGrid;
