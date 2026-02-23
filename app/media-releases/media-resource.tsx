"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    title: "February 2026",
    desc: "Resilient Q3 with 9M Growth, EBITDA on Track; Macro Tailwinds to Drive Growth",
    img: "/images/new/fy26.jpeg",
    link:"https://www.uflexltd.com/pdf/Press-Release/2026/PR_12Feb26_UFlex_Q3FY26_Earnings.pdf"
  },
  {
    title: "February 2026",
    desc: "UFlex Launches Sustainable Water-Based Soft Touch Coating at PLASTINDIA 2026",
    img: "/images/new/fy261.jpeg",
    link:"https://www.uflexltd.com/pdf/Press-Release/2026/PN_05Feb26_UFlex_PlastIndia_Ceruflex500.pdf"
  },
  {
    title: "August 2025",
    desc: "Earnings release for the quarter ended June 30, 2025 | Stable growth amidst tariff challenges",
    img: "/images/new/m1.jpg",
    link:"https://www.uflexltd.com/pdf/Press-Release/2025/PR_13Aug25_UFlex_Q1FY26_Earnings.pdf"
  },
  {
    title: "August 2025",
    desc: "UFlex Limited recognised as a Top Employer 2025 in India",
    img: "/images/awards/b5.png",
    link:"https://www.uflexltd.com/pdf/Press-Release/2025/PN_07Aug25_UFlex_TE2025.pdf"
  },
  {
    title: "July 2025",
    desc: "UFlex secures Indian patent for sustainable waterborne heat seal coating for food and consumer goods packaging",
    img: "/images/new/m2.jpg",
    link:"https://www.uflexltd.com/pdf/Press-Release/2025/PN_22Jul25_UFlex_IP_HSCoating.pdf"
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
                  flex-[0_0_90%]
                  sm:flex-[0_0_50%]
                  lg:flex-[0_0_32.12%]
                "
              >
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <div className="h-full">
                  <div className="group relative overflow-hidden rounded-lg bg-[#D72817] h-full flex flex-col">

                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        className="object-fill transition-transform duration-700 group-hover:scale-110"
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
              </a>
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
