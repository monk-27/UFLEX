
// "use client"
// import { motion } from "framer-motion"
// import Image from "next/image"

// export default function LifeatModules() {
//   return (
//     <motion.section
//       className="mt-[60px] px-4 py-0 text-center sm:mt-16 sm:bg-gray-100 sm:py-20 md:px-12"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Title */}
//       <motion.div
//         className="mx-auto max-w-4xl"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-[24px] lato-600 text-[#117ABA] md:text-[42px] md:text-5xl">Life at UFlex</h2>
//         <h3
//           className="font-EB-extrabold mt-0 text-[16px] text-[#181818] sm:mt-2 md:text-3xl"
//           style={{ lineHeight: "124%" }}
//         >
//           Where Innovation Meets Community
//         </h3>
//       </motion.div>

//       {/* Modules → grid on laptop/desktop */}
//       <motion.div
//         className="mx-auto mt-8 max-w-6xl sm:pt-12 grid gap-8 lg:grid-cols-2"
//         initial="hidden"
//         animate="visible"
//         variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3 } } }}
//       >
//         {[
//           {
//             title: "Learn with UFlex",
//             image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/page-banners/life_at_image210.webp",
//             description:
//               "The UFlex Learning Academy fosters learning and development through a range of off-the-shelf digital, blended and classroom courses on a wide range of subjects.",
//           },
//           {
//             title: "Your growth, our success",
//             image: "/images/growth.png",
//             description:
//               "At UFlex, experience a vibrant work culture that empowers people to transform their knowledge and capabilities into meaningful achievements.",
//           },
//         ].map((module, index) => (
//           <motion.div
//             key={index}
//             className="group w-full overflow-hidden rounded-lg text-left"
//             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//           >
//             <h3 className="text-center lato-400 mb-3 text-[18px] text-[#181818] md:text-2xl">{module.title}</h3>

//             {/* Card */}
//             <div className="relative h-[360px] sm:h-[420px] lg:h-[445px]">
//               <Image
//                 src={module.image}
//                 alt={module.title}
//                 width={659}
//                 height={445}
//                 className="rounded-lg object-contain"
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//                 priority={index === 0}
//               />

//               {/* Desktop overlay */}
//               <motion.div
//                 className="absolute inset-0 hidden lg:flex flex-col justify-end rounded-lg p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//                 initial={{ y: 240, opacity: 0 }}
//                 whileHover={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.3, ease: "easeOut" }}
//               >
//                 <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
//                 <div className="relative">
//                   <h4 className="lato-800 text-white text-2xl md:text-3xl drop-shadow-[0_1px_1px_rgba(243,244,246,0.9)]">
//                     {module.title}
//                   </h4>
//                   <p className="mt-2 text-white/95 text-sm md:text-base leading-relaxed drop-shadow-[0_1px_1px_rgba(243,244,246,0.9)]">
//                     {module.description}
//                   </p>
//                 </div>
//               </motion.div>

//               {/* Mobile overlay (lighter) */}
//               <motion.div
//                 className="absolute inset-0 flex lg:hidden flex-col justify-end rounded-lg p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//                 whileHover={{ opacity: 1 }}
//               >
//                 <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
//                 <div className="relative">
//                   <h4 className="lato-800 text-white text-lg">{module.title}</h4>
//                   <p className="mt-1 text-white/95 text-sm">{module.description}</p>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.section>
//   )
// }

"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function LifeatModules() {
  const modules = [
    {
      title: "Your growth, our success",
      image: "/images/1.jpeg",
      description:
        "At UFlex, experience a vibrant work culture that empowers people to transform their knowledge and capabilities into meaningful achievements.",
    },
    {
      title: "Learn with UFlex",
      // image: "/images/learnat.png",
      image: "/images/learn.jpg",

      description:
        "The UFlex Learning Academy fosters learning and development through a range of off-the-shelf digital, blended and classroom courses on a wide range of subjects.",
    },
    
  ]

  return (
    <section className="px-1 py-10 text-center  sm:bg-gray-100 sm:py-10 md:px-12">
      {/* Title */}
      <motion.div
        className="mx-auto max-w-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="items-center justify-center flex text-center space-x-2">

                      {/* <Image src="/images/ula.png" width={75} height={10} alt={""}/> */}
        <h2 className="text-[24px] lato-700 text-[#117ABA] md:text-[42px] ">
          Life at UFlex
        </h2>
        </div>
        
        <h3
         className="text-black lato-400 py-[2px] text-[14px] leading-relaxed md:text-[24px]"
          style={{ lineHeight: "124%" }}
        >
          Where Innovation Meets Community
        </h3>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="mx-auto mt-12 max-w-7xl grid gap-8 sm:grid-cols-1 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {modules.map((module, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col overflow-hidden rounded-sm bg-white  hover:shadow-xl"
          >
            <Link href="/careers">
           
            {/* Image */}
            <div className="relative h-64 sm:h-72 md:h-96">
              <Image
                src={module.image}
                alt={module.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col p-6 text-left">
              <h3 className="text-start lato-700 text-[18px] md:text-[20px] leading-tight text-[#117ABA]">
                {module.title}
              </h3>
              <p className=" mt-3 lato-400 text-[14px] md:text-[18px] text-black  leading-relaxed">
                {module.description}
              </p>
            </div>
             </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
