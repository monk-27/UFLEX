

"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    title: "Packaging Films and PET Resin",
    href: "/packaging-films-business",
    desc: "UFlex is India’s largest end to end flexible packaging solutions company serving as a one stop shop for all flexible packaging needs.",
    img: "/images/flex.jpeg",
  },
  {
    title: "Flexible Packaging",
    href: "/flexible-packaging-business",
    desc: "UFlex is the largest Flexible Packaging Exporter with manufacturing capacity of over 80000 TPA.",
    img: "/images/flexible.png",
  },
  {
    title: "Aseptic Packaging",
    href: "/aseptic-packaging-business",
    desc: "Asepto is the Aseptic Liquid Packaging Brand from the House of UFlex Limited.",
    img: "/images/aseptic.png",
  },
  {
    title: "Chemicals",
    href: "/chemicals-business",
    desc: "UFlex’s Chemicals Business is a leading manufacturer of Liquid Inks, Adhesives and Speciality Coatings.",
    img: "/images/chem.jpeg",
  },
  {
    title: "Holography",
    href: "/holography-business",
    desc: "UFlex is one of the world’s leading organizations providing brand protection and anti-counterfeiting solutions to its customers.",
    img: "/images/holographys.png",
  },
  {
    title: "Engineering",
    href: "/engineering-business",
    desc: "Engineering Business of UFlex has grown to be the manufacturing major of top of the line packaging, printing and allied machines.",
    img: "/images/heroengg.png",
  },
  {
    title: "Printing Cylinders",
    href: "/printing-cylinder-business",
    desc: "Engineering Business of UFlex has grown to be the manufacturing major of top of the line packaging, printing and allied machines.",
    img: "/images/heroprinting.png",
  },
  {
    title: "Flexible Tubes",
    href: "/flexitube-business",
    desc: "Engineering Business of UFlex has grown to be the manufacturing major of top of the line packaging, printing and allied machines.",
    img: "images/heroflexi.png",
  },
];

export default function BusinessCardsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,        // ❌ no infinite autoplay feel
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="pt-12">
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        {/* Container */}
        <div className="flex gap-6">
          {items.map((card, index) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="
              flex-[0_0_100%]
  sm:flex-[0_0_50%]
  lg:flex-[0_0_33.3333%]
  flex-shrink-0 gap-6
              "
            >
              <Link href={card.href} className="block h-full">
                <div className="group flex h-full flex-col overflow-hidden rounded-sm bg-gray-100 shadow-sm hover:shadow-md transition">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex gap-2">
                      {/* <span className="mt-1 h-6 w-[2px] bg-[#D84A3B]" /> */}
                      <h3 className="lato-700 text-[18px] md:text-[20px] leading-tight text-[#117ABA]">
                        {card.title}
                      </h3>
                    </div>

                    {/* <p className="mt-3 text-sm text-[#6D6E71]">
                      {card.desc}
                    </p> */}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={scrollPrev}
          className="rounded-full border border-gray-400 p-3 hover:bg-gray-100 transition"
        >
          <ChevronLeft className="h-5 w-5 text-gray-400" />
        </button>

        <button
          onClick={scrollNext}
          className="rounded-full border border-gray-400 p-3 hover:bg-gray-100 transition"
        >
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </button>
      </div>
    </section>
  );
}
