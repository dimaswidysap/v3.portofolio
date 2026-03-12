import style from "./mobileVersion.module.css";
import Image from "next/image";
import { projectsIll } from "./main";

const MobileVersion = () => {
  return (
    <section className="w-full pb-10 pt-20 flex flex-col gap-15 md:hidden overflow-hidden">
      {projectsIll.map((items, index) => {
        return (
          <figure
            key={items.alt}
            className={`w-full flex ${index % 2 === 0 ? "" : "flex-row-reverse"} items-center h-80`}
          >
            <div className="w-[80%] aspect-square relative">
              <Image
                loading="lazy"
                className={`object-cover scale-110  ${style.dropShadow}`}
                src={items.src}
                alt={items.alt}
                fill
                unoptimized
              />
            </div>
            <div
              className={`${index % 2 === 0 ? style.roundedkiri : style.roundedkanan} relative h-full flex-1 bg-secondary p-1 `}
            >
              <div className="w-full main-font aspect-square bg-primary  rounded-full flex justify-center items-center font-black">
                {index + 1}
              </div>

              <div className="w-full absolute overflow-hidden inset-0 top-1/2  h-max">
                <span className="inline-flex w-full h-px bg-accen-first rotate-12 scale-125"></span>
                <span className="inline-flex w-full h-px bg-accen-first rotate-12 scale-125"></span>
              </div>
            </div>
          </figure>
        );
      })}
    </section>
  );
};
export default MobileVersion;
