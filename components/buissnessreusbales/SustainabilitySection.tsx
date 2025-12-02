// src/components/business/SustainabilitySection.tsx
import { HighlightBlock } from "@/app/business/data";
import Image from "next/image";

type Props = {
  data: HighlightBlock;
};

export function SustainabilitySection({ data }: Props) {
  return (
    <section className=" bg-[#f7f7f7] h-[200px] md:h-[413px]">
      <div className="">
        <div className="  overflow-hidden grid gap-0 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
          {/* Text */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <h2 className="lato-700 text-[20px] md:text-[28px] text-[#000000] mb-3">
              {data.title}
            </h2>
            <p className="lato-400 text-[16px] leading-relaxed text-[#5B5B5B] mb-4">
              {data.description}
            </p>
            {data.linkHref && data.linkLabel && (
              <a
                href={data.linkHref}
                className="inline-flex items-center gap-1 lato-700 text-[13px] uppercase tracking-wide text-[#000000] underline underline-offset-2"
              >
                {data.linkLabel}
                <span aria-hidden>↗</span>
              </a>
            )}
          </div>

          {/* Image */}
          <div className="relative h-[200px] md:h-[413px]">
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
  );
}
