"use client";

import style from "./FrontEndHeroSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { Globe, Github, Archive, Layout } from "lucide-react";
import Magnet from "../../ReacbitsComponents/Magnet/Magnet";

const FrontEndHeroSection = () => {
  const cardProjects = [
    {
      year: "2025",
      title: "Webiste Rekomendasi Smartphone",
      tecnology: "HTML, CSS, Javascript",
      image: "rekomendasihp.png",
      desc: "Sebuah website yang menyediakan layanan rekomendasi hp berdasarkan kriteria yang dimasuka pengguna.",
      linkRep: "https://github.com/dimaswidysap/rekomendasihp",
      linkDemo: "https://dimaswidysap.github.io/rekomendasihp/",
    },
    {
      year: "2025",
      title: "Webiste Rekomendasi Smartphone 1",
      tecnology: "HTML, CSS, Javascript",
      image: "rekomendasihp.png",
      desc: "Sebuah website yang menyediakan layanan rekomendasi hp berdasarkan kriteria yang dimasuka pengguna.",
      linkRep: "https://github.com/dimaswidysap/rekomendasihp",
      linkDemo: "https://dimaswidysap.github.io/rekomendasihp/",
    },
    {
      year: "2025",
      title: "Webiste Rekomendasi Smartphone 2",
      tecnology: "HTML, CSS, Javascript",
      image: "rekomendasihp.png",
      desc: "Sebuah website yang menyediakan layanan rekomendasi hp berdasarkan kriteria yang dimasuka pengguna.",
      linkRep: "https://github.com/dimaswidysap/rekomendasihp",
      linkDemo: "https://dimaswidysap.github.io/rekomendasihp/",
    },
    {
      year: "2025",
      title: "Webiste Rekomendasi Smartphone 3",
      tecnology: "HTML, CSS, Javascript",
      image: "rekomendasihp.png",
      desc: "Sebuah website yang menyediakan layanan rekomendasi hp berdasarkan kriteria yang dimasuka pengguna.",
      linkRep: "https://github.com/dimaswidysap/rekomendasihp",
      linkDemo: "https://dimaswidysap.github.io/rekomendasihp/",
    },
  ];
  return (
    <section className="w-full bg-secondary relative z-20 overflow-hidden">
      <section className="max-width-custom mx-auto mt-20 relative z-30">
        <div className="w-full h-10 flex items-center justify-end px-4 mb-20">
          <button className="cursor-pointer">
            <span className="inline-flex gap-0.5 font-bold main-font bg-primary px-2.5 py-1 rounded-md">
              <Archive /> <p>Buka diarsip</p>
            </span>
          </button>
          <button className="cursor-pointer">
            <span className="inline-flex gap-0.5 font-bold main-font bg-primary px-2.5 py-1 rounded-md">
              <Layout /> <p>Buka dikartu</p>
            </span>
          </button>
        </div>
        {/* container card */}
        <div className="w-full h-[5rem] bg-amber-50"></div>
        {/* container-arsip */}
        <div className="w-full py-40 px-5 hidden md:flex">
          <table className={`${style.myTable} w-full`}>
            <thead className="text-left">
              <tr className="font-accen-first">
                <th className="pl-1.5">Tahun</th>
                <th>Judul</th>
                <th className="w-[40%]">Teknologi</th>
                <th className="max-w-40">Link</th>
              </tr>
            </thead>
            <tbody>
              {cardProjects.map((items) => {
                return (
                  <tr key={items.title}>
                    <th className="text-left pl-1.5 main-font">{items.year}</th>
                    <td>{items.title}</td>
                    <td>{items.tecnology}</td>
                    <td className="flex gap-1">
                      <Link
                        target="_blank"
                        href={items.linkDemo}
                        className="w-7.5 aspect-square flex justify-center items-center text-blue-700"
                      >
                        <Globe />
                      </Link>
                      <Link
                        target="_blank"
                        href={items.linkRep}
                        className="w-7.5 aspect-square flex justify-center items-center"
                      >
                        <Github />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default FrontEndHeroSection;
