"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ReadMoreDialog } from "./expandabletext";

const SLIDES = [
  {
    title: "Global Perspective",
    subtitle: " Thinking globally and acting locally, we leverage the power of global insight, relationships, collaborations, and learnings to deliver exceptional packaging solutions for the clients.",
    image: "/images/careers/global.png",
  },
  // {
  //   title: "Trust & Respect ",
  //   subtitle: "Proactively build inclusive and egalitarian partnerships with all stakeholders, through the virtues of honesty of purpose, mutual trust, and respect.",
  //   image: "/images/careers/trust.png",
  // },
  // {
  //   title: "Socio-environmental Sustainability",
  //   subtitle: " Upholding that society and environment are cornerstones for sustainability, we support and promote inclusive social development and strive towards the conservation of the environment and protection of our planet.",
  //   image: "/images/careers/socio.png",
  // },
];

export default function CareersMainCarousel() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  const packagingData = [
    {
      title: 'Careers',
      image: '/images/careers/global.png',
      paragraphs: [
        ` At UFlex, we pride ourselves on fostering an inclusive, caring, and productive environment for our people. As a leading player in the flexible packaging industry, we engage and retain purpose-driven talent through a fair and consistent HR framework. Our entrepreneurial culture empowers employees to drive UFlex’s growth and success.`,

      ],
    },

  ];

  return (




    <section className="w-full pt-4 sm:pt-12 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* <div className="grid py-4 lg:grid-cols-2 lg:py-1 gap-10">


          <div className="text-center sm:text-left max-w-lg">
            <AnimatePresence mode="wait">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[24px] lato-700 text-[#117ABA] md:text-[42px] "
                >
                  Careers
                </motion.h1>

                <p className=" text-wrap max-w-xl lato-400 text-[16px] sm:text-[20px] leading-relaxed text-black">
                  <div className="space-y-0">
                    <p className=" text-start  ">
                      
                    </p>


                    <a
                      href="https://aa193.taleo.net/careersection/ex/jobsearch.ftl?lang=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-start rounded-sm texts-md lato-600 bg-[#117ABA] text-white w-auto py-2 mt-4 px-12 inline-block"
                    >
                      Apply Now
                    </a>


                  </div>

                </p>




              </div>
            </AnimatePresence>
          </div>


          <div className="flex flex-col items-center">


            <div className="mt-0 sm:mt-4 relative w-full aspect-[16/9] rounded-md overflow-hidden group cursor-pointer">

              <AnimatePresence mode="wait">
                <motion.div
                  key={SLIDES[active].image}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={SLIDES[active].image}
                    alt={SLIDES[active].title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>



            </div>



          </div>
        </div> */}

        <div className="grid py-4 lg:grid-cols-2 lg:py-1 gap-10">

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[24px] lato-700 text-[#117ABA] md:text-[42px] "
            >
              Careers
            </motion.h1>

            <p className="text-wrap max-w-xl lato-400 text-[16px] sm:text-[20px] leading-relaxed text-black">
              {packagingData[0].paragraphs[0]}
            </p>

            {/* <button
              onClick={() => setOpen(true)}
              className="mt-4 lato-400 text-[16px] sm:text-[20px] text-[#117ABA]  hover:underline"
            >
              Read More
              <span aria-hidden>↗</span>

            </button> */}
            <div className="space-y-0">
              <p className=" text-start  ">

              </p>


              <a
                href="https://aa193.taleo.net/careersection/ex/jobsearch.ftl?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-start rounded-sm texts-md lato-600 bg-[#117ABA] text-white w-auto py-2 mt-4 px-12 inline-block"
              >
                Apply Now
              </a>


            </div>

            {/* ---- Modal ---- */}
            <ReadMoreDialog
              open={open}
              onClose={() => setOpen(false)}
              title={packagingData[0].title}
              imageSrc={packagingData[0].image}
              imageAlt={packagingData[0].title}
              paragraphs={packagingData[0].paragraphs}
            />

          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[16/10] w-full overflow-hidden  "
          >
            <Image
              src="/images/careers/global.png"
              alt="UFlex capabilities across the value chain"
              fill
              className="object-cover rounded-sm"
              priority
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
          </motion.div>
        </div>


      </div>
    </section>
  );
}
