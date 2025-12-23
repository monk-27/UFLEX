"use client";

import Image from "next/image";

type MarqueeItem = {
  id: number;
  title: string;
  by: string;
  image: string;
};

export default function AutoMarquee({
  items,
  speed = 30,
}: {
  items: MarqueeItem[];
  speed?: number;
}) {
  const marqueeItems = [...items, ...items];

  return (
    <div className="marquee-wrapper">
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {marqueeItems.map((item, i) => (
          <div className="marquee-item rounded-sm" key={`${item.id}-${i}`}>
            <div className="marquee-image-box  ">
              <Image
                src={item.image}
                alt={item.title}
                width={120}
                height={100}
                className="object-cover w-[635px] h-[212px] rounded-sm"
              />
            </div>

            <p className="marquee-title  lato-700 text-[#000000]">{item.title}</p>
            <p className="marquee-by line-clamp-2 lato-400 text-[#000000]">By: {item.by}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
