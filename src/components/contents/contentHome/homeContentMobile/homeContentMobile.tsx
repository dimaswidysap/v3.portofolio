import Image from "next/image";
import Style from "./homeContent.module.css";
const homeContentMobile = () => {
  return (
    <section className="w-full h-200 bg-primary md:hidden relative overflow-hidden">
      <section className="w-full h-1/2 flex relative z-20">
        <div className="h-full bg-amber-500 w-16">
          <span className="rotate-90 font-secondary inline-flex origin-bottom-left -translate-y-12 font-black text-[3em]">
            ILLUSTRATOR
          </span>
        </div>
        <div className="flex-1 flex justify-center items-center w-full">
          <div className={`${Style.shadow} w-[90%] aspect-16/10 relative`}>
            <Image
              loading="lazy"
              className="object-cover"
              src="/asset/pageIndex/adobe.png"
              alt="vs code"
              fill
              unoptimized
            />
          </div>
        </div>
      </section>
      <section className="w-full h-1/2 flex relative z-20 flex-row-reverse">
        <div className="h-full bg-amber-500 w-16">
          <span className="rotate-90 font-secondary inline-flex origin-bottom-left font-black text-[3em]">
            FRONTEND
          </span>
        </div>
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="flex-1 flex justify-center items-center w-full">
            <div className={`${Style.shadow} w-[90%] aspect-16/10 relative`}>
              <Image
                loading="lazy"
                className="object-cover"
                src="/asset/pageIndex/vscode.png"
                alt="vs code"
                fill
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
      {/* background */}
      <section className="absolute inset-0 w-full h-200">
        <span className="blur-2xl inline-flex rounded-full translate-x-1/2 -translate-y-[20%] w-full aspect-square bg-secondary"></span>
        <span className="bottom-0 blur-[50px]  inline-flex rounded-full -translate-x-1/2 translate-y-1/2 w-full aspect-square bg-secondary"></span>
      </section>
    </section>
  );
};
export default homeContentMobile;
