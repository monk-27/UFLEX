// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function LearnStatus() {
//   return (
//    <section className="relative w-full overflow-hidden px-4 py-12 sm:py-16 md:py-24">
//   {/* Card Container - Perfect 50/50 on desktop */}
//   <div className="relative mx-auto max-w-7xl">
//     <div className="grid grid-cols-1 gap-8 rounded-2xl bg-white/10 p-6 md:grid-cols-2 md:gap-0 md:p-10">
      
//       {/* Left: Enhanced Text (50%) */}
//       <motion.div
//         className="space-y-6 text-left"
//         initial={{ opacity: 0, x: -30 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <motion.h2
//           className="manrope-800 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//         >
//           UFlex Learning Academy
//         </motion.h2>

//         <motion.div
//           className="space-y-4"
//           initial="hidden"
//           whileInView="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
//           }}
//           viewport={{ once: true }}
//         >
//           <motion.p
//             className="manrope-600 text-base md:text-lg leading-relaxed text-gray-200"
//             variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
//           >
//             Launched in **2024** to revolutionize workforce development, the UFlex Learning Academy is a comprehensive platform delivering **digital, blended, and classroom courses** across business-critical subjects.<grok-card data-id="8e9d2b" data-type="citation_card"></grok-card>
//           </motion.p>

//           <motion.p
//             className="manrope-500 text-sm md:text-base leading-relaxed text-gray-300"
//             variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
//           >
//             With a dedicated team of certified delivery experts and **Wing Champions** from senior leadership, we create structured learning journeys tailored for Industry 4.0 reskilling—ensuring every employee thrives in a rapidly evolving landscape.<grok-card data-id="870ab3" data-type="citation_card"></grok-card>
//           </motion.p>

//           <motion.div
//             className="manrope-700 mt-4 flex items-center gap-2 text-sm md:text-base text-blue-300"
//             variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
//           >
//             <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 .68-.057 1.347-.166 1.997C17.994 9.33 17.52 10.64 16.7 11.73a11.83 11.83 0 01-2.572 2.649 11.955 11.955 0 01-4.158 1.721c-.65.11-1.323.165-2.002.165s-1.351-.055-2.001-.165a11.955 11.955 0 01-4.159-1.721 11.832 11.832 0 01-2.57-2.65C2.006 10.638 1.526 9.33 1.166 7.997A11.954 11.954 0 001 5c0-.68.057-1.35.166-2.001z" clipRule="evenodd" />
//             </svg>
//             Ready to upskill? Email us: 
//             <a
//               href="mailto:learning_academy@uflexltd.com"
//               className="underline decoration-blue-400 underline-offset-2 transition hover:decoration-blue-200"
//             >
//               learning_academy@uflexltd.com
//             </a>
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* Right: Full-Height Image (50%) */}
//       <motion.div
//         initial={{ opacity: 0, x: 30 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         viewport={{ once: true }}
//         className="relative h-[500px] md:h-auto"
//       >
//         <Image
//           src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-images/image07.jpg"
//           alt="UFlex Learning Academy"
//           fill
//           className="rounded-r-2xl object-cover md:rounded-none md:rounded-r-2xl"
//           priority
//         />
//       </motion.div>
//     </div>
//   </div>
// </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LearnStatus() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-12 sm:py-16 md:py-24">
      {/* Background Image with Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-transparent to-slate-900/20" />
      
      {/* Card Container - 50/50 Split */}
      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-0  overflow-hidd">
          
          {/* Left: Text Content - Full Width on Mobile */}
          <motion.div
            className="p-8 md:p-10 lg:p-12 space-y-6 text-left "
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              
            >
              <h2 className="text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl leading-tight mb-2">
                UFlex Learning Academy
              </h2>
              <Image src="/images/ula.png" width={115} height={15} alt={""}/>
            </motion.div>

            {/* Improved Text Content */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.2 },
                },
              }}
              viewport={{ once: true }}
            >
              {/* Main Description */}
               <motion.p
            className="manrope-400 text-base md:text-lg leading-relaxed text-gray-600"
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
          >
            The UFlex Learning Academy fosters learning and development through a range of off-the-shelf digital, blended and classroom courses on a wide range of subjects.
The academy brings together a range of off-the-shelf digital, blended, and classroom courses on a wide range of business-driven subjects, delivered through our secure and accessible online platform. Our customized programs cater to the needs of every individual, offering them an opportunity to excel in their careers.
Leveraging modern modules and subject matter experts, we strive to create a culture of learning and upskilling our employees across the organization.
           
          </motion.p>

          <motion.p
            className="manrope-500 text-sm md:text-base leading-relaxed text-gray-500"
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
          >
            With a dedicated team of certified delivery experts and **Wing Champions** from senior leadership, we create structured learning journeys tailored for Industry 4.0 reskilling—ensuring every employee thrives in a rapidly evolving landscape.
          </motion.p>

              

              {/* CTA */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="pt-4"
              >
                <p className="manrope-600 text-gray-700 dark:text-gray-300 text-base mb-3 leading-relaxed">
                  Ready to elevate your career? Connect with us:
                </p>
                <a
                  href="mailto:uflexlearningacademy@uflexltd.com"
                  className="inline-flex items-center space-x-2 manrope-600 text-[#117ABA] hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold text-base transition-colors duration-200"
                >
                  <span>uflexlearningacademy@uflexltd.com</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Full-Height Image */}
          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute " />
            <Image
              src="/images/learn.jpg"
              alt="UFlex Learning Academy"
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
            {/* Optional: Overlay Text */}
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}