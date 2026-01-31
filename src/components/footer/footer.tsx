import style from "./footer.module.css";
import font from "@/app/my-css.module.css";
// import { usePathname } from "next/navigation";
import Link from "next/link";
import LightRays from "@/components/LightRays/LightRays";
import IconSosmed from "@/components/iconSosmed/IconSosmed";

const Footer = () => {
  const navItems = [
    { label: "Home", href: "/", extraClass: "menuActive" },
    { label: "iLLustrator", href: "/iLLustrator" },
    { label: "Front-End", href: "/front-end" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const email = "dimaswidysaputra41@gmail.com";
  const subject = "Halo Widy";
  const body = "Saya ingin berdiskusi tentang...";

  const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

  return (
    <footer className={`${style.containerFooter} w-full z-20 relative`}>
      <section className="w-full h-120 relative">
        {/* background */}
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <LightRays
            raysOrigin="bottom-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={1}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>
        {/* konten */}
        <div className="absolute max-width-custom  m-auto h-full w-full inset-0  z-20 flex flex-col">
          <section className="w-full flex flex-1 md:flex-row">
            <div className="w-full flex flex-col gap-7 h-full md:w-[70%] pl-2">
              <h1 className="text-[3em] md:text-[4em] font-extrabold main-font">
                Let`s discuss your project 🚀
              </h1>
              <a
                href={mailtoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="globalButton"
              >
                Contact Me
              </a>
              {/* container icon sosmed */}
              <div className="flex gap-3">
                {IconSosmed(
                  "https://github.com/dimaswidysap",
                  "https://cdn.simpleicons.org/github/ffff",
                  "bg-primary",
                )}
                {IconSosmed(
                  "https://www.instagram.com/dimaswidysaputraa/",
                  "https://cdn.simpleicons.org/instagram/ffff",
                  "bg-primary",
                )}
                {IconSosmed(
                  "https://www.facebook.com/dimaswidysaputra.dimaswidysaputra",
                  "https://cdn.simpleicons.org/facebook/ffff",
                  "bg-primary",
                )}
                {IconSosmed(
                  "https://www.tiktok.com/@segogotol",
                  "https://cdn.simpleicons.org/tiktok/ffff",
                  "bg-primary",
                )}
              </div>
            </div>
            <div className="hidden md:flex w-[30%] h-full md:flex-col md:items-center md:gap-6 pt-12">
              <header className="text-[2em] font-extrabold main-font">
                MENU
              </header>
              <ul className="flex flex-col items-center gap-2">
                {navItems.map((item) => {
                  // const isActive = pathname === item.href;

                  return (
                    <li
                      key={item.href}
                      className={`${style.lists} ${font.montserrat} main-font font-bold text-[1.2em]`}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  );
                })}
              </ul>
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
