
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
        <h2 className="text-[24px] lato-700 text-[#117ABA] md:text-[42px] ">
          UFlex’s Sustainability Vision
        </h2>
        <p className="mt-2 text-black lato-400 py-[2px] text-[14px] leading-relaxed md:text-[24px]">
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
              <p className="text-white text-[16px] lato-700">
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
                  <h4 className="lato-700 text-[14px] md:text-[18px]  leading-relaxed text-[#117ABA] ">
                    {item.title}
                  </h4>
                  <p className="mt-1 lato-400 text-[14px] md:text-[18px] text-black  leading-relaxed">
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

