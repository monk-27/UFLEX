
"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import Image from "next/image";
import Slider, { Settings as SlickSettings } from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

/* ------------------------------- THEME ------------------------------- */
const BRAND = {
  primary: "#117ABA",
  dark: "#0B3C7D",
  text: "#117ABA",
};

export type InvestorCard = {
  title: string;
  desc?: string;
  img: string;
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
      className={`absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-[45px] h-[45px] rounded-full border-[1px] border-black text-white transition-all duration-200 ${direction === "left" ? "-left-13" : "-right-13"
        } ${disabled ? "opacity-40 pointer-events-none" : "opacity-100"}`}
    >

      {direction === "left" ? (
        <>
          <ChevronLeft className="h-5 w-5 text-gray-600" />

        </>
      ) : (
        <>
          <ChevronRight className="h-5 w-5 text-gray-600" />

        </>
      )}
      {/* </svg> */}
    </button>



  );
}

/* ---------------------------- INVESTOR SLIDER -------------------------- */
function InvestorSlider({ items, heading, id }: { items: InvestorCard[]; heading: string; id: string }) {
  const sliderRef = useRef<Slider | null>(null);
  const router = useRouter()
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
      <h2 id={`${id}-heading`} className="text-center text-[20px] lato-400 text-[#117ABA] md:text-[28px] mb-12">
        {heading}
      </h2>

      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {items.map((card, idx) => (
            <div className="px-2 sm:px-3 cursor-pointer" key={`${card.title}-${idx}`} onClick={() => {
              router.push(`${card.href}`)
            }}>
              <article className="relative overflow-hidden rounded-sm shadow-sm ring-1 ring-slate-200 h-full bg-white">
                <div className="relative">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      priority={idx < 2}
                    />
                  </div>

                  <div className="p-4 md:p-5">
                    <h3 className="text-center text-gray-600 text-sm lato-400 text-[16px]">{card.title}</h3>
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


/* --------------------------------- PAGE -------------------------------- */
export default function WhatWeDoPage() {
  const investorRelations: any[] = [
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
      desc: "UFlex Printing Cylinders Business has a State-of-the-art manufacturing facility for producing Rotogravure Cylinders, Flexo Plates & Sleeves.",
      img: "/images/cyls.png",
    },
    {
      title: "Flexible Tubes",
      // key: "flexible-tubes",
      href: "/flexitube-business",
      desc: "Our innovative multilayer flexible tube packaging solutions have been designed especially for the beauty, personal care and pharma industries.",
      img: "/images/flexible.jpeg",
    },
  ];

  // const policiesDocs: InvestorCard[] = [
  //   { title: "Unpaid / Unclaimed Dividend", subtitle: "Check & claim.", image: "/images/policy1.png", href: "#" },
  //   { title: "Transfer of shares to IEPF", subtitle: "Process & status.", image: "/images/policy2.png", href: "#" },
  //   { title: "Registrar", subtitle: "RTA contact.", image: "/images/policy3.png", href: "#" },
  //   { title: "Compliance Report", subtitle: "Statutory disclosures.", image: "/images/policy4.png", href: "#" },
  //   { title: "Registrar", subtitle: "RTA contact.", image: "/images/policy3.png", href: "#" },

  // ];
const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,        // ❌ no infinite autoplay feel
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  return (

    <main className="bg-gradient-to-b from-white to-slate-50">
      <SiteHeader />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-20">           <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[20px] lato-400 text-[#117ABA] md:text-[28px] "
          >
            What We Do
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="lato-400 text-[16px] sm:text-[20px] leading-relaxed text-[#4f4f4f] mt-5 space-y-4 "
          >
            <p>
              We operate across the entire packaging value chain, offering unmatched integration and scale. Our
              capabilities span PET and rPET resins, packaging films, converting, aseptic packaging, inks and
              adhesives, holography, printing cylinders, printing and packaging machinery.
            </p>
            <p>
              We are the only Indian company offering both standalone components and fully integrated flexible
              packaging solutions—from design and engineering to advanced printing and machinery—delivering true
              end-to-end capabilities.
            </p>
          </motion.div>
        </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[16/10] w-full overflow-hidden  "
          >
            <Image
              src="https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/What-We-Do01.jpg"
              alt="UFlex capabilities across the value chain"
              fill
              className="object-cover"
              priority
            />
            {/* subtle overlay gradient for readability */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
          </motion.div>
        </div>
      </section>

      <section className="pt-12 max-w-7xl mx-auto px-4">
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        {/* Container */}
        <div className="flex gap-6">
          {investorRelations.map((card, index) => (
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
                      <h3 className="text-[18px] md:text-[20px] leading-tight text-[#117ABA]">
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

      <div className="h-16" />
      <SiteFooter />
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
