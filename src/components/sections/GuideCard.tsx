"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Plus } from "lucide-react";
import type { financialGuides } from "@/lib/constants";

type Guide = (typeof financialGuides)[number];

const TILT = 9;

function useCardTilt() {
  const ref = useRef<HTMLButtonElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [TILT, -TILT]), {
    stiffness: 220,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-TILT, TILT]), {
    stiffness: 220,
    damping: 20,
  });

  function onMouseMove(event: React.MouseEvent<HTMLButtonElement>) {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}

type GuideCardProps = {
  guide: Guide;
  onClick: () => void;
  variant?: "default" | "bento";
};

export function GuideCard({ guide, onClick, variant = "default" }: GuideCardProps) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useCardTilt();
  const isBento = variant === "bento";

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ y: isBento ? -4 : -8, scale: isBento ? 1.01 : 1.02 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      className={
        isBento
          ? "group w-full rounded-[1.5rem] text-left shadow-[0_16px_40px_rgba(37,41,71,0.14)] transition-shadow duration-300 hover:shadow-[0_24px_50px_rgba(37,41,71,0.2)]"
          : "group w-[280px] shrink-0 rounded-[1.75rem] text-left shadow-[0_16px_40px_rgba(37,41,71,0.16)] transition-shadow duration-300 hover:shadow-[0_24px_50px_rgba(37,41,71,0.22)] sm:w-[300px]"
      }
    >
      <div
        className={
          isBento
            ? "guide-card relative aspect-[3/4] overflow-hidden rounded-[1.5rem]"
            : "guide-card relative aspect-[3/4] overflow-hidden"
        }
      >
        <Image
          src={guide.image}
          alt={guide.displayName}
          fill
          className="pointer-events-none object-cover object-top select-none transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          sizes={
            isBento
              ? "(max-width: 1024px) 100vw, 40vw"
              : "(max-width: 640px) 280px, 300px"
          }
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
          <div className="min-w-0 pr-2">
            <p className="font-display text-lg font-bold leading-tight text-white drop-shadow-sm sm:text-xl">
              {guide.displayName}
            </p>
            <p className="mt-1 text-[11px] font-semibold leading-snug text-gold-light sm:text-xs">
              {guide.role}
            </p>
            <p className="mt-0.5 text-[10px] leading-snug text-white/75">
              {guide.credentialHighlight}
            </p>
          </div>
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/95 text-brand-ink shadow-md transition-transform duration-300 group-hover:scale-[1.15] group-hover:rotate-90">
            <Plus className="size-4" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}
