"use client";

import Image from "next/image";
import Magnet from "@/components/ReacbitsComponents/Magnet/Magnet";

const HeaderFrontEndComponent = () => {
  return (
    <header className="w-full h-screen bg-primary fixed inset-0">
      <section className="max-width-custom h-screen flex flex-col lg:flex-row items-center m-auto">
        {/*  */}
        <div className="w-[90%] h-[50%] lg:h-full pt-[20%] montserrat">
          <Magnet padding={50} disabled={false} magnetStrength={50}>
            <p className="text-[2em] font-black md:text-[4em] main-font">
              Proyek Saya<span className="text-blue-700">.</span>
            </p>
          </Magnet>
          <section className="flex items-center gap-2">
            <span className="h-6 w-0.5 bg-slate-50"></span>
            <blockquote className="italic main-font montserrat">
              Sukses itu hadiah bagi yang selalu berusaha.
            </blockquote>
          </section>
          <Magnet padding={50} disabled={false} magnetStrength={15}>
            <section className="w-full h-20 md:h-32 flex relative">
              <div className="h-full aspect-square  relative">
                <Image
                  loading="eager"
                  priority
                  className="object-cover"
                  src="/asset/pageFrontend/stopkontak.webp"
                  alt="stopkontak"
                  fill
                  unoptimized
                />
              </div>

              <div className="h-full aspect-square  relative">
                <Image
                  loading="eager"
                  priority
                  className="object-cover"
                  src="/asset/pageFrontend/router.webp"
                  alt="stopkontak"
                  fill
                  unoptimized
                />
              </div>
              <div className="h-full aspect-square  relative">
                <Image
                  loading="eager"
                  priority
                  className="object-cover"
                  src="/asset/pageFrontend/kabellan.webp"
                  alt="stopkontak"
                  fill
                  unoptimized
                />
              </div>
              <div className="h-full aspect-square  relative">
                <Image
                  loading="eager"
                  priority
                  className="object-cover"
                  src="/asset/pageFrontend/databases.webp"
                  alt="stopkontak"
                  fill
                  unoptimized
                />
              </div>
            </section>
          </Magnet>
        </div>
        {/*  */}
        <div className="w-[90%] h-[50%] lg:h-full  pt-[15%]"></div>
      </section>
    </header>
  );
};

export default HeaderFrontEndComponent;
