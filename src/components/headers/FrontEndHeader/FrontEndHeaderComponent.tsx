import { JetBrains_Mono } from "next/font/google";
import Terminal from "./Terminal";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

const FrontEndHeaderComponent = () => {
  return (
    <header className="w-full h-screen bg-primary flex justify-center">
      <section className="w-full max-w-7xl h-screen m-auto fixed  flex flex-col md:flex-row items-center justify-center px-4">
        {/* Konten teks di sebelah kiri (atas di mobile) */}
        <div className="w-full md:w-1/2 flex items-center justify-start md:justify-center mb-8 md:mb-0">
          <div className="montserrat text-center md:text-left">
            <h1 className="main-font font-black text-4xl md:text-6xl lg:text-7xl">
              Proyek Unggulan 💻
            </h1>
            <p className="main-font text-lg md:text-xl mt-4">
              Menampilkan proyek pilihan dalam Pengembangan Web
              <span className="text-blue-700">.</span>
            </p>
          </div>
        </div>

        {/* Konten terminal di sebelah kanan (bawah di mobile) */}
        <div className="w-full md:w-1/2 flex items-center justify-end">
          <div className="w-full md:w-[90%] lg:w-[80%] relative z-20 aspect-square bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-800">
            <header className="h-10 w-full bg-gray-700 absolute">
              <div className="h-full flex gap-2 items-center pl-4">
                <span className="bg-orange-700 inline-flex h-[30%] rounded-full aspect-square"></span>
                <span className="bg-yellow-600 inline-flex h-[30%] rounded-full aspect-square"></span>
                <span className="bg-green-400 inline-flex h-[30%] rounded-full aspect-square"></span>
              </div>
            </header>

            <div
              className={`${jetbrainsMono.className} pt-10 space-y-4 h-full overflow-auto`}
            >
              <Terminal />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default FrontEndHeaderComponent;
