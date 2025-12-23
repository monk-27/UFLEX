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
    <section
      className="w-full bg-cover bg-center pt-12 md:pt-10  lg:min-h-[410px] pb-12 md:pb-16 lg:pb-28"
      style={{ backgroundImage: "url('/images/hall/9.png')" }}
    >


      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] items-start md:items-center gap-4 sm:gap-12">


          {/* TEXT */}
          <div className="min-h-[64px] text-center md:text-left">
            <AnimatePresence mode="wait">
              <motion.h2
                key={SLIDES[active].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-white text-xl sm:text-[24px] lato-700 leading-snug"
              >
                {SLIDES[active].title}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* IMAGE + DOTS */}
          <div className="flex flex-col items-center">
            <div className="relative h-[80px] sm:h-[360px] w-full overflow-hidden rounded-md">

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
                    className="object-contain sm:object-cover relative h-[80px] sm:h-[360px] w-full overflow-hidden rounded-sm"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* DOTS */}
            <div className="mt-4 flex gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 w-2 rounded-full transition-all ${i === active
                      ? "bg-white scale-125"
                      : "bg-white/40"
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
