import Image from "next/image";

const IconTech = (linkIcon: string, bgColor: string) => {
  return (
    <figure className={`${bgColor} relative w-12 aspect-square rounded-full`}>
      <Image className="p-2" src={linkIcon} alt="person" fill unoptimized />
    </figure>
  );
};

export default IconTech;
