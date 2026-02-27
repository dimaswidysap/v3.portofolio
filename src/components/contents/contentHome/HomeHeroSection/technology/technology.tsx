import Image from "next/image";
import Style from "./technology.module.css";

const Technology = () => {
  const tech = [
    {
      linkIcon: "https://cdn.simpleicons.org/HTML5",
      title: "HTML",
    },
    { linkIcon: "https://cdn.simpleicons.org/CSS", title: "CSS" },
    {
      linkIcon: "https://cdn.simpleicons.org/Tailwindcss",
      title: "Tailwind CSS",
    },
    { linkIcon: "https://cdn.simpleicons.org/Javascript", title: "Javascript" },
    {
      linkIcon: "https://cdn.simpleicons.org/NEXT.JS/cacaca",
      title: "NEXT JS",
    },
    {
      linkIcon: "https://cdn.simpleicons.org/php",
      title: "PHP",
    },
    { linkIcon: "https://cdn.simpleicons.org/github/cacaca", title: "GitHub" },
  ];
  return (
    <section className="w-full h-full ">
      <h2 className="w-full justify-center items-center flex text-[2em] font-black main-font gap-1.5">
        <span>Saya</span>{" "}
        <span className="text-blue-700">Punya Pengalaman</span>{" "}
        <span>Dengan</span>
      </h2>
      <div className="flex flex-wrap w-full gap-4 justify-center h-max mt-10">
        {tech.map((items) => {
          return (
            <section key={items.title} className=" p-1 relative group">
              <figure className="relative flex justify-center gap-1.5 bg-primary shadow-2xl py-1 pl-1 pr-1 rounded-md items-center">
                <div className="relative p-2 h-14 aspect-square bg-secondary rounded-sm">
                  <Image
                    loading="lazy"
                    className="object-cover p-2"
                    src={items.linkIcon}
                    alt="icon-tech"
                    fill
                    unoptimized
                  />
                </div>
                <p className="font-black main-font">{items.title}</p>
              </figure>
              <span
                className={`${Style.cardOutline} group-hover:opacity-100 group-hover:scale-100 duration-150 ease-in-out scale-80 opacity-0 absolute h-full w-full bg-transparent inset-0 rounded-md`}
              ></span>
            </section>
          );
        })}
      </div>
    </section>
  );
};
export default Technology;
