"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: "August 2025",
    desc: "Earnings release for the quarter ended June 30, 2025 | Stable growth amidst tariff challenges",
    img: "/images/new/m1.jpg",
  },
  {
    title: "August 2025",
    desc: "UFlex Limited recognised as a Top Employer 2025 in India",
    img: "/images/awards/b5.png",
  },
  {
    title: "July 2025",
    desc: "UFlex secures Indian patent for sustainable waterborne heat seal coating for food and consumer goods packaging",
    img: "/images/new/m2.jpg",
  },
  // Add more items as needed
];

export default function MediaCardsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="w-screen relative bg-[#117ABA]">

    
    <section className="pt-8 pb-4 max-w-7xl mx-auto">
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        {/* Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {items.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
              className=""
            >
              <div className="h-full ">
                <div className="group relative overflow-hidden rounded-lg bg-[#D72817]  transition-all duration-500 h-full flex flex-col">
                  {/* Image - Taller height */}
                  <div className="relative aspect-[4/3] overflow-hidden"> {/* Changed from 16/9 to 4/3 */}
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority={index < 3} // Optimize first few images
                    />

                    {/* Strong Dark Overlay + Description on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-6 pb-8 text-white">
                        <p className="text-base md:text-lg leading-relaxed font-light tracking-wide">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Title Below */}
                  <div className="p-6 bg-gray-300">
                    <h3 className="lato-700 text-[19px] md:text-[21px] leading-tight text-[#117ABA]">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="block sm:hidden mt-8 flex justify-center gap-5">
        <button
          onClick={scrollPrev}
          className="rounded-full bg-white border-2 border-gray-300 p-3 shadow-md hover:bg-gray-50 transition"
          aria-label="Previous"
        >
          <ChevronLeft className="h-6 w-6 text-black" />
        </button>
        <button
          onClick={scrollNext}
          className="rounded-full bg-white border-2 border-gray-300 p-3 shadow-md hover:bg-gray-50 transition"
          aria-label="Next"
        >
          <ChevronRight className="h-6 w-6 text-black text-center " />
        </button>
      </div>
      {/* <Link href="/media-releases" className="text-white text-lg cursour-pointer text-center flex justify-center py-4">
      View More
      </Link> */}
    </section>
    </div>
  );
}