'use client';

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type CarouselItem = {
  id: number;
  image: string;
  title: string;
  shortDesc: string;
  longDesc: string;
};

type DynamicCarouselModalProps = {
  heading: string;
  items: CarouselItem[];
};

export default function DynamicCarouselModal({
  heading,
  items,
}: DynamicCarouselModalProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: "trimSnaps" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedItem, setSelectedItem] = useState<CarouselItem | null>(null);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <>
      {/* ===== CAROUSEL - NO GAP ABOVE IMAGE ===== */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-[24px] manrope-700 text-[#117ABA] md:text-[42px] mb-12">
            {heading}
          </h2>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 w-full sm:w-[360px] lg:w-[400px] px-4"
                  >
                    {/* Clean card - no extra padding, image touches top */}
                    <div
                      className="cursor-pointer rounded-2xl bg-white 
                                 h-[460px] flex flex-col transition-all duration-500 
                                 "
                      onClick={() => setSelectedItem(item)}
                    >
                      {/* Image - flush with top */}
                      <div className="relative h-[196px] w-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                          <h3 className="text-2xl manrope-600 text-slate-800 mb-3 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 text-base line-clamp-3">
                            {item.shortDesc}
                          </p>
                        </div>
                        <button className="mt-6 text-[#117ABA] manrope-500 hover:underline">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-8 mt-12">
              <button
                onClick={scrollPrev}
                className="p-5 bg-white rounded-full shadow-2xl hover:scale-110 transition-all"
              >
                <ChevronLeft className="w-8 h-8 text-[#117ABA]" />
              </button>
              <button
                onClick={scrollNext}
                className="p-5 bg-white rounded-full shadow-2xl hover:scale-110 transition-all"
              >
                <ChevronRight className="w-8 h-8 text-[#117ABA]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MODAL - 100% WORKING & BEAUTIFUL ===== */}
      {selectedItem && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            className="relative w-full max-w-3xl grid grid-cols-1 md:grid-cols-[38%_62%] border border-gray-200 bg-white shadow-2xl overflow-hidden"
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 bg-white border border-gray-300 p-2 rounded-full shadow-md hover:bg-gray-50 transition"
            >
              <X className="h-5 w-5 text-gray-700" />
            </button>

            {/* Left: Square Image */}
            <div className="p-6 md:p-8">
              <div className="relative aspect-square w-full border border-gray-100 overflow-hidden">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl manrope-600 text-gray-900 leading-tight">
                {selectedItem.title}
              </h3>

              <div className="mt-6 text-gray-700 manrope-400 md:text-lg leading-relaxed space-y-4">
                {selectedItem.longDesc.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}