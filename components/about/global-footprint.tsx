
"use client";
import { de } from "date-fns/locale";
import { motion } from "framer-motion";
import Image from "next/image";

const GlobalFootprint = () => {
  const locations = {
    India: [
      "Sanand (Aseptic Packaging)",
      "Jammu (Flexible Packaging)",
      "Panipat (Packaging Films - PET Chips resin)",
      "Noida (Packaging Films & Flexible Packaging)",
      "Dharwad (Packaging Films)",
    ],
    International: [
      "Jebel Ali Free Zone, Dubai, UAE (Packaging Films)",
      "Altamira, Mexico (Packaging Films)",
      "6th October City, Egypt (Packaging Films)",
      "Września, Poland (Packaging Films)",
      "Kentucky, USA (Packaging Films)",
      "Stupino, CIS country (Packaging Films)",
      "Rétság, Hungary (Packaging Films)",
      "Ogun State, Nigeria (Packaging Films)",
    ],
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl text-center">Our Global Footprint</h2>



        <p className="manrope-600  text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Manufacturing excellence across five continents
        </p>
        <div className="flex items-center justify-center">
          <Image src="/images/map.png"
            height={1400} width={1400} alt={""} />
        </div>

        

        <div className="grid md:grid-cols-2 gap-12">
          <div className="border-2 border-gray-400 bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl manrope-800 mb-6 text-[#117ABA] ">Manufacturing Facilities in India</h3>
            <ul className="space-y-4">
              {locations.India.map((location, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#117ABA] manrope-800 text-xl mt-0.5">✓</span>
                  <span className="text-gray-700 text-lg">{location}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-gray-400 bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl manrope-800 mb-6 text-[#117ABA]">International Facilities</h3>
            <ul className="space-y-4">
              {locations.International.map((location, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#117ABA] manrope-800 text-xl mt-0.5">✓</span>
                  <span className="text-gray-700 text-lg">{location}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default GlobalFootprint;
