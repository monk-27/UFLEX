
"use client"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const DesktopSustainabilityComp = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [overlapPx, setOverlapPx] = useState(0)

  // Animate only while THIS section is in view
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"], // start near entering, end near leaving
  })

  // Measure container width → 20% overlap (each card moves half of that)
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ro = new ResizeObserver(() => {
      const w = el.clientWidth || 0
      setOverlapPx(w * 0.2) // 20% of container width
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Each card moves by half the overlap into the other
  const halfOverlap = overlapPx / 4

  // Keyframes:
  // 0   -> subtle fly-in from sides
  // 0.5 -> reached mid viewport: overlap locked (±halfOverlap)
  // 1   -> stay overlapped
  const xLeft = useTransform(scrollYProgress, [0, 0.5, 1], [-120, halfOverlap, halfOverlap])
  const xRight = useTransform(scrollYProgress, [0, 0.5, 1], [120, -halfOverlap, -halfOverlap])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1])

  return (
    <div className="hidden sm:block">
      <div ref={sectionRef} className="relative mx-auto flex min-h-screen max-w-[90%] items-center justify-center">
        {/* Text Card (on top) */}
        <motion.div
          style={{ x: xLeft, opacity }}
          className="will-change-transform z-10 h-[60vh] w-[48%] rounded bg-white text-[#2A2A2A] shadow"
        >
          <div className="subheads flex h-[79px] w-full items-center justify-center overflow-hidden rounded text-4xl">
            <span className="subheadtext text-center text-[36px]">Sustainability</span>
          </div>
          <div className="content mx-auto flex w-[80%] flex-col items-center p-8">
            <p className="poppins-800 xxl:text-[24px] mb-6 text-center text-[18px] leading-tight">
              Committed to achieving carbon neutrality by 2035
              <br />
              <br />
              Sustainability and environmental stewardship are at the forefront of our business practices.
              <br />
              <br />
              Our business strategies align with our ESG vision, and we consistently strive to deliver innovative and
              responsible packaging solutions.
            </p>

            <button className="subheads px-10 py-2 text-white transition-colors rounded-3xl">View Details</button>
          </div>
        </motion.div>

        <motion.div
          style={{ x: xRight, opacity }}
          className="will-change-transform z-0 h-[70vh] w-[42%] overflow-hidden rounded"
        >
          <div className="relative h-full w-full">
            <Image
              src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-images/image49.webp"
              alt="Sustainability"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const MobileSustainabilityComp = () => {
  return (
    <div className="mx-auto block max-w-[90%] flex-col items-center justify-center sm:hidden">
      <div className="relative h-[40vh] w-full">
        <Image
          src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-images/image49.webp"
          alt="Sustainability"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="mobsubheads h-[48.419px] w-full py-2">
        <h2 className="subheadtext mb-4 text-[24px]">
          <span>Sustainability</span>
        </h2>
      </div>
      <div className="w-full rounded-lg bg-white p-6 text-[#2A2A2A] shadow-lg">
        <div className="text-center">
          <p className="mobsubcontents mb-6">
            Committed to achieving carbon neutrality by 2035 Sustainability and environmental stewardship are at the
            forefront of our business practices.
            <br />
            <br />
            Our business strategies align with our ESG vision, and we consistently strive to deliver innovative and
            responsible packaging solutions.
          </p>
          <button className="mobsubheads mobbutton rounded-sm px-10 py-3 transition-colors rounded-3xl">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

const SustainabilityComp = () => {
  return (
    <div className="relative">
      <DesktopSustainabilityComp />
      <MobileSustainabilityComp />
    </div>
  )
}

export default SustainabilityComp
