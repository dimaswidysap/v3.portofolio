import { JetBrains_Mono } from "next/font/google";
import Terminal from "./Terminal";
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

const FrontEndHeaderComponent = () => {
  return (
    <header className="w-full h-screen bg-primary flex justify-center">
      <section className="w-full max-width-custom h-screen m-auto fixed ">
        {/* container fake vs code */}
        <div className="hidden md:flex h-screen w-full absolute items-center inset-0 justify-end ">
          <div className="w-[45%] relative z-20 aspect-square bg-gray-900 mr-[5%] mb-[2%] rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-800">
            <header className="h-10 w-full bg-gray-700 absolute">
              <div className="h-full flex gap-2 items-center pl-4">
                <span className="bg-orange-700 inline-flex h-[30%] rounded-full aspect-square"></span>
                <span className="bg-yellow-600 inline-flex h-[30%] rounded-full aspect-square"></span>
                <span className="bg-green-400 inline-flex h-[30%] rounded-full aspect-square"></span>
              </div>
            </header>

            <div
              className={`${jetbrainsMono.className} pt-10  space-y-4 h-full`}
            >
              <Terminal />
            </div>
          </div>
        </div>
        <div className="h-screen w-full absolute inset-0 pl-4 flex items-center">
          <div className="montserrat">
            <h1 className="main-font font-black text-[3em]">
              Proyek Unggulan 💻
            </h1>
            <p className="main-font">
              Menampilkan proyek pilihan dalam Pengembangan Web.
              <span className="text-blue-700">.</span>
            </p>
          </div>
        </div>
      </section>
    </header>
  );
};

export default FrontEndHeaderComponent;
