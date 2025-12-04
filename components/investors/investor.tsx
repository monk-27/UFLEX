
// "use client";

// import { useState, useMemo, useRef } from "react";
// import Image from "next/image";
// import Slider, { Settings as SlickSettings } from "react-slick";
// import { motion } from "framer-motion";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import ExpandableText from "./expandabletext";

// /* ------------------------------- THEME ------------------------------- */
// const BRAND = {
//   primary: "#117ABA",
//   dark: "#0B3C7D",
//   text: "#117ABA",
// };

// export type InvestorCard = {
//   title: string;
//   subtitle?: string;
//   image: string;
//   href?: string;
// };

// type ArrowProps = { onClick?: () => void; disabled?: boolean; direction: "left" | "right" };

// /* ------------------------------- ARROW -------------------------------- */
// function Arrow({ onClick, disabled, direction }: ArrowProps) {
//   return (
//    <button
//   aria-label={direction === "left" ? "Previous" : "Next"}
//   onClick={onClick}
//   disabled={disabled}
//   className={`absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-[45px] h-[45px] rounded-full bg-black text-white transition-all duration-200 ${
//     direction === "left" ? "-left-12" : "-right-12"
//   } ${disabled ? "opacity-40 pointer-events-none" : "opacity-100"}`}
// >
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="none"
//     className="w-10 h-10"
//     aria-hidden="true"
//   >
//     {direction === "left" ? (
//       <>
//         {/* horizontal shaft */}
//         <path d="M16 12H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//         {/* chevron head pointing left */}
//         <path d="M12 16L8 12L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//       </>
//     ) : (
//       <>
//         {/* horizontal shaft */}
//         <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//         {/* chevron head pointing right */}
//         <path d="M12 8L16 12L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//       </>
//     )}
//   </svg>
// </button>



//   );
// }

// /* ---------------------------- INVESTOR SLIDER -------------------------- */
// function InvestorSlider({ items, heading, id }: { items: InvestorCard[]; heading: string; id: string }) {
//   const sliderRef = useRef<Slider | null>(null);

//   const settings: SlickSettings = useMemo(
//     () => ({
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       autoplay: false,
//       autoplaySpeed: 3500,
//       pauseOnHover: true,
//       arrows: true,
//       prevArrow: <Arrow direction="left" />,
//       nextArrow: <Arrow direction="right" />,
//       responsive: [
//         { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } },
//         { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//         { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//       ],
//     }),
//     []
//   );

//   return (
//     <section aria-labelledby={`${id}-heading`} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0 py-10">
//       <h2 id={`${id}-heading`} className="text-center text-[24px] manrope-700 text-[#117ABA] md:text-[38px] mb-8">
//         {heading}
//       </h2>

//       <div className="relative">
//         <Slider ref={sliderRef} {...settings}>
//           {items.map((card, idx) => (
//             <div className="px-2 sm:px-3" key={`${card.title}-${idx}`}>
//               <article className="relative overflow-hidden rounded-sm shadow-sm ring-1 ring-slate-200 h-full bg-white">
//                 <div className="relative">
//                   <div className="relative aspect-[16/9]">
//                     <Image
//                       src={card.image}
//                       alt={card.title}
//                       fill
//                       className="object-cover object-center"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
//                       priority={idx < 2}
//                     />
//                   </div>

//                   <div className="p-4 md:p-5">
//                     <h3 className="text-center text-gray-600 text-sm manrope-600 text-[16px]">{card.title}</h3>
//                   </div>
//                 </div>
//               </article>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       <style jsx global>{`
//         /* dots spacing and shape */
//         .slick-dots {
//           margin-top: 18px;
//           display: flex !important;
//           justify-content: center;
//           gap: 8px;
//           padding: 0;
//           margin-top: 24px;
//         }
//         .slick-dots li button:before {
//           content: "";
//           display: block;
//           width: 10px;
//           height: 10px;
//           border-radius: 9999px;
//           background-color: #D1D5DB;
//           opacity: 0.6;
//         }
//            .slick-dots {

//     margin-top: 24px; /* adjust as needed */
//     position: static !important; /* ensures it stays below slides */
//   }
//         .slick-dots li.slick-active button:before {
//           background-color: ${BRAND.primary};
//           opacity: 1;
//           transform: scale(1.12);
//         }

//         /* show our custom arrows (we place them via prevArrow/nextArrow) */
//         .slick-prev,
//         .slick-next {
//           display: none !important;
//         }

//         /* ensure slides stretch height */
//         .slick-track {
//           display: flex;
//           align-items: stretch;
//         }
//         .slick-slide > div {
//           height: 100%;
//           display: flex;
//         }
//       `}</style>
//     </section>
//   );
// }

// /* -------------------------------- HERO/BANNER -------------------------- */
// /*
//   Updated: pill (Investors) is positioned so it sits half on the banner image
//   and half below the banner (matches the screenshot). The pill is placed
//   outside the overflow-hidden image wrapper by using an absolutely positioned
//   container anchored to the banner's bottom and translated by 50% vertically.
// */
// function HeroBanner({ image }: { image: string }) {
//   return (
//     <header className=" relative w-full bg-white">
//       <div className="relative h-[360px] md:h-[520px] lg:h-[654px] w-full overflow-hidden">
//         <Image src={image} alt="hero" fill className="object-cover object-top" priority />

//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/18 to-transparent" />
//       </div>

//       <div className="absolute left-0 right-0 bottom-0 pointer-events-none">
//         <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-0 ">
//           <div className="relative">
//             <span className="text-center inline-block bg-[#117ABA] text-white manrope-400 w-[216px] h-[59px] text-[36px]  shadow-sm translate-y-1/2">
//               Investors
//             </span>
//           </div>
//         </div>
//       </div>

//     </header>
//   );
// }

// /* --------------------------------- PAGE -------------------------------- */
// export default function InvestorsPage() {
//   const investorRelations: InvestorCard[] = [
//     { title: "Investor Presentations", subtitle: "", image: "/images/inv1.png", href: "#" },
//     { title: "Grievance Redressal", subtitle: "Shareholder services.", 
//       image: "/images/inv4.png",
//        href: "#" },

//     { title: "Governance Structure", subtitle: "Board & committees.", 
//       image: "/images/inv2.png",
//       href: "#" },
//     { title: "Quarterly Earnings", subtitle: "Financial releases.", image: "/images/inv3.png", href: "#" },
//     { title: "Grievance Redressal", subtitle: "Shareholder services.", image: "/images/inv4.png", href: "#" },
//   ];

//   const policiesDocs: InvestorCard[] = [
//     { title: "Unpaid / Unclaimed Dividend", subtitle: "Check & claim.", image: "/images/policy1.png", href: "#" },
//     { title: "Transfer of shares to IEPF", subtitle: "Process & status.", image: "/images/policy2.png", href: "#" },
//     { title: "Registrar", subtitle: "RTA contact.", image: "/images/policy3.png", href: "#" },
//     { title: "Compliance Report", subtitle: "Statutory disclosures.", image: "/images/policy4.png", href: "#" },
//     { title: "Registrar", subtitle: "RTA contact.", image: "/images/policy3.png", href: "#" },

//   ];

//   return (
//     <main className="bg-gradient-to-b from-white to-slate-50">
//       <HeroBanner image="/images/investor.png"  />

//       <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//         <div>

//           <div className="mt-6">
//             <ExpandableText modalTitle="Investors" imageSrc="/images/inv.png" imageAlt="Investors" 
//             paragraphs= {[
//            "At UFlex, we are focused on delivering sustainable, responsible, and profitable growth driven by innovation, operational efficiency, and prudent capital allocation. Supported by a strong balance sheet, we continue to strengthen our presence across packaging films, converting, and recycling, while expanding globally in a calibrated and future-focused manner.",
//            "As we grow, we remain committed to manufacturing excellence, cost competitiveness, and sustainable packaging leadership, underpinned by robust governance and environmental responsibility.",
//            "We are also progressing on a transformation journey to build a future-ready organization, leveraging digitalization, advanced recycling, circular material solutions, and customer-centric innovation. Through these efforts, we aim to create enduring stakeholder value and contribute meaningfully to a more resource-efficient global packaging ecosystem."
//         ]}
//             />
//           </div>
//         </div>
//         <div className="">
//           <div className="rounded-lg overflow-hidden shadow-md">
//             <Image src="/images/inv.png" alt="side" width={800} height={500} className="object-cover w-full h-full" />
//           </div>
//         </div>
//       </section>

//       {/* Sliders */}
//       <InvestorSlider id="investor-relations" heading="Investor Relations" items={investorRelations} />
//       <InvestorSlider id="policies" heading="Policies, announcements and other documents" items={policiesDocs} />

//       <div className="h-16" />

//       {/* global tweaks for slick */}
//       <style jsx global>{`
//         .slick-slide > div { display: block; }
//         .slick-list { border-radius: 0.75rem; }
//         .slick-arrow { transition: transform .15s ease; }
//         .slick-arrow:hover { transform: translateY(-50%) scale(1.05); }

//         /* show the slider's prev/next wrappers (we're rendering our own arrows via prevArrow/nextArrow props) */
//         .slick-slider .slick-prev, .slick-slider .slick-next { display: block !important; }
//       `}</style>
//     </main>
//   );
// }

"use client"
import React from 'react'
import Image from "next/image";
import { SiteHeader } from '../site-header';
import { SiteFooter } from '../site-footer';
import { InvestorCardsGrid } from './investor-card';
import { investorCards } from '@/app/investors/invdata';

const InvestorsPage = () => {
  return (
    <main className="bg-white">

      <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">

        <Image
          src="/images/investors/hero.png"
          alt="Investors Relations"
          fill
          className="object-cover w-full h-full"
          priority
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Investors Relations
          </h1>

          <div className="space-y-2">
            <h1
              className="text-white text-sm sm:text-base md:text-lg underline-offset-8 underline decoration-[#CF2328] hover:text-gray-200 transition"
            >
              Annual Report 2024–25
            </h1>


            <h2
              className="text-white text-sm sm:text-base md:text-lg underline-offset-8 underline decoration-[#CF2328] hover:text-gray-200 transition"
            >
              Annual Report Archives
            </h2>
          </div>
        </div>
      </section>

      <InvestorCardsGrid cards={investorCards} />

    </main>

  )
}

export default InvestorsPage


