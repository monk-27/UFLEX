
"use client";

import dynamic from "next/dynamic";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SpotLightSlider } from "./buissnessreusbales/spotlight";
import AutoMarquee from "./autoslider";
import LeadershipAwards from "./spotlight";
import Link from "next/link";
import SustainabilityCarousel from "./hall-main";
import { AwardsSlider } from "./buissnessreusbales/awards-slider";

/* --------------------- Dynamic import (client-only) --------------------- */
const AwardsTabs = dynamic(() => import("@/components/leaders"), {
  ssr: false,
  loading: () => (
    <div className="mx-auto my-8 h-[320px] w-full max-w-7xl animate-pulse rounded-2xl bg-gray-100" />
  ),
});

/* ------------------------------ Theme ------------------------------ */
const cardColors = [
  {
    border: "border-gray-200",
    bg: "bg-gray-100",
    title: "text-[#117ABA]",
    ring: "ring-[#117ABA]",
    tint: "bg-[#117ABA]",
  },
] as const;

/* ------------------------------ Data ------------------------------ */
type Spotlight = {
  title: string;
  byline: string;
  excerpt: string;
  image: string;
};

export type LeadershipAwardItem = {
  image: string;
  title: string;
  by: string;
  description: string;
};



export const MARQUEE_ITEMS = [
  {
    id: 1,
    title: "ET Sustainable Organization 2025",
    by: "ET Now",
    image: "/images/awards/s1.png",
  },
  {
    id: 2,
    title: "ET Now Best Organisations to Work 2025",
    by: "ET Now",

    image: "/images/awards/s2.png",
  },
  // {
  //   id: 3,
  //   title: "Business Leader of the Decade 2024 – Mr. Ashok Chaturvedi",

  //   by: "Indo-American Chamber of Commerce (IACC)",

  //   image: "/images/awards/s3.png",
  // },
  {
    id: 4,
    title: "ET Edge Top 100 CSOs – Mr. Jeevaraj Pillai",
    by: "ET Edge Global Sustainability Alliance",

    image: "/images/awards/s4.png",
  },
  // {
  //   id: 5,
  //   title: "Top Employer India 2025",
  //   by: "Top Employers Institute (TEI)",

  //   image: "/images/awards/s5.png",
  // },
  // {
  //   id: 6,
  //   title: "IFCA Star Awards 2025",
  //   by: "Indian Flexible Packaging and Folding Carton Association (IFCA)",

  //   image: "/images/awards/s6.png",
  // },
  // {
  //   id: 7,
  //   title: "Innovation in Awareness – POSH Excellence Awards 2025",
  //   by: "National POSH Conclave & Excellence Awards",

  //   image: "/images/awards/s7.png",
  // },
  {
    id: 8,
    title: "Times Now Sustainable Organization 2024",
    by: "Times Now",

    image: "/images/awards/s8.png",
  },
  {
    id: 9,
    title: "CII  Award 2024 – Top 75 Innovators",
    by: "Confederation of Indian Industry (CII)",

    image: "/images/awards/s9.png",
  },
];


// File: app/business/data.ts  (or wherever you keep your data)

export const business = {
  innovations: {
    heading: "In The Spotlight",
    items: [
      {
    image: "/images/awards/b3.png",
    title: "Business Leader of the Decade 2024 – Mr. Ashok Chaturvedi",
    by: "Indo-American Chamber of Commerce (IACC)",
    description:
      "UFlex Founder & Chairman Mr. Ashok Chaturvedi was honoured for his visionary leadership and contribution to the packaging industry. The award recognises leaders who have significantly influenced India–US business relations and driven industrial, technological, and economic growth over the decade.",
  },
      {
        image: "/images/awards/b1.png",
    title: "ET Sustainable Organization 2025",
    by: " ET Now",
    description:
      "UFlex was recognised as an ET Sustainable Organization for its commitment to circularity, responsible manufacturing, and long-term ESG goals. The award honours businesses that demonstrate measurable progress in environmental stewardship and sustainability-led transformation.",
  
      },
      {
    image: "/images/awards/b7.png",
    title: "SIES SOP Star Awards 2025",
    by: "SIES School of Packaging",
    description:
      "UFlex was honoured for outstanding packaging innovations that advance sustainability, functionality, and consumer convenience. Winning eight awards, including the prestigious President’s Sustainability Award, reflects UFlex’s commitment to environmentally responsible and high-performance packaging.",
  },
    ],
  },
};

/* --------------------------- Page --------------------------- */
const HallPage = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);

  /* ----- Scroll handling ----- */
  const scrollRow = (dir: "left" | "right") => {
    const el = rowRef.current;
    if (!el) return;
    el.scrollBy({
      left: (dir === "left" ? -1 : 1) * el.clientWidth * 0.9,
      behavior: "smooth",
    });
  };

  /* ----- ESC close ----- */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && setOpenIdx(null);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* ----- Detect client mount (only for BusinessAwards) ----- */
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      {/* ==== HERO ==== */}
      {/* <section className="bg-gradient-to-b from-white to-slate-50">
        <header className=" relative h-[360px] sm:h-[666.6px] w-auto ">
          <div className="relative h-[360px] w-auto sm:h-[666.6px] ">
            <Image src="/images/mainhall.png" alt="hero" fill className="object-cover object-top" priority />

             </div>

          <div className="absolute left-0 right-0 bottom-0 pointer-events-none">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-0 ">
              <div className="relative">
                <span className="text-center inline-block bg-[#117ABA] text-white manrope-400 w-[216px] h-[59px] text-[36px]  shadow-sm translate-y-1/2">
                  Hall of Fame
                </span>
              </div>
            </div>
          </div>

        </header>

      </section> */}
      <section className="relative w-full  overflow-hidden">
        
        <SustainabilityCarousel />
      </section>
      

      {/* ==== IN THE SPOTLIGHT ==== */}
      <section className=" relative   py-6">
          <div className=" ">
        <div className="max-w-7xl mx-auto  w-full px-4 sm:px-0">

          



          {/* <AutoMarquee items={MARQUEE_ITEMS} speed={40} /> */}
          <AwardsSlider
                                      heading={business.innovations.heading}
                                      items={business.innovations.items}
                                  />

          
</div>

        </div>


          <section className="pt-6 pb-16  w-full ">
            <AwardsTabs />
          </section>
      </section>



      <SiteFooter />

      {/* hide native scrollbar */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
export default HallPage;