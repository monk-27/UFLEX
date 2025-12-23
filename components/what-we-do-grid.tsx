


// const items = [
//   {
//     title: "Packaging Films and PET Resin",
//     href: "/packaging-films-business",
//     desc: "High-performance BOPET/BOPP films for diverse applications.",
//     img: "/images/flex.jpeg"
//     // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Packaging-Films-Business-faq-icon21.svg",
//   },
//    {
//     title: "Chemicals",
//     href: "/chemicals-business",
//     desc: "Speciality chemicals powering packaging performance.",
//     img: "/images/chem.jpeg"
//     // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Chemicals-Business-faq-icon20.svg",
//   },
//   {
//     title: "Aseptic Packaging",
//     href: "/aseptic-packaging-business",
//     desc: "Safe, shelf-stable solutions with extended freshness.",
//     img: "/images/aseptic.png"

//     // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Aseptic-Packaging-Business-faq-icon56.svg",
//   },
//   {
//     title: "Flexible Packaging",
//     href: "/flexible-packaging-business",
//     desc: "Custom structures for brand impact and efficiency.",
//     img: "/images/flexible.png"

//     // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Flexible-Packaging-Business-faq-icon36.svg",
//   },


//   {
//     title: "Holography",
//     href: "/holography-business",
//     desc: "Security and decorative holographic solutions.",
//     img: "/images/holographys.png"

//     // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Holography-Business-faq-icon47.svg",
//   },
//   {
//     title: "Engineering",
//     href: "/engineering-business",
//     desc: "Turnkey packaging machinery and systems.",
//     img: "/images/engg.png"

//     // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Engineering-Business-faq-icon45.svg",
//   },
//   {
//     title: "Printing Cylinders",
//     href: "/printing-cylinder-business",
//     desc: "Precision cylinders for consistent print quality.",
//     img: "/images/cyls.png"
//     // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Printing-Cylinder-Business-faq-icon03.svg",
//   },
//   {
//     title: "Flexible Tubes",
//     href: "/flexitube-business",
//     desc: "Durable, brandable tubes for personal care and more.",
//     img: "/images/flexible.jpeg"

//     // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/FlexiTube-Business-faq-icon59.svg",
//   },
// ]
// export type BusinessKey =
//   | "packaging-films"
//   | "chemicals"
//   | "aseptic"
//   | "flexible-packaging"
//   | "holography"
//   | "engineering"
//   | "printing-cylinders"
//   | "flexible-tubes";

// const items: {
//   title: string;
//   desc: string;
//   img: string;
//   href: any;
// }[] = [
//     {
//       title: "Packaging Films and PET Resin",
//       href: "/packaging-films-business",
//       desc: "UFlex is India’s largest end to end flexible packaging solutions company serving as a one stop shop for all flexible packaging needs.",
//       img: "/images/flex.jpeg",
//     },
//     {
//       title: "Flexible Packaging",
//       href: "/flexible-packaging-business",
//       desc: "UFlex is the largest Flexible Packaging Exporter with manufacturing capacity of over 80000 TPA.",
//       img: "/images/flexible.png",
//     },

//     {
//       title: "Aseptic Packaging",
//       href: "/aseptic-packaging-business",
//       desc: "Asepto is the Aseptic Liquid Packaging Brand from the House of UFlex Limited.",
//       img: "/images/aseptic.png",
//     },
//     {
//       title: "Chemicals",
//       href: "/chemicals-business",
//       desc: "UFlex’s Chemicals Business is a leading manufacturer of Liquid Inks, Adhesives and Speciality Coatings.",
//       img: "/images/chem.jpeg",
//     },

//     {
//       title: "Holography",
//       href: "/holography-business",
//       desc: "UFlex is one of the world’s leading organizations providing brand protection and anti-counterfeiting solutions to its customers.",
//       img: "/images/holographys.png",
//     },
//     {
//       title: "Engineering",
//       href: "/engineering-business",
//       desc: "Engineering Business of UFlex has grown to be the manufacturing major of top of the line packaging, printing and allied machines.",
//       img: "/images/engg.png",
//     },
//     {
//       title: "Printing Cylinders",
//       href: "/printing-cylinder-business",
//       desc: "UFlex Printing Cylinders Business has a State-of-the-art manufacturing facility for producing Rotogravure Cylinders, Flexo Plates & Sleeves.",
//       img: "/images/cyls.png",
//     },
//     {
//       title: "Flexible Tubes",
//       // key: "flexible-tubes",
//       href: "/flexitube-business",
//       desc: "Our innovative multilayer flexible tube packaging solutions have been designed especially for the beauty, personal care and pharma industries.",
//       img: "/images/flexible.jpeg",
//     },
//   ];
// export default function BusinessCardsCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);


//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // ✅ default desktop/laptop
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3500,
//     pauseOnHover: false,
//     pauseOnDotsHover: true,
//     arrows: false,
//     centerMode: false,
//     centerPadding: "0px",
//     afterChange: (index: any) => setCurrentSlide(index),
//     responsive: [
//       {
//         breakpoint: 1280, // ✅ tablets & small laptops
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           centerMode: false,
//           centerPadding: "0px",
//         },
//       },
//       {
//         breakpoint: 768, // ✅ mobile
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           centerMode: false,
//           centerPadding: "0px",
//           dots: true,
//         },
//       },
//     ],
//   };
//   const settingsmob = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,            // mobile-first: 1 card
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3500,
//     pauseOnHover: false,
//     pauseOnDotsHover: true,
//     arrows: false,
//     centerMode: false,          // no peeking on mobile
//     centerPadding: "0px",
//     afterChange: (index: any) => setCurrentSlide(index),
//     responsive: [
//       {
//         breakpoint: 1024,       // < 1024px -> still 1 (explicitly ok)
//         settings: { slidesToShow: 1, centerMode: false, centerPadding: "0px" },
//       },
//       {
//         breakpoint: 1280,       // < 1280px -> 2 cards (tablet/large tablet)
//         settings: { slidesToShow: 2, centerMode: false, centerPadding: "0px" },
//       },
//       {
//         breakpoint: 9999,       // desktop and beyond -> 3 cards, can enable center
//         settings: { slidesToShow: 3, centerMode: true, centerPadding: "0px" },
//       },
//     ],
//   }
//   const sliderRef = useRef<Slider | null>(null);

//   return (
//     <section className="relative max-w-7xl mx-auto w-full px-4 sm:px-0">


//       {/* DESKTOP */}
//       <div className="mt-12 px-4 hidden sm:block">
//         <Slider ref={sliderRef} {...settings}>
//           {items.map((card, index) => (
//             <motion.div key={card.href} className="px-2">
//               <Link
//                 href={card.href}
//                 className="block h-full"
//               >
//                 <div className="flex h-full flex-col bg-gray-100 shadow-sm rounded-lg gap-2">
//                   <div className="relative aspect-[16/9] w-full">
//                     <Image
//                       src={card.img}
//                       alt={card.title}
//                       fill
//                       className="object-cover"
//                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                     />
//                   </div>
//                   <div className="p-5 items-start">
//                     <div className="flex items-start gap-2 flex-nowrap justify-start">
//                       <span className="inline-block h-6 w-[2px] rounded bg-[#D84A3B]" />
//                       <h3 className="text-left text-[18px] md:text-[20px] manrope-500 leading-tight text-[#117ABA]">
//                         {card.title}
//                       </h3>
//                     </div>
//                     {/* <p className="items-start mt-3 text-left manrope-400 text-[#6D6E71]">
//                       {card.desc}
//                     </p> */}
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </Slider>
//       </div>

//       {/* MOBILE */}
//       <div className="mt-12 px-4 block sm:hidden">
//         <Slider ref={sliderRef} {...settingsmob}>
//           {items.map((card, index) => (
//             <motion.div key={card.href} className="px-2">
//               <Link
//                 href={`/business?tab=${card.href}`}
//                 className="block h-full"
//               >
//                 <div className="bg-gray-100 md:grid md:grid-cols-2 h-full">
//                   <div className="relative h-48 md:h-auto">
//                     <Image
//                       src={card.img}
//                       alt={card.title}
//                       fill
//                       className="object-cover"
//                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                     />
//                   </div>
//                   <div className="p-5 flex flex-col">
//                     <div className="flex items-center gap-2 flex-nowrap">
//                       <span className="inline-block h-4 w-[2px] rounded bg-[#D84A3B]" />
//                       <h3 className="text-[18px] md:text-[20px] manrope-500 leading-tight text-[#117ABA]">
//                         {card.title}
//                       </h3>
//                     </div>
//                     <p className="mt-3 text-sm leading-relaxed manrope-400 text-[#6D6E71]">
//                       {card.desc}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </Slider>
//       </div>

//       <div className="mt-6 flex items-center justify-center gap-4">
//         <button
//           onClick={() => sliderRef.current?.slickPrev()}
//           className="z-10 -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-gray-600 bg-white/80 p-3 shadow-sm opacity-50 hover:opacity-100 transition md:left-0"
//         >
//           <ChevronLeft className="h-5 w-5 text-gray-400" />
//         </button>

//         <button
//           onClick={() => sliderRef.current?.slickNext()}
//           className="z-10 -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-gray-600 bg-white/80 p-3 shadow-sm opacity-50 hover:opacity-100 transition md:right-0"
//         >
//           <ChevronRight className="h-5 w-5 text-gray-400" />
//         </button>
//       </div>


//       <style jsx global>{`
//   @media (max-width: 768px) {
//     .slick-list {
//       padding: 0 !important;
//     }
//     .slick-track {
//       display: flex !important;
//       align-items: stretch !important;
//     }
//     .slick-slide {
//       height: auto !important;
//     }
//     .slick-slide > div {
//       width: 100% !important;
//       margin: 0 auto !important;
//       display: flex !important;
//     }
//     .slick-slide > div > div {
//       width: 100% !important;
//       max-width: 420px;
//     }
//   }


//   .slick-dots {

//     margin-top: 24px; /* adjust as needed */
//     position: static !important; /* ensures it stays below slides */
//   }
// .slick-dots li.slick-active button:before {
//     color: #117ABA !important; /* blue shade */
//     opacity: 2;
//   }
//   /* Optional: center the dots perfectly */
//   .slick-dots li button:before {
//     font-size: 10px; /* smaller dots look cleaner on mobile */
//   }
// `}</style>

//     </section>
//   );
// }

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
    img: "/images/engg.png",
  },
  {
    title: "Printing Cylinders",
    href: "/printing-cylinder-business",
    desc: "Engineering Business of UFlex has grown to be the manufacturing major of top of the line packaging, printing and allied machines.",
    img: "/images/engg.png",
  },
  {
    title: "Flexible Tubes",
    href: "/flexitube-business",
    desc: "Engineering Business of UFlex has grown to be the manufacturing major of top of the line packaging, printing and allied machines.",
    img: "/images/engg.png",
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
