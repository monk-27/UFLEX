// src/components/business/InnovationSlider.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { InnovationSlide } from "@/app/business/data";

type Props = {
  heading: string;
  items: InnovationSlide[];
};

export function InnovationSlider({ heading, items }: Props) {
  const [index, setIndex] = useState(0);
  const current = items[index];
console.log("Innovation items", items);
console.log("Current slide", current);

  const go = (dir: "prev" | "next") => {
    setIndex((prev) => {
      if (dir === "prev") {
        return prev === 0 ? items.length - 1 : prev - 1;
      }
      return prev === items.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <section className="bg-[#f7f7f7]">
      <div className="section section-y">
        <h2 className="lato-700 text-[22px] md:text-[28px] text-[#000000] mb-6">
          {heading}
        </h2>

        <div className="">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-center">
            {/* Text */}
            <div>
              <h3 className="lato-700 text-[18px] md:text-[24px] text-[#000000] mb-3">
                {current.title}
              </h3>
              <p className="whitespace-pre-line lato-400 text-[18px] sm:text-[20px] leading-relaxed text-[#4f4f4f]">
                {current.description}
              </p>
            </div>

            {/* Image */}
            <div className="relative w-full h-[220px] md:h-[260px] lg:h-[447px] overflow-hidden">
              <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Arrows centred below image */}
          <div className="mt-4 flex justify-center gap-6">
            <button
              onClick={() => go("prev")}
              className="w-8 h-8 rounded-full border border-[#d0d0d0] flex items-center justify-center hover:bg-[#f0f0f0] transition"
            >
              <span className="sr-only">Previous</span>
              <span className="lato-700 text-[14px] text-[#117ABA]">&lt;</span>
            </button>
            <button
              onClick={() => go("next")}
              className="w-8 h-8 rounded-full border border-[#d0d0d0] flex items-center justify-center hover:bg-[#f0f0f0] transition"
            >
              <span className="sr-only">Next</span>
              <span className="lato-700 text-[14px] text-[#117ABA]">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
