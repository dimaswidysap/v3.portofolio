"use client";
import { useState } from "react";
import style from "./FrontEndHeroSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { Globe, Github, Book, Archive, Layout } from "lucide-react";
import Magnet from "../../ReacbitsComponents/Magnet/Magnet";
import { projects } from "@/dataProjects/front-end/projects";

import { SquareArrowOutUpRight } from "lucide-react";

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
          {/* conatiner-arsip */}
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
        {/* container-card */}
        <div className="w-full flex flex-wrap pb-40 flex-col md:flex-row items-center gap-20 justify-center">
          {cardProject.map((items) => {
            const displayPic = items.image.at(0);
            return (
              <section
                key={items.id}
                className="shadow-2xl w-[90%] max-w-[20rem] rounded-2xl overflow-hidden"
              >
                {/* Header berwarna dengan gambar */}
                <figure className="w-full aspect-video relative ">
                  <Image
                    className="object-cover"
                    src={`./asset/pageFrontend/imageProjects/${displayPic}`}
                    alt={items.title}
                    fill
                    unoptimized
                  />
                  {/* Badge kategori/tipe di atas gambar */}
                  <div className="absolute bottom-3 left-3">
                    <span className="py-1 px-3 bg-main-font text-blue-700 rounded-full text-xs font-bold shadow">
                      {items.reasonProject}
                    </span>
                  </div>
                </figure>

                {/* Konten putih di bawah */}
                <div className="flex flex-col p-4 gap-3 bg-main-font">
                  {/* Author & Tahun */}
                  <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-blue-700 uppercase">
                    <span>{items.team}</span>
                    <span className="font-accen-first">•</span>
                    <span>{items.year}</span>
                  </div>

                  {/* Judul */}
                  <h2 className="font-bold font-primary text-base leading-snug">
                    {items.title}
                  </h2>

                  {/* Deskripsi */}
                  <p className="font-primary opacity-80 text-sm leading-relaxed line-clamp-3">
                    {items.desc}
                  </p>

                  {/* Statistik — sesuaikan field dengan data kamu */}
                  <div className=" gap-5 pt-1 hidden">
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900 text-base">
                        17+
                      </span>
                      <span className="text-gray-400 text-xs">Weeks</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900 text-base">
                        5
                      </span>
                      <span className="text-gray-400 text-xs">
                        Design Processes
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900 text-base">
                        65+
                      </span>
                      <span className="text-gray-400 text-xs">Screens</span>
                    </div>
                  </div>

                  {/* Tombol */}
                  <Link
                    href={items.page}
                    className="w-full py-3 mt-1 items-center gap-2 font-bold text-sm text-white rounded-xl bg-blue-500 hover:bg-blue-600 transition-colors shadow flex justify-center"
                  >
                    <span>Lihat Proyek</span>
                    <SquareArrowOutUpRight size={16} />
                  </Link>
                </div>
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
