// src/components/business/BusinessHero.tsx


"use client"
import { BusinessConfig } from "@/app/business/data";
import Image from "next/image";

type Props = {
  business: BusinessConfig;
};

export function BusinessHero({ business }: any) {
  const { hero } = business;
  if (!hero) return null;

  return (
    <section className="w-full bg-white">
      {/* Hero image */}
      <h1 className="text-center lato-700 text-[28px]  text-[#117ABA] mb-4">
        {business.label}
      </h1>
      <div className="">
        <Image
          src={hero.image}

          alt={hero.heading}
          height={1160}
          width={519}
          className="w-full h-auto"
        />
      </div>


      <div className="mt-6">
        <h2 className="lato-700 text-[28px] md:text-[32px] text-[#117ABA] mb-4">
          {business.subheading}
        </h2>
        <p className="lato-400 text-[14px] md:text-[15px] leading-relaxed text-black ">
          {hero.body}
        </p>
        <button className="group flex items-center gap-1 mt-4 text-[16px] lato-700 text-black hover:text-[#0e5d8a] transition">
          <span className="underline underline-offset-2">
            Know more
             <span className="transform transition group-hover:translate-x-1">
            ↗
          </span>
          </span>

          {/* Arrow you said you'll add */}
         
        </button>

      </div>
    </section>
  );
}
