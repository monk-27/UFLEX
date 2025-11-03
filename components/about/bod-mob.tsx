"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
interface Director {
  name: string
  position: string
  bio: string
  img: string
}
export default function BodMob() {
  const directors: Director[] = [
  {
    name: "Mr. Ashok Chaturvedi",
    position: "Chairman and Managing Director",
    bio:
      "Mr. Ashok Chaturvedi is a first-generation entrepreneur and the founder of the UFlex Group. His dynamic leadership, long-term vision, and value-driven business strategy have established UFlex Limited as the largest flexible packaging and solutions company in India and a recognized global player in polymer sciences. He is considered the 'Father of the flexible packaging industry in India'",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Ashok-Chaturvedi-(BOD)42.jpg",
  },
  {
    name: "Mr. Jeevaraj Gopal Pillai",
    position: "Whole Time Director",
    bio:
      "Mr. Jeevaraj Pillai brings over 35 years of experience in packaging and packaging technology, with expertise in printing cylinders, packaging films, and advanced flexible packaging material conversion. As Director-Sustainability, he leads the development and implementation of the company's ESG strategy, along with the development of sustainable products and solutions. He has been serving on the board of UFlex Limited as a whole-time director since November 14, 2023. His extensive background in the industry is complemented by his qualifications in mechanical engineering and an MBA.",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Jeevaraj-Gopal-Pillai-(BOD)05.jpg",
  },
  {
    name: "Mr. Paresh Nath Sharma",
    position: "Independent Director",
    bio:
      "Mr. Paresh Nath Sharma has been serving on the board of UFlex Limited as an independent director since February 11, 2022. A science graduate and a fellow member of the Institute of Chartered Accountants of India (ICAI), he has over four and a half decades of experience in finance, audit, export, personnel, and administration. Throughout his career, he has worked with various organizations, including Sir Ganga Ram Hospital, MMTC Limited, the Airport Authority of India, National Small Industries Corporation Limited, and Punjab State Civil Supplies Corporation Limited, among others.",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Paresh-Nath-Sharma47.jpg",
  },
  {
    name: "Mr. Sujit Kumar Varma",
    position: "Independent Director",
    img:
      "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Sujit-Kumar-Varma06.jpg",
    bio: "Mr. Varma has been a board member of UFlex Limited since February 14, 2023, serving as an independent director. He brings over three decades of experience in retail credit, trade finance, international banking, risk management, and compliance. Mr. Varma has also been associated with the State Bank of India (SBI), where he held several key positions, including Chief Executive Officer in New York, General Manager– mid-corporate regional office in Mumbai, and Chief General Manager– international banking. He retired from SBI as Deputy Managing Director of the Corporate Accounts Group in January 2021.",
  },
  {
    name: "Mr. Ghyanendra Nath Bajpai",
    position: "Independent Director",
    bio:
      "Mr. Bajpai has been serving as an independent director on the board of UFlex Limited since April 17, 2023. A prominent figure in India's business community, he has previously held distinguished roles, including Chairman of the Securities and Exchange Board of India (SEBI) and Chairman of the Life Insurance Corporation of India (LIC). Additionally, he was the Chairman of the Corporate Task Force for the International Organization of Securities Commissions and the Chairperson of the Insurance Institute of India. Currently, he serves as Non-Executive Chairman and Non-Executive Director for several corporations across India.",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mr.-Ghyanendra-Nath-Bajpai25.jpg",
  },
  {
    name: "Mrs. Rashmi Verma",
    position: "Independent Woman Director",
    bio:
      "Mrs. Rashmi Verma, IAS (retired), brings over 36 years of extensive experience across various sectors. She has been a member of the board of UFlex Limited since May 26, 2023. She is a former secretary for tourism and textiles at the Government of India and has also served as Secretary of the Ministry of Textiles and Additional Secretary of the Department of Revenue, Ministry of Finance. Currently, she serves as an independent director on several boards, including HT Media Limited and PTC India Limited.",
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/Mrs.-Rashmi-Verma19.jpg",
  },
]
  ;

  return (
    <motion.section
      className="relative grid grid-cols-3 bg-white px-4 py-12 sm:py-28 md:px-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title Section with Animation */}
      <motion.div
        className="col-span-3 place-content-center lg:col-span-1"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-[24px]  poppins-600 text-[#117ABA] md:text-[48px] md:text-5xl">
          Board Of Directors
        </h2>
      </motion.div>

      {/* Swiper Section with Animation */}
      <motion.div
        className="relative col-span-3 shadow-md lg:col-span-2"
        // style={{ boxShadow: "rgb(131 131 131) 0px 0px 7px" }}

        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Swiper Slider with Navigation */}
        <div className="relative flex items-center justify-center">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            speed={1000}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className="w-full max-w-4xl"
          >
            {directors.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  // className="relative m-3 mb-8 bg-white p-6"
                  className="relative mb-8 bg-white p-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  {/* Image & Testimonial Content */}
                  <div className="grid min-h-[400px] grid-cols-3 place-content-center items-center justify-center gap-1">
                    <div className="col-span-3 flex place-content-center items-center justify-center lg:col-span-1">
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        width={199}
                        height={185}
                        className="w-50 h-45 rounded-md object-cover"
                      />
                    </div>
                    {/* Testimonial Text */}
                    <div className="col-span-3 mt-8 flex h-full flex-col place-content-center justify-between lg:col-span-2 lg:mt-0">
                      <div className="text-sm poppins-400 text-center  text-gray-600">
                        
                        {testimonial.bio}
                        
                      </div>
                      <div>
                        <h4 className="poppins-600 mt-4 text-right text-gray-800">
                          {testimonial.name}
                        </h4>
                        <p className="poppins-400 text-right text-sm text-gray-500">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Navigation Arrows Positioned Outside */}
          <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform">
            <div className="swiper-button-prev"></div>
          </div>
          <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform">
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
