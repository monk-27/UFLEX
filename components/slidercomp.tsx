"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type SliderItem = {
  img: string;
  title: string;
  desc: string;
  dynamiclink?: string;
};

export default function SimpleCarousel({
  heading,
  subheading,
  items = [],
  imageHeight = 280,
}: {
  heading?: string;
  subheading?: string;
  items?: SliderItem[];
  imageHeight?: number;
}) {
  const [index, setIndex] = useState(0);
  const total = items.length;

  // visible 3-item window (wrap-around)
  const visible = useMemo(() => {
    if (!items.length) return [];
    return [
      items[index % total],
      items[(index + 1) % total],
      items[(index + 2) % total],
    ];
  }, [index, items, total]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  if (!items.length) return null;

  return (
    <section className="pt-12">
      {heading && (
        <h2 className="text-[24px] text-[#000000] lato-400 text-center mb-2">{heading}</h2>
      )}
      {subheading && (
        <p className="text-gray-600 text-center mb-6">{subheading}</p>
      )}

      {/* animate the whole grid on index change for a smooth, subtle effect */}
      <motion.div
        key={index} // re-runs initial/animate when index changes
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {visible.map((card, idx) => (
          <div
            key={`${index}-${idx}`} // stable enough for visible window
            className="rounded-md shadow-md bg-white overflow-hidden flex flex-col"
          >
            <div style={{ height: imageHeight }} className="relative w-full bg-gray-100">
              <Image src={card.img} alt={card.title} fill className="object-cover" />
            </div>

            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg text-[#117ABA] lato-700 mb-2">
                  {card.title}
                </h3>
                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-[#4f4f4f]">{card.desc}</p>
              </div>

              {card.dynamiclink && (
                <Link
                  href={card.dynamiclink}
                  className="mt-4 lato-700 text-[14px] text-[#117ABA]  hover:underline"
                >
                  Read more 
                <span aria-hidden>↗</span>

                </Link>
              )}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Controls */}
      <div className="flex justify-center gap-6 mt-8">
        <button
          onClick={prev}
          className="p-3 rounded-full border bg-white shadow hover:bg-gray-50"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>

        <button
          onClick={next}
          className="p-3 rounded-full border bg-white shadow hover:bg-gray-50"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </section>
  );
}
