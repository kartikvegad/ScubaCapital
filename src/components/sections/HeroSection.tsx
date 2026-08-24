"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, Shield, TrendingUp, User } from "lucide-react";
import { siteConfig } from "@/lib/constants";

type DraggableGlassProps = {
  id: string;
  draggingId: string | null;
  onDragStart: (id: string) => void;
  onDragEnd: () => void;
  constraintsRef: React.RefObject<HTMLElement | null>;
  className?: string;
  floatClass?: string;
  shapeClass?: string;
  children: React.ReactNode;
};

function DraggableGlass({
  id,
  draggingId,
  onDragStart,
  onDragEnd,
  constraintsRef,
  className = "",
  floatClass = "",
  shapeClass = "rounded-[1.75rem]",
  children,
}: DraggableGlassProps) {
  const isDragging = draggingId === id;

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.12}
      dragMomentum={false}
      onDragStart={() => onDragStart(id)}
      onDragEnd={() => onDragEnd()}
      whileDrag={{ scale: 1.04, zIndex: 30 }}
      whileHover={{ scale: 1.02 }}
      className={`absolute z-10 cursor-grab touch-none active:cursor-grabbing ${className}`}
      style={{ zIndex: isDragging ? 30 : 10 }}
    >
      <div
        className={`glass select-none text-white ${shapeClass} ${floatClass} ${
          isDragging ? "shadow-[0_24px_60px_rgba(0,30,100,0.35)]" : ""
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
}

function InteractiveGridParallax({
  smoothX,
  smoothY,
}: {
  smoothX: ReturnType<typeof useSpring>;
  smoothY: ReturnType<typeof useSpring>;
}) {
  const offsetX = useTransform(smoothX, (v) => (v - 50) * 0.35);
  const offsetY = useTransform(smoothY, (v) => (v - 50) * 0.35);

  return (
    <motion.div
      aria-hidden
      className="hero-grid pointer-events-none absolute inset-[-24px] z-[1] opacity-80"
      style={{ x: offsetX, y: offsetY }}
    />
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(35);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 28 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 28 });

  const spotlight = useMotionTemplate`radial-gradient(580px circle at ${smoothX}% ${smoothY}%, rgba(255,255,255,0.16), transparent 58%)`;
  const glow = useMotionTemplate`radial-gradient(320px circle at ${smoothX}% ${smoothY}%, rgba(96,165,250,0.35), transparent 70%)`;

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
  }

  function handlePointerLeave() {
    mouseX.set(50);
    mouseY.set(35);
  }

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="hero-bg relative flex min-h-[100svh] flex-col overflow-hidden pb-16 pt-24 lg:pb-20 lg:pt-28"
    >
      {/* Interactive background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ background: glow }} />
        <motion.div className="absolute inset-0" style={{ background: spotlight }} />
      </div>
      <InteractiveGridParallax smoothX={smoothX} smoothY={smoothY} />

      <div className="relative z-10 mx-auto flex flex-1 w-full max-w-6xl items-center px-6 lg:px-8">
        <div className="relative mx-auto w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-1/2 top-0 z-20 -translate-x-1/2"
          >
            <span className="glass inline-flex rounded-full px-4 py-1.5 text-[11px] font-medium text-white/90">
              AMFI Registered · {siteConfig.amfiArn}
            </span>
          </motion.div>

          <DraggableGlass
            id="goals"
            draggingId={draggingId}
            onDragStart={setDraggingId}
            onDragEnd={() => setDraggingId(null)}
            constraintsRef={sectionRef}
            floatClass={draggingId === "goals" ? "" : "float-y"}
            className="-left-2 top-12 hidden w-[190px] lg:block xl:-left-10 2xl:-left-16"
          >
            <div className="p-4 text-left">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wide">
                <span className="rounded-full bg-white/20 px-2 py-0.5">Build</span>
                <span className="text-white/50">Plan</span>
              </div>
              <p className="font-display mt-3 text-[1.65rem] font-bold leading-none">
                Goals
              </p>
              <p className="mt-2 text-[11px] text-white/65">Investment planning</p>
            </div>
          </DraggableGlass>

          <DraggableGlass
            id="portfolio"
            draggingId={draggingId}
            onDragStart={setDraggingId}
            onDragEnd={() => setDraggingId(null)}
            constraintsRef={sectionRef}
            floatClass={draggingId === "portfolio" ? "" : "float-y-delay"}
            className="-right-2 top-16 hidden w-[200px] lg:block xl:-right-10 2xl:-right-16"
          >
            <div className="p-4 text-left">
              <p className="text-[11px] text-white/65">Portfolio View</p>
              <p className="font-display mt-1 text-xl font-bold">One Plan</p>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-full bg-white/20">
                  <User className="size-3.5" />
                </div>
                <span className="text-[11px] text-white/75">Client dashboard</span>
              </div>
            </div>
          </DraggableGlass>

          <div className="relative z-20 mx-auto max-w-3xl px-4 pt-20 text-center lg:pt-24">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="font-display text-[1.85rem] leading-[1.2] font-bold tracking-tight text-white sm:text-[2.65rem] lg:text-[3.15rem]"
            >
              Make Your Wealth Journey Clear and Confident,
              <br className="hidden sm:block" />
              with{" "}
              <span className="inline-flex items-center gap-2 align-middle whitespace-nowrap">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-[#0055ff] shadow-lg ring-2 ring-white/30 sm:size-10">
                  <TrendingUp className="size-5 text-white" />
                </span>
                SCUBA
              </span>
            </motion.h1>

            <motion.form
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="relative mx-auto mt-10 flex max-w-[460px] items-center rounded-full bg-white p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
              onSubmit={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted sm:px-5 sm:py-3"
              />
              <button
                type="submit"
                className="pill-dark inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold sm:px-6 sm:py-3"
              >
                Get Started
                <ArrowRight className="size-4" />
              </button>
            </motion.form>

            <div className="relative mx-auto mt-10 hidden h-10 max-w-[460px] sm:block">
              <DraggableGlass
                id="sip"
                draggingId={draggingId}
                onDragStart={setDraggingId}
                onDragEnd={() => setDraggingId(null)}
                constraintsRef={sectionRef}
                floatClass={draggingId === "sip" ? "" : "float-y"}
                shapeClass="rounded-full"
                className="left-4 top-0"
              >
                <span className="inline-flex px-3.5 py-2 text-[11px]">
                  <span className="font-semibold">+ SIP</span>&nbsp;Active
                </span>
              </DraggableGlass>

              <DraggableGlass
                id="protected"
                draggingId={draggingId}
                onDragStart={setDraggingId}
                onDragEnd={() => setDraggingId(null)}
                constraintsRef={sectionRef}
                floatClass={draggingId === "protected" ? "" : "float-y-delay"}
                shapeClass="rounded-full"
                className="right-4 top-0"
              >
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[11px]">
                  <Shield className="size-3.5" />
                  Protected
                </span>
              </DraggableGlass>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
