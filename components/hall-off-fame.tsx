
"use client";

import dynamic from "next/dynamic";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SpotLightSlider } from "./buissnessreusbales/spotlight";

/* --------------------- Dynamic import (client-only) --------------------- */
const AwardsTabs = dynamic(() => import("@/components/leaders"), {
  ssr: false,
  loading: () => (
    <div className="mx-auto my-8 h-[320px] w-full max-w-6xl animate-pulse rounded-2xl bg-gray-100" />
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

export const HALL_SPOTLIGHT_SLIDES: any[] = [
  {
    title: "ET Sustainable Organisations 2025",
    image:
      "/images/hall/1.png",
    description:
      "By The Times Group\n\n" +
      "UFlex is recognized as an ‘ET Sustainable Organization 2025’ for our continuous efforts in responsible growth through ESG-aligned strategies and innovative sustainability.",
  },
  {
    title: "Top Employer 2025 in India",
    image:
      "/images/hall/2.png",
    description:
      "By the Top Employers Institute\n\n" +
      "UFlex is recognised as a Top Employer 2025, reflecting our continued commitment to building an environment where everyone can learn, grow, and reach their full potential.",
  },
  {
    title: "President’s Award for Sustainability",
    image:
      "/images/hall/3.png",
    description:
      "SIES SOP Star Awards 2025\n\n" +
      "UFlex’s chemicals business won the prestigious President’s Award for Sustainability and two awards in the Materials & Components category at the SIES SOP Star Awards 2025.",
  },
  {
    title: "Best Organisations to Work 2025",
    image:
      "/images/hall/4.png",
    description:
      "By ET Now\n\n" +
      "UFlex has been recognized as one of the ‘Best Organisations to Work 2025’ by ET Now, a testament to our commitment to fostering a work culture that empowers our people and promotes inclusion.",
  },
  {
    title: "Mr. Ashok Chaturvedi – Business Leader of the Decade",
    image:
      "/images/hall/5.png",
    description:
      "By Indo-American Chamber of Commerce, India\n\n" +
      "At the 8th Business Leadership Awards, Mr. Ashok Chaturvedi, Chairman & Managing Director, was honoured with the “Business Leader of the Decade” award.",
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
      <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">
        <Image
          src="/images/hall/hall.png"
          alt="Corporate Policies"
          fill
          className="object-cover w-full h-full"
          priority
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
          <h1 className="text-center text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-4">
            Hall of Fame
          </h1>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4">
          <p className="lato-400 text-[15px] leading-relaxed  text-[#6B6B6B] text-left mt-6">
            Our journey of growth and leadership in flexible packaging has been consistently recognized by prestigious industry forums worldwide. From accolades in sustainability and product innovation to honors as a top employer, our awards reflect more than achievements—they embody our commitment to shaping a responsible, forward-looking future.
          </p>
        </div>

      {/* ==== IN THE SPOTLIGHT ==== */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-0">
          <h2 className="mb-10 text-center text-[24px] lato-700 text-[#117ABA] md:text-[28px] ">
            In The Spotlight
          </h2>

          <div className="relative">
            {/* arrows */}


            {/* scrollable row */}

            <SpotLightSlider heading="" items={HALL_SPOTLIGHT_SLIDES} />

          </div>

          <section className="pb-16 max-w-7xl mx-auto w-full px-4 sm:px-0">
            <AwardsTabs />
          </section>
        </div>
      </section>

      {/* ==== Modal ==== */}
      {/* <SpotlightModal index={openIdx} onClose={() => setOpenIdx(null)} /> */}

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