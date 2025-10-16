
// "use client"
// import { useEffect, useState, useCallback } from "react"
// import useEmblaCarousel from "embla-carousel-react"
// import Autoplay from "embla-carousel-autoplay"
// import { motion } from "framer-motion"
// import Image from "next/image"

// const items = [
//   {
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/A-Trusted-Partner-to-Global-Brands-in-150+-Countries17.jpg",
//     title: "A trusted partner to global brands in 150+ countries",
//     desc: "Delivering excellence in sustainable packaging solutions, we empower global brands worldwide with innovative technologies and unmatched reliability.",
//   },
//   {
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/page-banners/life_at_image10.webp",
//     title: "End-to-end packaging solutions for diverse industries",
//     desc: "UFlex serves as a one-stop-shop flexible packaging solution provider serving varied sectors spanning FMCG, consumer product goods, pharmaceuticals, building materials, automobiles, and more.",
//   },
//   {
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Indias-First-NABL-Accredited48.jpg",
//     title: "India's first NABL- accredited R&D lab certified to ISO/IEC 17025:2017 standards",
//     desc: "Located in Noida, our state-of-the-art facility leads innovation in inks, adhesives, and coatings with globally recognized quality and precision. ",
//   },
//   {
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Pioneering-India-on-the-Global-Map-for-Aseptic-Packaging35.jpg",
//     title: "Putting India on the global map for aseptic packaging",
//     desc: "As the first Indian company to achieve this milestone, we proudly represent India in the global aseptic packaging industry with innovative and sustainable solutions. ",
//   },
//   {
//     img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Comprehensive-and-Sustainable-Packaging-Ecosystems25.jpg",
//     title: "Comprehensive and sustainable packaging ecosystems",
//     desc: "From producing films, converting, engineering, printing cylinders, chemicals, holography, and aseptic packaging to recycling solutions, we deliver eco-friendly packaging solutions for a sustainable future. ",
//   },
// ]

// export default function WhatSetsUsApart() {
//   const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" }, [
//     Autoplay({ delay: 3500, stopOnInteraction: false }),
//   ])
//   const [selectedIndex, setSelectedIndex] = useState(0)

//   const onSelect = useCallback(() => {
//     if (!embla) return
//     setSelectedIndex(embla.selectedScrollSnap())
//   }, [embla])

//   useEffect(() => {
//     if (!embla) return
//     embla.on("select", onSelect)
//     onSelect()
//   }, [embla, onSelect])

//   return (
//     <section className="relative bg-[#bcd3f0]/30 py-16">
//       <div className="mx-auto max-w-6xl px-6 text-center">
//         <h2 className="poppins-800 text-4xl text-[#0B3C7D] md:text-5xl">What Sets Us Apart</h2>
//         <p className="poppins-400 mx-auto mt-2 max-w-3xl text-[#222] md:text-lg">
//           At UFlex, research-led innovation is the pillar of our business strategy.
//         </p>
//       </div>

//       <div className="mt-12 overflow-hidden" ref={emblaRef}>
//         <div className="flex">
//           {items.map((card, index) => {
//             const isActive = selectedIndex === index
//             return (
//               <motion.div
//                 key={index}
//                 className="relative flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_33%] px-4 transition-transform duration-500 ease-out"
//                 animate={{
//                   scale: isActive ? 1.05 : 0.92,
//                   y: isActive ? -20 : 0,
//                 }}
//               >
//                 <div
//                   className={`overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 ${
//                     isActive ? "shadow-2xl" : "opacity-80"
//                   }`}
//                 >
//                   <Image
//                     src={card.img}
//                     alt={card.title}
//                     width={800}
//                     height={500}
//                     className="h-[280px] w-full object-cover"
//                   />
//                   <div className="flex flex-col items-center px-6 py-6 text-center">
//                     <h3 className="font-EB-extrabold mb-2 text-[18px] text-[#0B3C7D] md:text-xl">{card.title}</h3>
//                     <p className="text-[14px] text-gray-700 md:text-base">{card.desc}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             )
//           })}
//         </div>
//       </div>

//       {/* Dot indicators */}
//       <div className="mt-6 flex justify-center gap-2">
//         {items.map((_, i) => (
//           <button
//             key={i}
//             className={`h-2.5 w-2.5 rounded-full transition-all ${
//               i === selectedIndex ? "bg-[#0B3C7D]" : "bg-gray-400/50"
//             }`}
//             onClick={() => embla && embla.scrollTo(i)}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }
"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/A-Trusted-Partner-to-Global-Brands-in-150+-Countries17.jpg",
    title: "A trusted partner to global brands in 150+ countries",
    desc: "Delivering excellence in sustainable packaging solutions, we empower global brands worldwide with innovative technologies and unmatched reliability.",
  },
  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/page-banners/life_at_image10.webp",
    title: "End-to-end packaging solutions for diverse industries",
    desc: "UFlex serves as a one-stop-shop flexible packaging solution provider serving varied sectors spanning FMCG, consumer product goods, pharmaceuticals, building materials, automobiles, and more.",
  },
  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Indias-First-NABL-Accredited48.jpg",
    title: "India's first NABL-accredited R&D lab certified to ISO/IEC 17025:2017 standards",
    desc: "Located in Noida, our state-of-the-art facility leads innovation in inks, adhesives, and coatings with globally recognized quality and precision.",
  },
  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Pioneering-India-on-the-Global-Map-for-Aseptic-Packaging35.jpg",
    title: "Putting India on the global map for aseptic packaging",
    desc: "As the first Indian company to achieve this milestone, we proudly represent India in the global aseptic packaging industry with innovative and sustainable solutions.",
  },
  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Comprehensive-and-Sustainable-Packaging-Ecosystems25.jpg",
    title: "Comprehensive and sustainable packaging ecosystems",
    desc: "From producing films, converting, engineering, printing cylinders, chemicals, holography, and aseptic packaging to recycling solutions, we deliver eco-friendly packaging solutions for a sustainable future.",
  },
];

export default function WhatSetsUsApart() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    afterChange: (index:any) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <section className="relative bg-[#bcd3f0]/30 py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="poppins-800 text-4xl text-[#0B3C7D] md:text-5xl">What Sets Us Apart</h2>
        <p className="poppins-400 mx-auto mt-2 max-w-3xl text-[#222] md:text-lg">
          At UFlex, research-led innovation is the pillar of our business strategy.
        </p>
      </div>

      <div className="mt-12 px-4">
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
                    <h3 className="font-EB-extrabold mb-2 text-[18px] text-[#0B3C7D] md:text-xl">
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
    </section>
  );
}