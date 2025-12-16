"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedSection } from "./animated-section";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type AccreditationItem = { image: string };

export type AccreditationsSliderProps = {
  items: AccreditationItem[];
  heading?: string;
};

const CARD_COLORS = [
  { border: "border-gray-100", bg: "bg-gray-50", ring: "ring-gray-100" },
];

export default function AccreditationsSlider({
  items,
  heading = "Accreditations",
}: AccreditationsSliderProps) {
  const [columns, setColumns] = useState(4); // how many cards per view
  const [page, setPage] = useState(0); // current “slide/page”

  // Decide how many cards to show based on viewport width
  useEffect(() => {
    const updateColumns = () => {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      if (w < 768) setColumns(1);         // mobile
      else if (w < 1280) setColumns(2);   // tablet
      else setColumns(4);                 // laptop/desktop
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Total pages for current column count
  const pageCount = Math.max(1, Math.ceil(items.length / columns));

  // Clamp page if columns or items change
  useEffect(() => {
    setPage((prev) => (prev >= pageCount ? pageCount - 1 : prev));
  }, [pageCount]);

  const startIndex = page * columns;
  const visibleItems = items.slice(startIndex, startIndex + columns);

  const canPrev = page > 0;
  const canNext = page < pageCount - 1;
  const showArrows = items.length > columns;

  return (
    <div className="py-12">
      {/* Heading */}
      <motion.section
        className=" px-6 text-center sm:px-0 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-start lato-400 text-[20px] md:text-[24px] text-[#117ABA] "
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {heading}
        </motion.h3>
      </motion.section>

      <AnimatedSection>
        <div className="max-w-6xl mx-auto px-4 lg:px-0 ">
          <motion.div
            key={page} // animate when page changes
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
          >
            {visibleItems.map((it, idx) => {
              const globalIdx = startIndex + idx;
              const c = CARD_COLORS[globalIdx % CARD_COLORS.length];
              return (
                <div
                  key={it.image + globalIdx}
                  className="flex justify-center"
                >
                  <div
                    className={`relative w-full h-[176px] max-w-[260px] aspect-[4/3]  flex items-center justify-center`}
                  >
                    <Image
                      src={it.image}
                      alt={`Accreditation ${globalIdx + 1}`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 30vw"
                      priority={globalIdx === 0}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Prev / Next – centered below, conditional */}
          {showArrows && (
            <div className="mt-6 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => canPrev && setPage((p) => p - 1)}
                disabled={!canPrev}
                aria-label="Previous"
                className=" z-10 -translate-y-1/2 inline-flex items-center justify-center
             rounded-full border border-gray-600 bg-white/80 p-3 shadow-sm
             opacity-50 hover:opacity-100 transition md:left-0"
            >
              <ChevronLeft className="h-5 w-5 text-gray-400" />
              </button>
              <button
                type="button"
                onClick={() => canNext && setPage((p) => p + 1)}
                disabled={!canNext}
                aria-label="Next"
                className=" z-10 -translate-y-1/2 inline-flex items-center justify-center
             rounded-full border border-gray-600 bg-white/80 p-3 shadow-sm
             opacity-50 hover:opacity-100 transition md:right-0"
            >
              <ChevronRight className="h-5 w-5 text-gray-400" /></button>
            </div>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
}
