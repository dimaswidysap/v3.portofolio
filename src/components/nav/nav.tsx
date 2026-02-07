"use client";
import { useState } from "react";
import Link from "next/link";
import style from "./nav.module.css";
import Image from "next/image";
import Magnet from "../ReacbitsComponents/Magnet/Magnet";
import { usePathname } from "next/navigation";
import IconSosmed from "../iconSosmed/IconSosmed";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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

  const navItems = [
    { label: "Home", href: "/", extraClass: "menuActive" },
    { label: "iLLustrator", href: "/iLLustrator" },
    { label: "Front-End", href: "/front-end" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Fungsi baru untuk menutup menu saat link ditekan
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full z-100 fixed top-0 left-0 right-0 flex">
      <nav className={`relative w-[90%] mt-1 h-12 m-auto`}>
        <div
          className={`${style.shadowGlass} w-full h-full rounded-2xl bg-primary opacity-95`}
        ></div>

        <div className="absolute w-full h-full inset-0 flex justify-between px-4">
          <div className="h-full aspect-square relative">
            <Image src="/asset/logo/logo.svg" alt="Foto Profil" fill />
          </div>
          <div>
            <ul className="gap-4 h-full items-center hidden md:flex ">
              {navItems
                .filter((item) => item.href !== pathname)
                .map((items) => (
                  <li
                    key={items.label}
                    className="h-full inline-flex  py-1 relative group overflow-hidden items-center"
                  >
                    <Link
                      className={`${style.fontNav} main-font md:text-[0.8em] lg:text-[1em]`}
                      href={items.href}
                      // Opsional: tambahkan di desktop jika ingin menu tertutup saat navigasi
                      onClick={handleLinkClick}
                    >
                      {items.label}
                    </Link>
                    <span className="translate-x-[110%] mb-2 group-hover:translate-x-0 duration-300 ease-in-out absolute inset-x-0 bottom-0 before:content-[''] before:block before:w-full before:h-0.5 rounded-2xl bg-accen-first"></span>
                  </li>
                ))}
            </ul>
          </div>
          {/* button haburger menu start*/}
          <div className="md:hidden flex items-center justify-center h-full  aspect-square">
            <div
              className={`${style.menuWrapper} ${isOpen ? style.activeMenu : ""} overflow-hidden h-full w-full relative`}
              onClick={toggleMenu}
            >
              {/* wrapper close */}
              <div
                className={`${isOpen ? "-translate-x-full -translate-y-full" : "translate-x-0 translate-y-0"} duration-300 ease-in-out absolute inset-0 h-full aspect-square  flex flex-col justify-center items-center gap-2`}
              >
                <span className={`${style.lines} -rotate-45`}></span>
                <span className={`${style.lines} -rotate-45`}></span>
              </div>
              <div
                className={`${isOpen ? "translate-x-0 translate-y-0" : "translate-x-full translate-y-full"} duration-300 ease-in-out absolute inset-0 h-full aspect-square  flex flex-col justify-center items-center gap-2`}
              >
                <span
                  className={`${style.lines} rotate-45 ${isOpen ? "" : ""}`}
                ></span>
                <span className={`${style.lines} rotate-45`}></span>
              </div>
            </div>
          </div>
          {/* button haburger menu end*/}
        </div>

        {/* nav mobile */}
        <div
          className={`md:hidden w-full h-[70vh] absolute mt-4 rounded-2xl transition-all duration-500 ease-in-out ${
            isOpen ? "translate-x-0 " : "translate-x-[110%] "
          }`}
        >
          <div
            className={`${style.shadowGlass} h-full w-full bg-primary opacity-98 rounded-2xl`}
          ></div>
          <div
            className={`absolute inset-0 w-full h-full flex flex-col justify-center items-center `}
          >
            <div className="h-full">
              <ul className="flex flex-col h-full justify-center items-center gap-6">
                {navItems
                  .filter((item) => item.href !== pathname)
                  .map((items, index) => (
                    <Magnet
                      key={items.label}
                      padding={50}
                      disabled={false}
                      magnetStrength={10}
                    >
                      <li
                        style={{ transitionDelay: `${index * 200}ms` }}
                        className={`${isOpen ? `translate-x-0 translate-y-0 opacity-100` : `opacity-0 translate-x-4 translate-y-4`}  duration-300 ease-in-out  h-full inline-flex py-1 relative group overflow-hidden `}
                      >
                        <Link
                          className={`${style.fontNav} main-font md:text-[0.8em] lg:text-[1em]`}
                          href={items.href}
                          onClick={handleLinkClick}
                        >
                          {items.label}
                        </Link>
                        <span className="hidden md:flex translate-x-full group-hover:translate-x-0 duration-300 ease-in-out absolute inset-x-0 bottom-0 before:content-[''] before:block before:w-full before:h-0.5 rounded-2xl before:bg-slate-200"></span>
                      </li>
                    </Magnet>
                  ))}
              </ul>
            </div>
            {/* container icons */}
            <div className="w-full h-16 flex justify-center gap-4">
              {linkIcons.map((item, index) => (
                <IconSosmed
                  key={`sosmed-${index}`}
                  linkIcon={item.linkIcon}
                  linkSosmed={item.href}
                />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
