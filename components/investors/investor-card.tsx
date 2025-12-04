// src/components/investor/InvestorCardsGrid.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type InvestorCard = {
  id: string;
  title: string;
  image: string;
  href: string;
};

type Props = {
  cards: InvestorCard[];
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, },
  },
};

export function InvestorCardsGrid({ cards }: Props) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative block overflow-hidden"
            >
              <Link href={card.href} className="block">
                <div className="relative h-[180px] sm:h-[200px] md:h-[220px] lg:h-[230px] w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  />

                  <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/45" />

                  <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide">
                      {card.title}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
