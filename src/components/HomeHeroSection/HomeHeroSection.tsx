import style from "./HomeHeroSection.module.css";
import Image from "next/image";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import RotatingText from "@/components/RotatingText/RotatingText";

const HomeHeroSection = () => {
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
                className="h-full aspect-video drop-shadow-2xl object-cover"
                src="/asset/pageIndex/garuda/ekor.webp"
                alt="person"
                fill
                unoptimized
              />
            </div>
            <div className={`${style.sayapKanan} absolute inset-0`}>
              <Image
                className="h-full aspect-video drop-shadow-2xl object-cover"
                src="/asset/pageIndex/garuda/sayapkanan.webp"
                alt="person"
                fill
                unoptimized
              />
            </div>
            <div className={`${style.sayapKiri} absolute inset-0`}>
              <Image
                className="h-full aspect-video drop-shadow-2xl object-cover"
                src="/asset/pageIndex/garuda/sayapkiri.webp"
                alt="person"
                fill
                unoptimized
              />
            </div>
            <div className="absolute inset-0">
              <Image
                className="h-full aspect-video drop-shadow-2xl object-cover"
                src="/asset/pageIndex/garuda/badan.webp"
                alt="person"
                fill
                unoptimized
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
            <div className={`${style.fontBold}`}>
              <ScrollFloat
                animationDuration={2.5}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
              >
                Im Good At
              </ScrollFloat>
            </div>
            <div>
              <RotatingText
                texts={["Front-End Developer", "Illustrator"]}
                // Fokus pada mainClassName untuk styling box/latar belakang
                mainClassName="px-4 py-2 bg-accen-first text-white font-extrabold rounded-2xl font-bold text-2xl inline-flex items-center justify-center"
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
              className={`${style.sbhas} w-600 h-[5rem]  absolute  rotate-12 -left-[20%] bottom-[5%] md:bottom-[20%]`}
            >
              {/* container items */}
              <div className="flex"></div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};
export default HomeHeroSection;
