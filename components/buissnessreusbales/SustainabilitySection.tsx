// src/components/business/SustainabilitySection.tsx

"use client"
import { HighlightBlock } from "@/app/business/data";
import Image from "next/image";

type Props = {
  data: HighlightBlock;
};

export function SustainabilitySection({ data }: any) {
  if (!data) return null;

  return (
    <div className="pt-12">
    
    <section className="hidden sm:block relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#f7f7f7] h-[430px] sm:h-[480px]">
      <div className="max-w-7xl ">
        <div className="overflow-hidden grid gap-0 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
          {/* Text */}
          <div className="pr-12 flex flex-col justify-center">
            <h2 className="lato-400 text-[20px] md:text-[24px] text-[#117ABA] mb-3">
              {data.title}
            </h2>
            <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-[#4f4f4f] mb-4">
              {data.description}
            </p>
            {data.linkHref && data.linkLabel && (
              <a
                href={data.linkHref}
                className="py-6 inline-flex items-center gap-1 lato-700 text-[14px] text-[#117ABA]  "
              >
                <div className="underline underline-offset-2">

                {data.linkLabel}
                <span aria-hidden>↗</span>
                </div>
              </a>
            )}
          </div>

          {/* Image */}
          <div className="relative h-[200px] md:h-[480px]">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] block sm:hidden bg-[#f7f7f7] ">
      <div className="max-w-7xl ">
        <div className="overflow-hidden grid gap-0 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
          {/* Text */}
          <div className="pt-4 flex flex-col justify-center">
            <h2 className="lato-400 text-[18px] md:text-[28px] text-[#117ABA] mb-3">
              {data.title}
            </h2>
            <p className="lato-400 text-[16px] leading-relaxed text-[#5B5B5B] mb-4">
              {data.description}
            </p>
            {data.linkHref && data.linkLabel && (
              <a
                href={data.linkHref}
                className="py-6 inline-flex items-center gap-1 lato-700 text-[13px]  tracking-wide text-[#000000] underline underline-offset-2"
              >
                <div className="">

                {data.linkLabel}
                <span aria-hidden>↗</span>
                </div>
              </a>
            )}
          </div>

          {/* Image */}
          <div className="relative h-[200px] md:h-[410px]">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
