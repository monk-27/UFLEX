"use client";

import Image from "next/image";
import { LeadershipAwardItem } from "./hall-off-fame";
export const LEADERSHIP_AWARDS: LeadershipAwardItem[] = 
[
  {
    image: "/images/awards/b1.png",
    title: "ET Sustainable Organization 2025",
    by: "By: ET Now",
    description:
      "UFlex was recognised as an ET Sustainable Organization for its commitment to circularity, responsible manufacturing, and long-term ESG goals. The award honours businesses that demonstrate measurable progress in environmental stewardship and sustainability-led transformation.",
  },
  {
    image: "/images/awards/b2.png",
    title: "ET Now Best Organisations to Work 2025",
    by: "By: ET Now",
    description:
      "UFlex received this recognition for fostering a high-performance workplace built on innovation, employee engagement, and strong leadership. The award honours companies that excel in culture-building, talent development, and employee well-being.",
  },
  {
    image: "/images/awards/b3.png",
    title: "Business Leader of the Decade 2024 – Mr. Ashok Chaturvedi",
    by: "By: Indo-American Chamber of Commerce (IACC)",
    description:
      "UFlex Founder & Chairman Mr. Ashok Chaturvedi was honoured for his visionary leadership and contribution to the packaging industry. The award recognises leaders who have significantly influenced India–US business relations and driven industrial, technological, and economic growth over the decade.",
  },

  {
    image: "/images/awards/b4.png",
    title: "IFCA Star Awards 2025",
    by: "By: Indian Flexible Packaging and Folding Carton Association (IFCA)",
    description:
      "UFlex won 16 awards—the highest among all entrants—recognising its excellence in packaging design, sustainability, and innovation. The IFCA Star Awards celebrate the most advanced and impactful solutions in flexible packaging, highlighting UFlex's leadership in delivering functional, visually appealing, and environmentally responsible packaging.",
  },
  {
    image: "/images/awards/b5.png",
    title: "Top Employer India 2025",
    by: "By: Top Employers Institute (TEI)",
    description:
      "UFlex earned the Top Employer certification for its outstanding HR practices, employee development initiatives, and inclusive workplace culture. The TEI recognition is awarded to organisations that meet rigorous global standards in people strategy, leadership, and talent experience.",
  },
  {
    image: "/images/awards/b6.png",
    title: "ET Edge Top 100 CSOs – Mr. Jeevaraj Pillai",
    by: "By: ET Edge Global Sustainability Alliance",
    description:
      "UFlex’s Mr. Jeevaraj Pillai was named among the Top 100 CSOs for his leadership in driving sustainability strategy, innovation, and ESG alignment. The recognition honours global leaders who are shaping sustainable business models and accelerating responsible transformation across industries.",
  },

  {
    image: "/images/awards/b7.png",
    title: "SIES SOP Star Awards 2025",
    by: "By: SIES School of Packaging",
    description:
      "UFlex was honoured for outstanding packaging innovations that advance sustainability, functionality, and consumer convenience. Winning eight awards, including the prestigious President’s Sustainability Award, reflects UFlex’s commitment to environmentally responsible and high-performance packaging.",
  },
  {
    image: "/images/awards/b8.png",
    title: "Most Preferred Workplaces 2024–25",
    by: "By: Team Marksmen & India Today Group",
    description:
      "UFlex received this recognition for fostering a resilient, future-ready workplace driven by innovation, employee well-being, and strong cultural values. The award honours brands that excel in leadership, employee experience, and organisational development.",
  },
  {
    image: "/images/awards/b9.png",
    title: "Dream Employer of the Year – Multiple Categories",
    by: "By: World HRD Congress 2025",
    description:
      "UFlex was honoured across categories for exemplary HR processes, including training excellence, employee engagement, and HR technology adoption. These awards recognise organisations that prioritise learning culture, workforce transformation, and people-centric innovation.",
  },

  {
    image: "/images/awards/b10.png",
    title: "North India Best Employer Brand Award 2024",
    by: "By: Employer Branding Institute / World HRD Congress",
    description:
      "UFlex received this award for building a strong employer brand through innovative HR practices, leadership development, and employee engagement. It recognises organisations that align culture, communication, and talent strategy to create sustained workplace excellence.",
  },
  {
    image: "/images/awards/b11.png",
    title: "Sustainable Packaging Challenge Winner – PACK.NXT 2024",
    by: "By: PACK.NXT",
    description:
      "UFlex won this award for its next-generation sustainable packaging technologies designed to promote recyclability and reduce environmental impact. The recognition highlights leading innovations that support circularity and deliver practical, scalable sustainability solutions.",
  },
  {
    image: "/images/awards/b12.png",
    title: "ET Sustainable Organization 2023",
    by: "By: ET Edge",
    description:
      "UFlex Limited was recognised as an Economic Times Sustainable Organization 2023 for its contributions to sustainable development. This honour reflects the company’s ESG-driven growth, responsible manufacturing, and commitment to creating long-term value for all stakeholders.",
  },

  {
    image: "/images/awards/b13.png",
    title: "CII Industrial Innovation Award 2024 – Top 75 Innovators",
    by: "By: Confederation of Indian Industry (CII)",
    description:
      "UFlex was recognised as one of India’s Top 75 Most Innovative Companies for its technological advancements in packaging, recycling, and material science. The award evaluates innovation capability, product breakthroughs, and R&D impact across industries.",
  },
  {
    image: "/images/awards/b14.png",
    title: "Times Now Sustainable Organization 2024",
    by: "By: Times Now",
    description:
      "UFlex was honoured for integrating sustainability into core operations, advancing recyclable packaging, and promoting responsible resource use. The award celebrates companies demonstrating meaningful progress toward environmental protection and sustainable business growth.",
  },
  {
    image: "/images/awards/b15.png",
    title: "Innovation in Awareness – POSH Excellence Awards 2025",
    by: "By: National POSH Conclave & Excellence Awards",
    description:
      "UFlex received the award for its proactive efforts in creating awareness and strengthening workplace safety under POSH guidelines. It recognises organisations that promote respectful, secure, and gender-sensitive work environments through effective training and sensitisation initiatives.",
  },
];

export default function LeadershipAwards() {
  return (
    <section className="py-12">
      <div className="">


        <div
          className="
    grid
    gap-8
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    justify-items-center
    items-start
  "
        >

          {LEADERSHIP_AWARDS.map((item, idx) => (
            <article
              key={idx}
              className="flex w-full flex-col h-full"
            >
              {/* Image */}
              <div className="relative w-[360px] h-[350px] overflow-hidden rounded-md bg-white flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={360}
                  height={360}
                  className="max-h-full w-[360px] h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col pt-4">
                <h3
                  className="
        mb-2
       text-[14px] md:text-[18px] leading-relaxed lato-700
        text-[#117ABA]
        line-clamp-2
        min-h-[44px]
      "
                >
                  {item.title}
                </h3>

                <p className="mb-3 text-[16px] lato-400 text-black leading-[18px] h-[18px]">
                  {item.by}
                </p>

                <p className="text-[14px] md:text-[18px] leading-relaxed lato-400  lato-400 text-black line-clamp-8 min-h-[120px]">
                  {item.description}
                </p>
              </div>
            </article>

          ))}
        </div>
      </div>
    </section>
  );
}
