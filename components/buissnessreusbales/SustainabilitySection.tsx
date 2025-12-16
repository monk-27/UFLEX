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
    
    <section className="hidden sm:block bg-[#f7f7f7] h-[430px] sm:h-[410px]">
      <div className="">
        <div className="overflow-hidden grid gap-0 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
          {/* Text */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <h2 className="lato-400 text-[20px] md:text-[24px] text-[#117ABA] mb-3">
              {data.title}
            </h2>
            <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-[#4f4f4f] mb-4">
              {data.description}
            </p>
            {data.linkHref && data.linkLabel && (
              <a
                href={data.linkHref}
                className="inline-flex items-center gap-1 lato-700 text-[14px] text-[#117ABA]  "
              >
                <div className="underline underline-offset-2">

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
    <section className=" block sm:hidden bg-[#f7f7f7] ">
      <div className="">
        <div className="overflow-hidden grid gap-0 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
          {/* Text */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <h2 className="lato-400 text-[18px] md:text-[28px] text-[#117ABA] mb-3">
              {data.title}
            </h2>
            <p className="lato-400 text-[16px] leading-relaxed text-[#5B5B5B] mb-4">
              {data.description}
            </p>
            {data.linkHref && data.linkLabel && (
              <a
                href={data.linkHref}
                className="inline-flex items-center gap-1 lato-700 text-[13px]  tracking-wide text-[#000000] underline underline-offset-2"
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
