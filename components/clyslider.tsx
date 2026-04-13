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

  if (!items.length) return null;

  // Smart visible items: show min(3, total) items without duplication
  const visible = useMemo(() => {
    const numToShow = Math.min(3, total);
    const result: SliderItem[] = [];

    for (let i = 0; i < numToShow; i++) {
      result.push(items[(index + i) % total]);
    }
    return result;
  }, [index, items, total]);

  const getSlidesToMove = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const prev = () => {
    const move = getSlidesToMove();
    setIndex((i) => (i - move + total) % total);
  };

  const next = () => {
    const move = getSlidesToMove();
    setIndex((i) => (i + move) % total);
  };

  // Show controls only when there are more items than can be displayed at once
  const maxVisible = Math.min(3, total);
  const showControls = total > maxVisible;

  return (
    <section className="pt-12">
      {heading && (
        <h2 className="lato-700 text-[28px] md:text-[32px] text-[#117ABA] text-start pb-12">
          {heading}
        </h2>
      )}
      {subheading && (
        <p className="text-black text-center mb-6">{subheading}</p>
      )}

      <motion.div
        key={index}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {visible.map((card, idx) => (
          <div
            key={`${index}-${idx}`}
            className="rounded-md shadow-md bg-white overflow-hidden flex flex-col"
          >
            <div style={{ height: imageHeight }} className="relative w-full bg-gray-100">
              <Image 
                src={card.img} 
                alt={card.title} 
                fill 
                className="object-cover"   // changed from object-fill to object-cover (better look)
              />
            </div>

            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="lato-700 text-[18px] md:text-[20px] leading-tight text-[#117ABA] mb-2">
                  {card.title}
                </h3>
                <p className="lato-400 text-[16px] sm:text-[18px] leading-relaxed text-black">
                  {card.desc}
                </p>
              </div>

              {card.dynamiclink && (
                <Link
                  href={card.dynamiclink}
                  className="mt-4 lato-400 text-[16px] sm:text-[20px] text-[#117ABA] hover:underline inline-flex items-center gap-1"
                >
                  Read More <span aria-hidden>↗</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Controls */}
      {showControls && (
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="p-3 rounded-full border bg-white shadow hover:bg-gray-50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-black" />
          </button>

          <button
            onClick={next}
            className="p-3 rounded-full border bg-white shadow hover:bg-gray-50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-black" />
          </button>
        </div>
      )}
    </section>
  );
}