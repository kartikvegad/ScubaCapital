"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Plus } from "lucide-react";
import type { financialGuides } from "@/lib/constants";

type Guide = (typeof financialGuides)[number];

const TILT = 5;

function useCardTilt() {
  const ref = useRef<HTMLButtonElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [TILT, -TILT]), {
    stiffness: 180,
    damping: 26,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-TILT, TILT]), {
    stiffness: 180,
    damping: 26,
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
};

export function GuideCard({ guide, onClick }: GuideCardProps) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useCardTilt();

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className="group w-[280px] shrink-0 rounded-[1.75rem] text-left shadow-[0_16px_40px_rgba(37,41,71,0.16)] sm:w-[300px]"
    >
      <div className="guide-card relative aspect-[3/4]">
        <Image
          src={guide.image}
          alt={guide.displayName}
          fill
          className="pointer-events-none object-cover object-top select-none"
          sizes="(max-width: 640px) 280px, 300px"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <div className="min-w-0 pr-2">
            <p className="font-display text-xl font-bold leading-tight text-white drop-shadow-sm sm:text-2xl">
              {guide.displayName}
            </p>
            <p className="mt-1 text-xs font-semibold leading-snug text-gold-light sm:text-sm">
              {guide.role}
            </p>
            <p className="mt-1 text-[10px] leading-snug text-white/75 sm:text-xs">
              {guide.credentialHighlight}
            </p>
          </div>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/95 text-navy shadow-md transition-transform group-hover:scale-110">
            <Plus className="size-5" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}
