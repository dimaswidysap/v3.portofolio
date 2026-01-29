import Image from "next/image";

const ProjectGrid = () => {
  return (
    <section className="h-280 w-full">
      {/* background */}
      <section className="relative h-full overflow-hidden">
        <figure className="h-screen xl:w-full aspect-video relative">
          <Image
            className=" rotate-180 inset-0 h-full aspect-video  shrink"
            src="/asset/pageIllustrator/bgapi.webp"
            alt="person"
            fill
            unoptimized
          />
        </figure>
      </section>
      {/* container cards */}
      <section></section>
    </section>
  );
};

export default ProjectGrid;
