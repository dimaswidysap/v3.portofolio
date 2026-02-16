"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Style from "./project1.module.css";

const DisplayProject1 = () => {
  // 2. Gunakan useEffect untuk inisialisasi
  useEffect(() => {
    AOS.init({
      duration: 500, // durasi animasi dalam milidetik
      once: false, // animasi hanya berjalan sekali saat di-scroll
    });
  }, []);
  return (
    <section className="hidden md:block w-full relative">
      {/* container teks */}
      <section className="absolute inset-0  h-full w-full z-50 flex flex-col justify-between py-[10%] px-[5%]">
        <div className={`${Style.fontTitleCard} w-full  flex justify-end`}>
          <p
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="1000"
            className="flex flex-col md:text-[70%] lg:text-[90%] xl:text-[100%] text-shadow-2xs"
          >
            <span className="text-red-800">GODZILLAゴジラ</span>
            <span className="text-[0.3em] ">FROM MONSTERVERSE</span>
          </p>
        </div>
        <div className={`${Style.fontTitleCard} w-full  flex `}>
          <p
            data-aos="fade-left"
            data-aos-delay="800"
            data-aos-duration="1000"
            className="flex flex-col md:text-[70%] lg:text-[90%] xl:text-[100%] text-shadow-2xs"
          >
            <span className="text-green-600">DOCTOR DOOM</span>
            <span className="text-[0.3em]">FROM MARVEL COMIC</span>
          </p>
        </div>
      </section>
      {/* container gambar*/}
      <section className="w-full  z-30 lg:aspect-video md:aspect-3/4 relative overflow-hidden">
        <figure
          data-aos="fade-up"
          data-aos-offset="400"
          className="absolute inset-0"
        >
          <Image
            loading="lazy"
            className="object-cover"
            src="/asset/pageIllustrator/displayProjects/project1/tanah.webp"
            alt="background"
            fill
            unoptimized
          />
        </figure>
        <figure
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-offset="500"
          className="absolute inset-0"
        >
          <Image
            loading="lazy"
            className="object-cover drop-shadow-2xl"
            src="/asset/pageIllustrator/displayProjects/project1/godzilla.webp"
            alt="godzilla"
            fill
            unoptimized
          />
        </figure>
        <figure
          data-aos="fade-up"
          data-aos-delay="1000"
          className="absolute inset-0"
        >
          <Image
            loading="lazy"
            className="object-cover"
            src="/asset/pageIllustrator/displayProjects/project1/doctordoom.webp"
            alt="doctordoom"
            fill
            unoptimized
          />
        </figure>
      </section>
      {/* background */}
      <section className="overflow-hidden w-full h-full absolute inset-0 flex flex-col justify-center items-center">
        <span
          className={`${Style.font} opacity-100 inline-flex shrink-0 font-secondary  text-[10em] font-black montserrat -rotate-12 scale-125`}
        >
          COME TO RULE
        </span>
        <span
          className={`${Style.font} opacity-100 shrink-0 font-secondary  text-[10em]  -rotate-192 font-black montserrat  scale-125`}
        >
          COME TO RULE
        </span>
      </section>
    </section>
  );
};

export default DisplayProject1;
