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
         


        </div>
      </div>
    </section>
  )
}
export default Journey;
