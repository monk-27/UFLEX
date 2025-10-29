
// "use client"

// import type React from "react"

// import Image from "next/image"
// import Link from "next/link"
// import { useCallback, useEffect, useMemo, useState } from "react"
// import useEmblaCarousel from "embla-carousel-react"
// import Autoplay from "embla-carousel-autoplay"
// import type { EmblaOptionsType } from "embla-carousel"
// import { motion } from "framer-motion"
// import { cn } from "@/lib/utils"

// type Item = {
//   title: string
//   href: string
//   desc: string
//   img: string
// }

// const items: Item[] = [
//   {
//     title: "Packaging Films Business",
//     href: "/packaging-films-business",
//     desc: "High-performance BOPET/BOPP films for diverse applications.",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Packaging-Films-Business-faq-icon21.svg",
//   },
//   {
//     title: "Flexible Packaging Business",
//     href: "/flexible-packaging-business",
//     desc: "Custom structures for brand impact and efficiency.",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Flexible-Packaging-Business-faq-icon36.svg",
//   },
//   {
//     title: "Aseptic Packaging Business",
//     href: "/aseptic-packaging-business",
//     desc: "Safe, shelf-stable solutions with extended freshness.",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Aseptic-Packaging-Business-faq-icon56.svg",
//   },
//   {
//     title: "Chemicals",
//     href: "/chemicals-business",
//     desc: "Speciality chemicals powering packaging performance.",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Chemicals-Business-faq-icon20.svg",
//   },
//   {
//     title: "Holography Business",
//     href: "/holography-business",
//     desc: "Security and decorative holographic solutions.",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Holography-Business-faq-icon47.svg",
//   },
//   {
//     title: "Engineering Business",
//     href: "/engineering-business",
//     desc: "Turnkey packaging machinery and systems.",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Engineering-Business-faq-icon45.svg",
//   },
//   {
//     title: "Printing Cylinders Business",
//     href: "/printing-cylinder-business",
//     desc: "Precision cylinders for consistent print quality.",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Printing-Cylinder-Business-faq-icon03.svg",
//   },
//   {
//     title: "FlexiTubes Business",
//     href: "/flexitube-business",
//     desc: "Durable, brandable tubes for personal care and more.",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/FlexiTube-Business-faq-icon59.svg",
//   },
// ]

// /** 1 card @ xs, 2 @ sm, 3 @ lg, 4 @ xl */
// const slideClass = "embla__slide basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 shrink-0"

// export function WhatWeDoCarousel({ options, className }: { options?: EmblaOptionsType; className?: string }) {

//   const themeVars: React.CSSProperties = {
//     //   // bg: #F7EFEC, border: #E7D6D1
//     ["--card-bg" as any]: "#E7D6D1",
//     ["--card-border" as any]: "rgba(13, 27, 62, 0.08)",
//     ["--card-heading" as any]: "#0B3C7D",
//     ["--card-text" as any]: "#2B2F38",
//     ["--chip-bg" as any]: "rgba(11,60,125,0.07)",
//     ["--chip-border" as any]: "rgba(11,60,125,0.18)",
//     ["--dot-active" as any]: "#0B3C7D",
//   }

//   const plugins = useMemo(
//     () => [
//       Autoplay({
//         delay: 3500,
//         stopOnMouseEnter: true,
//         stopOnInteraction: false,
//       }),
//     ],
//     [],
//   )

//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true, align: "start", slidesToScroll: 1, containScroll: "trimSnaps", ...options },
//     plugins,
//   )

//   const [selectedIndex, setSelectedIndex] = useState(0)
//   const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return
//     setSelectedIndex(emblaApi.selectedScrollSnap())
//   }, [emblaApi])

//   useEffect(() => {
//     if (!emblaApi) return
//     setScrollSnaps(emblaApi.scrollSnapList())
//     emblaApi.on("select", onSelect)
//     onSelect()
//   }, [emblaApi, onSelect])

//   const scrollTo = (i: number) => emblaApi?.scrollTo(i)
//   const scrollPrev = () => emblaApi?.scrollPrev()
//   const scrollNext = () => emblaApi?.scrollNext()

//   return (
//     <section className={cn("relative", className)} style={themeVars}>
//       <div className="embla group">
//         <div className="embla__viewport overflow-hidden" ref={emblaRef}>
//           <div className="embla__container flex gap-4 will-change-transform">
//             {items.map((it, i) => (
//               <motion.article
//                 key={it.href}
//                 className={cn(
//                   slideClass,
//                   "relative rounded-xl overflow-hidden border",
//                   "bg-[var(--card-bg)] border-[var(--card-border)]",
//                 )}
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.3, delay: i * 0.03 }}
//               >
//                 {/* Image well: soft background, subtle inner ring */}
//                 <div className="relative aspect-[4/3] w-full bg-white/70">
//                   <div className="absolute inset-0 ring-1 ring-black/5 rounded-none pointer-events-none" />
//                   {/* SVGs: use object-contain for crisp edges */}
//                   <Image
//                     src={it.img}
//                     alt={it.title}
//                     fill
//                     className="object-contain p-6"
//                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                     priority={i === 0}
//                     unoptimized
//                   />
//                   {/* soft top gradient to anchor content area */}
//                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.02] via-transparent to-transparent" />
//                 </div>

//                 {/* Content */}
//                 <div className="p-4 md:p-5">
//                   <h4 className="font-semibold text-lg leading-tight text-[color:var(--card-heading)]">{it.title}</h4>
//                   <p className="text-sm mt-1 text-[color:var(--card-text)]/90">{it.desc}</p>

//                   <div className="mt-3 flex items-center gap-2">
//                     <Link
//                       href={it.href}
//                       className="inline-flex items-center rounded-full border px-3 py-1.5 text-xs md:text-sm transition
//                                  bg-[var(--chip-bg)] border-[color:var(--chip-border)] text-[color:var(--card-heading)] hover:brightness-95"
//                     >
//                       Learn more <span className="ml-1">→</span>
//                     </Link>
//                     {/* <Link
//                       href={it.href}
//                       className="inline-flex items-center rounded-full px-3 py-1.5 text-xs md:text-sm transition
//                                  text-[color:var(--card-heading)] hover:underline underline-offset-4"
//                     >
//                       Read more
//                     </Link> */}
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </div>

//         {/* arrows */}
//         <button
//           aria-label="Previous"
//           onClick={scrollPrev}
//           className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-black/10 text-[color:var(--card-heading)] backdrop-blur hover:bg-black/20"
//         >
//           ‹
//         </button>
//         <button
//           aria-label="Next"
//           onClick={scrollNext}
//           className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-black/10 text-[color:var(--card-heading)] backdrop-blur hover:bg-black/20"
//         >
//           ›
//         </button>

//         {/* dots */}
//         <div className="mt-3 flex items-center justify-center gap-2">
//           {scrollSnaps.map((_, idx) => (
//             <button
//               key={idx}
//               aria-label={`Go to slide ${idx + 1}`}
//               aria-current={idx === selectedIndex ? "true" : "false"}
//               className={cn(
//                 "h-2.5 w-2.5 rounded-full transition",
//                 idx === selectedIndex
//                   ? "bg-[var(--dot-active)]"
//                   : "bg-[color:var(--card-border)] hover:bg-[var(--dot-active)]/50",
//               )}
//               onClick={() => scrollTo(idx)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const items = [
  {
    title: "Packaging Films Business",
    href: "/packaging-films-business",
    desc: "High-performance BOPET/BOPP films for diverse applications.",
    img:"/images/films.jpeg"
    // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Packaging-Films-Business-faq-icon21.svg",
  },
  {
    title: "Flexible Packaging Business",
    href: "/flexible-packaging-business",
    desc: "Custom structures for brand impact and efficiency.",
    img:"/images/flexible.jpeg"

    // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Flexible-Packaging-Business-faq-icon36.svg",
  },
  {
    title: "Aseptic Packaging Business",
    href: "/aseptic-packaging-business",
    desc: "Safe, shelf-stable solutions with extended freshness.",
    img:"/images/aseptic.jpeg"

    // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Aseptic-Packaging-Business-faq-icon56.svg",
  },
  {
    title: "Chemicals",
    href: "/chemicals-business",
    desc: "Speciality chemicals powering packaging performance.",
    img:"/images/chemical.png"
    // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Chemicals-Business-faq-icon20.svg",
  },
  {
    title: "Holography Business",
    href: "/holography-business",
    desc: "Security and decorative holographic solutions.",
    img:"/images/holography.png"

    // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Holography-Business-faq-icon47.svg",
  },
  {
    title: "Engineering Business",
    href: "/engineering-business",
    desc: "Turnkey packaging machinery and systems.",
    img:"/images/eng.jpeg"

    // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Engineering-Business-faq-icon45.svg",
  },
  {
    title: "Printing Cylinders Business",
    href: "/printing-cylinder-business",
    desc: "Precision cylinders for consistent print quality.",
    img:"/images/cyl.jpeg"
    // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Printing-Cylinder-Business-faq-icon03.svg",
  },
  {
    title: "FlexiTubes Business",
    href: "/flexitube-business",
    desc: "Durable, brandable tubes for personal care and more.",
        img:"/images/flexible.jpeg"

    // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/FlexiTube-Business-faq-icon59.svg",
  },
]

export default function BusinessCardsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3500,
  //   pauseOnHover: false,
  //   pauseOnDotsHover: true,
  //   arrows: false,
  //   centerMode: true,
  //   centerPadding: "0px",
  //   afterChange: (index:any) => setCurrentSlide(index),
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         centerMode: true,
  //         centerPadding: "20px",
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         centerMode: false,
  //         centerPadding: "0px",
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         centerMode: false,
  //         centerPadding: "0px",
  //       },
  //     },
  //   ],
  // };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // ✅ default desktop/laptop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    arrows: false,
    centerMode: false,
    centerPadding: "0px",
    afterChange: (index: any) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1280, // ✅ tablets & small laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768, // ✅ mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
          dots: true,
        },
      },
    ],
  };
  const settingsmob = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,            // mobile-first: 1 card
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    arrows: false,
    centerMode: false,          // no peeking on mobile
    centerPadding: "0px",
    afterChange: (index: any) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,       // < 1024px -> still 1 (explicitly ok)
        settings: { slidesToShow: 1, centerMode: false, centerPadding: "0px" },
      },
      {
        breakpoint: 1280,       // < 1280px -> 2 cards (tablet/large tablet)
        settings: { slidesToShow: 2, centerMode: false, centerPadding: "0px" },
      },
      {
        breakpoint: 9999,       // desktop and beyond -> 3 cards, can enable center
        settings: { slidesToShow: 3, centerMode: true, centerPadding: "0px" },
      },
    ],
  }

  return (
    <section className="relative ">


      <div className="mt-12 px-4 hidden sm:block">
        <Slider {...settings}>
          {items.map((card, index) => {
            const isActive = currentSlide === index;
            return (
              <motion.div
                key={index}
                className="px-2"
              // animate={{
              //   scale: isActive ? 1.05 : 0.95,
              //   y: isActive ? -10 : 0,
              //   transition: { duration: 0.3 },
              // }}
              >
                {/* <div
                  className={`overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 ${isActive ? "shadow-2xl" : "opacity-90"
                    }`}
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={800}
                    height={500}
                    className="h-[280px] w-full object-cover"
                  />
                  <div className="flex flex-col items-center px-6 py-6 text-center">
                    <h3 className="poppins-800 mb-2 text-[18px] text-[#0B3C7D] md:text-xl">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-gray-700 md:text-base">{card.desc}</p>
                  </div>
                </div> */}
                <div className="flex h-full flex-col">
                  {/* Photo: exactly like the shot — top half, 16:9 */}
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"

                    />
                  </div>


                  {/* Content */}
                  <div className="p-5 items-start ">
                    {/* Title with slim red accent bar */}
                    <div className="flex items-start gap-2 flex-nowrap">
                      <span className="inline-block h-4 w-[2px] rounded bg-[#D84A3B]" />
                      <h3 className="text-[18px] md:text-[20px] poppins-500 leading-tight text-[#2C629F]">
                        {card.title}
                      </h3>
                    </div>


                    <p className="items-start mt-3  leading-relaxed poppins-400 text-[#6D6E71]">
                      {card.desc}
                    </p>


                    {/* Arrow link – thin red arrow, aligned left */}
                    <Link
                      href={card.href}
                      className="mt-6 inline-flex items-start gap-2 text-[#D84A3B] hover:opacity-80"
                      aria-label={`Open ${card.title}`}
                    >
                      <svg width="38" height="12" viewBox="0 0 38 12" fill="none" aria-hidden="true">
                        <path d="M1 6H34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M29.5 1L35 6L29.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Slider>
      </div>
      <div className="mt-12 px-4 block sm:hidden">
        <Slider {...settingsmob}>
          {items.map((card, index) => {
            const isActive = currentSlide === index;
            return (
              <motion.div
                key={index}
                className="px-2"
              // animate={{
              //   scale: isActive ? 1.05 : 0.95,
              //   y: isActive ? -10 : 0,
              //   transition: { duration: 0.3 },
              // }}
              >
                {/* <div
                  className={`overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 ${
                    isActive ? "shadow-2xl" : "opacity-90"
                  }`}
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={800}
                    height={500}
                    className="h-[280px] w-full object-cover"
                  />
                  <div className="flex flex-col items-center px-6 py-6 text-center">
                    <h3 className="poppins-800 mb-2 text-[18px] text-[#0B3C7D] md:text-xl">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-gray-700 md:text-base">{card.desc}</p>
                  </div>
                </div> */}
                <div className="md:grid md:grid-cols-2 h-full">
                  <div className="relative h-48 md:h-auto">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"

                    />
                  </div>
                  <div className="p-5 flex flex-col">
                    <div className="flex items-center gap-2 flex-nowrap">
                      <span className="inline-block h-4 w-[2px] rounded bg-[#D84A3B]" />
                      <h3 className="text-[18px] md:text-[20px] poppins-500 leading-tight text-[#2C629F]">
                        {card.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed poppins-400 text-[#6D6E71]">{card.desc}</p>
                    <Link
                      href={card.href}
                      className="mt-6 inline-flex items-center gap-2 text-[#D84A3B] hover:opacity-80"
                      aria-label={`Open ${card.title}`}
                    >
                      <svg width="38" height="12" viewBox="0 0 38 12" fill="none" aria-hidden="true">
                        <path d="M1 6H34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M29.5 1L35 6L29.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Slider>
      </div>
      <style jsx global>{`
      @media (max-width: 768px) {
        .slick-list { padding: 0 !important; }
        .slick-track { display: flex !important; align-items: stretch !important; }
        .slick-slide { height: auto !important; }
        .slick-slide > div { width: 100% !important; margin: 0 auto !important; display: flex !important; }
        .slick-slide > div > div { width: 100% !important; max-width: 420px; } /* optional max width */
      }
    `}</style>
    </section>
  );
}
