"use client";
import { useState } from "react";
import Link from "next/link";
import style from "./nav.module.css";
// import Image from "next/image";
// import Magnet from "../ReacbitsComponents/Magnet/Magnet";
import { usePathname } from "next/navigation";
// import IconSosmed from "../iconSosmed/IconSosmed";
import {
  Home,
  PenTool,
  Laptop,
  Grid2X2,
  Menu,
  UserRound,
  Mail,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // const linkIcons = [
  //   {
  //     linkIcon: "https://cdn.simpleicons.org/github/ffff",
  //     href: "https://github.com/dimaswidysap",
  //   },
  //   {
  //     linkIcon: "https://cdn.simpleicons.org/instagram/ffff",
  //     href: "https://www.instagram.com/dimaswidysaputraa/",
  //   },
  //   {
  //     linkIcon: "https://cdn.simpleicons.org/facebook/ffff",
  //     href: "https://www.facebook.com/dimaswidysaputra.dimaswidysaputra",
  //   },
  //   {
  //     linkIcon: "https://cdn.simpleicons.org/tiktok/ffff",
  //     href: "https://www.tiktok.com/@segogotol",
  //   },
  // ];

  const navItems = [
    { label: "Beranda", href: "/", extraClass: "menuActive", icon: "<Home />" },
    { label: "iLLustrator", href: "/iLLustrator" },
    { label: "Front-End", href: "/front-end" },
    { label: "Tentang saya", href: "/about" },
    { label: "Kontak", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`${style.shadow} w-full z-100 fixed top-0 left-0 right-0 flex justify-center  h-14`}
    >
      <nav className="w-[90%] h-full text-[0.8em] md:text-[0.9em] flex justify-between items-center main-font montserrat font-black">
        <div>
          <Link
            className="flex items-center gap-0.5 bg-primary px-2 py-1 rounded-md"
            href="/"
          >
            <Home size={18} />
            <p className="hidden md:flex">Beranda</p>
          </Link>
        </div>
        <div className="h-full">
          <div className="flex gap-4  h-full items-center">
            <Link
              className="hidden md:flex gap-0.5 items-center"
              href="/iLLustrator"
            >
              <PenTool size={15} />
              <p>Illustrator</p>
            </Link>
            <Link
              className="hidden md:flex gap-0.5 items-center"
              href="/front-end"
            >
              <Laptop size={15} />
              <p> Front-End</p>
            </Link>

            <div className="h-full flex items-center relative ">
              <button
                onClick={toggleMenu}
                className="flex relative gap-0.5 items-center h-max cursor-pointer bg-secondary px-2 py-1 rounded-md"
              >
                <Grid2X2 size={15} />
                <p>Lainya</p>
              </button>
              <section
                className={`${style.shadowv2} ${isOpen ? "flex" : "hidden"} absolute py-12 px-3.5 gap-4  top-full  flex-col  w-[250%]  right-0`}
              >
                {navItems.map((items) => {
                  const hiddenLabels = ["beranda", "illustrator", "front-end"];

                  const isHidden = hiddenLabels.includes(
                    items.label.toLowerCase(),
                  );

                  const getIcon = (label: string) => {
                    switch (label.toLowerCase()) {
                      case "beranda":
                        return <Home size={16} className="mr-2" />;
                      case "illustrator":
                        return <PenTool size={16} className="mr-2" />;
                      case "front-end":
                        return <Laptop size={16} className="mr-2" />;
                      case "tentang saya":
                        return <UserRound size={16} className="mr-2" />;
                      case "kontak":
                        return <Mail size={16} className="mr-2" />;
                      default:
                        return <Menu size={16} className="mr-2" />;
                    }
                  };

                  return (
                    <li
                      className={`list-none ${isHidden ? "flex md:hidden" : ""} relative `}
                      key={items.label}
                    >
                      <Link href={items.href} className="flex items-center">
                        {getIcon(items.label)}
                        {items.label}
                      </Link>

                      <span
                        className={`${pathname === items.href ? "flex" : "hidden"} absolute top-full h-px w-full bg-main-font`}
                      ></span>
                    </li>
                  );
                })}
              </section>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
