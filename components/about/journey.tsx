import { motion } from "framer-motion"
import Image from "next/image"

export function Journey() {
  return (
    <section className="py-20 bg-gray-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl poppins-800 text-center mb-4 text-[#117ABA]">Our Journey</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Nearly four decades of innovation, growth, and excellence
        </p>

        <div className="space-y-8">
          <div className="flex items-center justify-center">
            <Image
              src="https://uflex.wpdevstudio.site/HTML/assets/images/Adobe-Express-Milestone-new-30-september-2025.gif"
              height={1000} width={1000} alt={""}

            />
          </div>
          <div className="relative h-[570px] w-full overflow-hidden bg-white md:h-[580px]">
      {/* Background Image - Full Bleed */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/corp.png"
          fill
          className="object-cover object-center"
          alt="Sustainability"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-white py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-5 md:px-20">
          <h2 className="text-center text-[24px]  poppins-600 text-[#117ABA] md:text-[48px] md:text-5xl">
            Corporate Presentation
          </h2>
        </div>
      </div>

      {/* Text Content */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end px-5 pb-16 text-white md:bottom-20 md:pb-20 md:pl-20"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delayChildren: 0.3, staggerChildren: 0.3 },
          },
        }}
      >
        <motion.h3
          className="text-[20px] font-medium leading-tight sm:text-[28px] md:text-[32px]"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Committed to achieving carbon neutrality by 2035
        </motion.h3>

        {/* <motion.p
          className="mt-2 max-w-2xl text-[14px] leading-relaxed opacity-90 sm:text-[16px] md:text-[18px]"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Sustainability and environmental stewardship are
          <br className="hidden sm:block" />
          at the forefront of our business practices.
        </motion.p> */}

        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="mt-6"
        >
          <button className="flex items-center gap-2 rounded-md  bg-[#CE2027] px-6 py-3 text-sm font-medium text-white transition-all ">
            Download
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M8 0L6.585 1.415L11.17 6H0V8H11.17L6.585 12.585L8 14L14 8L8 0Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </div>

   
        </div>
      </div>
    </section>
  )
}
// "use client";

// import { motion, useAnimation, useInView } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// /**
//  * AnimatedTimeline
//  * - Uses a reveal mask tied to scroll to fill the orange path
//  * - Places items from timelineData; will auto-position items if `position` is not given
//  * - You can override any item's `position: {x, y}` to pin it exactly
//  */

// type TimelineItem = {
//   date: string;
//   title: string;
//   subtitle?: string;
//   image?: string; // optional small icon shown inside the circle
//   position?: { x: number; y: number }; // optional absolute position in the SVG's 370x429 viewBox
//   isGoal?: boolean; // special styling for the final goal item
// };

// const AnimatedTimeline = () => {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const controls = useAnimation();
//   const [containerWidth, setContainerWidth] = useState(800);

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//     }
//   }, [isInView, controls]);

//   useEffect(() => {
//     const updateContainerWidth = () => {
//       if (ref.current) {
//         const element = ref.current as HTMLElement;
//         setContainerWidth(element.offsetWidth);
//       }
//     };
//     updateContainerWidth();
//     window.addEventListener("resize", updateContainerWidth);
//     return () => window.removeEventListener("resize", updateContainerWidth);
//   }, []);

//   // SVG viewBox dimensions
//   const svgWidth = 370;
//   const svgHeight = 429;
//   const centerLine = svgWidth / 2; // 185

//   // Track scroll progress for fill animation
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!ref.current) return;
//       const element = ref.current as HTMLElement;
//       const rect = element.getBoundingClientRect();
//       const windowHeight =
//         window.innerHeight || document.documentElement.clientHeight;

//       // How much of the timeline is visible in the viewport
//       const start = Math.max(0, windowHeight - rect.top);
//       const end = rect.height + windowHeight;
//       let progress = start / end;
//       progress = Math.max(0, Math.min(1, progress * 1.3)); // quicker fill
//       setScrollProgress(progress);
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ====== JSON: UFlex Journey (line-by-line from the image) ======
//   const timelineData: TimelineItem[] = [
//     { date: "1985", title: "Started the Engineering business" },
//     { date: "1986", title: "Added the Printing Cylinders business" },
//     { date: "1989", title: "IPO listed on BSE; Commenced Flexible Packaging Business" },
//     { date: "1994", title: "Noida (India)", subtitle: "Commenced the first BOPET Line and Chemicals Business" },
//     { date: "1996", title: "Noida (India)", subtitle: "Commissioned the first BOPP line" },
//     { date: "2003", title: "Noida (India)", subtitle: "Commissioned the first CPP line" },
//     { date: "2004", title: "Diversified into Holography Business" },
//     { date: "2005", title: "UAE", subtitle: "Commissioned the first overseas facility with a BOPET line" },
//     { date: "2009", title: "Mexico", subtitle: "Commissioned a BOPET line" },
//     { date: "2010", title: "Egypt", subtitle: "Commissioned a BOPP line" },
//     { date: "2011", title: "Egypt", subtitle: "Commissioned BOPET and CPP lines" },
//     { date: "2012", title: "Poland", subtitle: "Commissioned a BOPET line" },
//     { date: "2013", title: "U.S.A.", subtitle: "Commissioned a BOPET line" },
//     { date: "2017", title: "Sanand (India)", subtitle: "Commissioned the Aseptic Packaging plant" },
//     {
//       date: "2020",
//       title: "CIS · Poland",
//       subtitle:
//         "CIS: Commissioned a BOPET line · Poland: Commissioned the second BOPET line",
//     },
//     {
//       date: "2021",
//       title: "Hungary · Nigeria · Egypt",
//       subtitle:
//         "Hungary: Commissioned a BOPP line · Nigeria: Commissioned a BOPET line · Egypt: Commissioned the second BOPP line",
//     },
//     {
//       date: "2022",
//       title: "Aseptic Packaging",
//       subtitle: "Annual capacity doubled to 7 billion packs",
//     },
//     {
//       date: "2023",
//       title: "Dharwad (India) · UAE · Mexico",
//       subtitle:
//         "Dharwad: Commenced operations with a CPP and BOPET line · UAE: Commissioned a CPP line · Mexico: Commissioned a PCR packaging films line",
//     },
//     {
//       date: "2024",
//       title: "Egypt · Panipat (India) · CIS",
//       subtitle:
//         "Egypt: Commissioned PCR plant · Panipat: Commissioned rPET Chips plant (bottle & film grade) · CIS: Commissioned a CPP line",
//     },
//     {
//       date: "2025",
//       title: "Egypt · Mexico",
//       subtitle:
//         "Egypt: Commissioned a virgin PET chips facility · Mexico: Commissioned a CPP Films line",
//     },
//     {
//       date: "Goal",
//       title: "Installed capacity of 1 million MTPA",
//       subtitle: "for Packaging Films business",
//       isGoal: true,
//     },
//   ];

//   // ====== Positioning helpers ======
//   // If you don't specify item.position, we auto-place:
//   const leftX = 163.5;
//   const rightX = 194.5;
//   const yStart = 42;   // aligns with your first circle
//   const yStep = 68;    // tweak to match your SVG's vertical rhythm

//   const getAutoPos = (i: number) => ({
//     x: i % 2 === 0 ? leftX : rightX,
//     y: yStart + i * yStep,
//   });

//   // Calculate scaled position for absolute content overlay
//   const getContentPosition = (
//     item: TimelineItem,
//     containerWidth: number
//   ) => {
//     const pos = item.position ?? getAutoPos(timelineData.indexOf(item));
//     const isLeft = pos.x < centerLine;

//     const svgActualWidth = Math.min(containerWidth, 800); // cap at max width
//     const scaleX = svgActualWidth / svgWidth;

//     const scaledX = pos.x * scaleX;
//     const scaledY = pos.y * scaleX; // keep aspect ratio

//     const offsetDistance = 10;           // distance from circle edge
//     const circleRadius = 20 * scaleX;    // match your circle radius in px

//     return {
//       isLeft,
//       scaledX,
//       scaledY,
//       left: isLeft ? scaledX + circleRadius + offsetDistance : undefined,
//       right: !isLeft
//         ? svgActualWidth - (scaledX - circleRadius - offsetDistance)
//         : undefined,
//       top: scaledY - 20,
//     };
//   };

//   const isMobile = containerWidth < 600;

//   return (
//     <div>
//       <p className="text-grad font-EB-extrabold mt-[8px] text-center lg:text-[70px]">
//         Our Journey
//       </p>

//       <div
//         ref={ref}
//         className="relative mx-auto mt-[30px] w-full max-w-5xl py-16 lg:mt-[122px]"
//       >
//         <svg
//           viewBox="0 0 370 429"
//           className="mx-auto block h-auto w-full"
//           style={{ maxWidth: isMobile ? "450px" : "800px" }}
//         >
//           <defs>
//             <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#fb923c" />
//               <stop offset="100%" stopColor="#f97316" />
//             </linearGradient>

//             <mask id="revealMask">
//               <motion.rect
//                 x="0"
//                 y="0"
//                 width="370"
//                 height={svgHeight * scrollProgress}
//                 fill="white"
//               />
//             </mask>
//           </defs>

//           {/* Background gray path */}
//           <path
//             fill="#e5e7eb"
//             d="M181.39 144.19a8.36 8.36 0 0 1 8.53-4.1 30.48 30.48 0 0 0 35.12-28v-.03h38.93v-2.58h-31.04a9.1 9.1 0 0 1-8.78-6.9 30.38 30.38 0 0 0-37.66-21.73c-2.95.83-5.38-1.1-5.38-4.16 0-3.94 2.2-9.52 4.95-12.34a30.3 30.3 0 0 0 8.54-24.01 30.38 30.38 0 0 0-59.46-5.58 7.61 7.61 0 0 1-7.3 5.57H95.66v2.58h36.51c.97 0 1.76.75 1.8 1.72a30.5 30.5 0 0 0 33.62 28.7 7.49 7.49 0 0 1 7.34 3.63l.82 1.41a7.44 7.44 0 0 1-1.48 9.24 30.28 30.28 0 0 0-9.95 22.48c0 8.9 3.84 16.92 9.95 22.47a8.37 8.37 0 0 1 1.51 10.36l-1 1.74a8.35 8.35 0 0 1-7.91 4.17 30.53 30.53 0 0 0-32.05 22.98 5.23 5.23 0 0 1-5.08 3.95H95.66v2.58h36.55c.95 0 1.72.75 1.75 1.7a30.38 30.38 0 0 0 33.52 29.26c2.9-.3 5.72 1.1 7.18 3.63l.93 1.62a7.37 7.37 0 0 1-1.42 9.13 30.28 30.28 0 0 0-9.84 22.37c0 8.85 4 17.24 10.32 22.8a7.7 7.7 0 0 1 1.65 9.64l-.33.56a7.69 7.69 0 0 1-7.62 3.85 30.76 30.76 0 0 0-7.64-.06 30.48 30.48 0 0 0-26.55 26.54c-.1.88-.85 1.54-1.74 1.54H95.67v2.58h33.63a5.1 5.1 0 0 1 5.03 4.3 30.3 30.3 0 0 0 8.52 16.68h-.47a30.34 30.34 0 0 0 15.5 8.2 30.51 30.51 0 0 0 12.53.07 7.3 7.3 0 0 1 5.96 3.6l.16.28a7.73 7.73 0 0 1-1.87 9.83 30.3 30.3 0 0 0-10.96 24.67 30.52 30.52 0 0 0 29.3 29.06 30.38 30.38 0 0 0 31.06-25.57 5.1 5.1 0 0 1 5.03-4.3h33.64v-2.57h-36.76c-.88 0-1.64-.66-1.75-1.54a30.47 30.47 0 0 0-34.19-26.48 7.7 7.7 0 0 1-7.62-3.85l-.32-.56a7.65 7.65 0 0 1 .11-7.8 30.29 30.29 0 0 0 1.53-47.88 7.74 7.74 0 0 1-1.87-9.82l.17-.28a7.4 7.4 0 0 1 7.68-3.53c2.56.43 5.22.54 7.95.28a30.49 30.49 0 0 0 27.38-28.34l.03-.73h38.9v-2.58h-31.23a8.94 8.94 0 0 1-8.68-6.5 30.4 30.4 0 0 0-35.23-21.88 7.52 7.52 0 0 1-7.9-3.44 7.32 7.32 0 0 1 1.81-9.56 30.31 30.31 0 0 0 11.99-24.16c0-9.86-4.44-18.13-11.39-23.7a8.48 8.48 0 0 1-2.15-10.85l.21-.37h-.01Z"
//           />

//           {/* Background gray arrows */}
//           <path
//             fill="#9ca3af"
//             d="m92.75 46.5 4.65-4.65-4.65-4.65-4.66 4.65 4.66 4.66ZM92.75 181.81l4.65-4.65-4.65-4.65-4.66 4.65 4.66 4.65ZM92.75 316.78l4.65-4.66-4.65-4.65-4.66 4.65 4.66 4.66ZM265.61 115.2l4.66-4.64-4.66-4.66-4.65 4.66 4.65 4.65ZM265.62 250.51l4.65-4.65-4.65-4.65-4.66 4.65 4.66 4.65ZM265.61 383.47l4.65-4.65-4.65-4.65-4.65 4.65 4.65 4.65Z"
//           />

//           {/* Animated colored path */}
//           <path
//             fill="url(#timelineGradient)"
//             mask="url(#revealMask)"
//             d="M181.39 144.19a8.36 8.36 0 0 1 8.53-4.1 30.48 30.48 0 0 0 35.12-28v-.03h38.93v-2.58h-31.04a9.1 9.1 0 0 1-8.78-6.9 30.38 30.38 0 0 0-37.66-21.73c-2.95.83-5.38-1.1-5.38-4.16 0-3.94 2.2-9.52 4.95-12.34a30.3 30.3 0 0 0 8.54-24.01 30.38 30.38 0 0 0-59.46-5.58 7.61 7.61 0 0 1-7.3 5.57H95.66v2.58h36.51c.97 0 1.76.75 1.8 1.72a30.5 30.5 0 0 0 33.62 28.7 7.49 7.49 0 0 1 7.34 3.63l.82 1.41a7.44 7.44 0 0 1-1.48 9.24 30.28 30.28 0 0 0-9.95 22.48c0 8.9 3.84 16.92 9.95 22.47a8.37 8.37 0 0 1 1.51 10.36l-1 1.74a8.35 8.35 0 0 1-7.91 4.17 30.53 30.53 0 0 0-32.05 22.98 5.23 5.23 0 0 1-5.08 3.95H95.66v2.58h36.55c.95 0 1.72.75 1.75 1.7a30.38 30.38 0 0 0 33.52 29.26c2.9-.3 5.72 1.1 7.18 3.63l.93 1.62a7.37 7.37 0 0 1-1.42 9.13 30.28 30.28 0 0 0-9.84 22.37c0 8.85 4 17.24 10.32 22.8a7.7 7.7 0 0 1 1.65 9.64l-.33.56a7.69 7.69 0 0 1-7.62 3.85 30.76 30.76 0 0 0-7.64-.06 30.48 30.48 0 0 0-26.55 26.54c-.1.88-.85 1.54-1.74 1.54H95.67v2.58h33.63a5.1 5.1 0 0 1 5.03 4.3 30.3 30.3 0 0 0 8.52 16.68h-.47a30.34 30.34 0 0 0 15.5 8.2 30.51 30.51 0 0 0 12.53.07 7.3 7.3 0 0 1 5.96 3.6l.16.28a7.73 7.73 0 0 1-1.87 9.83 30.3 30.3 0 0 0-10.96 24.67 30.52 30.52 0 0 0 29.3 29.06 30.38 30.38 0 0 0 31.06-25.57 5.1 5.1 0 0 1 5.03-4.3h33.64v-2.57h-36.76c-.88 0-1.64-.66-1.75-1.54a30.47 30.47 0 0 0-34.19-26.48 7.7 7.7 0 0 1-7.62-3.85l-.32-.56a7.65 7.65 0 0 1 .11-7.8 30.29 30.29 0 0 0 1.53-47.88 7.74 7.74 0 0 1-1.87-9.82l.17-.28a7.4 7.4 0 0 1 7.68-3.53c2.56.43 5.22.54 7.95.28a30.49 30.49 0 0 0 27.38-28.34l.03-.73h38.9v-2.58h-31.23a8.94 8.94 0 0 1-8.68-6.5 30.4 30.4 0 0 0-35.23-21.88 7.52 7.52 0 0 1-7.9-3.44 7.32 7.32 0 0 1 1.81-9.56 30.31 30.31 0 0 0 11.99-24.16c0-9.86-4.44-18.13-11.39-23.7a8.48 8.48 0 0 1-2.15-10.85l.21-.37h-.01Z"
//           />

//           {/* Animated colored arrows */}
//           <path
//             fill="url(#timelineGradient)"
//             mask="url(#revealMask)"
//             d="m92.75 46.5 4.65-4.65-4.65-4.65-4.66 4.65 4.66 4.66ZM92.75 181.81l4.65-4.65-4.65-4.65-4.66 4.65 4.66 4.65ZM92.75 316.78l4.65-4.66-4.65-4.65-4.66 4.65 4.66 4.66ZM265.61 115.2l4.66-4.64-4.66-4.66-4.65 4.66 4.65 4.65ZM265.62 250.51l4.65-4.65-4.65-4.65-4.66 4.65 4.66 4.65ZM265.61 383.47l4.65-4.65-4.65-4.65-4.65 4.65 4.65 4.65Z"
//           />

//           {/* Timeline items */}
//           {timelineData.map((item, index) => {
//             const pos = item.position ?? getAutoPos(index);
//             return (
//               <motion.g
//                 key={index}
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{
//                   delay: index * 0.35,
//                   duration: 0.45,
//                   type: "spring",
//                   stiffness: 200,
//                 }}
//               >
//                 {/* Circle background */}
//                 <circle
//                   cx={pos.x}
//                   cy={pos.y}
//                   r="22"
//                   fill="#fff"
//                   stroke="#e5e7eb"
//                   strokeWidth="1"
//                   filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
//                 />

//                 {/* Icon */}
//                 <g transform={`translate(${pos.x - 16}, ${pos.y - 18})`}>
//                   <motion.g
//                     initial={{ rotate: -180, scale: 0 }}
//                     animate={{ rotate: 0, scale: 1 }}
//                     transition={{
//                       delay: index * 0.35 + 0.25,
//                       duration: 0.45,
//                       type: "spring",
//                     }}
//                     className="text-orange-500"
//                   >
//                     <image
//                       href={item.image || "/icon-milestone.svg"}
//                       width="32"
//                       height="32"
//                       style={{ pointerEvents: "none" }}
//                     />
//                   </motion.g>
//                 </g>
//               </motion.g>
//             );
//           })}
//         </svg>

//         {/* Timeline content */}
//         <div className="pointer-events-none absolute inset-0">
//           {timelineData.map((item, index) => {
//             const pos = item.position ?? getAutoPos(index);
//             const contentPos = (() => {
//               const isLeft = pos.x < centerLine;
//               const svgActualWidth = Math.min(containerWidth, 800);
//               const scaleX = svgActualWidth / svgWidth;
//               const scaledX = pos.x * scaleX;
//               const scaledY = pos.y * scaleX;
//               const offsetDistance = 40;
//               const circleRadius = 20 * scaleX;
//               return {
//                 isLeft,
//                 left: isLeft ? scaledX + circleRadius + offsetDistance : undefined,
//                 right: !isLeft
//                   ? svgActualWidth - (scaledX - circleRadius - offsetDistance)
//                   : undefined,
//                 top: scaledY - 20,
//               };
//             })();

//             return (
//               <motion.div
//                 key={index}
//                 className="pointer-events-auto absolute"
//                 style={{
//                   top: `${contentPos.top}px`,
//                   left: contentPos.left
//                     ? `${contentPos.left - (isMobile ? 240 : 380)}px`
//                     : undefined,
//                   right: contentPos.right
//                     ? `${contentPos.right - (isMobile ? 240 : 380)}px`
//                     : undefined,
//                   width: `${Math.min(280, containerWidth * 0.35)}px`,
//                   maxWidth: "calc(45% - 20px)",
//                 }}
//                 initial={{ opacity: 0, x: contentPos.isLeft ? -30 : 30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.35 + 0.4, duration: 0.45 }}
//               >
//                 <div
//                   className={`${contentPos.isLeft ? "pr-4 text-left" : "pl-4 text-right"}`}
//                 >
//                   <h3
//                     className={`font-EB-extrabold mb-1 ${
//                       item.isGoal ? "text-blue-700" : "text-orange-500"
//                     } text-[18px] md:text-2xl lg:leading-[48px]`}
//                   >
//                     {item.date}
//                   </h3>
//                   <p className="text-[10px] text-gray-800 lg:text-[24px] lg:leading-[28.8px]">
//                     {item.title}
//                   </p>
//                   {item.subtitle && (
//                     <p className="text-[10px] text-gray-800 lg:text-[24px] lg:leading-[28.8px]">
//                       {item.subtitle}
//                     </p>
//                   )}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedTimeline;
