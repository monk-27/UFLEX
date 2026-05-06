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
      `At UFlex, we are focused on delivering sustainable, responsible, and profitable growth driven by innovation, operational efficiency, and prudent capital allocation. Supported by a strong balance sheet, we continue to strengthen our presence across packaging films, converting, and recycling, while expanding globally in a calibrated and future-focused manner.

        `,
      `As we grow, we remain committed to manufacturing excellence, cost competitiveness, and sustainable packaging leadership, underpinned by robust governance and environmental responsibility.`,
      `We are also progressing on a transformation journey to build a future-ready organization, leveraging digitalization, advanced recycling, circular material solutions, and customer-centric innovation. Through these efforts, we aim to create enduring stakeholder value and contribute meaningfully to a more resource-efficient global packaging ecosystem.`
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

            <button
              onClick={() => setOpen(true)}
              className="mt-4 lato-400 text-[16px] sm:text-[20px] text-[#173366]  hover:underline"
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
