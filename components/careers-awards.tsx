
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CarresStatus() {
  return (
    <section className="relative w-full overflow-hidden px-4 pb-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= Main Content ================= */}
        <div className="grid lg:grid-cols-2 gap-10 items-start py-4 lg:pt-1">

          {/* ---------- Text Column ---------- */}
          <div className="space-y-4">
            
           

            <motion.p
              className="lato-400 text-sm md:text-base leading-relaxed text-gray-600 lg:pt-24"
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
                            className="text-start rounded-sm texts-md lato-600 bg-[#117ABA] text-white w-auto  py-2 mt-4 px-12 inline-block"
                        >
                            View More
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
              src="https://uflex.wpdevstudio.site/HTML/uploaded-files/page-banners/life_at_image56.jpg"
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
  );
}
