import Image from "next/image";
import style from "./page.module.css";
import font from "../../my-css.module.css";

const Herosection = () => {
  return (
    <header className="w-full h-screen overflow-hidden">
      <section className="w-full h-full max-width-custom mx-auto relative">
        {/* container layar 1 */}
        <section className="relative z-20 w-full h-full flex justify-center items-center">
          <div className={`${style.glass} mt-[10%]`}></div>
          <div className="absolute flex items-center w-max h-screen inset-0 left-[40%] translate-x-[-50%]">
            <p className="flex">
              <span
                className={`${font.montserrat} ${style.font} flex flex-col relative`}
              >
                <span className="absolute text-4xl md:text-5xl lg:text-6xl font-extrabold -translate-y-[80%]">
                  DIMAS
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                  WIDY
                </span>
                <span className="absolute md:text-5xl lg:text-6xl font-extrabold text-4xl translate-y-[80%]">
                  SAPUTRA
                </span>
              </span>
            </p>
          </div>
        </section>
        {/* container layar 2 */}
        <section className="absolute w-full h-full ">
          <div className="w-full h-full fixed inset-0 ">
            <figure className="absolute h-full aspect-video -translate-x-[50%] md:-translate-x-[45%] lg:translate-x-0">
              <Image
                className="h-full aspect-video drop-shadow-2xl"
                src="/asset/pageIndex/person.png"
                alt="person"
                fill
                unoptimized
              />
            </figure>
          </div>
        </section>
      </section>
    </header>
  );
};

export default Herosection;
