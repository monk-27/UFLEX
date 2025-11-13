
// "use client";
// import { de } from "date-fns/locale";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const GlobalFootprint = () => {
//   const locations = {
//     India: [
//       "Sanand (Aseptic Packaging)",
//       "Jammu (Flexible Packaging)",
//       "Panipat (Packaging Films - PET Chips resin)",
//       "Noida (Packaging Films & Flexible Packaging)",
//       "Dharwad (Packaging Films)",
//     ],
//     International: [
//       "Jebel Ali Free Zone, Dubai, UAE (Packaging Films)",
//       "Altamira, Mexico (Packaging Films)",
//       "6th October City, Egypt (Packaging Films)",
//       "Września, Poland (Packaging Films)",
//       "Kentucky, USA (Packaging Films)",
//       "Stupino, CIS country (Packaging Films)",
//       "Rétság, Hungary (Packaging Films)",
//       "Ogun State, Nigeria (Packaging Films)",
//     ],
//   }

//   return (
//     <section className="mt-[30px] px-4 py-0 text-center sm:mt-8  sm:py-10 md:px-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         <h2 className="text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl text-center">Our Global Footprint</h2>



//         <p className="text-center manrope-400 mt-0 text-[16px] text-[#181818] sm:mt-2 md:text-[20px]">
//           Manufacturing excellence across five continents
//         </p>
//         <div className="mt-12 flex items-center justify-center">
//           <Image src="/images/map.png"
//             height={1500} width={1700} alt={""} />
//         </div>

        

//         <div className="mt-12 grid md:grid-cols-2 gap-12">
//           <div className="border-2 border-gray-400 bg-gray-100 p-8 rounded-lg">
//             <h3 className="text-2xl manrope-800 mb-6 text-[#117ABA] ">Manufacturing Facilities in India</h3>
//             <ul className="space-y-4">
//               {locations.India.map((location, idx) => (
//                 <li key={idx} className="flex items-start gap-3">
//                   <span className="text-[#117ABA] manrope-800 text-xl mt-0.5">✓</span>
//                   <span className="text-gray-700 text-lg">{location}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="border-2 border-gray-400 bg-gray-100 p-8 rounded-lg">
//             <h3 className="text-2xl manrope-800 mb-6 text-[#117ABA]">International Facilities</h3>
//             <ul className="space-y-4">
//               {locations.International.map((location, idx) => (
//                 <li key={idx} className="flex items-start gap-3">
//                   <span className="text-[#117ABA] manrope-800 text-xl mt-0.5">✓</span>
//                   <span className="text-gray-700 text-lg">{location}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
// export default GlobalFootprint;
"use client";
import Image from "next/image";

const GlobalFootprint = () => {
  const categories = {
    India: {
      "Packaging Films": [
        "Noida, Uttar Pradesh, India",
        "Dharwad, Karnataka, India",
      ],
      "Packaging Films – PET Chip Resin": [
        "Panipat, Haryana, India",
      ],
      "Flexible Packaging": [
        "Noida, Uttar Pradesh, India",
        "Jammu, J&K, India",
      ],
      "Aseptic Packaging": [
        "Sanand, Gujarat, India",
      ],
      Chemicals: [
        "Noida, Uttar Pradesh, India",
        "Jammu, J&K, India",
      ],
      Holography: [
        "Noida, Uttar Pradesh, India",
        "Jammu, J&K, India",
      ],
      "Printing Cylinders": [
        "Noida, Uttar Pradesh, India",
        "Jammu, J&K, India",
      ],
      Engineering: [
        "Noida, Uttar Pradesh, India",
      ],
      "Flexible Tubes": [
        "Noida, Uttar Pradesh, India",
      ],
    },

    International: {
      "Packaging Films": [
        "Jebel Ali Free Zone Area, Dubai, UAE",
        "North Extension of Industrial Zones, 6th October City, Egypt",
        "Altamira, Tamaulipas, Mexico",
        "Elizabethtown, Kentucky, USA",
        "Września, Sikorskiego 48, Poland",
        "Stupino, Moscow Region, CIS Country",
        "Rétság, Ipari Park-7, Hungary",
        "Ikenne, Ogun State, Nigeria",
      ],
      "PET Chip Resin": [
        "AIN-Sokhna, Suez Governorate, Egypt",
      ],
      "Aseptic Packaging (Upcoming)": [
        "AIN-Sokhna, Suez Governorate, Egypt",
      ],
      "Flexible Packaging – WPP Bags (Upcoming)": [
        "Altamira, Tamaulipas, Mexico",
      ],
    },

    Recycling: {
      India: [
        "Noida, Uttar Pradesh, India",
        "Jammu, J&K, India",
        "Malanpur, Madhya Pradesh, India",
      ],
      "Outside India": [
        "Altamira, Tamaulipas, Mexico",
        "North Extension of Industrial Zones, 6th October City, Egypt",
        "Września, Sikorskiego 48, Poland",
      ],
    },

    Marketing: {
      India: [
        "Mumbai, Maharashtra, India",
        "Kolkata, West Bengal, India",
        "Bengaluru, Karnataka, India",
      ],
      "Outside India": [
        "New Jersey, USA",
        "London, UK",
      ],
    },
  };

  return (
    <section className="mt-[30px] px-4 py-0 text-center sm:mt-8 sm:py-10 md:px-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-[24px] manrope-600 text-[#117ABA] md:text-[42px] text-center">
          Our Global Footprint
        </h2>

        <p className="text-center manrope-400 mt-0 text-[16px] text-[#181818] md:text-[20px]">
          Manufacturing excellence across five continents
        </p>

        <div className="mt-12 flex items-center justify-center">
          <Image src="/images/map.png" height={1500} width={1700} alt="" className="object-cover w-full h-full"/>
        </div>

        {/* CATEGORY WISE CARDS */}
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          {/* INDIA */}
          <div className="border-2 border-gray-400 bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl manrope-800 mb-6 text-[#117ABA]">
              India – Manufacturing Facilities
            </h3>

            {Object.entries(categories.India).map(([category, items], idx) => (
              <div key={idx} className="mb-6">
                <h4 className=" flex justify-start text-xl manrope-400 text-[#117ABA] mb-2">{category}</h4>
                <ul className="space-y-2">
                  {items.map((location, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#117ABA] manrope-800 text-xl mt-0.5">✓</span>
                      <span className="manrope-400 text-gray-700 text-lg">{location}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* INTERNATIONAL */}
          <div className="border-2 border-gray-400 bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl manrope-800 mb-6 text-[#117ABA]">
              International Facilities
            </h3>

            {Object.entries(categories.International).map(([category, items], idx) => (
              <div key={idx} className="mb-6">
                <h4 className="flex justify-start text-xl manrope-400 text-[#117ABA] mb-2">{category}</h4>
                <ul className="space-y-2">
                  {items.map((location, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#117ABA] manrope-800 text-xl mt-0.5">✓</span>
                      <span className="text-gray-700 text-lg">{location}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* RECYCLING */}
          <div className="border-2 border-gray-400 bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl manrope-800 mb-6 text-[#117ABA]">
              Recycling Plants
            </h3>

            {Object.entries(categories.Recycling).map(([region, items], idx) => (
              <div key={idx} className="mb-6">
                <h4 className="text-xl manrope-700 text-[#117ABA] mb-2">{region}</h4>
                <ul className="space-y-2">
                  {items.map((location, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#117ABA] manrope-800 text-xl mt-0.5">✓</span>
                      <span className="text-gray-700 text-lg">{location}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* MARKETING OFFICES */}
          <div className="border-2 border-gray-400 bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl manrope-800 mb-6 text-[#117ABA]">
              Marketing Offices
            </h3>

            {Object.entries(categories.Marketing).map(([region, items], idx) => (
              <div key={idx} className="mb-6">
                <h4 className="text-xl manrope-700 text-[#117ABA] mb-2">{region}</h4>
                <ul className="space-y-2">
                  {items.map((location, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#117ABA] manrope-800 text-xl mt-0.5">✓</span>
                      <span className="text-gray-700 text-lg">{location}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;
