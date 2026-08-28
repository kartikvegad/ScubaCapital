import { navLinks, siteConfig } from "@/lib/constants";
import { DotLogo } from "@/components/ui/DotLogo";

export function Footer() {
  return (
    <footer className="bg-gradient-brand text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="font-display text-xl font-bold">SCUBA CAPITAL</p>
            <p className="mt-3 text-sm text-gold-light">{siteConfig.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              {siteConfig.footerDescriptor}
            </p>
            <p className="mt-4 text-sm text-white/45">
              AMFI ARN: {siteConfig.amfiArn}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              Sitemap
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-gold-light"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-gold-light"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="leading-relaxed">{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-4 border-t border-white/10 pt-8">
          <p className="font-display text-sm font-semibold text-white/80">
            {siteConfig.brandStatement}
          </p>
          <p className="text-xs leading-relaxed text-white/40">
            <strong className="text-white/55">Important Disclaimer:</strong>{" "}
            {siteConfig.disclaimer}
          </p>
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {siteConfig.legalName}. All Rights
            Reserved. {siteConfig.philosophyLine}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            <span className="text-xs text-white/35">Designed by</span>
            <a
              href="https://dot-site.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DOT — visit website"
              className="transition-opacity hover:opacity-80"
            >
              <DotLogo className="h-5 w-auto text-white/80" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
