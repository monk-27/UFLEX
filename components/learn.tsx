
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LearnStatus() {
  return (
    <section className="relative w-full overflow-hidden px-4 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="flex justify-center text-center pt-2">
            <div className="flex space-x-0.5">


              {/* <Image
                src="/images/ula.png"
                width={90}
                height={15}
                alt="UFlex Learning Academy"
                priority
              /> */}
              <motion.h1
                className="text-[24px] lato-700 text-[#117ABA] md:text-[42px]  leading-tight"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* UFlex Learning Academy */}
                Learn with UFlex
              </motion.h1>
            </div>


          </div>

        </div>

        {/* ================= Main Content ================= */}
        <div className="grid lg:grid-cols-2 gap-10 items-start py-4 lg:py-4">

          {/* ---------- Text Column ---------- */}
          <div className="space-y-4">



           <motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="text-[14px] md:text-[18px] leading-relaxed lato-400 text-black space-y-5 md:space-y-7 text-justify hyphens-auto"
>
  <p>
    <span className="lato-700">
      The UFlex Learning Academy fosters learning and development through a range of
      off-the-shelf digital, blended and classroom courses on a wide range of subjects.
    </span>
  </p>

  <p>
    The Academy brings together a range of off-the-shelf digital, blended, and classroom
    courses on a wide range of business-driven subjects, delivered through our secure
    and accessible online platform. Our customized programs cater to the needs of every
    individual, giving them an opportunity to excel in their career.
  </p>

  <p>
    Through our learning modules and subject matter experts, we strive to create a
    culture of learning and upskilling our employees across the organization.
  </p>
</motion.div>
             <p className="text-[14px] md:text-[18px] leading-relaxed lato-700 text-[#117ABA] text-base mb-3 ">
            {/* Ready to elevate your career? Connect with us: */}
            To know more about the Academy, write to us at:
          </p>

          <a
            href="mailto:uflexlearningacademy@uflexltd.com"
            className="text-[14px] md:text-[18px] text-black leading-relaxed lato-700 inline-flex items-center lato-600 underline underline-offset-4  transition-colors duration-200 hover:text-[#117ABA]"
          >
            uflexlearningacademy@uflexltd.com
          </a>
          </div>

          {/* ---------- Image Column ---------- */}
          <motion.div
            className="relative w-full aspect-[16/12] overflow-hidden "
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/awards/uln.png"
              alt="UFlex Learning Academy"
              fill
              className="object-cover rounded-sm"
              priority
            />
          </motion.div>
        </div>

        {/* ================= CTA Section ================= */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-6 text-center"
        >
         
        </motion.div> */}

      </div>
    </section>
  );
}
