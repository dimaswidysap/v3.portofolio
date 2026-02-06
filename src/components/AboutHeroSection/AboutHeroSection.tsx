"use client";

import CircularGallery from "@/components/ReacbitsComponents/CircularGallery/CircularGallery";
import Link from "next/link";
import Image from "next/image";
import wiggle from "../HomeHeroSection/HomeHeroSection.module.css";
import style from "./AboutHeroSection.module.css";
import Magnet from "../ReacbitsComponents/Magnet/Magnet";
import { GraduationCap, Award, Briefcase } from "lucide-react";

const myImages = [
  { image: "/asset/pageAbout/images/1.jpeg", text: "Make Illustration Zombie" },
  { image: "/asset/pageAbout/images/2.jpg", text: "Instalation Network" },
  { image: "/asset/pageAbout/images/beach.jpeg", text: "Holiday" },
  { image: "/asset/pageAbout/images/cat.jpeg", text: "My cat" },
];

const toolsFrontEnd = [
  {
    linkIcon: "https://cdn.simpleicons.org/html5",
    teks: "HTML",
  },
  {
    linkIcon: "https://cdn.simpleicons.org/css",
    teks: "CSS",
  },
  {
    linkIcon: "https://cdn.simpleicons.org/javascript",
    teks: "Javascript",
  },
  {
    linkIcon: "https://cdn.simpleicons.org/tailwindcss",
    teks: "Tailwind CSS",
  },
  {
    linkIcon: "https://cdn.simpleicons.org/nextdotjs",
    teks: "NEXT.JS",
  },
];

const AboutHeroSection = () => {
  return (
    <section className="w-full bg-primary">
      <section className="max-width-custom  m-auto pt-40">
        <header className="w-full flex justify-center px-4">
          <h1 className="font-black montserrat text-[2em] md:text-[3em] main-font">
            Let Me Introduce Myself👋<span className="text-blue-500">.</span>
          </h1>
        </header>
        {/* container gallery */}
        <section
          className={`${style.haooe} w-full h-150 bg-sky-50 bg-secondary lg:rounded-2xl`}
        >
          <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              items={myImages}
              bend={1}
              textColor="#cacaca"
              borderRadius={0.05}
              scrollEase={0.02}
              scrollSpeed={1}
            />
          </div>
        </section>
        {/* container story */}
        <section
          id="story"
          className="w-full pt-40 p-5 md:px-[20%] flex flex-col gap-5 main-font font-extrabold montserrat"
        >
          <span className="h-0.5 w-full bg-accen-first"></span>
          <div className="font-medium">
            <h1 className="text-[1.5em]">Hello There 👋</h1>
            <p>
              Nama saya Dimas Widy Saputra, Usia saya 21 tahun. Saya Adalah
              mahasiswa <span> </span>
              <Link target="_blanks" href="https://www.unipma.ac.id/">
                Universitas PGRI MADIUN
              </Link>{" "}
              <span> </span>
              Jurusan Teknik Informatika angkatan 2023, saya berasan dari madiun
              juga.
            </p>
          </div>
          <span className="h-0.5 w-[20%] bg-accen-first"></span>
          <div className="font-medium">
            <p>
              Saya mempunyai hobi menggambar dan saya memutuskan untuk memasukan
              ke website portofolio saya, Namun tujuan sebenarnya saya adalah
              berkerja dibidang teknologi, seperti membuat website
            </p>
          </div>
          <span className="h-0.5 w-[20%] bg-accen-first"></span>
          <div className="font-medium">
            <p>
              Saya sangat menerima kesempatan berkerja sebagai Front-End
              devoloper dan bahkan saya bersedia berkeja sebagai illustrator
              atau desain grafis, saya memang memiliki ketertarikan pada bidang
              bidang tersebut.
            </p>
          </div>
          <span className="h-0.5 w-[20%] bg-accen-first"></span>
          <div className="flex gap-10 flex-wrap">
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <Link
                className="flex items-center gap-1 text-[0.9em] md:text-[1.2em]"
                href="/education"
              >
                <GraduationCap className="text-blue-700" />
                Education
                <span className="text-blue-700">.</span>
              </Link>
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <Link
                className="flex items-center gap-1 text-[0.9em] md:text-[1.2em]"
                href="/experiences"
                // href="/education"
              >
                <Briefcase className="text-blue-700" />
                Experinces
                <span className="text-blue-700">.</span>
              </Link>
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <Link
                className="flex items-center gap-1 text-[0.9em] md:text-[1.2em]"
                href="/certificate"
              >
                <Award className="text-blue-700" />
                Certificate
                <span className="text-blue-700">.</span>
              </Link>
            </Magnet>
          </div>
          <span className="h-0.5 w-full bg-accen-first"></span>
        </section>
        {/* container story end*/}
        {/* container tools */}
        <section className="pt-40 w-full flex flex-wrap">
          <header className="flex w-full justify-center shrink-0">
            <h1 className="flex justify-center w-full  font-black montserrat text-[2em] md:text-[3em] main-font ">
              The Tools I Use <span className="text-blue-700">.</span>
            </h1>
          </header>
          {/*  */}
          <div className="w-full h-160  flex flex-col items-center  md:w-[50%]">
            <header className="relative flex justify-center">
              <div className="h-80 aspect-square  relative">
                <Image
                  className={`${wiggle.objectRandom} aspect-square drop-shadow-2xl`}
                  src="/asset/pageAbout/monitor.webp"
                  alt="my foto guweh"
                  fill
                  unoptimized
                />
              </div>
              <h1 className="absolute bottom-0 text-[3em] font-black montserrat mb-[10%] -rotate-12 main-font">
                Illustrator <span className="font-accen-first">.</span>
              </h1>
            </header>
            <div className="w-[90%]  flex flex-col gap-6 ">
              <div className="flex bg-main-font w-max items-center rounded-md pr-4 shadow-2xl">
                <div className="h-16 aspect-square relative ">
                  <Image
                    className="aspect-square drop-shadow-2xl p-2 "
                    src="https://api.iconify.design/logos:adobe-illustrator.svg"
                    alt="my foto guweh"
                    fill
                    unoptimized
                  />
                </div>
                <span className="font-bold text-md montserrat font-secondary">
                  Adobe Illustrator
                </span>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="w-full pb-20 flex flex-col items-center md:w-[50%]">
            <header className="relative flex justify-center">
              <div className="h-80 aspect-square  relative">
                <Image
                  className={`${wiggle.objectRandom} aspect-square drop-shadow-2xl`}
                  src="/asset/pageAbout/laptop.webp"
                  alt="my foto guweh"
                  fill
                  unoptimized
                />
              </div>
              <h1 className="absolute bottom-0 text-[3em] font-black montserrat mb-[10%] rotate-12 main-font bg-secondary rounded-2xl px-3">
                Front-End <span className="font-accen-first">.</span>
              </h1>
            </header>
            <div className="w-[90%] flex flex-wrap gap-6 ">
              {toolsFrontEnd.map((items) => {
                return (
                  <div
                    // Gunakan items.teks atau index sebagai key
                    key={items.teks}
                    className="flex bg-secondary w-max items-center rounded-md pr-4 shadow-2xl"
                  >
                    <div className="h-16 aspect-square relative ">
                      <Image
                        className="aspect-square drop-shadow-2xl p-2 "
                        src={items.linkIcon}
                        alt={items.teks}
                        fill
                        unoptimized
                      />
                    </div>
                    <span className="font-bold text-md montserrat main-font">
                      {items.teks}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          {/*  */}
        </section>
        {/* container tools end*/}
      </section>
    </section>
  );
};

export default AboutHeroSection;
