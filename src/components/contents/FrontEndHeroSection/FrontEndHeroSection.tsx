"use client";
import { useState } from "react";
import style from "./FrontEndHeroSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { Globe, Github, Archive, Layout } from "lucide-react";
import Magnet from "../../ReacbitsComponents/Magnet/Magnet";
import { projects } from "@/dataProjects/front-end/projects";

const display = projects.filter((items) => items.id === "PJ001");

const FrontEndHeroSection = () => {
  return (
    <section className="w-full bg-secondary relative z-20 overflow-hidden">
      <section className="max-width-custom mx-auto mt-20 relative z-30">
        {/* container card */}
        <div className="w-full pt-24 pb-5">
          {/* display */}
          <div className="w-full flex justify-center items-center flex-col gap-28 md:flex-row md:gap-16">
            <figure className="relative w-[70%] md:w-[35%] aspect-16/10">
              <Image
                className="absolute object-cover translate-x-[10%] grayscale -translate-y-1/2"
                src="./asset/pageFrontend/imageProjects/display2.png"
                alt="person"
                fill
                unoptimized
              />
              <Image
                className="absolute object-cover z-10 shadow-2xl"
                src="./asset/pageFrontend/imageProjects/display1.png"
                alt="person"
                fill
                unoptimized
              />
              <Image
                className="absolute object-cover grayscale -translate-x-[5%] translate-y-1/2"
                src="./asset/pageFrontend/imageProjects/display3.png"
                alt="person"
                fill
                unoptimized
              />
            </figure>
            <div className="w-[90%] md:w-[35%] h-full flex gap-4 flex-col">
              <h2 className="bg-accen-first w-max px-2 rounded-sm font-bold font-secondary">
                Rekomendasi Smartphone
              </h2>
              <p className="main-font text-balance">
                Situs Web yang dapat memmbantu anda dalam mencari smartphone
                yang sesuai dengan kebutuhan anda, Dengan mengajukan beberapa
                pertanyaan yang anda harus jawab. Website dibangun menggunakan
                HTML, dan Javascript. Mengambil dataset yang terpercaya dari
                David Gadgetin.
              </p>

              {display.map((item) => (
                <div className="flex gap-4 main-font" key={item.id}>
                  <Link target="_blank" className="flex" href={item.linkRep}>
                    <Github /> <span>Repositori</span>
                  </Link>

                  <Link
                    className="text-blue-700 flex"
                    target="_blank"
                    href={item.linkDemo}
                  >
                    <Globe /> <span>Live Demo</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/*  */}
          <div className="w-full h-screen px-4 mt-14 md:mt-40"></div>
        </div>
        {/* container-arsip */}
        <div className="w-full flex justify-center">
          <Link
            className="px-2 py-1 rounded-md bg-primary main-font font-black mt-20 mb-32"
            href="/front-end/archive"
          >
            Lihat dirsip
          </Link>
        </div>
      </section>
    </section>
  );
};

export default FrontEndHeroSection;
