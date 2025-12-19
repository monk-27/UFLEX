

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
      "/images/press/mainpress.png",
  },

mediaReleases: {
  pressRelease: {
    2025: [
      {
        title:
          "13 Nov 2025: Earnings Release for the Quarter ended September 30, 2025 | GST reforms, evolving trade dynamics set to catalyze growth ahead",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PR_13Nov25_UFlex_Q2FY26_Earnings.pdf",
      },
      {
        title:
          "13 Aug 2025: Earnings Release for the Quarter ended June 30, 2025 | Stable growth amidst tariff challenges",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PR_13Aug25_UFlex_Q1FY26_Earnings.pdf",
      },
      {
        title:
          "19 May 2025: Earnings Release for the Quarter ended March 31, 2025 | Back on the growth track",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PR_19May25_UFlex_Q4FY25_Earnings.pdf",
      },
      {
        title:
          "14 Feb 2025: Earnings Release for the Quarter ended December 31, 2024 | Robust Performance led by Packaging Films in India, Europe, Nigeria",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PR_14Feb25_Uflex_Q3FY25_Earnings.pdf",
      },
    ],
     2024: [
    {
      title: "14 November 2024: Continued Strong Revival in Packaging Films Business",
      link: "https://www.uflexltd.com/pdf/Press-Release/2024/PR_14Nov24_2QFY25_Release.pdf",
    },
    {
      title: "12 August 2024: UFlex reports total net revenue of INR 36,825 million in Q1, 2024, underpinned by strong sales volume in packaging films",
      link: "https://www.uflexltd.com/pdf/Press-Release/2024/PR_12Aug24_UFlex_Q1FY25_Results.pdf",
    },
    {
      title: "29 May 2024: UFlex clocks a 6.8% increase in sales volume in QoQ and 10.5% YoY Clocks 8.7% increase in sales volume in flexible packaging in Q4",
      link: "https://www.uflexltd.com/pdf/Press-Release/2024/PR_29May24_UFlex_Q4FY24_Results.pdf",
    },
    {
      title: "13 Feb 2024: UFlex Announces Q3 Financial Results",
      link: "https://www.uflexltd.com/pdf/Press-Release/2024/PR_13Feb24_UFlex_Q3FY24_Result.pdf",
    },
  ],
  } satisfies Record<Year, PdfItem[]>,

  pressNotes: {
    2025: [
      {
        title:
          "28 Nov 2025: UFlex’s FlexiTubes to Showcase Advanced Tube Packaging Solutions for the Beauty Industry at Cosmoprof India 2025",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_28Nov25_UFlex_Cosmoprof_Mumbai2025.pdf",
      },
      {
        title:
          "28 Oct 2025: UFlex to Showcase a Comprehensive Range of Pet Food Packaging Solutions at Pet Fair South East Asia 2025",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_28Oct25_UFlex_PetFair_SEA2025.pdf",
      },
      {
        title:
          "23 Oct 2025: UFlex’s FlexiTubes to Showcase Next-Gen Sustainable and Aesthetic Tube Packaging Solutions at Beautyworld Middle East 2025",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_23Oct25_UFlex_Beautyworld_ME2025.pdf",
      },
      {
        title:
          "30 Sep 2025: Morris Packaging LLC and UFlex Packaging Inc. Forge Strategic Partnership to Deliver Innovative & Sustainable Woven Bag Series",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_30Sep2025_UFlex-Morris_WPPBags%20.pdf",
      },
      {
        title:
          "07 Aug 2025: UFlex Limited Recognised as a Top Employer 2025 in India",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_07Aug25_UFlex_TE2025.pdf",
      },
      {
        title:
          "22 Jul 2025: UFlex Secures Indian Patent for Sustainable Waterborne Heat Seal Coating for Food and Consumer Goods Packaging",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_22Jul25_UFlex_IP_HSCoating.pdf",
      },
      {
        title:
          "14 Jul 2025: UFlex’s FlexiTubes to Showcase Sustainable Tube Packaging for the Beauty Industry at Cosmopack North America 2025",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_14Jul25_%20UFlex_Cosmopack_NA_2025.pdf",
      },
      {
        title:
          "07 Jul 2025: UFlex to Showcase Sustainable Tubes Incorporating USFDA-Approved Recycled Content at CMPL Expo 2025",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_07Jul25_UFlex_CMPL_Expo_2025.pdf",
      },
      {
        title:
          "19 Jun 2025: UFlex Introduces FSSAI compliant Single-Pellet Solution for Food Packaging | Enables Food and Beverage Brands to Meet EPR Compliance",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PR_190625_UFlex_Single_Pellet_Solution.pdf",
      },
      {
        title:
          "13 Jun 2025: UFlex to Showcase Sustainable Packaging Innovations & Recycling Technology at GCPRS 2025",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_13Jun25_UFlex_GCPRS2025.pdf",
      },
      {
        title:
          "19 Mar 2025: UFlex’s FlexiTubes to lead the way in sustainable beauty packaging at COSMOPROF Italy 2025",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_19Mar25_UFlex_COSMOPROF_Italy.pdf",
      },
      {
        title:
          "12 Mar 2025: UFlex Secures USFDA Approval for Recycled PE in Food Packaging",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_12Mar25_UFlex_USFDA.pdf",
      },
      {
        title:
          "04 Feb 2025: UFlex Advocates for PLI Support to Strengthen India's Packaging Industry at PHDCCI Forum",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_04Feb25_UFlex_PHDCCI.pdf",
      },
      {
        title:
          "30 Jan 2025: UFlex’s Chemicals and Engineering Businesses to Exhibit Innovative Packaging and Printing Solutions at Print Pack 2025",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_30Jan25_UFlex_PP2025.pdf",
      },
      {
        title:
          "24 Jan 2025: UFlex to Present Sustainable and Customizable Tube Solutions at Paris Packaging Week 2025",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_24Jan25_UFlex_PPW2025.pdf",
      },
      {
        title:
          "09 Jan 2025: UFlex Partners with IIP Delhi to Promote Recycling Awareness and Sustainable Innovations",
        link: "https://www.uflexltd.com/pdf/Press-Release/2025/PN_09Jan25_UFlex_IIPDelh.pdf",
      },
    ],
     2024: [
    {
      title: "30 Dec 2024: UFlex Triumphs at IFCA Star Awards 2024",
      link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_30Dec24_UFlex_IFCA2024.pdf",
    },
    {
      title: "03 Dec 2024: UFlex’s FlexiTubes to Showcase Sustainable Products for the Beauty Industry at COSMOPROF INDIA 2024",
      link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_03Dec24_CosmoprofIndia2024.pdf",
    },
    {
      title: "30 Sep 2024: Mr. Ashok Chaturvedi highlights the role of Artificial Intelligence in addressing the problem of flexible packaging waste at ElitePlus++ Global Business Summit 2024",
      link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_30Sep24_UFlex_CMD_ElitePlus2024.pdf",
    },
    {
      title: "24 Sep 2024: UFlex Founder, Chairman and Managing Director, Mr. Ashok Chaturvedi recognized as “Business Leader of the Decade” at the 21st Indo-US Economic Summit 2024",
      link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_24Sep24_IACC2024.pdf",
    },
    {
      title: "19 Sep 2024: Enabling food security and Empowering India’s food processing sector: UFlex at World Food India 2024",
      link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_19Sep24_UFlex_WFI2024.pdf",
    },
    {
      title: "13 Sep 2024: UFlex partners with PHDCCI for the Global Sustainability Summit 2024",
      link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_13Sep24_UFlex_PHDCCI_GSS2024.pdf",
    },
    {
      title: "27 May 2024: UFlex to showcase innovative and sustainable printing and packaging solutions at DRUPA 2024",
      link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_27May24_DRUPA2024.pdf",
    },
    {
      title: "10 May 2024: Mr. Ashok Chaturvedi, CMD, UFlex Limited, releases a report: “Proposed National Standard for Scientific Estimation of Recycled Content” at an industry event",
      link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_10May24_PPRDC2024.pdf",
    },
    {
      title: "25 Apr 2024: In line with its net zero commitment, UFlex inks an agreement for the supply of renewable power for its packaging films plant in Karnataka",
      link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_25Apr24_UFlex_Renewable_Power.pdf",
    },
    {
      title: "22 Apr 2024: UFlex Reiterates Commitment to Environmental Stewardship This Earth Day",
      link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_22Apr24_UFlex_CSRWorkshop.pdf",
    },
    {
      title: "08 Apr 2024: UFlex bags the second-highest number of printing and packaging industry awards | Wins 10 awards across categories at SIES SOP Star Awards 2023",
      link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_09Apr24_UFlex_SIES2024.pdf",
    },
    {
      title: "02 Apr 2024: UFlex Begins Commercial Production of Poly-Condensed Polyester Chips in Panipat, India",
      link: "#https://www.uflexltd.com/pdf/Press-Release/2024/PN_02Apr24_UFlex_Panipat_India.pdf",
    },
    {
      title: "06 Mar 2024: UFlex to showcase innovative food-grade packaging solutions at Aahar, a leading international food and hospitality fair",
      link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_06Mar24_UFlex_Aahar2024.pdf",
    },
    {
      title: "01 Feb 2024: UFlex to Showcase Advanced Machine Technology at PlastFocus 2024",
      link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_01Feb24_UFlex_PlastFocus2024.pdf",
    },
    {
      title: "08 Jan 2024: UFlex Showcases Pioneering Packaging Solutions for the Food and Beverage Industry at Indusfood Tech 2024",
      link: "https://www.uflexltd.com/pdf/Press-Release/2024/PN_08Jan24_UFlex_IndusfoodTech2024.pdf",
    },
  ],
  } satisfies Record<Year, PdfItem[]>,
},


  mediaResources: [
    {
      label: "PHOTO GALLERY",
      image:
        "/images/press/press1.png",
    },
    {
      label: "WATCH VIDEOS",
      image:
        "/images/press/press2.png",
    },
  ],

  mediaCoverage: {
    tabs: ["Print Media", "Electronic Media", "Online Media"] as const,
    years: [2025, 2024] as const,

    data: {
      "Print Media": {
        2025: ["/images/press/pm1.png", "/images/press/pm2.png", "/images/press/pm3.png", "/images/press/pm4.png", "/images/press/pm5.png"],
        2024: ["/images/press/pm1.png", "/images/press/pm2.png"],
      },
      "Electronic Media": {
        2025: ["/images/press/pm1.png", "/images/press/pm2.png", "/images/press/pm3.png"],
        2024: ["/images/press/pm1.png"],
      },
      "Online Media": {
        2025: ["/images/press/pm1.png", "/images/press/pm2.png", "/images/press/pm3.png", "/images/press/pm4.png"],
        2024: ["/images/press/pm1.png", "/images/press/pm2.png"],
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
    <div className="flex gap-2 ml-5 mb-2">
      {years.map((y) => (
        <button
          key={y}
          onClick={() => onChange(y)}
          className={[
            "px-10 py-3 text-xs transition",
            activeYear === y
              ? "bg-[#F5F5F5]  text-[#555]  border-b-[0.7px] border-b-[#117ABA] "
              : "bg-[#F5F5F5]  text-[#555]",
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
    <div className="max-w-5xl mx-auto px-4 ">
      {items.map((item, i) => (
        <a key={i} href={item.link} target="_blank" className="group block">
          <div className={[
            "w-full flex items-center justify-between px-6 py-4",
            "bg-[#F8F8F8] group-hover:bg-[#EDEDED]",
            "border-b border-white",
          ].join(" ")}>


            <span className="text-[15px] lato-400 text-[#000000]">{item.title}</span>
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
  const coverageItems =
    mediaCoverage.data[activeCoverageTab][activeCoverageYear];
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
      <main className=" py-10 space-y-14">

        {/* -------- MEDIA RELEASES -------- */}
        <section>
          <h2 className="text-[#117ABA] text-[16px] sm:text-[28px] lato-400 mb-6 text-center">
            Media Releases
          </h2>

          <div className="mb-10 ">
            <div className="max-w-7xl flex space-x-5">

              <h3 className="text-[#117ABA] text-[14px] lato-400 mb-2">
                Press Release
              </h3>
              <YearTabs
                years={[2025, 2024]}
                activeYear={releaseYear}
                onChange={setReleaseYear}
              />
            </div>
            <PdfList items={mediaReleases.pressRelease[releaseYear]} />
          </div>

          <div className="max-w-7xl flex space-x-8">

            <h3 className="text-[#117ABA] text-[14px]  lato-400 mb-2">
              Press Notes
            </h3>
            <YearTabs
              years={[2025, 2024]}
              activeYear={notesYear}
              onChange={setNotesYear}
            />
          </div>
          <PdfList items={mediaReleases.pressNotes[notesYear]} />
        </section>

        {/* -------- MEDIA RESOURCES -------- */}
        <section className="max-w-7xl mx-auto px-4">
          <h2 className="text-[#117ABA] text-[16px] sm:text-[28px] lato-400 text-center mb-6">
            Media Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mediaResources.map((item) => (
              <div key={item.label} className="relative w-[540px] h-[359px]">
                <Image src={item.image} alt={item.label} width={100} height={100} className="w-[540px] h-[359px] object-contain" />
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
        <section className="max-w-7xl mx-auto px-4">
          <h2 className="text-[#117ABA] text-[16px] sm:text-[28px] lato-400 text-center mb-6">
            Media Coverage
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-6">
            {mediaCoverage.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCoverageTab(tab)}
                className={[
                  "px-6 py-2 text-sm  transition",
                  "px-10 py-3 text-xs transition",
                  tab === activeCoverageTab
                    ? "bg-[#F5F5F5]  text-[#555]  border-b-[0.7px] border-b-[#117ABA] "
                    : "bg-[#F5F5F5]  text-[#555]"
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


          {coverageItems.length < 5 ? (
            /* CENTERED LAYOUT */
            <div className="flex justify-center">
              <div className="grid grid-cols-2 md:grid-flow-col gap-6">
                {coverageItems.map((img) => (
                  <div
                    key={img}
                    className="bg-white border h-[180px] w-[220px] flex items-center justify-center"
                  >
                    <Image
                      src={img}
                      alt="Media Coverage"
                      width={220}
                      height={140}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* NORMAL 5-COLUMN GRID */
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {coverageItems.map((img) => (
                <div
                  key={img}
                  className="bg-white border h-[180px] w-[220px] flex items-center justify-center"
                >
                  <Image
                    src={img}
                    alt="Media Coverage"
                    width={220}
                    height={140}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          )}



          <div className="mt-6 text-left">
            <a
                
                className="inline-flex items-center gap-1 lato-700 text-[14px] text-[#117ABA] "
              >
                                <div className="underline underline-offset-2">

                View More
                
                <span aria-hidden>↗</span>
          </div>
                </a>
          </div>

        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
