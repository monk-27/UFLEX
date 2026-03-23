

"use client"

import { motion } from "framer-motion"
import { GradientButton } from "./gradient-button"
import Link from "next/link"

export function HeroVideo() {
  return (
    <div className="relative mx-auto h-[30vh] w-full overflow-hidden bg-white px-4 sm:h-[720px] xl:px-0">
      {/* Background Video */}
      <motion.video
        className="absolute left-0 top-0 h-full w-full bg-white object-fit sm:object-cover"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <source src="/video/herovideo1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Dark Overlay */}
      {/* <motion.div
        className="absolute inset-0 bg-black bg-opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      ></motion.div> */}

     
    </div>
  )
}

