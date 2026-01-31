import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
const pesan = `"testing"`;
const linkGithub = `"https://github.com/dimaswidysap"`;

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

const FrontEndHeaderComponent = () => {
  return (
    <header className="w-full h-screen bg-primary flex justify-center">
      <section className="w-full max-width-custom h-screen m-auto fixed ">
        {/* container fake vs code */}
        <div className="hidden md:flex h-screen w-full absolute items-center inset-0 justify-end md:items-end">
          <div className="w-[45%] relative z-20 aspect-square bg-gray-900 mr-[5%] mb-[2%] rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-800">
            <header className="h-10 w-full bg-gray-700">
              <div className="h-full flex gap-2 items-center pl-4">
                <span className="bg-orange-700 inline-flex h-[30%] rounded-full aspect-square"></span>
                <span className="bg-yellow-600 inline-flex h-[30%] rounded-full aspect-square"></span>
                <span className="bg-green-400 inline-flex h-[30%] rounded-full aspect-square"></span>
              </div>
            </header>
            <div className={`${jetbrainsMono.className} p-3 `}>
              <div className="flex gap-1 items-center">
                <p className="text-cyan-400">console</p>
                <p className="text-white">.</p>
                <p className="text-yellow-300">log</p>
                <p className="text-purple-400">(</p>
                <p className="text-green-400">{pesan}</p>
                <p className="text-purple-400">)</p>
                <p className="text-white">;</p>
              </div>
            </div>
            <div className={`${jetbrainsMono.className} p-3 `}>
              <div className="flex gap-1 items-center">
                <p className="text-purple-400">const</p>
                <Link
                  target="_blanks"
                  className="text-cyan-400"
                  href="https://github.com/dimaswidysap"
                >
                  gitHub
                </Link>
                <p className="text-red-400">=</p>
                <Link
                  target="_blanks"
                  href="https://github.com/dimaswidysap"
                  className="text-green-400"
                >
                  {linkGithub}
                </Link>
                <p className="text-white">;</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen w-full absolute inset-0 pl-4 flex items-center">
          <div className="montserrat">
            <h1 className="main-font font-black text-[3em]">
              Featured Projects 💻
            </h1>
            <p className="font-bold main-font">
              Showcasing selected projects in Web Development.
            </p>
          </div>
        </div>
      </section>
    </header>
  );
};

export default FrontEndHeaderComponent;
