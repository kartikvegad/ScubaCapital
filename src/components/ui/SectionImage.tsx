import Image from "next/image";

type SectionImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function SectionImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: SectionImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="pointer-events-none object-cover select-none"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
