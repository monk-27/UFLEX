// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <div className="hero-section relative h-[570px] w-full overflow-hidden bg-white md:h-screen">
      
//       <motion.div
//         className="absolute top-0 left-0 h-[570px] w-full md:h-full"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {/* Desktop Image with Overlay */}
//         <div className="relative hidden h-full w-full md:block">
//           <Image
//             src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-banners/banner00.jpg"
//             alt="Bhawan"
//             layout="fill"
//             objectFit="cover"
//             className="hidden md:block"
//             priority
//           />
//           <div className="absolute inset-0 bg-black/40" />
//         </div>

//         {/* Mobile Image without Overlay */}
//         <Image
//           src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-banners/banner00.jpg"

//           alt="Bhawan"
//           layout="fill"
//           objectFit="cover"
//           className="block md:hidden"
//           priority
//         />
//       </motion.div>

//       {/* <motion.div
//         className="absolute inset-0 bottom-10 mb-1 flex flex-col justify-end px-5 text-left text-white sm:px-20 md:bottom-20 md:mb-12 md:px-20"
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
//         <motion.h3
//           className="submain text-[24px] sm:text-[43px]"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 },
//           }}
//         >
//           Established in 1985 <br />
//         </motion.h3>

//         <div className="relative space-y-0 sm:space-y-1">
//           <motion.h1
//             className="main text-[32px] sm:text-[70px]"
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//           >
//             India’s Largest Multinational Flexible Packaging Leader.
//           </motion.h1>

//         </div>
//       </motion.div> */}
//     </div>
//   );
// }
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="hero-section relative h-[270px] w-full overflow-hidden bg-white md:w-full md:h-[580px]">
        {/* Background Image Container */}
        <motion.div
          className="absolute top-0 left-0 h-[270px] w-full md:w-full md:h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Desktop Image with Overlay */}
          <div className="relative hidden h-full w-full md:block px-10">
            <Image
              src="/images/mainabout.png" // Replace with your actual desktop image path
              alt="Sustainability"
             height={1440}
             width={100}
             
              className="object-contain h-full w-full"
              priority
            />
            {/* <div className="absolute inset-0 bg-black/40" /> */}
          </div>
  
          {/* Mobile Image without Overlay */}
          <Image
             src="/images/mainabout.png" // Replace with your actual mobile image path
            alt="Sustainability"
            fill
            className="object-cover h-[1440px] w-[569px] md:hidden"
            priority
          />
        </motion.div>
  
        
  
        
    
  
        {/* Decorative Elements (Wind Turbine & Moss Ball) */}
     
      </div>
  );
}