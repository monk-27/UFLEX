"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Slider, { Settings as SlickSettings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* ------------------------------------------------
   Types
-------------------------------------------------*/
export type Leader = {
  photo: string;
  name: string;
  role: string;
  summary: string;
  cta?: { label: string; href: string };
  imageAlt?: string;
  reversed?: boolean; // image on right for this person
};

export type LeaderSpotlightProps = {
  people: Leader[];
  bgClassName?: string;
  nameColorClass?: string;
  roleColorClass?: string;
  buttonBgClass?: string;
  buttonTextClass?: string;
  className?: string;
  sliderSettings?: SlickSettings;
  alternateSides?: boolean;
};

/* ------------------------------------------------
   Component
-------------------------------------------------*/
function _LeaderSpotlight({
  people,
  bgClassName = "bg-[#ECECEC]",
  nameColorClass = "text-[#0F2B4F]",
  roleColorClass = "text-gray-700",
  buttonBgClass = "bg-[#117ABA]",
  buttonTextClass = "text-white",
  className = "",
  sliderSettings,
  alternateSides = false,
}: LeaderSpotlightProps) {
  const multi = people.length > 1;

  const baseSlideSettings: SlickSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 5000, // auto-move every 5 seconds
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
    ...sliderSettings,
  };

  const Card = (p: Leader, idx: number) => {
    const reversed =
      typeof p.reversed === "boolean"
        ? p.reversed
        : alternateSides
        ? idx % 2 === 1
        : false;

    return (
      <div>
         <motion.h3
                    className="text-center text-[24px] poppins-600 text-[#117ABA] md:text-[48px] md:text-5xl md:mb-8 my-6"
                    initial={{ opacity: 0, y: -16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    Key People
                </motion.h3>
          <section key={`${p.name}-${idx}`} className={`rounded-2xl border-2 border-gray-400 bg-gray-100 py-10 md:py-14 sm:mx-12`}>

        
         
        <div
          className={`mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-8 ${className}`}
        >
          {/* Photo */}
          <motion.div
            className={`relative aspect-[6/6] w-full overflow-hidden rounded-2xl ${
              reversed ? "md:order-2" : ""
            }`}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={p.photo}
              alt={p.imageAlt || p.name}
              fill
              className="object-cover "
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={idx === 0}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className={`${reversed ? "md:order-1" : ""}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <h3
              className={`text-2xl poppin-600 md:text-[28px] text-[#117ABA]`}
            >
              {p.name}
            </h3>
            <p
              className={`mt-1 text-[15px] poppins-600 md:text-base ${roleColorClass}`}
            >
              {p.role}
            </p>
            <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-zinc-700 md:text-[16px]">
              {p.summary}
            </p>

            {p.cta && (
              <Link
                href={p.cta.href}
                className={`mt-6 inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold shadow-md transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${buttonBgClass} ${buttonTextClass}`}
              >
                {p.cta.label}
              </Link>
            )}
          </motion.div>
        </div>
      </section>
      </div>
    );
  };

  if (!multi) {
    return Card(people[0], 0);
  }

  return (
    <div className="relative">
      <Slider {...baseSlideSettings}>
        {people.map((p, idx) => (
          <div key={`${p.name}-${idx}`}>{Card(p, idx)}</div>
        ))}
      </Slider>
    </div>
  );
}

export const LeaderSpotlight = memo(_LeaderSpotlight);
