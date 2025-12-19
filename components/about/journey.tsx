"use client";
import { motion } from "framer-motion"
import Image from "next/image"

const Journey = () => {
  return (
    <section className="mt-[30px] px-4 py-0 text-center sm:mt-8  sm:py-10 md:px-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-start text-[24px] lato-400 text-[#117ABA] md:text-[28px] ">Our Journey</h2>
        <p className="text-start mt-0 text-[16px] text-[#181818] sm:mt-2 md:text-[20px]" style={{ lineHeight: "124%" }}>
          Nearly four decades of innovation, growth, and excellence.
        </p>

        <div className="space-y-8 mt-12 ">
          <div className="flex items-center justify-center">
            <Image
              src="/images/journey.gif"
              height={863} width={1161} alt={""}

            />
          </div>
         


        </div>
      </div>
    </section>
  )
}
export default Journey;
