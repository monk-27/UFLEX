
// "use client";

// import { BusinessConfig, Offering } from "@/app/business/data";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { SubBusinessHero } from "./subhero";

// type Props = {
//   heading: string;
//   items: Offering[];
//   subheading?: string;
//   subitems?: Offering[];
//   business: BusinessConfig;   // ✅ get full business, not key
// };

// export function OfferingsSection({
//   heading,
//   items,
//   subheading,
//   subitems,
//   business,
// }: Props) {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(
//       () => setIndex((prev) => (prev + 1) % items.length),
//       2500
//     );
//     return () => clearInterval(timer);
//   }, [items.length]);

//   return (
//     <section className="bg-white">
//       <div>
//         {/* Main offerings heading */}
//         <h2 className="flex items-center justify-center text-center lato-700 text-[18px] md:text-[22px] text-[#000000] mb-6">
//           {heading}
//         </h2>

//         {/* Desktop – main offerings */}
//         {/* Desktop – main offerings */}
// <div className="hidden md:flex md:justify-center md:items-stretch md:gap-4">
//   {items.map((item) => (
//     <OfferingCard key={item.id} item={item} />
//   ))}
// </div>


        

//         {/* Mobile – slider */}
//         <div className="md:hidden">
//           <OfferingCard item={items[index]} />
//         </div>

//         {/* ✅ Optional subhero (PET Resin block) */}
//         {business.subhero && <SubBusinessHero business={business} />}

//         {/* ✅ Optional subofferings grid */}
//         {subitems && subitems.length > 0 && (
//           <div className="mt-10">
//             {subheading && (
//               <h3 className="flex items-center justify-center text-center lato-700 text-[16px] md:text-[22px] text-[#000000] mb-6">
//                 {subheading}
//               </h3>
//             )}

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {subitems.map((sub) => (
//                 <OfferingCard key={sub.id} item={sub} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
// function OfferingCard({ item }: { item: Offering }) {
//   return (
//     <div className="group relative overflow-hidden rounded-md md:w-[200px] lg:w-[220px] xl:w-[240px]">
//       <div className="relative h-[195px] w-full">
//         <Image
//           src={item.image}
//           alt={item.title}
//           fill
//           className="object-cover transform group-hover:scale-105 transition-transform duration-300"
//         />
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

//       {/* Title at bottom-center */}
//       <div className="absolute inset-0 flex items-end justify-center pb-5">
//         <p className="lato-700 text-[16px] text-white tracking-wide text-center">
//           {item.title}
//         </p>
//       </div>
//     </div>
//   );
// }

// // function OfferingCard({ item }: { item: Offering }) {
// //   return (
// //     <div className="group relative overflow-hidden rounded-md">
// //       <div className="relative h-[195px] sm:h-[195px] sm:w-[278px]">
// //         <Image
// //           src={item.image}
// //           alt={item.title}
// //           fill
// //           className="object-cover transform group-hover:scale-105 transition-transform duration-300"
// //         />
// //       </div>

// //       {/* Overlay */}
// //       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

// //       {/* Title at bottom-center */}
// //       <div className="absolute inset-0 flex items-end justify-center pb-5">
// //         <p className="lato-700 text-[16px] text-white tracking-wide text-center">
// //           {item.title}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

"use client"

import { BusinessConfig, Offering } from "@/app/business/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SubBusinessHero } from "./subhero";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  heading: string;
  items: Offering[];
  subheading?: string;
  subitems?: Offering[];
  business: BusinessConfig; // full business
};

export function OfferingadvSection({
  heading,
  items,
  subheading,
  subitems,
  business,
}: any) {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopPage, setDesktopPage] = useState(0);

  const itemsPerPage = 5;
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // auto slider for mobile
  useEffect(() => {
    if (!items.length) return;

    const timer = setInterval(
      () => setMobileIndex((prev) => (prev + 1) % items.length),
      2500
    );
    return () => clearInterval(timer);
  }, [items.length]);

  const handlePrevDesktop = () => {
    setDesktopPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  const handleNextDesktop = () => {
    setDesktopPage((prev) => (prev + 1) % pageCount);
  };

  const handlePrevMobile = () => {
    setMobileIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % items.length);
  };

  const start = desktopPage * itemsPerPage;
  const visibleDesktopItems =
    items.length > itemsPerPage
      ? items.slice(start, start + itemsPerPage)
      : items;

  return (
    <section className="bg-white">
      <div>
        {/* Main offerings heading */}
        <h2 className="flex items-center justify-center text-center lato-700 text-[18px] md:text-[22px] text-[#000000] mb-6">
          {heading}
        </h2>

        {/* Desktop – main offerings */}
        {items.length <= itemsPerPage ? (
          <div className="hidden md:flex md:justify-center md:items-stretch md:gap-4">
            {items.map((item:any) => (
              <OfferingCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="hidden md:flex md:flex-col md:items-center">
            {/* cards */}
            <div className="flex justify-center items-stretch gap-4">
              {visibleDesktopItems.map((item:any) => (
                <OfferingCard key={item.id} item={item} />
              ))}
            </div>
 <div className="flex items-center justify-center gap-2 mt-4 ">
                {Array.from({ length: pageCount }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setDesktopPage(i)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === desktopPage ? "bg-[#117ABA]" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            {/* arrows + dots BELOW */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={handlePrevDesktop}
                aria-label="Previous"
                className=" z-10 -translate-y-1/2 inline-flex items-center justify-center
             rounded-full border border-gray-600 bg-white/80 p-3 shadow-sm
             opacity-50 hover:opacity-100 transition md:left-0"
            >
              <ChevronLeft className="h-5 w-5 text-gray-400" />
              </button>

             

              <button
                type="button"
                onClick={handleNextDesktop}
                aria-label="Next"
                className=" z-10 -translate-y-1/2 inline-flex items-center justify-center
             rounded-full border border-gray-600 bg-white/80 p-3 shadow-sm
             opacity-50 hover:opacity-100 transition md:right-0"
            >
              <ChevronRight className="h-5 w-5 text-gray-400" /></button>
            </div>
          </div>
        )}

        {/* Mobile – slider */}
        <div className="md:hidden">
          {items.length > 0 && <OfferingCard item={items[mobileIndex]} />}
<div className="flex items-center justify-center gap-2 mt-4 ">
                {items.map((_:any, i:any) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setMobileIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === mobileIndex ? "bg-[#117ABA]" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
          {items.length > 1 && (
            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={handlePrevMobile}
                className="h-9 w-9 text-[#117ABA]  flex items-center justify-center text-sm"
                aria-label="Previous"
              >
              
               <span className="lato-700 text-[22px] text-[#117ABA]">{"<"}</span>
              </button>

              

              <button
                type="button"
                onClick={handleNextMobile}
                className="h-9 w-9  text-[#117ABA]  flex items-center justify-center text-sm hover:bg-gray-100"
                aria-label="Next"
              >
               <span className="lato-700 text-[22px] text-[#117ABA]">{">"}</span>
                 
              </button>
            </div>
          )}
        </div>

        {/* Optional subhero */}
        {business.subhero && <SubBusinessHero business={business} />}

        {/* Optional subofferings grid */}
        {subitems && subitems.length > 0 && (
          <div className="mt-10">
            {subheading && (
              <h3 className="flex items-center justify-center text-center lato-700 text-[16px] md:text-[22px] text-[#000000] mb-6">
                {subheading}
              </h3>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {subitems.map((sub:any) => (
                <OfferingCard key={sub.id} item={sub} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function OfferingCard({ item }: { item: any }) {
  return (
    <div className="group relative overflow-hidden  md:w-[200px] lg:w-[220px] xl:w-[240px]">
      <div className="relative h-[195px] w-full">
        <Image
          src={item?.image}
          alt={item?.title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

      {/* Title at bottom-center */}
      <div className="absolute inset-0 flex items-end justify-center pb-5">
        <p className="lato-700 text-[16px] text-white tracking-wide text-center">
          {item?.title}
        </p>
      </div>
    </div>
  );
}
