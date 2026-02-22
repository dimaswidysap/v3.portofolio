"use client";
import Style from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import IconSosmed from "../iconSosmed/IconSosmed";

const Footer = () => {
  const navItems = [
    { label: "Beranda", href: "/", extraClass: "menuActive", icon: "<Home />" },
    { label: "iLLustrator", href: "/iLLustrator" },
    { label: "Front-End", href: "/front-end" },
    { label: "Tentang saya", href: "/about" },
    { label: "Kontak", href: "/contact" },
  ];

  const sosmed = [
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
      href: "https://www.tiktok.com/@dimaswidysap",
    },
  ];

  return (
    <footer className={`${Style.containerFooter} w-full z-20 relative`}>
      {/* background */}
      <section className="w-full h-full absolute inset-0 overflow-hidden flex justify-center items-end">
        <span className="font-black text-shadow-black -translate-y-[30%] md:translate-y-[40%] scale-200 text-7xl md:text-9xl opacity-10">
          WIDY
        </span>
      </section>
      {/* konten */}
      <section className={`${Style.konten} absolute inset-0 w-full h-full`}>
        <div className="w-[90%] h-[70%] bg-primary rounded-2xl md:rounded-4xl m-auto mt-6 px-3 md:px-10">
          <div className="h-[80%] w-full flex flex-col md:flex-row">
            <div className="w-full h-[60%] md:h-full md:w-[80%] pt-4 ">
              <div className="flex items-center">
                <div className="h-12 aspect-square relative">
                  <Image
                    className="object-cover"
                    src="/asset/logo/logo.svg"
                    alt="Foto Profil"
                    loading="lazy"
                    fill
                  />
                </div>
                <span className="font-black text-[1.2em] main-font">WIDY</span>
              </div>
              <p className="flex flex-col">
                <span className="text-[1.5em] font-black">
                  Ayo kita bahas proyek anda🚀
                </span>
                <span className="text-[0.9em]">Illustrator atau Web</span>
              </p>
              <div className="flex gap-3 mt-4">
                {sosmed.map((items, index) => {
                  return (
                    <IconSosmed
                      key={`sosmed-${index}`}
                      linkIcon={items.linkIcon}
                      linkSosmed={items.href}
                    />
                  );
                })}
              </div>
            </div>
            <div className="w-full h-[40%] md:h-full md:w-[20%] pt-4">
              <h2 className="font-black main-font text-[1.2em]">MENU</h2>
              <ul className="w-full">
                {navItems.map((items) => {
                  return (
                    <li key={items.label}>
                      <Link href={items.href}>{items.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div
            className={`${Style.copyright} h-[20%] w-full flex items-center `}
          >
            <span className="text-[0.8em]">Dimas Widy Saputra © 2026</span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
