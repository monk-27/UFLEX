


// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useMemo } from "react";
// import { SiteFooter } from "@/components/site-footer";
// import { SiteHeader } from "@/components/site-header";
// import type { MotionProps } from "framer-motion";
// import MediaReleasesCarousel from "./media-release";
// /* ----------------------------- DUMMY CONTENT ----------------------------- */
// // Replace these with your API/CMS data:
// const mediaReleases = [
//   {
//     title: "August 2025",
//     img: "/press/rel-aug-25.jpg",
//     href: "/press-room/media-releases/aug-2025",
//   },
//   {
//     title: "August 2025",
//     img: "/press/rel-aug-25b.jpg",
//     href: "/press-room/media-releases/aug-2025-2",
//   },
//   {
//     title: "July 2025",
//     img: "/press/rel-jul-25.jpg",
//     href: "/press-room/media-releases/jul-2025",
//   },
// ];

// const mediaCoverage = [
//   {
//     title: "CNBC Bajar",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/CNBC-Bajar18.jpg",
//     href: "/press-room/media-coverage/cnbc-bajar",
//   },
//   {
//     title: "NDTV Profit",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/NDTV-Profit34.jpg",
//     href: "/press-room/media-coverage/ndtv-profit-1",
//   },
//   {
//     title: "NDTV Profit",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/NDTV-Profit53.jpg",
//     href: "/press-room/media-coverage/ndtv-profit-2",
//   },
// ];

// const mediaResources = [
//   {
//     type: "image",
//     title: "Delegation Meet",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-resources/images/gallery07.jpg",
//     href: "/press-room/resources/delegation-meet",
//   },
//   {
//     type: "video",
//     title: "Green Products Across the Value Chain",
//     youtubeId: "Sy-1WZO192A", // replace with your actual ID
//   },
// ];

// /* ----------------------------- UI HELPERS ----------------------------- */

// const fadeUp = (d = 0): Partial<MotionProps> => ({
//   initial: { opacity: 0, y: 16 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: {
//     duration: 0.5,
//     delay: d,
//     ease: "easeOut" as const, // satisfies the union
//   },
//   viewport: { once: true, amount: 0.2 },
// });

// function SectionTitle({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="mx-auto max-w-6xl px-4 sm:px-6">
//       <motion.h2
//         className="text-center text-[24px] lato-600 text-[#117ABA] md:text-[28px] md:text-5xl"
//         {...fadeUp()}
//       >
//         {children}
//       </motion.h2>
//       <motion.div
//         className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#117ABA]/80"
//         {...fadeUp(0.05)}
//       />
//     </div>
//   );
// }

// function Card({
//   img,
//   title,
//   href,
// }: {
//   img: string;
//   title: string;
//   href: string;
// }) {
//   return (
//     <motion.div
//       className="group block overflow-hidden rounded-xl border border-slate-200/70 bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-[2px] hover:shadow-lg"
//       whileHover={{ scale: 1.005 }}
//     >
//       <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
//         <Image
//           src={img}
//           alt={title}
//           fill
//           sizes="(max-width:768px) 100vw, (max-width:1280px) 33vw, 400px"
//           className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
//         />
//         {/* subtle overlay on hover */}
//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//       </div>
//       {/* <div className="p-4">
//         <h3 className="lato-700 text-[15px] text-slate-800">{title}</h3>
//       </div> */}
//     </motion.div>
//   );
// }

// function ViewMoreButton({ href = "#" }: { href?: string }) {
//   return (
//     <div className="mt-6 flex justify-center">
//       <span
        
//         className="rounded-full bg-[#117ABA] px-5 py-2 text-sm lato-500 text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#0B3C7D] focus:ring-offset-2"
//       >
//         View More
//       </span>
//     </div>
//   );
// }

// /* ------------------------------ MAIN PAGE ------------------------------ */

// export default function PressRoomPage() {
//   // precompute rows to keep JSX tidy
//   const releases = useMemo(() => mediaReleases, []);
//   const coverage = useMemo(() => mediaCoverage, []);
//   const resources = useMemo(() => mediaResources, []);

//   return (
//     <>
//     <SiteHeader />
//      <main className="min-h-screen bg-slate-50">
//       {/* HERO */}
//       <section className="relative isolate">
//         {/* Background image */}
//         <div className="absolute inset-0 -z-10">
//           <Image
//             src="https://uflex.wpdevstudio.site/HTML/assets//images/the-press-banner.jpg" // use your hero image or remote URL
//             alt="Press Room Wall"
//             fill
//             priority
//             className="object-cover"
//           />
//           {/* gradient scrim for readability */}
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,.35),rgba(0,0,0,.65))]" />
//         </div>

//         <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28">
//           <motion.h1
//             className="lato-800 text-center text-3xl text-white drop-shadow sm:text-4xl md:text-5xl"
//             {...fadeUp()}
//           >
//             The Press Room
//           </motion.h1>
//           <motion.p
//             className="mx-auto mt-4 max-w-2xl text-center text-white/85"
//             {...fadeUp(0.1)}
//           >
//             News, announcements, media coverage, and brand resources from UFlex.
//           </motion.p>
//         </div>

//         {/* subtle wave divider */}
      
//       </section>

//       {/* MEDIA RELEASES */}
//       {/* <section className="bg-[#bcd3f0]/30 py-12 sm:py-16">
//         <SectionTitle>Media Releases</SectionTitle>

//         <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
//           {releases.map((r, i) => (
//             <motion.div key={r.href} {...fadeUp(i * 0.06)}>
//               <Card img={r.img} title={r.title} href={r.href} />
//             </motion.div>
//           ))}
//         </div>

//         <ViewMoreButton href="/press-room/media-releases" />
//       </section> */}
//        <MediaReleasesCarousel/>

//       {/* MEDIA COVERAGE */}
//       <section className="py-12 sm:py-16">
//         <SectionTitle>Media Coverage</SectionTitle>

//         <div className="max-w-7xl mx-auto w-full px-4 sm:px-0 mt-8 grid  grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3">
//           {coverage.map((c, i) => (
//             <motion.div key={c.href} {...fadeUp(i * 0.06)}>
//               <Card img={c.img} title={c.title} href={c.href} />
//             </motion.div>
//           ))}
//         </div>

//         <ViewMoreButton href="/press-room/media-coverage" />
//       </section>

//       {/* MEDIA RESOURCES */}
//       <section className="bg-white py-12 sm:py-16">
//         <SectionTitle>Media Resources</SectionTitle>

//         <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-2">
//           {resources.map((res, i) =>
//             res.type === "video" ? (
//               <motion.div
//                 key={res.youtubeId}
//                 className="overflow-hidden rounded-xl border border-slate-200/70 bg-slate-50 shadow-sm ring-1 ring-black/5"
//                 {...fadeUp(i * 0.08)}
//               >
//                 <div className="aspect-video w-full">
//                   <iframe
//                     className="h-full w-full"
//                     src={`https://www.youtube.com/embed/${res.youtubeId}`}
//                     title={res.title}
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     allowFullScreen
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="lato-700 text-[15px] text-slate-800">
//                     {res.title}
//                   </h3>
//                 </div>
//               </motion.div>
//             ) : (
//               <motion.a
//                 key={res.href}
//                 href={res.href}
//                 className="group overflow-hidden rounded-xl border border-slate-200/70 bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-[2px] hover:shadow-lg"
//                 {...fadeUp(i * 0.08)}
//               >
//                 <div className="relative aspect-[16/10] bg-slate-100">
//                   <Image
//                     src={res.img!}
//                     alt={res.title}
//                     fill
//                     sizes="(max-width:1024px) 100vw, 50vw"
//                     className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="lato-700 text-[15px] text-slate-800">
//                     {res.title}
//                   </h3>
//                 </div>
//               </motion.a>
//             )
//           )}
//         </div>
//       </section>

//       {/* CONTACT BAR */}
//       <section className="border-t border-slate-200 bg-slate-50 py-8">
//         <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
//           <p className="lato-600 text-slate-700">
//             For any media queries, please email the Global Corporate
//             Communications Team:&nbsp;
//             <a
//               href="mailto:corpcomm@uflexltd.com"
//               className="text-[#0B3C7D] underline underline-offset-4 hover:opacity-90"
//             >
//               corpcomm@uflexltd.com
//             </a>
//           </p>
//         </div>
//       </section>
//     </main>
//       <SiteFooter />

//     </>

   
//   );
// }

"use client";

import Image from "next/image";
import { motion, type MotionProps } from "framer-motion";
import { useState } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

/* ----------------------------- DATA (same JSON) ----------------------------- */

const mediaReleases = [
  {
    title: "Earnings release for the quarter ended June 30, 2025 | Stable growth amidst tariff challenges",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-releases/images/Earnings-release-for-the-quarter-ended-June-30,-2025-%7C-Stable-growth-amidst-tariff-challenges35.jpg",
    href: "#",
    year: 2025,
  },
  {
    title: "UFlex Limited recognised as a Top Employer 2025 in India",
    img: "/images/media/m1.png",
    href: "#",
    year: 2025,
  },
  {
    title: "UFlex secures Indian patent for sustainable waterborne heat seal coating for food and consumer goods packaging",
    img: "/images/media/m1.png",
    href: "#",
    year: 2025,
  },
  {
    title: "UFlex secures Indian patent for sustainable waterborne heat seal coating for food and consumer goods packaging",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-releases/images/Earnings-release-for-the-quarter-ended-September-30,-2024-%7C-Continued-Strong-Revival-in-Packaging-Films-Business30.jpg",
    href: "#",
    year: 2024,
  },
  {
    title: "UFlex secures Indian patent for sustainable waterborne heat seal coating for food and consumer goods packaging",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-releases/images/UFlex-reports-total-net-revenue-of-INR-36,825-million-in-Q1,-2024,-underpinned-by-strong-sales-volume-in-packaging-films40.jpg",
    href: "#",
    year: 2024,
  },
  {
    title: "UFlex secures Indian patent for sustainable waterborne heat seal coating for food and consumer goods packaging",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-releases/images/UFlex-clocks-a-68-increase-in-sales-volume-in-QoQ-and-105-YoY-Clocks-87-increase-in-sales-volume-in-flexible-packaging-in-Q455.jpg",
    href: "#",
    year: 2024,
  },
  {
    title: "UFlex secures Indian patent for sustainable waterborne heat seal coating for food and consumer goods packaging",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-releases/images/UFlex-Announces-Q3-Financial-Results22.jpg",
    href: "#",
    year: 2024,
  },
];

const mediaCoverage = [

  {
    title: "The Indian Express",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/The-Indian-Express--44.jpg",
    href: "#",
    year: 2025,
    type: "print" as const,
  },
  {
    title: "Financial Express",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/Financial-Express31.jpg",
    href: "#",
    year: 2025,
    type: "print" as const,
  },
  {
    title: "Financial Express",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/Financial-Express19.jpg",
    href: "#",
    year: 2024,
    type: "print" as const,
  },
  {
    title: "The Packman",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/The-Packman36.jpg",
    href: "#",
    year: 2024,
    type: "print" as const,
  },
{
    title: "Outlook",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/Outlook-12.jpg",
    href: "#",
    year: 2025,
    type: "online" as const,
  },

  {
    title: "The Packman",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/The-Packman51.jpg",
    href: "#",
    year: 2024,
    type: "online" as const,
  },
  
  {
    title: "CNBC Bajar",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/CNBC-Bajar18.jpg",
    href: "#",
    year: 2025,
    type: "electronic" as const,
  },
  {
    title: "NDTV Profit",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/NDTV-Profit34.jpg",
    href: "#",
    year: 2025,
    type: "electronic" as const,
  },
  {
    title: "NDTV Profit",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-coverage/images/NDTV-Profit53.jpg",
    href: "#",
    year: 2024,
    type: "electronic" as const,
  },
];

const mediaResources = [
  {
    type: "image" as const,
    title: "Photos",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/media-resources/images/gallery07.jpg",
    href: "#",
  },
  {
    type: "video" as const,
    title: "Videos",
    youtubeId: "Sy-1WZO192A",
  },
];

/* ----------------------------- HELPERS ----------------------------- */

const fadeUp = (d = 0): Partial<MotionProps> => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: d, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
});

type MainTab = "releases" | "coverage" | "resources";
type CoverageType = "print" | "online" | "electronic";
type YearTab = 2025 | 2024;

/* ----------------------------- SIMPLE CARD ----------------------------- */

function ReleaseCard({
  img,
  title,
}: {
  img: string;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-[420px] aspect-[16/11] overflow-hidden bg-[#f2f2f2]">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <p className="mt-3 max-w-[420px] text-center text-[14px] text-[#117ABA] lato-400 leading-snug">
        {title}
      </p>
    </div>
  );
}

/* ------------------------------ MAIN PAGE ------------------------------ */

export default function PressRoomPage() {
  const [mainTab, setMainTab] = useState<MainTab>("releases");
  const [releaseYear, setReleaseYear] = useState<YearTab>(2025);
  const [coverageType, setCoverageType] = useState<CoverageType>("print");
  const [coverageYear, setCoverageYear] = useState<YearTab>(2025);

  const mainTabs: { id: MainTab; label: string }[] = [
    { id: "releases", label: "Media Releases" },
    { id: "coverage", label: "Media Coverage" },
    { id: "resources", label: "Media Resources" },
  ];

  const coverageTypes: { id: CoverageType; label: string }[] = [
    { id: "print", label: "Print Media" },
    { id: "online", label: "Online Media" },
    { id: "electronic", label: "Electronic Media" },
  ];

  const yearTabs: YearTab[] = [2025, 2024];

  const filteredReleases = mediaReleases.filter((r) => r.year === releaseYear);
  const filteredCoverage = mediaCoverage.filter(
    (c) => c.year === coverageYear && c.type === coverageType
  );

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">
        {/* HERO (unchanged) */}
        <section className="relative isolate">
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://uflex.wpdevstudio.site/HTML/assets//images/the-press-banner.jpg"
              alt="Press Room Wall"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,.35),rgba(0,0,0,.65))]" />
          </div>

          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28">
            <motion.h1
              className="lato-800 text-center text-3xl text-white drop-shadow sm:text-4xl md:text-5xl"
              {...fadeUp()}
            >
              The Press Room
            </motion.h1>
            <motion.p
              className="mx-auto mt-4 max-w-2xl text-center text-white/85"
              {...fadeUp(0.1)}
            >
              News, announcements, media coverage, and brand resources from
              UFlex.
            </motion.p>
          </div>
        </section>

        {/* MAIN CONTENT TABS */}
        <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-8 pb-14">
          {/* TOP TAB BAR */}
          <div className="flex w-full border-b border-[#d6d6d6] mb-6">
            {mainTabs.map((tab, index) => {
              const active = tab.id === mainTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setMainTab(tab.id)}
                  className={[
                    "relative px-8 py-3 text-[15px] lato-400",
                    index !== mainTabs.length - 1 && "border-r border-[#d6d6d6]",
                    active
                      ? "bg-white text-black"
                      : "bg-[#F5F5F5] text-[#555555]",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {tab.label}
                  {active && (
                    <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#117ABA]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* CONTENT WRAPPER */}
          <div className="mt-4">
            {/* ------------------- MEDIA RELEASES TAB ------------------- */}
            {mainTab === "releases" && (
              <>
                {/* Year tabs */}
                <div className="flex justify-center gap-8 mb-6 text-[18px] lato-400">
                  {yearTabs.map((y) => {
                    const active = y === releaseYear;
                    return (
                      <button
                        key={y}
                        type="button"
                        onClick={() => setReleaseYear(y)}
                        className={
                          active
                            ? "text-[#117ABA] border-b-[3px] border-[#117ABA] pb-1"
                            : "text-[#555555] pb-1"
                        }
                      >
                        {y}
                      </button>
                    );
                  })}
                </div>

                {/* Cards row */}
                <div className="flex flex-wrap justify-center gap-8">
                  {filteredReleases.map((item) => (
                    <ReleaseCard
                      key={item.title}
                      img={item.img}
                      title={item.title}
                    />
                  ))}
                </div>
              </>
            )}

            {/* ------------------- MEDIA COVERAGE TAB ------------------- */}
            {mainTab === "coverage" && (
              <>
                {/* Sub tabs: Print / Online / Electronic */}
                <div className="flex justify-center gap-12 mb-4 text-[18px] lato-400">
                  {coverageTypes.map((ct) => {
                    const active = ct.id === coverageType;
                    return (
                      <button
                        key={ct.id}
                        type="button"
                        onClick={() => setCoverageType(ct.id)}
                        className={
                          active
                            ? "text-[#B63126] border-b-[3px] border-[#B63126] pb-1"
                            : "text-[#555555] pb-1"
                        }
                      >
                        {ct.label}
                      </button>
                    );
                  })}
                </div>

                {/* Year tabs */}
                <div className="flex justify-center gap-8 mb-6 text-[18px] lato-400">
                  {yearTabs.map((y) => {
                    const active = y === coverageYear;
                    return (
                      <button
                        key={y}
                        type="button"
                        onClick={() => setCoverageYear(y)}
                        className={
                          active
                            ? "text-[#117ABA] border-b-[3px] border-[#117ABA] pb-1"
                            : "text-[#555555] pb-1"
                        }
                      >
                        {y}
                      </button>
                    );
                  })}
                </div>

                {/* Cards row */}
                {filteredCoverage.length === 0 ? (
                  <p className="text-center text-[14px] text-gray-500 mt-6">
                    Media coverage for this segment will be updated in due
                    course.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    {filteredCoverage.map((item) => (
                      <div
                        key={item.img}
                        className="flex flex-col items-center"
                      >
                        <div className="relative w-full aspect-[16/9] bg-[#f2f2f2] overflow-hidden">
                          <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* ------------------- MEDIA RESOURCES TAB ------------------- */}
            {mainTab === "resources" && (
              <div className="mt-4">
                {/* Title in red, left aligned */}
                <h3 className="text-left text-[20px] lato-400 text-[#B63126] mb-4">
                  Media Resources
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {mediaResources.map((res) =>
                    res.type === "video" ? (
                      <div
                        key={res.youtubeId}
                        className="relative overflow-hidden"
                      >
                        <div className="relative aspect-[16/9] bg-black">
                          <iframe
                            className="h-full w-full"
                            src={`https://www.youtube.com/embed/${res.youtubeId}`}
                            title={res.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        </div>
                        <span className="absolute left-4 top-3 text-[18px] lato-600 text-white">
                          Videos
                        </span>
                      </div>
                    ) : (
                      <div
                        key={res.href}
                        className="relative overflow-hidden"
                      >
                        <div className="relative aspect-[16/9] bg-[#f2f2f2]">
                          <Image
                            src={res.img}
                            alt={res.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="absolute left-4 top-3 text-[18px] lato-600 text-white">
                          Photos
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          {/* bottom contact line like your old version */}
          <div className="mt-10 border-t border-slate-200 pt-6">
            <p className="text-center lato-600 text-slate-700 text-[14px]">
              For any media queries, please email the Global Corporate
              Communications Team:&nbsp;
              <a
                href="mailto:corpcomm@uflexltd.com"
                className="text-[#117ABA] underline underline-offset-4"
              >
                corpcomm@uflexltd.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
