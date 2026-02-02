"use client";
import Magnet from "@/components/Magnet/Magnet";
import Link from "next/link";
// import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const CertificatePage = () => {
  return (
    <main className="w-full h-screen bg-primary">
      <section className="max-width-custom h-screen  m-auto">
        <header className="py-4 flex justify-between w-full px-3">
          <Magnet padding={50} disabled={false} magnetStrength={5}>
            <Link href="/about#story">
              <span className="inline-flex gap-2 montserrat font-black main-font md:text-[2em]">
                <ArrowLeft className="md:text-[2em]" />
                Back<span className="text-blue-700">.</span>
              </span>
            </Link>
          </Magnet>
          <Magnet padding={50} disabled={false} magnetStrength={5}>
            <h1 className="main-font montserrat text-[1.3em] font-black md:text-[3em]">
              Certificate
            </h1>
          </Magnet>
        </header>
      </section>
    </main>
  );
};

export default CertificatePage;
