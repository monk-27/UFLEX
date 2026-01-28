"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ReadMoreDialog } from "./expandabletext";

const SLIDES = [
  // {
  //   title: "UFlex to Showcase a Comprehensive Range of Pet Food  Packaging Solutions at Pet Fair South East Asia 2025",
  //   image: "/images/press/dog.png",
  // },
  // {
  //   title: "UFlex’s FlexiTubes to Showcase Advanced Tube Packaging Solutions  for the Beauty Industry at Cosmoprof India 2025",
  //   image: "/images/press/flexitube.png",
  // },
  {
    title: "UFlex Introduces FSSAI compliant Single-Pellet Solution for Food Packaging - Enables Food and Beverage Brands to Meet EPR Compliance",
    image: "/images/press/man.png",
  },
];

  const packagingData = [
    {
      title: 'Press Room',
      image: '/images/press/man.png',
      paragraphs: [
        `Bringing updates on business, innovation, sustainability, manufacturing milestones, and industry perspectives. Explore official press releases, media coverage, leadership interactions, and stories that display progress across the global packaging value chain.
        `,
        ``,
          ],
    },

  ];

export default function PressMainCarousel() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (

    <section className="w-full pt-4 sm:pt-12 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* <div className="grid py-4 lg:grid-cols-2 lg:py-1 gap-10">

          <div className="text-center sm:text-left max-w-lg">
            <AnimatePresence mode="wait">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[24px] lato-700 text-[#117ABA] md:text-[42px] "
                >
                  Press Room
                </motion.h1>

                <p className=" text-wrap max-w-xl lato-400 text-[16px] sm:text-[20px] leading-relaxed text-black">
                  <div className="space-y-0">
                    <p className=" text-start  ">
                      Bringing updates on business, innovation, sustainability, manufacturing milestones, and industry perspectives. Explore official press releases, media coverage, leadership interactions, and stories that display progress across the global packaging value chain. </p>


                  </div>

                </p>




              </div>
            </AnimatePresence>
          </div>


          <div className="flex flex-col items-center">


            <div className="mt-0 sm:mt-4 relative w-full aspect-[16/9] rounded-md overflow-hidden group cursor-pointer">
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
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">


              </div>

            </div>



          </div>
        </div> */}
        <div className="grid py-4 lg:grid-cols-2 lg:py-1 gap-10">
        
                  <div>
                    <motion.h1
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-[24px] lato-700 text-[#117ABA] md:text-[42px] "
                    >
                      Press Room
                    </motion.h1>
        
                    <p className="text-wrap max-w-xl lato-400 text-[16px] sm:text-[20px] leading-relaxed text-black">
                      {packagingData[0].paragraphs[0]}
                    </p>
        
                    {/* <button
                      onClick={() => setOpen(true)}
                      className="mt-4 lato-400 text-[16px] sm:text-[20px] text-[#117ABA]  hover:underline"
                    >
                      Read More
                      <span aria-hidden>↗</span>
        
                    </button> */}
        
                    {/* ---- Modal ---- */}
                    <ReadMoreDialog
                      open={open}
                      onClose={() => setOpen(false)}
                      title={packagingData[0].title}
                      imageSrc={packagingData[0].image}
                      imageAlt={packagingData[0].title}
                      paragraphs={packagingData[0].paragraphs}
                    />
        
                  </div>
        
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-[16/10] w-full overflow-hidden  "
                  >
                    <Image
                      src="/images/press/man.png"
                      alt="UFlex capabilities across the value chain"
                      fill
                      className="object-cover rounded-sm"
                      priority
                    />
        
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
                  </motion.div>
                </div>
      </div>
    </section>
  );
}
