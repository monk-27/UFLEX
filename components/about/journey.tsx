"use client";
import { motion } from "framer-motion"
import Image from "next/image"

const Journey = () => {
  return (
    <section className="mt-[30px] px-4 py-0 text-center sm:mt-8  sm:py-10 md:px-12">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl">Our Journey</h2>
        <p className="text-center mt-0 text-[16px] text-[#181818] sm:mt-2 md:text-[20px]" style={{ lineHeight: "124%" }}>
          Nearly four decades of innovation, growth, and excellence
        </p>

        <div className="space-y-8 mt-12 ">
          <div className="flex items-center justify-center">
            <Image
              src="/images/journey.png"
              height={863} width={1161} alt={""}

            />
          </div>
          <div className="relative h-[570px] w-full overflow-hidden mt-[30px] px-4 py-0 text-center sm:mt-8  sm:py-10 md:px-12 md:h-[580px]">
            {/* Background Image - Full Bleed */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/images/corp.png"
                fill
                className="object-contain object-center"
                alt="Sustainability"
                priority
                sizes="100vw"
              />
            </motion.div>

            {/* Header Bar */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-white py-4 md:py-6">
              <div className="mx-auto max-w-7xl px-5 md:px-20">
                <h2 className="text-center text-[24px]  manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl mb-12">
                  Corporate Presentation
                </h2>
              </div>
            </div>

            {/* Text Content */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-end px-5 pb-16 text-white md:bottom-20 md:pb-20 md:pl-20"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delayChildren: 0.3, staggerChildren: 0.3 },
                },
              }}
            >
              <motion.h3
                className="text-[20px] font-medium leading-tight sm:text-[28px] md:text-[32px]"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                Committed to achieving carbon neutrality by 2035
              </motion.h3>

              {/* <motion.p
          className="mt-2 max-w-2xl text-[14px] leading-relaxed opacity-90 sm:text-[16px] md:text-[18px]"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Sustainability and environmental stewardship are
          <br className="hidden sm:block" />
          at the forefront of our business practices.
        </motion.p> */}

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="mt-6"
              >
                <button className="flex items-center gap-2 rounded-md  bg-[#CE2027] px-6 py-3 text-sm font-medium text-white transition-all ">
                  Download
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M8 0L6.585 1.415L11.17 6H0V8H11.17L6.585 12.585L8 14L14 8L8 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          </div>


        </div>
      </div>
    </section>
  )
}
export default Journey;
