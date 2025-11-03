// "use client"

// import { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import { ChevronRight, X } from "lucide-react"

// interface Executive {
//   name: string
//   position: string
//   img?: string
//   bio?: string
// }

// const executives: Executive[] = [
//   { name: "Mr. Ashok Chaturvedi", position: "Chairman and Managing Director", img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Ashok-Chaturvedi-(KM)20.jpg", bio: "Mr. Ashok Chaturvedi is a first-generation entrepreneur and the founder of the UFlex Group. His dynamic leadership, long-term vision, and value-driven business strategy have established UFlex Limited as the largest flexible packaging and solutions company in India and a recognized global player in polymer sciences. He is considered the ‘Father of the flexible packaging industry in India’." },
//   { name: "Mr. Apoorvshree Chaturvedi", position: "Director – Global Operations", img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Apoorvshree-Chaturvedi45.jpg", bio: "Mr. Apoorvshree Chaturvedi oversees corporate sustainability initiatives focusing on ESG (Environmental, Social, and Governance) and growth ventures at UFlex Group. He leads the development and execution of strategic initiatives across all business verticals, driving the creation of a value-driven organization with a strong focus on socio-economic impact. An alumnus of New York University, Mr. Chaturvedi joined UFlex in 2012 as a Management Trainee in the Middle East. He later took on leadership roles, directing marketing and sales efforts for the European and Middle Eastern regions." },
//   { name: "Mr. Anantshree Chaturvedi", position: "Vice Chairman and CEO", img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Anantshree-Chaturvedi22.jpg", bio: "Mr. Anantshree Chaturvedi plays a pivotal role in driving UFlex’s global success, with extensive hands-on experience in flexible packaging across India, Mexico, Poland, Egypt, the UAE, and the USA. He was instrumental in expanding UFlex's footprint in the US and currently oversees global product stability, R&D, and HR protocols. In addition to his leadership position, he serves as the company’s Chief Cultural Officer, shaping the organization’s values and workplace culture. Mr. Chaturvedi is a graduate of Babson College, where he majored in finance, global strategic management, and economics. His strong educational foundation complements his extensive practical expertise, enabling him to lead UFlex’s operations effectively across diverse regions." },
//   { name: "Mr. Rajesh Bhatia", position: "Group President (F&A) and CFO", img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.Rajesh-Bhatia32.jpg", bio: "Mr. Rajesh Bhatia brings nearly three decades of extensive experience in finance, accounting, taxation, administration, and commercial and business development. He holds a degree in commerce and is an associate member of the Institute of Chartered Accountants of India (ICAI). At UFlex, his primary responsibilities include formulating financial plans and strategies, assisting in the finalization of corporate plans and strategies, and overseeing financial management, taxation, and corporate governance. His role also encompasses investor relations, information technology, and other areas." },
//   {
//     name: "Mr. Jeevaraj Gopal Pillai",
//     position: "Whole Time Director; President – Flexible Packaging & NPD; Director – Sustainability",
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Jeevaraj-Gopal-Pillai-(KM)56.jpg",
//     bio: "Mr. Jeevaraj Pillai brings over 35 years of experience in packaging and packaging technology, with expertise in printing cylinders, packaging films, and advanced flexible packaging material conversion. As Director - Sustainability, he leads the development and implementation of the company’s ESG strategy, along with the development of sustainable products and solutions. His extensive background in the industry is complemented by his qualifications in mechanical engineering and an MBA.",
//   },
//   { name: "Dr. Chandan Chattaraj", position: "President – Human Resources (India & Global)", 
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Dr.-Chandan-Chattaraj04.jpg", 
//     bio: "Dr. Chandan Chattaraj brings three decades of extensive experience across organizations such as Aircel, the Oberoi Group, Xerox India, and Jubilant Organosys, where he held various leadership roles. In addition to his professional achievements, he serves as a member of the Board of Governors for the International School of Business & Media, Pune, and is on the Corporate Advisory Board of Poornima University, Jaipur. He is an alumnus of the Xavier Institute of Social Service (XISS), Ranchi." },
//   { name: "Mr. P. L. Sirsamkar", position: "Technical & New Product Development (Films Business)", 
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-P.-L.-Sirsamkar-President-48.jpg", 
//     bio: "Mr. Sirsamkar has been with the UFlex Group for over 26 years. He has previously worked with leading organizations such as Garware and Polyplex. With nearly four decades of experience in the packaging films industry, he has been instrumental in expanding the film plant globally and has played a key role in driving the operations and development of value-added packaging films. Mr. Sirsamkar holds a degree in instrumentation and electronics engineering." },

//     { name: "Mr. Dinesh Jain", position: "President – Legal & Corporate Affairs", 
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Dinesh-Jain46.jpg",
//      bio: "With over four decades of industry experience, Mr. Dinesh Jain has been with the UFlex Group for more than 29 years. He is responsible for overseeing legal and corporate affairs, as well as leading the Group&rsquo;s corporate social responsibility initiatives. In addition to his professional responsibilities, Mr. Jain serves on the managing committees of several social organizations and educational institutions, including IMS Ghaziabad and IMS Noida. He holds an MBA and an LLM from Agra University." },

// { name: "Mr. Anand Kanodia", position: "Joint President – Finance", 
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Anand-Kanodia33.jpg", 
//     bio: "A seasoned finance leader with close to three decades of diverse experience across manufacturing sectors. He has held key roles in reputed organizations such as Dalmia Cement, Acme Solar, and Bajaj Hindustan, and currently serves as Joint President- Finance at UFlex Limited." },

//      { name: "Mr. Sumeet Kumar", position: "Executive Vice President – Finance", 
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Sumeet-Kumar14.jpg", 
//     bio: "Mr. Sumeet Kumar is a seasoned finance professional with over three decades of leadership experience across prominent corporate groups such as LANCO Group, Global Group, and Hi-Tech Gears Group. He has held key roles including President, CFO, and Group CFO, and brings deep expertise in project and corporate finance, fundraising, M&A, financial planning and control, treasury, and investor relations." },
//   // Add the 10th executive here with img & bio when available
// ]

// const execCardColors = [
//     { border: "border-gray-200", bg: "bg-gray-100", titleColor: "text-[#117ABA] ", ring: "ring-[#117ABA]", tint: "bg-green-100", textOnTint: "text-green-900" },

// ]

// export function KeyManagement() {
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
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl poppins-800 text-center mb-4 text-[#117ABA]">Key Management</h2>
//         <p className="poppins-600 text-center text-gray-600 mb-24 max-w-2xl mx-auto">Talented professionals driving operational excellence</p>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {executives.map((exec, idx) => {
//             const colors = execCardColors[idx % execCardColors.length]
//             const initials = exec.name
//               .replace(/\(.*?\)/g, "")
//               .split(/\s+/)
//               .map((n) => n[0])
//               .filter(Boolean)
//               .slice(0, 2)
//               .join("")

//             return (
//               <motion.div
//                 key={idx}
//                 whileHover={{ y: -3 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 className={`relative border-2 ${colors.border} ${colors.bg} p-6 pt-28 rounded-lg hover:shadow-lg h-full`}
//               >
//                 {/* Larger floating portrait (half outside) */}
//                 <div className="pointer-events-none absolute -top-14 left-1/2 z-10 -translate-x-1/2">
//                   <div className={`relative h-28 w-28 overflow-hidden rounded-2xl border-2 ${colors.border} shadow-md ring-4 ${colors.ring}`}>
//                     {exec.img ? (
//                       <Image src={exec.img} alt={exec.name} fill className="object-cover" />
//                     ) : (
//                       <div className="flex h-full w-full items-center justify-center bg-white text-gray-700 poppins-700">
//                         {initials}
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <h3 className="text-lg poppins-800 text-gray-600 mb-2 text-center sm:text-left">{exec.name}</h3>
//                 <p className={`poppins-700 text-sm ${colors.titleColor} text-center sm:text-left`}>{exec.position}</p>

//                 <div className="mt-4 mb-4 flex justify-center sm:justify-start">
//                   <button
//                     onClick={() => setOpenIdx(idx)}
//                     className={`${colors.titleColor} poppins-700 flex items-center gap-1 hover:gap-2 transition`}
//                     aria-haspopup="dialog"
//                     aria-controls={`exec-modal-${idx}`}
//                     aria-expanded={openIdx === idx}
//                   >
//                     Read More <ChevronRight size={16} />
//                   </button>
//                 </div>
//               </motion.div>
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
//                 const d = executives[openIdx]
//                 const c = execCardColors[openIdx % execCardColors.length]
//                 return (
//                   <motion.div
//                     role="dialog"
//                     id={`exec-modal-${openIdx}`}
//                     aria-labelledby={`exec-title-${openIdx}`}
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
//                         <div className={`relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border-2 ${c.border} ring-4 ${c.ring}`}>
//                           <Image src={d.img ?? "/placeholder.png"} alt={d.name} fill className="object-cover" />
//                         </div>
//                         <div>
//                           <h3 id={`exec-title-${openIdx}`} className={`text-xl poppins-800 text-red-900`}>{d.name}</h3>
//                           <p className={`${c.titleColor} poppins-700`}>{d.position}</p>
//                         </div>
//                       </div>

//                       {d.bio && <p className="mt-4 text-gray-700 leading-relaxed">{d.bio}</p>}

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
//     </section>
//   )
// }
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
interface Executive {
  name: string
  position: string
  img?: any
  bio?: string
}
export function KeyManagement() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const executives: Executive[] = [
    { name: "Mr. Ashok Chaturvedi", position: "Chairman and Managing Director", img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Ashok-Chaturvedi-(KM)20.jpg", bio: "Mr. Ashok Chaturvedi is a first-generation entrepreneur and the founder of the UFlex Group. His dynamic leadership, long-term vision, and value-driven business strategy have established UFlex Limited as the largest flexible packaging and solutions company in India and a recognized global player in polymer sciences. He is considered the ‘Father of the flexible packaging industry in India’." },
    { name: "Mr. Apoorvshree Chaturvedi", position: "Director – Global Operations", img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Apoorvshree-Chaturvedi45.jpg", bio: "Mr. Apoorvshree Chaturvedi oversees corporate sustainability initiatives focusing on ESG (Environmental, Social, and Governance) and growth ventures at UFlex Group. He leads the development and execution of strategic initiatives across all business verticals, driving the creation of a value-driven organization with a strong focus on socio-economic impact. An alumnus of New York University, Mr. Chaturvedi joined UFlex in 2012 as a Management Trainee in the Middle East. He later took on leadership roles, directing marketing and sales efforts for the European and Middle Eastern regions." },
    { name: "Mr. Anantshree Chaturvedi", position: "Vice Chairman and CEO", img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Anantshree-Chaturvedi22.jpg", bio: "Mr. Anantshree Chaturvedi plays a pivotal role in driving UFlex’s global success, with extensive hands-on experience in flexible packaging across India, Mexico, Poland, Egypt, the UAE, and the USA. He was instrumental in expanding UFlex's footprint in the US and currently oversees global product stability, R&D, and HR protocols. In addition to his leadership position, he serves as the company’s Chief Cultural Officer, shaping the organization’s values and workplace culture. Mr. Chaturvedi is a graduate of Babson College, where he majored in finance, global strategic management, and economics. His strong educational foundation complements his extensive practical expertise, enabling him to lead UFlex’s operations effectively across diverse regions." },
    { name: "Mr. Rajesh Bhatia", position: "Group President (F&A) and CFO", img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.Rajesh-Bhatia32.jpg", bio: "Mr. Rajesh Bhatia brings nearly three decades of extensive experience in finance, accounting, taxation, administration, and commercial and business development. He holds a degree in commerce and is an associate member of the Institute of Chartered Accountants of India (ICAI). At UFlex, his primary responsibilities include formulating financial plans and strategies, assisting in the finalization of corporate plans and strategies, and overseeing financial management, taxation, and corporate governance. His role also encompasses investor relations, information technology, and other areas." },
    {
      name: "Mr. Jeevaraj Gopal Pillai",
      position: "Whole Time Director; President – Flexible Packaging & NPD; Director – Sustainability",
      img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Jeevaraj-Gopal-Pillai-(KM)56.jpg",
      bio: "Mr. Jeevaraj Pillai brings over 35 years of experience in packaging and packaging technology, with expertise in printing cylinders, packaging films, and advanced flexible packaging material conversion. As Director - Sustainability, he leads the development and implementation of the company’s ESG strategy, along with the development of sustainable products and solutions. His extensive background in the industry is complemented by his qualifications in mechanical engineering and an MBA.",
    },
    {
      name: "Dr. Chandan Chattaraj", position: "President – Human Resources (India & Global)",
      img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Dr.-Chandan-Chattaraj04.jpg",
      bio: "Dr. Chandan Chattaraj brings three decades of extensive experience across organizations such as Aircel, the Oberoi Group, Xerox India, and Jubilant Organosys, where he held various leadership roles. In addition to his professional achievements, he serves as a member of the Board of Governors for the International School of Business & Media, Pune, and is on the Corporate Advisory Board of Poornima University, Jaipur. He is an alumnus of the Xavier Institute of Social Service (XISS), Ranchi."
    },
    {
      name: "Mr. P. L. Sirsamkar", position: "Technical & New Product Development (Films Business)",
      img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-P.-L.-Sirsamkar-President-48.jpg",
      bio: "Mr. Sirsamkar has been with the UFlex Group for over 26 years. He has previously worked with leading organizations such as Garware and Polyplex. With nearly four decades of experience in the packaging films industry, he has been instrumental in expanding the film plant globally and has played a key role in driving the operations and development of value-added packaging films. Mr. Sirsamkar holds a degree in instrumentation and electronics engineering."
    },

    {
      name: "Mr. Dinesh Jain", position: "President – Legal & Corporate Affairs",
      img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Dinesh-Jain46.jpg",
      bio: "With over four decades of industry experience, Mr. Dinesh Jain has been with the UFlex Group for more than 29 years. He is responsible for overseeing legal and corporate affairs, as well as leading the Group&rsquo;s corporate social responsibility initiatives. In addition to his professional responsibilities, Mr. Jain serves on the managing committees of several social organizations and educational institutions, including IMS Ghaziabad and IMS Noida. He holds an MBA and an LLM from Agra University."
    },

    {
      name: "Mr. Anand Kanodia", position: "Joint President – Finance",
      img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Anand-Kanodia33.jpg",
      bio: "A seasoned finance leader with close to three decades of diverse experience across manufacturing sectors. He has held key roles in reputed organizations such as Dalmia Cement, Acme Solar, and Bajaj Hindustan, and currently serves as Joint President- Finance at UFlex Limited."
    },

    {
      name: "Mr. Sumeet Kumar", position: "Executive Vice President – Finance",
      img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Sumeet-Kumar14.jpg",
      bio: "Mr. Sumeet Kumar is a seasoned finance professional with over three decades of leadership experience across prominent corporate groups such as LANCO Group, Global Group, and Hi-Tech Gears Group. He has held key roles including President, CFO, and Group CFO, and brings deep expertise in project and corporate finance, fundraising, M&A, financial planning and control, treasury, and investor relations."
    },
    // Add the 10th executive here with img & bio when available
  ]

  const execCardColors = [
    { border: "border-gray-200", bg: "bg-gray-100", titleColor: "text-[#117ABA] ", ring: "ring-[#117ABA]", tint: "bg-green-100", textOnTint: "text-green-900" },

  ]
  useEffect(() => {
    const original = document.body.style.overflow
    if (openIdx !== null) document.body.style.overflow = "hidden"
    else document.body.style.overflow = original
    return () => {
      document.body.style.overflow = original
    }
  }, [openIdx])
  return (
    <div className="justify-center items-center min-h-screen mx-auto max-w-[90%] bg-white py-8 sm:py-12 lg:py-12 px-2 sm:px-6 lg:px-8 sm:pt-[78px] pt-[78px]">
      {/* Heading */}
      <h2 className="text-center text-[24px]  poppins-600 text-[#117ABA] md:text-[48px] md:text-5xl"> Key Management</h2>



      {/* Team Grid */}
      <div className="pt-8 sm:pt-1  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 justify-items-center ">
        {executives.map((member: any, index) => {


          const colors = execCardColors[index % execCardColors.length]
          const initials = member.name
            .replace(/\(.*?\)/g, "")
            .split(/\s+/)
            .map((n: any) => n[0])
            .filter(Boolean)
            .slice(0, 2)
            .join("")
          return (
            <div key={index} className="flex flex-col items-center sm:items-start teamimages  w-full sm:max-w-[334px]">
              {/* Team Member Image with Gradient Overlay */}
              <div className="relative w-[320px] h-[320px] sm:w-[250px] sm:h-[250px] mb-3 sm:mb-4">
                <Image
                  src={member.img}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-[320px] h-[320px] sm:w-[250px] sm:h-[250px]"
                  quality={100}
                />
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: "linear-gradient(to right, rgba(193, 223, 241, 0.4), rgba(18, 122, 186, 0.4)",
                  }}
                ></div>
              </div>

              {/* Team Member Name */}
              <h3 className="poppins-600 text-gray-600 text-[16px] text-center sm:text-left mb-2">
                {member.name}
              </h3>

              {/* Team Member Description */}
              <p className="poppins-400 text-gray-800 text-[14px] sm:text-left mb-[57px] sm:mb-[60px]">
                {member.position}
              </p>
              <div className="mt-4 mb-4 flex justify-center sm:justify-start">
                <button
                  onClick={() => setOpenIdx(index)}
                  className={`${colors.titleColor} poppins-700 flex items-center gap-1 hover:gap-2 transition`}
                  aria-haspopup="dialog"
                  aria-controls={`exec-modal-${index}`}
                  aria-expanded={openIdx === index}
                >
                  Read More <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )
        })}
      </div>
      <AnimatePresence initial={false} mode="wait">
        {openIdx !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-50 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenIdx(null)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {(() => {
                const d = executives[openIdx]
                const c = execCardColors[openIdx % execCardColors.length]
                return (
                  <motion.div
                    role="dialog"
                    id={`exec-modal-${openIdx}`}
                    aria-labelledby={`exec-title-${openIdx}`}
                    aria-modal="true"
                    initial={{ y: 36, scale: 0.98, opacity: 0 }}
                    animate={{ y: 0, scale: 1, opacity: 1 }}
                    exit={{ y: 20, scale: 0.98, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 26 }}
                    className={`relative mx-4 sm:mx-6 lg:mx-0 w-full sm:max-w-lg rounded-2xl border-2 ${c.border} ${c.bg} shadow-2xl overflow-hidden`}
                  >
                    {/* Themed header strip */}
                    <div className={`h-2 ${c.tint}`} />

                    <button
                      onClick={() => setOpenIdx(null)}
                      className={`absolute right-3 top-3 rounded-full p-2 bg-white/80 hover:bg-white text-gray-700 shadow`}
                      aria-label="Close"
                    >
                      <X size={18} />
                    </button>

                    <div className="p-5">
                      <div className="flex items-start gap-4">
                        <div className={`relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border-2 ${c.border} ring-4 ${c.ring}`}>
                          <Image src={d.img ?? "/placeholder.png"} alt={d.name} fill className="object-cover" />
                        </div>
                        <div>
                          <h3 id={`exec-title-${openIdx}`} className={`text-xl poppins-800 text-red-900`}>{d.name}</h3>
                          <p className={`${c.titleColor} poppins-700`}>{d.position}</p>
                        </div>
                      </div>

                      {d.bio && <p className="mt-4 text-gray-700 leading-relaxed">{d.bio}</p>}

                      <div className="mt-5 flex justify-end">
                        <button
                          onClick={() => setOpenIdx(null)}
                          className={`inline-flex items-center justify-center rounded-lg border-2 ${c.border} bg-white px-4 py-2 text-sm poppins-700 ${c.titleColor} hover:bg-white/80 transition`}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
              })()}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

