"use client";

import style from "./FrontEndHeroSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { Globe, Github } from "lucide-react";
import Magnet from "../../ReacbitsComponents/Magnet/Magnet";

const FrontEndHeroSection = () => {
  const cardProjects = [
    {
      title: "Webiste Rekomendasi Smartphone",
      image: "rekomendasihp.png",
      desc: "Sebuah website yang menyediakan layanan rekomendasi hp berdasarkan kriteria yang dimasuka pengguna.",
      linkRep: "https://github.com/dimaswidysap/rekomendasihp",
      linkDemo: "https://dimaswidysap.github.io/rekomendasihp/",
    },
  ];

  return (
    <section className="w-full py-48 bg-secondary  relative z-20 overflow-hidden">
      <div className="max-width-custom mx-auto relative z-30">
        {/* card */}
        <div className="w-full  max-width-custom flex flex-col  items-center justify-center gap-32 py-24 ">
          {cardProjects.map((items, index) => {
            return (
              <div
                key={items.title}
                className={`${style.glass} bg-slate-800 xl:bg-transparent w-[90%] flex flex-col md:flex-row h-120 max-w-280 shrink-0 rounded-2xl relative xl:backdrop-blur-[10px] xl:bg-linear-to-br xl:from-black/45 xl:to-black/35`}
              >
                {/* nomor */}
                <section
                  className={`absolute z-20 h-10 aspect-square bg-slate-200 rounded-full m-[1%] flex justify-center items-center bg-primary shadow-2xl `}
                >
                  <p className="text-slate-800 font-bold main-font montserrat">
                    {index + 1}
                  </p>
                </section>
                {/* konten kiri */}
                <section className="w-full md:w-[60%] md:h-full  flex items-center px-[2%] py-[2%] h-max">
                  <figure className="w-full aspect-16/10 bg-slate-50 rounded-xl relative overflow-hidden">
                    <Image
                      className="object-cover drop-shadow-2xl"
                      src={`/asset/pageFrontend/imageProjects/${items.image}`}
                      alt="person"
                      fill
                      unoptimized
                    />
                  </figure>
                </section>
                {/* konten kanan */}
                <section className="w-full flex gap-4 relative  flex-col flex-1 p-[2%]">
                  <header className="w-full">
                    <h1 className="montserrat text-[1.5em] md:text-[2em] font-black main-font">
                      {" "}
                      {items.title} <span className="text-blue-700">.</span>
                    </h1>
                  </header>
                  <p className="montserrat font-light main-font">
                    {items.desc}
                  </p>
                  <section className="absolute flex gap-3 bottom-0 mb-[5%]">
                    <Magnet padding={50} disabled={false} magnetStrength={15}>
                      <Link
                        target="_blanks"
                        href={items.linkRep}
                        className="flex items-center gap-1"
                      >
                        <span className="h-7 aspect-square inline-flex  relative">
                          <Github className="main-font" />
                        </span>
                        <span className="montserrat main-font font-light">
                          Source Code
                        </span>
                      </Link>
                    </Magnet>
                    <Magnet padding={50} disabled={false} magnetStrength={15}>
                      <Link
                        target="_blanks"
                        href={items.linkDemo}
                        className="flex items-center gap-1"
                      >
                        <span className="h-7 aspect-square inline-flex relative">
                          <Globe className="text-blue-700" />
                        </span>
                        <span className="montserrat font-light text-blue-700">
                          live Demo
                        </span>
                      </Link>
                    </Magnet>
                  </section>
                </section>
              </div>
            );
          })}
        </div>
        {/* card end */}
      </div>
    </section>
  );
};

export default FrontEndHeroSection;
