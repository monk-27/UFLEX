"use client";

import Image from "next/image";

export type SustainabilityGridCardItem = {
  image: string;
  title: string;
  description: string;
};

export type SustainabilityGridProps = {
  items: SustainabilityGridCardItem[];
};

export default function SustainabilityGrid({ items }: SustainabilityGridProps) {
  const desktopCols =
    items.length >= 5 || items.length === 3
      ? "lg:grid-cols-3"
      : "lg:grid-cols-[360px_360px] lg:justify-center";

  return (
    <section className="py-2 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`
            grid
            grid-cols-1
            sm:grid-cols-2
            ${desktopCols}
            gap-y-8
            gap-x-6
            items-start
          `}
        >
          {items.map((item, idx) => (
            <article key={idx} className="flex flex-col w-full">
              {/* Image */}
              <div className="relative w-full h-[240px] overflow-hidden rounded-md bg-white">
               {
                item.image &&(<>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                </>)
               } 
              </div>

              {/* Content */}
              <div className="pt-3">
                <h3 className="text-[16px] lato-400 text-[#117ABA] leading-[22px] line-clamp-2 min-h-[30px]">
                  {item.title}
                </h3>

                <p className="mt-1 text-[16px] leading-6 lato-400 text-gray-700 line-clamp-7">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
