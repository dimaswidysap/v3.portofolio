"use client";

import Image from "next/image";
// import Magnet from "@/components/ReacbitsComponents/Magnet/Magnet";
import TerminalComponent from "./terminal/Terminal";
import FinderComponent from "./finder/finder";
import { Terminal, Files } from "lucide-react";
import { useState } from "react";

const HeaderFrontEndComponent = () => {
  const icon = [
    { name: "stopkontak.webp", alt: "stop kontak" },
    { name: "router.webp", alt: "router" },
    { name: "kabellan.webp", alt: "kabel lan" },
    { name: "databases.webp", alt: "data bases" },
  ];
  const [show, setShow] = useState(false);
  const [isFinderOpen, setIsFinderOpen] = useState<boolean>(false);
  return (
    <section className="w-full h-screen  relative bg-primary">
      {show && <TerminalComponent />}
      {isFinderOpen && (
        <FinderComponent onClose={() => setIsFinderOpen(false)} />
      )}
      <section className="w-full h-screen fixed inset-0">
        {/* container items bulat */}
        <section className="w-full h-screen flex items-center absolute inset-0">
          <span className="inline-flex h-[40%] lg:h-[50%] aspect-square -translate-x-[50%] rounded-full bg-slate-700 opacity-50 scale-[300%]"></span>
        </section>
        {/* container konten */}
        <section className="absolute z-50 inset-0 max-width-custom m-auto h-screen flex justify-center">
          <div className="w-[20rem] translate-x-[50%] h-screen flex flex-col items-center justify-center">
            {icon.map((icon, index) => {
              return (
                <div
                  key={icon.name}
                  className={`w-full flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <figure className="w-[50%] aspect-square group outline-1 outline-gray-200 rounded-sm relative">
                    <Image
                      loading="eager"
                      priority
                      className="object-cover group-hover:scale-150 group-hover:rotate-10 duration-200 ease-in-out"
                      src={`/asset/pageFrontend/${icon.name}`}
                      alt={icon.alt}
                      fill
                      unoptimized
                    />
                  </figure>
                </div>
              );
            })}
          </div>
          <div className="absolute right-0 hidden md:flex h-screen flex-col items-center justify-center">
            <button
              onClick={() => setShow(!show)}
              className="flex flex-col items-center"
            >
              <figure className="w-14 aspect-square bg-footer rounded-md">
                <Terminal className="main-font m-1" size={30} />
              </figure>
              <span className="main-font montserrat font-light text-slate-700 text-[0.8em]">
                Terminal
              </span>
            </button>
            <button
              onClick={() => setIsFinderOpen(!isFinderOpen)}
              className="flex flex-col items-center"
            >
              <figure className="w-14 aspect-square bg-footer rounded-md">
                <Files className="main-font m-1" size={30} />
              </figure>
              <span className="main-font montserrat text-[0.8em]">File</span>
            </button>
          </div>
        </section>
      </section>
    </section>
  );
};

export default HeaderFrontEndComponent;
