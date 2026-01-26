"use client"; // 1. Wajib untuk penggunaan hooks di App Router

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./nav.module.css";

const Navbar = () => {
  const pathname = usePathname();
  const navItems = [
    { label: "Home", href: "/", extraClass: "menuActive" },
    { label: "iLLustrator", href: "/iLLustrator" },
    { label: "Front-End", href: "/front-end" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="absolute w-full flex justify-center z-40 overflow-hidden">
      <div className={style.containerHam}></div>
      <section className="w-full max-width-custom">
        <ul className="justify-center gap-2 hidden md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li
                key={item.href}
                className={`${style.lists} lists group relative`}
              >
                {}
                <div
                  className={`
                    absolute w-full h-full bg-inherit transition-all duration-300 ease-in-out
                    ${item.extraClass || ""} 
                    ${
                      isActive
                        ? "translate-y-0 blur-none"
                        : "blur-lg -translate-y-20 group-hover:translate-y-0 group-hover:blur-none"
                    }
                  `}
                ></div>

                <Link href={item.href} className="relative z-10 block">
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <section
        className={`${style.containerNavDrop} fixed h-screen w-full  z-50 flex justify-center items-center`}
      >
        <ul className="flex flex-col justify-center gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li
                key={item.href}
                className={`${style.lists} lists group relative flex justify-center`}
              >
                {}
                <div
                  className={`
                    absolute w-full h-full bg-inherit transition-all duration-300 ease-in-out
                    ${item.extraClass || ""} 
                    ${
                      isActive
                        ? " blur-none"
                        : "blur-lg  group-hover:translate-y-0 group-hover:blur-none"
                    }
                  `}
                ></div>

                <Link
                  href={item.href}
                  className="relative z-10 block lg:text-2xl sm:text-xl"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
