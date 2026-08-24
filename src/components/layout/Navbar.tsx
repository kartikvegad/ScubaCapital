"use client";

import { useState } from "react";
import { Menu, X, Waves } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="/" className="flex items-center gap-2.5 text-white">
            <span className="flex size-9 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25">
              <Waves className="size-5" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              SCUBA
            </span>
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="pill-dark inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Menu
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-[#0a2d7a]/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
            <span className="font-display text-lg font-bold text-white">SCUBA</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="pill-dark inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              Close
              <X className="size-4" />
            </button>
          </div>
          <ul className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-2xl font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="pill-blue inline-flex rounded-full px-6 py-3 text-sm font-semibold"
              >
                Book a Consultation
              </a>
            </li>
          </ul>
          <p className="mx-auto mt-10 max-w-6xl px-6 text-sm text-white/60">
            {siteConfig.tagline}
          </p>
        </div>
      )}
    </>
  );
}
