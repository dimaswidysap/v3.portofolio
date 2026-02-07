import Image from "next/image";
import Link from "next/link";
const ContactHeroSection = () => {
  return (
    <main className="w-full h-360 md:h-screen xl:h-200 bg-primary overflow-hidden">
      <section className=" h-full w-full ">
        <div className="w-full h-[50%] max-width-custom m-auto flex items-center">
          <header className="px-4 relative w-full">
            <h1 className="text-[2.5em] md:text-[3em] montserrat font-black main-font relative z-20">
              Mari Terhubung<span className="text-blue-600">.</span>
            </h1>
            <span className="montserrat main-font relative z-20">
              Ingin terhubung? Saya akan senang mendengar kabar dari Anda. Di
              sini Anda dapat menghubungi saya
              <span className="text-blue-700">.</span>
            </span>
            <div className="absolute right-0 top-0 h-140 aspect-square -translate-y-[25%] translate-x-[25%] opacity-55">
              <Image
                loading="eager"
                className="object-cover"
                src="/asset/pageContact/bendera.png"
                alt="bendera-indonesia"
                fill
                unoptimized
              />
            </div>
          </header>
        </div>
        <div className="w-full h-[50%] bg-secondary relative z-20">
          <div className="max-width-custom h-full m-auto">
            <div className="flex flex-col xl:flex-row gap-4 w-full items-center justify-center px-4">
              {/* card */}
              <section className="w-[80%] max-w-[30rem] border-2 border-slate-700 h-[10rem] bg-primary -translate-y-[2rem] rounded-2xl shadow-2xl">
                <header className="w-full main-font flex gap-2 justify-center py-4 flex-col items-center relative">
                  <Link
                    href="mailto:dimaswidysaputra41@email.com"
                    target="_blanks"
                    className="w-[2rem] relative aspect-square"
                  >
                    <Image
                      className="object-cover"
                      src="https://cdn.simpleicons.org/gmail"
                      alt="bendera-indonesia"
                      fill
                      unoptimized
                    />
                  </Link>
                  <span className="montserrat font-bold">
                    Kontak saya lewat Email
                  </span>
                  <Link
                    target="_blanks"
                    href="mailto:dimaswidysaputra41@email.com"
                  >
                    @dimaswidysaputraa41@gmail.com
                  </Link>
                </header>
              </section>
              {/* card */}
              <section className="w-[80%] max-w-[30rem] border-2 border-slate-700 h-[10rem] bg-primary -translate-y-[2rem] rounded-2xl shadow-2xl">
                <header className="w-full main-font flex gap-2 justify-center py-4 flex-col items-center relative">
                  <Link
                    href="https://www.instagram.com/widyportofolio/"
                    target="_blanks"
                    className="w-[2rem] relative aspect-square"
                  >
                    <Image
                      className="object-cover"
                      src="https://cdn.simpleicons.org/instagram"
                      alt="bendera-indonesia"
                      fill
                      unoptimized
                    />
                  </Link>
                  <span className="montserrat font-bold">
                    Kontak saya lewat Instagram
                  </span>
                  <Link
                    target="_blanks"
                    href="https://www.instagram.com/widyportofolio/"
                  >
                    @dimaswidysaputraa
                  </Link>
                </header>
              </section>
              {/* card */}
              <section className="w-[80%] max-w-[30rem] border-2 border-slate-700 h-[10rem] bg-primary -translate-y-[2rem] rounded-2xl shadow-2xl">
                <header className="w-full main-font flex gap-2 justify-center py-4 flex-col items-center relative">
                  <Link
                    href="https://wa.me/+6281252966557"
                    target="_blanks"
                    className="w-[2rem] relative aspect-square"
                  >
                    <Image
                      className="object-cover"
                      src="https://cdn.simpleicons.org/whatsapp"
                      alt="bendera-indonesia"
                      fill
                      unoptimized
                    />
                  </Link>
                  <span className="montserrat font-bold">
                    Kontak saya lewat WhatsApp
                  </span>
                  <Link target="_blanks" href="https://wa.me/+6281252966557">
                    +62 812 529 665 57
                  </Link>
                </header>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactHeroSection;
