"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import style from "./nav.module.css";
import { usePathname } from "next/navigation";
import {
  Home,
  PenTool,
  Laptop,
  Grid2X2,
  Menu,
  UserRound,
  Mail,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Ref untuk menampung elemen dropdown/kontainer navigasi
  const navRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { label: "Beranda", href: "/" },
    { label: "iLLustrator", href: "/iLLustrator" },
    { label: "Front-End", href: "/front-end" },
    { label: "Tentang saya", href: "/about" },
    { label: "Kontak", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Fungsi untuk menutup menu
  const closeMenu = () => setIsOpen(false);

  // Effect untuk menangani klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Jika menu terbuka DAN klik terjadi di luar elemen yang direferensikan (navRef)
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    // Tambah event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Bersihkan event listener saat komponen unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
    <header
      className={`${style.shadow} w-full z-100 fixed top-0 left-0 right-0 flex justify-center h-14 bg-white`}
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
          <div className="flex gap-4 h-full items-center">
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

            {/* Bungkus area toggle dengan Ref */}
            <div className="h-full flex items-center relative" ref={navRef}>
              <button
                onClick={toggleMenu}
                className="flex relative gap-0.5 items-center h-max cursor-pointer bg-secondary px-2 py-1 rounded-md"
              >
                <Grid2X2 size={15} />
                <p>Lainnya</p>
              </button>

              <section
                className={`${style.shadowv2} ${
                  isOpen ? "flex" : "hidden"
                } absolute py-12 px-3.5 gap-4 top-full flex-col w-[250%] right-0 bg-white`}
              >
                {navItems.map((item) => {
                  const hiddenLabels = ["beranda", "illustrator", "front-end"];
                  const isHidden = hiddenLabels.includes(
                    item.label.toLowerCase(),
                  );

                  return (
                    <li
                      className={`list-none ${isHidden ? "flex md:hidden" : "flex"} relative`}
                      key={item.label}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center w-full"
                        onClick={closeMenu} // Menutup menu saat link diklik
                      >
                        {getIcon(item.label)}
                        {item.label}
                      </Link>

                      <span
                        className={`${
                          pathname === item.href ? "flex" : "hidden"
                        } absolute top-full h-px w-full bg-main-font`}
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
