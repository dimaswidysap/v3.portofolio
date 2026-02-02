"use client";
import Magnet from "@/components/Magnet/Magnet";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const EducatioPage = () => {
  return (
    <main id="education" className="w-full relative bg-primary">
      <section className="max-width-custom m-auto flex flex-col items-center pb-60 ">
        <header className="py-4 flex justify-between w-full px-3">
          <Magnet padding={50} disabled={false} magnetStrength={5}>
            <Link href="/about">
              <span className="inline-flex gap-2 montserrat font-black main-font md:text-[2em] cursor-pointer">
                <ArrowLeft className="md:text-[2em]" />
                Back<span className="text-blue-700">.</span>
              </span>
            </Link>
          </Magnet>
          <Magnet padding={50} disabled={false} magnetStrength={5}>
            <h1 className="main-font montserrat text-[1.3em] font-black md:text-[3em]">
              Education
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
                    SMKN 1 GEGER
                  </h1>
                </header>
                <div className="mt-10 flex items-center gap-4">
                  <span className="h-2 shadow-2xl aspect-square bg-accen-first inline-flex rounded-full"></span>
                  <span className="montserrat font-bold main-font  text-[1.3em]">
                    TEKNIK KOMPUTER dan JARINGAN
                  </span>
                </div>
                <div className="mt-10 flex items-center gap-4">
                  <span className="h-2 shadow-2xl aspect-square bg-accen-first inline-flex rounded-full"></span>
                  <span className="montserrat font-bold main-font  text-[1.3em]">
                    Mikrotik
                  </span>
                </div>
                <ul className="pl-10  montserrat font-light main-font list-disc">
                  <li>
                    Konfigurasi MikroTik & Wireless: Mengonfigurasi perangkat
                    MikroTik dan jaringan nirkabel untuk optimalisasi layanan
                    pengguna.
                  </li>
                  <li>
                    Perluasan Jaringan: Mengimplementasikan Access Point untuk
                    memperluas area cakupan sinyal (coverage) secara efektif.
                  </li>
                  <li>
                    Manajemen Hotspot: Membangun sistem Hotspot Gateway berbasis
                    voucher untuk manajemen akses internet pelanggan.
                  </li>
                  <li>
                    Manajemen Bandwidth: Melakukan manajemen bandwidth (QoS)
                    untuk memastikan distribusi kecepatan internet yang adil dan
                    stabil.{" "}
                  </li>
                </ul>
                <div className="mt-10 flex items-center gap-4">
                  <span className="h-2 shadow-2xl aspect-square bg-accen-first inline-flex rounded-full"></span>
                  <span className="montserrat font-bold main-font  text-[1.3em]">
                    PKL di MENAKSOPAL LINK NUSANTARA MADIUN
                  </span>
                </div>
                <ul className="pl-10  montserrat font-light main-font list-disc">
                  <li>
                    Praktik Lapangan Fiber Optik: Mempelajari implementasi dan
                    pemeliharaan kabel fiber optik langsung di lokasi proyek.
                  </li>
                  <li>
                    Instalasi Jaringan Pelanggan: Melakukan instalasi dan
                    aktivasi layanan internet di rumah pelanggan sesuai standar
                    operasional.
                  </li>
                  <li>
                    Penggunaan Alat Teknisi: Terampil mengoperasikan perangkat
                    teknis untuk keperluan instalasi jaringan internet.
                  </li>
                  <li>
                    Penyambungan Fiber Optik: Melakukan penyambungan kabel fiber
                    optik menggunakan alat Fusion Splicer untuk memastikan
                    koneksi yang optimal.
                  </li>
                </ul>
              </div>
              {/* container foto */}
              <section className="hidden w-full md:h-56 lg:h-100  md:flex justify-center mt-20 gap-20">
                {/* Container 1: Awalnya miring kiri (-rotate-12) */}
                <div className="h-full aspect-10/16 bg-slate-700 shadow-2xl rounded-2xl -rotate-12 relative overflow-hidden transition-all duration-500 ease-in-out hover:rotate-0 hover:scale-110 hover:z-10">
                  <Image
                    className="object-cover"
                    src="/asset/education/1.png"
                    alt="person"
                    fill
                    unoptimized
                  />
                </div>

                {/* Container 2: Awalnya miring kanan (rotate-12) */}
                <div className="h-full aspect-10/16 bg-slate-700 shadow-2xl rounded-2xl rotate-12 relative overflow-hidden transition-all duration-500 ease-in-out hover:rotate-0 hover:scale-110 hover:z-10">
                  <Image
                    className="object-cover"
                    src="/asset/education/2.png"
                    alt="person"
                    fill
                    unoptimized
                  />
                </div>
              </section>
            </figure>

            {/* Spacer agar efek scroll terasa (Hanya untuk testing) */}
          </section>
        </section>
      </section>
    </main>
  );
};

export default EducatioPage;
