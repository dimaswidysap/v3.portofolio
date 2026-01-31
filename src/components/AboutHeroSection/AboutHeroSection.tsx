"use client";

import CircularGallery from "@/components/CircularGallery/CircularGallery";

const myImages = [
  { image: "/asset/pageAbout/images/1.jpeg", text: "Make Illustration Zombie" },
  { image: "/asset/pageAbout/images/2.jpg", text: "Instalation Network" },
  { image: "/asset/pageAbout/images/3.jpg", text: "Collage" },
  { image: "/asset/pageAbout/images/4.jpg", text: "Funny" },
];

const AboutHeroSection = () => {
  return (
    <section className="w-full bg-primary">
      <section className="max-width-custom  m-auto pt-40">
        <header className="w-full flex justify-center px-4">
          <h1 className="font-black montserrat text-[2em] md:text-[3em] main-font">
            Let Me Introduce Myself👋<span className="text-blue-500">.</span>
          </h1>
        </header>
        {/* container gallery */}
        <section className="w-full h-150 ">
          <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              items={myImages}
              bend={1}
              textColor="#cacaca"
              borderRadius={0.01}
              scrollEase={0.02}
              scrollSpeed={5}
            />
          </div>
        </section>
      </section>
    </section>
  );
};

export default AboutHeroSection;
