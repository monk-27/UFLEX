"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedSection } from "@/components/animated-section"
import { GradientButton } from "@/components/gradient-button"
import Link from "next/link"
import { motion } from "framer-motion"
import Careers from "@/components/careers"
import Philosopy from "@/components/philosopy"
import LearnStatus from "@/components/learn"
import CarresStatus from "@/components/careers-awards"
import Image from "next/image"

export default function Page() {
  return (
    <main className="bg-white">
      <SiteHeader />
      <Careers/>
      <Philosopy/>
      <LearnStatus/>
      <CarresStatus/>



        <section className="relative w-full overflow-hidden px-4 pb-12 mt-6">
            <div className="max-w-7xl mx-auto px-4">
      
              {/* ================= Main Content ================= */}
              <div className="grid lg:grid-cols-2 gap-10 items-start py-4 lg:py-1 mt-6">
      
                {/* ---------- Text Column ---------- */}
                <div className="space-y-4">
                  {/* <div className="flex space-x-1.5 ">
                    <Image
                    src="/images/ula.png"
                    width={90}
                    height={15}
                    alt="UFlex Learning Academy"
                    priority
                  />
                     <motion.h1
                    className="text-[24px] lato-600 text-[#117ABA] md:text-[28px] leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    UFlex Learning Academy
                  </motion.h1>
      
                  
                    </div> */}
                 
      
                  <motion.p
                    className="lato-400 text-sm md:text-base leading-relaxed text-black"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    Join us, and be part of a movement that's changing the world, one package at a time.
                    <br />
                    <br />
                    UFlex offers job seekers more than a job. It offers them a lifetime of growth with a number of opportunities for continuous development and growth in assorted fields of business.
                    <br />
                    <br />
                   If you are looking for a rewarding career, you may write to us at: hr@uflexltd.com
                  </motion.p>
                  <a
                            href="https://aa193.taleo.net/careersection/ex/jobsearch.ftl?lang=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-start rounded-sm texts-md lato-600 bg-[#117ABA] text-white w-auto  py-2 mt-4 px-12 inline-block"
                        >
                            Apply Now
                        </a>
                </div>
      
                {/* ---------- Image Column ---------- */}
                <motion.div
                  className="relative w-full aspect-[16/10] overflow-hidden "
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-banners/life_at_image256.jpg"
                    alt="UFlex Learning Academy"
                    fill
                    className="object-cover rounded-sm"
                    priority
                  />
                  
                </motion.div>
                
              </div>
              
      
              {/* ================= CTA Section ================= */}
            
      
            </div>
          </section>

      

      <SiteFooter />
    </main>
  )
}

