import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-bold">
              SCUBA CAPITAL<span className="text-blue">.</span>
            </p>
            <p className="mt-1 text-sm text-muted">{siteConfig.tagline}</p>
          </div>
          <p className="text-xs text-muted">
            AMFI ARN: {siteConfig.amfiArn}
          </p>
        </div>
        <p className="mt-8 text-center text-[11px] leading-relaxed text-muted md:text-left">
          {siteConfig.disclaimer}
        </p>
        <p className="mt-4 text-center text-xs text-muted/70 md:text-left">
          © {new Date().getFullYear()} {siteConfig.legalName}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
