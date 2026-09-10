"use client";

import Image from "next/image";
import { siteImages } from "@/lib/constants";

type BrandFullLogoProps = {
  className?: string;
};

export function BrandFullLogo({ className = "" }: BrandFullLogoProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={siteImages.brandLogoFull}
        alt="SCUBA CAPITAL"
        width={480}
        height={340}
        className="h-auto w-full object-contain dark:hidden"
        sizes="(max-width: 1024px) 80vw, 400px"
      />

      <div
        className="hidden flex-col items-center dark:flex"
        aria-label="SCUBA CAPITAL"
      >
        <Image
          src="/images/scuba-capital-logo-dark.svg"
          alt=""
          aria-hidden
          width={271}
          height={193}
          className="h-auto w-[72%] max-w-[240px] object-contain"
        />
        <p className="font-display mt-3 text-[clamp(1.75rem,6vw,2.35rem)] font-bold tracking-[0.08em] text-white uppercase">
          SCUBA
        </p>
        <div className="mt-1 flex w-[78%] max-w-[260px] items-center gap-2.5">
          <span className="h-px flex-1 bg-green" aria-hidden />
          <p className="text-[clamp(0.7rem,2.2vw,0.85rem)] font-semibold tracking-[0.28em] text-green uppercase">
            CAPITAL
          </p>
          <span className="h-px flex-1 bg-green" aria-hidden />
        </div>
      </div>
    </div>
  );
}
