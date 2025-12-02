"use client"

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils"; // optional – remove cn if you don’t use it

type CaseStudyItem = {
  id: string | number;
  title: string;
  description: string;
  href?: string;
};

type CaseStudyProps = {
  sectionTitle?: string;          // e.g. "Case Study"
  imageSrc: string;
  imageAlt?: string;
  items: CaseStudyItem[];
};

export function CaseStudySection({
  sectionTitle = "Case Study",
  imageSrc,
  imageAlt = "Case study image",
  items,
}: any) {
  if (!items || items.length === 0) return null;

  return (
    <section className="w-full bg-[#f5f5f5]">
      <div className="mx-auto flex max-w-6xl flex-col md:h-[871px] md:flex-row">
        {/* Left image */}
        <div className="relative h-[871px] w-full md:h-full md:w-1/2">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right column */}
       {/* Right column */}
<div className="flex w-full flex-col bg-[#5d6165] text-white md:w-1/2 md:h-[871px]">

  {/* Header */}
  <div className="flex items-center justify-center border-b border-white/20 bg-[#616569] px-6 py-5">
    <h2 className="text-center text-base lato-500 md:text-lg">
      {sectionTitle}
    </h2>
  </div>

  {/* Centered content container */}
  <div className="flex flex-col justify-center flex-1 px-0">
    {items.map((item:any, index:any) => {
      const isPrimary = index === 0;

      return (
        <a
          key={item.id}
          className={cn(
            "group flex cursor-pointer items-stretch border-b border-white/20 px-6 py-6 transition-colors",
            isPrimary ? "bg-[#121217]" : "bg-[#6b6f73] hover:bg-[#787d82]"
          )}
        >
          {/* Text */}
          <div className="flex-1 pr-6 text-left">
            <h3 className="text-sm lato-700 leading-snug md:text-base">
              {item.title}
            </h3>
            <p className="mt-2 text-xs leading-snug text-gray-100 md:text-sm">
              {item.description}
            </p>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-end">
            {isPrimary ? (
              <ArrowUpRight className="h-5 w-5 text-[#117ABA] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            ) : (
              <ArrowUpRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            )}
          </div>
        </a>
      );
    })}
  </div>
</div>

      </div>
    </section>
  );
}
