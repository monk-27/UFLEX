
// "use client"

// import { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import { ChevronRight, X } from "lucide-react"

// interface Director {
//   name: string
//   position: string
//   bio: string
//   img: string
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

// const cardColors = [
//   { border: "border-gray-200", bg: "bg-gray-100", titleColor: "text-[#117ABA] ", ring: "ring-[#117ABA]", tint: "bg-green-100", textOnTint: "text-green-900" },
//   { border: "border-gray-200", bg: "bg-gray-100", titleColor: "text-[#117ABA] ", ring: "ring-[#117ABA]", tint: "bg-blue-100", textOnTint: "text-blue-900" },
//   { border: "border-gray-200", bg: "bg-gray-100", titleColor: "text-[#117ABA] ", ring: "ring-[#117ABA]", tint: "bg-pink-100", textOnTint: "text-pink-900" },
//   { border: "border-gray-200", bg: "bg-gray-100", titleColor: "text-[#117ABA] ", ring: "ring-[#117ABA]", tint: "bg-purple-100", textOnTint: "text-purple-900" },
//   { border: "border-gray-200", bg: "bg-gray-100", titleColor: "text-[#117ABA] ", ring: "ring-[#117ABA]", tint: "bg-yellow-100", textOnTint: "text-yellow-900" },
//   { border: "border-gray-200", bg: "bg-gray-100", titleColor: "text-[#117ABA] ", ring: "ring-[#117ABA]", tint: "bg-cyan-100", textOnTint: "text-cyan-900" },
// ]

// export function BoardOfDirectors() {
//   const [openIdx, setOpenIdx] = useState<number | null>(null)

//   // Lock body scroll when modal is open (prevents layout jump/flicker)
//   useEffect(() => {
//     const original = document.body.style.overflow
//     if (openIdx !== null) document.body.style.overflow = "hidden"
//     else document.body.style.overflow = original
//     return () => {
//       document.body.style.overflow = original
//     }
//   }, [openIdx])

//   // Close on Esc
//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === "Escape") setOpenIdx(null)
//     }
//     window.addEventListener("keydown", onKey)
//     return () => window.removeEventListener("keydown", onKey)
//   }, [])

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-center text-[24px]  poppins-600 text-[#117ABA] md:text-[48px] md:text-5xl">Board of Directors</h2>
//         <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto poppins-600">Experienced leaders guiding UFlex's vision and strategy</p>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {directors.map((director, idx) => {
//             const colors = cardColors[idx % cardColors.length]
//             return (
//               <div key={idx} className="relative">
//                 {/* Floating portrait */}
//                 <div className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2">
//                   <div className={`relative h-24 w-24 overflow-hidden rounded-2xl border-2 ${colors.border} shadow-md ring-4 ${colors.ring}`}>
//                     <Image src={director.img} alt={director.name} fill className="object-cover" />
//                   </div>
//                 </div>

//                 <div className={`border-2 ${colors.border} ${colors.bg} p-6 pt-16 rounded-lg hover:shadow-lg transition h-full flex flex-col`}>
//                   <h3 className="text-lg poppins-800 text-gray-600 mb-2 text-center sm:text-left">{director.name}</h3>
//                   <p className={`poppins-700 mb-3 ${colors.titleColor} text-center sm:text-left`}>{director.position}</p>

//                   {/* Clamp long bios so all cards equalize */}
//                   <p className="text-gray-700 text-sm leading-relaxed mb-4 text-center sm:text-left clamp-4">{director.bio}</p>

//                   <div className="mt-auto">
//                     <button
//                       onClick={() => setOpenIdx(idx)}
//                       className={`${colors.titleColor} poppins-700 flex items-center gap-1 hover:gap-2 transition mx-auto sm:mx-0`}
//                       aria-haspopup="dialog"
//                       aria-controls={`director-modal-${idx}`}
//                       aria-expanded={openIdx === idx}
//                     >
//                       Read More <ChevronRight size={16} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       {/* Modal */}
//       <AnimatePresence initial={false} mode="wait">
//         {openIdx !== null && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               key="backdrop"
//               className="fixed inset-0 z-50 bg-black/50"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setOpenIdx(null)}
//             />

//             {/* Panel */}
//             <motion.div
//               key="panel"
//               className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               {(() => {
//                 const d = directors[openIdx]
//                 const c = cardColors[openIdx % cardColors.length]
//                 return (
//                   <motion.div
//                     role="dialog"
//                     id={`director-modal-${openIdx}`}
//                     aria-labelledby={`director-title-${openIdx}`}
//                     aria-modal="true"
//                     initial={{ y: 36, scale: 0.98, opacity: 0 }}
//                     animate={{ y: 0, scale: 1, opacity: 1 }}
//                     exit={{ y: 20, scale: 0.98, opacity: 0 }}
//                     transition={{ type: "spring", stiffness: 260, damping: 26 }}
//                     className={`relative mx-4 sm:mx-6 lg:mx-0 w-full sm:max-w-lg rounded-2xl border-2 ${c.border} ${c.bg} shadow-2xl overflow-hidden`}
//                   >
//                     {/* Themed header strip */}
//                     <div className={`h-2 ${c.tint}`} />

//                     <button
//                       onClick={() => setOpenIdx(null)}
//                       className={`absolute right-3 top-3 rounded-full p-2 bg-white/80 hover:bg-white text-gray-700 shadow`}
//                       aria-label="Close"
//                     >
//                       <X size={18} />
//                     </button>

//                     <div className="p-5">
//                       <div className="flex items-start gap-4">
//                         <div className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 ${c.border} ring-4 ${c.ring}`}>
//                           <Image src={d.img} alt={d.name} fill className="object-cover" />
//                         </div>
//                         <div>
//                           <h3 id={`director-title-${openIdx}`} className={`text-xl poppins-800 text-gray-600`}>{d.name}</h3>
//                           <p className={`${c.titleColor} poppins-700`}>{d.position}</p>
//                         </div>
//                       </div>

//                       <p className="mt-4 text-gray-700 leading-relaxed">{d.bio}</p>

//                       <div className="mt-5 flex justify-end">
//                         <button
//                           onClick={() => setOpenIdx(null)}
//                           className={`inline-flex items-center justify-center rounded-lg border-2 ${c.border} bg-white px-4 py-2 text-sm poppins-700 ${c.titleColor} hover:bg-white/80 transition`}
//                         >
//                           Close
//                         </button>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )
//               })()}
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* local styles for line clamp */}
//       <style jsx>{`
//         .clamp-4 {
//           display: -webkit-box;
//           -webkit-line-clamp: 4;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </section>
//   )
// }

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
interface Director {
  name: string
  position: string
  bio: string
  img: string
}
export  function BoardOfDirectors() {
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
    bio: "Mr. Varma has been a board member of UFlex Limited since February 14, 2023, serving as an independent director. He brings over three decades of experience in retail credit, trade finance, international banking, risk management, and compliance. Mr. Varma has also been associated with the State Bank of India (SBI), where he held several key positions, including Chief Executive Officer in New York, General Manager– mid-corporate regional office in Mumbai, and Chief General Manager– international banking. He retired from SBI as Deputy Managing Director of the Corporate Accounts Group in January 2021.",
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
]

  return (
    <motion.section
      className="relative grid grid-cols-3 bg-white px-4 py-36 md:px-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title Section with Animation */}
      <motion.div
        className="col-span-3 place-content-center lg:col-span-1"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[24px]  poppins-600 text-[#117ABA] md:text-[48px] md:text-5xl">
          Board Of Directors
        </h2>
      </motion.div>

      {/* Swiper Section with Animation */}
      <motion.div
        className="relative col-span-3 lg:col-span-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div
          className="absolute right-0 top-52 h-[70vh] w-2/3 md:h-[70vh] lg:top-[-20px] lg:h-[580px]"
          style={{
            background:
              "linear-gradient(to right, #C9E3F3FF  0%, #8CC5E8FF 29%, #117ABA 100%)",
          }}
        ></div>

        {/* Swiper Slider with Navigation */}
        <div className="relative flex items-center justify-center">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            speed={1000}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className="w-full max-w-4xl"
          >
            {directors.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="relative m-3 mb-8 bg-white p-6 shadow-lg"
                  style={{
                    boxShadow: "0px 4px 13.9px 0px rgba(59, 59, 59, 0.25)",
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  {/* Image & Testimonial Content */}
                  <div className="grid min-h-[400px] grid-cols-3 place-content-center items-center justify-center gap-6">
                    <div className="col-span-3 flex place-content-center items-center justify-center lg:col-span-1">
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        width={240}
                        height={288}
                        className="h-72 w-60 rounded-md object-cover"
                      />
                    </div>
                    {/* Testimonial Text */}
                    <div className="col-span-3 mt-8 flex h-full flex-col place-content-center justify-between lg:col-span-2 lg:mt-0">
                      <div className="poppins-400 text-center  text-gray-600">
                        
                        {testimonial.bio}
                        
                      </div>
                      <div>
                        <h4 className="poppins-600 mt-4 text-right text-gray-800">
                          {testimonial.name}
                        </h4>
                        <p className="poppins-400 text-right text-sm text-gray-500">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows Positioned Outside */}
          <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform">
            <div className="swiper-button-prev"></div>
          </div>
          <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform">
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
