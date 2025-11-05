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
  primary: "[#117ABA]", // pulled from your provided palette
  dark: "[#117ABA]",
  text: "[#117ABA]",
};

const CARD_COLORS = [
  { border: "border-green-400", bg: "bg-green-50/70", ring: "ring-green-200" },
  { border: "border-blue-400", bg: "bg-blue-50/70", ring: "ring-blue-200" },
  { border: "border-pink-400", bg: "bg-pink-50/70", ring: "ring-pink-200" },
  { border: "border-purple-400", bg: "bg-purple-50/70", ring: "ring-purple-200" },
  { border: "border-orange-400", bg: "bg-orange-50/70", ring: "ring-orange-200" },
  { border: "border-yellow-400", bg: "bg-yellow-50/70", ring: "ring-yellow-200" },
];

/* --------------------------- REUSABLE SLIDER -------------------------- */
export type InvestorCard = {
  title: string;
  subtitle?: string;
  image: string; // background image
  href?: string; // optional link
};

type ArrowProps = { onClick?: () => void; disabled?: boolean; direction: "left" | "right" };

function Arrow({ onClick, disabled, direction }: ArrowProps) {
  return (
    <button
      aria-label={direction === "left" ? "Previous" : "Next"}
      onClick={onClick}
      disabled={disabled}
      className={`group absolute top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/85 shadow-md ring-1 ring-slate-200 hover:bg-white focus:outline-none ${
        direction === "left" ? "left-2" : "right-2"
      } ${disabled ? "opacity-40" : ""}`}
    >
      <span className="sr-only">{direction}</span>
      <svg width="38" height="38" viewBox="0 0 24 24" className="p-2">
        {direction === "left" ? (
          <path d="M15 6l-6 6 6 6" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 6l6 6-6 6" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

function InvestorSlider({ items, heading, id }: { items: InvestorCard[]; heading: string; id: string }) {
  const sliderRef = useRef<Slider | null>(null);

  const settings: SlickSettings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 550,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3200,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  }), []);

  return (
    <section aria-labelledby={`${id}-heading`} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0 py-10">
      <motion.h2
        id={`${id}-heading`}
        className="text-[24px] poppins-600 text-[#117ABA] md:text-[48px] md:text-5xl text-center mb-8"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        
      >
        {heading}
      </motion.h2>

      <Slider ref={sliderRef} {...settings}>
        {items.map((card, idx) => (
          <div className="px-2 sm:px-3" key={`${card.title}-${idx}`}>
            <motion.article
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-2xl shadow ring-1 ring-slate-200"
            >
              <div className="relative aspect-[16/9] sm:aspect-[10/9]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  priority={idx < 2}
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#117ABA]/75 via-[#117ABA]/40 to-transparent" />
                {/* text overlay */}
                <div className="absolute inset-0 flex items-end p-5">
                  <div>
                    <h3 className="text-white text-xl sm:text-2xl font-semibold drop-shadow-md">
                      {card.title}
                    </h3>
                    {card.subtitle && (
                      <p className="text-white/90 text-sm sm:text-base mt-1 max-w-xl">
                        {card.subtitle}
                      </p>
                    )}
                    {card.href && (
                      <a
                        href={card.href}
                        className="inline-block mt-3 rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-slate-800 hover:bg-white"
                      >
                        Explore
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        ))}
      </Slider>

      {/* slick tweaks */}
      <style jsx global>{`
        .slick-dots li button:before { color: ${BRAND.primary} !important; opacity: .55; }
        .slick-dots li.slick-active button:before { opacity: 1; }
        .slick-track { display: flex; align-items: stretch; }
        .slick-slide > div { height: 100%; }
      `}</style>
    </section>
  );
}

/* ---------------------------- PAGE SECTIONS --------------------------- */
function InvestorsIntro() {
  const [expanded, setExpanded] = useState(false);


  const packagingData = [
    {
        "id": "Investors",
        title: "Investors",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1974&auto=format&fit=crop",
        "imageAlt": "UFlex Flexible Packaging Solutions",
        paragraphs: [
           "At UFlex, we are focused on delivering sustainable, responsible, and profitable growth driven by innovation, operational efficiency, and prudent capital allocation. Supported by a strong balance sheet, we continue to strengthen our presence across packaging films, converting, and recycling, while expanding globally in a calibrated and future-focused manner.",
           "As we grow, we remain committed to manufacturing excellence, cost competitiveness, and sustainable packaging leadership, underpinned by robust governance and environmental responsibility.",
           "We are also progressing on a transformation journey to build a future-ready organization, leveraging digitalization, advanced recycling, circular material solutions, and customer-centric innovation. Through these efforts, we aim to create enduring stakeholder value and contribute meaningfully to a more resource-efficient global packaging ecosystem."
        ]
    }

];
  return (
    <section className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-0 py-14">
      <div>
        <h1 className="text-[24px] poppins-600 text-[#117ABA] md:text-[48px] md:text-5xl">
          Investors
        </h1>
        {/* <p className="mt-6 text-slate-700 text-lg leading-7">
          At UFlex, we are focused on delivering sustainable, 
          responsible, and profitable growth driven by innovation, operational 
          efficiency, and prudent capital allocation. Supported by a strong balance sheet, 
          we continue to strengthen our presence across packaging films, converting, and recycling, 
          while expanding globally in a calibrated and future-focused manner.
          {expanded && (
            <>
              {" "}Remaining essentially unchanged, it was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.
            </>
          )}
        </p> */}
        {packagingData.map((section, idx) => (
                                    <ExpandableText
                                        key={idx}
                                        modalTitle={section.title}
                                        imageSrc={section.image}
                                        imageAlt={section.title}
                                        paragraphs={section.paragraphs}
                                    />
                                ))}
        {/* <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-6 inline-flex items-center rounded-full bg-[#117ABA] px-6 py-3 text-white shadow-md hover:opacity-95"
          
        >
          {expanded ? "Read Less" : "Read More"}
        </button> */}
      </div>

      <div className="relative aspect-[16/9] w-full">
        <Image
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1974&auto=format&fit=crop"
          alt="Investor hero"
          fill
          className="rounded-2xl object-cover shadow"
          priority
        />
      </div>
    </section>
  );
}

/* --------------------------------- PAGE -------------------------------- */
export default function InvestorsPage() {
  // Slider 1 (top row in screenshot): Investor Relations
  const investorRelations: InvestorCard[] = [
    {
      title: "Stock price data",
      subtitle: "View current and historical share information.",
      image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Trust-respect23.jpg",
      href: "#",
    },
    {
      title: "Company release",
      subtitle: "Latest announcements and media releases.",
      image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Customer-value-creation22.jpg",
      href: "#",
    },
    {
      title: "Extract of annual return",
      subtitle: "Read the statutory annual return extract.",
      image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Innovation11.jpg",
      href: "#",
    },
    {
      title: "Business responsibility report",
      subtitle: "Disclosures on ESG and stewardship.",
      image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/A-Trusted-Partner-to-Global-Brands-in-150+-Countries17.jpg",
      href: "#",
    },
  ];

  // Slider 2 (bottom row in screenshot): Policies & other documents
  const policiesDocs: InvestorCard[] = [
    {
      title: "Shareholding pattern",
      subtitle: "Quarterly distribution & promoter holdings.",
      image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/page-banners/life_at_image10.webp",
      href: "#",
    },
    {
      title: "Unpaid / Unclaimed Dividend",
      subtitle: "Check and claim your unpaid dividend.",
      image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/A-Trusted-Partner-to-Global-Brands-in-150+-Countries17.jpg",
      href: "#",
    },
    {
      title: "Transfer of shares to IEPF",
      subtitle: "Know the process & status.",
      image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Innovation11.jpg",
      href: "#",
    },
    {
      title: "Registrar",
      subtitle: "RTA contact and service links.",
      image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Customer-value-creation22.jpg",
      href: "#",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-white to-slate-50">
      {/* Hero / Intro */}
      <InvestorsIntro />

      {/* Investor relations slider */}
      <InvestorSlider id="investor-relations" heading="Investor relations" items={investorRelations} />

      {/* Policies slider */}
      <InvestorSlider id="policies" heading="Policies, announcements and other documents" items={policiesDocs} />

      {/* page spacing */}
      <div className="h-10" />

      {/* global styles to keep slick pristine */}
      <style jsx global>{`
        .slick-slide > div { display: block; }
        .slick-list { border-radius: 1rem; }
        .slick-arrow { transition: transform .15s ease; }
        .slick-arrow:hover { transform: translateY(-50%) scale(1.05); }
      `}</style>
    </main>
  );
}
