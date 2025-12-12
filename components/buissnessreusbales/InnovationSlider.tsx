
"use client"

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { InnovationSlide } from "@/app/business/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  heading: string;
  items: InnovationSlide[];
};

// slide variants for whole block (text + image)
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
  }),
};

export function InnovationSlider({ heading, items }: any) {

  if (!items || items.length === 0) return null;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const current = items[index];

  const go = (dir: "prev" | "next") => {
    setDirection(dir === "next" ? 1 : -1);
    setIndex((prev) => {
      if (dir === "prev") {
        return prev === 0 ? items.length - 1 : prev - 1;
      }
      return prev === items.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <section className="bg-[#f7f7f7] relative w-screen left-1/2 right-1/2 -mx-[50vw] py-1 ">
      <div className="max-w-7xl mx-auto ">
        <h2 className="lato-700 text-[22px] md:text-[28px] text-[#117ABA] mb-8">
          {heading}
        </h2>

        <div>
          {/* Animated slide wrapper */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
                {/* Text */}
                <div>
                  <h3 className="lato-700 text-[18px] md:text-[24px] text-[#000000] mb-3">
                    {current.title}
                  </h3>

                  {/* Add mt-4 to keep description where it was */}
                  <p className="whitespace-pre-line lato-400 text-[16px] sm:text-[20px] leading-relaxed text-[#4f4f4f] mt-8">
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

            </motion.div>
          </AnimatePresence>

          {/* Arrows centred below image */}
          <div className="mt-8 flex justify-center gap-6">
            <button
              onClick={() => go("prev")}
              className=" z-10 -translate-y-1/2 inline-flex items-center justify-center
             rounded-full border border-gray-600 bg-white/80 p-3 shadow-sm
             opacity-50 hover:opacity-100 transition md:left-0"
            >
              <ChevronLeft className="h-5 w-5 text-gray-400" />
           </button>
            <button
              onClick={() => go("next")}
              className=" z-10 -translate-y-1/2 inline-flex items-center justify-center
             rounded-full border border-gray-600 bg-white/80 p-3 shadow-sm
             opacity-50 hover:opacity-100 transition md:right-0"
            >
              <ChevronRight className="h-5 w-5 text-gray-400" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
