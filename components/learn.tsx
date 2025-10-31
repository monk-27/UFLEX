"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LearnStatus() {
  return (
    <section className="relative h-auto w-full px-4 py-12 sm:py-24 md:px-12">
      {/* Background with gradient overlay */}
      <div className="bg-mobimg absolute inset-0 min-h-fit">
        <div className="absolute inset-0 " />
      </div>

      {/* Content */}
      <motion.div
        className="relative mx-auto max-w-7xl text-center text-white md:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Headline */}
        <motion.h2
          className="poppins-800 text-2xl md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          UFlex Learning Academy
        </motion.h2>

        {/* Body Copy */}
        <motion.div
          className="my-8 md:my-10 space-y-4 md:space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.25 },
            },
          }}
        >
          <motion.p
            className="poppins-700 text-sm sm:text-base md:text-xl leading-relaxed"
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
          >
            The UFlex Learning Academy fosters learning and development through a range of
            off-the-shelf digital, blended and classroom courses on a wide range of subjects.
          </motion.p>

          <motion.p
            className="poppins-600 text-sm sm:text-base md:text-lg leading-relaxed"
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
          >
            The Academy brings together a range of off-the-shelf digital, blended, and classroom
            courses on a wide range of business-driven subjects, delivered through our secure and
            accessible online platform. Our customized programs cater to the needs of every
            individual, giving them an opportunity to excel in their career.
          </motion.p>

          <motion.p
            className="poppins-600 text-sm sm:text-base md:text-lg leading-relaxed"
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
          >
            Through our learning modules and subject matter experts, we strive to create a culture
            of learning and upskilling our employees across the organization.
          </motion.p>

          <motion.p
            className="poppins-700 text-sm sm:text-base md:text-lg leading-relaxed"
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
          >
            To know more about the Academy, write to us at:{" "}
            <a
              href="mailto:uflexlearningacademy@uflexltd.com"
              className="underline decoration-white/70 underline-offset-4 hover:decoration-white"
            >
              uflexlearningacademy@uflexltd.com
            </a>
          </motion.p>
        </motion.div>

        {/* (Optional) Logos: remove this block if not needed */}
        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-6 md:flex-row md:justify-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          
        </motion.div>
      </motion.div>
    </section>
  );
}
