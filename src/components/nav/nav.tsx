"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./nav.module.css";
import Magnet from "@/components/Magnet/Magnet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/", extraClass: "menuActive" },
    { label: "iLLustrator", href: "/iLLustrator" },
    { label: "Front-End", href: "/front-end" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="absolute w-full flex justify-center z-999 overflow-hidden">
      {/* hamburger menu start */}
      <section
        className={`
          ${style.containerHam} 
          z-50 h-16 md:h-20 aspect-square relative 
          transition-all ease-in-out duration-500 overflow-hidden 
          ${scrolled || isOpen ? "opacity-100 scale-100" : "translate-x-0 scale-100 md:scale-0 md:opacity-0"}
        `}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-full h-full rounded-full shadow-xl focus:outline-none"
        >
          <div
            className={` ${isOpen ? "-translate-y-full -translate-x-full" : "translate-y-0 translate-x-0"}
              absolute flex flex-col gap-2 justify-center items-center h-full w-full inset-0 transition-all ease-in-out duration-300 
            `}
          >
            <span className={`${style.hamLine} rotate-45`}></span>
            <span className={`${style.hamLine} rotate-45`}></span>
          </div>
          <div
            className={` ${isOpen ? "translate-y-0 translate-x-0" : "translate-y-full translate-x-full"}
              absolute flex flex-col gap-2 justify-center items-center h-full w-full inset-0 transition-all ease-in-out duration-300 
            `}
          >
            <span
              className={`${style.hamLine} ${isOpen ? "translate-y-0 translate-x-0" : "translate-y-3 translate-x-3"} transition-all ease-in-out duration-700 -rotate-45`}
            ></span>
            <span
              className={`${style.hamLine} ${isOpen ? "translate-y-0 translate-x-0" : "-translate-y-3 -translate-x-3"} transition-all ease-in-out duration-700 -rotate-45`}
            ></span>
          </div>
        </button>
      </section>
      {/* hamburger menu end */}
      {/* nav header start */}
      <section className="w-full max-width-custom">
        <ul className="justify-center gap-2 hidden md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li
                key={item.href}
                className={`${style.lists} lists group relative`}
              >
                <div
                  className={`
                    absolute w-full h-full bg-inherit transition-all duration-300 ease-in-out
                    ${item.extraClass || ""} 
                    ${isActive ? "translate-y-0 blur-none" : "blur-lg -translate-y-20 group-hover:translate-y-0 group-hover:blur-none"}
                  `}
                ></div>
                <Link
                  href={item.href}
                  className={`relative z-10 block transition-colors duration-300 ${isActive ? "text-black font-semibold" : "text-slate-100 hover:text-white"}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      {/* nav header end */}

      {/* MOBILE MENU CONTAINER */}
      <section
        className={`
          ${style.containerNavDrop} 
          fixed h-screen w-full z-50 flex justify-center items-center
          transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] shadow-2xl
          ${isOpen ? "translate-y-0 translate-x-0 rounded-none" : "-translate-y-full -translate-x-full rounded-b-[100%]"}
        `}
      >
        <ul className="flex flex-col justify-center gap-6">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              /* PERBAIKAN: key dipindahkan ke komponen paling luar (Magnet) */
              <Magnet
                key={item.href}
                padding={50}
                disabled={false}
                magnetStrength={10}
              >
                <li
                  style={{
                    transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                  }}
                  className={`
                    ${style.lists} lists group relative flex justify-center
                    transition-all duration-500 ease-in-out
                    ${
                      isOpen
                        ? "translate-x-0 translate-y-0 opacity-100 blur-none"
                        : "-translate-x-10 translate-y-10 opacity-0 blur-sm"
                    }
                  `}
                >
                  <div
                    className={`
                    absolute w-full h-full bg-inherit transition-all duration-300 ease-in-out
                    ${item.extraClass || ""} 
                    ${isActive ? "blur-none" : "blur-lg group-hover:blur-none"}
                  `}
                  ></div>

                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                    relative z-10 block lg:text-2xl sm:text-xl transition-colors duration-300
                    ${isActive ? "text-black font-bold" : "text-white"}
                  `}
                  >
                    {item.label}
                  </Link>
                </li>
              </Magnet>
            );
          })}
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
