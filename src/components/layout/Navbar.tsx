"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-[padding] duration-300 ${
          scrolled ? "pointer-events-none px-4 pt-4 sm:px-6 sm:pt-5" : ""
        }`}
      >
        <div
          className={`mx-auto transition-[max-width,padding] duration-300 ${
            scrolled ? "max-w-6xl" : "max-w-7xl px-6 pt-5 lg:px-10"
          }`}
        >
          <nav
            className={`relative flex items-center justify-between ${
              scrolled
                ? "pointer-events-auto px-5 py-3.5 lg:px-7"
                : "py-5"
            }`}
          >
            <div
              aria-hidden
              className={`navbar-glass pointer-events-none absolute inset-0 rounded-2xl border shadow-[0_8px_32px_rgba(37,24,56,0.35)] backdrop-blur-xl transition-[opacity,border-color] duration-300 ${
                scrolled
                  ? "border-white/25 opacity-100"
                  : "border-transparent opacity-0"
              }`}
            />

            <a
              href="/"
              className="relative z-10 font-display text-xl font-bold tracking-tight text-white"
            >
              SCUBA
            </a>

            <ul className="relative z-10 hidden items-center gap-7 xl:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="relative z-10 hidden items-center gap-4 lg:flex">
              <a
                href="/contact"
                className="path-btn-outline inline-flex rounded-full px-5 py-2.5 text-sm font-medium"
              >
                Book a Consultation
              </a>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="relative z-10 text-white xl:hidden"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </nav>
        </div>
      </header>

      {open && (
        <div className="navbar-glass fixed inset-0 z-[60] backdrop-blur-xl xl:hidden">
          <div className="flex items-center justify-between px-6 py-5 pt-20">
            <span className="font-display text-lg font-bold text-white">
              SCUBA CAPITAL
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-white"
            >
              <X className="size-6" />
            </button>
          </div>
          <ul className="flex flex-col gap-5 px-6 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xl font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary inline-flex rounded-full px-6 py-3 text-sm font-semibold"
              >
                Book a Consultation
              </a>
            </li>
            <li>
              <p className="text-sm text-white/50">{siteConfig.tagline}</p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
