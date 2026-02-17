"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    title: "February 2026",
    desc: "RESILENT Q3 WITH 9M GROWTH, EBITDA ON TRACK MACRO TAILWINDS TO DRIVE GROWTH",
    img: "/images/new/m1.png",
  },
  {
    title: "February 2026",
    desc: "UFlex Launches Sustainable Water-Based Soft Touch Coating at PLASTINDIA 2026",
    img: "/images/new/m2.png",
  },
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
];

export default function MediaCardsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="w-screen relative bg-[#117ABA]">
      <section className="pt-10 pb-8 max-w-7xl mx-auto px-4 relative">

        {/* Desktop Arrows */}
        {/* <button
          onClick={scrollPrev}
          className="hidden lg:flex absolute left-[-60px] top-1/2 -translate-y-1/2 z-10 rounded-full bg-white p-3 shadow-lg hover:bg-gray-100"
          aria-label="Previous"
        >
          <ChevronLeft className="h-6 w-6 text-black" />
        </button>

        <button
          onClick={scrollNext}
          className="hidden lg:flex absolute right-[-60px] top-1/2 -translate-y-1/2 z-10 rounded-full bg-white p-3 shadow-lg hover:bg-gray-100"
          aria-label="Next"
        >
          <ChevronRight className="h-6 w-6 text-black" />
        </button> */}

        {/* Embla Viewport */}
        <div ref={emblaRef} className="overflow-hidden">
          {/* Embla Track */}
          <div className="flex gap-6">

            {items.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  flex-[0_0_100%]
                  sm:flex-[0_0_50%]
                  lg:flex-[0_0_33.333%]
                "
              >
                <div className="h-full">
                  <div className="group relative overflow-hidden rounded-lg bg-[#D72817] h-full flex flex-col">

                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority={index < 3}
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                        <div className="p-6 pb-8 text-white">
                          <p className="text-base leading-relaxed font-light">
                            {card.desc}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="p-6 bg-gray-300">
                      <h3 className="lato-700 text-[19px] md:text-[21px] text-[#117ABA]">
                        {card.title}
                      </h3>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* Mobile Arrows */}
        <div className="flex  justify-center gap-5 mt-8">
          <button
            onClick={scrollPrev}
            className="rounded-full bg-white border border-gray-400 p-3 hover:bg-gray-100 transition"
          >
            <ChevronLeft className="h-6 w-6 text-gray-400" />
          </button>
          <button
            onClick={scrollNext}
            className="rounded-full bg-white border border-gray-400 p-3 hover:bg-gray-100 transition"
          >
            <ChevronRight className="h-6 w-6 text-gray-400" />
          </button>
        </div>

      </section>
    </div>
  );
}
