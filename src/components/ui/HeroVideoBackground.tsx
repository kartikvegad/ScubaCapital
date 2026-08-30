"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { heroMedia } from "@/lib/media";

type HeroVideoBackgroundProps = {
  overlayClassName?: string;
  showControls?: boolean;
};

export function HeroVideoBackground({
  overlayClassName = "hero-daylight",
  showControls = true,
}: HeroVideoBackgroundProps) {
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <>
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroMedia.poster}
          disablePictureInPicture
          controls={false}
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src={heroMedia.video} type="video/mp4" />
        </video>
        <div className={`absolute inset-0 ${overlayClassName}`} />
      </div>

      {showControls ? (
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
