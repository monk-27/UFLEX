"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Real media coverage items with links
const mediaItems = [
  {
    title: "CNBC Bajar",
    desc: "Earnings release for the quarter ended June 30, 2025 | Stable growth amidst tariff challenges",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/CNBC-Bajar18.jpg",
    link: "https://www.youtube.com/watch?v=i6sODEzr5Rs", // example real link - replace with actual
  },
  {
    title: "NDTV Profit",
    desc: "UFlex Limited recognised as a Top Employer 2025 in India",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/NDTV-Profit34.jpg",
    link: "https://www.youtube.com/watch?v=856og5Bmfy4&t=2s", // replace with actual link
  },
  {
    title: "NDTV Profit",
    desc: "UFlex secures Indian patent for sustainable waterborne heat seal coating for food and consumer goods packaging",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/NDTV-Profit53.jpg",
    link: "https://www.youtube.com/watch?v=xFJkpSlmdvc",
  },
  // Add more real items here with correct links
  // Example:
  // {
  //   title: "Economic Times",
  //   desc: "UFlex to invest over Rs 700 crore in Karnataka plant expansion",
  //   img: "...",
  //   link: "https://economictimes.indiatimes.com/...",
  // },
];

export default function MediaCoverageCardsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <section className="pt-8 pb-4">
        {/* Viewport */}
        <div ref={emblaRef} className="overflow-hidden">
          {/* Container - using grid for better layout control */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {mediaItems.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full group"
                >
                  <div className="h-full">
                    <div className="group relative overflow-hidden rounded-lg bg-[#D72817] transition-all duration-500 h-full flex flex-col shadow-sm hover:shadow-xl">
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={card.img}
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          priority={index < 3}
                        />
                      </div>

                      {/* Title & optional description */}
                      <div className="p-5 sm:p-6 bg-gray-300 flex flex-col flex-grow">
                        <h3 className="lato-700 text-[19px] md:text-[21px] leading-tight text-[#117ABA] group-hover:text-[#0d5a9e] transition-colors">
                          {card.title}
                        </h3>

                        {/* Uncomment if you want description to appear */}
                        {/* <p className="mt-3 text-sm text-gray-700 line-clamp-3">
                          {card.desc}
                        </p> */}

                        {/* Optional: small arrow or "Read more" indicator */}
                        {/* <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-sm font-medium text-[#117ABA] inline-flex items-center gap-1">
                            Read Article
                            <ChevronRight size={16} />
                          </span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="block sm:hidden mt-8 flex justify-center gap-6">
          <button
            onClick={scrollPrev}
            className="rounded-full bg-white border-2 border-gray-300 p-3 shadow-md hover:bg-gray-50 transition"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-black" />
          </button>
          <button
            onClick={scrollNext}
            className="rounded-full bg-white border-2 border-gray-300 p-3 shadow-md hover:bg-gray-50 transition"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-black" />
          </button>
        </div>

        {/* Optional View More link */}
        {/* <div className="text-center mt-8">
          <Link
            href="/media-coverage"
            className="inline-flex items-center gap-2 text-[#117ABA] font-medium hover:underline"
          >
            View More Coverage
            <ChevronRight size={18} />
          </Link>
        </div> */}
      </section>
    </div>
  );
}