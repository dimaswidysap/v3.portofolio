import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Globe, Github } from "lucide-react";
import { projects } from "@/dataProjects/front-end/projects";

const archive = () => {
  return (
    <main className="w-full h-screen bg-primary">
      <header className="max-width-custom m-auto px-4">
        <Link className="flex main-font" href="/front-end">
          <ArrowLeft />
          <span className="text-[1em] py-4 md:text-[2em] font-black">
            Kembali<span className="text-blue-700">.</span>{" "}
          </span>
        </Link>
      </header>
      <div className="max-width-custom pt-32  m-auto px-4">
        <table className="w-full border-collapse text-sm text-slate-400">
          <thead>
            <tr className="text-left border-b border-slate-800/50 main-font">
              <th className="py-4 font-medium text-slate-200">Tahun</th>
              <th className="py-4 font-medium text-slate-200">Judul</th>
              <th className="py-4 font-medium text-slate-200 hidden md:table-cell">
                Teknologi
              </th>
              <th className="py-4 font-medium text-slate-200">Tautan</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((items) => {
              return (
                <tr
                  key={items.id}
                  className="group border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors main-font"
                >
                  <td className="py-4 align-top text-slate-500">
                    {items.year}
                  </td>
                  <td className="py-4 align-top font-semibold text-slate-200 group-hover:text-amber-200 transition-colors">
                    {items.title}
                  </td>
                  <td className="py-4 align-top hidden md:table-cell">
                    <div className="flex flex-wrap gap-2">
                      {items.tecnology.split(",").map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-full bg-slate-800 text-[10px] text-amber-100/70 border border-slate-700"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 align-top">
                    <div className="flex gap-3 items-center">
                      <a
                        href={items.linkRep}
                        target="_blank"
                        className="hover:text-slate-200 transition-colors"
                        title="GitHub"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={items.linkDemo}
                        target="_blank"
                        className="hover:text-slate-200 transition-colors"
                        title="Live Demo"
                      >
                        <Globe size={18} />
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default archive;
