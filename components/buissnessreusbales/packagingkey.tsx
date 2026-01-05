


// "use client";

// import { useEffect, useState, useCallback, useMemo } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import useEmblaCarousel from "embla-carousel-react";
// import type { EmblaOptionsType } from "embla-carousel";
// import { ChevronLeft, ChevronRight, X } from "lucide-react";
// import type { KeyPerson } from "@/app/business/data";

// type Props = {
//   title: string;
//   people: KeyPerson[];
// };

// const PackagingKeypeople = ({ title, people }: Props) => {
//   const [selected, setSelected] = useState<KeyPerson | null>(null);
//   const [canPrev, setCanPrev] = useState(false);
//   const [canNext, setCanNext] = useState(true);
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

//   // Center when 4 or fewer people, otherwise align start
//   const emblaOptions: EmblaOptionsType = useMemo(
//     () => ({
//       loop: false,
//       align: people.length <= 4 ? "center" : "start",
//       containScroll: "trimSnaps",
//     }),
//     [people.length]
//   );

//   const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setCanPrev(emblaApi.canScrollPrev());
//     setCanNext(emblaApi.canScrollNext());
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;

//     setScrollSnaps(emblaApi.scrollSnapList());
//     onSelect();

//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", () => {
//       setScrollSnaps(emblaApi.scrollSnapList());
//       onSelect();
//     });
//   }, [emblaApi, onSelect]);

//   if (!people || people.length === 0) return null;

//   const hasDesktopOverflow = people.length > 4; // for md+ only

//   return (
//     <>
//       <section className="text-center pt-6 relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#f7f7f7]">
//         <div className="">
          
//           {/* Embla slider – used on mobile & desktop */}
//           <div className="">
//             <div ref={emblaRef} className="overflow-hidden max-w-7xl mx-auto ">
//               <h2 className=" px-0 text-start lato-400 text-[20px] md:text-[24px] text-[#117ABA] mb-3">
//             {title}

//           </h2>
//               <div
//                 className={`flex gap-6  ${
//                   people.length <= 3 ? "justify-center" : ""
//                 }`}
//               >
//                 {people.map((p, i) => (
//                   <motion.article
//                     key={p.name + i}
//                     initial={{ opacity: 0, y: 18 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: i * 0.06 }}
//                     className="
//                       group relative min-w-0
//                       flex-[0_0_55%] sm:flex-[0_0_50%] md:flex-[0_0_23%]
//                       border border-gray-200 bg-white overflow-hidden
//                       aspect-square
//                     "
//                   >
//                     {/* ---------- Base (B/W) image with small label ---------- */}
//                     <div className="absolute inset-0 p-4">
//                       <div className="relative h-full w-full overflow-hidden">
//                         <Image
//                           src={p.photo}
//                           alt={p.name}
//                           fill
//                           sizes="(max-width:640px) 85vw, (max-width:1024px) 46vw, (max-width:1280px) 30vw, 23vw"
//                           className="object-contain grayscale transition duration-300 ease-out"
//                         />
//                         <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3">
//                           <div className="rounded-none bg-black/55 px-2 py-1 w-full">
//                             <p className="text-xs lato-700 leading-tight text-white">
//                               {p.name}
//                             </p>
//                             <p className="text-[10px] text-white/90">
//                               {p.role}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* ---------- Hover COLOR layer: fills whole card ---------- */}
//                     <div
//                       className="
//                         pointer-events-none absolute inset-0 opacity-0
//                         transition-opacity duration-300
//                         group-hover:opacity-100
//                       "
//                     >
//                       <Image
//                         src={p.photo}
//                         alt={p.name}
//                         fill
//                         sizes="100vw"
//                         className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
//                       <div className="absolute bottom-3 left-3 right-3">
//                         <p className="text-sm md:text-base lato-700 leading-tight text-white">
//                           {p.name}
//                         </p>
//                         <p className="text-white/90 text-xs md:text-sm">
//                           {p.role}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Make whole card clickable */}
//                     <button
//                       aria-label={`Open ${p.name}`}
//                       onClick={() => setSelected(p)}
//                       className="absolute inset-0"
//                       tabIndex={-1}
//                     />
//                   </motion.article>
//                 ))}
//               </div>
//             </div>

//             {/* Arrows + dots */}
//             <div className="flex flex-col items-center justify-center mt-6 pt-4 gap-3">
//               {/* arrows */}
//               <div
//                 className={`flex items-center justify-center gap-6 ${
//                   hasDesktopOverflow ? "md:flex" : "md:hidden"
//                 }`}
//               >
//                 <button
//                   onClick={() => emblaApi?.scrollPrev()}
//                   disabled={!canPrev}
//                   aria-label="Previous"
//                   className="z-10 -translate-y-1/2 inline-flex items-center justify-center
//                     rounded-full border border-gray-600 bg-white/80 p-3 shadow-sm
//                     opacity-50 hover:opacity-100 transition md:left-0
//                   "
//                 >
//                   <ChevronLeft className="h-5 w-5 text-gray-400" />
//                 </button>
//                 <button
//                   onClick={() => emblaApi?.scrollNext()}
//                   disabled={!canNext}
//                   aria-label="Next"
//                   className="z-10 -translate-y-1/2 inline-flex items-center justify-center
//                     rounded-full border border-gray-600 bg-white/80 p-3 shadow-sm
//                     opacity-50 hover:opacity-100 transition md:right-0
//                   "
//                 >
//                   <ChevronRight className="h-5 w-5 text-gray-400" />
//                 </button>
//               </div>

//               {/* dots */}
//               {/* <div
//                 className={`flex items-center justify-center gap-2 ${
//                   hasDesktopOverflow ? "md:flex" : "md:hidden"
//                 }`}
//               >
//                 {scrollSnaps.map((_, i) => (
//                   <button
//                     key={i}
//                     type="button"
//                     onClick={() => emblaApi?.scrollTo(i)}
//                     className={`h-2.5 w-2.5 rounded-full transition ${
//                       i === selectedIndex ? "bg-[#117ABA]" : "bg-gray-300"
//                     }`}
//                     aria-label={`Go to slide ${i + 1}`}
//                   />
//                 ))}
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Modal (same logic, just using photo/name/role/summary) */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelected(null)}
//           >
//             <motion.div
//               className="relative w-full max-w-3xl grid grid-cols-1 md:grid-cols-[38%_62%] border border-gray-200 bg-white shadow-2xl"
//               initial={{ scale: 0.97, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.97, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setSelected(null)}
//                 aria-label="Close"
//                 className="absolute right-3 top-3 border bg-white p-2"
//               >
//                 <X className="h-5 w-5 text-black" />
//               </button>

//               <div className="p-4">
//                 <div className="relative aspect-square w-full border border-gray-100">
//                   <Image
//                     src={selected.photo}
//                     alt={selected.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>

//               <div className="p-6 md:p-8">
//                 <h3 className="text-xl md:text-2xl font-bold text-gray-900">
//                   {selected.name}
//                 </h3>
//                 <p className="mt-1 lato-700 text-[#117ABA]">
//                   {selected.role}
//                 </p>
//                 <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-700">
//                   {selected.summary}
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default PackagingKeypeople;
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

const PackagingKeypeople = ({ title, people }: Props) => {
  const [selected, setSelected] = useState<KeyPerson | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  // Always center slides, drag freely for smooth feel
  const emblaOptions: EmblaOptionsType = useMemo(
    () => ({
      loop: false,
      align: "center",
      containScroll: "trimSnaps",
      dragFree: true,
    }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("init", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("init", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!people || people.length === 0) return null;

  const showArrows = canPrev || canNext;

  return (
    <>
      <section className="py-8 md:py-12 w-screen -mx-[50vw] relative left-1/2 right-1/2 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Title */}
          <h2 className="text-left lato-400 text-[20px] md:text-[24px] text-[#117ABA] mb-8">
            {title}
          </h2>

          {/* Carousel Container */}
          <div className="relative">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex gap-6">
                {people.map((p, i) => (
                  <motion.article
                    key={p.name + i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="
                      group relative min-w-0 cursor-pointer
                      flex-[0_0_55%] sm:flex-[0_0_50%] md:flex-[0_0_23%]
                      border border-gray-200 bg-white overflow-hidden
                      aspect-square
                    "
                  >
                    {/* Grayscale Base */}
                    <div className="absolute inset-0 p-4">
                      <div className="relative h-full w-full overflow-hidden">
                        <Image
                          src={p.photo}
                          alt={p.name}
                          fill
                          sizes="(max-width:640px) 85vw, (max-width:1024px) 46vw, 30vw"
                          className="object-contain grayscale transition duration-300"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3">
                          <div className="bg-black/55 px-3 py-2 rounded">
                            <p className="text-xs lato-700 text-white">{p.name}</p>
                            <p className="text-[10px] text-white/90">{p.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Color Hover */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Image
                        src={p.photo}
                        alt={p.name}
                        fill
                        className="object-contain scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-sm md:text-base lato-700 text-white">{p.name}</p>
                        <p className="text-xs md:text-sm text-white/90">{p.role}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelected(p)}
                      className="absolute inset-0 z-10"
                      aria-label={`View details of ${p.name}`}
                    />
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Bottom Centered Arrows - Only when scrollable */}
            {showArrows && (
              <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-8">
                  <button
                    onClick={() => emblaApi?.scrollPrev()}
                    disabled={!canPrev}
                    className={`
                      w-12 h-12 rounded-full bg-white border border-gray-300 shadow-lg
                      flex items-center justify-center transition-all
                      ${canPrev ? "hover:scale-110 cursor-pointer" : "opacity-50 cursor-not-allowed"}
                    `}
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-700" />
                  </button>

                  <button
                    onClick={() => emblaApi?.scrollNext()}
                    disabled={!canNext}
                    className={`
                      w-12 h-12 rounded-full bg-white border border-gray-300 shadow-lg
                      flex items-center justify-center transition-all
                      ${canNext ? "hover:scale-110 cursor-pointer" : "opacity-50 cursor-not-allowed"}
                    `}
                    aria-label="Next"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-700" />
                  </button>
                </div>
              </div>
            )}
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
              className="relative w-full max-w-3xl grid grid-cols-1 md:grid-cols-[38%_62%] bg-white shadow-2xl border border-gray-200 overflow-hidden"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-square">
                <Image src={selected.photo} alt={selected.name} fill className="object-cover" />
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{selected.name}</h3>
                <p className="mt-1 text-lg text-[#117ABA] lato-700">{selected.role}</p>
                <p className="mt-6 text-sm md:text-base leading-relaxed text-gray-700">
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

export default PackagingKeypeople;