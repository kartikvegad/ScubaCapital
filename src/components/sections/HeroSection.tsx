"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Pause, Play } from "lucide-react";
import { heroAudiences, heroContent, siteConfig } from "@/lib/constants";

const HERO_VIDEO = "/videos/hero-ocean.mp4";
const HERO_POSTER = "/videos/hero-ocean-poster.jpg";

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroAudiences.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      video.pause();
      setPlaying(false);
      return;
    }

    video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <section className="theme-dark relative min-h-[100svh] overflow-hidden bg-[#252947]">
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_POSTER}
          disablePictureInPicture
          controls={false}
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover object-center blur-[5px]"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="hero-vignette absolute inset-0" />
      </div>

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={playing ? "Pause background video" : "Play background video"}
        className="absolute right-6 bottom-24 z-20 flex size-9 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/55 sm:bottom-8"
      >
        {playing ? <Pause className="size-4" /> : <Play className="ml-0.5 size-4" />}
      </button>

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 pt-24 pb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-5xl"
        >
          <h1 className="font-display text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
            <span className="block">{heroContent.line1}</span>
            <span className="mt-1 block">{heroContent.line2}</span>
          </h1>

          <div className="relative mx-auto mt-2 flex h-14 items-center justify-center overflow-hidden sm:mt-3 sm:h-16 lg:h-[4.5rem]">
            <AnimatePresence mode="wait">
              <motion.p
                key={heroAudiences[index]}
                initial={{ y: 48, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -48, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-x-0 font-display text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl"
              >
                {heroAudiences[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-white/70 sm:text-base"
          >
            {siteConfig.tagline}
            <br />
            {heroContent.supportingLine}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="/contact"
              className="path-btn-outline inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium"
            >
              {heroContent.primaryCta}
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#guides"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              Meet Your Guide
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <span className="rounded-full border border-white/20 bg-black/30 px-4 py-1.5 text-[11px] font-medium text-white/75 backdrop-blur-sm">
            AMFI Registered · {siteConfig.amfiArn}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
