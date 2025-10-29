
import { motion } from "framer-motion";
import Image from "next/image";

export function GlobalFootprint() {
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

        <h2 className="text-4xl poppins-800 text-center mb-4 text-[#117ABA] ">Our Global Footprint</h2>



        <p className="poppins-600  text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Manufacturing excellence across five continents
        </p>
        <div className="flex items-center justify-center">
          <Image src="https://uflex.wpdevstudio.site/HTML/assets/images/Map-desktop-june.jpg"
            height={1000} width={1000} alt={""} />
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="border-2 border-green-400 bg-green-50 p-8 rounded-lg text-center hover:shadow-lg transition">
            <div className="text-5xl poppins-800 text-green-700 mb-3">150+</div>
            <p className="text-green-900 poppins-700 text-lg">Countries with Our Presence</p>
          </div>
          <div className="border-2 border-orange-400 bg-orange-50 p-8 rounded-lg text-center hover:shadow-lg transition">
            <div className="text-5xl poppins-800 text-orange-700 mb-3">15,000</div>
            <p className="text-orange-900 poppins-700 text-lg">Global Workforce</p>
          </div>
          <div className="border-2 border-blue-400 bg-blue-50 p-8 rounded-lg text-center hover:shadow-lg transition">
            <div className="text-5xl poppins-800 text-blue-700 mb-3">9</div>
            <p className="text-blue-900 poppins-700 text-lg">Global Manufacturing Locations</p>
          </div>
          <div className="border-2 border-purple-400 bg-purple-50 p-8 rounded-lg text-center hover:shadow-lg transition">
            <div className="text-5xl poppins-800 text-purple-700 mb-3">5</div>
            <p className="text-purple-900 poppins-700 text-lg">Continents</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="border-2 border-green-300 bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl poppins-800 mb-6 text-red-900">Manufacturing Facilities in India</h3>
            <ul className="space-y-4">
              {locations.India.map((location, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-600 poppins-800 text-xl mt-0.5">✓</span>
                  <span className="text-gray-700 text-lg">{location}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-blue-300 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl poppins-800 mb-6 text-red-900">International Facilities</h3>
            <ul className="space-y-4">
              {locations.International.map((location, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 poppins-800 text-xl mt-0.5">✓</span>
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
