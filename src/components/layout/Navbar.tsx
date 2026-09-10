"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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

const MOBILE_MENU_SPRING = { type: "spring" as const, stiffness: 320, damping: 32 };

const mobileMenuContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.18, ease: "easeIn" as const },
  },
};

const mobileMenuPanelVariants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: MOBILE_MENU_SPRING,
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.18, ease: "easeIn" as const },
  },
};

const mobileMenuListVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.06 },
  },
  exit: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const mobileMenuItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: MOBILE_MENU_SPRING,
  },
  exit: {
    opacity: 0,
    x: 12,
    transition: { duration: 0.15, ease: "easeIn" as const },
  },
};

const VIDEO_HERO_PATHS = new Set([
  "/",
  "/contact",
  "/contact/portfolio-review",
]);

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
  const hasVideoHero = VIDEO_HERO_PATHS.has(pathname);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("");

  const isFormed = !hasVideoHero || scrolled || open;
  const heroOpen = hasVideoHero && !isFormed;

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
        className={`pointer-events-none fixed inset-x-0 top-0 z-[110] ${
          isFormed
            ? "px-2.5 pt-2 sm:px-4 sm:pt-2.5 md:px-5"
            : "px-3 pt-3 sm:px-5 sm:pt-3.5 md:px-6"
        }`}
      >
        <motion.div
          className="pointer-events-auto mx-auto w-full max-w-[1280px]"
          animate={{ maxWidth: isFormed ? 1400 : 1280 }}
          transition={SPRING}
        >
          <motion.nav
            className={`relative flex w-full items-center overflow-hidden px-2 py-1 sm:px-3 sm:py-1.5 ${
              isFormed ? "navbar-glass-bar" : ""
            }`}
            animate={{ borderRadius: isFormed ? 9999 : 0 }}
            transition={SPRING}
          >
            {isFormed ? <div className="navbar-solid-bg" aria-hidden /> : null}

            <div className="relative z-10 flex w-full min-w-0 items-center gap-2 sm:gap-2.5">
              <a
                href="/"
                aria-label="SCUBA CAPITAL home"
                className="inline-flex shrink-0 items-center pl-0.5 sm:pl-1"
                onClick={() => setOpen(false)}
              >
                <ScubaLogo
                  variant="navbar"
                  className="h-7 w-auto sm:h-8 md:h-9"
                  priority
                />
              </a>

              <ul
                className={`relative hidden min-w-0 flex-1 flex-nowrap items-center justify-center xl:flex ${
                  isFormed ? "gap-0" : "gap-1.5"
                }`}
              >
                {navLinks.map((link) => {
                  const isActive = activeHref === link.href;

                  return (
                    <li key={link.href} className="relative shrink-0">
                      {isActive && isFormed ? (
                        <motion.span
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 rounded-full bg-white/15 ring-1 ring-white/25"
                          transition={SPRING}
                        />
                      ) : null}
                      <a
                        href={link.href}
                        className={`relative z-10 block rounded-full whitespace-nowrap py-1.5 font-medium transition-colors ${
                          isFormed ? "px-2 text-xs" : "px-2.5 text-[13px]"
                        } ${
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

              <div className="ml-auto hidden shrink-0 items-center gap-1.5 xl:flex xl:gap-2">
                <a
                  href={ctaConfig.portfolioReview.href}
                  className={
                    isFormed
                      ? "navbar-cta-outline navbar-cta-compact whitespace-nowrap"
                      : "navbar-cta-outline navbar-cta-outline--open whitespace-nowrap"
                  }
                >
                  {ctaConfig.portfolioReview.shortLabel}
                </a>
                <a
                  href={ctaConfig.consultation.href}
                  className={
                    isFormed
                      ? "navbar-cta-outline navbar-cta-primary navbar-cta-compact whitespace-nowrap"
                      : "navbar-cta-outline navbar-cta-outline--open whitespace-nowrap"
                  }
                >
                  {ctaConfig.consultation.label}
                </a>
              </div>

              <div className="ml-auto flex shrink-0 items-center gap-1.5 xl:ml-0 xl:hidden">
                <a
                  href={ctaConfig.consultation.href}
                  className={`navbar-cta-outline navbar-cta-primary hidden whitespace-nowrap sm:inline-flex ${
                    isFormed ? "navbar-cta-compact" : "navbar-cta-outline--open"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Consultation
                </a>
                <button
                  type="button"
                  aria-label={open ? "Close menu" : "Open menu"}
                  aria-expanded={open}
                  onClick={() => setOpen(!open)}
                  className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 ${
                    isFormed ? "ring-1 ring-white/20" : ""
                  }`}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {open ? (
                      <motion.span
                        key="close"
                        initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                        transition={{ duration: 0.18 }}
                        className="inline-flex"
                      >
                        <X className="size-5" />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="menu"
                        initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                        transition={{ duration: 0.18 }}
                        className="inline-flex"
                      >
                        <Menu className="size-5" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </motion.nav>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            className="navbar-mobile-sheet fixed inset-0 z-[109] flex flex-col xl:hidden"
            variants={mobileMenuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="navbar-solid-bg"
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
            />
            <div className="relative z-10 h-14 shrink-0 sm:h-16" aria-hidden />
            <motion.div
              className="relative z-10 flex flex-1 flex-col overflow-y-auto px-4 pt-2 pb-8 sm:px-6"
              variants={mobileMenuPanelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.ul
                className="mx-auto flex w-full max-w-md flex-col gap-1 sm:max-w-lg"
                variants={mobileMenuListVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {navLinks.map((link) => {
                  const isActive = activeHref === link.href;

                  return (
                    <motion.li key={link.href} variants={mobileMenuItemVariants}>
                      <a
                        href={link.href}
                        className={`block rounded-full px-4 py-3 text-sm font-medium transition-colors sm:text-[15px] ${
                          isActive
                            ? "bg-white/15 text-white ring-1 ring-white/25"
                            : "text-white/75 hover:bg-white/10 hover:text-white"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  );
                })}
                <motion.li
                  className="flex flex-col gap-2.5 pt-5 sm:flex-row sm:gap-3"
                  variants={mobileMenuItemVariants}
                >
                  <a
                    href={ctaConfig.portfolioReview.href}
                    onClick={() => setOpen(false)}
                    className="navbar-cta-outline w-full justify-center px-5 py-3 text-sm sm:flex-1"
                  >
                    {ctaConfig.portfolioReview.shortLabel}
                  </a>
                  <a
                    href={ctaConfig.consultation.href}
                    onClick={() => setOpen(false)}
                    className="navbar-cta-outline navbar-cta-primary w-full justify-center px-5 py-3 text-sm sm:flex-1"
                  >
                    {ctaConfig.consultation.label}
                  </a>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
