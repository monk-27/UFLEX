


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
  { name: "Mr. Ashok Chaturvedi", position: "Chairman and Managing Director", img: "/images/new/1.png", bio: "Mr. Ashok Chaturvedi is a first-generation entrepreneur and the founder of the UFlex Group. His dynamic leadership, long-term vision, and value-driven business strategy have established UFlex Limited as the largest flexible packaging and solutions company in India and a recognized global player in polymer sciences. He is considered the ‘Father of the flexible packaging industry in India’." },
  { name: "Mr. Anantshree Chaturvedi", position: "Vice Chairman and CEO", img: "/images/new/7.png", bio: "Mr. Anantshree Chaturvedi plays a pivotal role in driving UFlex’s global success, with extensive hands-on experience in flexible packaging across India, Mexico, Poland, Egypt, the UAE, and the USA. He was instrumental in expanding UFlex's footprint in the US and currently oversees global product stability, R&D, and HR protocols. In addition to his leadership position, he serves as the company’s Chief Cultural Officer, shaping the organization’s values and workplace culture. Mr. Chaturvedi is a graduate of Babson College, where he majored in finance, global strategic management, and economics. His strong educational foundation complements his extensive practical expertise, enabling him to lead UFlex’s operations effectively across diverse regions." },
  { name: "Mr. Apoorvshree Chaturvedi", position: "Director – Global Operations", img: "/images/imagea.jpg", bio: "Mr. Apoorvshree Chaturvedi oversees corporate sustainability initiatives focusing on ESG (Environmental, Social, and Governance) and growth ventures at UFlex Group. He leads the development and execution of strategic initiatives across all business verticals, driving the creation of a value-driven organization with a strong focus on socio-economic impact. An alumnus of New York University, Mr. Chaturvedi joined UFlex in 2012 as a Management Trainee in the Middle East. He later took on leadership roles, directing marketing and sales efforts for the European and Middle Eastern regions." },
  // { name: "Mr. Rajesh Bhatia", position: "Group President (F&A) and CFO", img: "/images/new/rajesh.png", bio: "Mr. Rajesh Bhatia brings nearly three decades of extensive experience in finance, accounting, taxation, administration, and commercial and business development. He holds a degree in commerce and is an associate member of the Institute of Chartered Accountants of India (ICAI). At UFlex, his primary responsibilities include formulating financial plans and strategies, assisting in the finalization of corporate plans and strategies, and overseeing financial management, taxation, and corporate governance. His role also encompasses investor relations, information technology, and other areas." },
  {
    name: "Mr. Jeevaraj Gopal Pillai",
    position: "Whole Time Director, President - Flexible Packaging and New Product Development and Director– Sustainability",
    img: "/images/jeevaraj.png",
    bio: "Mr. Jeevaraj Pillai brings over 35 years of experience in packaging and packaging technology, with expertise in printing cylinders, packaging films, and advanced flexible packaging material conversion. As Director - Sustainability, he leads the development and implementation of the company’s ESG strategy, along with the development of sustainable products and solutions. His extensive background in the industry is complemented by his qualifications in mechanical engineering and an MBA.",
  },
 
  {
    name: "Dr. Chandan Chattaraj", position: "President – Human Resources (India & Global)",
    img: "/images/new/chandan.png",
    bio: "Dr. Chandan Chattaraj brings three decades of extensive experience across organizations such as Aircel, the Oberoi Group, Xerox India, and Jubilant Organosys, where he held various leadership roles. In addition to his professional achievements, he serves as a member of the Board of Governors for the International School of Business & Media, Pune, and is on the Corporate Advisory Board of Poornima University, Jaipur. He is an alumnus of the Xavier Institute of Social Service (XISS), Ranchi."
  },
  
  {
    name: "Mr. P. L. Sirsamkar", position: "Technical & New Product Development (Films Business)",
    img: "/images/new/pl.png",
    bio: "Mr. Sirsamkar has been with the UFlex Group for over 26 years. He has previously worked with leading organizations such as Garware and Polyplex. With nearly four decades of experience in the packaging films industry, he has been instrumental in expanding the film plant globally and has played a key role in driving the operations and development of value-added packaging films. Mr. Sirsamkar holds a degree in instrumentation and electronics engineering."
  },

   {
    name: "Mr. Dinesh Jain", position: "President – Legal & Corporate Affairs",
    img: "/images/new/din.jpg",
    bio: "With over four decades of industry experience, Mr. Dinesh Jain has been with the UFlex Group for more than 29 years. He is responsible for overseeing legal and corporate affairs, as well as leading the Group&rsquo;s corporate social responsibility initiatives. In addition to his professional responsibilities, Mr. Jain serves on the managing committees of several social organizations and educational institutions, including IMS Ghaziabad and IMS Noida. He holds an MBA and an LLM from Agra University."
  },

  {
    name: "Mr. Anand Kanodia", position: "Joint President – Finance",
    img: "/images/new/anand.png",
    bio: "A seasoned finance leader with close to three decades of diverse experience across manufacturing sectors. He has held key roles in reputed organizations such as Dalmia Cement, Acme Solar, and Bajaj Hindustan, and currently serves as Joint President- Finance at UFlex Limited."
  },

  {
    name: "Mr. Sumeet Kumar", position: "Executive Vice President – Finance",
    img: "/images/new/sumeet.jpg",
    bio: "Mr. Sumeet Kumar is a seasoned finance professional with over three decades of leadership experience across prominent corporate groups such as LANCO Group, Global Group, and Hi-Tech Gears Group. He has held key roles including President, CFO, and Group CFO, and brings deep expertise in project and corporate finance, fundraising, M&A, financial planning and control, treasury, and investor relations."
  },
];

const emblaOptions: EmblaOptionsType = {
  loop: false,            // simple slider
  align: "start",
  containScroll: "trimSnaps",
};

const KeyManagement = () => {
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
      <section className="px-4 py-0 text-center  sm:bg-gray-100 sm:pt-1 md:px-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-[24px] lato-700 text-[#117ABA] md:text-[42px]   text-start mb-12">
            Key Management
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
                  "
                  >
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
                          <div className="rounded-none bg-black/55 px-2 py-1 max-w-auto">
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
                        bg-[#c8eef4]
                      "
                    >
                      <Image
                        src={d.img}
                        alt={d.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-100"
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
          <div className="flex items-center justify-center mt-6 pt-6 gap-6 ">

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
                <div className="relative aspect-square w-full ">
                  <Image src={selected.img} alt={selected.name} fill className="object-contain" />
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
export default KeyManagement;


