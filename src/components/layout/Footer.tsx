import { siteConfig, navLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-soft">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-xl font-bold">
              Scuba<span className="text-accent">.</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              The advisory firm helping professionals build, protect, and grow
              wealth with clarity and confidence.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Sitemap</h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="hover:text-foreground"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-3 border-t border-border pt-8">
          <p className="text-xs leading-relaxed text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            AMFI-registered distributor of Mutual Funds ({siteConfig.amfiArn}).
            Mutual fund investments are subject to market risks; read all
            scheme-related documents carefully. Past performance is not
            indicative of future returns.
          </p>
        </div>
      </div>
    </footer>
  );
}
