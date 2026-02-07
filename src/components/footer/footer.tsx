"use client";
import style from "./footer.module.css";
import font from "@/app/my-css.module.css";
import Link from "next/link";
import IconSosmed from "@/components/iconSosmed/IconSosmed";
import Image from "next/image";
import DotGrid from "@/components/ReacbitsComponents/DotGrid/DotGrid";

const Footer = () => {
  const linkIcons = [
    {
      linkIcon: "https://cdn.simpleicons.org/github/ffff",
      href: "https://github.com/dimaswidysap",
    },
    {
      linkIcon: "https://cdn.simpleicons.org/instagram/ffff",
      href: "https://www.instagram.com/dimaswidysaputraa/",
    },
    {
      linkIcon: "https://cdn.simpleicons.org/facebook/ffff",
      href: "https://www.facebook.com/dimaswidysaputra.dimaswidysaputra",
    },
    {
      linkIcon: "https://cdn.simpleicons.org/tiktok/ffff",
      href: "https://www.tiktok.com/@segogotol",
    },
  ];

  return (
    <footer className={`${style.containerFooter} w-full z-20 relative`}>
      <section className="w-full h-120 relative">
        {/* background */}
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#271E37"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        {/* konten */}
        <div className="absolute max-width-custom  m-auto h-full w-full inset-0  z-20 flex flex-col">
          <section className="w-full flex flex-1 md:flex-row">
            <div className="w-full flex flex-col gap-7 h-full md:w-[70%] pl-2">
              <h1 className="text-[3em] md:text-[4em] font-extrabold main-font montserrat">
                Let`s discuss your project 🚀
              </h1>
              <Link href="/contact" className="globalButton">
                Contact Me
              </Link>
              {/* container icon sosmed */}
              <div className="flex gap-3 h-full">
                {linkIcons.map((item, index) => (
                  <IconSosmed
                    key={`sosmed-${index}`} // Menggunakan prefix agar key lebih unik
                    linkIcon={item.linkIcon}
                    linkSosmed={item.href}
                  />
                ))}
              </div>
            </div>
            <div className="hidden md:flex w-[30%] h-full md:flex-col md:items-center md:gap-6 pt-12">
              {/* konten logo */}
              <div className="w-full relative aspect-square">
                <Image
                  className="opacity-60"
                  src="/asset/logo/logo.svg"
                  alt="Foto Profil"
                  loading="lazy"
                  fill
                />
              </div>
            </div>
          </section>
          {/* copy right */}
          <section className="w-full flex justify-center py-1">
            <span
              className={`${font.montserrat} text-[0.7em] md:text-[1em] font-bold text-slate-300`}
            >
              Copyright Dimas Widy Saputra 2026
            </span>
          </section>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
