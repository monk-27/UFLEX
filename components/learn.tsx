
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LearnStatus() {
  return (
    <section className="relative w-full overflow-hidden px-4 pb-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= Main Content ================= */}
        <div className="grid lg:grid-cols-2 gap-10 items-start py-4 lg:py-1">

          {/* ---------- Text Column ---------- */}
          <div className="space-y-4">
            <div className="flex space-x-1.5 ">
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

            
              </div>
           

            <motion.p
              className="lato-400 text-sm md:text-base leading-relaxed text-gray-600"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              The UFlex Learning Academy fosters learning and development through
              a range of off-the-shelf digital, blended and classroom courses on
              a wide range of subjects. The academy brings together digital,
              blended, and classroom programs delivered through our secure and
              accessible online platform.
              <br />
              <br />
              Our customized programs cater to individual needs, enabling
              employees to excel in their careers. Leveraging modern modules and
              subject-matter experts, we build a culture of continuous learning
              and upskilling across the organization.
              <br />
              <br />
              With a dedicated team of certified delivery experts and Wing
              Champions from senior leadership, we design structured learning
              journeys for Industry 4.0 reskilling—ensuring every employee thrives
              in a rapidly evolving landscape.
            </motion.p>
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
              src="/images/learn.jpg"
              alt="UFlex Learning Academy"
              fill
              className="object-cover rounded-sm"
              priority
            />
          </motion.div>
        </div>

        {/* ================= CTA Section ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-6 text-center"
        >
          <p className="lato-600 text-[#117ABA] text-base mb-3 leading-relaxed">
            Ready to elevate your career? Connect with us:
          </p>

          <a
            href="mailto:uflexlearningacademy@uflexltd.com"
            className="text-gray-800 inline-flex items-center lato-600 underline underline-offset-4 text-base transition-colors duration-200 hover:text-[#117ABA]"
          >
            uflexlearningacademy@uflexltd.com
          </a>
        </motion.div>

      </div>
    </section>
  );
}
