
// "use client";

// import { useCallback, useRef } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import useEmblaCarousel from "embla-carousel-react";
// import Link from "next/link";

// const items = [
//   {
//     img: "/images/trusted.png",
//     title: "A trusted partner to global brands in 150+ countries",
//     desc: "Delivering excellence in sustainable packaging solutions, we empower global brands worldwide with innovative technologies and unmatched reliability.",
//   },
//   {
//     img: "/images/endtoend.png",
//     title: "End-to-end packaging solutions for diverse industries",
//     desc: "UFlex serves as a one-stop-shop flexible packaging solution provider serving varied sectors spanning FMCG, consumer product goods, pharmaceuticals, building materials, automobiles, and more.",
//   },
//   {
//     img: "/images/whats1.jpeg",
//     title: "India's first NABL-accredited R&D lab certified to ISO/IEC 17025:2017 standards",
//     desc: "Located in Noida, our state-of-the-art facility leads innovation in inks, adhesives, and coatings with globally recognized quality and precision.",
//   },
//   {
//     img: "/images/putting.png",
//     title: "Putting India on the global map for aseptic packaging",
//     desc: "UFlex proudly represents India on the global aseptic packaging map, delivering innovative and sustainable solutions that meet the evolving needs of the beverage industry worldwide.",
//   },
//   {
//     img: "/images/what2.jpeg",
//     title: "Comprehensive and sustainable packaging ecosystems",
//     desc: "From producing films, converting, engineering, printing cylinders, chemicals, holography, and aseptic packaging to recycling solutions, we deliver eco-friendly packaging solutions for a sustainable future.",
//   },
// ];

// export default function WhatSetsUsApartCarousel() {
//   const scrollerRef = useRef<HTMLDivElement>(null);

//   const scrollByCard = (direction: "left" | "right") => {
//     if (!scrollerRef.current) return;

//     const card = scrollerRef.current.querySelector<HTMLElement>("[data-card]");
//     if (!card) return;

//     const scrollAmount = card.offsetWidth + 24; // card width + gap

//     scrollerRef.current.scrollBy({
//       left: direction === "left" ? -scrollAmount : scrollAmount,
//       behavior: "smooth",
//     });
//   };
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: false,        // ❌ no infinite autoplay feel
//     align: "start",
//     skipSnaps: false,
//     dragFree: false,
//   });

//   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

//   return (
//     <section className="bg-white pt-12 ">
//       {/* Heading */}
//       <div className="text-center">
//         <h2 className="text-[24px] lato-700 text-[#117ABA] md:text-[42px] ">
//           What Sets Us Apart
//         </h2>
//         <p className="mx-auto mt-2 max-w-5xl text-[#222] md:text-[24px]">
//           At UFlex, research-led innovation is the pillar of our business strategy.
//         </p>
//       </div>

//       {/* Carousel */}
//       <section className="py-12 mx-auto max-w-7xl ">
//         {/* Viewport */}
//         <div ref={emblaRef} className="overflow-hidden">
//           {/* Container */}
//           <div className="flex gap-6">
//             {items.map((card, index) => (
//               <motion.div
//                 // key={card.href}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//                 viewport={{ once: true }}
//                 className="
//                 flex-[0_0_100%]
//   sm:flex-[0_0_50%]
//   lg:flex-[0_0_32.01%]
//   flex-shrink-0 gap-6
                
                
//               "
//               >
//                 <div className="block h-full">
//                   <div className="group flex h-full flex-col overflow-hidden rounded-sm bg-gray-100 shadow-sm hover:shadow-md transition">
//                     {/* Image */}
//                     <div className="relative aspect-[16/9] overflow-hidden">
//                       <Image
//                         src={card.img}
//                         alt={card.title}
//                         fill
//                         className="object-cover transition-transform duration-500 group-hover:scale-105"
//                       />
//                     </div>

//                     {/* Content */}
//                     <div className="relative p-5 pl-8">
//                       {/* Corner red line */}
//                       {/* <span
//                         className="absolute left-4 top-6 h-6 w-[2px] bg-[#D84A3B]"
//                       /> */}

//                       <h3 className="lato-700 text-[18px] md:text-[20px] leading-tight text-[#117ABA]">
//                         {card.title}
//                       </h3>

//                       <p className="mt-6 lato-400 text-[14px] md:text-[18px] text-black  leading-relaxed">
//                         {card.desc}
//                       </p>
//                     </div>


//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Controls */}
//         <div className="mt-6 flex justify-center gap-4">
//           <button
//             onClick={scrollPrev}
//             className="rounded-full border border-gray-400 p-3 hover:bg-gray-100 transition"
//           >
//             <ChevronLeft className="h-5 w-5 text-gray-400" />
//           </button>

//           <button
//             onClick={scrollNext}
//             className="rounded-full border border-gray-400 p-3 hover:bg-gray-100 transition"
//           >
//             <ChevronRight className="h-5 w-5 text-gray-400" />
//           </button>
//         </div>
//       </section>

//       {/* Scrollbar hide utility */}

//     </section>
//   );
// }

"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const items = [
  {
    img: "/images/trusted.png",
    title: "A trusted partner to global brands in 150+ countries",
    desc: "Delivering excellence in sustainable packaging solutions, we empower global brands worldwide with innovative technologies and unmatched reliability.",
  },
  {
    img: "/images/endtoend.png",
    title: "End-to-end packaging solutions for diverse industries",
    desc: "UFlex serves as a one-stop-shop flexible packaging solution provider serving varied sectors spanning FMCG, consumer product goods, pharmaceuticals, building materials, automobiles, and more.",
  },
  {
    img: "/images/whats1.jpeg",
    title: "India's first NABL-accredited R&D lab certified to ISO/IEC 17025:2017 standards",
    desc: "Located in Noida, our state-of-the-art facility leads innovation in inks, adhesives, and coatings with globally recognized quality and precision.",
  },
  {
    img: "/images/putting.png",
    title: "Putting India on the global map for aseptic packaging",
    desc: "UFlex proudly represents India on the global aseptic packaging map, delivering innovative and sustainable solutions that meet the evolving needs of the beverage industry worldwide.",
  },
  {
    img: "/images/what2.jpeg",
    title: "Comprehensive and sustainable packaging ecosystems",
    desc: "From producing films, converting, engineering, printing cylinders, chemicals, holography, and aseptic packaging to recycling solutions, we deliver eco-friendly packaging solutions for a sustainable future.",
  },
];

export default function WhatSetsUsApartCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-white pt-12 pb-16">
      {/* Heading */}
      <div className="text-center px-4">
        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lato-700 text-[#117ABA]">
          What Sets Us Apart
        </h2>
        <p className="mx-auto mt-3 max-w-4xl text-[#222] text-[18px] md:text-[24px] leading-relaxed">
          At UFlex, research-led innovation is the pillar of our business strategy.
        </p>
      </div>

      {/* Carousel */}
      <div className="py-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">
            {items.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="
                  flex-[0_0_100%]
                  sm:flex-[0_0_50%]
                  lg:flex-[0_0_31.63%]
                  flex-shrink-0
                "
              >
                <div className="group flex h-full flex-col overflow-hidden rounded-lg bg-white   transition-all duration-300">
                  {/* Taller image – no stretching */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 md:py-4 md:px-3">
                    <h3 className="lato-700 text-[18px] md:text-[20px] lg:text-[21px] leading-tight text-[#117ABA] mb-4">
                      {card.title}
                    </h3>

                    <p className="lato-400 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800 leading-relaxed flex-1">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-10 flex justify-center gap-5">
          <button
            onClick={scrollPrev}
                        className="rounded-full border-1 border-gray-300 p-4 hover:bg-gray-100 hover:border-gray-200 transition-all duration-200"

            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-300" />
          </button>

          <button
            onClick={scrollNext}
            className="rounded-full border-1 border-gray-300 p-4 hover:bg-gray-100 hover:border-gray-200 transition-all duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
}