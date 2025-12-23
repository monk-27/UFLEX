// "use client"
// import Image from "next/image";

// export default function MainSustainabilityCOMMComp({
//   image = "/images/Mask.png",
// }: {
//   image?: string;
// }) {
//   return (
//     <section className="max-w-7xl mx-auto w-full px-4 sm:px-4 py-12">
//       <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
//         {/* IMAGE SIDE */}
//         <figure className="order-1 lg:order-1">
//           <div className=" bg-white  overflow-hidden">
//             <div className="relative h-72 sm:h-[380px] lg:h-[608px] w-full">
//               <Image src={image} alt="People planting trees" fill className="object-cover" />
//             </div>

//             <figcaption className="lato-400 text-center px-4 py-4 lato-600 text-[24px] text-slate-700">
//               <span className="lato-600 text-[24px]">Empowering a </span>
//               <span className=" text-green-500">Greener </span>
//               <span className="">Tomorrow, Today</span>
//             </figcaption>
//           </div>
//         </figure>

//         {/* TEXT SIDE */}
//         <div className="order-2 lg:order-2">
//           <h3 className="text-xl lato-600 text-[#117ABA] md:text-2xl lg:text-3xl">UFlex’s sustainability vision</h3>
//           <p className="mt-3 lato-600 text-slate-600 text-[16px] max-w-2xl">
//             UFlex’s sustainability initiatives are extensive and feature a variety of advanced projects and
//             products, such as:
//           </p>

//        <ul className="mt-6 space-y-6">
//   {[
//     {
//       img: "/images/sc1.png",
//       title: "Promoting Mixed Plastic Recycling",
//       desc: "Extensively recycling mixed plastic waste and promoting the use of recycled material.",
//     },
//     {
//       img: "/images/sc2.png",
//       title: "Advanced Plastic Waste Management",
//       desc: "Tackling plastic waste issue on a long-term basis through the strategic adoption of advanced technologies to revolutionize the management of plastic waste segregation and collection.",
//     },
//     {
//       img: "/images/sc3.png",
//       title: "Comprehensive Waste Management Strategy",
//       desc: "Addressing uncollected waste and recycling of collected waste and biodegradation of uncollected waste.",
//     },
//     {
//       img: "/images/sc4.png",
//       title: "Multi-faceted Water Conservation Strategy",
//       desc: "Option of a multi-faceted approach to water conservation and recycling, which includes implementing zero liquid discharge (ZLD) systems at our manufacturing facilities.",
//     },
//     {
//       img: "/images/sc5.png",
//       title: "Sustainable Technology Integration",
//       desc: "Integration of energy-efficient technologies, renewable sources and sustainable materials.",
//     },
//   ].map((item, idx) => (
//     <li key={idx} className="flex gap-4">
//       {/* Icon */}
//       <div className="flex h-10 w-10 flex-none items-center justify-center">
//         <Image
//           src={item.img}
//           alt=""
//           width={24}
//           height={24}
//           className="h-6 w-6"
//         />
//       </div>

//       {/* Text */}
//       <div className="flex flex-col">
//         <h4 className="lato-600 text-[24px] text-slate-600 leading-snug">
//           {item.title}
//         </h4>
//         <p className="mt-1 lato-600 text-[16px] text-slate-400 leading-relaxed">
//           {item.desc}
//         </p>
//       </div>
//     </li>
//   ))}
// </ul>

//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";

export default function MainSustainabilityCOMMComp({
  // image = "/images/sus/susmain.png",
  image = "/images/Mask.png",

}: {
  image?: string;
}) {
  return (
    <section className="max-w-7xl mx-auto w-full px-4 py-14">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-[24px] md:text-[28px] lato-400 text-[#117ABA]">
          UFlex’s Sustainability Vision
        </h2>
        <p className="mt-2 text-[14px] md:text-[16px] text-slate-500">
          UFlex’s sustainability initiatives are extensive and feature a variety
          of advanced projects and products, such as:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
        {/* IMAGE CARD */}
        <div className="w-full max-w-[658px] mx-auto lg:mx-0">
          <div className="relative overflow-hidden rounded-md">
            {/* Image */}
            <div className="relative h-[658px] w-full">
              <Image
                src={image}
                alt="Sustainability initiative"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Green caption strip */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#4F7F3A] py-4 text-center">
              <p className="text-white text-[14px] lato-600">
                Empower a Greener Tomorrow, Today
              </p>
            </div>
          </div>
        </div>

        {/* TEXT LIST */}
        <div className="max-w-xl">
          <ul className="space-y-6">
            {[
              {
                img: "/images/sus/sus1.png",
                title: "Promoting Mixed Plastic Recycling",
                desc: "Extensively recycling mixed plastic waste and promoting the use of recycled material.",
              },
              {
                img: "/images/sus/sus2.png",
                title: "Advanced Plastic Waste Management",
                desc: "Tackling plastic waste issues on a long-term basis through the strategic adoption of advanced technologies to revolutionize segregation and collection.",
              },
              {
                img: "/images/sus/sus3.png",
                title: "Comprehensive Waste Management Strategy",
                desc: "Addressing uncollected waste and recycling of collected waste and biodegradation of uncollected waste.",
              },
              {
                img: "/images/sus/sus4.png",
                title: "Multi-faceted Water Conservation Strategy",
                desc: "Implementing a multi-faceted approach to water conservation and recycling, including zero liquid discharge (ZLD) systems.",
              },
              {
                img: "/images/sus/sus5.png",
                title: "Sustainable Technology Integration",
                desc: "Integration of energy-efficient technologies, renewable sources, and sustainable materials.",
              },
            ].map((item, idx) => (
              <li key={idx} className=" py-4 flex gap-4 items-start">
                {/* Icon */}
                <div className="mt-1 flex h-15 w-15 flex-none items-center justify-center">
                  <Image
                    src={item.img}
                    alt=""
                    width={50}
                    height={50}
                    className="h-15 w-15"
                  />
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-[18px] lato-400 text-[#117ABA] leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[14px] lato-400 text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

