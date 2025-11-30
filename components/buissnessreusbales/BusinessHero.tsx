// src/components/business/BusinessHero.tsx
import { BusinessConfig } from "@/app/business/data";
import Image from "next/image";

type Props = {
  business: BusinessConfig;
};

export function BusinessHero({ business }: Props) {
  const { hero } = business;

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
        <p className="lato-400 text-[14px] md:text-[15px] leading-relaxed text-[#4f4f4f] ">
          {hero.body}
        </p>
        <button className="group flex items-center gap-1 mt-4 text-[16px] lato-700 text-black hover:text-[#0e5d8a] transition">
          <span className="underline underline-offset-4">
            Know more
          </span>

          {/* Arrow you said you'll add */}
          <span className="transform transition group-hover:translate-x-1">
            ↗
          </span>
        </button>

      </div>
    </section>
  );
}
