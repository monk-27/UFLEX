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
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
      breakpoints: {
        "(min-width: 640px)": { slidesToScroll: 1 },
        "(min-width: 1024px)": { slidesToScroll: 1 },
      },
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedItem, setSelectedItem] = useState<CarouselItem | null>(null);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <>
      {/* ===== CAROUSEL - 3 CARDS VISIBLE AT ONCE ===== */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-[20px] lato-400 text-[#117ABA] md:text-[28px] mb-12">
            {heading}
          </h2>

          <div className="relative">
            {/* Embla Carousel Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4"
                  >
                    <div
                      className="cursor-pointer rounded-2xl bg-white 
                                 h-[480px] flex flex-col transition-all duration-500 
                                 hover:shadow-2xl hover:scale-[1.02]"
                      onClick={() => setSelectedItem(item)}
                    >
                      {/* Image */}
                      <div className="relative h-[280px] w-full">
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
                          <h3 className="text-2xl lato-400 text-slate-800 mb-3 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 text-base line-clamp-3">
                            {item.shortDesc}
                          </p>
                        </div>
                        <button className="mt-6 text-[#117ABA] lato-400  hover:underline">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            {/* <div className="flex justify-center gap-8 mt-12">
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
            </div> */}
          </div>
        </div>
      </section>

      {/* ===== MODAL - UNCHANGED ===== */}
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
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-3 top-3 z-10 bg-white border border-gray-300 p-2 rounded-full shadow-md hover:bg-gray-50"
            >
              <X className="h-5 w-5 text-black" />
            </button>

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

            <div className="p-6 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl lato-400 text-black leading-tight">
                {selectedItem.title}
              </h3>
              <div className="mt-6 text-black lato-400 text-base md:text-lg leading-relaxed space-y-4">
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