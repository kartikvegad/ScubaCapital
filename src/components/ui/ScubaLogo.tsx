import Image from "next/image";

type ScubaLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "default" | "white";
};

const LOGO_SOURCES = {
  default: "/scuba-capital-logo.svg",
  white: "/scuba-capital-logo-white.svg",
} as const;

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
      width={271}
      height={193}
      priority={priority}
      className={className}
      draggable={false}
    />
  );
}
