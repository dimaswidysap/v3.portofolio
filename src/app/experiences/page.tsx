"use client";
import Magnet from "@/components/ReacbitsComponents/Magnet/Magnet";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const EducatioPage = () => {
  return (
    <main id="education" className="w-full relative bg-primary">
      <section className="max-width-custom m-auto flex flex-col items-center pb-60 ">
        <header className="py-4 flex justify-between w-full px-3">
          <Magnet padding={50} disabled={false} magnetStrength={5}>
            <Link href="/about#story">
              <span className="inline-flex gap-2 montserrat font-black main-font md:text-[2em] cursor-pointer">
                <ArrowLeft className="md:text-[2em]" />
                Back<span className="text-blue-700">.</span>
              </span>
            </Link>
          </Magnet>
          <Magnet padding={50} disabled={false} magnetStrength={5}>
            <h1 className="main-font montserrat text-[1.3em] font-black md:text-[3em]">
              Experiences
            </h1>
          </Magnet>
        </header>

        {/* konten */}
        <section className="flex  flex-col gap-8 w-[80%] md:w-[75%] lg:w-[70%] items-center mt-40 relative">
          {/* line kiri */}
          <span className="w-0.5 h-full absolute left-0 bg-blue-700 rounded-2xl"></span>

          {/* container card */}
          <section className="w-full h-full py-10 pl-px">
            {/* card 1 - Ditambahkan top-10 dan z-index agar menumpuk rapi */}
            <figure className="w-full relative">
              {/* indikator */}
              <span className="h-4 aspect-square bg-accen-first inline-flex absolute right-full bottom-full translate-x-[50%] translate-y-[50%]  rounded-full items-center">
                <p className="absolute right-full mr-4 montserrat font-bold main-font hidden md:flex text-xl">
                  2023
                </p>
              </span>
              <div className="mx-4  w-full h-full  flex flex-col relative">
                <header className="absolute bottom-full translate-y-[50%]">
                  <h1 className="text-2xl md:text-3xl montserrat font-black main-font">
                    PT MENAKSOPAL LINK NUSANTARA MADIUN
                    <span className="text-blue-700">.</span>
                  </h1>
                </header>
                <div className="mt-10 flex items-center gap-4">
                  <span className="h-2 shadow-2xl aspect-square bg-accen-first inline-flex rounded-full"></span>
                  <span className="montserrat font-bold main-font  text-[1.3em]">
                    Teknisi Instalasi Wi-fi
                    <span className="text-blue-700">.</span>
                  </span>
                </div>
                <div className="mt-10 flex items-center gap-4">
                  <span className="h-2 shadow-2xl aspect-square bg-accen-first inline-flex rounded-full"></span>
                  <span className="montserrat font-bold main-font  text-[1.3em]">
                    Part Time<span className="text-blue-700">.</span>
                  </span>
                </div>
                <span className="pl-10 montserrat font-light main-font list-disc">
                  <p>
                    Setelah menyelesaikan kegiatan Praktik Kerja Lapangan (PKL)
                    dari SMKN 1 Geger, saya mendapatkan kepercayaan untuk
                    bekerja paruh waktu (part-time) setiap hari Sabtu dan
                    Minggu.
                  </p>
                </span>
                <div className="mt-10 flex items-center gap-4">
                  <span className="h-2 shadow-2xl aspect-square bg-accen-first inline-flex rounded-full"></span>
                  <span className="montserrat font-bold main-font  text-[1.3em]">
                    Full time
                    <span className="text-blue-700">.</span>
                  </span>
                </div>
                <span className="pl-10  montserrat font-light main-font list-disc">
                  <p>
                    Setelah lulus dari SMKN 1 Geger, saya bekerja secara purna
                    waktu (full-time) selama 5 bulan, sebelum akhirnya
                    memutuskan untuk melanjutkan pendidikan ke jenjang
                    perkuliahan.
                  </p>
                </span>
              </div>
              {/* container foto */}
            </figure>

            {/* Spacer agar efek scroll terasa (Hanya untuk testing) */}
          </section>
        </section>
      </section>
    </main>
  );
};

export default EducatioPage;
