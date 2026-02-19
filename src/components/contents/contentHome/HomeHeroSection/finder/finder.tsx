// finder/finder.tsx (ubah ekstensi ke .tsx jika menggunakan TypeScript)
import Style from "./finder.module.css";
import { Folder, FileCode } from "lucide-react";
import Link from "next/link";

import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const FinderComponent = () => {
  // Tambahkan type untuk props
  return (
    <section
      className={`${Style.finder} ${robotoMono.className}  w-1/2 overflow-hidden absolute right-0 top-0 h-200 rounded-2xl`}
    >
      <header className="absolute w-full h-10 bg-[#333] flex items-center">
        <div className="h-full flex gap-1.5 items-center pl-2">
          <span className="h-3 aspect-square bg-[#ff5f56] rounded-full"></span>
          <span className="h-3 aspect-square bg-[#ffbd2e] rounded-full"></span>
          <span className="h-3 aspect-square bg-[#27c93f] rounded-full"></span>
        </div>
      </header>
      {/* konten */}
      <section className="w-full h-full mt-10 flex">
        <nav className={`${Style.navFinder} h-full bg-[#242424]`}>
          <ul className="w-full pl-2 pt-2 pr-4">
            <li className="flex gap-2 main-font items-center w-full">
              <Folder size={18} />
              <span className="text-[0.9em]">Shared</span>
            </li>
          </ul>
        </nav>
        <section className="w-full flex-1 bg-[#242424]">
          <ul className="pt-3 pl-4">
            <Link
              href="/pratic"
              className="flex gap-1 items-center w-full overflow-hidden"
            >
              {/* Flex-shrink-0 memastikan ikon tidak gepeng saat teks memanjang */}
              <FileCode size={18} className="main-font shrink-0" />

              <span className="main-font  font-light truncate text-[0.9em]">
                example simple project website.html
              </span>
            </Link>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default FinderComponent;
