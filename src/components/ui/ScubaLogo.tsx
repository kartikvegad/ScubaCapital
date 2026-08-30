import Image from "next/image";

const LOGO_SOURCES = {
  default: "/scuba-capital-logo.svg",
  white: "/scuba-capital-logo-white.svg",
  navbar: "/images/Scuba.anil2-04.png",
} as const;

type ScubaLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: keyof typeof LOGO_SOURCES;
};

export function ScubaLogo({
  className,
  priority = false,
  variant = "default",
}: ScubaLogoProps) {
  return (
    <Image
      src={LOGO_SOURCES[variant]}
      alt=""
      aria-hidden
      width={variant === "navbar" ? 320 : 271}
      height={variant === "navbar" ? 96 : 193}
      priority={priority}
      className={className}
      draggable={false}
    />
  );
}
