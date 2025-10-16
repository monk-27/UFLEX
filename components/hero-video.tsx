// "use client"

// import { motion } from "framer-motion"
// import { GradientButton } from "./gradient-button"
// import Link from "next/link"

// export function HeroVideo() {
//   return (
    
//     <div className="relative mx-auto h-[60vh] w-full overflow-hidden bg-white px-4 sm:h-screen xl:px-0">
//       {/* Background Video */}
//       <motion.video
//         className="absolute left-0 top-0 h-full w-full bg-white object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//         webkit-playsinline="true"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2 }}
//       >
//         <source src="/video/video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </motion.video>

//       {/* Dark Overlay */}
//       <motion.div
//         className="absolute inset-0 bg-black bg-opacity-100"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.5 }}
//         transition={{ duration: 1 }}
//       ></motion.div>

//       {/* Text Content with Staggered Animation */}
//       <motion.div
//         className="absolute inset-0 bottom-8 flex flex-col justify-end px-4 text-left text-white sm:bottom-28 sm:px-20 md:px-20"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0, y: 30 },
//           visible: {
//             opacity: 1,
//             y: 0,
//             transition: { delayChildren: 0.3, staggerChildren: 0.3 },
//           },
//         }}
//       >
        

//         {/* Main Heading */}
//         <motion.div
//         initial={{ opacity: 0, y: 12 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//         className="  max-w-6xl  absolute bottom-4 right-4 md:bottom-6 md:left-12 z-10 flex flex-wrap gap-3 md:gap-4"
//       >
//         <Link href="/what-we-do">
//           <GradientButton className="shadow-lg">Explore Capabilities</GradientButton>
//         </Link>
//         <Link href="/sustainability">
//           <GradientButton className="shadow-lg">Our Sustainability</GradientButton>
//         </Link>
//       </motion.div>
//       </motion.div>
//     </div>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { GradientButton } from "./gradient-button"
import Link from "next/link"

export function HeroVideo() {
  return (
    <div className="relative mx-auto h-[60vh] w-full overflow-hidden bg-white px-4 sm:h-screen xl:px-0">
      {/* Background Video */}
      <motion.video
        className="absolute left-0 top-0 h-full w-full bg-white object-cover"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <source src="/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Dark Overlay */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Text Content with Staggered Animation */}
      <motion.div
        className="absolute inset-0 bottom-8 flex flex-col justify-end px-4 text-left text-white sm:bottom-28 sm:px-20 md:px-20"
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
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="  max-w-6xl  absolute bottom-4 right-4 md:bottom-6 md:left-12 z-10 flex flex-wrap gap-3 md:gap-4"
        >
          <Link href="/what-we-do">
            <GradientButton className="shadow-lg">Explore Capabilities</GradientButton>
          </Link>
          <Link href="/sustainability">
            <GradientButton className="shadow-lg">Our Sustainability</GradientButton>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

