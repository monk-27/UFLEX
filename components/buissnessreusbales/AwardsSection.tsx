// src/components/business/AwardsSection.tsx
import { HighlightBlock } from "@/app/business/data";
import Image from "next/image";

type Props = {
  data: HighlightBlock;
};

export function AwardsSection({ data }: Props) {
  return (
    <section className="bg-white">
      <div className="section section-y">
        <div className="relative h-[220px] md:h-[260px] lg:h-[300px] overflow-hidden rounded-md">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
          />
          {/* dark tint */}
          <div className="absolute inset-0 bg-black/50" />

          {/* copy block */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-10 max-w-xl">
              <h2 className="lato-700 text-[18px] md:text-[20px] text-white mb-2">
                {data.title}
              </h2>
              <p className="lato-400 text-[14px] leading-relaxed text-white/90 mb-4">
                {data.description}
              </p>
              {data.linkHref && data.linkLabel && (
                <a
                  href={data.linkHref}
                  className="inline-flex items-center gap-1 lato-700 text-[13px] uppercase tracking-wide text-white"
                >
                  {data.linkLabel}
                  <span aria-hidden>↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
