"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
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

      <section className="absolute h-full w-full inset-0 bg-secondary opacity-95"></section>
      {/* konten */}
      <section className="absolute inset-0 h-full w-full">
        <section className="h-full w-full flex justify-center items-center">
          <figure
            data-aos="zoom-in"
            data-aos-offset="200"
            className="md:h-[50%] lg:h-[90%] aspect-square relative  "
          >
            <Image
              loading="lazy"
              className="object-cover "
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
