"use client";

import { useEffect, useRef, useState } from "react";
import { heroMedia } from "@/lib/media";

export function HeroVideoBackground() {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      video.pause();
      return;
    }

    video.play().catch(() => {});
  }, [mounted]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {mounted ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src={heroMedia.video} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
