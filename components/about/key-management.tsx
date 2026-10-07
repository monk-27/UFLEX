


"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Director {
  name: string;
  position: string;
  bio: string;
  img: string;
}

const directors: Director[] = [
  { name: "Mr. Ashok Chaturvedi", position: "Founder, Chairman and Managing Director", img: "/images/hall/Ashok.webp", bio: "Mr. Ashok Chaturvedi is a first-generation entrepreneur and the founder of the UFlex Group. His dynamic leadership, long-term vision, and value-driven business strategy have established UFlex Limited as the largest flexible packaging and solutions company in India and a recognized global player in polymer sciences. He is considered the ‘Father of the flexible packaging industry in India’." },
  { name: "Mr. Anantshree Chaturvedi", position: "Vice Chairman and CEO", img: "/images/hall/ceo.webp", bio: "Mr. Anantshree Chaturvedi plays a pivotal role in driving UFlex’s global success, with extensive hands-on experience in flexible packaging across India, Mexico, Poland, Egypt, the UAE, and the USA. He was instrumental in expanding UFlex's footprint in the US and currently oversees global product stability, R&D, and HR protocols. In addition to his leadership position, he serves as the company’s Chief Cultural Officer, shaping the organization’s values and workplace culture. Mr. Chaturvedi is a graduate of Babson College, where he majored in finance, global strategic management, and economics. His strong educational foundation complements his extensive practical expertise, enabling him to lead UFlex’s operations effectively across diverse regions." },
  { name: "Mr. Apoorvshree Chaturvedi", position: "Director – Global Operations", img: "/images/imagea.jpg", bio: "Mr. Apoorvshree Chaturvedi oversees corporate sustainability initiatives focusing on ESG (Environmental, Social, and Governance) and growth ventures at UFlex Group. He leads the development and execution of strategic initiatives across all business verticals, driving the creation of a value-driven organization with a strong focus on socio-economic impact. An alumnus of New York University, Mr. Chaturvedi joined UFlex in 2012 as a Management Trainee in the Middle East. He later took on leadership roles, directing marketing and sales efforts for the European and Middle Eastern regions." },
  { name: "Mr. Arun Kumar Sharma", position: "President (Finance & Accounts) and CFO", img: "/images/arun-square.webp", bio: "A qualified Chartered Accountant, Mr. Arun Kumar Sharma has over three decades of experience in corporate finance, treasury, investor relations, risk management, financial restructuring, and business planning. Prior to joining UFlex, he was associated with the Jubilant Group, where he held leadership roles, including Chief Financial Officer across group companies and Head – Group Treasury, overseeing finance and treasury functions and supporting the Group's strategic initiatives." },
  {
    name: "Mr. Jeevaraj Gopal Pillai",
    position: "Whole Time Director, President - Flexible Packaging and New Product Development and Director– Sustainability",
    img: "/images/new/pillai.webp",
    bio: "Mr. Jeevaraj Pillai brings over 35 years of experience in packaging and packaging technology, with expertise in printing cylinders, packaging films, and advanced flexible packaging material conversion. As Director - Sustainability, he leads the development and implementation of the company’s ESG strategy, along with the development of sustainable products and solutions. His extensive background in the industry is complemented by his qualifications in mechanical engineering and an MBA.",
  },

  {
    name: "Dr. Chandan Chattaraj", position: "President – Human Resources (India & Global)",
    img: "/images/new/chandan.png",
    bio: "Dr. Chandan Chattaraj brings three decades of extensive experience across organizations such as Aircel, the Oberoi Group, Xerox India, and Jubilant Organosys, where he held various leadership roles. In addition to his professional achievements, he serves as a member of the Board of Governors for the International School of Business & Media, Pune, and is on the Corporate Advisory Board of Poornima University, Jaipur. He is an alumnus of the Xavier Institute of Social Service (XISS), Ranchi."
  },

  {
    name: "Mr. P. L. Sirsamkar", position: "Technical & New Product Development (Films Business)",
    img: "/images/new/pl.png",
    bio: "Mr. Sirsamkar has been with the UFlex Group for over 26 years. He has previously worked with leading organizations such as Garware and Polyplex. With nearly four decades of experience in the packaging films industry, he has been instrumental in expanding the film plant globally and has played a key role in driving the operations and development of value-added packaging films. Mr. Sirsamkar holds a degree in instrumentation and electronics engineering."
  },

  {
    name: "Mr. Dinesh Jain", position: "President – Legal & Corporate Affairs",
    img: "/images/new/din.jpg",
    bio: "With over four decades of industry experience, Mr. Dinesh Jain has been with the UFlex Group for more than 29 years. He is responsible for overseeing legal and corporate affairs, as well as leading the Group&rsquo;s corporate social responsibility initiatives. In addition to his professional responsibilities, Mr. Jain serves on the managing committees of several social organizations and educational institutions, including IMS Ghaziabad and IMS Noida. He holds an MBA and an LLM from Agra University."
  },

  {
    name: "Mr. Anand Kanodia", position: "Joint President – Finance",
    img: "/images/new/anand.png",
    bio: "A seasoned finance leader with close to three decades of diverse experience across manufacturing sectors. He has held key roles in reputed organizations such as Dalmia Cement, Acme Solar, and Bajaj Hindustan, and currently serves as Joint President- Finance at UFlex Limited."
  },

  {
    name: "Mr. Sumeet Kumar", position: "Executive Vice President – Finance",
    img: "/images/new/sumit.jpg",
    bio: "Mr. Sumeet Kumar is a seasoned finance professional with over three decades of leadership experience across prominent corporate groups such as LANCO Group, Global Group, and Hi-Tech Gears Group. He has held key roles including President, CFO, and Group CFO, and brings deep expertise in project and corporate finance, fundraising, M&A, financial planning and control, treasury, and investor relations."
  },
];

const emblaOptions: EmblaOptionsType = {
  loop: false,            // simple slider
  align: "start",
  containScroll: "trimSnaps",
};

const KeyManagement = () => {
  const [selected, setSelected] = useState<Director | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);
  const getSlidesToScroll = () => {
    if (typeof window === "undefined") return 1;

    if (window.innerWidth >= 768) return 4;   // md
    if (window.innerWidth >= 640) return 2;   // sm
    return 1;                                 // mobile
  };

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    const slides = getSlidesToScroll();
    emblaApi.scrollTo(emblaApi.selectedScrollSnap() - slides);
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    const slides = getSlidesToScroll();
    emblaApi.scrollTo(emblaApi.selectedScrollSnap() + slides);
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <>
      <section className="bg-[#97c3ef] mt-[30px] px-4 py-0 text-center sm:mt-16  sm:pt-12 md:px-12">
        <div className="mx-auto max-w-7xl  md:px-8">
          <h2 className="text-[24px] lato-700 text-[#173366] md:text-[42px]  text-start mb-12">
          Leadership
          </h2>

          <div className="relative">


            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex gap-8">
                {directors.map((d, i) => (
                  <article
                    key={d.name}
                    className="
                    group relative min-w-0
                    flex-[0_0_100%]
                    sm:flex-[0_0_50%]
                    md:flex-[0_0_23%]
                    overflow-hidden rounded-[10px] 
                    transition-colors duration-300 
                  "
                  >
                    <div className="relative flex h-full flex-col">
                      <div className="relative aspect-[4.2/4.2] w-full overflow-hidden  bg-[#c8eef4 ">
                        {/* <Image
                                              src={d.img}
                                              alt={d.name}
                                              fill
                                              sizes="(max-width:640px) 85vw, (max-width:1024px) 46vw, (max-width:1280px) 30vw, 23vw"
                                              className="object-fit transition duration-500 ease-out group-hover:scale-[1.03] bg-[#c8eef4]"
                                              priority={i < 2}
                                            /> */}
                        <Image
                          src={d.img}
                          alt={d.name}
                          fill
                          sizes="(max-width:640px) 85vw, (max-width:1024px) 46vw, (max-width:1280px) 30vw, 23vw"
                          className={`transition duration-500 ease-out group-hover:scale-[1.03] bg-[#c8eef4] ${i === 2 || i === 3 ? "object-contain" : "object-fit"
                            }`}
                          priority={i < 2}
                        />
                      </div>

                      <div className="flex flex-1 flex-col  pb-2 pt-5 text-center">
                        <p className="text-[1.25rem] leading-tight text-[#173366] transition-colors duration-300 group-hover:text-[#10386f] lato-700">
                          {d.name}
                        </p>
                        <p className="mt-3 text-[1rem] leading-snug text-black transition-colors duration-300 group-hover:text-[#102b57]">
                          {d.position}
                        </p>
                      </div>
                    </div>
                    <button
                      aria-label={`Open ${d.name}`}
                      onClick={() => setSelected(d)}
                      className="absolute inset-0"
                      tabIndex={-1}
                    />
                  </article>
                ))}
              </div>
            </div>


          </div>
          <div className="flex items-center justify-center mt-6 pt-6 gap-6 ">

            <button
              // onClick={() => emblaApi?.scrollPrev()}
              onClick={scrollPrev}
              disabled={!canPrev}
              aria-label="Previous"
              className=" z-10 -translate-y-1/2 inline-flex items-center justify-center
             rounded-full border border-gray-600 bg-white/80 p-3 shadow-sm
             opacity-50 hover:opacity-100 transition md:left-0"
            >
              <ChevronLeft className="h-5 w-5 text-gray-400" />
            </button>
            <button
              // onClick={() => emblaApi?.scrollNext()}
              onClick={scrollNext}
              disabled={!canNext}
              aria-label="Next"
              className=" z-10 -translate-y-1/2 inline-flex items-center justify-center
             rounded-full border border-gray-600 bg-white/80 p-3 shadow-sm
             opacity-50 hover:opacity-100 transition md:right-0"
            >
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- Modal: smaller image layout ---------------- */}
              {selected && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 animate-in fade-in duration-200"
            onClick={() => setSelected(null)}
          >
            <div
              className="relative w-full max-w-3xl grid grid-cols-1 md:grid-cols-[38%_62%] border border-gray-200 bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-400"
              >
                <X className="h-5 w-5 text-black" />

              </button>

              {/* Smaller, square image */}
              <div className="p-4">
                <div className="relative aspect-square w-full ">
                  <Image src={selected.img} alt={selected.name} fill className="object-contain bg-[#c8eef4]" />
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black">{selected.name}</h3>
                <p className="mt-1 lato-700 text-[#173366]">{selected.position}</p>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-black">
                  {selected.bio}
                </p>
                {/* <div className="mt-6">
                  <button
                    onClick={() => setSelected(null)}
                    className="bg-[#173366] text-white px-4 py-2 text-sm hover:bg-[#0f6aa4] transition"
                  >
                    Close
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        )}
    </>
  );
}
export default KeyManagement;

