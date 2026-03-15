import Image from "next/image";
import dropShadow from "./../mobileVersion/mobileVersion.module.css";

const DisplayProject4 = () => {
  return (
    <section className="hidden md:flex w-full h-screen relative bg-yellow-50 overflow-hidden">
      {/* background */}
      <section className="h-full lg:w-full aspect-video absolute left-0">
        <Image
          loading="eager"
          priority
          className="object-cover"
          src="/asset/pageIllustrator/displayProjects/project4/background.webp"
          alt="background"
          fill
          unoptimized
        />
      </section>
      {/* karakter */}
      <section className="h-full lg:w-full aspect-video absolute left-0 inset-0">
        <div className="h-full aspect-square  relative">
          <Image
            loading="eager"
            priority
            className={`object-cover ${dropShadow.dropShadow}`}
            src="/asset/pageIllustrator/projects/mark.webp"
            alt="background"
            fill
            unoptimized
          />
        </div>
      </section>
      <section className="absolute inset-0 h-screen w-full"></section>
    </section>
  );
};

export default DisplayProject4;
