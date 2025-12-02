// "use client";

// import { useEffect, useState, useCallback } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import useEmblaCarousel from "embla-carousel-react";
// import type { EmblaOptionsType } from "embla-carousel";
// import { ChevronLeft, ChevronRight, X } from "lucide-react";
// import type { KeyPerson } from "@/app/business/data";

// type Props = {
//     title: string;
//     people: KeyPerson[];
// };

// const emblaOptions: EmblaOptionsType = {
//     loop: false,
//     align: "start",
//     containScroll: "trimSnaps",
// };

// const Keypeople = ({ title, people }: Props) => {
//     const [selected, setSelected] = useState<KeyPerson | null>(null);

//     const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);
//     const [canPrev, setCanPrev] = useState(false);
//     const [canNext, setCanNext] = useState(true);

//     const onSelect = useCallback(() => {
//         if (!emblaApi) return;
//         setCanPrev(emblaApi.canScrollPrev());
//         setCanNext(emblaApi.canScrollNext());
//     }, [emblaApi]);

//     useEffect(() => {
//         if (!emblaApi) return;
//         onSelect();
//         emblaApi.on("select", onSelect);
//         emblaApi.on("reInit", onSelect);
//     }, [emblaApi, onSelect]);

//     if (!people || people.length === 0) return null;

//     const showArrows = people.length > 4;

//     return (
//         <>
//             <section className="mt-[30px] py-0 text-center sm:mt-8">
//                 <div className="px-4 md:px-8">
//                     <h2 className="text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl text-center mb-12">
//                         {title}
//                     </h2>

//                     <div className="relative">
//                         <div ref={emblaRef} className="overflow-hidden">
//                             <div className="flex gap-8">
//                                 {people.map((p, i) => (
//                                     <motion.article
//                                         key={p.name + i}
//                                         initial={{ opacity: 0, y: 18 }}
//                                         whileInView={{ opacity: 1, y: 0 }}
//                                         viewport={{ once: true }}
//                                         transition={{ delay: i * 0.06 }}
//                                         onClick={() => setSelected(p)}
//                                         className="
//     relative min-w-0 cursor-pointer
//     flex-[0_0_100%] sm:flex-[0_0_46%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]
//     bg-white"
//                                     >
//                                         {/* Card */}
//                                         <div className="p-4 flex flex-col w-[260px] mx-auto">
//                                             <div className="relative w-full h-[225px] overflow-hidden">
//                                                 <Image
//                                                     src={p.photo}
//                                                     alt={p.name}
//                                                     fill
//                                                     className="object-cover"
//                                                 />
//                                             </div>

//                                             <div className="mt-4 text-left">
//                                                 <p className="text-sm md:text-base manrope-700 text-[#1C1C1C]">
//                                                     {p.name}
//                                                 </p>
//                                                 <p className="mt-1 text-xs md:text-sm text-[#4F4F4F]">
//                                                     {p.role}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </motion.article>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Arrows (only if > 4 people) */}
//                     {showArrows && (
//                         <div className="flex items-center justify-center mt-6 pt-6 gap-6">
//                             <button
//                                 onClick={() => emblaApi?.scrollPrev()}
//                                 disabled={!canPrev}
//                                 aria-label="Previous"
//                                 className="z-10 inline-flex items-center justify-center
//                   0 p-3 "
//                             >
//                                 <ChevronLeft className="h-5 w-5 text-[#117ABA]" />
//                             </button>
//                             <button
//                                 onClick={() => emblaApi?.scrollNext()}
//                                 disabled={!canNext}
//                                 aria-label="Next"
//                                 className="z-10 inline-flex items-center justify-center
//                     "
//                             >
//                                 <ChevronRight className="h-5 w-5 text-[#117ABA]" />
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </section>

//             {/* Modal (unchanged) */}
//             <AnimatePresence>
//                 {selected && (
//                     <motion.div
//                         className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         onClick={() => setSelected(null)}
//                     >
//                         <motion.div
//                             className="relative w-full max-w-3xl grid grid-cols-1 md:grid-cols-[38%_62%] border border-gray-200 bg-white shadow-2xl"
//                             initial={{ scale: 0.97, opacity: 0 }}
//                             animate={{ scale: 1, opacity: 1 }}
//                             exit={{ scale: 0.97, opacity: 0 }}
//                             onClick={(e) => e.stopPropagation()}
//                         >
//                             <button
//                                 onClick={() => setSelected(null)}
//                                 aria-label="Close"
//                                 className="absolute right-3 top-3 border bg-white p-2"
//                             >
//                                 <X className="h-5 w-5" />
//                             </button>

//                             {/* Image */}
//                             <div className="p-4">
//                                 <div className="relative aspect-square w-full border border-gray-100">
//                                     <Image
//                                         src={selected.photo}
//                                         alt={selected.name}
//                                         fill
//                                         className="object-cover"
//                                     />
//                                 </div>
//                             </div>

//                             {/* Text */}
//                             <div className="p-6 md:p-8">
//                                 <h3 className="text-xl md:text-2xl font-bold text-gray-900">
//                                     {selected.name}
//                                 </h3>
//                                 <p className="mt-1 manrope-700 text-[#117ABA]">{selected.role}</p>
//                                 <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-700">
//                                     {selected.summary}
//                                 </p>
//                             </div>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </>
//     );
// };

// export default Keypeople;
"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { KeyPerson } from "@/app/business/data";

type Props = {
  title: string;
  people: KeyPerson[];
};

const Keypeople = ({ title, people }: Props) => {
  const [selected, setSelected] = useState<KeyPerson | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Center when 4 or fewer people, otherwise align start
  const emblaOptions: EmblaOptionsType = useMemo(
    () => ({
      loop: false,
      align: people.length <= 4 ? "center" : "start",
      containScroll: "trimSnaps",
    }),
    [people.length]
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
  }, [emblaApi, onSelect]);

  if (!people || people.length === 0) return null;

  const hasDesktopOverflow = people.length > 4; // for md+ only

  return (
    <>
      <section className="pb-12 mt-[30px] py-12 sm:py-0 text-center sm:mt-8 bg-[#f7f7f7]">
        <div className="px-4 md:px-1">
          <h2 className="px-6 text-start lato-700 text-[20px] md:text-[28px] text-[#000000] mb-3">
            {title}
          </h2>

          {/* Embla slider – used on mobile & desktop */}
          <div className="relative">
            <div ref={emblaRef} className="overflow-hidden">
              <div className={`flex gap-6 ${
      people.length <= 2 ? "justify-center" : ""
    }`}>
                {people.map((p, i) => (
                  <motion.article
                    key={p.name + i}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => setSelected(p)}
                    className="
                      relative min-w-0 cursor-pointer
                      flex-[0_0_55%] sm:flex-[0_0_50%] md:flex-[0_0_23%]
                      bg-[#f7f7f7]
                    "
                  >
                    <div className="p-4 flex flex-col w-full max-w-[260px] mx-auto md:max-w-none">
                      <div className="relative w-full h-[225px] overflow-hidden">
                        <Image
                          src={p.photo}
                          alt={p.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="mt-4 text-left">
                        <p className="text-sm md:text-base manrope-700 text-[#1C1C1C]">
                          {p.name}
                        </p>
                        <p className="mt-1 text-xs md:text-sm text-[#4F4F4F]">
                          {p.role}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Arrows + dots – 
                - mobile: ALWAYS visible
                - desktop: only when there are more than 4 people */}
            <div className="flex flex-col items-center justify-center mt-6 pt-4 gap-3">
              {/* arrows */}
              <div
                className={`flex items-center justify-center gap-6 ${
                  hasDesktopOverflow ? "md:flex" : "md:hidden"
                }`}
              >
                <button
                  onClick={() => emblaApi?.scrollPrev()}
                  disabled={!canPrev}
                  aria-label="Previous"
                  className="z-10 inline-flex items-center justify-center h-9 w-9 rounded-full border border-gray-300 disabled:opacity-40 hover:bg-gray-100"
                >
                  <ChevronLeft className="h-5 w-5 text-[#117ABA]" />
                </button>
                <button
                  onClick={() => emblaApi?.scrollNext()}
                  disabled={!canNext}
                  aria-label="Next"
                  className="z-10 inline-flex items-center justify-center h-9 w-9 rounded-full border border-gray-300 disabled:opacity-40 hover:bg-gray-100"
                >
                  <ChevronRight className="h-5 w-5 text-[#117ABA]" />
                </button>
              </div>

              {/* dots */}
              <div
                className={`flex items-center justify-center gap-2 ${
                  hasDesktopOverflow ? "md:flex" : "md:hidden"
                }`}
              >
                {scrollSnaps.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === selectedIndex ? "bg-[#117ABA]" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl grid grid-cols-1 md:grid-cols-[38%_62%] border border-gray-200 bg-white shadow-2xl"
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-3 top-3 border bg-white p-2"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-4">
                <div className="relative aspect-square w-full border border-gray-100">
                  <Image
                    src={selected.photo}
                    alt={selected.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {selected.name}
                </h3>
                <p className="mt-1 manrope-700 text-[#117ABA]">
                  {selected.role}
                </p>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-700">
                  {selected.summary}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Keypeople;
