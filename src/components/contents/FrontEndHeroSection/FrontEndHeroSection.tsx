"use client";

import style from "./FrontEndHeroSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { Globe, Github, Archive } from "lucide-react";
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
      <section className="max-width-custom  mx-auto relative z-30">
        <div className="w-full h-10 flex items-center justify-end px-4 mb-20">
          <button className="cursor-pointer">
            <span className="inline-flex gap-0.5 font-bold main-font bg-primary px-2.5 py-1 rounded-md">
              <Archive /> <p>Buka diarsip</p>
            </span>
          </button>
        </div>
        {/* container-arsip */}
        <div className="w-full py-40 px-5">
          <table className="w-full">
            <thead className="text-left">
              <tr>
                <th>Tahun</th>
                <th>Judul</th>
                <th className="w-[50%]">Teknologi</th>
                <th className="max-w-40">Link</th>
              </tr>
            </thead>
            <tbody>
              {cardProjects.map((items) => {
                return (
                  <tr key={items.title}>
                    <td>{items.year}</td>
                    <td>{items.title}</td>
                    <td>{items.tecnology}</td>
                  </tr>
                );
              })}
              {/* <tr>
                <td>Siti</td>
                <td>Developer</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default FrontEndHeroSection;
