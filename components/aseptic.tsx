import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { SiteFooter } from './site-footer'
import Image from 'next/image'
import { OverlayModule, OverlayModules } from './overlay'
import { Leader, LeaderSpotlight } from './leader'
import { AwardItem, AwardsAccolades } from './awards'
import Accreditions, { AccreditationItem } from './accredition'
import AccreditationsSlider from './accredition'

import { AwardsSection } from './buissnessreusbales/AwardsSection'
import { CaseStudySection } from './buissnessreusbales/case-studies'
import { InnovationSlider } from './buissnessreusbales/InnovationSlider'
import Keypeople from './buissnessreusbales/keypeople'
import { SustainabilitySection } from './buissnessreusbales/SustainabilitySection'
import { BusinessConfig } from '@/app/business/data'
import SliderCarousel, { SliderItem } from './slidercomp'
import SimpleCarousel from './slidercomp'
import { ReadMoreDialog } from './expandabletext'




const SliderItems: SliderItem[] = [
  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-05023500235.jpg",
    title: "Aseptic Cartons",
    dynamiclink: "/aseptic-packaging-business/aseptic-Our-Offerings",

    desc: "Our aseptic liquid packaging cartons encompass six layers of protection that keeps the freshness preserved.",
  },
  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-05023510235.jpg",
    title: "A SIP",
    dynamiclink: "/aseptic-packaging-business/aseptic-Our-Offerings",


    desc: "India’s first food-grade and moisture-resistant U-shaped paper straw that is 100% recyclable.",
  },
  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-05023520235.jpg",
    title: "Filling Machines",
    dynamiclink: "/aseptic-packaging-business/aseptic-Our-Offerings",


    desc: "A range of machines that are at the core of the aseptic beverage production and packaging line.",
  },

  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-05023530235.jpg",
    title: "Asepto Pro",
    dynamiclink: "/aseptic-packaging-business/aseptic-Our-Offerings",


    desc: "Technical assistance, skill enhancement services, quality assurance, performance management, and remote assistance for machines.",
  },

  {
    img: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item5-05023540235.jpg",
    title: "Asepto Design",
    dynamiclink: "/aseptic-packaging-business/aseptic-Our-Offerings",

    desc: "The creative powerhouse within Asepto, dedicated to shaping the visual identity of your products.",
  },

  // ...add the rest
];





const packagingData = [
  {
    "id": "holography",
    title: "Aseptic Packaging",
    image: "/images/3.png",
    "imageAlt": "UFlex Aseptic Packaging Solutions",
    paragraphs: [
      `Asepto, the Aseptic Packaging brand
of UFlex, is the world’s fastest-
growing aseptic packaging company,
proudly serving over 200 esteemed
clients across more than 40
countries.`,
      `As a leading provider of end-to-end
aseptic liquid packaging solutions, we
offer innovative designs, six-layered
cartons, highly advanced filling
machines, and exceptional service
from highly trained engineers. In
alignment with the Government’s
Make in India initiative, our state-
of-the-art manufacturing facility in
Sanand, Gujarat, spans 21 acres
within a 72-acre land parcel and
boasts a production capacity of 12
billion packs annually.`,
      `Our packaging solutions are designed
for ultimate user convenience, easy
opening, and maximum shelf life for
products such as juices, non-aerated
alcoholic beverages, and highly
perishable liquids like milk and dairy
products. Through innovative
technology and advanced converting
machines, we deliver superior
aseptic packaging that meets the
highest industry standards. Our
product portfolio, including the
Pillow Pack, Trio Pack, and Brick
Pack, fulfils 90% of the domestic
demand for aseptic liquid packaging,
making Asepto the preferred choice
in India.`
    ]
  }

];


export const businesses: BusinessConfig[] = [
  {
    key: "aseptic",
    label: "Aseptic Packaging",
    hero: {
      heading: "Our Businesses",
      image: "/images/3.png",
      body:
        "Asepto, the Aseptic Packaging brand of UFlex, is the world's fastest-growing aseptic packaging company, proudly serving over 200 esteemed clients across more than 40 countries. As a leading provider of end-to-end aseptic liquid packaging solutions, we offer innovative designs, six-layered cartons, highly advanced filling machines, and exceptional service from highly trained engineers.",
    },

    offerings: {
      heading: "Our Offerings",
      items: [
        {
          id: "aseptic-cartons",
          title: "Aseptic Cartons",
          image: "/images/asepcticcartons.png",
          description:
            "High-performance polyester films for diverse packaging applications.",
        },
        {
          id: "sip",
          title: "A Sip",
          image: "/images/asip.png",
          description:
            "Biaxially oriented polypropylene films for flexible packaging.",
        },
        {
          id: "filling-machines",
          title: "Filling Machines",
          image: "/images/filling.png",
          description:
            "Cast polypropylene films for specialty and general packaging.",
        },
        {
          id: "asepto-pro",
          title: "Asepto Pro",
          image: "/images/aseptopro.png",
          description:
            "Cast polypropylene films for specialty and general packaging.",
        },
      ],
    },

    innovations: {
      heading: "Business Highlights and Innovations",
      items: [
        {
          id: "first-aseptic-carton-package",
          title: "India’s First Aseptic Carton Package",
          description:
            "As the first aseptic carton package in India featuring 5% certified recycled polymers, and the first paper-based beverage carton producer in the country to use recycled plastic, UFlex is setting new benchmarks in sustainable packaging, supporting circularity, resource efficiency, and reduced environmental impact.",
          image: "/images/invp.png",
        },
        {
          id: "holography-stamping-foils",
          title: "Holography and Stamping Foils",
          description:
            "Flex continues to set global benchmarks through advanced infrastructure, technical excellence, advanced R&D, and deep market intelligence, ensuring world-class quality and innovation across its offerings. Our state-of-the-art in-house manufacturing facilities, equipped with Origination, Coatings, Metallizers, and Slitting machines, enable advanced transfer technology, enhancing both surface appeal and tactile experience.",
          image: "/images/invps.png",
        },
      ],
    },
    sustainability: {
      title: "Sustainability",
      description:
        "At Asepto, sustainability isn't just a commitment; it's a driving force behind innovation. Asepto brings a sustainable solution to this pressing concern of aseptic cartons reaching landfills. With their proper extraction and assimilation, Asepto paves the way for a Circular Economy. ",
      image: "/images/sus.png",
      linkLabel: "Know more",
      linkHref: "/aseptic-packaging-business/sustainability",
    },
    keypeople: {
      title: "Key People",
      details: [
        {
          photo: "/images/ashwani.png",
          name: "Mr. Ashwani K. Sharma",
          role: "President and CEO, Aseptic packaging business",
          summary:
            "Mr. Ashwani Sharma brings with him almost three decades of rich and diverse experience in leading large organizations across the globe. He has held several senior leadership roles in the pulp, paper, and packaging industries, combining strategic vision with deep operational expertise.Prior to joining UFlex, Mr. Sharma served as Managing Director at Asia Pulp & Paper (APP), a USD 25 billion company headquartered in Jakarta. His global exposure includes a tenure in Europe as CEO and Chairman of the Board at Horizon Pulp & Paper, and leadership of APP’s business in the United States as Business Head for both the north and south regions. In India, he held key leadership roles as CEO and Senior President at Century Pulp & Paper (BK Birla Group) and Ballarpur Industries.At UFlex, Mr. Sharma currently heads the Aseptic Packaging Business under the brand ‘Asepto’—India’s first and only manufacturer in the aseptic packaging segment. Under his leadership, Asepto continues to drive innovation and excellence in this fast-growing market.Mr. Sharma holds an MBA and is a graduate in Mathematics and Chemistry, bringing a strong academic foundation to his strategic and operational endeavors.",
          cta: { label: "Read More", href: "/leadership/ashwani-sharma" },
        },
      ],
    },

    awards: {
      title: "Awards & Accolades",
      description:
        "Our circular initiatives and recycling programmes have been recognised by leading global industry bodies, reflecting Asepto’s commitment to responsible and sustainable packaging. These recognitions highlight our consistent efforts to reduce waste, improve material efficiency, and support recycling across our operations.",
      image: "/images/awards.png",
      linkLabel: "Know more",
      linkHref: "/hall-of-fame",
    },
    accreditation: [
      { image: "/images/accc4.png" },
      { image: "/images/accc5.png" },
      { image: "/images/accc6.png" },
      { image: "/images/accc7.png" },
    ],
  },





];
type Props = {
  business: BusinessConfig;
};
const AsepticComp: React.FC<Props> = ({ business }) => {
  const [open, setOpen] = useState(false);

  return (





    <div>


      {/* HERO */}
      <section className='bg-white pt-4 sm:pt-12'>
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-4">
            <div className="grid py-4 lg:grid-cols-2 lg:py-1  gap-10">
              {/* <div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-[24px] lato-400 text-[#117ABA] md:text-[28px] "
                                >
                                    Aseptic Packaging

                                </motion.h1>

                                {packagingData.map((section, idx) => (
                                    <ExpandableText
                                        key={idx}
                                        modalTitle={section.title}
                                        imageSrc={section.image}
                                        imageAlt={section.title}
                                        paragraphs={section.paragraphs}
                                    />
                                ))}
                            </div> */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[18px] lato-700 text-[#117ABA] md:text-[28px]"
                >
                  Aseptic Packaging
                </motion.h1>

                <p className="text-wrap max-w-xl lato-400 text-[16px] sm:text-[18px] leading-relaxed text-[#4f4f4f]">
                  {packagingData[0].paragraphs[0]}
                </p>

                <button
                  onClick={() => setOpen(true)}
                  className="mt-4 lato-700 text-[14px] text-[#117ABA]  hover:underline"
                >
                  Read more 
                <span aria-hidden>↗</span>

                </button>

                {/* ---- Modal ---- */}
                <ReadMoreDialog
                  open={open}
                  onClose={() => setOpen(false)}
                  title={packagingData[0].title}
                  imageSrc={packagingData[0].image}
                  imageAlt={packagingData[0].title}
                  paragraphs={packagingData[0].paragraphs}
                />

              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[16/10] w-full overflow-hidden "
              >
                <Image
                  src="/images/3.png"
                  alt="UFlex capabilities across the value chain"
                  fill
                  className="object-cover rounded-sm"
                  priority
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
              </motion.div>
            </div>
            <SimpleCarousel heading="Our Offerings" items={SliderItems} imageHeight={280} />


            {/* {business.innovations && (
              <InnovationSlider
                heading={business.innovations.heading}
                items={business.innovations.items}
              />
            )} */}
            <SustainabilitySection data={business.sustainability} />

            {(business.keypeople) && (
              <Keypeople
                title={business.keypeople.title}
                people={business.keypeople.details}
              />
            )}

            {business.caseStudies && business.caseStudies.length > 0 && (
              <CaseStudySection
                sectionTitle="Case Studies"
                imageSrc="/images/chemcase.png"
                items={business.caseStudies}
              />
            )}
            <AwardsSection data={business.awards} />

            <AccreditationsSlider items={business.accreditation ?? []} />
          </div>
        </div>






      </section>
    </div>
  )
}

export default AsepticComp
