import style from "./footer.module.css";
import font from "@/app/my-css.module.css";
// import { usePathname } from "next/navigation";
import Link from "next/link";
import LightRays from "@/components/LightRays/LightRays";

const Footer = () => {
  const navItems = [
    { label: "Home", href: "/", extraClass: "menuActive" },
    { label: "iLLustrator", href: "/iLLustrator" },
    { label: "Front-End", href: "/front-end" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];
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
            <div className="w-full h-full md:w-[70%] pl-2">
              <h1 className="text-[3em] md:text-[4em] font-extrabold main-font">
                Lets discuss your project 🚀
              </h1>
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
                      className={`${style.lists} main-font font-bold text-[1.2em]`}
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
