
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-section relative h-[270px] w-full overflow-hidden bg-white md:w-full md:h-[580px]">
        {/* Background Image Container */}
        <motion.div
          className="absolute top-0 left-0 h-[270px] w-full md:w-full md:h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Desktop Image with Overlay */}
          <div className="relative hidden h-full w-full md:block px-10">
            <Image
              src="/images/mainabout.png" // Replace with your actual desktop image path
              alt="Sustainability"
             height={1440}
             width={100}
             
              className="object-contain h-full w-full"
              priority
            />
            {/* <div className="absolute inset-0 bg-black/40" /> */}
          </div>
  
          {/* Mobile Image without Overlay */}
          <Image
             src="/images/mainabout.png" // Replace with your actual mobile image path
            alt="Sustainability"
            fill
            className="object-cover h-[1440px] w-[569px] md:hidden"
            priority
          />
        </motion.div>
  
        
  
        
    
  
     
      </div>
  );
};

export default Hero;
