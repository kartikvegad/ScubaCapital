"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { heroMedia } from "@/lib/media";

type HeroVideoBackgroundProps = {
  showControls?: boolean;
};

export function HeroVideoBackground({ showControls = true }: HeroVideoBackgroundProps) {
  const [mounted, setMounted] = useState(false);
  const [playing, setPlaying] = useState(false);
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
      setPlaying(false);
      return;
    }

    video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, [mounted]);

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
    <>
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

      {showControls && mounted ? (
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={playing ? "Pause background video" : "Play background video"}
          className="absolute right-6 bottom-24 z-20 flex size-9 items-center justify-center rounded-full border border-navy/15 bg-white/80 text-navy shadow-sm backdrop-blur-sm transition-colors hover:bg-white sm:bottom-8"
        >
          {playing ? <Pause className="size-4" /> : <Play className="ml-0.5 size-4" />}
        </button>
      ) : null}
    </>
  );
}
