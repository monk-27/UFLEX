// // src/components/business/OfferingsSection.tsx
// "use client";

// import { businesses, BusinessKey, Offering } from "@/app/business/data";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { SubBusinessHero } from "./subhero";
// import { BusinessDetail } from "./BusinessDetail";

// type Props = {
//   heading: string;
//   items: Offering[];
//   businessKey: BusinessKey;
//   subheading?: string;
//   subitems?: Offering[];
// };

// export function OfferingsSection({ heading, items, businessKey, subheading, subitems }: Props) {


//   const business = businesses.find((b) => b.key === businessKey);
//   const [index, setIndex] = useState(0);
// console.log("buissness",business)
//   // auto rotate on mobile – simple interval
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % items.length);
//     }, 2500);
//     return () => clearInterval(timer);
//   }, [items.length]);

//   return (
//     <section className="bg-white">
//       <div className="">
//         <h2 className="flex items-center justify-center text-center lato-700 text-[18px] md:text-[22px] text-[#000000] mb-6">
//           {heading}
//         </h2>

//         {/* Desktop / tablet – 5 cards in a row */}
//         <div className="hidden md:grid grid-cols-5 gap-4">
//           {items.map((item) => (
//             <OfferingCard key={item.id} item={item} subitems={subitems} />
//           ))}
//         </div>

//         {/* Mobile slider – single card, auto, no nav */}
//         <div className="md:hidden">
//           <OfferingCard item={items[index]} subitems={subitems} />
//         </div>
//         {business?.subhero && (
//           <SubBusinessHero business={business} />
//         )}

//       </div>
//     </section>
//   );
// }

// function OfferingCard({ item, subitems }: { item: Offering, subitems?: any }) {
//   return (
//     <div className="group relative overflow-hidden rounded-md">
//       <div className="relative h-[195px] sm:h-[195px] sm:w-[278px]">
//         <Image
//           src={item.image}
//           alt={item.title}
//           fill
//           className="object-cover transform group-hover:scale-105 transition-transform duration-300"
//         />
//       </div>

//       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

//       <div className="absolute inset-0 flex items-end justify-center pb-5">
//         <p className="lato-700 text-[16px] text-white tracking-wide text-center">
//           {item.title}
//         </p>
//       </div>

//     {/*  */}
//         <div className="relative h-[195px] sm:h-[195px] sm:w-[278px]">
//         <Image
//           src={subitems?.image || ""}
//           alt={subitems?.title || ""}
//           fill
//           className="object-cover transform group-hover:scale-105 transition-transform duration-300"
//         />
//       </div>

//       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

//       <div className="absolute inset-0 flex items-end justify-center pb-5">
//         <p className="lato-700 text-[16px] text-white tracking-wide text-center">
//           {subitems?.title}
//         </p>
//       </div>
//     </div>
//   );
// }
// src/components/business/OfferingsSection.tsx
"use client";

import { BusinessConfig, Offering } from "@/app/business/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SubBusinessHero } from "./subhero";

type Props = {
  heading: string;
  items: Offering[];
  subheading?: string;
  subitems?: Offering[];
  business: BusinessConfig;   // ✅ get full business, not key
};

export function OfferingsSection({
  heading,
  items,
  subheading,
  subitems,
  business,
}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % items.length),
      2500
    );
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <section className="bg-white">
      <div>
        {/* Main offerings heading */}
        <h2 className="flex items-center justify-center text-center lato-700 text-[18px] md:text-[22px] text-[#000000] mb-6">
          {heading}
        </h2>

        {/* Desktop – main offerings */}
        <div className="hidden md:grid grid-cols-5 gap-4">
          {items.map((item) => (
            <OfferingCard key={item.id} item={item} />
          ))}
        </div>

        

        {/* Mobile – slider */}
        <div className="md:hidden">
          <OfferingCard item={items[index]} />
        </div>

        {/* ✅ Optional subhero (PET Resin block) */}
        {business.subhero && <SubBusinessHero business={business} />}

        {/* ✅ Optional subofferings grid */}
        {subitems && subitems.length > 0 && (
          <div className="mt-10">
            {subheading && (
              <h3 className="flex items-center justify-center text-center lato-700 text-[16px] md:text-[22px] text-[#000000] mb-6">
                {subheading}
              </h3>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {subitems.map((sub) => (
                <OfferingCard key={sub.id} item={sub} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function OfferingCard({ item }: { item: Offering }) {
  return (
    <div className="group relative overflow-hidden rounded-md">
      <div className="relative h-[195px] sm:h-[195px] sm:w-[278px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

      {/* Title at bottom-center */}
      <div className="absolute inset-0 flex items-end justify-center pb-5">
        <p className="lato-700 text-[16px] text-white tracking-wide text-center">
          {item.title}
        </p>
      </div>
    </div>
  );
}
