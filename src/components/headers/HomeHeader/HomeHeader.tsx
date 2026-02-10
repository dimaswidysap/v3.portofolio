"use client";

// import Image from "next/image";
import style from "./HomeHeader.module.css";
import font from "@/app/my-css.module.css";
import Magnet from "@/components/ReacbitsComponents/Magnet/Magnet";
import Link from "next/link";
import Image from "next/image";

const HomeHeader = () => {
  return (
    <header className="w-full h-screen overflow-hidden bg-primary relative">
      {/* container background start */}
      <section className="absolute h-screen w-full overflow-hidden">
        {/* Container foto yang mepet ke kanan */}
        <div className="absolute right-0 top-0 h-screen aspect-video">
          {/* Container card dengan overflow-hidden */}
          <div
            className={` h-full w-full  overflow-hidden relative translate-x-[20%] lg:translate-x-0`}
          >
            <Image
              loading="eager"
              priority
              className="object-cover"
              src="/asset/pageIndex/personv2.png"
              alt="background"
              fill
              unoptimized
            />
          </div>
        </div>
      </section>
      {/* container background end */}

      {/* container teks start */}
      <section className="max-width-custom h-screen relative z-20 m-auto">
        <section className="relative z-20 w-full h-full flex justify-center items-center">
          <div className={`${style.glass} mt-[10%]`}></div>
          <div className="absolute flex flex-col justify-center w-max h-screen inset-0 left-[40%] translate-x-[-50%]">
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <p className="flex">
                <span
                  className={`${font.montserrat} ${style.font}  flex flex-col relative`}
                >
                  <span className="absolute bottom-[170%] font-bold font-secondary">
                    Hallo 👋, Nama saya
                  </span>
                  <span className="absolute text-4xl md:text-5xl lg:text-6xl font-extrabold -translate-y-[80%] font-secondary">
                    DIMAS
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                    WIDY
                  </span>
                  <span className="absolute md:text-5xl lg:text-6xl font-extrabold text-4xl translate-y-[80%] font-secondary">
                    SAPUTRA
                  </span>
                </span>
              </p>
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <span className="inline-flex gap-6 mt-[20%]">
                <Link href="/about" className={`globalButton`}>
                  Tertarik?
                </Link>
                <Link
                  target="_blank"
                  href="https://drive.google.com/file/d/1HrZd5hQpGUMM97I65QJ9fTSIPFZp3K-x/view?usp=drive_link"
                  className={`globalButton`}
                >
                  Rekrut Saya
                </Link>
              </span>
            </Magnet>
          </div>
        </section>
      </section>
      {/* container teks end */}
    </header>
  );
};

export default HomeHeader;
