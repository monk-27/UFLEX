
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CarresStatus() {
  return (
    <section className="w-screen relative bg-[#117ABA]  overflow-hidden px-4 pb-12">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-center text-white text-[24px] lato-700  md:text-[42px] py-4">
          Awards & Accolades
        </h2>
        {/* ================= Main Content ================= */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ---------- Text Column ---------- */}
          <div className="space-y-4">


            <motion.p
              className="text-[14px] md:text-[18px] leading-relaxed lato-400 text-white lg:pt-24"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Over the years we have received several prestigious awards that reflect our commitment to fostering an inclusive and diverse workforce, driving innovation and excellence at every step.


            </motion.p>
            <a
              href="/hall-of-fame/buisness-awards"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2  text-[14px] md:text-[18px] leading-relaxed lato-400 text-white transition-all "
            >
              View More
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
            </a>


          </div>

          {/* ---------- Image Column ---------- */}
          <motion.div
            className="relative w-full aspect-[16/10] overflow-hidden pt-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-banners/life_at_image56.jpg"
              alt="UFlex Learning Academy"
              fill
              className="object-cover rounded-sm pt-8"
              priority
            />
          </motion.div>
        </div>

        {/* ================= CTA Section ================= */}


      </div>
    </section>
  );
}
