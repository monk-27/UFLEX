
"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { KeyPerson } from "@/app/business/data";

type Props = {
  title: string;
  people: KeyPerson[];
};

const PackagingKeypeople = ({ title, people }: Props) => {
  const [selected, setSelected] = useState<KeyPerson | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const shouldCenterDesktop = people.length <= 3;
  const hasDesktopOverflow = people.length > 3;

  /* ---------------- Embla Options ---------------- */
  const emblaOptions: EmblaOptionsType = useMemo(
    () => ({
      loop: false,
      align: "start",
      containScroll: "trimSnaps",
      dragFree: false,
      skipSnaps: false, // fixes mobile arrow resistance
    }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
    setIsScrolling(false);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  if (!people?.length) return null;

  return (
    <>
         <section className="pb-12 mt-[30px] my-6 sm:my-16 py-12 relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#97c3ef]">
             <div className="max-w-7xl mx-auto px-4">
     
               {/* Title */}
               <h2 className="text-center lato-700 text-[28px] md:text-[32px] text-[#173366] mb-3">
                Overseas
               </h2>
     
               
     
               {/* Embla */}
               <div ref={emblaRef} className="overflow-hidden touch-pan-y">
                 <div
                   className={`flex gap-6 ${
                     shouldCenterDesktop ? "md:justify-center" : ""
                   }`}
                 >
                   {people.map((p, i) => (
                     <motion.article
                       key={p.name + i}
                       initial={{ opacity: 0, y: 18 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.05 }}
                       className="
                         group relative min-w-0
                         flex-[0_0_100%]
                         sm:flex-[0_0_50%]
                         md:flex-[0_0_23%]
                         overflow-hidden rounded-[10px]
                         transition-colors duration-300
                       "
                     >
                       <div className="relative flex h-full flex-col p-4">
                         <div className="relative aspect-[4/4.2] w-full overflow-hidden rounded-[8px] bg-[#bddaf5]">
                           <Image
                             src={p.photo}
                             alt={p.name}
                             fill
                             sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 23vw"
                             className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                           />
                         </div>

                         <div className="flex flex-1 flex-col px-2 pb-2 pt-5 text-center">
                           <p className="text-[1.25rem] leading-tight text-[#18448b] transition-colors duration-300 group-hover:text-[#10386f] lato-700">
                             {p.name}
                           </p>
                           <p className="mt-3 text-[1rem] leading-snug text-black transition-colors duration-300 group-hover:text-[#102b57]">
                             {p.role}
                           </p>
                         </div>
                       </div>
     
                       <button
                         onClick={() => setSelected(p)}
                         className="absolute inset-0"
                       />
                     </motion.article>
                   ))}
                 </div>
               </div>
     
               {/* Arrows BELOW */}
               <div
                 className={`flex flex-col items-center justify-center mt-6 pt-4 gap-3
                   ${!hasDesktopOverflow ? "md:hidden" : ""}
                 `}
               >
                 <div className="flex items-center justify-center gap-6">
                   <button
                     onClick={() => {
                       if (!emblaApi || isScrolling) return;
                       setIsScrolling(true);
                       emblaApi.scrollPrev();
                     }}
                     disabled={!canPrev}
                     className="inline-flex items-center justify-center
                       rounded-full border border-gray-600 bg-white/80 p-3 shadow-sm
                       opacity-50 hover:opacity-100 transition disabled:opacity-30"
                   >
                     <ChevronLeft className="h-5 w-5 text-gray-400" />
                   </button>
     
                   <button
                     onClick={() => {
                       if (!emblaApi || isScrolling) return;
                       setIsScrolling(true);
                       emblaApi.scrollNext();
                     }}
                     disabled={!canNext}
                     className="inline-flex items-center justify-center
                       rounded-full border border-gray-600 bg-white/80 p-3 shadow-sm
                       opacity-50 hover:opacity-100 transition disabled:opacity-30"
                   >
                     <ChevronRight className="h-5 w-5 text-gray-400" />
                   </button>
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
              className="relative w-full max-w-3xl grid grid-cols-1 md:grid-cols-[38%_62%] bg-white shadow-2xl border border-gray-200 overflow-hidden"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-400"
              >
                <X className="h-5 w-5 text-black" />
              </button>

              <div className="relative aspect-square">
                <Image src={selected.photo} alt={selected.name} fill className="object-cover" />
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-black">{selected.name}</h3>
                <p className="mt-1 text-lg text-[#173366] lato-700">{selected.role}</p>
                <p className="mt-6 text-sm md:text-base leading-relaxed text-black">
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
