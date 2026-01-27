import Image from "next/image";
import style from "../../my-css.module.css";
import hero from "./page.module.css";

const HerosectionComponent = () => {
  return (
    <header className="w-full h-screen relative overflow-hidden">
      <section className="relative z-20 m-auto max-width-custom h-screen flex justify-center">
        <p
          className={`${style.montserrat} ${hero.font} mt-[30%] lg:mt-[20%]  flex flex-col items-center text-4xl font-black`}
        >
          <span>PROJECT</span>
          <span>ILLUSTRATOR</span>
        </p>
      </section>
      {/* background */}
      <section className="absolute inset-0 h-full lg:w-full aspect-video flex justify-center items-center">
        <Image
          className="absolute inset-0 h-full  aspect-video drop-shadow-2xl shrink"
          src="/asset/pageIllustrator/background.webp"
          alt="person"
          fill
          unoptimized
        />
        <Image
          className="absolute inset-0 h-full aspect-video drop-shadow-2xl shrink"
          src="/asset/pageIllustrator/bgapi.webp"
          alt="person"
          fill
          unoptimized
        />
        <figure className="absolute bottom-0 h-[80%] w-full flex justify-between">
          <div className="relative h-full aspect-square ">
            <Image
              className="object-cover drop-shadow-2xl"
              src="/asset/pageIllustrator/hellcatmobil.webp"
              alt="mobil"
              fill
              unoptimized
            />
          </div>
          <div className="relative h-full aspect-square">
            <Image
              className="object-cover drop-shadow-2xl"
              src="/asset/pageIllustrator/moonknight.webp"
              alt="moonknight"
              fill
              unoptimized
            />
          </div>
        </figure>
      </section>
    </header>
  );
};

export default HerosectionComponent;
