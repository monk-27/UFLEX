

"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Director {
  name: string;
  position: string;
  bio: string;
  img: string;
}

const directors: Director[] = [
  {
    name: "Mr. Ashok Chaturvedi",
    position: "Chairman and Managing Director",
    img:"/images/new/1.png",
    bio:
      "Mr. Ashok Chaturvedi is a first-generation entrepreneur and the founder of the UFlex Group. His dynamic leadership, long-term vision, and value-driven business strategy have established UFlex Limited as the largest flexible packaging and solutions company in India and a recognized global player in polymer sciences. He is considered the 'Father of the flexible packaging industry in India' and has been bestowed with several accolades to his credit.",
  },
  {
    name: "Mr. Jeevaraj Gopal Pillai",
    position: "Whole Time Director, President - Flexible Packaging and New Product Development and Director– Sustainability",
    bio:
      "Mr. Jeevaraj Pillai brings over 35 years of experience in packaging and packaging technology, with expertise in printing cylinders, packaging films, and advanced flexible packaging material conversion. As Director-Sustainability, he leads the development and implementation of the company's ESG strategy, along with the development of sustainable products and solutions. He has been serving on the board of UFlex Limited as a whole-time director since November 14, 2023. His extensive background in the industry is complemented by his qualifications in mechanical engineering and an MBA.",
    img: "/images/new/2.png",
  },
  {
    name: "Mr. Paresh Nath Sharma",
    position: "Independent Director",
    bio:
      "Mr. Paresh Nath Sharma has been serving on the board of UFlex Limited as an independent director since February 11, 2022. A science graduate and a fellow member of the Institute of Chartered Accountants of India (ICAI), he has over four and a half decades of experience in finance, audit, export, personnel, and administration. Throughout his career, he has worked with various organizations, including Sir Ganga Ram Hospital, MMTC Limited, the Airport Authority of India, National Small Industries Corporation Limited, and Punjab State Civil Supplies Corporation Limited, among others.",
    img: "/images/new/3.png",
  },
  {
    name: "Mr. Sujit Kumar Varma",
    position: "Independent Director",
    img:
      "/images/new/4.png",
    bio:
      "Mr. Varma has been a board member of UFlex Limited since February 14, 2023, serving as an independent director. He brings over three decades of experience in retail credit, trade finance, international banking, risk management, and compliance. Mr. Varma has also been associated with the State Bank of India (SBI), where he held several key positions, including Chief Executive Officer in New York, General Manager– mid-corporate regional office in Mumbai, and Chief General Manager– international banking. He retired from SBI as Deputy Managing Director of the Corporate Accounts Group in January 2021.",
  },
  {
    name: "Mr. Ghyanendra Nath Bajpai",
    position: "Independent Director",
    bio:
      "Mr. Bajpai has been serving as an independent director on the board of UFlex Limited since April 17, 2023. A prominent figure in India's business community, he has previously held distinguished roles, including Chairman of the Securities and Exchange Board of India (SEBI) and Chairman of the Life Insurance Corporation of India (LIC). Additionally, he was the Chairman of the Corporate Task Force for the International Organization of Securities Commissions and the Chairperson of the Insurance Institute of India. Currently, he serves as Non-Executive Chairman and Non-Executive Director for several corporations across India.",
    img: "/images/new/5.png",
  },
  {
    name: "Mrs. Rashmi Verma",
    position: "Independent Woman Director",
    bio:
      "Mrs. Rashmi Verma, IAS (retired), brings over 36 years of extensive experience across various sectors. She has been a member of the board of UFlex Limited since May 26, 2023. She is a former secretary for tourism and textiles at the Government of India and has also served as Secretary of the Ministry of Textiles and Additional Secretary of the Department of Revenue, Ministry of Finance. Currently, she serves as an independent director on several boards, including HT Media Limited and PTC India Limited.",
    img: "/images/new/6.png",
  },
];

const emblaOptions: EmblaOptionsType = {
  loop: false,            // simple slider
  align: "start",
  containScroll: "trimSnaps",
};

const BoardOfDirectors = () => {
  const [selected, setSelected] = useState<Director | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

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
  }, [emblaApi, onSelect]);

  return (
    <>
      <section className="mt-[30px] px-4 py-0 text-center sm:mt-8 sm:bg-gray-100 sm:pt-12 md:px-12">
        <div className="mx-auto max-w-7xl  md:px-8">
          <h2 className="text-[24px] lato-700 text-[#117ABA] md:text-[42px]  text-start mb-12">
            Board of Directors
          </h2>

          <div className="relative">

          
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex gap-8">
                {directors.map((d, i) => (
                  <motion.article
                    key={d.name}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                   className="
                    group relative min-w-0
                    flex-[0_0_100%]
                    sm:flex-[0_0_50%]
                    md:flex-[0_0_23%]
                    border border-gray-200 bg-white overflow-hidden
                    aspect-[4/5]
                  ">
                    {/* ---------- Base (B/W) image INSET with padding ---------- */}
                    <div className="absolute inset-0 p-4">
                      <div className="relative h-full w-full overflow-hidden">
                        <Image
                          src={d.img}
                          alt={d.name}
                          fill
                          sizes="(max-width:640px) 85vw, (max-width:1024px) 46vw, (max-width:1280px) 30vw, 23vw"
                          className="object-cover grayscale transition duration-300 ease-out"
                          priority={i < 2}
                        />
                        {/* Small name/role on B/W image */}
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3">
                          <div className="rounded-none bg-black/55 px-2 py-1 ">
                            <p className="text-xs lato-700 leading-tight text-white">{d.name}</p>
                            <p className="text-[10px] text-white/90">{d.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ---------- Hover COLOR layer: fills whole card ---------- */}
                    <div
                      className="
                        pointer-events-none absolute inset-0 opacity-0
                        transition-opacity duration-300
                        group-hover:opacity-100
                      "
                    >
                      <Image
                        src={d.img}
                        alt={d.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-sm md:text-base lato-700 leading-tight text-white">
                          {d.name}
                        </p>
                        <p className="text-white/90 text-xs md:text-sm">{d.position}</p>
                      </div>
                    </div>

                    {/* Tiny Read More (stays subtle; disappears on hover since image covers) */}
                    {/* <div className="absolute left-3 top-3">
                      <button
                        onClick={() => setSelected(d)}
                        className="
                          z-10 border border-[#117ABA] text-[#117ABA]
                          text-xs px-2 py-[3px] leading-none
                          hover:bg-[#117ABA] hover:text-white transition
                          bg-white/90
                        "
                      >
                        Read More
                      </button>
                    </div> */}

                    {/* Make whole card clickable (doesn't affect hover because overlay is pointer-events-none) */}
                    <button
                      aria-label={`Open ${d.name}`}
                      onClick={() => setSelected(d)}
                      className="absolute inset-0"
                      tabIndex={-1}
                    />
                  </motion.article>
                ))}
              </div>
            </div>
          

          </div>
            <div className="flex items-center justify-center mt-10 pt-6 gap-6 ">

            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Previous"
              className=" z-10 -translate-y-1/2 inline-flex items-center justify-center
             rounded-full border border-gray-600 bg-white/80 p-3 shadow-sm
             opacity-50 hover:opacity-100 transition md:left-0"
            >
              <ChevronLeft className="h-5 w-5 text-gray-400" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Next"
              className=" z-10 -translate-y-1/2 inline-flex items-center justify-center
             rounded-full border border-gray-600 bg-white/80 p-3 shadow-sm
             opacity-50 hover:opacity-100 transition md:right-0"
            >
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- Modal: smaller image layout ---------------- */}
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
                 className="absolute right-3 top-3 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-400"
              >
                <X className="h-5 w-5 text-black" />
              </button>

              {/* Smaller, square image */}
              <div className="p-4">
                <div className="relative aspect-square w-full border border-gray-100">
                  <Image src={selected.img} alt={selected.name} fill className="object-cover" />
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black">{selected.name}</h3>
                <p className="mt-1 lato-700 text-[#117ABA]">{selected.position}</p>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-black">
                  {selected.bio}
                </p>
                {/* <div className="mt-6">
                  <button
                    onClick={() => setSelected(null)}
                    className="bg-[#117ABA] text-white px-4 py-2 text-sm hover:bg-[#0f6aa4] transition"
                  >
                    Close
                  </button>
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export default BoardOfDirectors;
