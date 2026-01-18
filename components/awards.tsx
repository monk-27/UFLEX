"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export type AwardItem = {
  image: string;                 // banner/thumb
  title: string;                 // e.g., "Recognized for our sustainability efforts"
  description?: string;
  cta?: { label: string; href: string };
  imageAlt?: string;
};

export type AwardsAccoladesProps = {
  heading?: string;
  subheading?: string;
  items: AwardItem[];
  // layout controls
  split?: boolean;               // true -> big featured card + text (first item), then grid below
  gridColsLg?: 2 | 3;            // for the grid mode
  className?: string;
};

function _AwardsAccolades({
  heading = "Awards & Accolades",
  subheading,
  items,
  split = true,
  gridColsLg = 2,
  className = "",
}: AwardsAccoladesProps) {
  if (!items?.length) return null;

  const first = items[0];
  const rest = items.slice(1);

  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl">{heading}</h2>
          {subheading && (
            <p className="mx-auto mt-2 max-w-2xl text-zinc-700 md:text-lg">{subheading}</p>
          )}
        </div>

        {/* Split layout (feature row) */}
        {split && (
          <motion.div
            className="mt-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
              <Image
                src={first.image}
                alt={first.imageAlt || first.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black md:text-2xl">{first.title}</h3>
              {first.description && (
                <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-zinc-700 md:text-[16px]">
                  {first.description}
                </p>
              )}
              {first.cta && (
                <span
                  
                  className="mt-6 inline-flex items-center rounded-full bg-[#117ABA] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#24497D]"
                >
                  {first.cta.label}
                </span>
              )}
            </div>
          </motion.div>
        )}

        {/* Grid of the rest (or all, if split=false) */}
        <motion.div
          className={`mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 ${gridColsLg === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
        >
          {(split ? rest : items).map((a, i) => (
            <motion.article
              key={`${a.title}-${i}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={a.image}
                  alt={a.imageAlt || a.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h4 className="text-2xl poppin-600 md:text-[28px] text-[#117ABA]">{a.title}</h4>
                {a.description && (
                  <p className="mt-2 line-clamp-4 text-[14px] leading-relaxed text-zinc-700">
                    {a.description}
                  </p>
                )}
                {a.cta && (
                  <span
                    
                    className="mt-4 inline-flex items-center rounded-full bg-[#24497D] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
                  >
                    {a.cta.label}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export const AwardsAccolades = memo(_AwardsAccolades);
