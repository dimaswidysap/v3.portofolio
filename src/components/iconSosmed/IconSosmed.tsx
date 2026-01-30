import Image from "next/image";
import Link from "next/link";

const IconSosmed = (linkSosmed: string, linkIcon: string, bgColor: string) => {
  return (
    <figure className={`${bgColor} relative w-12 aspect-square rounded-full`}>
      <Link target="_blanks" href={linkSosmed}>
        <Image className="p-2" src={linkIcon} alt="person" fill unoptimized />
      </Link>
    </figure>
  );
};

export default IconSosmed;
