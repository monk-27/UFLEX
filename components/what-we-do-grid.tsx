

"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const items = [
  {
    title: "Packaging Films and PET Resin",
    href: "/packaging-films-business",
    desc: "High-performance BOPET/BOPP films for diverse applications.",
    img: "/images/flex.jpeg"
    // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Packaging-Films-Business-faq-icon21.svg",
  },
   {
    title: "Chemicals",
    href: "/chemicals-business",
    desc: "Speciality chemicals powering packaging performance.",
    img: "/images/chem.jpeg"
    // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Chemicals-Business-faq-icon20.svg",
  },
  {
    title: "Aseptic Packaging",
    href: "/aseptic-packaging-business",
    desc: "Safe, shelf-stable solutions with extended freshness.",
    img: "/images/aseptic.png"

    // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Aseptic-Packaging-Business-faq-icon56.svg",
  },
  {
    title: "Flexible Packaging",
    href: "/flexible-packaging-business",
    desc: "Custom structures for brand impact and efficiency.",
    img: "/images/flexible.png"

    // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Flexible-Packaging-Business-faq-icon36.svg",
  },
  
 
  {
    title: "Holography",
    href: "/holography-business",
    desc: "Security and decorative holographic solutions.",
    img: "/images/holographys.png"

    // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Holography-Business-faq-icon47.svg",
  },
  {
    title: "Engineering",
    href: "/engineering-business",
    desc: "Turnkey packaging machinery and systems.",
    img: "/images/engg.png"

    // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Engineering-Business-faq-icon45.svg",
  },
  {
    title: "Printing Cylinders",
    href: "/printing-cylinder-business",
    desc: "Precision cylinders for consistent print quality.",
    img: "/images/cyls.png"
    // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/Printing-Cylinder-Business-faq-icon03.svg",
  },
  {
    title: "FlexiTubes",
    href: "/flexitube-business",
    desc: "Durable, brandable tubes for personal care and more.",
    img: "/images/flexible.jpeg"

    // img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/category/icons/FlexiTube-Business-faq-icon59.svg",
  },
]

export default function BusinessCardsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);


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
    <section className="relative ">


      <div className="mt-12 px-4 hidden sm:block">
        <Slider {...settings}>
          {items.map((card, index) => {
            const isActive = currentSlide === index;
            return (
              <motion.div
                key={index}
                className="px-2  "

              >

                <div className="flex h-full flex-col bg-gray-100 shadow-sm rounded-lg gap-2">
                  {/* Photo: exactly like the shot — top half, 16:9 */}
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"

                    />
                  </div>


                  {/* Content */}
                  <div className="p-5 items-start ">
                    {/* Title with slim red accent bar */}
                    <div className="flex items-start gap-2 flex-nowrap justify-start">
                      <span className="inline-block h-6 w-[2px] rounded bg-[#D84A3B]" />
                      <h3 className="text-left text-[18px] md:text-[20px] manrope-500 leading-tight text-[#117ABA]">
                        {card.title}
                      </h3>
                    </div>


                    <p className="items-start mt-3 text-left manrope-400 text-[#6D6E71]">
                      {card.desc}
                    </p>


                    {/* Arrow link – thin red arrow, aligned left */}
                    <Link
                      href={card.href}
                      className="mt-6 flex items-center gap-2 text-[#D84A3B] hover:opacity-80 justify-start"
                      aria-label={`Open ${card.title}`}
                    >
                      <svg
                        width="38"
                        height="12"
                        viewBox="0 0 38 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 6H34"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M29.5 1L35 6L29.5 11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

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
              // animate={{
              //   scale: isActive ? 1.05 : 0.95,
              //   y: isActive ? -10 : 0,
              //   transition: { duration: 0.3 },
              // }}
              >
                {/* <div
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
                    <h3 className="manrope-800 mb-2 text-[18px] text-[#0B3C7D] md:text-xl">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-gray-700 md:text-base">{card.desc}</p>
                  </div>
                </div> */}
                <div className="bg-gray-100 md:grid md:grid-cols-2 h-full">
                  <div className="relative h-48 md:h-auto">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"

                    />
                  </div>
                  <div className="p-5 flex flex-col">
                    <div className="flex items-center gap-2 flex-nowrap">
                      <span className="inline-block h-4 w-[2px] rounded bg-[#D84A3B]" />
                      <h3 className="text-[18px] md:text-[20px] manrope-500 leading-tight text-[#117ABA]">
                        {card.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed manrope-400 text-[#6D6E71]">{card.desc}</p>
                    <Link
                      href={card.href}
                      className="mt-6 inline-flex items-center gap-2 text-[#D84A3B] hover:opacity-80"
                      aria-label={`Open ${card.title}`}
                    >
                      <svg width="38" height="12" viewBox="0 0 38 12" fill="none" aria-hidden="true">
                        <path d="M1 6H34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M29.5 1L35 6L29.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Slider>
      </div>
      <style jsx global>{`
  @media (max-width: 768px) {
    .slick-list {
      padding: 0 !important;
    }
    .slick-track {
      display: flex !important;
      align-items: stretch !important;
    }
    .slick-slide {
      height: auto !important;
    }
    .slick-slide > div {
      width: 100% !important;
      margin: 0 auto !important;
      display: flex !important;
    }
    .slick-slide > div > div {
      width: 100% !important;
      max-width: 420px;
    }
  }


  .slick-dots {
  
    margin-top: 24px; /* adjust as needed */
    position: static !important; /* ensures it stays below slides */
  }
.slick-dots li.slick-active button:before {
    color: #117ABA !important; /* blue shade */
    opacity: 2;
  }
  /* Optional: center the dots perfectly */
  .slick-dots li button:before {
    font-size: 10px; /* smaller dots look cleaner on mobile */
  }
`}</style>

    </section>
  );
}
