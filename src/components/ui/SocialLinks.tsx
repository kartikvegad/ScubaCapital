import { siteConfig } from "@/lib/constants";
import { MediumLogo } from "@/components/ui/MediumLogo";

type SocialLinksProps = {
  className?: string;
  variant?: "light" | "dark";
};

type IconProps = {
  className?: string;
  inverted?: boolean;
};

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M13.5 22v-8h2.7l.4-3.2H13.5V9.1c0-.9.3-1.6 1.7-1.6h1.7V4.5c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.6V10.8H7v3.2h2.7v8h3.8z" />
    </svg>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M6.5 9.5h3.2v11H6.5V9.5zm1.6-4.8a1.85 1.85 0 110 3.7 1.85 1.85 0 010-3.7zM10.3 9.5h3.1v1.5h.1c.4-.8 1.5-1.6 3.1-1.6 3.3 0 3.9 2.2 3.9 5v5.1h-3.2v-4.5c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4v4.6h-3.2V9.5z" />
    </svg>
  );
}

function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.4a2.5 2.5 0 00-1.8 1.8C2 9 2 12 2 12s0 3 .4 4.8a2.5 2.5 0 001.8 1.8C6 19 12 19 12 19s6 0 7.8-.4a2.5 2.5 0 001.8-1.8c.4-1.8.4-4.8.4-4.8s0-3-.4-4.8zM10 15.5V8.5l5.2 3.5L10 15.5z" />
    </svg>
  );
}

function MediumIcon({ className, inverted = false }: IconProps) {
  return (
    <MediumLogo
      className={`${className ?? ""}${inverted ? " brightness-0 invert" : ""}`}
    />
  );
}

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const socialItems = [
  { id: "instagram", label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { id: "facebook", label: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
  { id: "linkedin", label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedInIcon },
  { id: "youtube", label: "YouTube", href: siteConfig.social.youtube, Icon: YouTubeIcon },
  { id: "medium", label: "Medium", href: siteConfig.social.medium, Icon: MediumIcon },
  { id: "whatsapp", label: "WhatsApp", href: siteConfig.social.whatsapp, Icon: WhatsAppIcon },
] as const;

export function SocialLinks({ className = "", variant = "light" }: SocialLinksProps) {
  const baseClass =
    variant === "light"
      ? "text-white/70 transition-colors hover:text-gold-light"
      : "text-navy/60 transition-colors hover:text-green";

  const ringClass =
    variant === "light"
      ? "ring-white/15 bg-white/10 hover:bg-white/15"
      : "ring-border bg-white hover:bg-[#f4f8ec]";

  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {socialItems.map(({ id, label, href, Icon }) => (
        <li key={id}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`SCUBA CAPITAL on ${label}`}
            className={`flex size-10 items-center justify-center rounded-full ring-1 ${ringClass} ${baseClass}`}
          >
            {id === "medium" ? (
              <MediumIcon className="size-4.5" inverted={variant === "light"} />
            ) : (
              <Icon className="size-4.5" />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
