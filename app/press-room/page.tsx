

// "use client";

// import Image from "next/image";
// import { motion, type MotionProps } from "framer-motion";
// import { useState } from "react";
// import { SiteFooter } from "@/components/site-footer";
// import { SiteHeader } from "@/components/site-header";

// /* ----------------------------- DATA (same JSON) ----------------------------- */

// const mediaReleases = [
//   {
//     title: "Earnings release for the quarter ended June 30, 2025 | Stable growth amidst tariff challenges",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-releases/images/Earnings-release-for-the-quarter-ended-June-30,-2025-%7C-Stable-growth-amidst-tariff-challenges35.jpg",
//     href: "#",
//     year: 2025,
//   },
//   {
//     title: "UFlex Limited recognised as a Top Employer 2025 in India",
//     img: "/images/media/m1.png",
//     href: "#",
//     year: 2025,
//   },
//   {
//     title: "UFlex secures Indian patent for sustainable waterborne heat seal coating for food and consumer goods packaging",
//     img: "/images/media/m1.png",
//     href: "#",
//     year: 2025,
//   },
//   {
//     title: "UFlex secures Indian patent for sustainable waterborne heat seal coating for food and consumer goods packaging",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-releases/images/Earnings-release-for-the-quarter-ended-September-30,-2024-%7C-Continued-Strong-Revival-in-Packaging-Films-Business30.jpg",
//     href: "#",
//     year: 2024,
//   },
//   {
//     title: "UFlex secures Indian patent for sustainable waterborne heat seal coating for food and consumer goods packaging",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-releases/images/UFlex-reports-total-net-revenue-of-INR-36,825-million-in-Q1,-2024,-underpinned-by-strong-sales-volume-in-packaging-films40.jpg",
//     href: "#",
//     year: 2024,
//   },
//   {
//     title: "UFlex secures Indian patent for sustainable waterborne heat seal coating for food and consumer goods packaging",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-releases/images/UFlex-clocks-a-68-increase-in-sales-volume-in-QoQ-and-105-YoY-Clocks-87-increase-in-sales-volume-in-flexible-packaging-in-Q455.jpg",
//     href: "#",
//     year: 2024,
//   },
//   {
//     title: "UFlex secures Indian patent for sustainable waterborne heat seal coating for food and consumer goods packaging",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-releases/images/UFlex-Announces-Q3-Financial-Results22.jpg",
//     href: "#",
//     year: 2024,
//   },
// ];

// const mediaCoverage = [

//   {
//     title: "The Indian Express",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/The-Indian-Express--44.jpg",
//     href: "#",
//     year: 2025,
//     type: "print" as const,
//   },
//   {
//     title: "Financial Express",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/Financial-Express31.jpg",
//     href: "#",
//     year: 2025,
//     type: "print" as const,
//   },
//   {
//     title: "Financial Express",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/Financial-Express19.jpg",
//     href: "#",
//     year: 2024,
//     type: "print" as const,
//   },
//   {
//     title: "The Packman",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/The-Packman36.jpg",
//     href: "#",
//     year: 2024,
//     type: "print" as const,
//   },
// {
//     title: "Outlook",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/Outlook-12.jpg",
//     href: "#",
//     year: 2025,
//     type: "online" as const,
//   },

//   {
//     title: "The Packman",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/The-Packman51.jpg",
//     href: "#",
//     year: 2024,
//     type: "online" as const,
//   },
  
//   {
//     title: "CNBC Bajar",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/CNBC-Bajar18.jpg",
//     href: "#",
//     year: 2025,
//     type: "electronic" as const,
//   },
//   {
//     title: "NDTV Profit",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/NDTV-Profit34.jpg",
//     href: "#",
//     year: 2025,
//     type: "electronic" as const,
//   },
//   {
//     title: "NDTV Profit",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/NDTV-Profit53.jpg",
//     href: "#",
//     year: 2024,
//     type: "electronic" as const,
//   },
// ];

// const mediaResources = [
//   {
//     type: "image" as const,
//     title: "Photos",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-resources/images/gallery07.jpg",
//     href: "#",
//   },
//   {
//     type: "video" as const,
//     title: "Videos",
//     youtubeId: "Sy-1WZO192A",
//   },
// ];

// /* ----------------------------- HELPERS ----------------------------- */

// const fadeUp = (d = 0): Partial<MotionProps> => ({
//   initial: { opacity: 0, y: 16 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 0.5, delay: d, ease: "easeOut" },
//   viewport: { once: true, amount: 0.2 },
// });

// type MainTab = "releases" | "coverage" | "resources";
// type CoverageType = "print" | "online" | "electronic";
// type YearTab = 2025 | 2024;

// /* ----------------------------- SIMPLE CARD ----------------------------- */

// function ReleaseCard({
//   img,
//   title,
// }: {
//   img: string;
//   title: string;
// }) {
//   return (
//     <div className="flex flex-col items-center">
//       <div className="relative w-full max-w-[420px] aspect-[16/11] overflow-hidden bg-[#f2f2f2]">
//         <Image
//           src={img}
//           alt={title}
//           fill
//           className="object-cover"
//         />
//       </div>
//       <p className="mt-3 max-w-[420px] text-center text-[14px] text-[#117ABA] lato-400 leading-snug">
//         {title}
//       </p>
//     </div>
//   );
// }

// /* ------------------------------ MAIN PAGE ------------------------------ */

// export default function PressRoomPage() {
//   const [mainTab, setMainTab] = useState<MainTab>("releases");
//   const [releaseYear, setReleaseYear] = useState<YearTab>(2025);
//   const [coverageType, setCoverageType] = useState<CoverageType>("print");
//   const [coverageYear, setCoverageYear] = useState<YearTab>(2025);

//   const mainTabs: { id: MainTab; label: string }[] = [
//     { id: "releases", label: "Media Releases" },
//     { id: "coverage", label: "Media Coverage" },
//     { id: "resources", label: "Media Resources" },
//   ];

//   const coverageTypes: { id: CoverageType; label: string }[] = [
//     { id: "print", label: "Print Media" },
//     { id: "online", label: "Online Media" },
//     { id: "electronic", label: "Electronic Media" },
//   ];

//   const yearTabs: YearTab[] = [2025, 2024];

//   const filteredReleases = mediaReleases.filter((r) => r.year === releaseYear);
//   const filteredCoverage = mediaCoverage.filter(
//     (c) => c.year === coverageYear && c.type === coverageType
//   );

//   return (
//     <>
//       <SiteHeader />
//       <main className="min-h-screen bg-white">
//         {/* HERO (unchanged) */}
//         <section className="relative isolate">
//           <div className="absolute inset-0 -z-10">
//             <Image
//               src="https://uflex.wpdevstudio.site/HTML/assets//images/the-press-banner.jpg"
//               alt="Press Room Wall"
//               fill
//               priority
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,.35),rgba(0,0,0,.65))]" />
//           </div>

//           <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28">
//             <motion.h1
//               className="lato-800 text-center text-3xl text-white drop-shadow sm:text-4xl md:text-5xl"
//               {...fadeUp()}
//             >
//               The Press Room
//             </motion.h1>
//             <motion.p
//               className="mx-auto mt-4 max-w-2xl text-center text-white/85"
//               {...fadeUp(0.1)}
//             >
//               News, announcements, media coverage, and brand resources from
//               UFlex.
//             </motion.p>
//           </div>
//         </section>

//         {/* MAIN CONTENT TABS */}
//         <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-8 pb-14">
//           {/* TOP TAB BAR */}
//           <div className="flex w-full border-b border-[#d6d6d6] mb-6">
//             {mainTabs.map((tab, index) => {
//               const active = tab.id === mainTab;
//               return (
//                 <button
//                   key={tab.id}
//                   type="button"
//                   onClick={() => setMainTab(tab.id)}
//                   className={[
//                     "relative px-8 py-3 text-[15px] lato-400",
//                     index !== mainTabs.length - 1 && "border-r border-[#d6d6d6]",
//                     active
//                       ? "bg-white text-black"
//                       : "bg-[#F5F5F5] text-[#555555]",
//                   ]
//                     .filter(Boolean)
//                     .join(" ")}
//                 >
//                   {tab.label}
//                   {active && (
//                     <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#117ABA]" />
//                   )}
//                 </button>
//               );
//             })}
//           </div>

//           {/* CONTENT WRAPPER */}
//           <div className="mt-4">
//             {/* ------------------- MEDIA RELEASES TAB ------------------- */}
//             {mainTab === "releases" && (
//               <>
//                 {/* Year tabs */}
//                 <div className="flex justify-center gap-8 mb-6 text-[18px] lato-400">
//                   {yearTabs.map((y) => {
//                     const active = y === releaseYear;
//                     return (
//                       <button
//                         key={y}
//                         type="button"
//                         onClick={() => setReleaseYear(y)}
//                         className={
//                           active
//                             ? "text-[#117ABA] border-b-[3px] border-[#117ABA] pb-1"
//                             : "text-[#555555] pb-1"
//                         }
//                       >
//                         {y}
//                       </button>
//                     );
//                   })}
//                 </div>

//                 {/* Cards row */}
//                 <div className="flex flex-wrap justify-center gap-8">
//                   {filteredReleases.map((item) => (
//                     <ReleaseCard
//                       key={item.title}
//                       img={item.img}
//                       title={item.title}
//                     />
//                   ))}
//                 </div>
//               </>
//             )}

//             {/* ------------------- MEDIA COVERAGE TAB ------------------- */}
//             {mainTab === "coverage" && (
//               <>
//                 {/* Sub tabs: Print / Online / Electronic */}
//                 <div className="flex justify-center gap-12 mb-4 text-[18px] lato-400">
//                   {coverageTypes.map((ct) => {
//                     const active = ct.id === coverageType;
//                     return (
//                       <button
//                         key={ct.id}
//                         type="button"
//                         onClick={() => setCoverageType(ct.id)}
//                         className={
//                           active
//                             ? "text-[#B63126] border-b-[3px] border-[#B63126] pb-1"
//                             : "text-[#555555] pb-1"
//                         }
//                       >
//                         {ct.label}
//                       </button>
//                     );
//                   })}
//                 </div>

//                 {/* Year tabs */}
//                 <div className="flex justify-center gap-8 mb-6 text-[18px] lato-400">
//                   {yearTabs.map((y) => {
//                     const active = y === coverageYear;
//                     return (
//                       <button
//                         key={y}
//                         type="button"
//                         onClick={() => setCoverageYear(y)}
//                         className={
//                           active
//                             ? "text-[#117ABA] border-b-[3px] border-[#117ABA] pb-1"
//                             : "text-[#555555] pb-1"
//                         }
//                       >
//                         {y}
//                       </button>
//                     );
//                   })}
//                 </div>

//                 {/* Cards row */}
//                 {filteredCoverage.length === 0 ? (
//                   <p className="text-center text-[14px] text-gray-500 mt-6">
//                     Media coverage for this segment will be updated in due
//                     course.
//                   </p>
//                 ) : (
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
//                     {filteredCoverage.map((item) => (
//                       <div
//                         key={item.img}
//                         className="flex flex-col items-center"
//                       >
//                         <div className="relative w-full aspect-[16/9] bg-[#f2f2f2] overflow-hidden">
//                           <Image
//                             src={item.img}
//                             alt={item.title}
//                             fill
//                             className="object-cover"
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </>
//             )}

//             {/* ------------------- MEDIA RESOURCES TAB ------------------- */}
//             {mainTab === "resources" && (
//               <div className="mt-4">
//                 {/* Title in red, left aligned */}
//                 <h3 className="text-left text-[20px] lato-400 text-[#B63126] mb-4">
//                   Media Resources
//                 </h3>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   {mediaResources.map((res) =>
//                     res.type === "video" ? (
//                       <div
//                         key={res.youtubeId}
//                         className="relative overflow-hidden"
//                       >
//                         <div className="relative aspect-[16/9] bg-black">
//                           <iframe
//                             className="h-full w-full"
//                             src={`https://www.youtube.com/embed/${res.youtubeId}`}
//                             title={res.title}
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                             allowFullScreen
//                           />
//                         </div>
//                         <span className="absolute left-4 top-3 text-[18px] lato-600 text-white">
//                           Videos
//                         </span>
//                       </div>
//                     ) : (
//                       <div
//                         key={res.href}
//                         className="relative overflow-hidden"
//                       >
//                         <div className="relative aspect-[16/9] bg-[#f2f2f2]">
//                           <Image
//                             src={res.img}
//                             alt={res.title}
//                             fill
//                             className="object-cover"
//                           />
//                         </div>
//                         <span className="absolute left-4 top-3 text-[18px] lato-600 text-white">
//                           Photos
//                         </span>
//                       </div>
//                     )
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* bottom contact line like your old version */}
//           <div className="mt-10 border-t border-slate-200 pt-6">
//             <p className="text-center lato-600 text-slate-700 text-[14px]">
//               For any media queries, please email the Global Corporate
//               Communications Team:&nbsp;
//               <a
//                 href="mailto:corpcomm@uflexltd.com"
//                 className="text-[#117ABA] underline underline-offset-4"
//               >
//                 corpcomm@uflexltd.com
//               </a>
//             </p>
//           </div>
//         </section>
//       </main>
//       <SiteFooter />
//     </>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

/* ==========================
   TYPES
========================== */

type Year = 2025 | 2024;
type CoverageTab = "Print Media" | "Electronic Media" | "Online Media";

type PdfItem = {
  title: string;
  link: string;
};

/* ==========================
   ALL DATA IN ONE PLACE
========================== */

const PRESS_ROOM_DATA = {
  hero: {
    title: "The Press Room",
    image:
      "https://uflex.wpdevstudio.site/HTML/assets/images/the-press-banner.jpg",
  },

  mediaReleases: {
    pressRelease: {
      2025: [
        {
          title:
            "Quarter Ended June 30, 2025 | Stable growth amidst tariff challenges",
          link: "#",
        },
        {
          title:
            "Quarter Ended March 31, 2025 | Back on the growth track",
          link: "#",
        },
      ],
      2024: [
        {
          title:
            "Quarter Ended December 31, 2024 | Robust performance led by Packaging Films in India, Europe, Nigeria",
          link: "#",
        },
      ],
    } satisfies Record<Year, PdfItem[]>,

    pressNotes: {
      2025: [
        {
          title:
            "UFlex Limited recognised as a Top Employer 2025 in India",
          link: "#",
        },
        {
          title:
            "UFlex secures Indian patent for sustainable waterborne heat seal coating for food and consumer goods packaging",
          link: "#",
        },
      ],
      2024: [
        {
          title:
            "UFlex introduces FSSAI compliant single-pellet solution for food packaging",
          link: "#",
        },
      ],
    } satisfies Record<Year, PdfItem[]>,
  },

  mediaResources: [
    {
      label: "PHOTO GALLERY",
      image:
        "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-resources/images/gallery07.jpg",
    },
    {
      label: "WATCH VIDEOS",
      image:
        "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-resources/images/video-thumb.jpg",
    },
  ],

  mediaCoverage: {
    tabs: ["Print Media", "Electronic Media", "Online Media"] as const,
    years: [2025, 2024] as const,

    data: {
      "Print Media": {
        2025: ["m1.png", "m2.png", "m3.png", "m4.png", "m5.png"],
        2024: ["m1.png", "m2.png"],
      },
      "Electronic Media": {
        2025: ["e1.png", "e2.png", "e3.png"],
        2024: ["e1.png"],
      },
      "Online Media": {
        2025: ["o1.png", "o2.png", "o3.png", "o4.png"],
        2024: ["o1.png", "o2.png"],
      },
    } satisfies Record<CoverageTab, Record<Year, string[]>>,
  },
};

/* ==========================
   REUSABLE UI
========================== */

function YearTabs({
  years,
  activeYear,
  onChange,
}: {
  years: readonly Year[];
  activeYear: Year;
  onChange: (y: Year) => void;
}) {
  return (
    <div className="flex gap-2 mb-2">
      {years.map((y) => (
        <button
          key={y}
          onClick={() => onChange(y)}
          className={[
            "px-4 py-2 text-xs border transition",
            activeYear === y
              ? "bg-white border-[#117ABA] text-[#117ABA]"
              : "bg-[#F5F5F5] border-[#d6d6d6] text-[#555]",
          ].join(" ")}
        >
          {y}
        </button>
      ))}
    </div>
  );
}

function PdfList({ items }: { items: PdfItem[] }) {
  return (
    <div className="border border-[#d6d6d6]">
      {items.map((item, i) => (
        <a key={i} href={item.link} className="group block">
          <div className="flex justify-between items-center px-4 py-3 bg-[#F8F8F8] group-hover:bg-[#EDEDED] border-b last:border-b-0">
            <span className="text-sm lato-400">{item.title}</span>
            <Image src="/images/pdf.png" alt="PDF" width={18} height={18} />
          </div>
        </a>
      ))}
    </div>
  );
}

/* ==========================
   PAGE
========================== */

export default function PressRoomPage() {
  const [releaseYear, setReleaseYear] = useState<Year>(2025);
  const [notesYear, setNotesYear] = useState<Year>(2025);

  const [activeCoverageTab, setActiveCoverageTab] =
    useState<CoverageTab>("Print Media");
  const [activeCoverageYear, setActiveCoverageYear] =
    useState<Year>(2025);

  const { hero, mediaReleases, mediaResources, mediaCoverage } =
    PRESS_ROOM_DATA;

  return (
    <div className="bg-white">
      <SiteHeader />

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">
        <Image
          src={hero.image}
          alt={hero.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-6 sm:px-12 md:px-20">
          <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700">
            {hero.title}
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <main className="max-w-6xl mx-auto px-4 sm:px-12 md:px-20 py-10 space-y-14">

        {/* -------- MEDIA RELEASES -------- */}
        <section>
          <h2 className="text-[#117ABA] text-xl lato-600 mb-6 text-center">
            Media Releases
          </h2>

          <div className="mb-10">
            <h3 className="text-[#117ABA] text-sm lato-700 mb-2">
              Press Release
            </h3>
            <YearTabs
              years={[2025, 2024]}
              activeYear={releaseYear}
              onChange={setReleaseYear}
            />
            <PdfList items={mediaReleases.pressRelease[releaseYear]} />
          </div>

          <div>
            <h3 className="text-[#117ABA] text-sm lato-700 mb-2">
              Press Notes
            </h3>
            <YearTabs
              years={[2025, 2024]}
              activeYear={notesYear}
              onChange={setNotesYear}
            />
            <div className="bg-[#F8F8F8]">
              <PdfList items={mediaReleases.pressNotes[notesYear]} />
            </div>
          </div>
        </section>

        {/* -------- MEDIA RESOURCES -------- */}
        <section>
          <h2 className="text-[#117ABA] text-xl lato-600 text-center mb-6">
            Media Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mediaResources.map((item) => (
              <div key={item.label} className="relative h-[240px]">
                <Image src={item.image} alt={item.label} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white lato-700 text-lg">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* -------- MEDIA COVERAGE -------- */}
        <section>
          <h2 className="text-[#117ABA] text-xl lato-600 text-center mb-6">
            Media Coverage
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-6">
            {mediaCoverage.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCoverageTab(tab)}
                className={[
                  "px-6 py-2 text-sm border transition",
                  tab === activeCoverageTab
                    ? "bg-white border-[#117ABA] text-[#117ABA]"
                    : "bg-[#F5F5F5] border-[#d6d6d6] text-[#666]",
                ].join(" ")}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Year Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            {mediaCoverage.years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveCoverageYear(year)}
                className={[
                  "px-5 py-2 text-sm",
                  year === activeCoverageYear
                    ? "bg-[#6E6E6E] text-white"
                    : "bg-[#E6E6E6] text-[#666]",
                ].join(" ")}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {mediaCoverage.data[activeCoverageTab][activeCoverageYear].map(
              (img) => (
                <div
                  key={img}
                  className="bg-white border h-[180px] flex items-center justify-center"
                >
                  <Image
                    src={`/images/media/${img}`}
                    alt="Media Coverage"
                    width={220}
                    height={140}
                    className="object-contain"
                  />
                </div>
              )
            )}
          </div>

          <div className="mt-6 text-left">
            <a className="text-[#117ABA] lato-600 underline underline-offset-4 inline-flex items-center gap-1">
              View More <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
