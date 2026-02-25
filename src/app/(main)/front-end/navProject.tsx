import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const navProject = () => {
  return (
    <nav className="absolute w-full pt-4">
      <section className="max-width-custom m-auto px-4">
        <Link
          href="/front-end"
          className="flex main-font font-black md:text-[1.5rem]"
        >
          <ArrowLeft /> <span>Kembali</span>
          <span className="text-blue-700">.</span>
        </Link>
      </section>
    </nav>
  );
};
export default navProject;
