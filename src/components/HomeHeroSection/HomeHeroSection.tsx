import style from "./HomeHeroSection.module.css";
import Image from "next/image";

import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";

const HomeHeroSection = () => {
  return (
    <section
      className={`${style.gradient}  relative z-20 bg-secondary h-200 w-full`}
    >
      {/* container garuda */}
      <section className="relative h-full w-full  overflow-hidden">
        <figure className="h-[90%] aspect-video -translate-x-[25%] md:translate-x-[10%] lg:translate-x-[20%]  flex justify-center items-center">
          <div className="absolute inset-0">
            <Image
              className="h-full aspect-video drop-shadow-2xl object-cover"
              src="/asset/pageIndex/garuda/ekor.webp"
              alt="person"
              fill
              unoptimized
            />
          </div>
          <div className="absolute inset-0">
            <Image
              className="h-full aspect-video drop-shadow-2xl object-cover"
              src="/asset/pageIndex/garuda/sayapkanan.webp"
              alt="person"
              fill
              unoptimized
            />
          </div>
          <div className="absolute inset-0">
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
        </figure>
      </section>

      {/* container konten */}
      <section className="absolute h-full w-full inset-0 "></section>
    </section>
  );
};
export default HomeHeroSection;
