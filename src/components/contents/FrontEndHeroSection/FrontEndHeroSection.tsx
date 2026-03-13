"use client";
import { useState } from "react";
import style from "./FrontEndHeroSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { Globe, Github, Book, Archive, Layout } from "lucide-react";
import Magnet from "../../ReacbitsComponents/Magnet/Magnet";
import { projects } from "@/dataProjects/front-end/projects";
import { section } from "framer-motion/client";

const display = projects.filter((items) => items.id === "PJ001");
const cardProject = projects.filter((items) => items.id !== "PJ001");

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
                  <Link
                    className="flex hover:bg-slate-800 py-2 px-3 rounded-md"
                    href="/front-end/getphone"
                  >
                    <Book /> <span>More</span>
                  </Link>

                  <Link
                    className="text-blue-700 flex hover:bg-slate-800 py-2 px-3 rounded-md"
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
          <div className="w-full  pt-20 md:pt-40 px-4 mt-14 md:mt-40">
            <h2 className="relative main-font max-w font-black  w-max text-[1.5em] md:text-[2em] ">
              Project lainya
              <span className="absolute w-full h-0.5 left-0 bottom-0 bg-blue-700"></span>
              <span className="absolute w-1/2 h-0.5 top-full left-0 mt-2 bottom-0 bg-blue-700"></span>
            </h2>

            <section className="hidden flex-col md:flex-row w-full justify-center items-center gap-10 flex-wrap pt-32">
              {cardProject.map((items) => {
                return (
                  <figure
                    key={items.id}
                    className="w-[90%] aspect-16/10 bg-amber-100 md:w-[40%]"
                  ></figure>
                );
              })}
            </section>
          </div>
        </div>
        {/* container-arsip */}
        <div className="w-full flex flex-wrap pb-40 flex-col md:flex-row items-center gap-5 justify-center">
          {cardProject.map((items) => {
            const displayPic = items.image.at(0);

            return (
              <section
                key={items.id}
                className="w-[90%] flex flex-col aspect-10/16 bg-red-400"
              >
                <figure className="w-full aspect-video bg-yellow-300 relative">
                  <Image
                    className="object-cover"
                    src={`./asset/pageFrontend/imageProjects/${displayPic}`}
                    alt="person"
                    fill
                    unoptimized
                  />
                </figure>
                <span>{items.year}</span>
                <span>{items.title}</span>
                <p>{items.desc}</p>
                <Link href={items.page}>Lihat dirsip</Link>
              </section>
            );
          })}
          <Link
            className="hidden px-2 py-1 rounded-md bg-primary main-font font-black mt-20 mb-32"
            href="/front-end/archive"
          >
            Lihat dirsip
          </Link>
        </div>
      </section>
      {/* background */}
      <section className="w-full h-full absolute inset-0">
        <section className="w-full h-screen relative">
          <span className="blur-[50px] md:scale-110 opacity-20 lg:scale-150  inline-flex h-[50%] aspect-square rounded-full bg-blue-700 absolute bottom-0 translate-y-1/2 translate-x-1/2 right-0"></span>
          <span className="blur-[50px] md:scale-110 opacity-20 lg:scale-150  inline-flex h-[50%] aspect-square rounded-full bg-blue-700 absolute top-0 -translate-y-1/2 -translate-x-1/2 left-0"></span>
        </section>
      </section>
    </section>
  );
};

export default FrontEndHeroSection;
