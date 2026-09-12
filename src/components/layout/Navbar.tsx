"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ctaConfig, navLinks } from "@/lib/constants";
import { ScubaLogo } from "@/components/ui/ScubaLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const HOME_SECTION_TO_HREF: Record<string, string> = {
  offerings: "/#offerings",
  philosophy: "/#philosophy",
  about: "/#about",
  approach: "/#approach",
  blog: "/blog",
};

const HOME_SECTION_ORDER = [
  "offerings",
  "philosophy",
  "about",
  "approach",
  "blog",
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
            ? "px-3 pt-3 sm:px-5 sm:pt-3.5 md:px-6"
            : "px-4 pt-4 sm:px-6 sm:pt-5 md:px-8"
        }`}
      >
        <motion.div
          className="pointer-events-auto mx-auto w-full max-w-[1280px]"
          animate={{ maxWidth: isFormed ? 1180 : 1280 }}
          transition={SPRING}
        >
          <motion.nav
            className={`relative flex w-full items-center overflow-hidden px-4 py-2.5 sm:px-5 sm:py-3 ${
              isFormed ? "navbar-glass-bar" : ""
            }`}
            animate={{ borderRadius: isFormed ? 22 : 0 }}
            transition={SPRING}
          >
            {isFormed ? <div className="navbar-solid-bg" aria-hidden /> : null}

            <div className="relative z-10 flex w-full min-w-0 items-center gap-4 sm:gap-5">
              <a
                href="/"
                aria-label="SCUBA CAPITAL home"
                className="inline-flex shrink-0 items-center"
                onClick={() => setOpen(false)}
              >
                <ScubaLogo
                  variant="navbar"
                  className="h-8 w-auto sm:h-9"
                  priority
                />
              </a>

              <div
                className={`hidden h-5 w-px shrink-0 xl:block ${
                  isFormed ? "bg-white/15" : "bg-white/20"
                }`}
                aria-hidden
              />

              <ul className="relative hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex">
                {navLinks.map((link) => {
                  const isActive = activeHref === link.href;

                  return (
                    <li key={link.href} className="relative shrink-0">
                      {isActive && isFormed ? (
                        <motion.span
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 rounded-full bg-green/15 ring-1 ring-green/35"
                          transition={SPRING}
                        />
                      ) : null}
                      <a
                        href={link.href}
                        className={`relative z-10 block rounded-full px-3.5 py-2 text-[13px] font-medium tracking-wide whitespace-nowrap transition-colors ${
                          isActive && isFormed
                            ? "text-green"
                            : heroOpen
                              ? "text-white/80 hover:text-white"
                              : isFormed
                                ? "text-white/70 hover:text-white"
                                : "text-white/80 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="ml-auto hidden shrink-0 items-center gap-2.5 xl:flex">
                <ThemeToggle
                  className={isFormed ? "ring-1 ring-white/15" : ""}
                />
                <a
                  href={ctaConfig.portfolioReview.href}
                  className="navbar-cta-ghost whitespace-nowrap"
                >
                  Portfolio Review
                </a>
                <a
                  href={ctaConfig.consultation.href}
                  className="navbar-cta-solid whitespace-nowrap"
                >
                  {ctaConfig.consultation.label}
                </a>
              </div>

              <div className="ml-auto flex shrink-0 items-center gap-1.5 xl:ml-0 xl:hidden">
                <ThemeToggle
                  className={isFormed ? "ring-1 ring-white/15" : ""}
                />
                <a
                  href={ctaConfig.consultation.href}
                  className="navbar-cta-solid hidden whitespace-nowrap sm:inline-flex"
                  onClick={() => setOpen(false)}
                >
                  Consultation
                </a>
                <button
                  type="button"
                  aria-label={open ? "Close menu" : "Open menu"}
                  aria-expanded={open}
                  onClick={() => setOpen(!open)}
                  className={`inline-flex size-10 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 ${
                    isFormed ? "ring-1 ring-white/15" : ""
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
            <div className="relative z-10 h-16 shrink-0 sm:h-[4.5rem]" aria-hidden />
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
                            ? "bg-green/15 text-green ring-1 ring-green/35"
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
                  className="flex items-center justify-between gap-3 pt-6"
                  variants={mobileMenuItemVariants}
                >
                  <span className="px-4 text-sm text-white/55">Appearance</span>
                  <ThemeToggle className="ring-1 ring-white/20" />
                </motion.li>
                <motion.li
                  className="flex flex-col gap-2.5 pt-3 sm:flex-row sm:gap-3"
                  variants={mobileMenuItemVariants}
                >
                  <a
                    href={ctaConfig.portfolioReview.href}
                    onClick={() => setOpen(false)}
                    className="navbar-cta-outline w-full justify-center px-5 py-3 text-sm sm:flex-1"
                  >
                    Portfolio Review
                  </a>
                  <a
                    href={ctaConfig.consultation.href}
                    onClick={() => setOpen(false)}
                    className="navbar-cta-solid w-full justify-center px-5 py-3 text-sm sm:flex-1"
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
