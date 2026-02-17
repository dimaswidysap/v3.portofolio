"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Style from "./project3.module.css";
import { useEffect } from "react";

const DisplayProject3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // durasi animasi dalam milidetik
      once: false, // animasi hanya berjalan sekali saat di-scroll
    });
  }, []);
  return (
    <section className="relative w-full md:aspect-3/4 lg:aspect-video">
      {/* background bendera */}
      <section className="w-full h-full relative">
        <Image
          loading="lazy"
          className="object-cover "
          src="/asset/pageIllustrator/displayProjects/project3/bendera-aspect-vedeo.png"
          alt="background"
          fill
          unoptimized
        />
      </section>

      <section className="overflow-hidden absolute flex justify-between h-full items-center w-full inset-0 bg-secondary opacity-95">
        <figure
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1000"
          className="h-[90%] aspect-square relative grayscale opacity-10 translate-y-[25%]"
        >
          <Image
            loading="lazy"
            className="object-cover scale-50"
            src="/asset/pageIllustrator/displayProjects/project3/perisai.webp"
            alt="background"
            fill
            unoptimized
          />
        </figure>
        <figure
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1500"
          className="h-[90%] aspect-square relative grayscale opacity-10 "
        >
          <Image
            loading="lazy"
            className="object-cover "
            src="/asset/pageIllustrator/displayProjects/project3/garudapolos.webp"
            alt="background"
            fill
            unoptimized
          />
        </figure>
      </section>
      {/* konten */}
      <section className="absolute inset-0 h-full w-full">
        <section className="h-full w-full flex justify-center items-center">
          <figure
            data-aos="zoom-in"
            data-aos-offset="200"
            className={`${Style.garudaShadow} md:h-[50%] lg:h-[90%] aspect-square relative`}
          >
            <Image
              loading="lazy"
              className={`object-cover`}
              src="/asset/pageIllustrator/displayProjects/project3/garuda.png"
              alt="background"
              fill
              unoptimized
            />
          </figure>
        </section>
        <section className="w-full h-full absolute inset-0 md:py-[15%] lg:py-[5%] flex justify-between flex-col z-20">
          <div className="w-full px-4 relative z-100 ">
            <span className="md:text-[2em] xl:text-[3em] montserrat main-font font-black ">
              INDONESIA
            </span>
            <div className="h-36 aspect-16/7 relative">
              <Image
                loading="lazy"
                className={`object-cover`}
                src="/asset/pageIllustrator/displayProjects/project3/map.webp"
                alt="background"
                fill
                unoptimized
              />
            </div>
          </div>
          <div className="w-full px-4 relative z-100 flex justify-end">
            <span className="md:text-[2em] xl:text-[3em] montserrat text-red-800 font-black ">
              NKRI
            </span>
          </div>
        </section>
      </section>
    </section>
  );
};
export default DisplayProject3;
