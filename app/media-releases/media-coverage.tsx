// "use client";

// import { useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// // Real media coverage items with links
// const mediaItems = [
//   {
//     title: "CNBC Bajar",
//     desc: "Earnings release for the quarter ended June 30, 2025 | Stable growth amidst tariff challenges",
//     img: "/images/new/cnbc.jpg",
//     link: "https://www.youtube.com/watch?v=i6sODEzr5Rs", // example real link - replace with actual
//   },
//   {
//     title: "NDTV Profit",
//     desc: "UFlex Limited recognised as a Top Employer 2025 in India",
//     img: "/images/new/ndtv.jpg",
//     link: "https://www.youtube.com/watch?v=856og5Bmfy4&t=2s", // replace with actual link
//   },
//   {
//     title: "NDTV Profit",
//     desc: "UFlex secures Indian patent for sustainable waterborne heat seal coating for food and consumer goods packaging",
//     img: "/images/new/ndtv-53.jpg",
//     link: "https://www.youtube.com/watch?v=xFJkpSlmdvc",
//   },
 
// ];

// export default function MediaCoverageCardsCarousel() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: false,
//     align: "start",
//     skipSnaps: false,
//     dragFree: false,
//   });

//   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

//   return (
//     <div className="relative">
//       <section className="pt-8 pb-4">
//         {/* Viewport */}
//         <div ref={emblaRef} className="overflow-hidden">
//           {/* Container - using grid for better layout control */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
//             {mediaItems.map((card, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <a
//                   href={card.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block h-full group"
//                 >
//                   <div className="h-full">
//                     <div className="group relative overflow-hidden rounded-lg bg-[#D72817] transition-all duration-500 h-full flex flex-col shadow-sm hover:shadow-xl">
//                       {/* Image */}
//                       <div className="relative aspect-[4/3] overflow-hidden">
//                         <Image
//                           src={card.img}
//                           alt={card.title}
//                           fill
//                           className="object-cover transition-transform duration-700 group-hover:scale-110"
//                           priority={index < 3}
//                         />
//                       </div>

//                       {/* Title & optional description */}
//                       <div className="p-5 sm:p-6 bg-gray-300 flex flex-col flex-grow">
//                         <h3 className="lato-700 text-[19px] md:text-[21px] leading-tight text-[#117ABA] group-hover:text-[#0d5a9e] transition-colors">
//                           {card.title}
//                         </h3>

//                         {/* Uncomment if you want description to appear */}
//                         {/* <p className="mt-3 text-sm text-gray-700 line-clamp-3">
//                           {card.desc}
//                         </p> */}

//                         {/* Optional: small arrow or "Read more" indicator */}
//                         {/* <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                           <span className="text-sm font-medium text-[#117ABA] inline-flex items-center gap-1">
//                             Read Article
//                             <ChevronRight size={16} />
//                           </span>
//                         </div> */}
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile Navigation Arrows */}
//         <div className="block sm:hidden mt-8 flex justify-center gap-6">
//           <button
//             onClick={scrollPrev}
//             className="rounded-full bg-white border-2 border-gray-300 p-3 shadow-md hover:bg-gray-50 transition"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="h-6 w-6 text-black" />
//           </button>
//           <button
//             onClick={scrollNext}
//             className="rounded-full bg-white border-2 border-gray-300 p-3 shadow-md hover:bg-gray-50 transition"
//             aria-label="Next slide"
//           >
//             <ChevronRight className="h-6 w-6 text-black" />
//           </button>
//         </div>

//         {/* Optional View More link */}
//         {/* <div className="text-center mt-8">
//           <Link
//             href="/media-coverage"
//             className="inline-flex items-center gap-2 text-[#117ABA] font-medium hover:underline"
//           >
//             View More Coverage
//             <ChevronRight size={18} />
//           </Link>
//         </div> */}
//       </section>
//     </div>
//   );
// }


"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

// Media coverage items
const mediaItems = [
  {
    title: "Fortune India",
    img: "https://media.fortuneindia.com/fortune-india/2026-02-09/q5625jm2/uflex.jpg?w=640&auto=format,compress&q=80",
    link: "https://www.fortuneindia.com/business-news/india-eu-us-trade-deals-to-boost-packaging-sector-uflexs-jeevaraj-gopal-pillai/130223",
  },
  {
    title: "ET Edge Insights",
    img: "https://etedge-insights.com/wp-content/uploads/2026/01/ET-Edge_imresizer.jpg",
    link: "https://etedge-insights.com/resources/brands-speak/hr-as-a-strategic-growth-engine-in-manufacturing-inside-uflexs-people-first-playbook/",
  },
  {
    title: "NDTV Profit",
    img: "/images/new/nn.png",
    link: "https://www.youtube.com/watch?v=S8-J23J8O4c",
  },
  {
    title: "CNBC Bajar",
    img: "/images/new/cnbc.jpg",
    link: "https://www.youtube.com/watch?v=i6sODEzr5Rs",
  },
  {
    title: "NDTV Profit",
    img: "/images/new/ndtv.jpg",
    link: "https://www.youtube.com/watch?v=856og5Bmfy4&t=2s",
  },
];

export default function MediaCoverageCardsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      skipSnaps: true,
      align: "start",
      containScroll: false,
    },
    [
      AutoScroll({
        speed: 0.6,                  // Adjust: 0.4 = slower, 0.8 = faster
        direction: "forward",
        startDelay: 0,
        stopOnMouseEnter: true,      // Pause when hovering
        stopOnInteraction: false,    // Don't pause on drag (resumes after)
        stopOnFocusIn: true,
      }),
    ]
  );

  // Ensure auto-scroll starts (sometimes needed in some setups)
  useEffect(() => {
    if (emblaApi) {
      emblaApi.plugins()?.autoScroll?.play();
    }
  }, [emblaApi]);

  return (
    <section className="pt-8 pb-4">
      <div ref={emblaRef} className="overflow-hidden">
        {/* Track with negative margin to allow consistent gaps in loop */}
        <div className="flex -mx-4">
          {mediaItems.map((card, index) => (
            <motion.div
              key={index}
              className="
                flex-shrink-0
                px-4                          /* half of total gap → 32px total spacing */
                w-full
                sm:w-[calc(50%-32px)]         /* full gap subtracted for two columns */
                lg:w-[calc(33.333%-32px)]     /* full gap subtracted for three columns */
              "
            >
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group"
              >
                <div className="relative overflow-hidden rounded-lg bg-[#D72817] h-full flex flex-col shadow-md">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Title */}
                  <div className="p-5 bg-gray-300">
                    <h3 className="lato-700 text-[19px] text-[#117ABA]">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}