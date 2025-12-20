
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
      <section className="relative w-full h-[260px] sm:h-[471px] md:h-[471px] lg:h-[471px] overflow-hidden">
        <Image
          src="/images/awards/awardsmain.png"
          alt="Corporate Policies"
          fill
          className="object-cover w-full h-[260px] sm:h-[471px] md:h-[471px] lg:h-[471px]"
          priority
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="max-w-7xl mx-auto px-4 absolute inset-0 flex flex-col justify-center ">
          <h1 className="text-start text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-4">
            Hall of Fame
          </h1>
        </div>
      </section>
      <div className="max-w-7xl">
        <p className="lato-400 text-[15px] leading-relaxed  text-[#6B6B6B] text-center mt-6">
          Our journey of growth and leadership in flexible packaging has been consistently recognized by prestigious industry forums worldwide. From accolades in sustainability and product innovation to honors as a top employer, our awards reflect more than achievements—they embody our commitment to shaping a responsible, forward-looking future.
        </p>
      </div>

      {/* ==== IN THE SPOTLIGHT ==== */}
      <section className="relative py-6">
        <div className="max-w-7xl mx-auto  w-full px-4 sm:px-0">

          <div className=" flex flex-col items-center text-center">
            <h2 className="text-[28px] lato-400 text-[#117ABA]">
              In The Spotlight
            </h2>

            <span className=" block text-[20px] lato-400 text-[#117ABA]">
              Corporate, HR & Sustainability Awards
            </span>
          </div>


          <AutoMarquee items={MARQUEE_ITEMS} speed={40} />

          <Link href="/hall-of-fame/buisness-awards">
            <div className=" flex justify-center">
              <span className="text-center text-[12px] lato-700 text-[#117ABA] md:text-[16px]">
                View all Awards {">>"}
              </span>
            </div>
          </Link>




          <section className="pt-6 pb-16  w-full ">
            <AwardsTabs />
          </section>
        </div>
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