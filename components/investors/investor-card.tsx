

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export type InvestorCard = {
//   id: string;
//   title: string;
//   image: string;
//   href: string;
// };

// type Props = {
//   cards: InvestorCard[];
// };

// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       when: "beforeChildren",
//       staggerChildren: 0.15,
//       delayChildren: 0.05,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4 },
//   },
// };

// export function InvestorCardsGrid({ cards }: Props) {
//   if (!cards || cards.length === 0) return null;

//   // First 6 cards → 3x2 grid
//   const firstRows = cards.slice(0, 6);
//   // Remaining cards (for you: 2 cards) → centered row
//   const lastRow = cards.slice(6);

//   const renderCard = (card: InvestorCard) => (
//     <motion.div
//       key={card.id}
//       variants={cardVariants}
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.98 }}
//       className="group relative block overflow-hidden"
//     >
//       <Link href={card.href} className="block">
//         <div className="relative h-[180px] sm:h-[200px] md:h-[220px] lg:h-[241px] w-full">
//           <Image
//             src={card.image}
//             alt={card.title}
//             fill
//             className="object-cover"
//             sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
//           />

//           <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/45" />

//           <div className="absolute inset-0 flex items-center justify-center text-center px-4">
//             <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide">
//               {card.title}
//             </span>
//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   );

//   return (
//     <section className="w-full bg-white">
//       <div className="mx-auto max-w-7xl sm:px-0 px-4 py-10 md:py-12">
//         {/* Top 2 rows: 3 columns on desktop */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//           className="grid gap-1 sm:gap-2 lg:gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
//         >
//           {firstRows.map(renderCard)}
//         </motion.div>

//         {/* Last row: centered on desktop */}
//         {lastRow.length > 0 && (
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="show"
//             className="mt-2 gap-1 sm:gap-2 lg:gap-2 grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-center"
//           >
//             {lastRow.map((card) => (
//               <div
//                 key={card.id}
//                 className="lg:basis-1/3 lg:max-w-[33.333%]"
//               >
//                 {renderCard(card)}
//               </div>
//             ))}
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type InvestorCard = {
  id: string;
  title: string;
  image: string;
  href: string;
};

type Props = {
  cards: InvestorCard[];
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

function StaticCard({ card }: { card: InvestorCard }) {
  return (
    <motion.div
      key={card.id}
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative block overflow-hidden"
    >
      
      <Link href={card.href} className="block">
        <div className="relative h-[180px] sm:h-[200px] md:h-[220px] lg:h-[241px] w-full">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/45" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide">
              {card.title}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function CarouselCard({ card }: { card: InvestorCard }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative block overflow-hidden flex-shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
    >
      <Link href={card.href} className="block">
        <div className="relative h-[180px] sm:h-[200px] md:h-[220px] lg:h-[241px] w-full">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/45" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide">
              {card.title}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function InvestorCarousel({ cards }: { cards: InvestorCard[] }) {
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function update() {
      if (window.innerWidth >= 1024) setSlidesPerView(3);
      else if (window.innerWidth >= 640) setSlidesPerView(2);
      else setSlidesPerView(1);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, cards.length - slidesPerView);

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(
    () => setCurrent((c) => Math.min(maxIndex, c + 1)),
    [maxIndex]
  );

  // Keep current in bounds when viewport changes
  useEffect(() => {
    setCurrent((c) => Math.min(c, maxIndex));
  }, [maxIndex]);

  const gapPx = 8; // gap-2 = 8px
  const translatePercent = (current * 100) / slidesPerView;

  return (
    <div className="relative mt-2">
      {/* Carousel track */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex"
          style={{
            gap: `${gapPx}px`,
            transform: `translateX(calc(-${translatePercent}% - ${
              current * gapPx
            }px))`,
            transition: "transform 0.4s ease",
          }}
        >
          {cards.map((card) => (
            <CarouselCard key={card.id} card={card} />
          ))}
        </div>
      </div>

      {/* Arrows */}
      {current > 0 && (
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 bg-white/90 hover:bg-white shadow-md rounded-full p-1.5 transition"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
      )}
      {current < maxIndex && (
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 bg-white/90 hover:bg-white shadow-md rounded-full p-1.5 transition"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      )}

      {/* Dots */}
      {maxIndex > 0 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-gray-700 w-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function InvestorCardsGrid({ cards }: Props) {
  if (!cards || cards.length === 0) return null;

  const staticCards = cards.slice(0, 3);
  const carouselCards = cards.slice(3);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl sm:px-0 px-4 py-10 md:py-12">
        {/* First 3 cards in a 3-column grid */}
        <div className="text-center mb-10 py-8">
        <h2 className="text-[24px] lato-700 text-[#173366] md:text-[42px] ">
          Investor relations
        </h2>
       
      </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {staticCards.map((card) => (
            <StaticCard key={card.id} card={card} />
          ))}
        </motion.div>
        <div className="text-center mb-10 py-8">
        <h2 className="text-[24px] lato-700 text-[#173366] md:text-[42px] ">
          Policies, announcements and other documents
        </h2>
       
      </div>

        {/* Next 5 cards in a carousel */}
        {carouselCards.length > 0 && (
          <InvestorCarousel cards={carouselCards} />
        )}
      </div>
    </section>
  );
}
