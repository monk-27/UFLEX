"use client";

import { useState, memo } from "react";
import Slider, { Settings as SlickSettings } from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* -------------------- Types -------------------- */
export type SliderItem = {
  img: string;
  title: string;
  desc: string;
};

export type SliderCarouselProps = {
  /** Section heading (from parent) */
  heading?: string;
  /** Section subheading (from parent) */
  subheading?: string;
  /** Cards */
  items: SliderItem[];
  /** Optional: override desktop/tablet settings (used on ≥ sm) */
  settingsDesktop?: SlickSettings;
  /** Optional: override mobile settings (used on < sm) */
  settingsMobile?: SlickSettings;
  /** Optional: extra wrapper classes */
  className?: string;
  /** Optional: image height (px) */
  imageHeight?: number;
};

/* -------------------- Defaults -------------------- */
const DEFAULT_DESKTOP: SlickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // desktop/laptop default
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: false,
  pauseOnDotsHover: true,
  arrows: false,
  centerMode: false,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 1280, // tablets & small laptops
      settings: { slidesToShow: 2, slidesToScroll: 1, centerMode: false, centerPadding: "0px" },
    },
    {
      breakpoint: 768, // mobile
      settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false, centerPadding: "0px", dots: true },
    },
  ],
};

const DEFAULT_MOBILE: SlickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // strict 1-per-row on phones
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: false,
  pauseOnDotsHover: true,
  arrows: false,
  centerMode: false,
  centerPadding: "0px",
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 1, centerMode: false, centerPadding: "0px" } },
    { breakpoint: 1280, settings: { slidesToShow: 2, centerMode: false, centerPadding: "0px" } },
    { breakpoint: 9999, settings: { slidesToShow: 3, centerMode: true, centerPadding: "0px" } },
  ],
};

/* -------------------- Component -------------------- */
function _SliderCarousel({
  heading,
  subheading,
  items,
  settingsDesktop,
  settingsMobile,
  className = "",
  imageHeight = 280,
}: SliderCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Merge and ensure we still track current slide
  const desktopCfg: SlickSettings = {
    ...DEFAULT_DESKTOP,
    ...settingsDesktop,
    afterChange: (i: number) => {
      setCurrentSlide(i);
      settingsDesktop?.afterChange?.(i);
    },
  };

  const mobileCfg: SlickSettings = {
    ...DEFAULT_MOBILE,
    ...settingsMobile,
    afterChange: (i: number) => {
      setCurrentSlide(i);
      settingsMobile?.afterChange?.(i);
    },
  };

  return (
    <section className={`relative bg-white py-16 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 text-center">
        {heading && (
          <h2 className="poppins-800 text-4xl text-[#0B3C7D] md:text-5xl">{heading}</h2>
        )}
        {subheading && (
          <p className="poppins-400 mx-auto mt-2 max-w-3xl text-[#222] md:text-lg">
            {subheading}
          </p>
        )}
      </div>

      {/* Desktop / tablet */}
      <div className="mt-12 px-4 hidden sm:block">
        <Slider {...desktopCfg}>
          {items.map((card, index) => {
            const isActive = currentSlide === index;
            return (
              <motion.div
                key={`${card.title}-${index}`}
                className="px-2"
                animate={{ scale: isActive ? 1.05 : 0.95, y: isActive ? -10 : 0, transition: { duration: 0.3 } }}
              >
                <div className={`overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 ${isActive ? "shadow-2xl" : "opacity-90"}`}>
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={1200}
                    height={imageHeight}
                    className="w-full object-cover"
                    style={{ height: imageHeight }}
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="flex flex-col items-center px-6 py-6 text-center">
                    <h3 className="poppins-800 mb-2 text-[18px] text-[#0B3C7D] md:text-xl">{card.title}</h3>
                    <p className="text-[14px] text-gray-700 md:text-base">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Slider>
      </div>

      {/* Mobile */}
      <div className="mt-12 px-4 block sm:hidden">
        <Slider {...mobileCfg}>
          {items.map((card, index) => {
            const isActive = currentSlide === index;
            return (
              <motion.div
                key={`${card.title}-m-${index}`}
                className="px-2"
                animate={{ scale: isActive ? 1.05 : 0.95, y: isActive ? -10 : 0, transition: { duration: 0.3 } }}
              >
                <div className={`overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 ${isActive ? "shadow-2xl" : "opacity-90"}`}>
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={1200}
                    height={imageHeight}
                    className="w-full object-cover"
                    style={{ height: imageHeight }}
                    sizes="100vw"
                  />
                  <div className="flex flex-col items-center px-6 py-6 text-center">
                    <h3 className="poppins-800 mb-2 text-[18px] text-[#0B3C7D] md:text-xl">{card.title}</h3>
                    <p className="text-[14px] text-gray-700 md:text-base">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Slider>
      </div>

      {/* Mobile-only strict 1-per-row enforcement */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .slick-list { padding: 0 !important; }
          .slick-track { display: flex !important; align-items: stretch !important; }
          .slick-slide { height: auto !important; }
          .slick-slide > div {
            width: 100% !important;
            margin: 0 auto !important;
            display: flex !important;
            justify-content: center !important;
          }
          .slick-slide > div > div { width: 100% !important; max-width: 420px; }
        }
      `}</style>
    </section>
  );
}

export const SliderCarousel = memo(_SliderCarousel);
