
"use client";

import dynamic from "next/dynamic";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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

const SPOTLIGHTS: Spotlight[] = [
  {
    title: "ET Sustainable Organisations 2025",
    byline: "By The Times Group",
    excerpt:
      "UFlex is recognized as an ‘ET Sustainable Organization 2025’ for our continuous efforts in responsible growth through ESG-aligned strategies and innovative sustainability.",
    image:
      "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/ET-Sustainable-Organisations-202540.jpg",
  },
  {
    title: "Top Employer 2025 in India",
    byline: "by the Top Employers Institute",
    excerpt:
      "UFlex is recognised as a Being recognised as a Top Employer 2025. A recognition that reflects our continued commitment to building an environment where everyone can learn, grow, and reach their full potential.",
    image:
      "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Top-Employer-2025-in-India14.jpg",
  },
  {
    title: "President’s Award for Sustainability",
    byline: "SIES SOP Star Awards 2025",
    excerpt:
      "UFlex’s chemicals business won the prestigious President’s Award for Sustainability and two awards in the Materials & Components category at the SIES SOP Star Awards 2025.",
    image:
      "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/President%E2%80%99s-Award-for-Sustainability44.jpg",
  },
  {
    title: "Best Organisations to Work 2025",
    byline: "By ET Now",
    excerpt:
      "UFlex recognized as one of the ‘Best Organisations to Work 2025’, by ET Now. This recognition is a testament to our commitment to fostering a work culture that empowers our people and promotes inc.",
    image:
      "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Best-Organisations-to-Work-202516.jpg",
  },
  {
    title: "Mr. Ashok Chaturvedi – Business Leader of the Decade",
    byline: "By Indo-American Chamber of Commerce, India",
    excerpt:
      "At the 8th Business Leadership Awards, Mr. Ashok Chaturvedi, Chairman & Managing Director, was honoured with the “Business Leader of the Decade” award.",
    image:
      "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Ashok-Chaturvedi-conferred-with-Business-Leader-of-the-Decade-award47.jpg",
  },
];

/* --------------------------- Modal --------------------------- */
function SpotlightModal({
  index,
  onClose,
}: {
  index: number | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (index !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [index]);

  if (index === null) return null;

  const s = SPOTLIGHTS[index];
  const c = cardColors[index % cardColors.length];

  return (
    <AnimatePresence mode="wait">
      {index !== null && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            key="panel"
            className="fixed inset-0 z-60 flex items-end justify-center px-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ y: 36, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className={`relative w-full overflow-hidden rounded-2xl border-2 ${c.border} ${c.bg} shadow-2xl sm:max-w-3xl`}
            >
              <div className={`h-2 ${c.tint}`} />
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 rounded-full bg-white/80 p-2 text-slate-700 shadow hover:bg-white"
              >
                                <X className="h-5 w-5 text-black" />

              </button>

              <div className="grid gap-5 p-5 sm:grid-cols-2">
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-xl border-2 ${c.border} ring-4 ${c.ring}`}
                >
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl manrope-700 text-[#117ABA]">{s.title}</h3>
                  <p className={`manrope-600 ${c.title}`}>{s.byline}</p>
                  <p className="leading-relaxed text-slate-700">{s.excerpt}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

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
      <section className="bg-gradient-to-b from-white to-slate-50">
        <header className=" relative h-[360px] sm:h-[666.6px] w-auto ">
              <div className="relative h-[360px] w-auto sm:h-[666.6px] ">
                <Image src="/images/mainhall.png" alt="hero" fill className="object-cover object-top" priority />
        
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/18 to-transparent" /> */}
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
        <div className=" grid max-w-7xl mx-auto w-full px-4 sm:px-0 items-center gap-10  py-12  lg:grid-cols-2 lg:gap-14 lg:py-10">
          <div>
            

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="manrope-400 mt-5 space-y-4 text-slate-700"
            >
              <p>
                Our journey of growth and leadership in flexible packaging has been
                consistently recognized by prestigious industry forums worldwide.
              </p>
              <p>
                From accolades in sustainability and product innovation to honors as
                a top employer, our awards reflect more than achievements—they
                embody our commitment to shaping a responsible, forward-looking
                future.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[16/10] overflow-hidden rounded-2xl "
          >
            <Image
              src="/images/hallhero.png"
              alt="UFlex capabilities across the value chain"
              fill
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
          </motion.div>
        </div>
      </section>

      {/* ==== IN THE SPOTLIGHT ==== */}
      <section className="relative py-14">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-0">
          <h2 className="mb-10 text-center text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl">
            In The Spotlight
          </h2>

          <div className="relative">
            {/* arrows */}
            

            {/* scrollable row */}
            <div
              ref={rowRef}
              className="no-scrollbar grid gap-8 overflow-x-auto scroll-smooth sm:grid-cols-1 md:grid-cols-2"
            >
              {SPOTLIGHTS.map((s, idx) => {
                const c = cardColors[idx % cardColors.length];
                return (
                  <motion.article
                    key={s.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className={`flex w-full max-w-6xl flex-col gap-6 rounded-2xl border ${c.border} ${c.bg} p-4 shadow md:flex-row`}
                  >
                    {/* image */}
                    <div className="md:w-[46%]">
                      <div className="relative h-[260px] w-full overflow-hidden rounded-xl md:h-[320px]">
                        <Image src={s.image} alt={s.title} fill className="object-cover" />
                        <div className={`absolute bottom-0 h-2 w-full `} />
                      </div>
                    </div>

                    {/* text */}
                    <div className="flex min-h-[320px] flex-1 flex-col justify-center gap-3 px-1 md:px-2">
                      <h3 className="text-xl manrope-700 text-[#117ABA] md:text-[20px]">
                        {s.title}
                      </h3>
                      <p className="manrope-400 text-gray-700">{s.byline}</p>
                      <p className="text-gray-500">{s.excerpt}</p>

                      {/* <button
                        onClick={() => setOpenIdx(idx)}
                        className={`mt-4 inline-flex items-center rounded-lg border-2 ${c.border} bg-white px-4 py-2 text-sm font-semibold ${c.title} hover:bg-white/90`}
                      >
                        Read More
                      </button> */}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <section className="pb-16 max-w-7xl mx-auto w-full px-4 sm:px-0">
        <AwardsTabs />
      </section>
        </div>
      </section>

      {/* ==== Modal ==== */}
      <SpotlightModal index={openIdx} onClose={() => setOpenIdx(null)} />

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