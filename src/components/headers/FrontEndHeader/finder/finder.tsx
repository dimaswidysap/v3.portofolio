// finder/finder.tsx (ubah ekstensi ke .tsx jika menggunakan TypeScript)
import Style from "./finder.module.css";
import { Folder, FileCode } from "lucide-react";
import Link from "next/link";

interface FinderComponentProps {
  onClose: () => void; // Tipe data untuk onClose: fungsi yang tidak menerima parameter dan tidak mengembalikan nilai
}

const FinderComponent: React.FC<FinderComponentProps> = ({ onClose }) => {
  // Tambahkan type untuk props
  return (
    <section
      className={`${Style.finder} outline-1 outline-slate-50/10 overflow-hidden fixed h-82 md:w-[80%] lg:w-200 bg-[#1e1e1e] bottom-0 mb-2.5 left-[50%] -translate-x-[50%] z-50 rounded-2xl`}
    >
      <header className="absolute w-full h-10 bg-[#333] flex items-center">
        <div className="h-full flex gap-1.5 items-center pl-2">
          <span
            className="h-3 aspect-square bg-[#ff5f56] rounded-full cursor-pointer hover:bg-[#ff3b2e] transition-colors duration-200"
            onClick={onClose} // Panggil onClose saat diklik
          ></span>
          <span className="h-3 aspect-square bg-[#ffbd2e] rounded-full"></span>
          <span className="h-3 aspect-square bg-[#27c93f] rounded-full"></span>
        </div>
      </header>
      {/* konten */}
      <section className="w-full h-full mt-10 flex">
        <nav className={`${Style.navFinder} w-40 h-full bg-[#242424]`}>
          <ul className="w-full pl-2 pt-2">
            <li className="flex gap-2 main-font items-center w-full">
              <Folder size={20} />
              <span className="montserrat">Shared</span>
            </li>
          </ul>
        </nav>
        <section className="w-full flex-1">
          <ul className="pt-3 pl-4">
            <Link href="/pratic" className="flex gap-1 items-center">
              <FileCode className="main-font" />
              <span className="main-font montserrat font-light">
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
