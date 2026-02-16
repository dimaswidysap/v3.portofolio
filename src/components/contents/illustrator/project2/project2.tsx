"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Style from "./project2.module.css";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const DisplayProject2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // durasi animasi dalam milidetik
      once: false, // animasi hanya berjalan sekali saat di-scroll
    });
  }, []);
  const containerRef = useRef(null);

  const spans = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springValues = spans.map((_, index) => {
    const startTrigger = index * 0.05;
    const endTrigger = Math.min(0.5 + startTrigger, 1);

    const transform = useTransform(
      scrollYProgress,
      [startTrigger, endTrigger],
      ["0", "-30rem"],
    );

    return useSpring(transform, {
      stiffness: 60,
      damping: 20,
      restDelta: 0.001,
    });
  });

  return (
    <section
      ref={containerRef}
      className="w-full hidden md:flex bg-secondary relative z-50"
    >
      {/* background */}
      <section className="w-full h-full absolute inset-0 flex">
        <section className="relative inset-0 w-full h-full flex">
          {spans.map((span, index) => (
            <motion.span
              key={span.id}
              style={{ y: springValues[index] }}
              className={`${Style.outlineTop} h-full flex-1 bg-secondary`}
            />
          ))}
        </section>
        <section className="w-full h-full absolute flex">
          {spans.map((span, index) => {
            return (
              <span
                key={span.id}
                className={`${Style.borderLeft} inline-flex h-full flex-1 bg-secondary `}
                style={{ transform: `translateY(${index * 2}%)` }}
              ></span>
            );
          })}
        </section>
      </section>

      {/* container mockup */}
      <section className="w-full h-full  absolute inset-0"></section>

      {/* Main content section with image */}
      <section className="relative z-50 w-full lg:aspect-video md:aspect-3/4">
        <section className="h-full w-full flex items-center relative">
          <figure className="relative z-20 lg:w-[50%] md:w-[70%] aspect-square overflow-hidden">
            <Image
              loading="lazy"
              className="object-cover"
              src="/asset/pageIllustrator/displayProjects/project2/zombie.webp"
              alt="background"
              fill
              unoptimized
            />
          </figure>
          <figure
            data-aos="fade-right"
            className="absolute inset-0 lg:w-[50%] md:w-[70%] aspect-square  scale-125 translate-y-[5%] -translate-x-[10%]"
          >
            <Image
              loading="lazy"
              className="object-cover opacity-15"
              src="/asset/pageIllustrator/displayProjects/project2/zombie.webp"
              alt="background"
              fill
              unoptimized
            />
          </figure>
        </section>
      </section>
    </section>
  );
};

export default DisplayProject2;
