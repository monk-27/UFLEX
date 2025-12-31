"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    title: "ET Sustainable Organisations 2025",
    image: "/images/hall/6.png",
  },
  {
    title: "Best Organisations to Work 2025",
    image: "/images/hall/7.png",
  },
  {
    title: "Top Employer 2025 in India",
    image: "/images/hall/8.png",
  },
];

export default function SustainabilityCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
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
                  Hall of Fame
                </motion.h1>

                <p className=" text-wrap max-w-xl lato-400 text-[16px] sm:text-[18px] leading-relaxed text-[#4f4f4f]">
                  Our journey of growth and leadership in flexible packaging has been
                  consistently recognized by prestigious industry forums worldwide.
                  From accolades in sustainability and product innovation to honors
                  as a top employer, our awards reflect more than achievements—they
                  embody our commitment to shaping a responsible, forward-looking
                  future.
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
