import Image from "next/image";
import Link from "next/link";

const IconSosmed = ({
  linkSosmed,
  linkIcon,
}: {
  linkSosmed: string;
  linkIcon: string;
}) => {
  return (
    <figure className="relative">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-12 aspect-square bg-secondary rounded-full overflow-hidden"
        href={linkSosmed}
      >
        <Image
          className="p-2 object-contain"
          src={linkIcon}
          alt="Social Media Icon"
          fill
          unoptimized
        />
      </Link>
    </figure>
  );
};

export default IconSosmed;
