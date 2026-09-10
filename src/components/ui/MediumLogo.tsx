import Image from "next/image";

type MediumLogoProps = {
  className?: string;
};

export function MediumLogo({ className }: MediumLogoProps) {
  return (
    <Image
      src="/medium.svg"
      alt=""
      aria-hidden
      width={100}
      height={100}
      className={className}
      draggable={false}
    />
  );
}
