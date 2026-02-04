import React from "react"; // Tambahkan ini
import style from "./HomeHeroSection.module.css";
import Image from "next/image";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import RotatingText from "@/components/RotatingText/RotatingText";

const HomeHeroSection = () => {
  function createCard(linkIcon: string) {
    return (
      // Tambahkan "relative" di sini
      <section className="relative h-16 aspect-square shrink-0">
        <Image
          className="object-contain drop-shadow-2xl" // 'object-contain' agar icon tidak gepeng
          src={linkIcon} // Tidak perlu `${}` jika hanya string tunggal
          alt="icon"
          fill
          unoptimized
        />
      </section>
    );
  }
  const techIcons = [
    "https://cdn.simpleicons.org/html5",
    "https://cdn.simpleicons.org/css",
    "https://cdn.simpleicons.org/javascript",
    "https://cdn.simpleicons.org/tailwindcss",
    "https://cdn.simpleicons.org/nextdotjs",
  ];

  return (
    <section
      className={`${style.gradient}  relative z-20 bg-secondary h-200 w-full`}
    >
      {/* container garuda */}
      <section className="relative h-full w-full overflow-hidden flex justify-center">
        <figure className="h-[90%] aspect-video translate-x-[15%] md:translate-x-[25%] lg:translate-x-[20%]  flex justify-center items-center">
          <section className={`${style.objectRandom} relative h-full w-full`}>
            <div className={`${style.ekor} absolute inset-0`}>
              <Image
                loading="lazy"
                className="h-full aspect-video drop-shadow-2xl object-cover"
                src="/asset/pageIndex/garuda/ekor.webp"
                alt="person"
                fill
              />
            </div>
            <div className={`${style.sayapKanan} absolute inset-0`}>
              <Image
                loading="lazy"
                className="h-full aspect-video drop-shadow-2xl object-cover"
                src="/asset/pageIndex/garuda/sayapkanan.webp"
                alt="person"
                fill
              />
            </div>
            <div className={`${style.sayapKiri} absolute inset-0`}>
              <Image
                loading="lazy"
                className="h-full aspect-video drop-shadow-2xl object-cover"
                src="/asset/pageIndex/garuda/sayapkiri.webp"
                alt="person"
                fill
              />
            </div>
            <div className="absolute inset-0">
              <Image
                loading="lazy"
                className="h-full aspect-video drop-shadow-2xl object-cover"
                src="/asset/pageIndex/garuda/badan.webp"
                alt="person"
                fill
              />
            </div>
          </section>
        </figure>
      </section>

      {/* container konten */}
      <section className="absolute overflow-hidden h-full w-full inset-0">
        <section
          className={`${style.shadowKonten} max-width-custom h-full m-auto relative`}
        >
          {/* kontem */}
          <section className="w-full h-full relative z-20 pl-2">
            <div className={`${style.fontBold} flex items-end`}>
              <ScrollFloat
                animationDuration={2.5}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
              >
                Im Good At
              </ScrollFloat>
              <p className="text-blue-600 text-[6.5em]">.</p>
            </div>
            <div>
              <RotatingText
                texts={["Front-End Developer", "Illustrator"]}
                mainClassName="px-4 py-2 bg-primary shadow-2xl text-white font-extrabold rounded-2xl font-bold text-2xl inline-flex items-center justify-center"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.03}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 px-1"
                transition={{ type: "spring", damping: 30, stiffness: 500 }}
                rotationInterval={2000}
              />
            </div>

            {/* container techscroll */}

            <div
              className={`${style.sbhas} overflow-hidden w-[200%] absolute flex flex-col gap-4 py-2 rotate-12 -left-[20%] bottom-[5%] md:bottom-[20%]`}
            >
              {/* Baris Atas: Gerak ke Kiri */}
              <div className="flex">
                <div className={`${style.scrollLeft} flex gap-4 shrink-0`}>
                  {[...Array(12)].map((_, groupIndex) => (
                    <React.Fragment key={`orig-top-${groupIndex}`}>
                      {techIcons.map((url, i) => (
                        <React.Fragment key={`icon-top-${groupIndex}-${i}`}>
                          {createCard(url)}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Baris Bawah: Gerak ke Kanan (Berlawanan) */}
              <div className="flex">
                <div className={`${style.scrollRight} flex gap-4 shrink-0`}>
                  {[...Array(12)].map((_, groupIndex) => (
                    <React.Fragment key={`orig-bot-${groupIndex}`}>
                      {techIcons.map((url, i) => (
                        <React.Fragment key={`icon-bot-${groupIndex}-${i}`}>
                          {createCard(url)}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* container techscroll end*/}
          </section>
        </section>
      </section>
    </section>
  );
};
export default HomeHeroSection;
