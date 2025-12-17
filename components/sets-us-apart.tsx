
// "use client";
// import { useEffect, useState } from "react";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

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

// export default function WhatSetsUsApart() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // const settings = {
//   //   dots: true,
//   //   infinite: true,
//   //   speed: 500,
//   //   slidesToShow: 3,
//   //   slidesToScroll: 1,
//   //   autoplay: true,
//   //   autoplaySpeed: 3500,
//   //   pauseOnHover: false,
//   //   pauseOnDotsHover: true,
//   //   arrows: false,
//   //   centerMode: true,
//   //   centerPadding: "0px",
//   //   afterChange: (index:any) => setCurrentSlide(index),
//   //   responsive: [
//   //     {
//   //       breakpoint: 1024,
//   //       settings: {
//   //         slidesToShow: 2,
//   //         centerMode: true,
//   //         centerPadding: "20px",
//   //       },
//   //     },
//   //     {
//   //       breakpoint: 768,
//   //       settings: {
//   //         slidesToShow: 1,
//   //         centerMode: false,
//   //         centerPadding: "0px",
//   //         dots: true,
//   //       },
//   //     },
//   //     {
//   //       breakpoint: 480,
//   //       settings: {
//   //         slidesToShow: 1,
//   //         centerMode: false,
//   //         centerPadding: "0px",
//   //       },
//   //     },
//   //   ],
//   // };
// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3, // ✅ default desktop/laptop
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3500,
//   pauseOnHover: false,
//   pauseOnDotsHover: true,
//   arrows: false,
//   centerMode: false,
//   centerPadding: "0px",
//   afterChange: (index: any) => setCurrentSlide(index),
//   responsive: [
//     {
//       breakpoint: 1280, // ✅ tablets & small laptops
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         centerMode: false,
//         centerPadding: "0px",
//       },
//     },
//     {
//       breakpoint: 768, // ✅ mobile
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         centerMode: false,
//         centerPadding: "0px",
//         dots: true,
//       },
//     },
//   ],
// };
// const settingsmob = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,            // mobile-first: 1 card
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3500,
//   pauseOnHover: false,
//   pauseOnDotsHover: true,
//   arrows: false,
//   centerMode: false,          // no peeking on mobile
//   centerPadding: "0px",
//   afterChange: (index: any) => setCurrentSlide(index),
//   responsive: [
//     {
//       breakpoint: 1024,       // < 1024px -> still 1 (explicitly ok)
//       settings: { slidesToShow: 1, centerMode: false, centerPadding: "0px" },
//     },
//     {
//       breakpoint: 1280,       // < 1280px -> 2 cards (tablet/large tablet)
//       settings: { slidesToShow: 2, centerMode: false, centerPadding: "0px" },
//     },
//     {
//       breakpoint: 9999,       // desktop and beyond -> 3 cards, can enable center
//       settings: { slidesToShow: 3, centerMode: true, centerPadding: "0px" },
//     },
//   ],
// }

//   return (
//     <section className="relative bg-white py-8">
//       <div className="mx-auto max-w-6xl px-6 text-center">
//         <h2 className="text-[24px] lato-400 text-[#117ABA] md:text-[28px] ">What Sets Us Apart</h2>
//         <p className="lato-400 mx-auto mt-2 max-w-3xl text-[#222] md:text-[20px]">
//           At UFlex, research-led innovation is the pillar of our business strategy.
//         </p>
//       </div>

//      <div className="mt-12 px-4 hidden sm:block">
//         <Slider {...settings}>
//           {items.map((card, index) => {
//             const isActive = currentSlide === index;
//             return (
//               <motion.div
//                 key={index}
//                 className="px-2"
//                 animate={{
//                   scale: isActive ? 1.05 : 0.95,
//                   y: isActive ? -10 : 0,
//                   transition: { duration: 0.3 },
//                 }}
//               >
//                 <div
//                   className={`overflow-hidden rounded-sm bg-white  transition-all duration-300 ${
//                     isActive ? "shadow-2xl" : "opacity-90"
//                   }`}
//                 >
//                   <Image
//                     src={card.img}
//                     alt={card.title}
//                     width={800}
//                     height={500}
//                     className="h-[280px] w-full object-cover"
//                   />
//                   <div className="flex flex-col items-center px-6 py-6 text-center">
//                     <h3 className="lato-800 mb-2 text-[18px] text-[#117ABA] md:text-xl">
//                       {card.title}
//                     </h3>
//                     <p className="text-[14px] text-gray-700 md:text-base">{card.desc}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </Slider>
//       </div>
//         <div className="mt-12 px-4 block sm:hidden">
//         <Slider {...settingsmob}>
//           {items.map((card, index) => {
//             const isActive = currentSlide === index;
//             return (
//               <motion.div
//                 key={index}
//                 className="px-2"
//                 animate={{
//                   scale: isActive ? 1.05 : 0.95,
//                   y: isActive ? -10 : 0,
//                   transition: { duration: 0.3 },
//                 }}
//               >
//                 <div
//                   className={`overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 ${
//                     isActive ? "shadow-2xl" : "opacity-90"
//                   }`}
//                 >
//                   <Image
//                     src={card.img}
//                     alt={card.title}
//                     width={800}
//                     height={500}
//                     className="h-[280px] w-full object-cover"
//                   />
//                   <div className="flex flex-col items-center px-6 py-6 text-center">
//                     <h3 className="lato-800 mb-2 text-[18px] text-[#117ABA] md:text-xl">
//                       {card.title}
//                     </h3>
//                     <p className="text-[14px] text-gray-700 md:text-base">{card.desc}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </Slider>
//       </div>
//       <style jsx global>{`
//       @media (max-width: 768px) {
//         .slick-list { padding: 0 !important; }
//         .slick-track { display: flex !important; align-items: stretch !important; }
//         .slick-slide { height: auto !important; }
//         .slick-slide > div { width: 100% !important; margin: 0 auto !important; display: flex !important; }
//         .slick-slide > div > div { width: 100% !important; max-width: 420px; } /* optional max width */
//       }
//     `}</style>
//     </section>
//   );
// }
"use client";

import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

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
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right") => {
    if (!scrollerRef.current) return;

    const card = scrollerRef.current.querySelector<HTMLElement>("[data-card]");
    if (!card) return;

    const scrollAmount = card.offsetWidth + 24; // card width + gap

    scrollerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,        // ❌ no infinite autoplay feel
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-white py-12 ">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[24px] lato-400 text-[#117ABA] md:text-[28px]">
          What Sets Us Apart
        </h2>
        <p className="mx-auto mt-2 max-w-3xl text-[#222] md:text-[20px]">
          At UFlex, research-led innovation is the pillar of our business strategy.
        </p>
      </div>

      {/* Carousel */}
      <section className="py-12 mx-auto max-w-7xl ">
        {/* Viewport */}
        <div ref={emblaRef} className="overflow-hidden">
          {/* Container */}
          <div className="flex gap-6">
            {items.map((card, index) => (
              <motion.div
                // key={card.href}
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
                <div className="block h-full">
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
                        <span className="mt-1 h-6 w-[2px] bg-[#D84A3B]" />
                        <h3 className="text-[18px] md:text-[20px] leading-tight text-[#117ABA]">
                          {card.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-sm text-[#6D6E71]">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
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

      {/* Scrollbar hide utility */}

    </section>
  );
}
