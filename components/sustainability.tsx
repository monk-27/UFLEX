
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function SustainabilityComp() {
  const router = useRouter();
  return (
    <div>

      <div className="py-12 cursor-pointer relative h-[150px] w-full overflow-hidden bg-white md:h-[542px]"
      onClick={()=>{
        router.push("/sustainability")
      }}
      >
        {/* Background Image Container */}
        <motion.div
          className="absolute inset-0"  // This ensures full coverage
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* <Link href="/sustainability" className="group"> */}
          {/* Fixed: Use object-cover, fill parent, remove fixed width */}
          <Image
            // src="/images/sus-top.png"
            src="/images/holography/sus.jpeg"

            fill
            className="object-contain object-center"
            alt="Sustainability"
            priority
          />
          {/* </Link> */}
        </motion.div>
        {/* <motion.div
          className="absolute inset-0 bg-black bg-opacity-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        ></motion.div> */}

        {/* Text Content */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center pt-[5%] pl-[20%] text-white w-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delayChildren: 0.3, staggerChildren: 0.3 },
            },
          }}
        >
          {/* <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center justify-center "
          >
            <Link href="/sustainability" className="group">
              <button className="flex items-center  gap-2 rounded-full border border-white bg-white px-6 py-3 text-sm lato-400 text-black transition-all hover:bg-transparent hover:text-white">
                Know More
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
              </button>
            </Link>
          </motion.div> */}

        </motion.div>
      </div>
    </div>

  );
}