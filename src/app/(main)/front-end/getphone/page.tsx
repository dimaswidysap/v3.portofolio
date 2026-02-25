import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import NavProject from "../navProject";
import { projects } from "@/dataProjects/front-end/projects";

const project = projects.find((items) => items.id === "PJ001");
const images = project?.image as string[];

const getphonePage = () => {
  if (!project) return null;

  return (
    <main key={project.id} className="w-full bg-primary">
      <NavProject />
      <section className="max-width-custom flex flex-col md:flex-row px-4 m-auto">
        <div className="w-full md:w-1/2  h-full pt-60 flex flex-col gap-10">
          <span className="inline-flex flex-col">
            <p className="font-black tracking-[1rem] main-font opacity-65">
              <span>PROYEK</span>
              <span className="text-blue-700">.</span>
            </p>
            <p className="text-[2em] main-font">{project.title}</p>
          </span>
          <span className="inline-flex flex-col w-full">
            <p className="font-black tracking-[1rem] main-font opacity-65">
              <span>TEKNOLOGI</span>
              <span className="text-blue-700">.</span>
            </p>
            <p className="text-[1.5em] main-font">{project.tecnology}</p>
          </span>
          <span className="inline-flex flex-col w-full">
            <p className="font-black tracking-[1rem] main-font opacity-65">
              <span>TAHUN</span>
              <span className="text-blue-700">.</span>
            </p>
            <p className="text-[1.5em] main-font">{project.year}</p>
          </span>
          <span className="inline-flex flex-col w-full">
            <p className="font-black tracking-[1rem] main-font opacity-65">
              <span>PERTINJAU</span>
              <span className="text-blue-700">.</span>
            </p>
            <p className="text-[1em] main-font">
              <Link
                href={project.linkDemo}
                className="flex gap-1.5 text-blue-700 items-center"
              >
                <span className="text-[1.2em]">Live demo</span>
                <ExternalLink size={19} />
              </Link>
            </p>
          </span>
        </div>
        <div className="w-full md:w-1/2 md:pt-60  pt-40">
          <span className="inline-flex flex-col w-full">
            <p className="font-black tracking-[1rem] main-font opacity-65">
              <span>DESKRIPSI</span>
              <span className="text-blue-700">.</span>
            </p>
            <p className="text-[1em] main-font flex flex-col gap-4">
              <span>
                GetPhone adalah website penyedia layanan rekomendasi smarphone.
                Website ini di rancang memberikan rekomendasi smartphone kepada
                orang orang yang memiliki bidang tertentu, seperti smartphone
                untuk gaming, fotografer dan profesi lainya.
              </span>
              <span>
                Website ini dibangun menggunakan metode Backward chaining,
                Dataset dan Rulebase aplikasi website ini berasal dari conten{" "}
                <Link
                  href="https://www.youtube.com/c/GadgetIn"
                  className="underline"
                >
                  David GadgetIn
                </Link>{" "}
                sebagai Knowledge Engineer.
              </span>
            </p>
          </span>
        </div>
      </section>
      <section className="max-width-custom items-center flex flex-col m-auto px-4 gap-10 pt-20 pb-52">
        {Array.isArray(images) &&
          images.map((imgUrl, index) => (
            <div
              key={index}
              className="w-full md:w-[80%] aspect-16/10 overflow-hidden rounded-xl shadow-lg relative"
            >
              <Image
                loading="lazy"
                className="object-cover w-full h-auto "
                src={`/asset/pageFrontend/imageProjects/${imgUrl}`}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                unoptimized
              />
            </div>
          ))}
      </section>
    </main>
  );
};

export default getphonePage;
