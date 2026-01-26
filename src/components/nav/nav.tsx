import Link from "next/link";
import style from "./nav.module.css";

const Navbar = () => {
  return (
    <nav className="absolute w-full flex  justify-center ">
      <section className="w-full max-width-custom ">
        <ul className="flex justify-center gap-2">
          <li className={`${style.lists} lists group`}>
            <div className="kudaCuki group-hover:translate-y-0 group-hover:blur-none blur-lg -translate-y-16"></div>
            <Link href="/">Home</Link>
          </li>
          <li className={`${style.lists} lists group`}>
            <div className="group-hover:translate-y-0 group-hover:blur-none blur-lg -translate-y-16"></div>
            <Link href="/iLLustrator">iLLustrator</Link>
          </li>
          <li className={`${style.lists} lists group`}>
            <div className="group-hover:translate-y-0 group-hover:blur-none blur-lg -translate-y-16"></div>
            <Link href="/front-end">Front-End</Link>
          </li>
          <li className={`${style.lists} lists group`}>
            <div className="group-hover:translate-y-0 group-hover:blur-none blur-lg -translate-y-16"></div>
            <Link href="/about">About</Link>
          </li>
          <li className={`${style.lists} lists group`}>
            <div className="group-hover:translate-y-0 group-hover:blur-none blur-lg -translate-y-16"></div>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
