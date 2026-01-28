"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ReadMoreDialog } from "./expandabletext";

const SLIDES = [
  // {
  //   title: "ET Sustainable Organisations 2025",
  //   image: "/images/hall/6.png",
  // },
  {
    title: "Best Organisations to Work 2025",
    image: "/images/hall/7.png",
  },
  // {
  //   title: "Top Employer 2025 in India",
  //   image: "/images/hall/8.png",
  // },
];

export default function SustainabilityCarousel() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const packagingData = [
    {
      title: 'Hall of Fame',
      image: '/images/hall/7.png',
      paragraphs: [
        ` Our journey of growth and leadership in flexible packaging has been consistently recognized by prestigious industry forums worldwide. `,
        `From accolades in sustainability and product innovation to honors as a top employer, our awards reflect more than achievements- they embody our commitment to shaping a responsible, forward-looking future.`,
        `Each recognition is a testament to the passion, ingenuity, and dedication of our people, and to our vision of delivering packaging solutions that combine performance, innovation, and sustainability.`,
      ],
    },

  ];
  return (
    <section className="w-full pt-4 sm:pt-12 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* <div className="grid py-4 lg:grid-cols-2 lg:py-1 gap-10">

          
          <div className="text-center sm:text-left max-w-lg ">
            <AnimatePresence mode="wait">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[24px] lato-700 text-[#117ABA] md:text-[42px] "
                >
                  Hall of Fame
                </motion.h1>

                <p className=" text-wrap max-w-xl lato-400 text-[16px] sm:text-[20px] leading-relaxed text-black">
                  Our journey of growth and leadership in flexible packaging has been consistently recognized by prestigious industry forums worldwide. From accolades in sustainability and product innovation to honors as a top employer, our awards reflect more than achievements- they embody our commitment to shaping a responsible, forward-looking future.
                  Each recognition is a testament to the passion, ingenuity, and dedication of our people, and to our vision of delivering packaging solutions that combine performance, innovation, and sustainability.
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
              Hall of Fame
            </motion.h1>

            <p className="text-wrap max-w-xl lato-400 text-[16px] sm:text-[20px] leading-relaxed text-black">
              {packagingData[0].paragraphs[0]}
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-4 lato-400 text-[16px] sm:text-[20px] text-[#117ABA]  hover:underline"
            >
              Read More
              <span aria-hidden>↗</span>

            </button>

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
              src="/images/hall/7.png"
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
