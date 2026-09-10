import { navLinks, siteConfig } from "@/lib/constants";
import { DotLogo } from "@/components/ui/DotLogo";
import { SocialLinks } from "@/components/ui/SocialLinks";
export function Footer() {
  return (
    <footer className="bg-gradient-brand relative overflow-hidden text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[min(75vw,720px)] w-[min(100vw,960px)] -translate-x-1/2 translate-y-[18%] bg-[url('/scuba-capital-logo-white.svg')] bg-contain bg-center bg-no-repeat opacity-[0.09]"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-1">
            <a
              href="/"
              aria-label="SCUBA CAPITAL home"
              className="font-display inline-block text-lg font-bold transition-opacity hover:opacity-90"
            >
              SCUBA CAPITAL
            </a>
            <p className="mt-3 text-sm text-gold-light">{siteConfig.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              {siteConfig.footerDescriptor}
            </p>
            <p className="mt-4 text-sm text-white/45">
              AMFI ARN: {siteConfig.amfiArn}
            </p>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                Follow Us
              </p>
              <SocialLinks className="mt-3" />
            </div>
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
              Blog
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="/blog"
                  className="text-sm text-white/65 transition-colors hover:text-gold-light"
                >
                  All Articles
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/65 transition-colors hover:text-gold-light"
                >
                  Medium
                </a>
              </li>
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
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            {siteConfig.legalName}. All Rights
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
