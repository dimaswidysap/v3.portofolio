"use client";
import Nav from "../nav";
import Link from "next/link";
import style from "./certificate.module.css";
import { Calendar, BookOpen, ExternalLink } from "lucide-react";

const cards = [
  {
    title: "PKL MENAKSOPAL",
    location: "MENAKSOPAL MADIUN",
    year: "2023",
    desc: "Belajar pemasangan jaringan wifi dengan fiber optic,ppt dan kabel lan.",
    linkDrive:
      "https://drive.google.com/file/d/1N4jth1rgpC5kwIzhDvQGBvyGC4WJqZ8l/view?usp=sharing",

    focus: ["Fiber Optic", "Kable Lan", "FFTH"],
  },
  {
    title: "Fundamental WEB",
    location: "Dicoding Academy",
    year: "2026",
    desc: "Belajar membangun halaman web yang responsif dan interaktif menggunakan standar web modern.",
    linkDrive:
      "https://drive.google.com/file/d/1jvxtJl2O3dlb0ff6ncNygPQ70_XvJXTN/view?usp=sharing",
    focus: ["HTML", "CSS"],
  },
  {
    title: "Front-End Web untuk Pemula",
    location: "Dicoding Academy",
    year: "2026",
    desc: "Membangun halaman web Selfbook App yang responsif dan interaktif, dan mengaplikasikan local storage.",
    linkDrive:
      "https://drive.google.com/file/d/1ZaziMXQLjsdL7ibXnmivudbf1kbEUB3t/view?usp=sharing",
    focus: ["HTML", "CSS", "Javascript"],
  },
];

const CertificatePage = () => {
  return (
    <main className="w-full py-60 h-max  bg-primary">
      <Nav />
      <section className="max-width-custom m-auto">
        {/* container card */}
        <section className="w-full  flex flex-wrap justify-center gap-10">
          {cards.map((items) => {
            return (
              <section
                key={items.title}
                className="relative group p-1 flex justify-center items-center"
              >
                <span
                  className={`${style.outlineCard} scale-90 duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-100 absolute h-full w-full`}
                ></span>
                <article
                  className={`relative z-10 w-[90%] md:w-md bg-secondary h-max p-4 rounded-md `}
                >
                  <h1 className="font-black main-font w-full text-[1.1em] montserrat">
                    {items.title}
                  </h1>
                  <section className="w-full flex justify-between montserrat mt-4">
                    <div className="flex items-center">
                      <BookOpen className=" text-blue-700" size={20} />
                      <span className="main-font font-medium ml-1.5">
                        {items.location}
                      </span>
                    </div>
                    <div className="flex bg-primary p-0.5 justify-center items-center rounded-sm shadow-2xl">
                      <Calendar className="text-blue-700" size={15} />
                      <span className="main-font font-black ml-1.5 text-[0.8em]">
                        {items.year}
                      </span>
                    </div>
                  </section>
                  <section className="w-full mt-4">
                    <p className="montserrat text-slate-500 italic">
                      {items.desc}
                    </p>
                  </section>
                  <Link
                    href={items.linkDrive}
                    target="_blank"
                    className="w-full justify-center flex p-2 gap-2 bg-slate-800 mt-4 rounded-2xl"
                  >
                    <ExternalLink className="text-blue-700" size={20} />
                    <span className="font-bold montserrat main-font">
                      Lihat Sertifikat
                    </span>
                  </Link>
                  <section
                    className={`${style.focus} mt-4 pt-3.5 flex gap-3.5`}
                  >
                    {items.focus.map((element, index) => {
                      return (
                        <span
                          key={index}
                          className="bg-primary px-2 rounded-md"
                        >
                          <p className="text-slate-600 montserrat font-black text-[0.8em]">
                            {element}
                          </p>
                        </span>
                      );
                    })}
                  </section>
                </article>
              </section>
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default CertificatePage;
