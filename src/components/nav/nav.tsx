"use client";
import { useState } from "react";
import Link from "next/link";
import style from "./nav.module.css";
import Image from "next/image";
import Magnet from "../Magnet/Magnet";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk kontrol menu
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", extraClass: "menuActive" },
    { label: "iLLustrator", href: "/iLLustrator" },
    { label: "Front-End", href: "/front-end" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  // Fungsi untuk toggle menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full z-100 fixed top-0 left-0 right-0 flex">
      <nav className={`relative w-[90%] mt-4 h-12 m-auto`}>
        {/* background transparant */}
        <div
          className={`${style.shadowGlass} w-full h-full rounded-2xl bg-primary opacity-95`}
        ></div>

        {/* konten */}
        <div className="absolute w-full h-full inset-0 flex justify-between px-4">
          <div className="h-full aspect-square relative">
            <Image src="/asset/logo/logo.svg" alt="Foto Profil" fill />
          </div>
          <div>
            <ul className="gap-4 h-full items-center hidden md:flex">
              {navItems
                .filter((item) => item.href !== pathname)
                .map((items) => (
                  <Magnet
                    key={items.label}
                    padding={50}
                    disabled={false}
                    magnetStrength={10}
                  >
                    <li>
                      <Link
                        className={`${style.fontNav} main-font md:text-[0.8em] lg:text-[1em]`}
                        href={items.href}
                      >
                        {items.label}
                      </Link>
                    </li>
                  </Magnet>
                ))}
            </ul>
          </div>

          {/* Tombol Hamburger Custom */}
          <div className="md:hidden flex items-center justify-center">
            <div
              className={`${style.menuWrapper} ${isOpen ? style.activeMenu : ""}`}
              onClick={toggleMenu}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        {/* nav mobile */}
        <div
          className={`md:hidden w-full h-[70vh] absolute mt-4 rounded-2xl transition-all duration-500 ease-in-out ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-[110%] opacity-0"
          }`}
        >
          {/* background transparan */}
          <div
            className={`${style.shadowGlass} h-full w-full bg-primary opacity-98 rounded-2xl`}
          ></div>
          {/* konten */}
          <div
            className={`absolute inset-0 w-full h-full  flex justify-center items-center `}
          >
            <div className="h-full">
              <ul className="flex flex-col h-full justify-center items-center gap-6">
                {navItems
                  .filter((item) => item.href !== pathname)
                  .map((items) => (
                    <Magnet
                      key={items.label}
                      padding={50}
                      disabled={false}
                      magnetStrength={10}
                    >
                      <li onClick={() => setIsOpen(false)}>
                        {" "}
                        <Link
                          className={`${style.fontNav} text-2xl main-font`}
                          href={items.href}
                        >
                          {items.label}
                        </Link>
                      </li>
                    </Magnet>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        {/* nav mobile end */}
      </nav>
    </header>
  );
};

export default Navbar;
