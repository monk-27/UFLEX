"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Slider, { Settings as SlickSettings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatedSection } from "./animated-section";
import { useState } from "react";

export type AccreditationItem = { image: string };

export type AccreditationsSliderProps = {
    /** Pass images from the parent */
    items: AccreditationItem[];
    /** Optional heading. Defaults to "Accreditations" */
    heading?: string;
    /** Optional slick overrides */
    settings?: SlickSettings;
};

const CARD_COLORS = [
    { border: "border-gray-100", bg: "bg-gray-50/70", ring: "ring-gray-200" },
    // { border: "border-blue-400", bg: "bg-blue-50/70", ring: "ring-blue-200" },
    // { border: "border-pink-400", bg: "bg-pink-50/70", ring: "ring-pink-200" },
    // { border: "border-purple-400", bg: "bg-purple-50/70", ring: "ring-purple-200" },
    // { border: "border-orange-400", bg: "bg-orange-50/70", ring: "ring-orange-200" },
    // { border: "border-yellow-400", bg: "bg-yellow-50/70", ring: "ring-yellow-200" },
];

export default function AccreditationsSlider({
    items,
    heading = "Accreditations",
    settings,

}: AccreditationsSliderProps) {
    // Base slider config (desktop: 4, tablet: 2–3, mobile: 1)
    //   const sliderSettings: SlickSettings = {
    //     dots: true,
    //     arrows: false,
    //     infinite: true,
    //     autoplay: true,
    //     autoplaySpeed: 2500,
    //     pauseOnHover: true,
    //     speed: 600,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     centerMode: false,
    //     responsive: [
    //       { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1, centerMode: false } },
    //       { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, centerMode: false } },
    //       { breakpoint: 768,  settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false } }, // ← phones
    //     ],
    //     ...settings,
    //   };

    const [currentSlide, setCurrentSlide] = useState(0);

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

    const desktopCfg: SlickSettings = {
        ...DEFAULT_DESKTOP,
        afterChange: (i: number) => {
            setCurrentSlide(i);
            //   settingsDesktop?.afterChange?.(i);
        },
    };

    const mobileCfg: SlickSettings = {
        ...DEFAULT_MOBILE,
        afterChange: (i: number) => {
            setCurrentSlide(i);
            //   settingsMobile?.afterChange?.(i);
        },
    };
    return (
        <div className="bg-gradient-to-b from-white to-slate-50">
            {/* Heading */}
            <motion.section
                className="mx-auto max-w-6xl px-6 text-center sm:px-0 pt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
            >
                <motion.h3
                    className="text-[24px] poppins-600 text-[#117ABA] md:text-[48px] md:text-5xl md:mb-8"
                    initial={{ opacity: 0, y: -16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    {heading}
                </motion.h3>
            </motion.section>

            {/* Slider */}
            <AnimatedSection>
                <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-0 pb-20">
                    <div className=" hidden sm:block">
                        <Slider {...desktopCfg}>
                            {items.map((it, idx) => {
                                const c = CARD_COLORS[idx % CARD_COLORS.length];
                                return (
                                    <div key={it.image + idx} className="px-2 sm:px-3">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.35 }}
                                            className={`relative aspect-square overflow-hidden rounded-2xl border-2 ${c.border} ${c.bg} shadow ring-4 ${c.ring}`}
                                        >
                                            <Image
                                                src={it.image}
                                                alt={`Accreditation ${idx + 1}`}
                                                fill
                                                className="object-cover rounded-2xl"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                priority={idx === 0}
                                            />
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                    <div className=" block sm:hidden">
                        <Slider {...mobileCfg}>
                            {items.map((it, idx) => {
                                const c = CARD_COLORS[idx % CARD_COLORS.length];
                                return (
                                    <div key={it.image + idx} className="px-2 sm:px-3">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.35 }}
                                            className={`relative aspect-square overflow-hidden rounded-2xl border-2 ${c.border} ${c.bg} shadow ring-4 ${c.ring}`}
                                        >
                                            <Image
                                                src={it.image}
                                                alt={`Accreditation ${idx + 1}`}
                                                fill
                                                className="object-cover rounded-2xl"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                priority={idx === 0}
                                            />
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                    {/* Hard guarantee: 1 card per row on mobile, no peeking */}
                    <style jsx global>{`
            .slick-slide > div { display: block; }
            .slick-dots li button:before { color: #255994 !important; opacity: 0.6; }
            .slick-dots li.slick-active button:before { opacity: 1; }
            @media (max-width: 768px) {
              .slick-list { padding: 0 8px !important; }
              .slick-track { display: flex !important; align-items: stretch !important; }
              .slick-slide { height: auto !important; }
              .slick-slide > div { width: 100% !important; margin: 0 auto !important; }
            }
          `}</style>
                </div>
            </AnimatedSection>
        </div>
    );
}
