"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    title: "Global Perspective",
    subtitle: " Thinking globally and acting locally, we leverage the power of global insight, relationships, collaborations, and learnings to deliver exceptional packaging solutions for the clients.",
    image: "/images/careers/global.png",
  },
  {
    title: "Trust & Respect ",
    subtitle: "Proactively build inclusive and egalitarian partnerships with all stakeholders, through the virtues of honesty of purpose, mutual trust, and respect.",
    image: "/images/careers/trust.png",
  },
  {
    title: "Socio-environmental Sustainability",
    subtitle: " Upholding that society and environment are cornerstones for sustainability, we support and promote inclusive social development and strive towards the conservation of the environment and protection of our planet.",
    image: "/images/careers/socio.png",
  },
];

export default function CareersMainCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    //  <section
    //        className="w-full bg-cover bg-center pt-12 md:pt-10  lg:min-h-[410px] pb-12 md:pb-16 lg:pb-28"
    //        style={{ backgroundImage: "url('/images/careers/careers.png')" }}
    //      >


    //        <div className="max-w-7xl mx-auto px-4">
    //          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] items-start md:items-center gap-4 sm:gap-12">


    //            {/* TEXT */}
    //            <div className="min-h-[64px] text-center  sm:text-left max-w-lg ">
    //              <AnimatePresence mode="wait">
    //                <motion.h2
    //                  key={SLIDES[active].title}
    //                  initial={{ opacity: 0 }}
    //                  animate={{ opacity: 1 }}
    //                  exit={{ opacity: 0 }}
    //                  transition={{ duration: 0.4 }}
    //                  className="text-white text-xs sm:text-[16px] lato-700 leading-snug"
    //                >
    //                  {SLIDES[active].title}
    //                </motion.h2>
    //                <motion.h2
    //                  key={SLIDES[active].title}
    //                  initial={{ opacity: 0 }}
    //                  animate={{ opacity: 1 }}
    //                  exit={{ opacity: 0 }}
    //                  transition={{ duration: 0.4 }}
    //                  className="text-gray-300 text-xs sm:text-[16px] lato-700 leading-snug mt-2"
    //                >
    //                  {SLIDES[active].subtitle}
    //                </motion.h2>
    //              </AnimatePresence>
    //            </div>

    //            {/* IMAGE + DOTS */}
    //            <div className="flex flex-col items-center">
    //              <div className="relative h-[80px] sm:h-[360px] w-full sm:w-[711px overflow-hidden rounded-md">

    //                <AnimatePresence mode="wait">
    //                  <motion.div
    //                    key={SLIDES[active].image}
    //                    initial={{ opacity: 0, x: 20 }}
    //                    animate={{ opacity: 1, x: 0 }}
    //                    exit={{ opacity: 0, x: -20 }}
    //                    transition={{ duration: 0.5, ease: "easeOut" }}
    //                    className="absolute inset-0"
    //                  >
    //                    <Image
    //                      src={SLIDES[active].image}
    //                      alt={SLIDES[active].title}
    //                      fill
    //                      className="object-contain sm:object-fill  relative h-[80px] sm:h-[340px] w-full sm:w-[711px]  rounded-sm"
    //                      priority
    //                    />
    //                  </motion.div>
    //                </AnimatePresence>
    //              </div>

    //              {/* DOTS */}
    //              <div className="mt-4 flex gap-2">
    //                {SLIDES.map((_, i) => (
    //                  <button
    //                    key={i}
    //                    onClick={() => setActive(i)}
    //                    className={`h-2 w-2 rounded-full transition-all ${i === active
    //                        ? "bg-white scale-125"
    //                        : "bg-white/40"
    //                      }`}
    //                    aria-label={`Go to slide ${i + 1}`}
    //                  />
    //                ))}
    //              </div>
    //            </div>

    //          </div>
    //        </div>
    //      </section>



    <section className="w-full pt-4 sm:pt-12 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid py-4 lg:grid-cols-2 lg:py-1 gap-10">

          {/* TEXT */}
          <div className="text-center sm:text-left max-w-lg">
            <AnimatePresence mode="wait">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[18px] lato-700 text-[#117ABA] md:text-[28px]"
                >
                  Careers
                </motion.h1>

                <p className=" text-wrap max-w-xl lato-400 text-[16px] sm:text-[18px] leading-relaxed text-[#4f4f4f]">
                  <div className="space-y-0">
                    <p className=" text-start  ">
                      At UFlex, we pride ourselves on fostering an inclusive, caring, and
                      productive environment for our people. As a leading player in the
                      flexible packaging industry, we engage and retain purpose-driven talent
                      through a fair and consistent HR framework.
                    </p>

                    <p className="text-start ">
                      Our entrepreneurial culture empowers employees to drive UFlex’s growth
                      and success. UFlex offers job seekers more than a job. It offers them a
                      lifetime of growth with a number of opportunities for continuous
                      development and growth in assorted fields of business.
                    </p>

                    
                  </div>
                 
                </p>




              </div>
            </AnimatePresence>
          </div>


          <div className="flex flex-col items-center">

            {/* IMAGE */}
            <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={SLIDES[active].image}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={SLIDES[active].image}
                    alt={SLIDES[active].title}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* TITLE */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={SLIDES[active].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-4 text-black text-md sm:text-[16px] lato-700 leading-snug text-center"
              >
                {SLIDES[active].title}
              </motion.h2>
            </AnimatePresence>

            {/* DOTS */}
            <div className="mt-4 flex gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 w-2 rounded-full transition-all ${i === active
                    ? "bg-[#117ABA] scale-125"
                    : "bg-black/40"
                    }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
