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
          <div className="w-full flex">
            <figure className="relative h-80 aspect-16/10 bg-amber-200">
              <Image
                className="absolute object-cover translate-x-[10%] -translate-y-1/2"
                src="./asset/pageFrontend/imageProjects/display2.png"
                alt="person"
                fill
                unoptimized
              />
              <Image
                className="absolute object-cover z-10"
                src="./asset/pageFrontend/imageProjects/display1.png"
                alt="person"
                fill
                unoptimized
              />
              <Image
                className="absolute object-cover -translate-x-[5%] translate-y-1/2"
                src="./asset/pageFrontend/imageProjects/display3.png"
                alt="person"
                fill
                unoptimized
              />
            </figure>
          </div>
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
