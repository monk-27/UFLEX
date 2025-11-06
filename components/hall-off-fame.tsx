
// "use client";

// import dynamic from "next/dynamic";
// import { SiteHeader } from "@/components/site-header";
// import { SiteFooter } from "@/components/site-footer";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState, useRef } from "react";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";

// /* ----------------------------- Dynamic Import ----------------------------- */
// /** If `@/components/leaders` uses Swiper or browser APIs, keep it client-only */
// const BusinessAwards = dynamic(() => import("@/components/leaders"), {
//   ssr: false,
//   loading: () => (
//     <div className="mx-auto my-8 h-[320px] w-full max-w-6xl animate-pulse rounded-2xl bg-gray-100" />
//   ),
// });


// /* ------------------------- THEME: same palette as before ------------------------- */
// const cardColors = [
//   { border: "border-gray-200", bg: "bg-gray-100", title: "text-[#117ABA] ", ring: "ring-[#117ABA]", tint: "bg-[#117ABA]", textOnTint: "text-green-900" },
// ] as const;

// /* ------------------------------------ DATA ------------------------------------- */
// type Spotlight = {
//   title: string;
//   byline: string;
//   excerpt: string;
//   image: string;
// };

// const SPOTLIGHTS: Spotlight[] = [
//   {
//     title: "ET Sustainable Organisations 2025",
//     byline: "By The Times Group",
//     excerpt:
//       "UFlex is recognized as an ‘ET Sustainable Organization 2025’ for our continuous efforts in responsible growth through ESG-aligned strategies and innovative sustainability.",
//     image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/ET-Sustainable-Organisations-202540.jpg",
//   },
//   {
//     title: "Top Employer 2025 in India",
//     byline: "by the Top Employers Institute",
//     excerpt:
//       "UFlex is recognised as a Being recognised as a Top Employer 2025. A recognition that reflects our continued commitment to building an environment where everyone can learn, grow, and reach their full potential.",
//     image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Top-Employer-2025-in-India14.jpg",
//   },
//   {
//     title: "President’s Award for Sustainability",
//     byline: "SIES SOP Star Awards 2025",
//     excerpt:
//       "UFlex’s chemicals business won the prestigious President’s Award for Sustainability and two awards in the Materials & Components category at the SIES SOP Star Awards 2025.",
//     image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/President%E2%80%99s-Award-for-Sustainability44.jpg",
//   },
//   {
//     title: "Best Organisations to Work 2025",
//     byline: "By ET Now",
//     excerpt:
//       "UFlex recognized as one of the ‘Best Organisations to Work 2025’, by ET Now. This recognition is a testament to our commitment to fostering a work culture that empowers our people and promotes inc.",
//     image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Best-Organisations-to-Work-202516.jpg",
//   },
//   {
//     title: "Mr. Ashok Chaturvedi – Business Leader of the Decade",
//     byline: "By Indo-American Chamber of Commerce, India",
//     excerpt:
//       "At the 8th Business Leadership Awards, Mr. Ashok Chaturvedi, Chairman & Managing Director, was honoured with the “Business Leader of the Decade” award.",
//     image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Ashok-Chaturvedi-conferred-with-Business-Leader-of-the-Decade-award47.jpg",
//   },
// ];

// /* ---------------------------- MODAL (Framer Motion) ---------------------------- */
// function SpotlightModal({
//   index,
//   onClose,
// }: {
//   index: number | null;
//   onClose: () => void;
// }) {
//   // lock scroll while open
//   useEffect(() => {
//     if (index !== null) {
//       const prev = document.body.style.overflow;
//       document.body.style.overflow = "hidden";
//       return () => {
//         document.body.style.overflow = prev;
//       };
//     }
//   }, [index]);

//   if (index === null) return null;
//   const s = SPOTLIGHTS[index];
//   const c = cardColors[index % cardColors.length];

//   return (
//     <AnimatePresence initial={false} mode="wait">
//       {index !== null && (
//         <>
//           <motion.div
//             key="backdrop"
//             className="fixed inset-0 z-50 bg-black/50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//           />
//           <motion.div
//             key="panel"
//             className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center px-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               role="dialog"
//               aria-modal="true"
//               initial={{ y: 36, scale: 0.98, opacity: 0 }}
//               animate={{ y: 0, scale: 1, opacity: 1 }}
//               exit={{ y: 20, scale: 0.98, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 260, damping: 26 }}
//               className={`relative w-full sm:max-w-3xl overflow-hidden rounded-2xl border-2 ${c.border} ${c.bg} shadow-2xl`}
//             >
//               <div className={`h-2 ${c.tint}`} />
//               <button
//                 onClick={onClose}
//                 aria-label="Close"
//                 className="z-[100] absolute right-3 top-3 rounded-full bg-white/80 p-2 text-slate-700 shadow hover:bg-white"
//               >
//                 <X size={18} />
//               </button>

//               <div className="grid gap-5 p-5 sm:grid-cols-2">
//                 <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl border-2 ${c.border} ring-4 ${c.ring}`}>
//                   <Image src={s.image} alt={s.title} fill className="object-cover" />
//                 </div>
//                 <div className="space-y-3">
//                   <h3 className="text-2xl font-extrabold text-[#117ABA]">{s.title}</h3>
//                   <p className={`font-semibold ${c.title}`}>{s.byline}</p>
//                   <p className="leading-relaxed text-slate-700">{s.excerpt}</p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }

// /* --------------------------------- PAGE --------------------------------- */
// const HallPage = () => {
//   const [openIdx, setOpenIdx] = useState<number | null>(null);
//   const rowRef = useRef<HTMLDivElement | null>(null);

//   const scrollRow = (dir: "left" | "right") => {
//     const n = rowRef.current;
//     if (!n) return;
//     n.scrollBy({ left: (dir === "left" ? -1 : 1) * n.clientWidth * 0.9, behavior: "smooth" });
//   };

//   // Close on ESC
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenIdx(null);
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   // Mount gate to avoid hydration issues / first-load blank
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) {
//     return (
//       <main className="min-h-screen bg-white">
//         <SiteHeader />
//         <section className="mx-auto my-12 h-[480px] w-full max-w-7xl animate-pulse rounded-2xl bg-gray-100" />
//         <SiteFooter />
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-white">
//       <SiteHeader />

//       {/* HERO */}
//       <section className="bg-gradient-to-b from-white to-slate-50">
//         <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-20">
//           <div>
//             <motion.h1
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl"
//             >
//               Hall Of Fame
//             </motion.h1>
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.05 }}
//               className="manrope-400 mt-5 space-y-4 text-slate-700"
//             >
//               <p>
//                 Our journey of growth and leadership in flexible packaging has been consistently recognized by prestigious industry forums worldwide.
//               </p>
//               <p>
//                 From accolades in sustainability and product innovation to honors as a top employer, our awards reflect more than achievements— they embody our commitment to shaping a responsible, forward-looking future. Each recognition is a testament to the passion, ingenuity, and dedication of our people, and to our vision of delivering packaging solutions that combine performance, innovation, and sustainability.
//               </p>
//             </motion.div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.98 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-blue-400 shadow ring-4 ring-blue-200"
//           >
//             <Image
//               src="https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/What-We-Do01.jpg"
//               alt="UFlex capabilities across the value chain"
//               fill
//               className="object-cover"
//               priority
//             />
//             <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
//           </motion.div>
//         </div>
//       </section>

//       {/* ----------------------------- IN THE SPOTLIGHT ----------------------------- */}
//       <section className="relative py-14">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6">
//           <h2 className="mb-10 text-center text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl">
//             In The Spotlight
//           </h2>

//           <div className="relative">
//             {/* Arrows */}
//             <button
//               aria-label="Previous"
//               onClick={() => scrollRow("left")}
//               className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-xl bg-white/25 p-2 text-white backdrop-blur hover:bg-white/35"
//             >
//               <ChevronLeft />
//             </button>
//             <button
//               aria-label="Next"
//               onClick={() => scrollRow("right")}
//               className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-xl bg-white/25 p-2 text-white backdrop-blur hover:bg-white/35"
//             >
//               <ChevronRight />
//             </button>

//             {/* Horizontal row on md+, stacked on mobile */}
//             <div
//               ref={rowRef}
//               className="no-scrollbar mx-auto grid gap-8 overflow-x-auto scroll-smooth sm:grid-cols-1 md:grid-cols-2"
//             >
//               {SPOTLIGHTS.map((s, idx) => {
//                 const c = cardColors[idx % cardColors.length];
//                 return (
//                   <motion.article
//                     key={s.title}
//                     initial={{ opacity: 0, y: 12 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: idx * 0.05 }}
//                     className={`mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-2xl border ${c.border} ${c.bg} p-4 shadow ring-1 ${c.ring} md:flex-row`}
//                   >
//                     {/* BIG rectangle image */}
//                     <div className="md:w-[46%]">
//                       <div className="relative h[320px] md:h-[320px] h-[260px] w-full overflow-hidden rounded-xl">
//                         <Image src={s.image} alt={s.title} fill className="object-cover" />
//                         <div className={`absolute bottom-0 h-2 w-full ${c.tint}`} />
//                       </div>
//                     </div>

//                     {/* Text */}
//                     <div className="flex min-h-[320px] flex-1 flex-col justify-center gap-3 px-1 md:px-2">
//                       <h3 className="text-2xl manrope-900 text-[#117ABA] md:text-[28px]">{s.title}</h3>
//                       <p className="manrope-800 text-gray-700">{s.byline}</p>
//                       <p className="max-w-2xl text-gray-500">{s.excerpt}</p>

//                       <div className="mt-4">
//                         <button
//                           onClick={() => setOpenIdx(idx)}
//                           className={`inline-flex items-center rounded-lg border-2 ${c.border} bg-white px-4 py-2 text-sm font-semibold ${c.title} hover:bg-white/90`}
//                         >
//                           Read More
//                         </button>
//                       </div>
//                     </div>
//                   </motion.article>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Client-only / dynamic component with safe fallback */}
//         <BusinessAwards />
//       </section>

//       <SpotlightModal index={openIdx} onClose={() => setOpenIdx(null)} />
//       <SiteFooter />

//       {/* Utilities */}
//       <style jsx global>{`
//         .no-scrollbar::-webkit-scrollbar { display: none; }
//         .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>
//     </main>
//   );
// }
// export default HallPage
"use client";

import dynamic from "next/dynamic";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/* --------------------- Dynamic import (client-only) --------------------- */
const BusinessAwards = dynamic(() => import("@/components/leaders"), {
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
                <X size={18} />
              </button>

              <div className="grid gap-5 p-5 sm:grid-cols-2">
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-xl border-2 ${c.border} ring-4 ${c.ring}`}
                >
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-extrabold text-[#117ABA]">{s.title}</h3>
                  <p className={`font-semibold ${c.title}`}>{s.byline}</p>
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
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl"
            >
              Hall Of Fame
            </motion.h1>

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
            className="relative aspect-[16/10] overflow-hidden rounded-2xl border-2 border-blue-400 shadow ring-4 ring-blue-200"
          >
            <Image
              src="https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/What-We-Do01.jpg"
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl">
            In The Spotlight
          </h2>

          <div className="relative">
            {/* arrows */}
            <button
              aria-label="Previous"
              onClick={() => scrollRow("left")}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-xl bg-white/25 p-2 text-white backdrop-blur hover:bg-white/35"
            >
              <ChevronLeft />
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollRow("right")}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-xl bg-white/25 p-2 text-white backdrop-blur hover:bg-white/35"
            >
              <ChevronRight />
            </button>

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
                    className={`flex w-full max-w-6xl flex-col gap-6 rounded-2xl border ${c.border} ${c.bg} p-4 shadow ring-1 ${c.ring} md:flex-row`}
                  >
                    {/* image */}
                    <div className="md:w-[46%]">
                      <div className="relative h-[260px] w-full overflow-hidden rounded-xl md:h-[320px]">
                        <Image src={s.image} alt={s.title} fill className="object-cover" />
                        <div className={`absolute bottom-0 h-2 w-full ${c.tint}`} />
                      </div>
                    </div>

                    {/* text */}
                    <div className="flex min-h-[320px] flex-1 flex-col justify-center gap-3 px-1 md:px-2">
                      <h3 className="text-2xl font-extrabold text-[#117ABA] md:text-[28px]">
                        {s.title}
                      </h3>
                      <p className="font-medium text-gray-700">{s.byline}</p>
                      <p className="text-gray-500">{s.excerpt}</p>

                      <button
                        onClick={() => setOpenIdx(idx)}
                        className={`mt-4 inline-flex items-center rounded-lg border-2 ${c.border} bg-white px-4 py-2 text-sm font-semibold ${c.title} hover:bg-white/90`}
                      >
                        Read More
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {hasMounted ? (
            <BusinessAwards />
          ) : (
            <div className="mx-auto my-8 h-[320px] w-full max-w-6xl animate-pulse rounded-2xl bg-gray-100" />
          )}
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