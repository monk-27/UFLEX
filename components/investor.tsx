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
//   primary: "[#117ABA]", // pulled from your provided palette
//   dark: "[#117ABA]",
//   text: "[#117ABA]",
// };



// /* --------------------------- REUSABLE SLIDER -------------------------- */
// export type InvestorCard = {
//   title: string;
//   subtitle?: string;
//   image: string; // background image
//   href?: string; // optional link
// };

// type ArrowProps = { onClick?: () => void; disabled?: boolean; direction: "left" | "right" };

// function Arrow({ onClick, disabled, direction }: ArrowProps) {
//   return (
//     <button
//       aria-label={direction === "left" ? "Previous" : "Next"}
//       onClick={onClick}
//       disabled={disabled}
//       className={`group absolute top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/85 shadow-md ring-1 ring-slate-200 hover:bg-white focus:outline-none ${
//         direction === "left" ? "left-2" : "right-2"
//       } ${disabled ? "opacity-40" : ""}`}
//     >
//       <span className="sr-only">{direction}</span>
//       <svg width="38" height="38" viewBox="0 0 24 24" className="p-2">
//         {direction === "left" ? (
//           <path d="M15 6l-6 6 6 6" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//         ) : (
//           <path d="M9 6l6 6-6 6" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//         )}
//       </svg>
//     </button>
//   );
// }

// function InvestorSlider({ items, heading, id }: { items: InvestorCard[]; heading: string; id: string }) {
//   const sliderRef = useRef<Slider | null>(null);

//   const settings: SlickSettings = useMemo(() => ({
//     dots: true,
//     infinite: true,
//     speed: 550,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3200,
//     pauseOnHover: true,
//     arrows: true,
//     prevArrow: <Arrow direction="left" />,
//     nextArrow: <Arrow direction="right" />,
//     responsive: [
//       { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } },
//       { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//       { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//     ],
//   }), []);

//   return (
//     <section aria-labelledby={`${id}-heading`} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0 py-10">
//       <motion.h2
//         id={`${id}-heading`}
//         className="text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl text-center mb-8"
//         initial={{ opacity: 0, y: 12 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
        
//       >
//         {heading}
//       </motion.h2>

//       <Slider ref={sliderRef} {...settings}>
//         {items.map((card, idx) => (
//           <div className="px-2 sm:px-3" key={`${card.title}-${idx}`}>
//             <motion.article
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.35 }}
//               className="relative overflow-hidden rounded-2xl shadow ring-1 ring-slate-200"
//             >
//               <div className="relative aspect-[16/9] sm:aspect-[10/9]">
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
//                   priority={idx < 2}
//                 />
//                 {/* gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-tr from-[#117ABA]/75 via-[#117ABA]/40 to-transparent" />
//                 {/* text overlay */}
//                 <div className="absolute inset-0 flex items-end p-5">
//                   <div>
//                     <h3 className="text-white text-xl sm:text-2xl font-semibold drop-shadow-md">
//                       {card.title}
//                     </h3>
//                     {card.subtitle && (
//                       <p className="text-white/90 text-sm sm:text-base mt-1 max-w-xl">
//                         {card.subtitle}
//                       </p>
//                     )}
//                     {card.href && (
//                       <a
//                         href={card.href}
//                         className="inline-block mt-3 rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-slate-800 hover:bg-white"
//                       >
//                         Explore
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </motion.article>
//           </div>
//         ))}
//       </Slider>

//       {/* slick tweaks */}
//       <style jsx global>{`
//         .slick-dots li button:before { color: ${BRAND.primary} !important; opacity: .55; }
//         .slick-dots li.slick-active button:before { opacity: 1; }
//         .slick-track { display: flex; align-items: stretch; }
//         .slick-slide > div { height: 100%; }
//       `}</style>
//     </section>
//   );
// }

// /* ---------------------------- PAGE SECTIONS --------------------------- */
// function InvestorsIntro() {
//   const [expanded, setExpanded] = useState(false);


//   const packagingData = [
//     {
//         "id": "Investors",
//         title: "Investors",
//         image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1974&auto=format&fit=crop",
//         "imageAlt": "UFlex Flexible Packaging Solutions",
//         paragraphs: [
//            "At UFlex, we are focused on delivering sustainable, responsible, and profitable growth driven by innovation, operational efficiency, and prudent capital allocation. Supported by a strong balance sheet, we continue to strengthen our presence across packaging films, converting, and recycling, while expanding globally in a calibrated and future-focused manner.",
//            "As we grow, we remain committed to manufacturing excellence, cost competitiveness, and sustainable packaging leadership, underpinned by robust governance and environmental responsibility.",
//            "We are also progressing on a transformation journey to build a future-ready organization, leveraging digitalization, advanced recycling, circular material solutions, and customer-centric innovation. Through these efforts, we aim to create enduring stakeholder value and contribute meaningfully to a more resource-efficient global packaging ecosystem."
//         ]
//     }

// ];
//   return (
//     <section className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-0 py-14">
//       <div>
//         <h1 className="text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl">
//           Investors
//         </h1>
//         {/* <p className="mt-6 text-slate-700 text-lg leading-7">
//           At UFlex, we are focused on delivering sustainable, 
//           responsible, and profitable growth driven by innovation, operational 
//           efficiency, and prudent capital allocation. Supported by a strong balance sheet, 
//           we continue to strengthen our presence across packaging films, converting, and recycling, 
//           while expanding globally in a calibrated and future-focused manner.
//           {expanded && (
//             <>
//               {" "}Remaining essentially unchanged, it was popularised in the 1960s with the release of Letraset sheets
//               containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.
//             </>
//           )}
//         </p> */}
//         {packagingData.map((section, idx) => (
//                                     <ExpandableText
//                                         key={idx}
//                                         modalTitle={section.title}
//                                         imageSrc={section.image}
//                                         imageAlt={section.title}
//                                         paragraphs={section.paragraphs}
//                                     />
//                                 ))}
//         {/* <button
//           onClick={() => setExpanded((v) => !v)}
//           className="mt-6 inline-flex items-center rounded-full bg-[#117ABA] px-6 py-3 text-white shadow-md hover:opacity-95"
          
//         >
//           {expanded ? "Read Less" : "Read More"}
//         </button> */}
//       </div>

//       <div className="relative aspect-[16/9] w-full">
//         <Image
//           src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1974&auto=format&fit=crop"
//           alt="Investor hero"
//           fill
//           className="rounded-2xl object-cover shadow"
//           priority
//         />
//       </div>
//     </section>
//   );
// }

// /* --------------------------------- PAGE -------------------------------- */
// export default function InvestorsPage() {
//   // Slider 1 (top row in screenshot): Investor Relations
//   const investorRelations: InvestorCard[] = [
//     {
//       title: "Stock price data",
//       subtitle: "View current and historical share information.",
//       image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Trust-respect23.jpg",
//       href: "#",
//     },
//     {
//       title: "Company release",
//       subtitle: "Latest announcements and media releases.",
//       image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Customer-value-creation22.jpg",
//       href: "#",
//     },
//     {
//       title: "Extract of annual return",
//       subtitle: "Read the statutory annual return extract.",
//       image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Innovation11.jpg",
//       href: "#",
//     },
//     {
//       title: "Business responsibility report",
//       subtitle: "Disclosures on ESG and stewardship.",
//       image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/A-Trusted-Partner-to-Global-Brands-in-150+-Countries17.jpg",
//       href: "#",
//     },
//   ];

//   // Slider 2 (bottom row in screenshot): Policies & other documents
//   const policiesDocs: InvestorCard[] = [
//     {
//       title: "Shareholding pattern",
//       subtitle: "Quarterly distribution & promoter holdings.",
//       image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/page-banners/life_at_image10.webp",
//       href: "#",
//     },
//     {
//       title: "Unpaid / Unclaimed Dividend",
//       subtitle: "Check and claim your unpaid dividend.",
//       image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/A-Trusted-Partner-to-Global-Brands-in-150+-Countries17.jpg",
//       href: "#",
//     },
//     {
//       title: "Transfer of shares to IEPF",
//       subtitle: "Know the process & status.",
//       image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Innovation11.jpg",
//       href: "#",
//     },
//     {
//       title: "Registrar",
//       subtitle: "RTA contact and service links.",
//       image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Customer-value-creation22.jpg",
//       href: "#",
//     },
//   ];

//   return (
//     <main className="bg-gradient-to-b from-white to-slate-50">
//       {/* Hero / Intro */}
//       <InvestorsIntro />

//       {/* Investor relations slider */}
//       <InvestorSlider id="investor-relations" heading="Investor relations" items={investorRelations} />

//       {/* Policies slider */}
//       <InvestorSlider id="policies" heading="Policies, announcements and other documents" items={policiesDocs} />

//       {/* page spacing */}
//       <div className="h-10" />

//       {/* global styles to keep slick pristine */}
//       <style jsx global>{`
//         .slick-slide > div { display: block; }
//         .slick-list { border-radius: 1rem; }
//         .slick-arrow { transition: transform .15s ease; }
//         .slick-arrow:hover { transform: translateY(-50%) scale(1.05); }
//       `}</style>
//     </main>
//   );
// }
"use client";

import { useState, useMemo, useRef } from "react";
import Image from "next/image";
import Slider, { Settings as SlickSettings } from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExpandableText from "./expandabletext";

/* ------------------------------- THEME ------------------------------- */
const BRAND = {
  primary: "#117ABA",
  dark: "#0B3C7D",
  text: "#117ABA",
};

export type InvestorCard = {
  title: string;
  subtitle?: string;
  image: string;
  href?: string;
};

type ArrowProps = { onClick?: () => void; disabled?: boolean; direction: "left" | "right" };

/* ------------------------------- ARROW -------------------------------- */
function Arrow({ onClick, disabled, direction }: ArrowProps) {
  return (
   <button
  aria-label={direction === "left" ? "Previous" : "Next"}
  onClick={onClick}
  disabled={disabled}
  className={`absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-[45px] h-[45px] rounded-full bg-black text-white transition-all duration-200 ${
    direction === "left" ? "-left-12" : "-right-12"
  } ${disabled ? "opacity-40 pointer-events-none" : "opacity-100"}`}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    className="w-10 h-10"
    aria-hidden="true"
  >
    {direction === "left" ? (
      <>
        {/* horizontal shaft */}
        <path d="M16 12H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* chevron head pointing left */}
        <path d="M12 16L8 12L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ) : (
      <>
        {/* horizontal shaft */}
        <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* chevron head pointing right */}
        <path d="M12 8L16 12L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    )}
  </svg>
</button>



  );
}

/* ---------------------------- INVESTOR SLIDER -------------------------- */
function InvestorSlider({ items, heading, id }: { items: InvestorCard[]; heading: string; id: string }) {
  const sliderRef = useRef<Slider | null>(null);

  const settings: SlickSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      arrows: true,
      prevArrow: <Arrow direction="left" />,
      nextArrow: <Arrow direction="right" />,
      responsive: [
        { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    }),
    []
  );

  return (
    <section aria-labelledby={`${id}-heading`} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0 py-10">
      <h2 id={`${id}-heading`} className="text-center text-[24px] manrope-700 text-[#117ABA] md:text-[42px] mb-8">
        {heading}
      </h2>

      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {items.map((card, idx) => (
            <div className="px-2 sm:px-3" key={`${card.title}-${idx}`}>
              <article className="relative overflow-hidden rounded-sm shadow-sm ring-1 ring-slate-200 h-full bg-white">
                <div className="relative">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      priority={idx < 2}
                    />
                  </div>

                  <div className="p-4 md:p-5">
                    <h3 className="text-center text-gray-600 text-sm manrope-600 text-[16px]">{card.title}</h3>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        /* dots spacing and shape */
        .slick-dots {
          margin-top: 18px;
          display: flex !important;
          justify-content: center;
          gap: 8px;
          padding: 0;
          margin-top: 24px;
        }
        .slick-dots li button:before {
          content: "";
          display: block;
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          background-color: #D1D5DB;
          opacity: 0.6;
        }
           .slick-dots {
  
    margin-top: 24px; /* adjust as needed */
    position: static !important; /* ensures it stays below slides */
  }
        .slick-dots li.slick-active button:before {
          background-color: ${BRAND.primary};
          opacity: 1;
          transform: scale(1.12);
        }

        /* show our custom arrows (we place them via prevArrow/nextArrow) */
        .slick-prev,
        .slick-next {
          display: none !important;
        }

        /* ensure slides stretch height */
        .slick-track {
          display: flex;
          align-items: stretch;
        }
        .slick-slide > div {
          height: 100%;
          display: flex;
        }
      `}</style>
    </section>
  );
}

/* -------------------------------- HERO/BANNER -------------------------- */
/*
  Updated: pill (Investors) is positioned so it sits half on the banner image
  and half below the banner (matches the screenshot). The pill is placed
  outside the overflow-hidden image wrapper by using an absolutely positioned
  container anchored to the banner's bottom and translated by 50% vertically.
*/
function HeroBanner({ image }: { image: string }) {
  return (
    <header className=" relative w-full bg-white">
      <div className="relative h-[360px] md:h-[520px] lg:h-[640px] w-full overflow-hidden">
        <Image src={image} alt="hero" fill className="object-cover object-top" priority />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/18 to-transparent" />
      </div>

      <div className="absolute left-0 right-0 bottom-0 pointer-events-none">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-0 ">
          <div className="relative">
            <span className="text-center inline-block bg-[#117ABA] text-white manrope-400 w-[216px] h-[59px] text-[42px]  shadow-sm translate-y-1/2">
              Investors
            </span>
          </div>
        </div>
      </div>

      {/* (optional) an absolutely-positioned content card area could go here if you need it */}
    </header>
  );
}

/* --------------------------------- PAGE -------------------------------- */
export default function InvestorsPage() {
  const investorRelations: InvestorCard[] = [
    { title: "Investor Presentations", subtitle: "", image: "/images/inv1.png", href: "#" },
    { title: "Grievance Redressal", subtitle: "Shareholder services.", 
      image: "/images/inv4.png",
       href: "#" },

    { title: "Governance Structure", subtitle: "Board & committees.", 
      image: "/images/inv2.png",
      href: "#" },
    { title: "Quarterly Earnings", subtitle: "Financial releases.", image: "/images/inv3.png", href: "#" },
    { title: "Grievance Redressal", subtitle: "Shareholder services.", image: "/images/inv4.png", href: "#" },
  ];

  const policiesDocs: InvestorCard[] = [
    { title: "Unpaid / Unclaimed Dividend", subtitle: "Check & claim.", image: "/images/policy1.png", href: "#" },
    { title: "Transfer of shares to IEPF", subtitle: "Process & status.", image: "/images/policy2.png", href: "#" },
    { title: "Registrar", subtitle: "RTA contact.", image: "/images/policy3.png", href: "#" },
    { title: "Compliance Report", subtitle: "Statutory disclosures.", image: "/images/policy4.png", href: "#" },
    { title: "Registrar", subtitle: "RTA contact.", image: "/images/policy3.png", href: "#" },

  ];

  return (
    <main className="bg-gradient-to-b from-white to-slate-50">
      <HeroBanner image="/images/investor.png"  />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          
          <div className="mt-6">
            <ExpandableText modalTitle="Investors" imageSrc="/images/inv.png" imageAlt="Investors" 
            paragraphs= {[
           "At UFlex, we are focused on delivering sustainable, responsible, and profitable growth driven by innovation, operational efficiency, and prudent capital allocation. Supported by a strong balance sheet, we continue to strengthen our presence across packaging films, converting, and recycling, while expanding globally in a calibrated and future-focused manner.",
           "As we grow, we remain committed to manufacturing excellence, cost competitiveness, and sustainable packaging leadership, underpinned by robust governance and environmental responsibility.",
           "We are also progressing on a transformation journey to build a future-ready organization, leveraging digitalization, advanced recycling, circular material solutions, and customer-centric innovation. Through these efforts, we aim to create enduring stakeholder value and contribute meaningfully to a more resource-efficient global packaging ecosystem."
        ]}
            />
          </div>
        </div>
        <div className="">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image src="/images/inv.png" alt="side" width={800} height={500} className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      {/* Sliders */}
      <InvestorSlider id="investor-relations" heading="Investor Relations" items={investorRelations} />
      <InvestorSlider id="policies" heading="Policies, announcements and other documents" items={policiesDocs} />

      <div className="h-16" />

      {/* global tweaks for slick */}
      <style jsx global>{`
        .slick-slide > div { display: block; }
        .slick-list { border-radius: 0.75rem; }
        .slick-arrow { transition: transform .15s ease; }
        .slick-arrow:hover { transform: translateY(-50%) scale(1.05); }

        /* show the slider's prev/next wrappers (we're rendering our own arrows via prevArrow/nextArrow props) */
        .slick-slider .slick-prev, .slick-slider .slick-next { display: block !important; }
      `}</style>
    </main>
  );
}
