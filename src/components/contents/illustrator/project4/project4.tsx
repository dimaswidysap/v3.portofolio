"use client";
import Image from "next/image";
import dropShadow from "./../mobileVersion/mobileVersion.module.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DisplayProject4 = () => {
  // 1. Buat referensi untuk container utama
  const containerRef = useRef(null);

  // 2. Lacak progres scroll ketika container masuk ke dalam viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Mulai saat container muncul di bawah, selesai saat hilang di atas
  });

  // 3. Ubah progres scroll (0 sampai 1) menjadi pergerakan sumbu Y
  // "0%" = posisi awal, "50%" = bergerak ke bawah sejauh setengah layarnya. Bisa kamu ubah sesuai selera.
  const yMove = useTransform(scrollYProgress, [0, 1], ["0%", "170%"]);

  return (
    <section
      ref={containerRef}
      className="hidden md:flex w-full h-screen relative bg-primary overflow-hidden"
    >
      {/* background */}
      <section className="h-full lg:w-full aspect-video absolute left-0">
        <Image
          loading="eager"
          priority
          className="object-cover opacity-60"
          src="/asset/pageIllustrator/displayProjects/project4/background.webp"
          alt="background"
          fill
          unoptimized
        />
      </section>

      {/* karakter */}
      <section className="h-full lg:w-full aspect-video absolute left-0 inset-0">
        <div className="h-full aspect-square relative">
          <Image
            loading="eager"
            priority
            className={`object-cover ${dropShadow.dropShadow}`}
            src="/asset/pageIllustrator/projects/mark.webp"
            alt="background"
            fill
            unoptimized
          />
        </div>
      </section>

      {/* intro (Sekarang menggunakan motion.section) */}
      <motion.section
        style={{ y: yMove }} // Mengikat posisi Y ke progres scroll
        className="w-full  h-screen absolute inset-0 bg-primary"
      >
        {/* teks */}
        <section className="relative inset-0 h-screen w-full flex justify-end">
          <div className="bottom-full absolute mb-5">
            <h1 className="bg-secondary rounded-md shadow-2xl py-1 px-1.5 mr-4 main-font text-4xl font-black">
              <span>Aksi Illustrasi</span>
              <span className="font-accen-first">.</span>
            </h1>
          </div>

          <div className="absolute w-full inset-0  h-screen overflow-hidden ">
            <span className="inline-flex h-full aspect-square rounded-full bg-main-font -translate-x-1/2 -translate-y-1/2 blur-[50px] opacity-50"></span>
          </div>
        </section>
      </motion.section>
    </section>
  );
};

export default DisplayProject4;
