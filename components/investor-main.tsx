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
      title: 'Investors Relations',
      image: '/images/investors/hero.png',
      paragraphs: [
        `Bringing updates on business, innovation, sustainability, manufacturing milestones, and industry perspectives. Explore official press releases, media coverage, leadership interactions, and stories that display progress across the global packaging value chain.
        `,
        ``,
          ],
    },

  ];

export default function InvestorMainCarousel() {
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
        
        <div className="grid py-4 lg:grid-cols-2 lg:py-1 gap-10">
        
                  <div>
                    <motion.h1
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-[24px] lato-700 text-black md:text-[42px] "
                    >
                      Investors
                    </motion.h1>
        
                    <p className="text-wrap max-w-xl lato-400 text-[16px] sm:text-[20px] leading-relaxed text-black">
                      {packagingData[0].paragraphs[0]}
                    </p>
        
                   
                    
                  </div>
        
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-[16/10] w-full overflow-hidden  "
                  >
                    <Image
                      src="/images/investors/hero.png"
                      alt="UFlex capabilities across the value chain"
                      fill
                      className="object-fill rounded-sm"
                      priority
                    />
        
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
                  </motion.div>
                </div>
      </div>
    </section>
  );
}
