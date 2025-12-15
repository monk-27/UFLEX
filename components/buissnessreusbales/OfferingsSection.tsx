"use client";

import Image from "next/image";
import { SubBusinessHero } from "./subhero";
import type { BusinessConfig, Offering } from "@/app/business/data";

type Props = {
  heading?: string;
  items?: Offering[] | null;
  subheading?: string;
  subitems?: Offering[] | null;
  business?: BusinessConfig | null;
};

export function OfferingadvSection({
  heading,
  items: itemsProp,
  subheading,
  subitems: subitemsProp,
  business,
}: Props) {
  const items = itemsProp ?? [];
  const subitems = subitemsProp ?? [];

  if (
    !heading &&
    items.length === 0 &&
    subitems.length === 0 &&
    !business?.subhero
  ) {
    return null;
  }

  return (
    <section className="bg-white py-8 md:py-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        {heading && (
          <h2 className="mb-10 text-center lato-400 text-[18px] md:text-[28px] text-[#000000]">
            {heading}
          </h2>
        )}

        {/* Main offerings — GRID (auto-centering) */}
        {items.length > 0 && (
          <div
            className="
              grid
              justify-center
              justify-items-center
              gap-6 md:gap-8
              [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]
            "
          >
            {items.map((item) => (
              <OfferingCard key={item.id} item={item} />
            ))}
          </div>
        )}

        {/* Optional sub hero */}
        {business?.subhero && (
          <div className="mt-16">
            <SubBusinessHero business={business} />
          </div>
        )}

        {/* Sub offerings — same grid logic */}
        {subitems.length > 0 && (
          <div className="mt-16">
            {subheading && (
              <h3 className="mb-10 text-center lato-400 text-[16px] md:text-[28px] text-[#000000]">
                {subheading}
              </h3>
            )}

            <div
              className="
                grid
                justify-center
                justify-items-center
                gap-6 md:gap-8
                [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]
              "
            >
              {subitems.map((sub) => (
                <OfferingCard key={sub.id} item={sub} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ───────────── Card ───────────── */

function OfferingCard({ item }: { item: Offering }) {
  const src = item?.image ?? "/images/placeholder.png";
  const title = item?.title ?? "";

  return (
    <div className="w-full max-w-[260px] rounded-md overflow-hidden group relative">
      <div className="relative h-[195px] w-full">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition" />

      <div className="absolute inset-0 flex items-end justify-center pb-5">
        <p className="text-white lato-700 text-[16px] text-center px-2">
          {title}
        </p>
      </div>
    </div>
  );
}
