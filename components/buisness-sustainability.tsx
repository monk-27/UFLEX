"use client";

import Image from "next/image";
export type SustainabilityGridCardItem = {
  image: string;
  title: string;
  by: string;
  description: string;
};

export type SustainabilityGridProps = {
  items: SustainabilityGridCardItem[];
  columns?: {
    base?: number;   // mobile
    sm?: number;     // tablet
    lg?: number;     // desktop
  };
};

export default function SustainabilityGrid({
  items,
  columns = { base: 1, sm: 2, lg: 3 },
}: SustainabilityGridProps) {
  const gridCols = `
    grid-cols-${columns.base}
    sm:grid-cols-${columns.sm}
    lg:grid-cols-${columns.lg}
  `;

  return (
    <section className="py-1 pb-8">
      <div className="">
        <div
          className={`
            grid
            gap-8
            ${gridCols}
            justify-items-center
            items-start
          `}
        >
          {items.map((item, idx) => (
            <article
              key={idx}
              className="flex w-full  flex-col h-full"
            >
              {/* Image */}
              <div className="relative w-full h-[350px] overflow-hidden rounded-md bg-white flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={360}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col pt-4">
                {/* Title */}
                <h3
                  className="
                    
                    text-[16px]
                    lato-400
                    text-[#117ABA]
                    leading-[22px]
                    line-clamp-2
                    min-h-[30px]
                  "
                >
                  {item.title}
                </h3>

                {/* By */}
                

                {/* Description */}
                <p className="text-[16px] leading-6 lato-400 text-gray-700 line-clamp-8 min-h-[120px]">
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
