

// "use client";
// import { Pagination, Autoplay, Navigation } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Image from "next/image";
// interface Director {
//   name: string
//   position: string
//   bio: string
//   img: string
// }
// const BoardOfDirectors = () => {
// const directors: Director[] = [
//   {
//     name: "Mr. Ashok Chaturvedi",
//     position: "Chairman and Managing Director",
//     bio:
//       "Mr. Ashok Chaturvedi is a first-generation entrepreneur and the founder of the UFlex Group. His dynamic leadership, long-term vision, and value-driven business strategy have established UFlex Limited as the largest flexible packaging and solutions company in India and a recognized global player in polymer sciences. He is considered the 'Father of the flexible packaging industry in India'",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Ashok-Chaturvedi-(BOD)42.jpg",
//   },
//   {
//     name: "Mr. Jeevaraj Gopal Pillai",
//     position: "Whole Time Director",
//     bio:
//       "Mr. Jeevaraj Pillai brings over 35 years of experience in packaging and packaging technology, with expertise in printing cylinders, packaging films, and advanced flexible packaging material conversion. As Director-Sustainability, he leads the development and implementation of the company's ESG strategy, along with the development of sustainable products and solutions. He has been serving on the board of UFlex Limited as a whole-time director since November 14, 2023. His extensive background in the industry is complemented by his qualifications in mechanical engineering and an MBA.",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Jeevaraj-Gopal-Pillai-(BOD)05.jpg",
//   },
//   {
//     name: "Mr. Paresh Nath Sharma",
//     position: "Independent Director",
//     bio:
//       "Mr. Paresh Nath Sharma has been serving on the board of UFlex Limited as an independent director since February 11, 2022. A science graduate and a fellow member of the Institute of Chartered Accountants of India (ICAI), he has over four and a half decades of experience in finance, audit, export, personnel, and administration. Throughout his career, he has worked with various organizations, including Sir Ganga Ram Hospital, MMTC Limited, the Airport Authority of India, National Small Industries Corporation Limited, and Punjab State Civil Supplies Corporation Limited, among others.",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Paresh-Nath-Sharma47.jpg",
//   },
//   {
//     name: "Mr. Sujit Kumar Varma",
//     position: "Independent Director",
//     img:
//       "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Sujit-Kumar-Varma06.jpg",
//     bio: "Mr. Varma has been a board member of UFlex Limited since February 14, 2023, serving as an independent director. He brings over three decades of experience in retail credit, trade finance, international banking, risk management, and compliance. Mr. Varma has also been associated with the State Bank of India (SBI), where he held several key positions, including Chief Executive Officer in New York, General Manager– mid-corporate regional office in Mumbai, and Chief General Manager– international banking. He retired from SBI as Deputy Managing Director of the Corporate Accounts Group in January 2021.",
//   },
//   {
//     name: "Mr. Ghyanendra Nath Bajpai",
//     position: "Independent Director",
//     bio:
//       "Mr. Bajpai has been serving as an independent director on the board of UFlex Limited since April 17, 2023. A prominent figure in India's business community, he has previously held distinguished roles, including Chairman of the Securities and Exchange Board of India (SEBI) and Chairman of the Life Insurance Corporation of India (LIC). Additionally, he was the Chairman of the Corporate Task Force for the International Organization of Securities Commissions and the Chairperson of the Insurance Institute of India. Currently, he serves as Non-Executive Chairman and Non-Executive Director for several corporations across India.",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Ghyanendra-Nath-Bajpai25.jpg",
//   },
//   {
//     name: "Mrs. Rashmi Verma",
//     position: "Independent Woman Director",
//     bio:
//       "Mrs. Rashmi Verma, IAS (retired), brings over 36 years of extensive experience across various sectors. She has been a member of the board of UFlex Limited since May 26, 2023. She is a former secretary for tourism and textiles at the Government of India and has also served as Secretary of the Ministry of Textiles and Additional Secretary of the Department of Revenue, Ministry of Finance. Currently, she serves as an independent director on several boards, including HT Media Limited and PTC India Limited.",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mrs.-Rashmi-Verma19.jpg",
//   },
// ]

//   return (
//     <motion.section
//       className="relative grid grid-cols-3 bg-white px-4 py-36 md:px-12"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Title Section with Animation */}
//       <motion.div
//         className="col-span-3 place-content-center lg:col-span-1"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-[24px]  manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl">
//           Board Of Directors
//         </h2>
//       </motion.div>

//       {/* Swiper Section with Animation */}
//       <motion.div
//         className="relative col-span-3 lg:col-span-2"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//       >
//         <div
//           className="absolute right-0 top-52 h-[70vh] w-2/3 md:h-[70vh] lg:top-[-20px] lg:h-[580px]"
//           style={{
//             background:
//               "linear-gradient(to right, #C9E3F3FF  0%, #8CC5E8FF 29%, #117ABA 100%)",
//           }}
//         ></div>

//         {/* Swiper Slider with Navigation */}
//         <div className="relative flex items-center justify-center">
//           <Swiper
//             modules={[Pagination, Autoplay, Navigation]}
//             spaceBetween={30}
//             slidesPerView={1}
//             centeredSlides={true}
//             loop={true}
//             speed={1000}
//             pagination={{ clickable: true }}
//             navigation={{
//               nextEl: ".swiper-button-next",
//               prevEl: ".swiper-button-prev",
//             }}
//             autoplay={{
//               delay: 4000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true,
//             }}
//             breakpoints={{
//               768: { slidesPerView: 1 },
//               1024: { slidesPerView: 1 },
//             }}
//             className="w-full max-w-4xl"
//           >
//             {directors.map((testimonial, index) => (
//               <SwiperSlide key={index}>
//                 <motion.div
//                   className="relative m-3 mb-8 bg-white p-6 shadow-lg"
//                   style={{
//                     boxShadow: "0px 4px 13.9px 0px rgba(59, 59, 59, 0.25)",
//                   }}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -50 }}
//                   transition={{
//                     duration: 0.8,
//                     ease: "easeInOut",
//                     delay: index * 0.2,
//                   }}
//                 >
//                   {/* Image & Testimonial Content */}
//                   <div className="grid min-h-[400px] grid-cols-3 place-content-center items-center justify-center gap-6">
//                     <div className="col-span-3 flex place-content-center items-center justify-center lg:col-span-1">
//                       <Image
//                         src={testimonial.img}
//                         alt={testimonial.name}
//                         width={240}
//                         height={288}
//                         className="h-72 w-60 rounded-md object-cover"
//                       />
//                     </div>
//                     {/* Testimonial Text */}
//                     <div className="col-span-3 mt-8 flex h-full flex-col place-content-center justify-between lg:col-span-2 lg:mt-0">
//                       <div className="manrope-400 text-center  text-gray-600">

//                         {testimonial.bio}

//                       </div>
//                       <div>
//                         <h4 className="manrope-600 mt-4 text-right text-gray-800">
//                           {testimonial.name}
//                         </h4>
//                         <p className="manrope-400 text-right text-sm text-gray-500">
//                           {testimonial.position}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Navigation Arrows Positioned Outside */}
//           <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform">
//             <div className="swiper-button-prev"></div>
//           </div>
//           <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform">
//             <div className="swiper-button-next"></div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.section>
//   );
// }
// export default BoardOfDirectors;
// "use client";

// import { useRef, useState, useEffect } from "react";
// import { Pagination, Autoplay, Navigation } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Image from "next/image";

// interface Director {
//   name: string;
//   position: string;
//   bio: string;
//   img: string;
// }

// const directors: Director[] = [
//   {
//     name: "Mr. Ashok Chaturvedi",
//     position: "Chairman and Managing Director",
//     bio:
//       "Mr. Ashok Chaturvedi is a first-generation entrepreneur and the founder of the UFlex Group. His dynamic leadership, long-term vision, and value-driven business strategy have established UFlex Limited as the largest flexible packaging and solutions company in India and a recognized global player in polymer sciences. He is considered the 'Father of the flexible packaging industry in India'",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Ashok-Chaturvedi-(BOD)42.jpg",
//   },
//   {
//     name: "Mr. Jeevaraj Gopal Pillai",
//     position: "Whole Time Director",
//     bio:
//       "Mr. Jeevaraj Pillai brings over 35 years of experience in packaging and packaging technology, with expertise in printing cylinders, packaging films, and advanced flexible packaging material conversion. As Director-Sustainability, he leads the development and implementation of the company's ESG strategy, along with the development of sustainable products and solutions. He has been serving on the board of UFlex Limited as a whole-time director since November 14, 2023. His extensive background in the industry is complemented by his qualifications in mechanical engineering and an MBA.",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Jeevaraj-Gopal-Pillai-(BOD)05.jpg",
//   },
//   {
//     name: "Mr. Paresh Nath Sharma",
//     position: "Independent Director",
//     bio:
//       "Mr. Paresh Nath Sharma has been serving on the board of UFlex Limited as an independent director since February 11, 2022. A science graduate and a fellow member of the Institute of Chartered Accountants of India (ICAI), he has over four and a half decades of experience in finance, audit, export, personnel, and administration. Throughout his career, he has worked with various organizations, including Sir Ganga Ram Hospital, MMTC Limited, the Airport Authority of India, National Small Industries Corporation Limited, and Punjab State Civil Supplies Corporation Limited, among others.",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Paresh-Nath-Sharma47.jpg",
//   },
//   {
//     name: "Mr. Sujit Kumar Varma",
//     position: "Independent Director",
//     img:
//       "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Sujit-Kumar-Varma06.jpg",
//     bio:
//       "Mr. Varma has been a board member of UFlex Limited since February 14, 2023, serving as an independent director. He brings over three decades of experience in retail credit, trade finance, international banking, risk management, and compliance. Mr. Varma has also been associated with the State Bank of India (SBI), where he held several key positions, including Chief Executive Officer in New York, General Manager– mid-corporate regional office in Mumbai, and Chief General Manager– international banking. He retired from SBI as Deputy Managing Director of the Corporate Accounts Group in January 2021.",
//   },
//   {
//     name: "Mr. Ghyanendra Nath Bajpai",
//     position: "Independent Director",
//     bio:
//       "Mr. Bajpai has been serving as an independent director on the board of UFlex Limited since April 17, 2023. A prominent figure in India's business community, he has previously held distinguished roles, including Chairman of the Securities and Exchange Board of India (SEBI) and Chairman of the Life Insurance Corporation of India (LIC). Additionally, he was the Chairman of the Corporate Task Force for the International Organization of Securities Commissions and the Chairperson of the Insurance Institute of India. Currently, he serves as Non-Executive Chairman and Non-Executive Director for several corporations across India.",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Ghyanendra-Nath-Bajpai25.jpg",
//   },
//   {
//     name: "Mrs. Rashmi Verma",
//     position: "Independent Woman Director",
//     bio:
//       "Mrs. Rashmi Verma, IAS (retired), brings over 36 years of extensive experience across various sectors. She has been a member of the board of UFlex Limited since May 26, 2023. She is a former secretary for tourism and textiles at the Government of India and has also served as Secretary of the Ministry of Textiles and Additional Secretary of the Department of Revenue, Ministry of Finance. Currently, she serves as an independent director on several boards, including HT Media Limited and PTC India Limited.",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mrs.-Rashmi-Verma19.jpg",
//   },
// ];

// export default function BoardOfDirectors() {
//   // Refs for external navigation buttons
//   const prevRef = useRef<HTMLDivElement | null>(null);
//   const nextRef = useRef<HTMLDivElement | null>(null);
//   const [navReady, setNavReady] = useState(false);

//   // Ensure refs exist before Swiper initializes
//   useEffect(() => {
//     // Next tick to ensure buttons are in the DOM
//     const t = setTimeout(() => setNavReady(true), 0);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <motion.section
//       className="relative grid grid-cols-3 bg-white px-4 py-36 md:px-12"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <motion.div
//         className="col-span-3 place-content-center lg:col-span-1"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl">
//           Board Of Directors
//         </h2>
//       </motion.div>

//       <motion.div
//         className="relative col-span-3 lg:col-span-2"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//       >
//         <div
//           className="absolute right-0 top-52 h-[70vh] w-2/3 md:h-[70vh] lg:top-[-20px] lg:h-[580px]"
//           style={{
//             background:
//               "linear-gradient(to right, #C9E3F3FF 0%, #8CC5E8FF 29%, #117ABA 100%)",
//           }}
//         />

//         <div className="relative flex items-center justify-center">
//           {navReady ? (
//             <Swiper
//               modules={[Pagination, Autoplay, Navigation]}
//               spaceBetween={30}
//               slidesPerView={1}
//               centeredSlides
//               loop
//               speed={1000}
//               pagination={{ clickable: true }}
//               // Bind external buttons safely
//               onBeforeInit={(swiper) => {
//                 // @ts-ignore – Swiper types don’t include these mutable fields
//                 swiper.params.navigation.prevEl = prevRef.current;
//                 // @ts-ignore
//                 swiper.params.navigation.nextEl = nextRef.current;
//               }}
//               navigation={{
//                 prevEl: prevRef.current,
//                 nextEl: nextRef.current,
//               }}
//               autoplay={{
//                 delay: 4000,
//                 disableOnInteraction: false,
//                 pauseOnMouseEnter: true,
//               }}
//               breakpoints={{
//                 768: { slidesPerView: 1 },
//                 1024: { slidesPerView: 1 },
//               }}
//               className="w-full max-w-4xl"
//             >
//               {directors.map((d, index) => (
//                 <SwiperSlide key={d.name}>
//                   <motion.div
//                     className="relative m-3 mb-8 bg-white p-6 shadow-lg"
//                     style={{ boxShadow: "0px 4px 13.9px 0px rgba(59,59,59,0.25)" }}
//                     initial={{ opacity: 0, x: 50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8, ease: "easeInOut", delay: index * 0.1 }}
//                   >
//                     <div className="grid min-h-[400px] grid-cols-3 place-content-center items-center justify-center gap-6">
//                       <div className="col-span-3 flex place-content-center items-center justify-center lg:col-span-1">
//                         <Image
//                           src={d.img}
//                           alt={d.name}
//                           width={240}
//                           height={288}
//                           className="h-72 w-60 rounded-md object-cover"
//                         />
//                       </div>
//                       <div className="col-span-3 mt-8 flex h-full flex-col place-content-center justify-between lg:col-span-2 lg:mt-0">
//                         <div className="manrope-400 text-center text-gray-600">{d.bio}</div>
//                         <div>
//                           <h4 className="manrope-600 mt-4 text-right text-gray-800">{d.name}</h4>
//                           <p className="manrope-400 text-right text-sm text-gray-500">
//                             {d.position}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           ) : (
//             // Minimal skeleton while dynamic chunk + refs are ready
//             <div className="w-full max-w-4xl animate-pulse rounded-xl bg-gray-100 p-8">
//               <div className="h-64 w-full rounded-lg bg-gray-200" />
//             </div>
//           )}

//           {/* External nav buttons wired via refs */}
//           <div
//             ref={prevRef}
//             className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform swiper-button-prev"
//           />
//           <div
//             ref={nextRef}
//             className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform swiper-button-next"
//           />
//         </div>
//       </motion.div>
//     </motion.section>
//   );
// }

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
    bio:
      "Mr. Ashok Chaturvedi is a first-generation entrepreneur and the founder of the UFlex Group. His dynamic leadership, long-term vision, and value-driven business strategy have established UFlex Limited as the largest flexible packaging and solutions company in India and a recognized global player in polymer sciences. He is considered the 'Father of the flexible packaging industry in India'",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Ashok-Chaturvedi-(BOD)42.jpg",
  },
  {
    name: "Mr. Jeevaraj Gopal Pillai",
    position: "Whole Time Director",
    bio:
      "Mr. Jeevaraj Pillai brings over 35 years of experience in packaging and packaging technology, with expertise in printing cylinders, packaging films, and advanced flexible packaging material conversion. As Director-Sustainability, he leads the development and implementation of the company's ESG strategy, along with the development of sustainable products and solutions. He has been serving on the board of UFlex Limited as a whole-time director since November 14, 2023. His extensive background in the industry is complemented by his qualifications in mechanical engineering and an MBA.",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Jeevaraj-Gopal-Pillai-(BOD)05.jpg",
  },
  {
    name: "Mr. Paresh Nath Sharma",
    position: "Independent Director",
    bio:
      "Mr. Paresh Nath Sharma has been serving on the board of UFlex Limited as an independent director since February 11, 2022. A science graduate and a fellow member of the Institute of Chartered Accountants of India (ICAI), he has over four and a half decades of experience in finance, audit, export, personnel, and administration. Throughout his career, he has worked with various organizations, including Sir Ganga Ram Hospital, MMTC Limited, the Airport Authority of India, National Small Industries Corporation Limited, and Punjab State Civil Supplies Corporation Limited, among others.",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Paresh-Nath-Sharma47.jpg",
  },
  {
    name: "Mr. Sujit Kumar Varma",
    position: "Independent Director",
    img:
      "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Sujit-Kumar-Varma06.jpg",
    bio:
      "Mr. Varma has been a board member of UFlex Limited since February 14, 2023, serving as an independent director. He brings over three decades of experience in retail credit, trade finance, international banking, risk management, and compliance. Mr. Varma has also been associated with the State Bank of India (SBI), where he held several key positions, including Chief Executive Officer in New York, General Manager– mid-corporate regional office in Mumbai, and Chief General Manager– international banking. He retired from SBI as Deputy Managing Director of the Corporate Accounts Group in January 2021.",
  },
  {
    name: "Mr. Ghyanendra Nath Bajpai",
    position: "Independent Director",
    bio:
      "Mr. Bajpai has been serving as an independent director on the board of UFlex Limited since April 17, 2023. A prominent figure in India's business community, he has previously held distinguished roles, including Chairman of the Securities and Exchange Board of India (SEBI) and Chairman of the Life Insurance Corporation of India (LIC). Additionally, he was the Chairman of the Corporate Task Force for the International Organization of Securities Commissions and the Chairperson of the Insurance Institute of India. Currently, he serves as Non-Executive Chairman and Non-Executive Director for several corporations across India.",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Ghyanendra-Nath-Bajpai25.jpg",
  },
  {
    name: "Mrs. Rashmi Verma",
    position: "Independent Woman Director",
    bio:
      "Mrs. Rashmi Verma, IAS (retired), brings over 36 years of extensive experience across various sectors. She has been a member of the board of UFlex Limited since May 26, 2023. She is a former secretary for tourism and textiles at the Government of India and has also served as Secretary of the Ministry of Textiles and Additional Secretary of the Department of Revenue, Ministry of Finance. Currently, she serves as an independent director on several boards, including HT Media Limited and PTC India Limited.",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mrs.-Rashmi-Verma19.jpg",
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
      <section className="mt-[30px] px-4 py-0 text-center sm:mt-8 sm:bg-gray-100 sm:py-10 md:px-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl text-center mb-12">
            Board Of Directors
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
                      flex-[0_0_85%] sm:flex-[0_0_46%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]
                      border border-gray-200 bg-white overflow-hidden
                      aspect-square
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
                          <div className="rounded-none bg-black/55 px-2 py-1 w-max">
                            <p className="text-xs manrope-700 leading-tight text-white">{d.name}</p>
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
                        <p className="text-sm md:text-base manrope-700 leading-tight text-white">
                          {d.name}
                        </p>
                        <p className="text-white/90 text-xs md:text-sm">{d.position}</p>
                      </div>
                    </div>

                    {/* Tiny Read More (stays subtle; disappears on hover since image covers) */}
                    <div className="absolute left-3 top-3">
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
                    </div>

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
                className="absolute right-3 top-3 border bg-white p-2"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Smaller, square image */}
              <div className="p-4">
                <div className="relative aspect-square w-full border border-gray-100">
                  <Image src={selected.img} alt={selected.name} fill className="object-cover" />
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{selected.name}</h3>
                <p className="mt-1 manrope-700 text-[#117ABA]">{selected.position}</p>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-700">
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
