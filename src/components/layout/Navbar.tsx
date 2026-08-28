"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ctaConfig, navLinks } from "@/lib/constants";
import { ScubaLogo } from "@/components/ui/ScubaLogo";

const HOME_SECTION_TO_HREF: Record<string, string> = {
  about: "/#about",
  philosophy: "/#philosophy",
  services: "/services",
  approach: "/#approach",
  blog: "/blog",
  resources: "/#resources",
  faqs: "/#faqs",
};

const HOME_SECTION_ORDER = [
  "about",
  "philosophy",
  "services",
  "approach",
  "blog",
  "resources",
  "faqs",
] as const;

const SPRING = { type: "spring" as const, stiffness: 260, damping: 30, mass: 0.8 };

function resolveRouteActive(pathname: string, hash: string): string | null {
  if (pathname === "/contact" || pathname === "/contact/portfolio-review") {
    return "/contact";
  }
  if (pathname === "/services") return "/services";
  if (pathname === "/blog" || pathname.startsWith("/blog/")) return "/blog";

  if (pathname === "/" && hash) {
    const href = `/#${hash.replace(/^#/, "")}`;
    if (navLinks.some((link) => link.href === href)) return href;
  }

  return null;
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("");

  const isFormed = !isHome || scrolled || open;
  const heroOpen = isHome && !isFormed;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 48);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function syncFromHash() {
      const routed = resolveRouteActive(pathname, window.location.hash);
      if (routed) setActiveHref(routed);
    }

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [pathname]);

  useEffect(() => {
    const routed = resolveRouteActive(
      pathname,
      typeof window !== "undefined" ? window.location.hash : "",
    );
    if (routed) {
      setActiveHref(routed);
      return;
    }

    if (pathname !== "/") return;

    function updateScrollActive() {
      const marker = window.scrollY + window.innerHeight * 0.32;
      let current = "";

      for (const sectionId of HOME_SECTION_ORDER) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= marker) {
          current = HOME_SECTION_TO_HREF[sectionId];
        }
      }

      if (current) setActiveHref(current);
    }

    updateScrollActive();
    window.addEventListener("scroll", updateScrollActive, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollActive);
  }, [pathname]);

  return (
    <>
      <motion.header
        className="pointer-events-none fixed inset-x-0 top-0 z-[110]"
        animate={{
          paddingLeft: isFormed ? 16 : 24,
          paddingRight: isFormed ? 16 : 24,
          paddingTop: isFormed ? 14 : 22,
        }}
        transition={SPRING}
      >
        <motion.div
          className="pointer-events-auto mx-auto w-full"
          animate={{ maxWidth: isFormed ? 1152 : 1280 }}
          transition={SPRING}
        >
          <motion.nav
            className={`relative flex w-full items-center overflow-hidden px-2 py-2 sm:px-3 sm:py-2.5 ${
              isFormed ? "navbar-glass-bar" : ""
            }`}
            animate={{ borderRadius: isFormed ? 9999 : 0 }}
            transition={SPRING}
          >
            {isFormed ? (
              <>
                <div className="navbar-glass-backdrop" aria-hidden />
                <div className="navbar-glass-gradient" aria-hidden />
              </>
            ) : null}

            <div className="relative z-10 flex w-full min-w-0 items-center gap-3">
              <a
                href="/"
                aria-label="SCUBA CAPITAL home"
                className="inline-flex shrink-0 items-center pl-1"
                onClick={() => setOpen(false)}
              >
                <ScubaLogo variant="white" className="h-8 w-auto sm:h-9" priority />
              </a>

              <ul
                className={`relative hidden min-w-0 flex-1 items-center justify-center lg:flex ${
                  isFormed ? "gap-0.5" : "gap-2"
                }`}
              >
                {navLinks.map((link) => {
                  const isActive = activeHref === link.href;

                  return (
                    <li key={link.href} className="relative">
                      {isActive && isFormed ? (
                        <motion.span
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 rounded-full bg-white/15 ring-1 ring-white/25"
                          transition={SPRING}
                        />
                      ) : null}
                      <a
                        href={link.href}
                        className={`relative z-10 block rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                          isActive && isFormed
                            ? "text-white"
                            : heroOpen
                              ? "text-white/85 hover:text-white"
                              : isFormed
                                ? "text-white/75 hover:text-white"
                                : "text-white/85 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="ml-auto hidden items-center gap-2 lg:flex">
                <a
                  href={ctaConfig.portfolioReview.href}
                  className={
                    isFormed
                      ? "navbar-cta-outline whitespace-nowrap"
                      : "navbar-cta-outline navbar-cta-outline--open whitespace-nowrap"
                  }
                >
                  {ctaConfig.portfolioReview.shortLabel}
                </a>
                <a
                  href={ctaConfig.consultation.href}
                  className={
                    isFormed
                      ? "navbar-cta-outline whitespace-nowrap"
                      : "navbar-cta-outline navbar-cta-outline--open whitespace-nowrap"
                  }
                >
                  {ctaConfig.consultation.label}
                </a>
              </div>

              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
                className={`ml-auto inline-flex size-10 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:ml-0 lg:hidden ${
                  isFormed ? "ring-1 ring-white/20" : ""
                }`}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </motion.nav>
        </motion.div>
      </motion.header>

      {open ? (
        <div className="navbar-mobile-sheet fixed inset-0 z-[109] flex flex-col lg:hidden">
          <div className="navbar-glass-backdrop" aria-hidden />
          <div className="navbar-glass-gradient" aria-hidden />
          <div className="relative z-10 h-[4.5rem] shrink-0" aria-hidden />
          <ul className="relative z-10 flex flex-1 flex-col gap-1 overflow-y-auto px-5 pt-2 pb-8">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block rounded-full px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white/15 text-white ring-1 ring-white/25"
                        : "text-white/75 hover:bg-white/10 hover:text-white"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="flex flex-col gap-2 pt-4">
              <a
                href={ctaConfig.portfolioReview.href}
                onClick={() => setOpen(false)}
                className="navbar-cta-outline w-full justify-center px-6 py-3 text-sm"
              >
                {ctaConfig.portfolioReview.shortLabel}
              </a>
              <a
                href={ctaConfig.consultation.href}
                onClick={() => setOpen(false)}
                className="navbar-cta-outline w-full justify-center px-6 py-3 text-sm"
              >
                {ctaConfig.consultation.label}
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
