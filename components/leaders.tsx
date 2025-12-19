

// "use client";

// import Image from "next/image";
// import { useId, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronRight } from "lucide-react";

// /* =========================
//    Palette
// ========================= */
// const cardColors = [
//   {
//     border: "border-[#117ABA]",
//     bg: "bg-gray-100",
//     title: "text-[#117ABA]",
//     ring: "ring-[#117ABA]",
//     tint: "bg-[#117ABA]",
//     textOnTint: "text-white",
//   },
// ] as const;

// /* =========================
//    Types & Data
// ========================= */
// type AwardCard = {
//   title: string;
//   byline: string;
//   description: string;
//   image: string;
// };

// type TabKey =
//   | "packaging-films"
//   | "flexible-packaging"
//   | "chemicals"
//   | "aseptic-packaging"
//   | "holography"
//   | "engineering";

// const TABS: { key: TabKey; label: string }[] = [
//   { key: "packaging-films", label: "Packaging Films and PET Resin" },
//   { key: "chemicals", label: "Chemicals" },
//   { key: "aseptic-packaging", label: "Aseptic Packaging" },
//   { key: "flexible-packaging", label: "Flexible Packaging" },
//   { key: "holography", label: "Holography" },
//   { key: "engineering", label: "Engineering" },
// ];

// // Populate available tabs now; others can be filled later
// const AWARDS: Record<TabKey, AwardCard[]> = {
//   "packaging-films": [
//     {
//       title: "35th Packaging Innovation Awards 2024",
//       byline: "By Dow",
//       description:
//         "UFlex’s PET Film for cold blister formation was selected as one of the finalists at the 35th Packaging Innovation Awards 2024 by Dow.",
//       image:
//         "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/35th-Packaging-Innovation-Awards-202404.jpg",
//     },
//     {
//       title: "Sustainability of the Year & Product of the Year",
//       byline: "By AIMCAL Awards 2021",
//       description:
//         "UFlex’s F-ISB Cold Forming Metalized BOPET film for Blister Packaging received the Sustainability of the Year award and our Non-woven block bottom re-closable bags for rice packaging, received the Product of the Year award at the AIMCAL Awards 2021.",
//       image:
//         "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Sustainability-of-the-Year-&-Product-of-the-Year08.jpg",
//     },
//   ],
//   "flexible-packaging": [
//     {
//       title: "INDIASTAR 2024 awards",
//       byline: "By Indian Institute of Packaging",
//       description:
//         "UFlex was recognised for its excellence in packaging at the recent INDIASTAR 2024 Awards , where it bagged four awards.",
//       image:
//         "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/INDIASTAR-2024-awards03.jpeg",
//     },
//     {
//       title: "Winner – Sustainable Packaging Challenge",
//       byline: "At PACK.Nxt 2024",
//       description:
//         "At the 2nd edition of PACK.Nxt 2024, a premier event for smart, active, and sustainable packaging innovations, UFlex was named a winner of the Sustainable Packaging Challenge.",
//       image:
//         "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Winner-%E2%80%93-Sustainable-Packaging-Challenge37.jpeg",
//     },
//     {
//       title: "Silver Award – Technical Innovation",
//       byline: "By FPA",
//       description:
//         "Flex Films USA won the Silver Award - Technical Innovation at the Flexible Packaging Achievement Awards 2023, organized by the FPA, for its F-UHB-M Ultra High Barrier & High Metal Bond Metallized Polyester Film for aluminum foil replacement.",
//       image:
//         "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Silver-Award-%E2%80%93-Technical-Innovation56.jpg",
//     },
//   ],
//   chemicals: [
//     {
//       title: "Water Champion Award",
//       byline: "Presented by CII Northern Region",
//       description:
//         'UFlex’s Chemicals business has been honoured with the "Water Champion Award" at the 4th CII NR Green Practices Awards held recently.',
//       image:
//         "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Water-Champion-Award41.jpg",
//     },
//     {
//       title: "President’s Award for Sustainability",
//       byline: "SIES SOP Star Awards 2025",
//       description:
//         "UFlex’s chemicals business won the prestigious President’s Award for Sustainability and two awards in the packaging Materials & Components category at the SIES SOP Star Awards 2025.",
//       image:
//         "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/President%E2%80%99s-Award-for-Sustainability02.jpeg",
//     },
//     {
//       title: "Energy Champion Award",
//       byline: "Presented by CII Northern Region",
//       description:
//         "UFlex’s Chemicals business received the Energy Champion Award at the 3rd edition of the CII Northern Region’s Green Practices Award for Industries for its commitment to sustainability and energy efficiency.",
//       image:
//         "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Energy-Champion-Award31.jpeg",
//     },
//   ],
//   "aseptic-packaging": [],
//   holography: [],
//   engineering: [],
// };

// export default function AwardsTabs() {
//   const [active, setActive] = useState<TabKey>("packaging-films");
//   const tablistId = useId();
//   const layoutScope = useId(); // unique per instance for framer layoutId

//   const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
//     const current = TABS.findIndex((t) => t.key === active);
//     if (e.key === "ArrowRight") {
//       const next = (current + 1) % TABS.length;
//       setActive(TABS[next].key);
//     } else if (e.key === "ArrowLeft") {
//       const prev = (current - 1 + TABS.length) % TABS.length;
//       setActive(TABS[prev].key);
//     }
//   };

//   return (
//     <section className="py-16 sm:py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6">
//         <h2 className="mb-8 text-center text-[24px] lato-700 text-[#117ABA] md:text-[28px] ">
//           Business Awards
//         </h2>

//         {/* Tabs */}
//         <div
//           role="tablist"
//           aria-label="Business Award Categories"
//           className="relative mx-auto mb-8 flex w-full max-w-5xl items-end justify-between gap-3 overflow-x-auto border-b border-slate-200 pb-2"
//           id={tablistId}
//         >
//           {TABS.map((t) => {
//             const isActive = t.key === active;
//             return (
//               <button
//                 key={t.key}
//                 role="tab"
//                 aria-selected={isActive}
//                 aria-controls={`panel-${t.key}`}
//                 id={`tab-${t.key}`}
//                 onClick={() => setActive(t.key)}
//                 onKeyDown={onKeyDown}
//                 tabIndex={isActive ? 0 : -1}
//                 className={`relative whitespace-nowrap px-2 pb-2 text-[15px] font-semibold transition ${
//                   isActive ? "text-[#117ABA]" : "text-slate-700 hover:text-slate-900"
//                 }`}
//               >
//                 {t.label}
//                 {isActive && (
//                   <motion.span
//                     layoutId={`tab-underline-${layoutScope}`}
//                     className="absolute -bottom-[1px] left-0 right-0 h-[3px] rounded-full bg-[#117ABA]"
//                   />
//                 )}
//               </button>
//             );
//           })}
//         </div>

//         {/* Panels */}
//         <AnimatePresence mode="wait" initial={false}>
//           <motion.div
//             key={active}
//             role="tabpanel"
//             id={`panel-${active}`}
//             aria-labelledby={`tab-${active}`}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -6 }}
//             transition={{ duration: 0.25 }}
//           >
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {AWARDS[active].length > 0 ? (
//                 AWARDS[active].map((card, idx) => {
//                   const c = cardColors[idx % cardColors.length];
//                   return (
//                     <article
//                       key={card.title + idx}
//                       className={`group overflow-hidden rounded-sm  shadow transition`}
//                     >
//                       {/* Image wrapper must be relative for `fill` */}
//                       <div className="relative h-60 w-full overflow-hidden">
//                         <Image
//                           src={card.image}
//                           alt={card.title}
//                           fill
//                           className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
//                           priority={idx === 0}
//                         />
//                       </div>

//                       <div className="space-y-3 p-5">
//                         <h3 className="text-lg manrope-700 text-[#117ABA]">{card.title}</h3>
//                         <p className="text-[13.5px] manrope-600 text-slate-900">
//                           {card.byline}
//                         </p>
//                         <p className="line-clamp-6 text-[14px] leading-6 text-slate-700">
//                           {card.description}
//                         </p>
//                       </div>
//                     </article>
//                   );
//                 })
//               ) : (
//                 <div className="col-span-full rounded-xl border border-dashed border-slate-300 p-10 text-center text-slate-600">
//                   Data coming soon for{" "}
//                   <span className="font-semibold">
//                     {TABS.find((t) => t.key === active)?.label}
//                   </span>
//                   .
//                 </div>
//               )}
//             </div>

//             {/* {AWARDS[active].length > 0 && (
//               <div className="mt-8 flex justify-center">
//                 <button className="inline-flex items-center gap-1 rounded-full bg-[#117ABA] px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#243B6B]">
//                   View More <ChevronRight size={16} />
//                 </button>
//               </div>
//             )} */}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* tiny util: line clamp for descriptions */}
//       <style jsx>{`
//         .line-clamp-6 {
//           display: -webkit-box;
//           -webkit-line-clamp: 6;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { useState } from "react";
type Year = 2025 | 2024 | 2023 | 2022 | 2021 | 2020 | 2019 | 2018;
type YearMap<T> = Partial<Record<Year, T>>;

type AwardItem = {
  title: string;
  by: string;
  byline?: string;
  description: string;
  image: string;
};

type BusinessAwards = Partial<Record<Year, AwardItem[]>>;

type AwardsData = {
  label: string;
  years: Year[];
  data: BusinessAwards;
};

const AWARDS_DATA: Record<
  "packaging-films" | "printing-cylinders" | "holography" | "flexible-packaging",
  AwardsData
> = {
  /* ================= PACKAGING FILMS ================= */
  "packaging-films": {
    label: "Packaging Films Business Awards",
    years: [2025, 2024, 2023, 2021, 2019],
    data: {
      2025: [
        {
          title: "IFCA Star Awards 2025",
          by: "Indian Flexible Packaging and Folding Carton Association (IFCA)",
          description:
            "UFlex’s Packaging Films business won three Innovation awards at the IFCA Star Awards 2025 for advanced film solutions that enhance barrier performance, seal strength, and sustainability, reinforcing our high-performance packaging portfolio for global markets.",
          image: "/images/awards/a12025.png",
        },
        {
          title: "Gold Award for Environment Excellence – Petrochemical Sector",
          by: "GreenEnviro Environment Awards 2025",
          description:
            "UFlex was awarded for the environmental performance of its Panipat PET chips plant, reflecting leadership in sustainable operations, resource efficiency, and energy management. The GreenEnviro Awards celebrate organisations demonstrating measurable progress in environmental stewardship within the petrochemical industry.",
          image: "/images/awards/a22025.png",
        },
        {
          title: "Gold Award for F-ISB PET Film for Cold Blister Forming",
          by: "35th Dow Packaging Innovation Awards",
          description:
            "UFlex’s F-ISB PET film was honoured for its superior barrier performance and sustainable cold-blister capability, with the Dow Awards recognising it as a breakthrough innovation advancing high-barrier pharmaceutical packaging, environmental responsibility, and user convenience.",
          image: "/images/awards/a32025.png",
        },
      ],

      2024: [
        {
          title: "Best Debut Award – PTAK Warsaw Recycling Fair 2024",
          by: "PTAK Warsaw Expo",
          description:
            "UFlex won the Best Debut Award for showcasing pioneering recycling technologies that support circularity in plastics. The recognition honours companies making significant contributions to recycling innovation and demonstrating solutions that enhance resource recovery and sustainable film production.",
          image: "/images/awards/a42024.png",
        },
        {
          title: "Four Awards at INDIASTAR 2024",
          by: "Indian Institute of Packaging (IIP)",
          description:
            "UFlex Packaging Films received four INDIASTAR Awards for excellence in packaging innovation, material performance, and design functionality. The awards recognise India’s most impactful packaging solutions that address sustainability, product protection, and consumer convenience across industries.",
          image: "/images/awards/a52024.png",
        },
        {
          title: "Best Design & Product Presentation – RosUpack 2024",
          by: "RosUpack",
          description:
            "UFlex was recognised for its impactful exhibition booth, showcasing advanced packaging technologies through visually striking design and product storytelling. The award celebrates brands that demonstrate excellence in creative presentation and industry engagement.",
          image: "/images/awards/a62024.png",
        },
      ],

      2023: [
        {
          title: "Silver Award – Technical Innovation (Flex Films USA)",
          by: "Flexible Packaging Achievement Awards (FPA) 2023",
          description:
            "UFlex’s Flex Films USA won for its ultra-high-barrier metallized polyester film designed as a sustainable alternative to aluminum foil. The FPA Awards highlight packaging innovations that improve performance, reduce material usage, and support recyclability.",
          image: "/images/awards/a72023.png",
        },
        {
          title: "ET Sustainable Organization 2023",
          by: "ET Edge",
          description:
            "Flex Films, UAE has been recognised as an Economic Times Sustainable Organisation 2023 for its ESG-driven efforts in sustainable development across the GCC region, reflecting its commitment to eco-friendly operations and responsible manufacturing.",
          image: "/images/awards/a82023.png",
        },
      ],

      2021: [
        {
          title: "AIMCAL Sustainability of the Year 2021",
          by: "Association of International Metallizers, Coaters & Laminators (AIMCAL)",
          description:
            "UFlex won for its F-ISB Cold Forming Metallized BOPET film, a sustainable replacement for aluminium in blister packaging. The award recognises major environmental advancements in coated and metallized materials that reduce waste, improve efficiency, and support recyclability.",
          image: "/images/awards/a92021.png",
        },
        {
          title: "WorldStar Awards 2021",
          by: "World Packaging Organisation (WPO)",
          description:
            "UFlex was honoured for three innovations: PCR-based Asclepius films, ultra-soft durable BOPET films, and high-barrier metallized films. The WorldStar Awards recognise the world’s most innovative packaging that advances sustainability, functionality, and material science.",
          image: "/images/awards/a102021.png",
        },
      ],

      2019: [
        {
          title: "AIMCAL Awards 2019",
          by: "Association of International Metallizers, Coaters & Laminators (AIMCAL)",
          description:
            "UFlex received awards for PCR-based high-barrier films, ultra-thin high-yield films, and advanced BOPET structures. These distinctions highlight innovations that deliver improved performance, reduced material consumption, and lower environmental impact.",
          image: "/images/awards/a112019.png",
        },
      ],
    },
  },

  /* ================= PRINTING CYLINDERS ================= */
  "printing-cylinders": {
    label: "Printing Cylinders",
    years: [2025],
    data: {
      2025: [
        {
          title: "IFCA Star Awards 2025",
          by: "Indian Flexible Packaging and Folding Carton Association (IFCA)",
          description: "UFlex’s Printing Cylinders business won four Innovation awards at the IFCA Star Awards 2025 for advanced laser-engraved and laser-embossed cylinder solutions, including Ginkgo Leaves, Golden Python Glaze, and Pebble Stone patterns for premium leather applications.",
          image: "/images/awards/p12025.png",
        },
      ],
      2024: [],
      2023: [],
      2021: [],
      2019: []
    },
  },

  /* ================= HOLOGRAPHY ================= */
  "holography": {
    label: "Holography",
    years: [2025],
    data: {
      2025: [
        {
          title: "IFCA Star Awards 2025",
          by: "Indian Flexible Packaging and Folding Carton Association (IFCA)",
          description: "UFlex’s Holography Business won two IFCA Star Awards 2025 for its Hybrid Hologram and 3D Optical Label—innovations that elevate brand protection, authentication, and visual impact through advanced creativity and high-security holographic solutions.",
          image: "/images/awards/h12025.png",
        },
        {
          title: "Top 10 Pharma Brand Protection & Anti-Counterfeiting Solutions Company",
          by: "India Pharma Outlook",
          description: "UFlex was recognised as a leading provider of anti-counterfeiting and brand protection solutions for the pharmaceutical sector. The award honours organisations delivering advanced holography, security features, and authentication technologies that safeguard product integrity and help pharma brands fight counterfeiting across global supply chains.",
          image: "/images/awards/h22025.png",
        },
      ],
      2024: [],
      2023: [],
      2021: [],
      2019: []
    },
  },


  "flexible-packaging": {
    label: "Flexible Packaging",
    years: [2025, 2022, 2021, 2020, 2019, 2018],
    data: {
      2025: [
        {
          title: "IFCA Star Awards 2025",
          by: "Indian Flexible Packaging and Folding Carton Association (IFCA)",
          description:
            "Our Flexible Packaging business has been recognised with five awards at the IFCA Star Awards 2025 for innovative, customer-focused, and sustainable solutions across products such as Aashirvaad Punjabi Amber Rice, Elephant Extra-Long Basmati Rice, DetoXFi Spout Pouch, 3D Handle Pouch, and Frozen Food Packaging.",
          image: "/images/awards/fp12025.png",
        },
        {
          title: "Excellence in Global Supply Chain and Logistics Award",
          by: "CargoNXT Logistics SCM Summit",
          description:
            "UFlex received this award for demonstrating superior global supply chain capabilities, operational efficiency, and agility in packaging delivery. The recognition highlights organisations that build resilient logistics systems, optimise cost and speed, and ensure uninterrupted customer service across international markets.",
          image: "/images/awards/fp22025.png",
        },
      ], 2022: [
        {
          title: "Gold & Silver Awards for Krattika (Paper-Based Tube)",
          by: "Flexible Packaging Awards 2022",
          description:
            "UFlex won multiple awards for Krattika, its sustainability-driven paper-based tube solution. The recognition honours breakthroughs in eco-friendly packaging that reduce plastic usage while maintaining product strength, barrier integrity, and design appeal.",
          image: "/images/awards/fp32022.png",
        },
        {
          title: "Runner-up – Fully Recyclable Mono-Polymer Rice Bags",
          by: "The Economic Times Polymers Awards 2022",
          description:
            "UFlex was awarded for its mono-polymer PE/PE rice packaging designed for full recyclability. The award celebrates packaging that enables circularity, improves consumer convenience, and offers durable performance for large-quantity food applications.",
          image: "/images/awards/fp42022.png",
        },
        {
          title: "TPCI MSME Export Excellence Award 2022",
          by: "Trade Promotion Council of India (TPCI)",
          description:
            "UFlex received this award for its significant contribution to global exports and leadership in flexible packaging innovation. It recognises MSMEs that demonstrate export competitiveness, technological advancement, and continuous product improvement.",
          image: "/images/awards/fp52022.png",
        },
      ],
      2021: [
        {
          title: "Product of the Year – Non-Woven Block Bottom Reclosable Bags",
          by: "AIMCAL Awards 2021",
          description:
            "UFlex won Product of the Year for its high-strength, reclosable block-bottom bags used for rice packaging. The award honours breakthrough materials that enhance shelf presence, consumer convenience, durability, and sustainable performance.",
          image: "/images/awards/fp62021.png",
        },
      ],
      2020: [
        {
          title: "Excellence in Packaging – PE/PE Mono-Polymer Laminate Pouch",
          by: "Economic Times Polymers Awards 2020",
          description:
            "UFlex won for its recyclable mono-material laminate pouch designed for healthcare packaging. The award recognises sustainable materials offering strong barrier performance and compatibility with circular recycling systems.",
          image: "/images/awards/fp72020.png",
        },
        {
          title: "AIMCAL Awards 2020",
          by: "Association of International Metallizers, Coaters & Laminators (AIMCAL)",
          description:
            "UFlex earned recognition for recyclable PE/PE laminate structures, high-performance BOPET films, FlexiTubes for skincare products, and innovative tube packaging. These recognitions highlight UFlex’s commitment to sustainability, barrier performance, and consumer-focused design.",
          image: "/images/awards/fp82020.png",
        },
        {
          title: "Flexible Packaging Achievement Award – Shelf Impact",
          by: "Flexible Packaging Association (FPA)",
          description:
            "UFlex Limited received the Shelf Impact Award for its 4D Bag with Handle, recognising excellence in packaging aesthetics, shelf appeal, and consumer engagement.",
          image: "/images/awards/fp082025.png",
        },
      ],
      2019: [
        {
          title: "Excellence in Sustainable Packaging – Alu-Alu Pharma Laminates",
          by: "India Packaging Awards 2019",
          description:
            "UFlex was recognised for developing Alu-Alu Laminates that improve sustainability in solid dosage pharma packaging. The award honours innovations that reduce material waste while maintaining product safety, barrier protection, and regulatory compliance.",
          image: "/images/awards/fp92019.png",
        },
      ],
      2018: [
        {
          title: "Sustainability Awards 2018 – Best Sustainable Packaging Innovation",
          by: "Packaging Europe",
          description:
            "UFlex won for its biodegradable, waterless flower packaging, which reduces water use and enhances product freshness. The award recognises innovations that meaningfully reduce environmental footprint in real-world applications.",
          image: "/images/awards/fp102018.png",
        },
        {
          title: "Diamond Finalist – Dow Packaging Innovation Awards 2018",
          by: "Dow Packaging Innovation Awards",
          description:
            "UFlex was named a Diamond Finalist for its Waterless Internet Flower Packaging, an innovation enabling long-distance flower delivery without water. The award celebrates breakthrough solutions combining sustainability, functionality, and consumer benefit.",
          image: "/images/awards/fp112018.png",
        },
      ]








    },
  },
};

type BusinessKey = keyof typeof AWARDS_DATA;

export default function BusinessAwards() {
  const [activeBusiness, setActiveBusiness] =
    useState<BusinessKey>("packaging-films");

  const business = AWARDS_DATA[activeBusiness];
  const [activeYear, setActiveYear] = useState<Year>(business.years[0]);

  const cards = business.data[activeYear] ?? [];
  const isSingleCard = cards.length === 1;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-[28px] lato-700 text-[#117ABA] mb-10">
          Business Awards
        </h2>

        {/* Business Tabs */}
        <div className="flex justify-center gap-6 border-b mb-8">
          {Object.entries(AWARDS_DATA).map(([key, val]) => (
            <button
              key={key}
              onClick={() => {
                setActiveBusiness(key as BusinessKey);
                setActiveYear(val.years[0]);
              }}
              className={`pb-2 text-sm font-semibold ${activeBusiness === key
                ? "text-[#117ABA] border-b-2 border-[#117ABA]"
                : "text-gray-600"
                }`}
            >
              {val.label}
            </button>
          ))}
        </div>

        {/* Year Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {business.years.map((y) => (
            <button
              key={y}
              onClick={() => setActiveYear(y)}
              className={`px-6 py-2 text-sm ${activeYear === y
                ? "bg-[#E6E6E6] text-black border-b-2 border-[#117ABA]"
                : "bg-[#E6E6E6] text-black "
                }`}
            >
              {y}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div
          className={[
            "grid gap-8",
            cards.length === 1
              ? "lg:grid-cols-1 lg:justify-items-center"
              : cards.length === 2
                ? "lg:grid-cols-2 lg:justify-center"
                : "lg:grid-cols-3",
          ].join(" ")}
        >
          {cards.map((card, idx) => (
            <article
              key={card.title + idx}
              className={[
                "group h-full overflow-hidden bg-white ",
                isSingleCard
                  ? "lg:flex lg:items-stretch lg:gap-6"
                  : "flex flex-col",
              ].join(" ")}
            >
              {/* Image */}
              <div
                className={[
                  "relative overflow-hidden shrink-0",
                  isSingleCard
                    ? "h-[160px] w-full lg:w-[300px]"
                    : "h-[360px] w-full",
                ].join(" ")}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover bg-[#BDBCB7]"
                  priority={idx === 0}
                />
              </div>

              {/* Content */}
              <div className="flex h-full flex-col py-4">
                <h3 className="mb-2 text-[16px] font-semibold text-[#117ABA] leading-snug">
                  {card.title}
                </h3>

                <p className="mb-3 text-[13.5px] font-semibold text-gray-900">
                  {card.by}
                </p>

                <p className="mt-auto line-clamp-6 text-[14px] leading-6 text-gray-700">
                  {card.description}
                </p>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

