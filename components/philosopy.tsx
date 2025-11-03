
"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3500,
  //   pauseOnHover: false,
  //   pauseOnDotsHover: true,
  //   arrows: false,
  //   centerMode: true,
  //   centerPadding: "0px",
  //   afterChange: (index:any) => setCurrentSlide(index),
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         centerMode: true,
  //         centerPadding: "20px",
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         centerMode: false,
  //         centerPadding: "0px",
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         centerMode: false,
  //         centerPadding: "0px",
  //       },
  //     },
  //   ],
  // };
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // ✅ default desktop/laptop
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: false,
  pauseOnDotsHover: true,
  arrows: false,
  centerMode: false,
  centerPadding: "0px",
  afterChange: (index: any) => setCurrentSlide(index),
  responsive: [
    {
      breakpoint: 1280, // ✅ tablets & small laptops
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 768, // ✅ mobile
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: "0px",
        dots: true,
      },
    },
  ],
};
const settingsmob = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,            // mobile-first: 1 card
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: false,
  pauseOnDotsHover: true,
  arrows: false,
  centerMode: false,          // no peeking on mobile
  centerPadding: "0px",
  afterChange: (index: any) => setCurrentSlide(index),
  responsive: [
    {
      breakpoint: 1024,       // < 1024px -> still 1 (explicitly ok)
      settings: { slidesToShow: 1, centerMode: false, centerPadding: "0px" },
    },
    {
      breakpoint: 1280,       // < 1280px -> 2 cards (tablet/large tablet)
      settings: { slidesToShow: 2, centerMode: false, centerPadding: "0px" },
    },
    {
      breakpoint: 9999,       // desktop and beyond -> 3 cards, can enable center
      settings: { slidesToShow: 3, centerMode: true, centerPadding: "0px" },
    },
  ],
}



  return (
    <section className="relative bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-[24px]  poppins-600 text-[#117ABA] md:text-[48px] md:text-5xl">People’s philosophy</h2>
        <p className="poppins-400 mx-auto mt-2 max-w-3xl text-[#222] md:text-lg">
          Our staunch beliefs, our DNA - Our values
        </p>
      </div>

      <div className="mt-12 px-4 hidden sm:block">
        <Slider {...settings}>
          {items.map((card, index) => {
            const isActive = currentSlide === index;
            return (
              <motion.div
                key={index}
                className="px-2"
                animate={{
                  scale: isActive ? 1.05 : 0.95,
                  y: isActive ? -10 : 0,
                  transition: { duration: 0.3 },
                }}
              >
                <div
                  className={`overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 ${
                    isActive ? "shadow-2xl" : "opacity-90"
                  }`}
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={800}
                    height={500}
                    className="h-[280px] w-full object-cover"
                  />
                  <div className="flex flex-col items-center px-6 py-6 text-center">
                    <h3 className="poppins-800 mb-2 text-[18px] text-[#117ABA] md:text-xl">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-gray-700 md:text-base">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Slider>
      </div>
        <div className="mt-12 px-4 block sm:hidden">
        <Slider {...settingsmob}>
          {items.map((card, index) => {
            const isActive = currentSlide === index;
            return (
              <motion.div
                key={index}
                className="px-2"
                animate={{
                  scale: isActive ? 1.05 : 0.95,
                  y: isActive ? -10 : 0,
                  transition: { duration: 0.3 },
                }}
              >
                <div
                  className={`overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 ${
                    isActive ? "shadow-2xl" : "opacity-90"
                  }`}
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={800}
                    height={500}
                    className="h-[280px] w-full object-cover"
                  />
                  <div className="flex flex-col items-center px-6 py-6 text-center">
                    <h3 className="poppins-800 mb-2 text-[18px] text-[#117ABA] md:text-xl">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-gray-700 md:text-base">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Slider>
      </div>
      <style jsx global>{`
      @media (max-width: 768px) {
        .slick-list { padding: 0 !important; }
        .slick-track { display: flex !important; align-items: stretch !important; }
        .slick-slide { height: auto !important; }
        .slick-slide > div { width: 100% !important; margin: 0 auto !important; display: flex !important; }
        .slick-slide > div > div { width: 100% !important; max-width: 420px; } /* optional max width */
      }
    `}</style>
    </section>
  );
  
}
