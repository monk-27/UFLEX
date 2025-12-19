
"use client";
import { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const items = [
  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Trust-respect23.jpg",
    title: "Trust & respect ",
    desc: "Proactively build inclusive and egalitarian partnerships with all stakeholders, through the virtues of honesty of purpose, mutual trust and respect.",
  },
  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Customer-value-creation22.jpg",
    title: "Customer value creation ",
    desc: "Enabling customers to become high-performance businesses through our total packaging solutions and creating long-term relationships by being responsive, relevant and consistently delivering value.",
  },
  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Innovation11.jpg",
    title: "Innovation",
    desc: "Strive to be the front runner in technology and business, actively contributing to the evolution of best practices in developing new and efficient packaging solutions to address customers’ dynamic needs.",
  },
  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Global-perspective04.jpg",
    title: "Global perspective ",
    desc: "Thinking globally and acting locally we leverage the power of global insight, relationships, collaborations and learnings to deliver exceptional packaging solutions for the clients.",
  },
  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Speed-in-all-directions-47.jpg",
    title: "Speed in all directions  ",
    desc: "Speed and efficiency in every activity and process responding to internal and external customers with a sense of urgency and dynamism is an integral part of our value system. ",
  },
   {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Socio-environmental-sustainability-26.jpg",
    title: "Socio-environmental sustainability ",
    desc: "Upholding that society and environment are cornerstones for sustainability, we support and promote inclusive social development and strive towards the conservation of the environment and protection of our planet.",
  },

];

export default function Philosopy() {
  const [currentSlide, setCurrentSlide] = useState(0);

const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,        // ❌ no infinite autoplay feel
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);




  return (
    <section className="relative bg-white pt-12">
      <div className="mx-auto max-w-7xl px-6 text-start">
        <h2 className="ttext-[24px] lato-600 text-[#117ABA] md:text-[28px] ">People’s philosophy</h2>
        <p className="text-start lato-400 mt-1 max-w-3xl text-gray-500 md:text-lg">
          Our staunch beliefs, our DNA - Our values .
        </p>
      </div>

       <section className="py-12 mx-auto max-w-7xl ">
        {/* Viewport */}
        <div ref={emblaRef} className="overflow-hidden">
          {/* Container */}
          <div className="flex gap-6">
            {items.map((card, index) => (
              <motion.div
                // key={card.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="
                flex-[0_0_100%]
  sm:flex-[0_0_50%]
  lg:flex-[0_0_32.01%]
  flex-shrink-0 gap-6
              "
              >
                <div className="block h-full">
                  <div className="group flex h-full flex-col overflow-hidden rounded-sm bg-gray-100 shadow-sm hover:shadow-md transition">
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="relative p-5 pl-8">
                      {/* Corner red line */}
                      {/* <span
                        className="absolute left-4 top-6 h-6 w-[2px] bg-[#D84A3B]"
                      /> */}

                      <h3 className="text-[18px] md:text-[20px] leading-tight text-[#117ABA]">
                        {card.title}
                      </h3>

                      <p className="mt-3 text-sm text-[#6D6E71]">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={scrollPrev}
            className="rounded-full border border-gray-400 p-3 hover:bg-gray-100 transition"
          >
            <ChevronLeft className="h-5 w-5 text-gray-400" />
          </button>

          <button
            onClick={scrollNext}
            className="rounded-full border border-gray-400 p-3 hover:bg-gray-100 transition"
          >
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </button>
        </div>
      </section>
    </section>
  );
  
}
