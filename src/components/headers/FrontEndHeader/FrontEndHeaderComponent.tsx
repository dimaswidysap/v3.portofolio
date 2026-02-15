"use client";

import Image from "next/image";
import Magnet from "@/components/ReacbitsComponents/Magnet/Magnet";
import Terminal from "./Terminal";

const HeaderFrontEndComponent = () => {
  return (
    <header className="w-full h-screen bg-primary inset-0 overflow-hidden">
      <section className="max-w-[1200px] h-screen flex flex-col lg:flex-row items-center m-auto px-6">
        {/* Bagian Teks & Image */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center montserrat">
          <Magnet padding={50} disabled={false} magnetStrength={50}>
            <p className="text-[2.5em] font-black md:text-[4em] main-font leading-tight">
              Proyek Saya<span className="text-blue-700">.</span>
            </p>
          </Magnet>

          <section className="flex items-center gap-3 my-4">
            <span className="h-6 w-0.5 bg-slate-50"></span>
            <blockquote className="italic main-font opacity-80">
              Sukses itu hadiah bagi yang selalu berusaha.
            </blockquote>
          </section>

          <Magnet padding={50} disabled={false} magnetStrength={15}>
            <section className="w-full h-20 md:h-32 flex gap-2 relative mt-4">
              {[
                "stopkontak.webp",
                "router.webp",
                "kabellan.webp",
                "databases.webp",
              ].map((img, i) => (
                <div
                  key={i}
                  className="h-full aspect-square relative rounded-lg overflow-hidden border border-white/10"
                >
                  <Image
                    loading="eager"
                    priority
                    className="object-cover"
                    src={`/asset/pageFrontend/${img}`}
                    alt={img}
                    fill
                    unoptimized
                  />
                </div>
              ))}
            </section>
          </Magnet>
        </div>

        {/* Bagian Terminal */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center p-4">
          <Terminal />
        </div>
      </section>
    </header>
  );
};

export default HeaderFrontEndComponent;
