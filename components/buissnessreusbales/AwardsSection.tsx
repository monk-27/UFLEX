// src/components/business/AwardsSection.tsx
"use client"
import { HighlightBlock } from "@/app/business/data";
import Image from "next/image";

type Props = {
  data: HighlightBlock;
};

export function AwardsSection({ data }: Props) {
  if (!data || !data.image) return null;
  return (
    <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw]">
      <div className="relative h-[260px] md:h-[360px] lg:h-[500px] overflow-hidden">
        
        {/* Background image */}
        <Image
          src={data.image}
          alt={data.title}
          fill
          priority
          className="object contain sm:object-cover w-full h-full"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="max-w-5xl mx-auto absolute inset-0 flex items-center">
          <div className="max-w-5xl px-6 md:px-8 lg:px-0">
            <h2 className="lato-700 text-[24px] md:text-[28px] text-white mb-3">
              {data.title}
            </h2>

            <h3 className="flex items-center gap-2 text-white lato-700 text-[18px] md:text-[24px] mb-3">
              <span className="text-[#117ABA] text-xl leading-none">▶</span>
              <span>Recognized for our sustainability efforts</span>
            </h3>

            <p className="max-w-2xl  lato-400 text-[12px] sm:text-[18px] leading-relaxed text-white/90 mb-4">
              {data.description}
            </p>

            {data.linkHref && data.linkLabel && (
              <a
                href={data.linkHref}
                className="inline-flex items-center gap-1 lato-700 text-[14px] text-[#117ABA] underline underline-offset-4 decoration-white"
              >
                {data.linkLabel}
                <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
