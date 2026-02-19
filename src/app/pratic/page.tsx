"use client";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Magnet from "@/components/ReacbitsComponents/Magnet/Magnet";
import Style from "./pratic.module.css";

const PraticPage = () => {
  const projects = [
    {
      name: "Membuat Web Kalkulator",
      link: "https://github.com/dimaswidysap/kalkulator",
    },
    {
      name: "Membuat Web Todolist",
      link: "https://github.com/dimaswidysap/todolist",
    },
    {
      name: "Landing page produk kopi",
      link: "https://github.com/dimaswidysap/landing-page-produk-kopi",
    },
  ];

  return (
    <main id="education" className="w-full h-screen relative bg-primary">
      <section className="max-width-custom m-auto flex flex-col items-center pb-60 ">
        <header className="py-4 flex justify-between w-full px-3">
          <Magnet padding={50} disabled={false} magnetStrength={5}>
            <Link href="/">
              <span className="inline-flex gap-2 montserrat font-black main-font md:text-[2em] cursor-pointer">
                <ArrowLeft className="md:text-[2em]" />
                Kembali<span className="text-blue-700 montserrat">.</span>
              </span>
            </Link>
          </Magnet>
          <Magnet padding={50} disabled={false} magnetStrength={5}>
            <h1 className="main-font montserrat text-[0.8em] font-black md:text-[2em]">
              Berkas Latihan Front-end
            </h1>
          </Magnet>
        </header>

        <section className="w-full pt-60 flex flex-wrap gap-4 justify-center">
          {projects.map((items) => {
            return (
              <aside
                key={items.name}
                className={`${Style.shadow} relative w-[90%] flex justify-between md:w-[50%] bg-secondary rounded-md group hover:-translate-y-2.5 duration-300 ease-in-out py-4 px-2.5`}
              >
                <div className="montserrat font-black main-font">
                  {items.name}
                  <span className="text-blue-700">.</span>
                </div>
                <Link
                  target="_blank"
                  href={items.link}
                  className="aspect-square h-full  group-hover:scale-125 duration-300 ease-in-out group-hover:-rotate-12"
                >
                  <ExternalLink className="text-blue-700" />
                </Link>
              </aside>
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default PraticPage;
